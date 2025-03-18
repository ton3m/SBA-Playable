using System;
using DG.Tweening;
using UnityEngine;

namespace _Project.Code.Core.Harvesting
{
	public class Field : MonoBehaviour
	{
		private const bool IsAbortive = false;

		[SerializeField]
		private FieldState _state = FieldState.Grown;

		[SerializeField]
		private Transform _plant;

		private Tween _harvestingTween;

		private Tween _harvestedTween;

		private Tween _growingTween;

		private Vector3 _defaultScale;

		public bool CanHarvest => _state == FieldState.Grown;

		public event Action Harvested = delegate
		{
		};

		private void Start()
		{
			_defaultScale = _plant.localScale;
			_growingTween = _plant.DOScale(_defaultScale, 1f).SetDelay(25f).SetEase(Ease.OutBack)
				.OnStart(delegate
				{
					_plant.localScale = Vector3.zero;
				})
				.OnComplete(delegate
				{
					SetState(FieldState.Grown);
				})
				.SetAutoKill(false);
			_harvestingTween = _plant.DOScale(_defaultScale * 1.2f, 0.01f).SetEase(Ease.Linear).SetLoops(6, LoopType.Yoyo)
				.OnComplete(delegate
				{
					_harvestedTween.Restart();
				})
				.SetAutoKill(false);
			_harvestedTween = _plant.DOScale(Vector3.zero, 0.3f).OnComplete(delegate
			{
				this.Harvested?.Invoke();
				SetState(FieldState.Growing);
			}).SetAutoKill(false);
			SetState(_state);
		}

		private void OnDestroy()
		{
			_harvestingTween.Kill();
			_harvestedTween.Kill();
			_growingTween.Kill();
		}

		public void Harvest()
		{
			if (_state != FieldState.Grown)
			{
				throw new InvalidOperationException("Field is not grown");
			}
			SetState(FieldState.Harvesting);
		}

		public void Abort()
		{
			if (_state != FieldState.Harvesting)
			{
				throw new InvalidOperationException("Field is not harvesting");
			}
			bool flag = true;
		}

		private void SetState(FieldState state)
		{
			_state = state;
			Debug.Log($"State: {_state}");
			switch (state)
			{
			case FieldState.Harvesting:
				_harvestingTween.Restart();
				_harvestingTween.Complete();
				break;
			case FieldState.Growing:
				_growingTween.Restart();
				break;
			}
		}
	}
}
