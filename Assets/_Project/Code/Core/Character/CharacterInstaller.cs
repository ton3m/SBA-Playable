using _Project.Code.Core.Collision;
using _Project.Code.Services.CoroutineRunner;
using _Project.Code.Services.Input;
using UnityEngine;
using System.Collections.Generic;
using _Project.Code.Core.Harvesting;
using _Project.Code.Core.Items.Handlers;
using _Project.Code.Core.Items.Inventory;
using _Project.Code.Core.Items.Transfering;

namespace _Project.Code.Core.Character
{
    public class CharacterInstaller : MonoBehaviour
    {
        [SerializeField] private Mover _mover;
        [SerializeField] private CollisionDetector _detector;
        [SerializeField] private CharacterAnimator _animator;

        [SerializeField] private List<ItemInventory> _storages;

        public void Init(IMoveInput input, ICoroutineRunner coroutineRunner)
        {
            _mover.Init(input);
            
            var provider = new InventoryProvider(_storages);
            
            var harvester = new Harvester(_detector);
            
            var itemTransferer = new ItemTransferer();
            var inventoryTransferer = new InventoryTransferer(coroutineRunner);

            var itemHandler = new ItemCollisionHandler(_detector, provider, itemTransferer);
            var inventoryHandler = new InventoryCollisionHandler(_detector, provider, inventoryTransferer);
        }

        private void Update() => _animator.SetDirection(_mover.Direction);
    }
}