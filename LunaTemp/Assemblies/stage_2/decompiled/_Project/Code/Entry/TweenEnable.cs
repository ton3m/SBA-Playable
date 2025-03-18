using DG.Tweening;

namespace _Project.Code.Entry
{
	public class TweenEnable : IEnable
	{
		private readonly Tween _tween;

		public TweenEnable(Tween tween)
		{
			_tween = tween;
		}

		public void Enable()
		{
			_tween.Play();
		}

		public void Disable()
		{
			_tween.Rewind();
		}
	}
}
