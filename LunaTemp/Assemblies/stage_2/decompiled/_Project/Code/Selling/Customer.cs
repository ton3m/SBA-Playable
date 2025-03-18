using _Project.Code.Selling.Line;
using DG.Tweening;
using UnityEngine;

namespace _Project.Code.Selling
{
	[RequireComponent(typeof(SpriteRenderer))]
	public class Customer : MonoBehaviour
	{
		[SerializeField]
		private BubbleView _bubbleView;

		private SpriteRenderer _spriteRenderer;

		public int OrderSize { get; private set; }

		public int Money { get; private set; }

		private void Awake()
		{
			_spriteRenderer = GetComponent<SpriteRenderer>();
		}

		public void Init(Sprite sprite, int orderSize, int money)
		{
			OrderSize = orderSize;
			Money = money;
			_spriteRenderer.sprite = sprite;
			_bubbleView.SetText(orderSize.ToString());
		}

		private void OnEnable()
		{
			base.transform.localScale = Vector3.zero;
			base.transform.DOScale(Vector3.one, 0.5f).Play().OnComplete(delegate
			{
				_bubbleView.gameObject.SetActive(true);
			});
		}

		private void OnDisable()
		{
			_bubbleView.gameObject.SetActive(false);
			base.transform.DOScale(Vector3.zero, 0.5f).Play();
		}
	}
}
