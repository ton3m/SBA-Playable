using UnityEngine;
using UnityEngine.EventSystems;

public class VariableJoystick : Joystick
{
	[SerializeField]
	private float moveThreshold = 1f;

	[SerializeField]
	private JoystickType joystickType = JoystickType.Fixed;

	private Vector2 fixedPosition = Vector2.zero;

	public float MoveThreshold
	{
		get
		{
			return moveThreshold;
		}
		set
		{
			moveThreshold = Mathf.Abs(value);
		}
	}

	public void SetMode(JoystickType joystickType)
	{
		this.joystickType = joystickType;
		if (joystickType == JoystickType.Fixed)
		{
			background.anchoredPosition = fixedPosition;
			background.gameObject.SetActive(true);
		}
		else
		{
			background.gameObject.SetActive(false);
		}
	}

	protected override void Start()
	{
		base.Start();
		fixedPosition = background.anchoredPosition;
		SetMode(joystickType);
	}

	public void UpdateFixedPosition()
	{
		fixedPosition = background.anchoredPosition;
	}

	public override void OnPointerDown(PointerEventData eventData)
	{
		if (joystickType != 0)
		{
			background.anchoredPosition = ScreenPointToAnchoredPosition(eventData.position);
			background.gameObject.SetActive(true);
		}
		base.OnPointerDown(eventData);
	}

	public override void OnPointerUp(PointerEventData eventData)
	{
		if (joystickType != 0)
		{
			background.gameObject.SetActive(false);
		}
		base.OnPointerUp(eventData);
	}

	protected override void HandleInput(float magnitude, Vector2 normalised, Vector2 radius, Camera cam)
	{
		if (joystickType == JoystickType.Dynamic && magnitude > moveThreshold)
		{
			Vector2 difference = normalised * (magnitude - moveThreshold) * radius;
			background.anchoredPosition += difference;
		}
		base.HandleInput(magnitude, normalised, radius, cam);
	}
}
