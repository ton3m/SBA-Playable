using System;
using System.Collections.Generic;
using _Project.Code.Core.Items;
using DG.Tweening;
using UnityEngine;

namespace _Project.Code.Services.ItemsCreation
{
	public class Dropper
	{
		private readonly ItemsCreator _creator;

		public Dropper(ItemsCreator creator)
		{
			_creator = creator;
		}

		public void CreateDrop(ItemType type, Vector3 position, int count = 4)
		{
			List<Item> items = new List<Item>(count);
			for (int j = 0; j < count; j++)
			{
				Item item = _creator.Create(type);
				item.transform.position = position;
				item.transform.rotation = Quaternion.Euler(0f, 0f, UnityEngine.Random.Range(0, 360));
				item.enabled = false;
				items.Add(item);
			}
			Animate(items, delegate
			{
				items.ForEach(delegate(Item i)
				{
					i.enabled = true;
				});
			});
		}

		private void Animate(IEnumerable<Item> items, Action onCompleted = null)
		{
			float duration = 0.3f;
			float radius = 0.3f;
			float power = 0.3f;
			int jumps = 1;
			Sequence sequence = DOTween.Sequence();
			foreach (Item item in items)
			{
				Vector3 pointOnCircle = UnityEngine.Random.insideUnitCircle.normalized;
				Vector3 targetPosition = item.transform.position + pointOnCircle * radius;
				sequence.Join(item.transform.DOJump(targetPosition, power, jumps, duration));
			}
			sequence.OnComplete(delegate
			{
				onCompleted?.Invoke();
			}).Play();
		}
	}
}
