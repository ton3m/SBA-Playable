using System;
using UnityEngine;

namespace _Project.Code.Core.Collision
{
	public class OverlapCollisionDetector : MonoBehaviour, ICollisionDetector
	{
		[SerializeField]
		private float detectionRadius = 1f;

		[SerializeField]
		private LayerMask collisionMask;

		private Collider2D[] _previousColliders = new Collider2D[40];

		private Collider2D[] _currentColliders = new Collider2D[40];

		public event Action<Collider2D, CollisionType> Triggered;

		public event Action<Collider2D> TriggerEnter;

		public event Action<Collider2D> TriggerStay;

		public event Action<Collider2D> TriggerExit;

		private void FixedUpdate()
		{
			DetectCollisions();
		}

		private void DetectCollisions()
		{
			Array.Copy(_currentColliders, _previousColliders, _currentColliders.Length);
			Array.Clear(_currentColliders, 0, _currentColliders.Length);
			int count = Physics2D.OverlapCircleNonAlloc(base.transform.position, detectionRadius, _currentColliders, collisionMask);
			for (int i = 0; i < count; i++)
			{
				Collider2D collider = _currentColliders[i];
				if (Array.IndexOf(_previousColliders, collider) == -1)
				{
					Handle(collider, CollisionType.Enter);
				}
				else
				{
					Handle(collider, CollisionType.Stay);
				}
			}
			Collider2D[] previousColliders = _previousColliders;
			foreach (Collider2D prevCollider in previousColliders)
			{
				if (prevCollider != null && Array.IndexOf(_currentColliders, prevCollider) == -1)
				{
					Handle(prevCollider, CollisionType.Exit);
				}
			}
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

		private void OnDrawGizmos()
		{
			Gizmos.color = Color.red;
			Gizmos.DrawWireSphere(base.transform.position, detectionRadius);
		}
	}
}
