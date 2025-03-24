using System;
using System.Collections;
using System.Collections.Generic;
using _Project.Code.Entry;
using UnityEngine;

namespace _Project.Code.Core.Buyables
{
    public class EndScreenShower : MonoBehaviour
    {
        [SerializeField] private Buyable _fieldBuyable;
        [SerializeField] private GameObject _ui;
        
        private bool _isFinished;

        private void Start()
        {
            StartCoroutine(WaitEnd());
        }

        private IEnumerator WaitEnd()
        {
            yield return new WaitForSeconds(27f);
            
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
                StartCoroutine(EndGame());
            }
        }

        private IEnumerator EndGame()
        {
            yield return new WaitForSeconds(3f);
            
            _ui.SetActive(true);
        }
    }
}