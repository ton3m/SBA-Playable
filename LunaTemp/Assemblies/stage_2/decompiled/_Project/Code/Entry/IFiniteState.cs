using System;

namespace _Project.Code.Entry
{
	public interface IFiniteState
	{
		void Enter(Action onFinished = null);
	}
}
