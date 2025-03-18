using Cinemachine;
using UnityEngine;

namespace _Project.Code.Camera
{
	public class CameraInBordersZoom : MonoBehaviour
	{
		[SerializeField]
		private Collider2D _borders;

		[SerializeField]
		private CinemachineVirtualCamera _virtualCamera;

		[SerializeField]
		private float _defaultCameraSize = 8f;

		private UnityEngine.Camera _camera;

		private void Awake()
		{
			_camera = UnityEngine.Camera.main;
		}

		private void Update()
		{
			Vector2 screenSize = GetScreenSizeInWorld();
			Vector2 boundsSize = _borders.bounds.size;
			float factor = CalculateFactor(screenSize, boundsSize);
			if (factor > 1f)
			{
				_virtualCamera.m_Lens.OrthographicSize /= factor;
			}
			float size = _virtualCamera.m_Lens.OrthographicSize;
			if (size < _defaultCameraSize)
			{
				float nextSize = size + 0.5f;
				float multiplier = nextSize / size;
				if (!(CalculateFactor(screenSize * multiplier, boundsSize) > 1f))
				{
					_virtualCamera.m_Lens.OrthographicSize = nextSize;
				}
			}
		}

		public float CalculateFactor(Vector2 screenSize, Vector2 boundsSize)
		{
			return screenSize.x / boundsSize.x;
		}

		public Vector2 GetScreenSizeInWorld()
		{
			Vector3 topLeft = _camera.ScreenToWorldPoint(new Vector2(0f, Screen.height));
			Vector3 bottomRight = _camera.ScreenToWorldPoint(new Vector2(Screen.width, 0f));
			return new Vector2(bottomRight.x - topLeft.x, topLeft.y - bottomRight.y);
		}
	}
}
