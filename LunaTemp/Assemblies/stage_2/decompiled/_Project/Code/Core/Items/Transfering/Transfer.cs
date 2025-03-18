using _Project.Code.Core.Items.Inventory;

namespace _Project.Code.Core.Items.Transfering
{
	public class Transfer
	{
		public ItemInventory Sender { get; }

		public ItemInventory Receiver { get; }

		public Transfer(ItemInventory sender, ItemInventory receiver)
		{
			Sender = sender;
			Receiver = receiver;
		}
	}
}
