using UnityEngine;

namespace _Project.Code.Core.Character
{
	public class CharacterAnimator : MonoBehaviour
	{
		[SerializeField]
		private TopDownAnimator _animator;

		[SerializeField]
		private Transform _transform;

		[SerializeField]
		private float _breathSpeed = 3f;

		[SerializeField]
		private float _breathScale = 0.2f;

		public void SetDirection(Vector2 direction)
		{
			if (!(direction.magnitude < 0.05f))
			{
				_animator.SetDirection(direction);
			}
		}

		private void Update()
		{
			float scaleFactor = 1f + Mathf.Sin(Time.time * _breathSpeed) * _breathScale;
			_transform.localScale = Vector3.one * scaleFactor;
		}
	}
}
