using System.Linq;
using _Project.Code.Core.Character;
using _Project.Code.Core.Harvesting;
using _Project.Code.Services.CoroutineRunner;
using _Project.Code.Services.Input;
using _Project.Code.Services.ItemsCreation;
using UnityEngine;

namespace _Project.Code.Entry
{
	[RequireComponent(typeof(CoroutineRunner))]
	public class EntryPoint : MonoBehaviour
	{
		[SerializeField]
		private ItemsCreator _itemsCreator;

		[SerializeField]
		private Joystick _joystick;

		[SerializeField]
		private CharacterInstaller _character;

		[SerializeField]
		private GameObject _fieldsHolder;

		private CoroutineRunner _coroutineRunner;

		private void Awake()
		{
			Dropper dropper = new Dropper(_itemsCreator.Create);
			FieldsDropper fieldsDropper = CreateFieldsDropper(dropper);
			_coroutineRunner = GetComponent<CoroutineRunner>();
			_character.Init(new MoveInput(_joystick), _coroutineRunner);
		}

		private FieldsDropper CreateFieldsDropper(Dropper dropper)
		{
			return new FieldsDropper(dropper, _fieldsHolder.GetComponentsInChildren<Field>(true).ToList());
		}
	}
}
