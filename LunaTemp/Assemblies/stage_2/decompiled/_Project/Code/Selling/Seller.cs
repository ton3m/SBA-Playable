using _Project.Code.Core.Items;
using _Project.Code.Core.Items.Inventory;
using _Project.Code.Selling.Line;
using DG.Tweening;
using DG.Tweening.Core;
using DG.Tweening.Plugins.Options;
using UnityEngine;

namespace _Project.Code.Selling
{
	public class Seller : MonoBehaviour
	{
		[SerializeField]
		private Item _moneyPrefab;

		[SerializeField]
		private _Project.Code.Selling.Line.Line _lineMb;

		private ILine _line;

		[SerializeField]
		private ItemInventory _productInventory;

		[SerializeField]
		private ItemInventory _moneyInventory;

		private Customer _currentCustomer;

		private void Awake()
		{
			_line = _lineMb;
		}

		private void Update()
		{
			if (!(_currentCustomer != null) && _line.TryGetCustomer(out var customer) && customer.enabled && customer.OrderSize <= _productInventory.Count)
			{
				_currentCustomer = customer;
				Serve();
			}
		}

		private void Serve()
		{
			Sequence sequence = DOTween.Sequence();
			sequence.AppendInterval(0.5f);
			for (int i = 0; i < _currentCustomer.OrderSize; i++)
			{
				Item item = _productInventory.Get();
				TweenerCore<Vector3, Vector3, VectorOptions> tween = item.transform.DOMove(_currentCustomer.transform.position, 0.5f).OnComplete(delegate
				{
					Object.Destroy(item.gameObject);
				});
				sequence.Join(tween);
			}
			sequence.OnComplete(GetPaid).Play();
		}

		private void GetPaid()
		{
			int count = _currentCustomer.Money;
			Sequence sequence = DOTween.Sequence();
			for (int i = 0; i < count; i++)
			{
				Item money = Object.Instantiate(_moneyPrefab);
				money.enabled = false;
				money.transform.position = _currentCustomer.transform.position;
				TweenerCore<Vector3, Vector3, VectorOptions> tween = money.transform.DOMove(_moneyInventory.transform.position, 0.5f).OnComplete(delegate
				{
					_moneyInventory.Add(money);
				});
				sequence.Join(tween);
			}
			sequence.OnComplete(OnServed).Play();
		}

		private void OnServed()
		{
			Customer customer = _currentCustomer;
			_currentCustomer = null;
			_line.OnCustomerServed(customer);
		}
	}
}
