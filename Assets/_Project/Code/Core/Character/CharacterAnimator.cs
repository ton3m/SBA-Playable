using UnityEngine;

namespace _Project.Code.Core.Character
{
    [RequireComponent(typeof(Animator))]
    public class CharacterAnimator : MonoBehaviour
    {
        private readonly int _x = Animator.StringToHash("X");
        private readonly int _y = Animator.StringToHash("Y");
        private readonly int _isMoving = Animator.StringToHash("IsMoving");

        [SerializeField] private float _breathSpeed = 3f;
        [SerializeField] private float _breathScale = 0.2f;

        private Transform _body;
        private Animator _animator;

        private void Awake()
        {
            _body = transform;
            _animator = GetComponent<Animator>();
        }

        public void SetDirection(Vector2 direction)
        {
            _animator.SetFloat(_x, direction.x);
            _animator.SetFloat(_y, direction.y);
            
            _animator.SetBool(_isMoving, direction.magnitude > 0.05f);
        }

        private void Update()
        {
            float scaleFactor = 1 + Mathf.Sin(Time.time * _breathSpeed) * _breathScale;

            _body.localScale = Vector3.one * scaleFactor;
        }
    }
}