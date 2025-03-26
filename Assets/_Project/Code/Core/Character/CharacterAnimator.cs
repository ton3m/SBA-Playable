using System.Collections.Generic;
using UnityEngine;

namespace _Project.Code.Core.Character
{
    public class CharacterAnimator : MonoBehaviour
    {
        private readonly int _x = Animator.StringToHash("X");
        private readonly int _y = Animator.StringToHash("Y");
        private readonly int _isMoving = Animator.StringToHash("IsMoving");

        [SerializeField] private List<Animator> _directionalAnimators;
        [SerializeField] private Animator _movingAnimator;

        [SerializeField] private float _breathSpeed = 3f;
        [SerializeField] private float _breathScale = 0.2f;

        public void SetDirection(Vector2 direction)
        {
            var isMoving = direction.magnitude > 0.2f;

            _movingAnimator.SetBool(_isMoving, isMoving);

          //  if (!isMoving) return;
                
            _directionalAnimators.ForEach(a => a.SetFloat(_x, direction.x));
            _directionalAnimators.ForEach(a => a.SetFloat(_y, direction.y));
        }
    }
}