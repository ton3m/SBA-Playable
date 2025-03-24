using System;
using UnityEngine;

namespace _Project.Code.Core.Character
{
    public class TopDownAnimatorState : StateMachineBehaviour
    {
        [SerializeField] private TopDownAnimationConfig _animationConfig;
        [SerializeField] private string _parameterX = "X";
        [SerializeField] private string _parameterY = "Y";

        private Animator _animator;
        private DirectedAnimation _currentAnimation;

        private int _xHash;
        private int _yHash;

        private void Awake()
        {
            _xHash = Animator.StringToHash(_parameterX);
            _yHash = Animator.StringToHash(_parameterY);
        }

        public override void OnStateEnter(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
        {
            _animator = animator;
        }

        public override void OnStateExit(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
        {
            //_animator = null;
        }

        public override void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
        {
            var animation = GetClosestAnimation(Direction);

            if (_currentAnimation is not null && animation is not null &&
                animation.Clip.name == _currentAnimation.Clip.name) return;

            animator.transform.localScale = new Vector3(-1, 1, 1);

            animator.Play(animation.Clip.name);

            _currentAnimation = animation;
        }

        private Vector2 Direction =>
            new Vector2(_animator.GetFloat(_xHash), _animator.GetFloat(_yHash));

        private DirectedAnimation GetClosestAnimation(Vector2 direction)
        {
            DirectedAnimation closest = null;

            float bestDot = -1f;

            foreach (var animation in _animationConfig.Animations)
            {
                var dot = Vector2.Dot(direction.normalized, animation.Direction.normalized);

                if (dot > bestDot)
                {
                    bestDot = dot;
                    closest = animation;
                }
            }

            return closest;
        }
    }
}