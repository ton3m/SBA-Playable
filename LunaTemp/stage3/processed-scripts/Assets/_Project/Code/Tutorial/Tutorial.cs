using System;
using System.Collections;
using _Project.Code.Core.Items;
using _Project.Code.Entry;
using _Project.Code.Services.CoroutineRunner;
using UnityEngine;

namespace _Project.Code.Tutorial
{
    public interface IBuyable
    {
        bool IsBought { get; }

        void Buy();
    }

    public class Tutorial : IFiniteState
    {
        private readonly ICoroutineRunner _coroutineRunner;

        private readonly VariableJoystick _joystick;
        private readonly IEnable _animation;
        private readonly GameObject _joystickGuide;
        private readonly TutorialArrow _arrow;

        private Func<bool> _collectedCoins;
        private Func<bool> _boughtTable;

        private readonly Func<IStorage> _storageCreator;
        private readonly IBuyable _tableBuyable;

        public Tutorial(
            ICoroutineRunner coroutineRunner,
            Func<IStorage> storageCreator,
            VariableJoystick joystick,
            IEnable animamtion,
            GameObject joystickGuide,
            TutorialArrow arrow,
            IBuyable tableBuyable)
        {
            _coroutineRunner = coroutineRunner;
            _storageCreator = storageCreator;
            _joystick = joystick;
            _animation = animamtion;
            _joystickGuide = joystickGuide;
            _arrow = arrow;
            _tableBuyable = tableBuyable;
        }

        public void Enter(Action onFinished = null)
        {
            _coroutineRunner.Launch(TutorialCoroutine(onFinished));
        }

        private IEnumerator TutorialCoroutine(Action onFinished = null)
        {
            var s = _storageCreator?.Invoke();

            _collectedCoins = () => s.IsEmpty;
            _boughtTable = () => _tableBuyable.IsBought;

            yield return MovementTutorial();
            yield return BuyingTutorial();

            onFinished?.Invoke();
        }

        private IEnumerator BuyingTutorial()
        {
            _arrow.EnterNextState();

            while (!_collectedCoins()) yield return null;
            _arrow.EnterNextState();

            while (!_boughtTable()) yield return null;
        }

        private IEnumerator MovementTutorial()
        {
            //_joystick.UpdateFixedPosition();
            _joystick.SetMode(JoystickType.Fixed);
            _joystick.gameObject.SetActive(true);

            _joystickGuide.gameObject.SetActive(true);
            _animation.Enable();

            yield return new WaitForJoystickMove(_joystick);
            _coroutineRunner.Launch(ChangeJoystickMode());

            _animation.Disable();
            _joystickGuide.gameObject.SetActive(false);
        }

        private IEnumerator ChangeJoystickMode()
        {
            yield return new WaitForJoystickStop(_joystick);
            _joystick.SetMode(JoystickType.Floating);
        }
    }

    public interface IStorageFabric
    {
        IStorage CreateNew(Vector3 position, ItemType type, int count);
    }

    public interface IStorage
    {
        public bool IsEmpty { get; }
    }
}