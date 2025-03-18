using _Project.Code.Core.Items;
using _Project.Code.Core.Items.Inventory;
using _Project.Code.Tutorial;
using UnityEngine;

namespace _Project.Code.Entry
{
	public class StorageFabric : MonoBehaviour, IStorageFabric
	{
		[SerializeField]
		private ItemInventory _inventoryPrefab;

		[SerializeField]
		private Item _coinPrefab;

		public IStorage CreateNew(Vector3 position, ItemType type, int count)
		{
			ItemInventory storage = Object.Instantiate(_inventoryPrefab, position, Quaternion.identity);
			storage.SetType(type);
			storage.SetOperation(InventoryType.Sender);
			for (int i = 0; i < count; i++)
			{
				storage.Add(Instantiate(type));
			}
			return storage;
		}

		public Item Instantiate(ItemType type)
		{
			return Object.Instantiate(_coinPrefab);
		}
	}
}
