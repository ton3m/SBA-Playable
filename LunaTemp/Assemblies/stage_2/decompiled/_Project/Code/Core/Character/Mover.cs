using _Project.Code.Services.Input;
using UnityEngine;

namespace _Project.Code.Core.Character
{
	public class Mover : MonoBehaviour
	{
		[SerializeField]
		private float _speed = 10f;

		[SerializeField]
		private Rigidbody2D _rigidbody;

		private const float SpeedScaleFactor = 0.1f;

		private IMoveInput _input;

		public Vector2 Direction => _input.Direction;

		public void Init(IMoveInput input)
		{
			_input = input;
		}

		private void Start()
		{
			if (_input == null)
			{
				Debug.LogWarning("Input is null, creating new keyboard");
				_input = new KeyboardMoveInput();
			}
		}

		private void FixedUpdate()
		{
			Vector2 targetPosition = _rigidbody.position + Direction * (_speed * 0.1f * Time.fixedDeltaTime);
			_rigidbody.MovePosition(targetPosition);
		}
	}
}
