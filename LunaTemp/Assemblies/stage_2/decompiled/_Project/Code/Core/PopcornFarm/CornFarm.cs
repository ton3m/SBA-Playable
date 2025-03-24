using System;
using System.Collections;
using _Project.Code.Core.Items;
using _Project.Code.Core.Items.Inventory;
using _Project.Code.Services.ItemsCreation;
using UnityEngine;
using UnityEngine.UI;

namespace _Project.Code.Core.PopcornFarm
{
	public class CornFarm : MonoBehaviour
	{
		[SerializeField]
		private Image _fillImage;

		[SerializeField]
		private ItemInventory _resource;

		[SerializeField]
		private ItemInventory _final;

		[SerializeField]
		private ItemsCreator _itemsCreator;

		private int _count;

		private bool _isWorking;

		private void Start()
		{
			_fillImage.fillAmount = 0f;
		}

		private void OnEnable()
		{
			_resource.Added += OnAdded;
		}

		private void OnDisable()
		{
			_resource.Added -= OnAdded;
		}

		private void OnAdded(Item obj)
		{
			obj.gameObject.SetActive(false);
			_count++;
		}

		private void Update()
		{
			if (_count > 0 && !_isWorking)
			{
				StartCoroutine(AnimateCircle(ProduceCorn));
			}
		}

		private void ProduceCorn()
		{
			Debug.Log("Produced");
			Item popcorn = _itemsCreator.Create(ItemType.Popcorn);
			popcorn.enabled = false;
			_final.Add(popcorn);
			_count--;
		}

		private IEnumerator AnimateCircle(Action onFinished = null)
		{
			_isWorking = true;
			float duration = 0.5f;
			while (_fillImage.fillAmount < 1f)
			{
				_fillImage.fillAmount += Time.deltaTime / duration;
				yield return null;
			}
			_fillImage.fillAmount = 0f;
			_isWorking = false;
			onFinished?.Invoke();
		}
	}
}
