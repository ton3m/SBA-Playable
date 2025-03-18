using System;
using UnityEngine;

namespace _Project.Code.Core.Collision
{
	public class CollisionDetector : MonoBehaviour, ICollisionDetector
	{
		public event Action<Collider2D, CollisionType> Triggered;

		public event Action<Collider2D> TriggerEnter;

		public event Action<Collider2D> TriggerStay;

		public event Action<Collider2D> TriggerExit;

		private void OnTriggerEnter2D(Collider2D other)
		{
			Handle(other, CollisionType.Enter);
		}

		private void OnTriggerStay2D(Collider2D other)
		{
			Handle(other, CollisionType.Stay);
		}

		private void OnTriggerExit2D(Collider2D other)
		{
			Handle(other, CollisionType.Exit);
		}

		private void Handle(Collider2D other, CollisionType type)
		{
			this.Triggered?.Invoke(other, type);
			switch (type)
			{
			case CollisionType.Enter:
				this.TriggerEnter?.Invoke(other);
				break;
			case CollisionType.Stay:
				this.TriggerStay?.Invoke(other);
				break;
			case CollisionType.Exit:
				this.TriggerExit?.Invoke(other);
				break;
			}
		}
	}
}
