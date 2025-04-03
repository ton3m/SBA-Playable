using System;
using System.Collections;
using System.Collections.Generic;
using _Project.Code.Core.Character;
using _Project.Code.Entry;
using UnityEngine;

namespace _Project.Code.Core.Buyables
{
    public class EndScreenShower : MonoBehaviour
    {
        [SerializeField] CharacterInstaller _characterInstaller;
        [SerializeField] Joystick _joystick;
        [SerializeField] private Buyable _fieldBuyable;
        [SerializeField] private GameObject _ui;

        private bool _isFinished;

        private void Start()
        {
            //  StartCoroutine(WaitEnd());
            StartCoroutine(PlayerInactiveCheck());
        }

        private IEnumerator PlayerInactiveCheck()
        {
            float target = GameConfig.PlayerInactiveLoseTime;
            float counter = 0;

            while (true)
            {
                yield return new WaitForSeconds(1f);

                if (_characterInstaller.IsActive) 
                    counter = 0;
                else
                    counter += 1f;

                if (counter >= target)
                {
                    _isFinished = true;
                    StartCoroutine(EndGame());
                    break;
                }
            }
        }

        private IEnumerator WaitEnd()
        {
            yield return new WaitForSeconds(3f);

            if (!_isFinished)
            {
                StartCoroutine(EndGame());
                _isFinished = true;
            }
        }

        private void Update()
        {
            if (_isFinished) return;

            if (_fieldBuyable.IsBought)
            {
                _isFinished = true;
                StartCoroutine(EndGame(1));
            }
        }

        private IEnumerator EndGame(float delay = 0f)
        {
            yield return new WaitForSeconds(delay);

            _characterInstaller.enabled = false;
            _joystick.gameObject.SetActive(false);
            Time.timeScale = 0;
            _ui.SetActive(true);
            
            yield break;
        }
    }
}