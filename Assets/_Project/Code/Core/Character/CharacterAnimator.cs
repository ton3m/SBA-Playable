using System.Collections.Generic;
using UnityEngine;

namespace _Project.Code.Core.Character
{
    using System.Collections.Generic;
    using UnityEngine;

    public class CharacterAnimator : MonoBehaviour
    {
        [SerializeField] private TopDownAnimator _animator;

        [SerializeField] private Transform _transform;

        [SerializeField] private float _breathSpeed = 3f;
        [SerializeField] private float _breathScale = 0.2f;

        public void SetDirection(Vector2 direction)
        {
            if (direction.magnitude < 0.05f) return;
            
            _animator.SetDirection(direction);
        }

        private void Update()
        {
            float scaleFactor = 1 + Mathf.Sin(Time.time * _breathSpeed) * _breathScale;

            _transform.localScale = Vector3.one * scaleFactor;
        }
    }
}