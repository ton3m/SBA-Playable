using System;
using System.Collections.Generic;

namespace Assets.CourseGame.Develop.DI
{
	public class DIContainer : IDisposable
	{
		public class Registration
		{
			public Func<DIContainer, object> Creator { get; }

			public object Instance { get; set; }

			public bool IsNonLazy { get; private set; }

			public Registration(object instance)
			{
				Instance = instance;
			}

			public Registration(Func<DIContainer, object> creator)
			{
				Creator = creator;
			}

			public void NonLazy()
			{
				IsNonLazy = true;
			}
		}

		private readonly Dictionary<Type, Registration> _container = new Dictionary<Type, Registration>();

		private readonly DIContainer _parent;

		private readonly List<Type> _requests = new List<Type>();

		public DIContainer()
			: this(null)
		{
		}

		public DIContainer(DIContainer parent)
		{
			_parent = parent;
		}

		public Registration RegisterAsSingle<T>(Func<DIContainer, T> creator)
		{
			if (IsAlreadyRegister<T>())
			{
				throw new InvalidOperationException($"{typeof(T)} already register");
			}
			Registration registration = new Registration((DIContainer container) => creator(container));
			_container[typeof(T)] = registration;
			return registration;
		}

		public bool IsAlreadyRegister<T>()
		{
			if (_container.ContainsKey(typeof(T)))
			{
				return true;
			}
			if (_parent != null)
			{
				return _parent.IsAlreadyRegister<T>();
			}
			return false;
		}

		public T Resolve<T>()
		{
			if (_requests.Contains(typeof(T)))
			{
				throw new InvalidOperationException($"Cycle resolve for {typeof(T)}");
			}
			_requests.Add(typeof(T));
			try
			{
				if (_container.TryGetValue(typeof(T), out var registration))
				{
					return CreateFrom<T>(registration);
				}
				if (_parent != null)
				{
					return _parent.Resolve<T>();
				}
			}
			finally
			{
				_requests.Remove(typeof(T));
			}
			throw new InvalidOperationException($"Registration for {typeof(T)} not exist");
		}

		public void Initialize()
		{
			foreach (Registration registration in _container.Values)
			{
				if (registration.Instance == null && registration.IsNonLazy)
				{
					registration.Instance = registration.Creator(this);
				}
				if (registration.Instance != null && registration.Instance is IInitializable initializable)
				{
					initializable.Initialize();
				}
			}
		}

		public void Dispose()
		{
			foreach (Registration registration in _container.Values)
			{
				if (registration.Instance != null && registration.Instance is IDisposable disposable)
				{
					disposable.Dispose();
				}
			}
		}

		private T CreateFrom<T>(Registration registration)
		{
			if (registration.Instance == null && registration.Creator != null)
			{
				registration.Instance = registration.Creator(this);
			}
			return (T)registration.Instance;
		}
	}
}
