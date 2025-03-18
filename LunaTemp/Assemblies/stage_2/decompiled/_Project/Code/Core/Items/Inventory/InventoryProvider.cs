using System.Collections.Generic;
using System.Linq;

namespace _Project.Code.Core.Items.Inventory
{
	public class InventoryProvider
	{
		private readonly List<ItemInventory> _storages;

		public InventoryProvider(List<ItemInventory> storages)
		{
			_storages = storages;
		}

		public bool HasStorage(ItemType type)
		{
			return _storages.Any((ItemInventory s) => s.ItemType == type);
		}

		public bool TryGetStorage(ItemType type, out ItemInventory inventory)
		{
			inventory = _storages.FirstOrDefault((ItemInventory s) => s.ItemType == type);
			return inventory != null;
		}
	}
}
