using System;
using UnityEngine;

namespace _Project.Code.Core.Character
{
    public class TopDownAnimatorState : StateMachineBehaviour
    {
        [SerializeField] int _layer = 0;
        [SerializeField] TopDownAnimationConfig _animationConfig;
        [SerializeField] string _parameterX = "X";
        [SerializeField] string _parameterY = "Y";

        Animator _animator;
        DirectedAnimation _currentAnimation;

        int _xHash;
        int _yHash;

        void Awake()
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
        }

        public override void OnStateUpdate(Animator animator, AnimatorStateInfo stateInfo, int layerIndex)
        {
            var animation = GetClosestAnimation(Direction);

            animator.transform.localScale = animation.Flip ? new Vector3(-1, 1, 1) : new Vector3(1, 1, 1);

            animator.Play(animation.Clip.name, _layer);

            _currentAnimation = animation;
        }

        Vector2 Direction =>
            new Vector2(_animator.GetFloat(_xHash), _animator.GetFloat(_yHash));

        DirectedAnimation GetClosestAnimation(Vector2 direction)
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