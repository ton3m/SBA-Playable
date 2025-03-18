using System;
using System.Collections.Generic;
using System.Linq;
using _Project.Code.Core.Items;
using UnityEngine;

namespace _Project.Code.Services.ItemsCreation
{
	public class ItemsCreator : MonoBehaviour
	{
		[SerializeField]
		private List<Item> _prefabs;

		public Item Create(ItemType type)
		{
			Item prefab = _prefabs.FirstOrDefault((Item p) => p.Type == type);
			if ((object)prefab == null)
			{
				throw new NullReferenceException("No prefab for type " + type);
			}
			return UnityEngine.Object.Instantiate(prefab, Vector3.zero, Quaternion.identity);
		}
	}
}
