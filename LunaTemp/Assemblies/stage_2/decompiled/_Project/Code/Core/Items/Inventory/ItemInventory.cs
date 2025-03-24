using System;
using System.Collections.Generic;
using _Project.Code.Tutorial;
using UnityEngine;

namespace _Project.Code.Core.Items.Inventory
{
	public class ItemInventory : MonoBehaviour, IStorage
	{
		private Stack<Item> _collectables = new Stack<Item>();

		[SerializeField]
		private ItemType _type;

		[SerializeField]
		private InventoryType _inventory;

		[SerializeField]
		private int _capacity = 50;

		public ItemType ItemType => _type;

		public InventoryType InventoryType => _inventory;

		public int Count => _collectables.Count;

		public bool IsEmpty => Count <= 0;

		public int Capacity => _capacity;

		public event Action<Item> Added;

		public event Action<Item> Removed;

		public bool CanAdd()
		{
			return _collectables.Count < _capacity;
		}

		public bool CanGet()
		{
			return _collectables.Count > 0;
		}

		public void Add(Item collectable)
		{
			Debug.Log($"Adding {collectable.Type} to {_type} storage");
			if (!CanAdd())
			{
				throw new OperationCanceledException($"Cant add to {_type} storage");
			}
			_collectables.Push(collectable);
			this.Added?.Invoke(collectable);
		}

		public void SetCapacity(int capacity)
		{
			_capacity = capacity;
		}

		public Item Get()
		{
			if (!CanGet())
			{
				throw new InvalidOperationException("Storage is empty");
			}
			Item collectable = _collectables.Pop();
			this.Removed?.Invoke(collectable);
			return collectable;
		}

		public bool TryGet(out Item collectable)
		{
			if (!CanGet())
			{
				collectable = null;
				return false;
			}
			collectable = _collectables.Pop();
			return true;
		}

		public void SetType(ItemType type)
		{
			_type = type;
		}

		public void SetOperation(InventoryType type)
		{
			_inventory = type;
		}
	}
}
