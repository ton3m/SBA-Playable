using System.Collections.Generic;
using System.Linq;
using _Project.Code.Core.Harvesting;
using _Project.Code.Core.Items;
using _Project.Code.Services.CoroutineRunner;
using _Project.Code.Services.Input;
using _Project.Code.Services.ItemsCreation;
using _Project.Code.Services.ServiceLocator;
using Assets.CourseGame.Develop.DI;
using UnityEngine;

namespace _Project.Code.Entry
{
	[RequireComponent(typeof(CoroutineRunner))]
	public class EntryPoint : MonoBehaviour
	{
		[SerializeField]
		private Joystick _joystick;

		[SerializeField]
		private List<Item> _itemPrefabs;

		private CoroutineRunner _coroutineRunner;

		private void Awake()
		{
			L.Container = new DIContainer();
			L.Reg((DIContainer _) => GetComponent<CoroutineRunner>());
			L.Reg((DIContainer _) => new MoveInput(_joystick));
			L.Reg((DIContainer _) => new ItemsCreator(_itemPrefabs));
			L.Reg((DIContainer c) => new Dropper(c.Resolve<ItemsCreator>()));
			L.Reg((DIContainer c) => new FieldsDropper(c.Resolve<Dropper>(), GetFields()));
			L.Container.Initialize();
		}

		private void OnDestroy()
		{
			L.Container.Dispose();
			L.Container = null;
		}

		private List<Field> GetFields()
		{
			return Object.FindObjectsOfType<Field>().ToList();
		}
	}
}
