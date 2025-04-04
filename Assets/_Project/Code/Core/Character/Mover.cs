using System;
using _Project.Code.Services.Input;
using UnityEngine;

namespace _Project.Code.Core.Character
{
    public class Mover : MonoBehaviour 
    {
        [SerializeField] private float _speed = 10f;
        [SerializeField] private Rigidbody2D _rigidbody;

        private const float SpeedScaleFactor = 0.1f;

        private IMoveInput _input;

        public bool IsMoving => _input.Direction.magnitude > 0.1f;

        public Vector2 Direction => _input.Direction;

        public void Init(IMoveInput input)
        {
            _input = input;
        }

        private void FixedUpdate()
        {
            if (_input is null) _input = new KeyboardMoveInput();

            var targetPosition = _rigidbody.position + Direction * (_speed * SpeedScaleFactor * Time.fixedDeltaTime);
            
            _rigidbody.MovePosition(targetPosition);
        }
    }
}