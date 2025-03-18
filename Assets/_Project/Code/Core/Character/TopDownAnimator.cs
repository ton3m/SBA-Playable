using System;
using UnityEngine;

namespace _Project.Code.Core.Character
{
    public class TopDownAnimator : MonoBehaviour
    {
        [SerializeField] private Animator _animator;
        [SerializeField] private TopDownAnimationConfig _animationConfig;

        [SerializeField] private float _smoothTime = 0.1f;

        private float _velocityX, _velocityY;
        private AnimationClip _currentClip;
        private Vector2 _currentDirection;
        private Vector2 _smoothedDirection;

        void Update()
        {
            _smoothedDirection.x = Mathf.SmoothDamp(_smoothedDirection.x, _currentDirection.x, ref _velocityX, _smoothTime);
            _smoothedDirection.y = Mathf.SmoothDamp(_smoothedDirection.y, _currentDirection.y, ref _velocityY, _smoothTime);

            AnimationClip newClip = GetAnimationClip(_smoothedDirection);

            if (newClip != _currentClip)
            {
                _animator.Play(newClip.name);

                _currentClip = newClip;
            }
        }

        public void SetDirection(Vector2 direction)
        {
            _currentDirection = direction;
        }

        private AnimationClip GetAnimationClip(Vector2 direction)
        {
            AnimationClip bestMatch = null;
            float bestDot = -1f;

            foreach (var entry in _animationConfig.Animations)
            {
                float dot = Vector2.Dot(direction.normalized, entry.Direction.normalized);
                if (dot > bestDot)
                {
                    bestDot = dot;
                    bestMatch = entry.Animation;
                }
            }

            return bestMatch;
        }
    }
}