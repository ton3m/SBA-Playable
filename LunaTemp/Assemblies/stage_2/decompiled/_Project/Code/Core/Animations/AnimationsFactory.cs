using System;
using DG.Tweening;
using UnityEngine;

namespace _Project.Code.Core.Animations
{
	public class AnimationsFactory
	{
		public static Tween CreatePointing(Transform body, float duration = 0.5f, float yOffset = 0.2f)
		{
			return body.DOMoveY(body.position.y - yOffset, duration).SetLoops(-1, LoopType.Yoyo);
		}

		public static Tween CreateInfinitySign(Transform body, float duration = 0.5f, float width = 50f)
		{
			int resolution = 50;
			Vector3[] path = new Vector3[resolution];
			for (int i = 0; i < resolution; i++)
			{
				float t = (float)(i * 2) * 3.14159265f / (float)resolution;
				float x = width * Mathf.Cos(t) / (1f + Mathf.Sin(t) * Mathf.Sin(t));
				float y = width * Mathf.Cos(t) * Mathf.Sin(t) / (1f + Mathf.Sin(t) * Mathf.Sin(t));
				path[i] = new Vector3(x, y, 0f) + body.position;
			}
			body.position = path[0];
			return body.DOPath(path, duration, PathType.CatmullRom).SetOptions(true).SetEase(Ease.Linear)
				.SetLoops(-1);
		}
	}
}
