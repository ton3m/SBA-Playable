using System;
using System.Collections.Generic;
using UnityEngine;

namespace _Project.Code.Core.Character
{
	[CreateAssetMenu(fileName = "AnimationConfig", menuName = "Configs/AnimationConfig")]
	public class TopDownAnimationConfig : ScriptableObject
	{
		[Serializable]
		public class AnimationEntry
		{
			public AnimationClip Animation;

			public Vector2 Direction;
		}

		public List<AnimationEntry> Animations = new List<AnimationEntry>
		{
			new AnimationEntry
			{
				Animation = null,
				Direction = Vector2.down
			},
			new AnimationEntry
			{
				Animation = null,
				Direction = Vector2.left
			},
			new AnimationEntry
			{
				Animation = null,
				Direction = Vector2.up
			},
			new AnimationEntry
			{
				Animation = null,
				Direction = Vector2.right
			},
			new AnimationEntry
			{
				Animation = null,
				Direction = Vector2.down + Vector2.left
			},
			new AnimationEntry
			{
				Animation = null,
				Direction = Vector2.up + Vector2.left
			},
			new AnimationEntry
			{
				Animation = null,
				Direction = Vector2.up + Vector2.right
			},
			new AnimationEntry
			{
				Animation = null,
				Direction = Vector2.down + Vector2.right
			}
		};
	}
}
