using UnityEngine;

namespace _Project.Code.Services.Input
{
	public class MoveInput : IMoveInput
	{
		public bool Enabled = true;

		private readonly Joystick _joystick;

		private readonly KeyboardMoveInput _keyboardMoveInput = new KeyboardMoveInput();

		public Vector2 Direction => GetDirection();

		public MoveInput(Joystick joystick)
		{
			_joystick = joystick;
		}

		private Vector2 GetDirection()
		{
			if (!Enabled)
			{
				return Vector2.zero;
			}
			Vector2 joystick = _joystick.Direction;
			Vector2 keyboard = new Vector2(UnityEngine.Input.GetAxis("Horizontal"), UnityEngine.Input.GetAxis("Vertical")).normalized;
			if (joystick.magnitude > 0.1f)
			{
				return joystick;
			}
			if (keyboard.magnitude > 0.1f)
			{
				return keyboard;
			}
			return Vector2.zero;
		}
	}
}
