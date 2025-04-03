using _Project.Code.Core.Character;
using _Project.Code.Core.Items;
using _Project.Code.Core.Items.Inventory;
using DG.Tweening;
using UnityEngine;

namespace _Project.Code.Selling
{
    public class Seller : MonoBehaviour
    {
        [SerializeField] private Item _moneyPrefab;
        [SerializeField] private Line.Line _lineMb;

        private ILine _line;

        [SerializeField] private ItemInventory _productInventory;
        [SerializeField] private ItemInventory _moneyInventory;

        private Customer _currentCustomer;

        private bool _isServing;

        private void Awake() => _line = _lineMb;

        private void Update()
        {
            if (_currentCustomer == null)
            {
                if (_line.TryGetCustomer(out var customer) && customer.enabled)
                {
                    _currentCustomer = customer;
                }
                else
                {
                    return;
                }
            }

            if (_currentCustomer.OrderSize < 1 || _productInventory.CanGet() == false) return;

            if (!_isServing) Serve();
        }

        private void Serve()
        {
            _isServing = true;
            Debug.Log("Serving");
            var sequence = DOTween.Sequence();

            sequence.AppendInterval(0.1f);

            var item = _productInventory.Get();

            var duration = 0.1f;
            
            var move = item.transform
                .DOMove(_currentCustomer.transform.position + Vector3.up, duration)
                .OnComplete(() =>
                {
                    Destroy(item.gameObject);
                    _currentCustomer.OrderSize--;
                    _currentCustomer.UpdateView();

                    if (_currentCustomer.OrderSize <= 0)
                        GetPaid();
                    
                    _isServing = false;
                });
            
            var scale = item.transform.DOScale(Vector3.zero, duration).SetEase(Ease.InQuint);

            sequence.Join(scale).Join(move);

            sequence.Play();
        }

        private void GetPaid()
        {
            int count = _currentCustomer.Money + Random.Range(0, 6);

            var sequence = DOTween.Sequence();

            for (int i = 0; i < count; i++)
            {
                var money = Instantiate(_moneyPrefab);

                money.enabled = false;

                money.transform.position = _currentCustomer.transform.position;

                var tween = money.transform
                    .DOMove(_moneyInventory.transform.position, 0.5f)
                    .OnComplete(() => _moneyInventory.Add(money));

                sequence.Join(tween);
            }

            sequence.OnComplete(OnServed).Play();
        }

        private void OnServed()
        {
            var customer = _currentCustomer;
            _currentCustomer = null;

            _line.OnCustomerServed(customer);
        }
    }
}