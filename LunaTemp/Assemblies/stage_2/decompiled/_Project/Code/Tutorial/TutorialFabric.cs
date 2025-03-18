using _Project.Code.Core.Animations;
using _Project.Code.Core.Buyables;
using _Project.Code.Core.Items;
using _Project.Code.Entry;
using _Project.Code.Services.CoroutineRunner;
using UnityEngine;

namespace _Project.Code.Tutorial
{
	public class TutorialFabric : MonoBehaviour
	{
		[SerializeField]
		private VariableJoystick _joystick;

		[SerializeField]
		private Transform _joystickHandle;

		[SerializeField]
		private GameObject _joystickGuide;

		[SerializeField]
		private Transform _storageSpawnPoint;

		[SerializeField]
		private Buyable _tableBuyable;

		[SerializeField]
		private Transform _arrowHolder;

		[SerializeField]
		private Transform _arrow;

		[SerializeField]
		private Transform _point1;

		[SerializeField]
		private Transform _point2;

		private ICoroutineRunner _coroutineRunner;

		private IStorageFabric _storageFabric;

		public void Init(ICoroutineRunner coroutineRunner, IStorageFabric storageFabric)
		{
			_coroutineRunner = coroutineRunner;
			_storageFabric = storageFabric;
		}

		public IFiniteState CreateTutorial()
		{
			return new Tutorial(_coroutineRunner, Create, _joystick, new TweenEnable(AnimationsFactory.CreateInfinitySign(_joystickHandle, 1.5f)), _joystickGuide, new TutorialArrow(_arrowHolder, _arrow, _point1, _point2), _tableBuyable);
			IStorage Create()
			{
				return _storageFabric.CreateNew(_storageSpawnPoint.position, ItemType.Coin, 10);
			}
		}
	}
}
