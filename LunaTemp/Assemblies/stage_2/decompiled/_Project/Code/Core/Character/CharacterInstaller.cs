using System.Collections.Generic;
using _Project.Code.Core.Collision;
using _Project.Code.Core.Harvesting;
using _Project.Code.Core.Items.Handlers;
using _Project.Code.Core.Items.Inventory;
using _Project.Code.Core.Items.Transfering;
using _Project.Code.Services.CoroutineRunner;
using _Project.Code.Services.Input;
using UnityEngine;

namespace _Project.Code.Core.Character
{
	public class CharacterInstaller : MonoBehaviour
	{
		[SerializeField]
		private Mover _mover;

		[SerializeField]
		private CollisionDetector _detector;

		[SerializeField]
		private CharacterAnimator _animator;

		[SerializeField]
		private List<ItemInventory> _storages;

		public void Init(IMoveInput input, ICoroutineRunner coroutineRunner)
		{
			_mover.Init(input);
			InventoryProvider provider = new InventoryProvider(_storages);
			Harvester harvester = new Harvester(_detector);
			ItemTransferer itemTransferer = new ItemTransferer();
			InventoryTransferer inventoryTransferer = new InventoryTransferer(coroutineRunner);
			ItemCollisionHandler itemHandler = new ItemCollisionHandler(_detector, provider, itemTransferer);
			InventoryCollisionHandler inventoryHandler = new InventoryCollisionHandler(_detector, provider, inventoryTransferer);
		}

		private void Update()
		{
			_animator.SetDirection(_mover.Direction);
		}
	}
}
