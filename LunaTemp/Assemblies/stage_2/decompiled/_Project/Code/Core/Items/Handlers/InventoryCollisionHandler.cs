using System;
using _Project.Code.Core.Collision;
using _Project.Code.Core.Items.Inventory;
using _Project.Code.Core.Items.Transfering;
using UnityEngine;

namespace _Project.Code.Core.Items.Handlers
{
	public class InventoryCollisionHandler : IDisposable
	{
		private readonly CollisionDetector _detector;

		private readonly InventoryProvider _provider;

		private readonly InventoryTransferer _inventoryTransferer;

		public InventoryCollisionHandler(CollisionDetector detector, InventoryProvider provider, InventoryTransferer inventoryTransferer)
		{
			_provider = provider;
			_detector = detector;
			_inventoryTransferer = inventoryTransferer;
			_detector.Triggered += OnTriggered;
		}

		public void Dispose()
		{
			_detector.Triggered -= OnTriggered;
		}

		private void OnTriggered(Collider2D obj, CollisionType type)
		{
			if (obj.TryGetComponent<ItemInventory>(out var inventory) && inventory.enabled)
			{
				ItemInventory provided;
				if (type == CollisionType.Exit && _inventoryTransferer.HasConnectionFor(inventory))
				{
					_inventoryTransferer.Disconnect();
				}
				else if (_provider.TryGetStorage(inventory.ItemType, out provided))
				{
					bool result = _inventoryTransferer.TrySetConnection(provided, inventory);
					Debug.Log($"Connecting {inventory.ItemType} to {provided.ItemType}: " + (result ? "Connected" : "Failed"));
				}
			}
		}
	}
}
