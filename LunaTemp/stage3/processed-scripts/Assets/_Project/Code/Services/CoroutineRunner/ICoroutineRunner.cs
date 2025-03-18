using System.Collections;

namespace _Project.Code.Services.CoroutineRunner
{
    public interface ICoroutineRunner
    {
        public void Launch(IEnumerator coroutine);
        public void Stop(IEnumerator coroutine);
    }
}