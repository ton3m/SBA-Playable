using _Project.Code.Core.Character;
using _Project.Code.Services.Input;
using _Project.Code.Tutorial;
using UnityEngine;

namespace _Project.Code.Entry
{
    public class Entry : MonoBehaviour
    {
        [Header("Services")]
        [SerializeField] Services.CoroutineRunner.CoroutineRunner _coroutineRunner;
        [SerializeField] private Joystick _joystick;
        [SerializeField] private TutorialFabric _tutorialFabric;
        [SerializeField] private StorageFabric _storageFabric;

        [Header("Initialization")]
        [SerializeField] private CharacterInstaller _characterInstaller;
        
        private void Awake()
        {
            _tutorialFabric.Init(_coroutineRunner, _storageFabric);
            
            var input = new MoveInput(_joystick);

            _characterInstaller.Init(input, _coroutineRunner);
        }

        private void Start()
        {
            var tutorial = _tutorialFabric.CreateTutorial();
            tutorial.Enter();
        }

        private void Update()
        {
        }
    }
}