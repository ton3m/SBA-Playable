using System;
using Assets.CourseGame.Develop.DI;

namespace _Project.Code.Services.ServiceLocator
{
	public class L
	{
		private static DIContainer _container;

		public static DIContainer Container
		{
			get
			{
				return _container ?? throw new InvalidOperationException("ServiceLocator not initialized.");
			}
			set
			{
				_container = value;
			}
		}

		public static void Init(DIContainer container)
		{
			_container = container;
		}

		public static DIContainer.Registration Reg<TService>(Func<DIContainer, TService> creator)
		{
			return _container.RegisterAsSingle(creator);
		}

		public static TService Resolve<TService>()
		{
			return _container.Resolve<TService>();
		}
	}
}
