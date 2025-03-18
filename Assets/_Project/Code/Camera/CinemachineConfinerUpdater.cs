using Cinemachine;
using UnityEngine;

namespace _Project.Code.Camera
{
    [RequireComponent(typeof(CinemachineConfiner2D))]
    public class CinemachineConfinerUpdater : MonoBehaviour
    {
        private CinemachineConfiner2D _cinemachineConfiner;

        private void Awake() => 
            _cinemachineConfiner = GetComponent<CinemachineConfiner2D>();

        private void Update() => 
            _cinemachineConfiner.InvalidateCache();
    }
}