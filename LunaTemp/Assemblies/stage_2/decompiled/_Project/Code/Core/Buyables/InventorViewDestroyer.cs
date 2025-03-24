using _Project.Code.Core.Items;
using _Project.Code.Core.Items.Inventory;
using UnityEngine;

namespace _Project.Code.Core.Buyables
{
	public class InventorViewDestroyer : BaseInventoryView
	{
		protected override void OnRemoved(Item item)
		{
		}

		protected override void OnAdded(Item item)
		{
			Object.Destroy(item.gameObject);
		}
	}
}
