using System.Collections.Generic;
using _Project.Code.Core.Collision;
using _Project.Code.Core.Harvesting;
using _Project.Code.Core.Items.Handlers;
using _Project.Code.Core.Items.Inventory;
using _Project.Code.Core.Items.Transfering;
using _Project.Code.Services.CoroutineRunner;
using _Project.Code.Services.Input;
using _Project.Code.Services.ServiceLocator;
using UnityEngine;

namespace _Project.Code.Core.Character
{
	public class CharacterInstaller : MonoBehaviour
	{
		[SerializeField]
		private Mover _mover;

		[SerializeField]
		private OverlapCollisionDetector _castingDetector;

		[SerializeField]
		private CharacterAnimator _animator;

		[SerializeField]
		private List<ItemInventory> _storages;

		public void Start()
		{
			MoveInput input = L.Resolve<MoveInput>();
			CoroutineRunner coroutineRunner = L.Resolve<CoroutineRunner>();
			_mover.Init(input);
			InventoryProvider provider = new InventoryProvider(_storages);
			Harvester harvester = new Harvester(_castingDetector);
			ItemTransferer itemTransferer = new ItemTransferer();
			InventoryTransferer inventoryTransferer = new InventoryTransferer(coroutineRunner);
			ItemCollisionHandler itemHandler = new ItemCollisionHandler(_castingDetector, provider, itemTransferer);
			InventoryCollisionHandler inventoryHandler = new InventoryCollisionHandler(_castingDetector, provider, inventoryTransferer);
		}

		private void Update()
		{
			_animator.SetDirection(_mover.Direction);
		}
	}
}
