using System;
using DG.Tweening;
using UnityEngine;

namespace _Project.Code.Tutorial
{
	public class InfinitySignAnimation : MonoBehaviour
	{
		[SerializeField]
		private float _width = 90f;

		[SerializeField]
		private float _duration = 0.3f;

		private Tweener _tweener;

		private void AnimateInfinityLoop()
		{
			int resolution = 50;
			Vector3[] path = new Vector3[resolution];
			for (int i = 0; i < resolution; i++)
			{
				float t = (float)(i * 2) * 3.14159265f / (float)resolution;
				float x = _width * Mathf.Cos(t) / (1f + Mathf.Sin(t) * Mathf.Sin(t));
				float y = _width * Mathf.Cos(t) * Mathf.Sin(t) / (1f + Mathf.Sin(t) * Mathf.Sin(t));
				path[i] = new Vector3(x, y, 0f) + base.transform.position;
			}
			base.transform.position = path[0];
			_tweener = base.transform.DOPath(path, _duration, PathType.CatmullRom).SetOptions(true).SetEase(Ease.Linear)
				.SetLoops(-1)
				.Play();
		}

		private void OnEnable()
		{
			AnimateInfinityLoop();
		}

		private void OnDisable()
		{
			_tweener.Kill();
			_tweener = null;
		}
	}
}
