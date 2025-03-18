using System;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using Random = UnityEngine.Random;

namespace _Project.Code.Selling.Line
{
    public class Line : MonoBehaviour, ILine
    {
        [SerializeField] private Customer _customerPrefab;
        [SerializeField] private List<Sprite> _customerSprites = new List<Sprite>();
        [SerializeField] private List<Transform> _spawnPoints = new List<Transform>();

        private Queue<Customer> _customers = new Queue<Customer>();
    
        private void Awake() => Init();

        public void Init()
        {
            for (int i = 0; i < _spawnPoints.Count; i++)
            {
                CreateNewCustomer(i);
            }
        }

        private void CreateNewCustomer(int i)
        {
            var point = _spawnPoints[i];
            var customer = Instantiate(_customerPrefab, point, true);

            customer.transform.localPosition = Vector3.zero;

            var spriteIndex = Random.Range(0, _customerSprites.Count);
            var sprite = _customerSprites[spriteIndex];
                
            var orderSize = Random.Range(1, 10);

            customer.Init(sprite, orderSize, orderSize);

            _customers.Enqueue(customer);
        }

        public bool TryGetCustomer(out Customer customer)
        {
            customer = _customers.Count > 0 ? _customers.Peek() : null;
            
            return customer != null;
        }

        public void OnCustomerServed(Customer customer)
        {
            var dequeued = _customers.Dequeue();
            
            if (customer != dequeued) 
                throw new InvalidOperationException("Customer is not the same as dequeued");
            
            dequeued.enabled = false;
            
            MoveCustomers(() =>
                CreateNewCustomer(_spawnPoints.Count - 1));
        }

        private void MoveCustomers(Action onFinished = null)
        {
            var customersArray = _customers.ToArray(); // Создаем массив из очереди
            _customers.Clear(); // Очищаем очередь для перезаполнения
            
            var sequence = DOTween.Sequence();

            for (int i = 0; i < customersArray.Length; i++)
            {
                var customer = customersArray[i];

                if (i < _spawnPoints.Count) 
                {
                    customer.transform.parent = _spawnPoints[i];
                    sequence.Join(customer.transform.DOLocalMove(Vector3.zero, 0.5f));
                }

                _customers.Enqueue(customer); // Заново добавляем в очередь
            }
            
            sequence.OnComplete(() => onFinished?.Invoke()).Play();
        }
    }
}