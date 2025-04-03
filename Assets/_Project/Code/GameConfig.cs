using UnityEngine;

namespace _Project.Code
{
    public class GameConfig : MonoBehaviour
    {
        [SerializeField] float _playerInactiveLoseTime = 6f;
        [SerializeField] float _itemTransferDuration = 0.05f;

        public static GameConfig Instance { get; private set; }

        public static float PlayerInactiveLoseTime => Instance._playerInactiveLoseTime;
        public static float ItemTransferDuration => Instance._itemTransferDuration;

        private void Awake() => Instance = this;
    }
}