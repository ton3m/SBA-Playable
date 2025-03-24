if ( TRACE ) { TRACE( JSON.parse( '["_Project.Code.Camera.CameraInBordersZoom#init","_Project.Code.Camera.CameraInBordersZoom#Awake","_Project.Code.Camera.CameraInBordersZoom#Update","_Project.Code.Camera.CameraInBordersZoom#CalculateFactor","_Project.Code.Camera.CameraInBordersZoom#GetScreenSizeInWorld","_Project.Code.Camera.Follower#Update","_Project.Code.Core.Animations.AnimationsFactory#CreatePointing","_Project.Code.Core.Animations.AnimationsFactory#CreateInfinitySign","_Project.Code.Core.Animations.BreathAnimation#init","_Project.Code.Core.Animations.BreathAnimation#Animate","_Project.Code.Core.Animations.BreathAnimation#OnEnable","_Project.Code.Core.Animations.BreathAnimation#OnDisable","_Project.Code.Core.Buyables.CoinsViewUpdater#init","_Project.Code.Core.Buyables.CoinsViewUpdater#Awake","_Project.Code.Core.Buyables.CoinsViewUpdater#OnCoinRemoved","_Project.Code.Core.Buyables.CoinsViewUpdater#OnCoinAdded","_Project.Code.Core.Buyables.CoinsViewUpdater#UpdateView","_Project.Code.Core.Buyables.EndScreenShower#Start","_Project.Code.Core.Buyables.EndScreenShower#WaitEnd","_Project.Code.Core.Buyables.EndScreenShower#Update","_Project.Code.Core.Buyables.EndScreenShower#EndGame","_Project.Code.Core.Items.Inventory.BaseInventoryView#ItemsCount#get","_Project.Code.Core.Items.Inventory.BaseInventoryView#OnEnable","_Project.Code.Core.Items.Inventory.BaseInventoryView#OnDisable","_Project.Code.Core.Buyables.MoneyConfig#CoinItemPrice#get","_Project.Code.Core.Character.CharacterAnimator#init","_Project.Code.Core.Character.CharacterAnimator#SetDirection","_Project.Code.Core.Character.CharacterAnimator#Update","_Project.Code.Core.Character.CharacterInstaller#Start","_Project.Code.Core.Character.CharacterInstaller#Update","_Project.Code.Core.Character.Mover#init","_Project.Code.Core.Character.Mover#Direction#get","_Project.Code.Core.Character.Mover#init","_Project.Code.Core.Character.Mover#Init","_Project.Code.Core.Character.Mover#Start","_Project.Code.Core.Character.Mover#FixedUpdate","_Project.Code.Core.Character.SortingGroupAnimator#OnValidate","_Project.Code.Core.Character.SortingGroupAnimator#Awake","_Project.Code.Core.Character.SortingGroupAnimator#Update","_Project.Code.Core.Character.TopDownAnimationConfig#init","_Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry#init","_Project.Code.Core.Character.TopDownAnimator#init","_Project.Code.Core.Character.TopDownAnimator#Update","_Project.Code.Core.Character.TopDownAnimator#SetDirection","_Project.Code.Core.Character.TopDownAnimator#GetAnimationClip","_Project.Code.Core.Harvesting.Field#init","_Project.Code.Core.Harvesting.Field#CanHarvest#get","_Project.Code.Core.Harvesting.Field#init","_Project.Code.Core.Harvesting.Field#Start","_Project.Code.Core.Harvesting.Field#OnDestroy","_Project.Code.Core.Harvesting.Field#Harvest","_Project.Code.Core.Harvesting.Field#Abort","_Project.Code.Core.Harvesting.Field#SetState","_Project.Code.Core.Harvesting.FieldsDropper#ctor","_Project.Code.Core.Harvesting.FieldsDropper#OnHarvested","_Project.Code.Core.Harvesting.Harvester#IsHarvesting#get","_Project.Code.Core.Harvesting.Harvester#ctor","_Project.Code.Core.Harvesting.Harvester#Dispose","_Project.Code.Core.Harvesting.Harvester#OnTriggered","_Project.Code.Core.Harvesting.Harvester#Cleanup","_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#ctor","_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#Dispose","_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#OnTriggered","_Project.Code.Core.Items.Handlers.ItemCollisionHandler#ctor","_Project.Code.Core.Items.Handlers.ItemCollisionHandler#Dispose","_Project.Code.Core.Items.Handlers.ItemCollisionHandler#OnTriggered","_Project.Code.Core.Items.Inventory.InventoryProvider#ctor","_Project.Code.Core.Items.Inventory.InventoryProvider#HasStorage","_Project.Code.Core.Items.Inventory.InventoryProvider#TryGetStorage","_Project.Code.Core.Items.Inventory.StackInventoryView#init","_Project.Code.Core.Items.Inventory.StackInventoryView#OnEnable","_Project.Code.Core.Items.Inventory.StackInventoryView#OnDisable","_Project.Code.Core.Items.Inventory.StackInventoryView#OnRemoved","_Project.Code.Core.Items.Inventory.StackInventoryView#OnAdded","_Project.Code.Core.Items.Inventory.TableStorageUpdater#init","_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnEnable","_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnDisable","_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnAdded","_Project.Code.Core.Items.Inventory.TableStorageUpdater#ShowCustomers","_Project.Code.Core.Items.InventoryInitializer#Start","_Project.Code.Core.Items.Item#Type#get","_Project.Code.Core.Items.Item#OnEnable","_Project.Code.Core.Items.Item#OnDisable","_Project.Code.Core.Items.Transfering.InventoryTransferer#HasConnection#get","_Project.Code.Core.Items.Transfering.InventoryTransferer#Connection#get","_Project.Code.Core.Items.Transfering.InventoryTransferer#Connection#set","_Project.Code.Core.Items.Transfering.InventoryTransferer#ctor","_Project.Code.Core.Items.Transfering.InventoryTransferer#HasConnectionFor","_Project.Code.Core.Items.Transfering.InventoryTransferer#TrySetConnection","_Project.Code.Core.Items.Transfering.InventoryTransferer#Disconnect","_Project.Code.Core.Items.Transfering.InventoryTransferer#TransferingAll","_Project.Code.Core.Items.Transfering.InventoryTransferer#CanTransfer","_Project.Code.Core.Items.Transfering.InventoryTransferer#OnDisconnected","_Project.Code.Core.Items.Transfering.InventoryTransferer#OnConnected","_Project.Code.Core.Items.Transfering.ItemTransferer#init","_Project.Code.Core.Items.Transfering.ItemTransferer#TryTransfer","_Project.Code.Core.Items.Transfering.ItemTransferer#Transfer","_Project.Code.Core.Items.Transfering.ItemTransferer#CanTransfer","_Project.Code.Core.Items.Transfering.ItemTransferer#GetReservedCount","_Project.Code.Core.Items.Transfering.Transfer#ctor","_Project.Code.Core.Items.Transfering.TransferFactory#TryCreate","_Project.Code.Core.Items.Transfering.TransferFactory#DoItemTypesMatch","_Project.Code.Core.Items.Transfering.TransferFactory#CanGet","_Project.Code.Core.Items.Transfering.TransferFactory#CanGive","_Project.Code.Core.PopcornFarm.CornFarm#Start","_Project.Code.Core.PopcornFarm.CornFarm#OnEnable","_Project.Code.Core.PopcornFarm.CornFarm#OnDisable","_Project.Code.Core.PopcornFarm.CornFarm#OnAdded","_Project.Code.Core.PopcornFarm.CornFarm#Update","_Project.Code.Core.PopcornFarm.CornFarm#ProduceCorn","_Project.Code.Core.PopcornFarm.CornFarm#AnimateCircle","_Project.Code.Core.Workers.WorkersAnimation#init","_Project.Code.Core.Workers.WorkersAnimation#Start","_Project.Code.Core.Workers.WorkersAnimation#Update","_Project.Code.Core.Workers.WorkersAnimation#AnimateWorkerBreath","_Project.Code.Core.Workers.WorkersAnimation#AnimateWorker","_Project.Code.Core.Workers.WorkersAnimation#AnimateField","_Project.Code.Entry.Entry#Awake","_Project.Code.Entry.Entry#OnDestroy","_Project.Code.Entry.EntryPoint#Awake","_Project.Code.Entry.EntryPoint#OnDestroy","_Project.Code.Entry.EntryPoint#GetFields","_Project.Code.Selling.Customer#Awake","_Project.Code.Selling.Customer#Init","_Project.Code.Selling.Customer#OnEnable","_Project.Code.Selling.Customer#OnDisable","_Project.Code.Selling.Line.BubbleView#SetText","_Project.Code.Selling.Line.BubbleView#OnEnable","_Project.Code.Selling.Line.CustomerAppearanceAnimation#init","_Project.Code.Selling.Line.CustomerAppearanceAnimation#Awake","_Project.Code.Selling.Line.CustomerAppearanceAnimation#OnEnable","_Project.Code.Selling.Seller#Awake","_Project.Code.Selling.Seller#Update","_Project.Code.Selling.Seller#Serve","_Project.Code.Selling.Seller#GetPaid","_Project.Code.Selling.Seller#OnServed","_Project.Code.Services.ItemsCreation.Dropper#ctor","_Project.Code.Services.ItemsCreation.Dropper#CreateDrop","_Project.Code.Services.ItemsCreation.Dropper#Animate","_Project.Code.Services.ItemsCreation.ItemsCreator#ctor","_Project.Code.Services.ItemsCreation.ItemsCreator#Create","_Project.Code.Services.ServiceLocator.L#Container#get","_Project.Code.Services.ServiceLocator.L#Container#set","_Project.Code.Services.ServiceLocator.L#Init","_Project.Code.Services.ServiceLocator.L#Reg","_Project.Code.Services.ServiceLocator.L#Resolve","_Project.Code.Tutorial.InfinitySignAnimation#init","_Project.Code.Tutorial.InfinitySignAnimation#AnimateInfinityLoop","_Project.Code.Tutorial.InfinitySignAnimation#OnEnable","_Project.Code.Tutorial.InfinitySignAnimation#OnDisable","_Project.Code.Tutorial.StorageTrashView#OnEnable","_Project.Code.Tutorial.StorageTrashView#OnDisable","_Project.Code.Tutorial.StorageTrashView#OnRemoved","_Project.Code.Tutorial.StorageTrashView#OnAdded","_Project.Code.Tutorial.TutorialArrow#init","_Project.Code.Tutorial.TutorialArrow#ctor","_Project.Code.Tutorial.TutorialArrow#EnterNextState","_Project.Code.Tutorial.WaitForJoystickMove#keepWaiting#get","_Project.Code.Tutorial.WaitForJoystickMove#ctor","_Project.Code.Tutorial.WaitForJoystickStop#keepWaiting#get","_Project.Code.Tutorial.WaitForJoystickStop#ctor","_Project.Code.UI.CoinsCounterUpdater#init","_Project.Code.UI.CoinsCounterUpdater#OnEnable","_Project.Code.UI.CoinsCounterUpdater#OnDisable","_Project.Code.UI.CoinsCounterUpdater#OnCoinRemoved","_Project.Code.UI.CoinsCounterUpdater#OnCoinAdded","_Project.Code.UI.CoinsCounterUpdater#UpdateView","Assets.CourseGame.Develop.DI.DIContainer#init","Assets.CourseGame.Develop.DI.DIContainer#ctor","Assets.CourseGame.Develop.DI.DIContainer#$ctor1","Assets.CourseGame.Develop.DI.DIContainer#RegisterAsSingle","Assets.CourseGame.Develop.DI.DIContainer#IsAlreadyRegister","Assets.CourseGame.Develop.DI.DIContainer#Resolve","Assets.CourseGame.Develop.DI.DIContainer#Initialize","Assets.CourseGame.Develop.DI.DIContainer#Dispose","Assets.CourseGame.Develop.DI.DIContainer#CreateFrom","Assets.CourseGame.Develop.DI.DIContainer.Registration#$ctor1","Assets.CourseGame.Develop.DI.DIContainer.Registration#ctor","Assets.CourseGame.Develop.DI.DIContainer.Registration#NonLazy","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor","DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor","DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor","DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor","DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get","DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor","DG.Tweening.DOTweenModuleAudio#DOFade","DG.Tweening.DOTweenModuleAudio#DOPitch","DG.Tweening.DOTweenModuleAudio#DOSetFloat","DG.Tweening.DOTweenModuleAudio#DOComplete","DG.Tweening.DOTweenModuleAudio#DOKill","DG.Tweening.DOTweenModuleAudio#DOFlip","DG.Tweening.DOTweenModuleAudio#DOGoto","DG.Tweening.DOTweenModuleAudio#DOPause","DG.Tweening.DOTweenModuleAudio#DOPlay","DG.Tweening.DOTweenModuleAudio#DOPlayBackwards","DG.Tweening.DOTweenModuleAudio#DOPlayForward","DG.Tweening.DOTweenModuleAudio#DORestart","DG.Tweening.DOTweenModuleAudio#DORewind","DG.Tweening.DOTweenModuleAudio#DOSmoothRewind","DG.Tweening.DOTweenModuleAudio#DOTogglePause","DG.Tweening.DOTweenModulePhysics#DOMove","DG.Tweening.DOTweenModulePhysics#DOMoveX","DG.Tweening.DOTweenModulePhysics#DOMoveY","DG.Tweening.DOTweenModulePhysics#DOMoveZ","DG.Tweening.DOTweenModulePhysics#DORotate","DG.Tweening.DOTweenModulePhysics#DOLookAt","DG.Tweening.DOTweenModulePhysics#DOJump","DG.Tweening.DOTweenModulePhysics#DOPath","DG.Tweening.DOTweenModulePhysics#DOPath$1","DG.Tweening.DOTweenModulePhysics#DOLocalPath","DG.Tweening.DOTweenModulePhysics#DOLocalPath$1","DG.Tweening.DOTweenModulePhysics2D#DOMove","DG.Tweening.DOTweenModulePhysics2D#DOMoveX","DG.Tweening.DOTweenModulePhysics2D#DOMoveY","DG.Tweening.DOTweenModulePhysics2D#DORotate","DG.Tweening.DOTweenModulePhysics2D#DOJump","DG.Tweening.DOTweenModulePhysics2D#DOPath","DG.Tweening.DOTweenModulePhysics2D#DOPath$1","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath","DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1","DG.Tweening.DOTweenModuleSprite#DOColor","DG.Tweening.DOTweenModuleSprite#DOFade","DG.Tweening.DOTweenModuleSprite#DOGradientColor","DG.Tweening.DOTweenModuleSprite#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOFade","DG.Tweening.DOTweenModuleUI#DOFade$1","DG.Tweening.DOTweenModuleUI#DOFade$2","DG.Tweening.DOTweenModuleUI#DOFade$3","DG.Tweening.DOTweenModuleUI#DOFade$4","DG.Tweening.DOTweenModuleUI#DOColor","DG.Tweening.DOTweenModuleUI#DOColor$1","DG.Tweening.DOTweenModuleUI#DOColor$2","DG.Tweening.DOTweenModuleUI#DOColor$3","DG.Tweening.DOTweenModuleUI#DOFillAmount","DG.Tweening.DOTweenModuleUI#DOGradientColor","DG.Tweening.DOTweenModuleUI#DOFlexibleSize","DG.Tweening.DOTweenModuleUI#DOMinSize","DG.Tweening.DOTweenModuleUI#DOPreferredSize","DG.Tweening.DOTweenModuleUI#DOScale","DG.Tweening.DOTweenModuleUI#DOAnchorPos","DG.Tweening.DOTweenModuleUI#DOAnchorPosX","DG.Tweening.DOTweenModuleUI#DOAnchorPosY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3D","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY","DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ","DG.Tweening.DOTweenModuleUI#DOAnchorMax","DG.Tweening.DOTweenModuleUI#DOAnchorMin","DG.Tweening.DOTweenModuleUI#DOPivot","DG.Tweening.DOTweenModuleUI#DOPivotX","DG.Tweening.DOTweenModuleUI#DOPivotY","DG.Tweening.DOTweenModuleUI#DOSizeDelta","DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos","DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1","DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos","DG.Tweening.DOTweenModuleUI#DONormalizedPos","DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos","DG.Tweening.DOTweenModuleUI#DOValue","DG.Tweening.DOTweenModuleUI#DOCounter","DG.Tweening.DOTweenModuleUI#DOText","DG.Tweening.DOTweenModuleUI#DOBlendableColor","DG.Tweening.DOTweenModuleUI#DOBlendableColor$1","DG.Tweening.DOTweenModuleUI#DOBlendableColor$2","DG.Tweening.DOTweenModuleUI#DOShapeCircle","DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor","DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1","DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion","DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind","DG.Tweening.DOTweenModuleUnityVersion#WaitForKill","DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops","DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition","DG.Tweening.DOTweenModuleUnityVersion#WaitForStart","DG.Tweening.DOTweenModuleUnityVersion#DOOffset","DG.Tweening.DOTweenModuleUnityVersion#DOTiling","DG.Tweening.DOTweenModuleUtils#Init","DG.Tweening.DOTweenModuleUtils#Preserver","DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D","DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody","DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween","Joystick#Horizontal#get","Joystick#Vertical#get","Joystick#Direction#get","Joystick#HandleRange#get","Joystick#HandleRange#set","Joystick#DeadZone#get","Joystick#DeadZone#set","Joystick#AxisOptions#get","Joystick#AxisOptions#set","Joystick#SnapX#get","Joystick#SnapX#set","Joystick#SnapY#get","Joystick#SnapY#set","Joystick#init","Joystick#Start","Joystick#OnPointerDown","Joystick#OnDrag","Joystick#HandleInput","Joystick#FormatInput","Joystick#SnapFloat","Joystick#OnPointerUp","Joystick#ScreenPointToAnchoredPosition","_Project.Code.Core.Buyables.Buyable#IsBought#get","_Project.Code.Core.Buyables.Buyable#init","_Project.Code.Core.Buyables.Buyable#Awake","_Project.Code.Core.Buyables.Buyable#OnEnable","_Project.Code.Core.Buyables.Buyable#OnAdded","_Project.Code.Core.Buyables.Buyable#OnDisable","_Project.Code.Core.Buyables.Buyable#GetCapacity","_Project.Code.Core.Buyables.Buyable#Buy","_Project.Code.Core.Buyables.InventorViewDestroyer#OnRemoved","_Project.Code.Core.Buyables.InventorViewDestroyer#OnAdded","_Project.Code.Core.Collision.CollisionDetector#OnTriggerEnter2D","_Project.Code.Core.Collision.CollisionDetector#OnTriggerStay2D","_Project.Code.Core.Collision.CollisionDetector#OnTriggerExit2D","_Project.Code.Core.Collision.CollisionDetector#Handle","_Project.Code.Core.Collision.OverlapCollisionDetector#init","_Project.Code.Core.Collision.OverlapCollisionDetector#FixedUpdate","_Project.Code.Core.Collision.OverlapCollisionDetector#DetectCollisions","_Project.Code.Core.Collision.OverlapCollisionDetector#Handle","_Project.Code.Core.Collision.OverlapCollisionDetector#OnDrawGizmos","_Project.Code.Core.Items.Inventory.ColumnInventoryView#Height#get","_Project.Code.Core.Items.Inventory.ColumnInventoryView#init","_Project.Code.Core.Items.Inventory.ColumnInventoryView#Awake","_Project.Code.Core.Items.Inventory.ColumnInventoryView#OnRemoved","_Project.Code.Core.Items.Inventory.ColumnInventoryView#OnAdded","_Project.Code.Core.Items.Inventory.ItemInventory#ItemType#get","_Project.Code.Core.Items.Inventory.ItemInventory#InventoryType#get","_Project.Code.Core.Items.Inventory.ItemInventory#Count#get","_Project.Code.Core.Items.Inventory.ItemInventory#IsEmpty#get","_Project.Code.Core.Items.Inventory.ItemInventory#Capacity#get","_Project.Code.Core.Items.Inventory.ItemInventory#init","_Project.Code.Core.Items.Inventory.ItemInventory#CanAdd","_Project.Code.Core.Items.Inventory.ItemInventory#CanGet","_Project.Code.Core.Items.Inventory.ItemInventory#Add","_Project.Code.Core.Items.Inventory.ItemInventory#SetCapacity","_Project.Code.Core.Items.Inventory.ItemInventory#Get","_Project.Code.Core.Items.Inventory.ItemInventory#TryGet","_Project.Code.Core.Items.Inventory.ItemInventory#SetType","_Project.Code.Core.Items.Inventory.ItemInventory#SetOperation","_Project.Code.Entry.StorageFabric#CreateNew","_Project.Code.Entry.StorageFabric#Instantiate","_Project.Code.Entry.TweenEnable#ctor","_Project.Code.Entry.TweenEnable#Enable","_Project.Code.Entry.TweenEnable#Disable","_Project.Code.Selling.Line.Line#init","_Project.Code.Selling.Line.Line#OnEnable","_Project.Code.Selling.Line.Line#Init","_Project.Code.Selling.Line.Line#CreateNewCustomer","_Project.Code.Selling.Line.Line#TryGetCustomer","_Project.Code.Selling.Line.Line#OnCustomerServed","_Project.Code.Selling.Line.Line#RequestCreation$1","_Project.Code.Selling.Line.Line#RequestCreation","_Project.Code.Selling.Line.Line#CreatingCustomers","_Project.Code.Selling.Line.Line#MoveCustomers","_Project.Code.Services.CoroutineRunner.CoroutineRunner#Launch","_Project.Code.Services.CoroutineRunner.CoroutineRunner#Stop","_Project.Code.Services.Input.KeyboardMoveInput#Direction#get","_Project.Code.Services.Input.MoveInput#Direction#get","_Project.Code.Services.Input.MoveInput#init","_Project.Code.Services.Input.MoveInput#ctor","_Project.Code.Services.Input.MoveInput#GetDirection","DynamicJoystick#MoveThreshold#get","DynamicJoystick#MoveThreshold#set","DynamicJoystick#init","DynamicJoystick#Start","DynamicJoystick#OnPointerDown","DynamicJoystick#OnPointerUp","DynamicJoystick#HandleInput","FloatingJoystick#Start","FloatingJoystick#OnPointerDown","FloatingJoystick#OnPointerUp","VariableJoystick#MoveThreshold#get","VariableJoystick#MoveThreshold#set","VariableJoystick#init","VariableJoystick#SetMode","VariableJoystick#Start","VariableJoystick#UpdateFixedPosition","VariableJoystick#OnPointerDown","VariableJoystick#OnPointerUp","VariableJoystick#HandleInput"]' ) ); }
/**
 * @compiler Bridge.NET 17.9.42-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*_Project.Code.Camera.CameraInBordersZoom start.*/
    Bridge.define("_Project.Code.Camera.CameraInBordersZoom", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _borders: null,
            _defaultCameraSize: 0,
            _camera: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#init", this ); }

                this._defaultCameraSize = 8.0;
            }
        },
        methods: {
            /*_Project.Code.Camera.CameraInBordersZoom.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#Awake", this ); }

                this._camera = UnityEngine.Camera.main;
            },
            /*_Project.Code.Camera.CameraInBordersZoom.Awake end.*/

            /*_Project.Code.Camera.CameraInBordersZoom.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#Update", this ); }

                var screenSize = this.GetScreenSizeInWorld();
                var boundsSize = UnityEngine.Vector2.FromVector3(this._borders.bounds.halfExtents.$clone().scale( 2 ).$clone());
                var factor = this.CalculateFactor(screenSize.$clone(), boundsSize.$clone());
                if (factor > 1.0) {
                    this._camera.orthographicSize /= factor;
                }
                var size = this._camera.orthographicSize;
                if (size < this._defaultCameraSize) {
                    var nextSize = size + 0.5;
                    var multiplier = nextSize / size;
                    if (!(this.CalculateFactor(screenSize.$clone().scale( multiplier ), boundsSize.$clone()) > 1.0)) {
                        this._camera.orthographicSize = nextSize;
                    }
                }
            },
            /*_Project.Code.Camera.CameraInBordersZoom.Update end.*/

            /*_Project.Code.Camera.CameraInBordersZoom.CalculateFactor start.*/
            CalculateFactor: function (screenSize, boundsSize) {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#CalculateFactor", this ); }

                return screenSize.x / boundsSize.x;
            },
            /*_Project.Code.Camera.CameraInBordersZoom.CalculateFactor end.*/

            /*_Project.Code.Camera.CameraInBordersZoom.GetScreenSizeInWorld start.*/
            GetScreenSizeInWorld: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.CameraInBordersZoom#GetScreenSizeInWorld", this ); }

                var topLeft = this._camera.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(new pc.Vec2( 0.0, UnityEngine.Screen.height )));
                var bottomRight = this._camera.ScreenToWorldPoint(UnityEngine.Vector3.FromVector2(new pc.Vec2( UnityEngine.Screen.width, 0.0 )));
                return new pc.Vec2( bottomRight.x - topLeft.x, topLeft.y - bottomRight.y );
            },
            /*_Project.Code.Camera.CameraInBordersZoom.GetScreenSizeInWorld end.*/


        }
    });
    /*_Project.Code.Camera.CameraInBordersZoom end.*/

    /*_Project.Code.Camera.Follower start.*/
    Bridge.define("_Project.Code.Camera.Follower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _speed: 0,
            _target: null
        },
        methods: {
            /*_Project.Code.Camera.Follower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Camera.Follower#Update", this ); }

                var targetPosition = pc.Vec3.moveTowards( this.transform.position, this._target.position, this._speed * UnityEngine.Time.deltaTime );
                targetPosition.z = this.transform.position.z;
                this.transform.position = targetPosition.$clone();
            },
            /*_Project.Code.Camera.Follower.Update end.*/


        }
    });
    /*_Project.Code.Camera.Follower end.*/

    /*_Project.Code.Core.Animations.AnimationsFactory start.*/
    Bridge.define("_Project.Code.Core.Animations.AnimationsFactory", {
        statics: {
            methods: {
                /*_Project.Code.Core.Animations.AnimationsFactory.CreatePointing:static start.*/
                CreatePointing: function (body, duration, yOffset) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.AnimationsFactory#CreatePointing", this ); }

                    if (duration === void 0) { duration = 0.5; }
                    if (yOffset === void 0) { yOffset = 0.2; }
                    return DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMoveY(body, body.position.y - yOffset, duration), -1, DG.Tweening.LoopType.Yoyo);
                },
                /*_Project.Code.Core.Animations.AnimationsFactory.CreatePointing:static end.*/

                /*_Project.Code.Core.Animations.AnimationsFactory.CreateInfinitySign:static start.*/
                CreateInfinitySign: function (body, duration, width) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.AnimationsFactory#CreateInfinitySign", this ); }

                    if (duration === void 0) { duration = 0.5; }
                    if (width === void 0) { width = 50.0; }
                    var resolution = 50;
                    var path = System.Array.init(resolution, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < resolution; i = (i + 1) | 0) {
                        var t = (Bridge.Int.mul(i, 2)) * 3.14159274 / resolution;
                        var x = width * Math.cos(t) / (1.0 + Math.sin(t) * Math.sin(t));
                        var y = width * Math.cos(t) * Math.sin(t) / (1.0 + Math.sin(t) * Math.sin(t));
                        path[i] = new pc.Vec3( x, y, 0.0 ).add( body.position );
                    }
                    body.position = path[0].$clone();
                    return DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetOptions$1(DG.Tweening.ShortcutExtensions.DOPath$1(body, path, duration, DG.Tweening.PathType.CatmullRom), true), DG.Tweening.Ease.Linear), -1);
                },
                /*_Project.Code.Core.Animations.AnimationsFactory.CreateInfinitySign:static end.*/


            }
        }
    });
    /*_Project.Code.Core.Animations.AnimationsFactory end.*/

    /*_Project.Code.Core.Animations.BreathAnimation start.*/
    Bridge.define("_Project.Code.Core.Animations.BreathAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _duration: 0,
            _scaleFactor: 0,
            _tweener: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.BreathAnimation#init", this ); }

                this._duration = 0.5;
                this._scaleFactor = 1.2;
            }
        },
        methods: {
            /*_Project.Code.Core.Animations.BreathAnimation.Animate start.*/
            Animate: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.BreathAnimation#Animate", this ); }

                this._tweener = DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, new pc.Vec3( 1, 1, 1 ).clone().scale( this._scaleFactor ), 0.5), DG.Tweening.Ease.Linear), -1, DG.Tweening.LoopType.Yoyo));
            },
            /*_Project.Code.Core.Animations.BreathAnimation.Animate end.*/

            /*_Project.Code.Core.Animations.BreathAnimation.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.BreathAnimation#OnEnable", this ); }

                this.Animate();
            },
            /*_Project.Code.Core.Animations.BreathAnimation.OnEnable end.*/

            /*_Project.Code.Core.Animations.BreathAnimation.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Animations.BreathAnimation#OnDisable", this ); }

                DG.Tweening.TweenExtensions.Kill(this._tweener);
                this._tweener = null;
            },
            /*_Project.Code.Core.Animations.BreathAnimation.OnDisable end.*/


        }
    });
    /*_Project.Code.Core.Animations.BreathAnimation end.*/

    /*_Project.Code.Tutorial.IBuyable start.*/
    Bridge.define("_Project.Code.Tutorial.IBuyable", {
        $kind: 3
    });
    /*_Project.Code.Tutorial.IBuyable end.*/

    /*_Project.Code.Core.Buyables.BuyablesFlow start.*/
    Bridge.define("_Project.Code.Core.Buyables.BuyablesFlow");
    /*_Project.Code.Core.Buyables.BuyablesFlow end.*/

    /*_Project.Code.Core.Buyables.BuyableType start.*/
    Bridge.define("_Project.Code.Core.Buyables.BuyableType", {
        $kind: 6,
        statics: {
            fields: {
                Table: 0,
                Workers1: 1,
                Workers2: 2,
                Field: 3
            }
        }
    });
    /*_Project.Code.Core.Buyables.BuyableType end.*/

    /*_Project.Code.Core.Buyables.CoinsViewUpdater start.*/
    Bridge.define("_Project.Code.Core.Buyables.CoinsViewUpdater", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _text: null,
            _inventory: null,
            _counter: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#init", this ); }

                this._counter = 0;
            }
        },
        methods: {
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#Awake", this ); }

                this._inventory.addAdded(Bridge.fn.cacheBind(this, this.OnCoinAdded));
                this._inventory.addRemoved(Bridge.fn.cacheBind(this, this.OnCoinRemoved));
                this.UpdateView();
            },
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.Awake end.*/

            /*_Project.Code.Core.Buyables.CoinsViewUpdater.OnCoinRemoved start.*/
            OnCoinRemoved: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#OnCoinRemoved", this ); }

                this._counter = (this._counter - 1) | 0;
                this.UpdateView();
            },
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.OnCoinRemoved end.*/

            /*_Project.Code.Core.Buyables.CoinsViewUpdater.OnCoinAdded start.*/
            OnCoinAdded: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#OnCoinAdded", this ); }

                this._counter = (this._counter + 1) | 0;
                this.UpdateView();
            },
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.OnCoinAdded end.*/

            /*_Project.Code.Core.Buyables.CoinsViewUpdater.UpdateView start.*/
            UpdateView: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.CoinsViewUpdater#UpdateView", this ); }

                this._text.text = Bridge.toString(this._counter);
            },
            /*_Project.Code.Core.Buyables.CoinsViewUpdater.UpdateView end.*/


        }
    });
    /*_Project.Code.Core.Buyables.CoinsViewUpdater end.*/

    /*_Project.Code.Core.Buyables.EndScreenShower start.*/
    Bridge.define("_Project.Code.Core.Buyables.EndScreenShower", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _fieldBuyable: null,
            _ui: null,
            _isFinished: false
        },
        methods: {
            /*_Project.Code.Core.Buyables.EndScreenShower.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.EndScreenShower#Start", this ); }

                this.StartCoroutine$1(this.WaitEnd());
            },
            /*_Project.Code.Core.Buyables.EndScreenShower.Start end.*/

            /*_Project.Code.Core.Buyables.EndScreenShower.WaitEnd start.*/
            WaitEnd: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.EndScreenShower#WaitEnd", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(27.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (!this._isFinished) {
                                            this.StartCoroutine$1(this.EndGame());
                                            this._isFinished = true;
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Buyables.EndScreenShower.WaitEnd end.*/

            /*_Project.Code.Core.Buyables.EndScreenShower.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.EndScreenShower#Update", this ); }

                if (!this._isFinished && this._fieldBuyable.IsBought) {
                    this._isFinished = true;
                    this.StartCoroutine$1(this.EndGame());
                }
            },
            /*_Project.Code.Core.Buyables.EndScreenShower.Update end.*/

            /*_Project.Code.Core.Buyables.EndScreenShower.EndGame start.*/
            EndGame: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.EndScreenShower#EndGame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(3.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    this._ui.SetActive(true);

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Buyables.EndScreenShower.EndGame end.*/


        }
    });
    /*_Project.Code.Core.Buyables.EndScreenShower end.*/

    /*_Project.Code.Core.Items.Inventory.BaseInventoryView start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.BaseInventoryView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _inventory: null
        },
        props: {
            ItemsCount: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.BaseInventoryView#ItemsCount#get", this ); }

                    return this._inventory.Count;
                }
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.BaseInventoryView.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.BaseInventoryView#OnEnable", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this._inventory, null))) {
                    this._inventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                    this._inventory.addRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
                }
            },
            /*_Project.Code.Core.Items.Inventory.BaseInventoryView.OnEnable end.*/

            /*_Project.Code.Core.Items.Inventory.BaseInventoryView.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.BaseInventoryView#OnDisable", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this._inventory, null))) {
                    this._inventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                    this._inventory.removeRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
                }
            },
            /*_Project.Code.Core.Items.Inventory.BaseInventoryView.OnDisable end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.BaseInventoryView end.*/

    /*_Project.Code.Core.Buyables.MoneyConfig start.*/
    Bridge.define("_Project.Code.Core.Buyables.MoneyConfig", {
        statics: {
            props: {
                CoinItemPrice: {
                    get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.MoneyConfig#CoinItemPrice#get", this ); }

                        return 10;
                    }
                }
            }
        }
    });
    /*_Project.Code.Core.Buyables.MoneyConfig end.*/

    /*_Project.Code.Core.Character.CharacterAnimator start.*/
    Bridge.define("_Project.Code.Core.Character.CharacterAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animator: null,
            _transform: null,
            _breathSpeed: 0,
            _breathScale: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.CharacterAnimator#init", this ); }

                this._breathSpeed = 3.0;
                this._breathScale = 0.2;
            }
        },
        methods: {
            /*_Project.Code.Core.Character.CharacterAnimator.SetDirection start.*/
            SetDirection: function (direction) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.CharacterAnimator#SetDirection", this ); }

                if (!(direction.length() < 0.05)) {
                    this._animator.SetDirection(direction.$clone());
                }
            },
            /*_Project.Code.Core.Character.CharacterAnimator.SetDirection end.*/

            /*_Project.Code.Core.Character.CharacterAnimator.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.CharacterAnimator#Update", this ); }

                var scaleFactor = 1.0 + Math.sin(UnityEngine.Time.time * this._breathSpeed) * this._breathScale;
                this._transform.localScale = new pc.Vec3( 1, 1, 1 ).clone().scale( scaleFactor );
            },
            /*_Project.Code.Core.Character.CharacterAnimator.Update end.*/


        }
    });
    /*_Project.Code.Core.Character.CharacterAnimator end.*/

    /*_Project.Code.Core.Character.CharacterInstaller start.*/
    Bridge.define("_Project.Code.Core.Character.CharacterInstaller", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _mover: null,
            _castingDetector: null,
            _animator: null,
            _storages: null
        },
        methods: {
            /*_Project.Code.Core.Character.CharacterInstaller.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.CharacterInstaller#Start", this ); }

                var input = _Project.Code.Services.ServiceLocator.L.Resolve(_Project.Code.Services.Input.MoveInput);
                var coroutineRunner = _Project.Code.Services.ServiceLocator.L.Resolve(_Project.Code.Services.CoroutineRunner.CoroutineRunner);
                this._mover.Init(input);
                var provider = new _Project.Code.Core.Items.Inventory.InventoryProvider(this._storages);
                var harvester = new _Project.Code.Core.Harvesting.Harvester(this._castingDetector);
                var itemTransferer = new _Project.Code.Core.Items.Transfering.ItemTransferer();
                var inventoryTransferer = new _Project.Code.Core.Items.Transfering.InventoryTransferer(coroutineRunner);
                var itemHandler = new _Project.Code.Core.Items.Handlers.ItemCollisionHandler(this._castingDetector, provider, itemTransferer);
                var inventoryHandler = new _Project.Code.Core.Items.Handlers.InventoryCollisionHandler(this._castingDetector, provider, inventoryTransferer);
            },
            /*_Project.Code.Core.Character.CharacterInstaller.Start end.*/

            /*_Project.Code.Core.Character.CharacterInstaller.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.CharacterInstaller#Update", this ); }

                this._animator.SetDirection(this._mover.Direction.$clone());
            },
            /*_Project.Code.Core.Character.CharacterInstaller.Update end.*/


        }
    });
    /*_Project.Code.Core.Character.CharacterInstaller end.*/

    /*_Project.Code.Core.Character.Mover start.*/
    Bridge.define("_Project.Code.Core.Character.Mover", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                SpeedScaleFactor: 0
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#init", this ); }

                    this.SpeedScaleFactor = 0.1;
                }
            }
        },
        fields: {
            _speed: 0,
            _rigidbody: null,
            _input: null
        },
        props: {
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#Direction#get", this ); }

                    return this._input._Project$Code$Services$Input$IMoveInput$Direction.$clone();
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#init", this ); }

                this._speed = 10.0;
            }
        },
        methods: {
            /*_Project.Code.Core.Character.Mover.Init start.*/
            Init: function (input) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#Init", this ); }

                this._input = input;
            },
            /*_Project.Code.Core.Character.Mover.Init end.*/

            /*_Project.Code.Core.Character.Mover.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#Start", this ); }

                if (this._input == null) {
                    UnityEngine.Debug.LogWarning$1("Input is null, creating new keyboard");
                    this._input = new _Project.Code.Services.Input.KeyboardMoveInput();
                }
            },
            /*_Project.Code.Core.Character.Mover.Start end.*/

            /*_Project.Code.Core.Character.Mover.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.Mover#FixedUpdate", this ); }

                var targetPosition = this._rigidbody.position.$clone().add( this.Direction.$clone().scale( (this._speed * 0.1 * UnityEngine.Time.fixedDeltaTime) ) );
                this._rigidbody.MovePosition(targetPosition);
            },
            /*_Project.Code.Core.Character.Mover.FixedUpdate end.*/


        }
    });
    /*_Project.Code.Core.Character.Mover end.*/

    /*_Project.Code.Core.Character.SortingGroupAnimator start.*/
    Bridge.define("_Project.Code.Core.Character.SortingGroupAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _order: 0,
            _sortingGroup: null
        },
        methods: {
            /*_Project.Code.Core.Character.SortingGroupAnimator.OnValidate start.*/
            OnValidate: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.SortingGroupAnimator#OnValidate", this ); }

                this._sortingGroup = this.GetComponent(UnityEngine.Rendering.SortingGroup);
                this._sortingGroup.sortingOrder = this._order;
            },
            /*_Project.Code.Core.Character.SortingGroupAnimator.OnValidate end.*/

            /*_Project.Code.Core.Character.SortingGroupAnimator.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.SortingGroupAnimator#Awake", this ); }

                this._sortingGroup = this.GetComponent(UnityEngine.Rendering.SortingGroup);
            },
            /*_Project.Code.Core.Character.SortingGroupAnimator.Awake end.*/

            /*_Project.Code.Core.Character.SortingGroupAnimator.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.SortingGroupAnimator#Update", this ); }

                this._sortingGroup.sortingOrder = this._order;
            },
            /*_Project.Code.Core.Character.SortingGroupAnimator.Update end.*/


        }
    });
    /*_Project.Code.Core.Character.SortingGroupAnimator end.*/

    /*_Project.Code.Core.Character.TopDownAnimationConfig start.*/
    Bridge.define("_Project.Code.Core.Character.TopDownAnimationConfig", {
        inherits: [UnityEngine.ScriptableObject],
        fields: {
            Animations: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimationConfig#init", this ); }

                this.Animations = function (_o1) {
                        var $t;
                        _o1.add(($t = new _Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry(), $t.Animation = null, $t.Direction = new pc.Vec2( pc.Vec2.UP.x, -pc.Vec2.UP.y ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry(), $t.Animation = null, $t.Direction = new pc.Vec2( -pc.Vec2.RIGHT.x, pc.Vec2.RIGHT.y ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry(), $t.Animation = null, $t.Direction = pc.Vec2.UP.clone(), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry(), $t.Animation = null, $t.Direction = pc.Vec2.RIGHT.clone(), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry(), $t.Animation = null, $t.Direction = new pc.Vec2( pc.Vec2.UP.x, -pc.Vec2.UP.y ).add( new pc.Vec2( -pc.Vec2.RIGHT.x, pc.Vec2.RIGHT.y ) ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry(), $t.Animation = null, $t.Direction = pc.Vec2.UP.clone().add( new pc.Vec2( -pc.Vec2.RIGHT.x, pc.Vec2.RIGHT.y ) ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry(), $t.Animation = null, $t.Direction = pc.Vec2.UP.clone().add( pc.Vec2.RIGHT.clone() ), $t));
                        _o1.add(($t = new _Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry(), $t.Animation = null, $t.Direction = new pc.Vec2( pc.Vec2.UP.x, -pc.Vec2.UP.y ).add( pc.Vec2.RIGHT.clone() ), $t));
                        return _o1;
                    }(new (System.Collections.Generic.List$1(_Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry)).ctor());
            }
        }
    });
    /*_Project.Code.Core.Character.TopDownAnimationConfig end.*/

    /*_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry start.*/
    Bridge.define("_Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry", {
        $kind: 1002,
        fields: {
            Animation: null,
            Direction: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry#init", this ); }

                this.Direction = new UnityEngine.Vector2();
            }
        }
    });
    /*_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry end.*/

    /*_Project.Code.Core.Character.TopDownAnimator start.*/
    Bridge.define("_Project.Code.Core.Character.TopDownAnimator", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _animator: null,
            _animationConfig: null,
            _smoothTime: 0,
            _velocityX: 0,
            _velocityY: 0,
            _currentClip: null,
            _currentDirection: null,
            _smoothedDirection: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimator#init", this ); }

                this._currentDirection = new UnityEngine.Vector2();
                this._smoothedDirection = new UnityEngine.Vector2();
                this._smoothTime = 0.1;
            }
        },
        methods: {
            /*_Project.Code.Core.Character.TopDownAnimator.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimator#Update", this ); }

                this._smoothedDirection.x = UnityEngine.Mathf.SmoothDamp(this._smoothedDirection.x, this._currentDirection.x, Bridge.ref(this, "_velocityX"), this._smoothTime);
                this._smoothedDirection.y = UnityEngine.Mathf.SmoothDamp(this._smoothedDirection.y, this._currentDirection.y, Bridge.ref(this, "_velocityY"), this._smoothTime);
                var newClip = this.GetAnimationClip(this._smoothedDirection.$clone());
                if (!Bridge.referenceEquals(newClip, this._currentClip)) {
                    this._animator.Play$2(newClip.name);
                    this._currentClip = newClip;
                }
            },
            /*_Project.Code.Core.Character.TopDownAnimator.Update end.*/

            /*_Project.Code.Core.Character.TopDownAnimator.SetDirection start.*/
            SetDirection: function (direction) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimator#SetDirection", this ); }

                this._currentDirection = direction.$clone();
            },
            /*_Project.Code.Core.Character.TopDownAnimator.SetDirection end.*/

            /*_Project.Code.Core.Character.TopDownAnimator.GetAnimationClip start.*/
            GetAnimationClip: function (direction) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Character.TopDownAnimator#GetAnimationClip", this ); }

                var $t;
                var bestMatch = null;
                var bestDot = -1.0;
                $t = Bridge.getEnumerator(this._animationConfig.Animations);
                try {
                    while ($t.moveNext()) {
                        var entry = $t.Current;
                        var dot = direction.clone().normalize().dot( entry.Direction.clone().normalize() );
                        if (dot > bestDot) {
                            bestDot = dot;
                            bestMatch = entry.Animation;
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return bestMatch;
            },
            /*_Project.Code.Core.Character.TopDownAnimator.GetAnimationClip end.*/


        }
    });
    /*_Project.Code.Core.Character.TopDownAnimator end.*/

    /*_Project.Code.Core.Collision.ICollisionDetector start.*/
    Bridge.define("_Project.Code.Core.Collision.ICollisionDetector", {
        $kind: 3
    });
    /*_Project.Code.Core.Collision.ICollisionDetector end.*/

    /*_Project.Code.Core.Collision.CollisionType start.*/
    Bridge.define("_Project.Code.Core.Collision.CollisionType", {
        $kind: 6,
        statics: {
            fields: {
                Enter: 0,
                Stay: 1,
                Exit: 2
            }
        }
    });
    /*_Project.Code.Core.Collision.CollisionType end.*/

    /*_Project.Code.Core.Harvesting.Field start.*/
    Bridge.define("_Project.Code.Core.Harvesting.Field", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                IsAbortive: false
            },
            ctors: {
                init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#init", this ); }

                    this.IsAbortive = false;
                }
            }
        },
        fields: {
            _state: 0,
            _plant: null,
            _harvestingTween: null,
            _harvestedTween: null,
            _growingTween: null,
            _defaultScale: null
        },
        events: {
            Harvested: null
        },
        props: {
            CanHarvest: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#CanHarvest#get", this ); }

                    return this._state === _Project.Code.Core.Harvesting.FieldState.Grown;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#init", this ); }

                this._defaultScale = new UnityEngine.Vector3();
                this._state = _Project.Code.Core.Harvesting.FieldState.Grown;
                Bridge.event(this, "Harvested", function () { });
            }
        },
        methods: {
            /*_Project.Code.Core.Harvesting.Field.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#Start", this ); }

                this._defaultScale = this._plant.localScale.$clone();
                this._growingTween = DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetDelay(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._plant, this._defaultScale.$clone(), 1.0), 25.0), DG.Tweening.Ease.OutBack), Bridge.fn.bind(this, function () {
                    this._plant.localScale = pc.Vec3.ZERO.clone();
                })), Bridge.fn.bind(this, function () {
                    this.SetState(_Project.Code.Core.Harvesting.FieldState.Grown);
                })), false);
                this._harvestingTween = DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._plant, this._defaultScale.$clone().clone().scale( 1.2 ), 0.01), DG.Tweening.Ease.Linear), 6, DG.Tweening.LoopType.Yoyo), Bridge.fn.bind(this, function () {
                    DG.Tweening.TweenExtensions.Restart(this._harvestedTween);
                })), false);
                this._harvestedTween = DG.Tweening.TweenSettingsExtensions.SetAutoKill$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._plant, pc.Vec3.ZERO.clone(), 0.3), Bridge.fn.bind(this, function () {
                    !Bridge.staticEquals(this.Harvested, null) ? this.Harvested() : null;
                    this.SetState(_Project.Code.Core.Harvesting.FieldState.Growing);
                })), false);
                this.SetState(this._state);
            },
            /*_Project.Code.Core.Harvesting.Field.Start end.*/

            /*_Project.Code.Core.Harvesting.Field.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#OnDestroy", this ); }

                DG.Tweening.TweenExtensions.Kill(this._harvestingTween);
                DG.Tweening.TweenExtensions.Kill(this._harvestedTween);
                DG.Tweening.TweenExtensions.Kill(this._growingTween);
            },
            /*_Project.Code.Core.Harvesting.Field.OnDestroy end.*/

            /*_Project.Code.Core.Harvesting.Field.Harvest start.*/
            Harvest: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#Harvest", this ); }

                if (this._state !== _Project.Code.Core.Harvesting.FieldState.Grown) {
                    throw new System.InvalidOperationException.$ctor1("Field is not grown");
                }
                this.SetState(_Project.Code.Core.Harvesting.FieldState.Harvesting);
            },
            /*_Project.Code.Core.Harvesting.Field.Harvest end.*/

            /*_Project.Code.Core.Harvesting.Field.Abort start.*/
            Abort: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#Abort", this ); }

                if (this._state !== _Project.Code.Core.Harvesting.FieldState.Harvesting) {
                    throw new System.InvalidOperationException.$ctor1("Field is not harvesting");
                }
                var flag = true;
            },
            /*_Project.Code.Core.Harvesting.Field.Abort end.*/

            /*_Project.Code.Core.Harvesting.Field.SetState start.*/
            SetState: function (state) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Field#SetState", this ); }

                this._state = state;
                UnityEngine.Debug.Log$1(System.String.format("State: {0}", [Bridge.box(this._state, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState))]));
                switch (state) {
                    case _Project.Code.Core.Harvesting.FieldState.Harvesting: 
                        DG.Tweening.TweenExtensions.Restart(this._harvestingTween);
                        DG.Tweening.TweenExtensions.Complete(this._harvestingTween);
                        break;
                    case _Project.Code.Core.Harvesting.FieldState.Growing: 
                        DG.Tweening.TweenExtensions.Restart(this._growingTween);
                        break;
                }
            },
            /*_Project.Code.Core.Harvesting.Field.SetState end.*/


        }
    });
    /*_Project.Code.Core.Harvesting.Field end.*/

    /*_Project.Code.Core.Harvesting.FieldsDropper start.*/
    Bridge.define("_Project.Code.Core.Harvesting.FieldsDropper", {
        fields: {
            _dropper: null
        },
        ctors: {
            ctor: function (dropper, fields) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.FieldsDropper#ctor", this ); }

                this.$initialize();
                this._dropper = dropper;
                fields.ForEach(Bridge.fn.bind(this, function (f) {
                    f.addHarvested(Bridge.fn.bind(this, function () {
                        this.OnHarvested(f.transform.position.$clone());
                    }));
                }));
            }
        },
        methods: {
            /*_Project.Code.Core.Harvesting.FieldsDropper.OnHarvested start.*/
            OnHarvested: function (position) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.FieldsDropper#OnHarvested", this ); }

                this._dropper.CreateDrop(_Project.Code.Core.Items.ItemType.Corn, position.$clone(), 2);
            },
            /*_Project.Code.Core.Harvesting.FieldsDropper.OnHarvested end.*/


        }
    });
    /*_Project.Code.Core.Harvesting.FieldsDropper end.*/

    /*_Project.Code.Core.Harvesting.FieldState start.*/
    Bridge.define("_Project.Code.Core.Harvesting.FieldState", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Grown: 1,
                Growing: 2,
                Harvesting: 3
            }
        }
    });
    /*_Project.Code.Core.Harvesting.FieldState end.*/

    /*_Project.Code.Core.Harvesting.Harvester start.*/
    Bridge.define("_Project.Code.Core.Harvesting.Harvester", {
        inherits: [System.IDisposable],
        fields: {
            _detector: null,
            _harvestingField: null
        },
        props: {
            IsHarvesting: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#IsHarvesting#get", this ); }

                    return UnityEngine.MonoBehaviour.op_Inequality(this._harvestingField, null);
                }
            }
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function (detector) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#ctor", this ); }

                this.$initialize();
                this._detector = detector;
                this._detector._Project$Code$Core$Collision$ICollisionDetector$addTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            }
        },
        methods: {
            /*_Project.Code.Core.Harvesting.Harvester.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#Dispose", this ); }

                this._detector._Project$Code$Core$Collision$ICollisionDetector$removeTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            },
            /*_Project.Code.Core.Harvesting.Harvester.Dispose end.*/

            /*_Project.Code.Core.Harvesting.Harvester.OnTriggered start.*/
            OnTriggered: function (collider, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#OnTriggered", this ); }

                var field = { };
                if (collider.TryGetComponent$1(_Project.Code.Core.Harvesting.Field, field)) {
                    if (type === _Project.Code.Core.Collision.CollisionType.Exit && UnityEngine.MonoBehaviour.op_Equality(this._harvestingField, field.v)) {
                        field.v.Abort();
                        this._harvestingField.removeHarvested(Bridge.fn.cacheBind(this, this.Cleanup));
                        this.Cleanup();
                    } else if (!this.IsHarvesting && field.v.CanHarvest) {
                        field.v.Harvest();
                        this._harvestingField = field.v;
                        this._harvestingField.addHarvested(Bridge.fn.cacheBind(this, this.Cleanup));
                    }
                }
            },
            /*_Project.Code.Core.Harvesting.Harvester.OnTriggered end.*/

            /*_Project.Code.Core.Harvesting.Harvester.Cleanup start.*/
            Cleanup: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Harvesting.Harvester#Cleanup", this ); }

                this._harvestingField = null;
            },
            /*_Project.Code.Core.Harvesting.Harvester.Cleanup end.*/


        }
    });
    /*_Project.Code.Core.Harvesting.Harvester end.*/

    /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler start.*/
    Bridge.define("_Project.Code.Core.Items.Handlers.InventoryCollisionHandler", {
        inherits: [System.IDisposable],
        fields: {
            _detector: null,
            _provider: null,
            _inventoryTransferer: null
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function (detector, provider, inventoryTransferer) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#ctor", this ); }

                this.$initialize();
                this._provider = provider;
                this._detector = detector;
                this._inventoryTransferer = inventoryTransferer;
                this._detector._Project$Code$Core$Collision$ICollisionDetector$addTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#Dispose", this ); }

                this._detector._Project$Code$Core$Collision$ICollisionDetector$removeTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            },
            /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler.Dispose end.*/

            /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler.OnTriggered start.*/
            OnTriggered: function (obj, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.InventoryCollisionHandler#OnTriggered", this ); }

                var inventory = { };
                if (obj.TryGetComponent$1(_Project.Code.Core.Items.Inventory.ItemInventory, inventory) && inventory.v.enabled) {
                    var provided = { };
                    if (type === _Project.Code.Core.Collision.CollisionType.Exit && this._inventoryTransferer.HasConnectionFor(inventory.v)) {
                        this._inventoryTransferer.Disconnect();
                    } else if (this._provider.TryGetStorage(inventory.v.ItemType, provided)) {
                        var result = this._inventoryTransferer.TrySetConnection(provided.v, inventory.v);
                        UnityEngine.Debug.Log$1((System.String.format("Connecting {0} to {1}: ", Bridge.box(inventory.v.ItemType, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType)), Bridge.box(provided.v.ItemType, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))) || "") + ((result ? "Connected" : "Failed") || ""));
                    }
                }
            },
            /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler.OnTriggered end.*/


        }
    });
    /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler end.*/

    /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler start.*/
    Bridge.define("_Project.Code.Core.Items.Handlers.ItemCollisionHandler", {
        inherits: [System.IDisposable],
        fields: {
            _detector: null,
            _provider: null,
            _transferer: null
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            ctor: function (detector, provider, transferer) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.ItemCollisionHandler#ctor", this ); }

                this.$initialize();
                this._transferer = transferer;
                this._provider = provider;
                this._detector = detector;
                this._transferer = transferer;
                this._detector._Project$Code$Core$Collision$ICollisionDetector$addTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.ItemCollisionHandler#Dispose", this ); }

                this._detector._Project$Code$Core$Collision$ICollisionDetector$removeTriggered(Bridge.fn.cacheBind(this, this.OnTriggered));
            },
            /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler.Dispose end.*/

            /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler.OnTriggered start.*/
            OnTriggered: function (obj, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Handlers.ItemCollisionHandler#OnTriggered", this ); }

                var item = { };
                var storage = { };
                if (type !== _Project.Code.Core.Collision.CollisionType.Exit && obj.TryGetComponent$1(_Project.Code.Core.Items.Item, item) && item.v.enabled && this._provider.TryGetStorage(item.v.Type, storage)) {
                    var result = this._transferer.TryTransfer(item.v, storage.v);
                    UnityEngine.Debug.Log$1((System.String.format("Transfering {0} to {1}: ", Bridge.box(item.v.Type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType)), Bridge.box(storage.v.ItemType, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))) || "") + ((result ? "success" : "failed") || ""));
                }
            },
            /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler.OnTriggered end.*/


        }
    });
    /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler end.*/

    /*_Project.Code.Core.Items.Inventory.InventoryProvider start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.InventoryProvider", {
        fields: {
            _storages: null
        },
        ctors: {
            ctor: function (storages) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.InventoryProvider#ctor", this ); }

                this.$initialize();
                this._storages = storages;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.InventoryProvider.HasStorage start.*/
            HasStorage: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.InventoryProvider#HasStorage", this ); }

                return System.Linq.Enumerable.from(this._storages, _Project.Code.Core.Items.Inventory.ItemInventory).any(function (s) {
                        return s.ItemType === type;
                    });
            },
            /*_Project.Code.Core.Items.Inventory.InventoryProvider.HasStorage end.*/

            /*_Project.Code.Core.Items.Inventory.InventoryProvider.TryGetStorage start.*/
            TryGetStorage: function (type, inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.InventoryProvider#TryGetStorage", this ); }

                inventory.v = System.Linq.Enumerable.from(this._storages, _Project.Code.Core.Items.Inventory.ItemInventory).firstOrDefault(Bridge.fn.bind(this, function (s) {
                        return s.ItemType === type;
                    }), null);
                return UnityEngine.MonoBehaviour.op_Inequality(inventory.v, null);
            },
            /*_Project.Code.Core.Items.Inventory.InventoryProvider.TryGetStorage end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.InventoryProvider end.*/

    /*_Project.Code.Core.Items.Inventory.InventoryType start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.InventoryType", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Receiver: 1,
                Sender: 2,
                Both: 3
            }
        }
    });
    /*_Project.Code.Core.Items.Inventory.InventoryType end.*/

    /*_Project.Code.Tutorial.IStorage start.*/
    Bridge.define("_Project.Code.Tutorial.IStorage", {
        $kind: 3
    });
    /*_Project.Code.Tutorial.IStorage end.*/

    /*_Project.Code.Core.Items.Inventory.StackInventoryView start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.StackInventoryView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _itemInventory: null,
            _spacing: 0,
            _attachTo: null,
            _destroyOnEmptied: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#init", this ); }

                this._spacing = 0.2;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#OnEnable", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this._itemInventory, null))) {
                    this._itemInventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                    this._itemInventory.addRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
                }
            },
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnEnable end.*/

            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#OnDisable", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this._itemInventory, null))) {
                    this._itemInventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                    this._itemInventory.removeRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
                }
            },
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnDisable end.*/

            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnRemoved start.*/
            OnRemoved: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#OnRemoved", this ); }

                if (this._itemInventory.Count === 0 && this._destroyOnEmptied) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                }
            },
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnRemoved end.*/

            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnAdded start.*/
            OnAdded: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.StackInventoryView#OnAdded", this ); }

                item.transform.parent = this._attachTo;
                item.transform.rotation = pc.Quat.IDENTITY.clone();
                var height = (((this._itemInventory.Count - 1) | 0)) * this._spacing;
                item.transform.localPosition = new pc.Vec3( 0.0, height, 0.0 );
                UnityEngine.Debug.Log$1(System.String.format("Collected {0}", [Bridge.box(item.Type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))]));
            },
            /*_Project.Code.Core.Items.Inventory.StackInventoryView.OnAdded end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.StackInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.TableStorageUpdater start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.TableStorageUpdater", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _itemInventory: null,
            _price: 0,
            _buyZone: null,
            _table: null,
            _customers: null,
            _counter: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#init", this ); }

                this._price = 10;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnEnable", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this._itemInventory, null))) {
                    this._itemInventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                }
            },
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnEnable end.*/

            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnDisable", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this._itemInventory, null))) {
                    this._itemInventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                }
            },
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnDisable end.*/

            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnAdded start.*/
            OnAdded: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#OnAdded", this ); }

                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(obj.transform, pc.Vec3.ZERO.clone(), 0.5)), function () {
                    obj.gameObject.SetActive(false);
                });
                this._counter = (this._counter + 1) | 0;
                if (this._counter >= this._price) {
                    this._itemInventory.SetOperation(_Project.Code.Core.Items.Inventory.InventoryType.None);
                    this._buyZone.SetActive(false);
                    this._table.transform.localScale = pc.Vec3.ZERO.clone();
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._table.transform, new pc.Vec3( 1, 1, 1 ), 0.5));
                    this._table.SetActive(true);
                    this.StartCoroutine$1(this.ShowCustomers());
                }
            },
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.OnAdded end.*/

            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.ShowCustomers start.*/
            ShowCustomers: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.TableStorageUpdater#ShowCustomers", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $t,
                    customer,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $t = Bridge.getEnumerator(this._customers);
                                        $step = 1;
                                        continue;
                                }
                                case 1: {
                                    if ($t.moveNext()) {
                                            customer = $t.Current;
                                            $step = 2;
                                            continue;
                                        }
                                    $step = 4;
                                    continue;
                                }
                                case 2: {
                                    customer.SetActive(true);
                                        $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 1;
                                    continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Items.Inventory.TableStorageUpdater.ShowCustomers end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.TableStorageUpdater end.*/

    /*_Project.Code.Core.Items.InventoryInitializer start.*/
    Bridge.define("_Project.Code.Core.Items.InventoryInitializer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _inventory: null,
            _count: 0,
            _itemsCreator: null
        },
        methods: {
            /*_Project.Code.Core.Items.InventoryInitializer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.InventoryInitializer#Start", this ); }

                this._itemsCreator = _Project.Code.Services.ServiceLocator.L.Resolve(_Project.Code.Services.ItemsCreation.ItemsCreator);
                var type = this._inventory.ItemType;
                for (var i = 0; i < this._count; i = (i + 1) | 0) {
                    var item = this._itemsCreator.Create(type);
                    item.enabled = false;
                    this._inventory.Add(item);
                }
            },
            /*_Project.Code.Core.Items.InventoryInitializer.Start end.*/


        }
    });
    /*_Project.Code.Core.Items.InventoryInitializer end.*/

    /*_Project.Code.Core.Items.Item start.*/
    Bridge.define("_Project.Code.Core.Items.Item", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _collider: null,
            _type: 0
        },
        props: {
            Type: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Item#Type#get", this ); }

                    return this._type;
                }
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Item.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Item#OnEnable", this ); }

                this._collider.enabled = true;
            },
            /*_Project.Code.Core.Items.Item.OnEnable end.*/

            /*_Project.Code.Core.Items.Item.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Item#OnDisable", this ); }

                this._collider.enabled = false;
            },
            /*_Project.Code.Core.Items.Item.OnDisable end.*/


        }
    });
    /*_Project.Code.Core.Items.Item end.*/

    /*_Project.Code.Core.Items.ItemType start.*/
    Bridge.define("_Project.Code.Core.Items.ItemType", {
        $kind: 6,
        statics: {
            fields: {
                None: 0,
                Corn: 1,
                Coin: 2,
                Popcorn: 3
            }
        }
    });
    /*_Project.Code.Core.Items.ItemType end.*/

    /*_Project.Code.Core.Items.Transfering.InventoryTransferer start.*/
    Bridge.define("_Project.Code.Core.Items.Transfering.InventoryTransferer", {
        fields: {
            _coroutineRunner: null,
            _transferFactory: null,
            _connection: null
        },
        props: {
            HasConnection: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#HasConnection#get", this ); }

                    return this.Connection != null;
                }
            },
            Connection: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#Connection#get", this ); }

                    return this._connection;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#Connection#set", this ); }

                    this._connection = value;
                    if (value == null) {
                        this.OnDisconnected();
                    } else {
                        this.OnConnected();
                    }
                }
            }
        },
        ctors: {
            ctor: function (coroutineRunner) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#ctor", this ); }

                this.$initialize();
                this._coroutineRunner = coroutineRunner;
                this._transferFactory = new _Project.Code.Core.Items.Transfering.TransferFactory();
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.HasConnectionFor start.*/
            HasConnectionFor: function (inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#HasConnectionFor", this ); }

                if (!this.HasConnection) {
                    return false;
                }
                return UnityEngine.MonoBehaviour.op_Equality(this.Connection.Sender, inventory) || UnityEngine.MonoBehaviour.op_Equality(this.Connection.Receiver, inventory);
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.HasConnectionFor end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.TrySetConnection start.*/
            TrySetConnection: function (storage1, storage2) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#TrySetConnection", this ); }

                if (this.HasConnection) {
                    return false;
                }
                var connection = { };
                if (!this._transferFactory.TryCreate(storage1, storage2, connection)) {
                    return false;
                }
                this.Connection = connection.v;
                return true;
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.TrySetConnection end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.Disconnect start.*/
            Disconnect: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#Disconnect", this ); }

                if (!this.HasConnection) {
                    throw new System.InvalidOperationException.$ctor1("No connection set");
                }
                this.Connection = null;
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.Disconnect end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.TransferingAll start.*/
            TransferingAll: function (from, to) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#TransferingAll", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    collectable,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( this.HasConnection ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 1: {
                                    if (!this.CanTransfer(from, to)) {
                                            this.Disconnect();
                                            $step = 4;
                                            continue;
                                        }
                                        collectable = from.Get();
                                        collectable.transform.parent = null;
                                        $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(collectable.transform, to.transform.position.$clone(), 0.1)));
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    to.Add(collectable);
                                        UnityEngine.Debug.Log$1("Transfered unit");
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 4: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.TransferingAll end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.CanTransfer start.*/
            CanTransfer: function (from, to) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#CanTransfer", this ); }

                return from.CanGet() && to.CanAdd();
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.CanTransfer end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.OnDisconnected start.*/
            OnDisconnected: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#OnDisconnected", this ); }

                UnityEngine.Debug.Log$1("Disconnected");
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.OnDisconnected end.*/

            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.OnConnected start.*/
            OnConnected: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.InventoryTransferer#OnConnected", this ); }

                UnityEngine.Debug.Log$1("Connected");
                this._coroutineRunner._Project$Code$Services$CoroutineRunner$ICoroutineRunner$Launch(this.TransferingAll(this.Connection.Sender, this.Connection.Receiver));
            },
            /*_Project.Code.Core.Items.Transfering.InventoryTransferer.OnConnected end.*/


        }
    });
    /*_Project.Code.Core.Items.Transfering.InventoryTransferer end.*/

    /*_Project.Code.Core.Items.Transfering.ItemTransferer start.*/
    Bridge.define("_Project.Code.Core.Items.Transfering.ItemTransferer", {
        fields: {
            _reservations: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#init", this ); }

                this._reservations = new (System.Collections.Generic.Dictionary$2(_Project.Code.Core.Items.Inventory.ItemInventory,System.Int32)).ctor();
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.TryTransfer start.*/
            TryTransfer: function (item, inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#TryTransfer", this ); }

                if (this.CanTransfer(item, inventory)) {
                    this.Transfer(item, inventory);
                    return true;
                }
                return false;
            },
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.TryTransfer end.*/

            /*_Project.Code.Core.Items.Transfering.ItemTransferer.Transfer start.*/
            Transfer: function (item, to) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#Transfer", this ); }

                var _discard1 = { };
                if (this._reservations.tryGetValue(to, _discard1)) {
                    this._reservations.setItem(to, (this._reservations.getItem(to) + 1) | 0);
                } else {
                    this._reservations.add(to, 1);
                }
                item.transform.parent = null;
                item.enabled = false;
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(item.transform, to.transform.position.$clone(), 0.2)), Bridge.fn.bind(this, function () {
                    to.Add(item);
                    this._reservations.setItem(to, (this._reservations.getItem(to) - 1) | 0);
                    UnityEngine.Debug.Log$1(System.String.format("Transfered {0} to {1}.", Bridge.box(item.Type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType)), to));
                }));
            },
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.Transfer end.*/

            /*_Project.Code.Core.Items.Transfering.ItemTransferer.CanTransfer start.*/
            CanTransfer: function (item, inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#CanTransfer", this ); }

                return item.Type === inventory.ItemType && inventory.CanAdd() && ((this.GetReservedCount(inventory) + inventory.Count) | 0) < inventory.Capacity;
            },
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.CanTransfer end.*/

            /*_Project.Code.Core.Items.Transfering.ItemTransferer.GetReservedCount start.*/
            GetReservedCount: function (inventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.ItemTransferer#GetReservedCount", this ); }

                return this._reservations.containsKey(inventory) ? this._reservations.getItem(inventory) : 0;
            },
            /*_Project.Code.Core.Items.Transfering.ItemTransferer.GetReservedCount end.*/


        }
    });
    /*_Project.Code.Core.Items.Transfering.ItemTransferer end.*/

    /*_Project.Code.Core.Items.Transfering.Transfer start.*/
    Bridge.define("_Project.Code.Core.Items.Transfering.Transfer", {
        fields: {
            Sender: null,
            Receiver: null
        },
        ctors: {
            ctor: function (sender, receiver) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.Transfer#ctor", this ); }

                this.$initialize();
                this.Sender = sender;
                this.Receiver = receiver;
            }
        }
    });
    /*_Project.Code.Core.Items.Transfering.Transfer end.*/

    /*_Project.Code.Core.Items.Transfering.TransferFactory start.*/
    Bridge.define("_Project.Code.Core.Items.Transfering.TransferFactory", {
        methods: {
            /*_Project.Code.Core.Items.Transfering.TransferFactory.TryCreate start.*/
            TryCreate: function (storage1, storage2, connection) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.TransferFactory#TryCreate", this ); }

                connection.v = null;
                if (UnityEngine.MonoBehaviour.op_Equality(storage1, storage2)) {
                    return false;
                }
                if (!this.DoItemTypesMatch(storage1, storage2)) {
                    return false;
                }
                if (this.CanGive(storage1) && this.CanGet(storage2)) {
                    connection.v = new _Project.Code.Core.Items.Transfering.Transfer(storage1, storage2);
                    return true;
                }
                if (this.CanGive(storage2) && this.CanGet(storage1)) {
                    connection.v = new _Project.Code.Core.Items.Transfering.Transfer(storage2, storage1);
                    return true;
                }
                return false;
            },
            /*_Project.Code.Core.Items.Transfering.TransferFactory.TryCreate end.*/

            /*_Project.Code.Core.Items.Transfering.TransferFactory.DoItemTypesMatch start.*/
            DoItemTypesMatch: function (storage1, storage2) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.TransferFactory#DoItemTypesMatch", this ); }

                if (storage1.ItemType === _Project.Code.Core.Items.ItemType.None || storage2.ItemType === _Project.Code.Core.Items.ItemType.None) {
                    return storage1.ItemType !== storage2.ItemType;
                }
                return storage1.ItemType === storage2.ItemType;
            },
            /*_Project.Code.Core.Items.Transfering.TransferFactory.DoItemTypesMatch end.*/

            /*_Project.Code.Core.Items.Transfering.TransferFactory.CanGet start.*/
            CanGet: function (itemInventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.TransferFactory#CanGet", this ); }

                return itemInventory.InventoryType === _Project.Code.Core.Items.Inventory.InventoryType.Receiver || itemInventory.InventoryType === _Project.Code.Core.Items.Inventory.InventoryType.Both;
            },
            /*_Project.Code.Core.Items.Transfering.TransferFactory.CanGet end.*/

            /*_Project.Code.Core.Items.Transfering.TransferFactory.CanGive start.*/
            CanGive: function (itemInventory) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Transfering.TransferFactory#CanGive", this ); }

                return itemInventory.InventoryType === _Project.Code.Core.Items.Inventory.InventoryType.Sender || itemInventory.InventoryType === _Project.Code.Core.Items.Inventory.InventoryType.Both;
            },
            /*_Project.Code.Core.Items.Transfering.TransferFactory.CanGive end.*/


        }
    });
    /*_Project.Code.Core.Items.Transfering.TransferFactory end.*/

    /*_Project.Code.Core.PopcornFarm.CornFarm start.*/
    Bridge.define("_Project.Code.Core.PopcornFarm.CornFarm", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _fillImage: null,
            _resource: null,
            _final: null,
            _itemsCreator: null,
            _count: 0,
            _isWorking: false
        },
        methods: {
            /*_Project.Code.Core.PopcornFarm.CornFarm.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#Start", this ); }

                this._fillImage.fillAmount = 0.0;
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.Start end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#OnEnable", this ); }

                this._resource.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.OnEnable end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#OnDisable", this ); }

                this._resource.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.OnDisable end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.OnAdded start.*/
            OnAdded: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#OnAdded", this ); }

                obj.gameObject.SetActive(false);
                this._count = (this._count + 1) | 0;
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.OnAdded end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#Update", this ); }

                if (this._count > 0 && !this._isWorking) {
                    this.StartCoroutine$1(this.AnimateCircle(Bridge.fn.cacheBind(this, this.ProduceCorn)));
                }
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.Update end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.ProduceCorn start.*/
            ProduceCorn: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#ProduceCorn", this ); }

                UnityEngine.Debug.Log$1("Produced");
                var popcorn = this._itemsCreator.Create(_Project.Code.Core.Items.ItemType.Popcorn);
                popcorn.enabled = false;
                this._final.Add(popcorn);
                this._count = (this._count - 1) | 0;
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.ProduceCorn end.*/

            /*_Project.Code.Core.PopcornFarm.CornFarm.AnimateCircle start.*/
            AnimateCircle: function (onFinished) {
if ( TRACE ) { TRACE( "_Project.Code.Core.PopcornFarm.CornFarm#AnimateCircle", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    duration,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (onFinished === void 0) { onFinished = null; }
                                        this._isWorking = true;
                                        duration = 0.5;
                                    $step = 1;
                                    continue;
                                }
                                case 1: {
                                    if ( this._fillImage.fillAmount < 1.0 ) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    this._fillImage.fillAmount += UnityEngine.Time.deltaTime / duration;
                                        $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    
                                        $step = 1;
                                        continue;
                                }
                                case 4: {
                                    this._fillImage.fillAmount = 0.0;
                                        this._isWorking = false;
                                        !Bridge.staticEquals(onFinished, null) ? onFinished() : null;

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.PopcornFarm.CornFarm.AnimateCircle end.*/


        }
    });
    /*_Project.Code.Core.PopcornFarm.CornFarm end.*/

    /*_Project.Code.Core.Workers.WorkersAnimation start.*/
    Bridge.define("_Project.Code.Core.Workers.WorkersAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _plants: null,
            _worker: null,
            _durationOffset: 0,
            _endPointOffset: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.WorkersAnimation#init", this ); }

                this._endPointOffset = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*_Project.Code.Core.Workers.WorkersAnimation.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.WorkersAnimation#Start", this ); }
 },
            /*_Project.Code.Core.Workers.WorkersAnimation.Start end.*/

            /*_Project.Code.Core.Workers.WorkersAnimation.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.WorkersAnimation#Update", this ); }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.Space)) {
                    this.StartCoroutine$1(this.AnimateField());
                    this.StartCoroutine$1(this.AnimateWorker());
                    this.StartCoroutine$1(this.AnimateWorkerBreath());
                }
            },
            /*_Project.Code.Core.Workers.WorkersAnimation.Update end.*/

            /*_Project.Code.Core.Workers.WorkersAnimation.AnimateWorkerBreath start.*/
            AnimateWorkerBreath: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.WorkersAnimation#AnimateWorkerBreath", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    DG.Tweening.TweenExtensions.Goto(DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._worker, new pc.Vec3( 1, 1, 1 ).clone().scale( 1.1 ), 0.3), -1, DG.Tweening.LoopType.Yoyo)), UnityEngine.Random.Range$1(0.0, 1.0));
                                        $enumerator.current = null;
                                        $step = 1;
                                        return true;
                                }
                                case 1: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Workers.WorkersAnimation.AnimateWorkerBreath end.*/

            /*_Project.Code.Core.Workers.WorkersAnimation.AnimateWorker start.*/
            AnimateWorker: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.WorkersAnimation#AnimateWorker", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    plants,
                    endPoint,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    Bridge["Bridge._"] = this._plants[0].position.$clone();
                                        plants = this._plants;
                                        endPoint = plants[((plants.length - 1) | 0)].position.$clone().add( this._endPointOffset );
                                        $enumerator.current = new UnityEngine.WaitForSeconds(0.5 + this._durationOffset);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(this._worker, endPoint.$clone(), this._plants.length), DG.Tweening.Ease.Linear));

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Workers.WorkersAnimation.AnimateWorker end.*/

            /*_Project.Code.Core.Workers.WorkersAnimation.AnimateField start.*/
            AnimateField: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Workers.WorkersAnimation#AnimateField", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    i,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(this._durationOffset);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    i = 0;
                                        $step = 2;
                                        continue;
                                }
                                case 2: {
                                    if ( i < this._plants.length ) {
                                            $step = 3;
                                            continue;
                                        }
                                    $step = 6;
                                    continue;
                                }
                                case 3: {
                                    $enumerator.current = DG.Tweening.TweenExtensions.WaitForCompletion(DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._plants[i], pc.Vec3.ZERO.clone(), 1.0)));
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    $step = 5;
                                    continue;
                                }
                                case 5: {
                                    i = (i + 1) | 0;
                                    $step = 2;
                                    continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Core.Workers.WorkersAnimation.AnimateField end.*/


        }
    });
    /*_Project.Code.Core.Workers.WorkersAnimation end.*/

    /*_Project.Code.Entry.Entry start.*/
    Bridge.define("_Project.Code.Entry.Entry", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _joystick: null
        },
        methods: {
            /*_Project.Code.Entry.Entry.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.Entry#Awake", this ); }

                _Project.Code.Services.ServiceLocator.L.Container = new Assets.CourseGame.Develop.DI.DIContainer.ctor();
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.CoroutineRunner.CoroutineRunner, Bridge.fn.bind(this, function (_) {
                    return this.GetComponent(_Project.Code.Services.CoroutineRunner.CoroutineRunner);
                }));
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.Input.MoveInput, Bridge.fn.bind(this, function (_) {
                    return new _Project.Code.Services.Input.MoveInput(this._joystick);
                }));
                _Project.Code.Services.ServiceLocator.L.Container.Initialize();
            },
            /*_Project.Code.Entry.Entry.Awake end.*/

            /*_Project.Code.Entry.Entry.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.Entry#OnDestroy", this ); }

                _Project.Code.Services.ServiceLocator.L.Container.Dispose();
                _Project.Code.Services.ServiceLocator.L.Container = null;
            },
            /*_Project.Code.Entry.Entry.OnDestroy end.*/


        }
    });
    /*_Project.Code.Entry.Entry end.*/

    /*_Project.Code.Entry.EntryPoint start.*/
    Bridge.define("_Project.Code.Entry.EntryPoint", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _joystick: null,
            _itemPrefabs: null,
            _coroutineRunner: null
        },
        methods: {
            /*_Project.Code.Entry.EntryPoint.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.EntryPoint#Awake", this ); }

                _Project.Code.Services.ServiceLocator.L.Container = new Assets.CourseGame.Develop.DI.DIContainer.ctor();
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.CoroutineRunner.CoroutineRunner, Bridge.fn.bind(this, function (_) {
                    return this.GetComponent(_Project.Code.Services.CoroutineRunner.CoroutineRunner);
                }));
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.Input.MoveInput, Bridge.fn.bind(this, function (_) {
                    return new _Project.Code.Services.Input.MoveInput(this._joystick);
                }));
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.ItemsCreation.ItemsCreator, Bridge.fn.bind(this, function (_) {
                    return new _Project.Code.Services.ItemsCreation.ItemsCreator(this._itemPrefabs);
                }));
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Services.ItemsCreation.Dropper, function (c) {
                    return new _Project.Code.Services.ItemsCreation.Dropper(c.Resolve(_Project.Code.Services.ItemsCreation.ItemsCreator));
                });
                _Project.Code.Services.ServiceLocator.L.Reg(_Project.Code.Core.Harvesting.FieldsDropper, Bridge.fn.bind(this, function (c) {
                    return new _Project.Code.Core.Harvesting.FieldsDropper(c.Resolve(_Project.Code.Services.ItemsCreation.Dropper), this.GetFields());
                }));
                _Project.Code.Services.ServiceLocator.L.Container.Initialize();
            },
            /*_Project.Code.Entry.EntryPoint.Awake end.*/

            /*_Project.Code.Entry.EntryPoint.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.EntryPoint#OnDestroy", this ); }

                _Project.Code.Services.ServiceLocator.L.Container.Dispose();
                _Project.Code.Services.ServiceLocator.L.Container = null;
            },
            /*_Project.Code.Entry.EntryPoint.OnDestroy end.*/

            /*_Project.Code.Entry.EntryPoint.GetFields start.*/
            GetFields: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.EntryPoint#GetFields", this ); }

                var $t;
                return ($t = _Project.Code.Core.Harvesting.Field, System.Linq.Enumerable.from(UnityEngine.Object.FindObjectsOfType(_Project.Code.Core.Harvesting.Field), $t).toList($t));
            },
            /*_Project.Code.Entry.EntryPoint.GetFields end.*/


        }
    });
    /*_Project.Code.Entry.EntryPoint end.*/

    /*_Project.Code.Entry.IEnable start.*/
    Bridge.define("_Project.Code.Entry.IEnable", {
        $kind: 3
    });
    /*_Project.Code.Entry.IEnable end.*/

    /*_Project.Code.Entry.IFiniteState start.*/
    Bridge.define("_Project.Code.Entry.IFiniteState", {
        $kind: 3
    });
    /*_Project.Code.Entry.IFiniteState end.*/

    /*_Project.Code.Tutorial.IStorageFabric start.*/
    Bridge.define("_Project.Code.Tutorial.IStorageFabric", {
        $kind: 3
    });
    /*_Project.Code.Tutorial.IStorageFabric end.*/

    /*_Project.Code.Selling.Customer start.*/
    Bridge.define("_Project.Code.Selling.Customer", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _bubbleView: null,
            _spriteRenderer: null,
            OrderSize: 0,
            Money: 0
        },
        methods: {
            /*_Project.Code.Selling.Customer.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Customer#Awake", this ); }

                this._spriteRenderer = this.GetComponent(UnityEngine.SpriteRenderer);
            },
            /*_Project.Code.Selling.Customer.Awake end.*/

            /*_Project.Code.Selling.Customer.Init start.*/
            Init: function (sprite, orderSize, money) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Customer#Init", this ); }

                this.OrderSize = orderSize;
                this.Money = money;
                this._spriteRenderer.sprite = sprite;
                this._bubbleView.SetText(Bridge.toString(orderSize));
            },
            /*_Project.Code.Selling.Customer.Init end.*/

            /*_Project.Code.Selling.Customer.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Customer#OnEnable", this ); }

                this.transform.localScale = pc.Vec3.ZERO.clone();
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, new pc.Vec3( 1, 1, 1 ), 0.5)), Bridge.fn.bind(this, function () {
                    this._bubbleView.gameObject.SetActive(true);
                }));
            },
            /*_Project.Code.Selling.Customer.OnEnable end.*/

            /*_Project.Code.Selling.Customer.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Customer#OnDisable", this ); }

                this._bubbleView.gameObject.SetActive(false);
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this.transform, pc.Vec3.ZERO.clone(), 0.5));
            },
            /*_Project.Code.Selling.Customer.OnDisable end.*/


        }
    });
    /*_Project.Code.Selling.Customer end.*/

    /*_Project.Code.Selling.ILine start.*/
    Bridge.define("_Project.Code.Selling.ILine", {
        $kind: 3
    });
    /*_Project.Code.Selling.ILine end.*/

    /*_Project.Code.Selling.Line.BubbleView start.*/
    Bridge.define("_Project.Code.Selling.Line.BubbleView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _text: null,
            _body: null
        },
        methods: {
            /*_Project.Code.Selling.Line.BubbleView.SetText start.*/
            SetText: function (text) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.BubbleView#SetText", this ); }

                this._text.text = text;
            },
            /*_Project.Code.Selling.Line.BubbleView.SetText end.*/

            /*_Project.Code.Selling.Line.BubbleView.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.BubbleView#OnEnable", this ); }

                this._body.localScale = pc.Vec3.ZERO.clone();
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._body, new pc.Vec3( 1, 1, 1 ), 1.0));
            },
            /*_Project.Code.Selling.Line.BubbleView.OnEnable end.*/


        }
    });
    /*_Project.Code.Selling.Line.BubbleView end.*/

    /*_Project.Code.Selling.Line.CustomerAppearanceAnimation start.*/
    Bridge.define("_Project.Code.Selling.Line.CustomerAppearanceAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _body: null,
            _bubble: null,
            _startBodyScale: null,
            _startBubbleScale: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.CustomerAppearanceAnimation#init", this ); }

                this._startBodyScale = new UnityEngine.Vector3();
                this._startBubbleScale = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*_Project.Code.Selling.Line.CustomerAppearanceAnimation.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.CustomerAppearanceAnimation#Awake", this ); }

                this._startBodyScale = this._body.transform.localScale.$clone();
                this._startBubbleScale = this._bubble.transform.localScale.$clone();
            },
            /*_Project.Code.Selling.Line.CustomerAppearanceAnimation.Awake end.*/

            /*_Project.Code.Selling.Line.CustomerAppearanceAnimation.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.CustomerAppearanceAnimation#OnEnable", this ); }

                this._bubble.gameObject.SetActive(false);
                this._bubble.transform.localScale = pc.Vec3.ZERO.clone();
                var anim = DG.Tweening.ShortcutExtensions.DOScale$1(this._bubble.transform, this._startBubbleScale.$clone(), 0.5);
                this._body.transform.localScale = pc.Vec3.ZERO.clone();
                DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOScale$1(this._body.transform, this._startBodyScale.$clone(), 0.5)), Bridge.fn.bind(this, function () {
                    this._bubble.gameObject.SetActive(true);
                    DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), anim);
                }));
            },
            /*_Project.Code.Selling.Line.CustomerAppearanceAnimation.OnEnable end.*/


        }
    });
    /*_Project.Code.Selling.Line.CustomerAppearanceAnimation end.*/

    /*_Project.Code.Selling.Seller start.*/
    Bridge.define("_Project.Code.Selling.Seller", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _moneyPrefab: null,
            _lineMb: null,
            _line: null,
            _productInventory: null,
            _moneyInventory: null,
            _currentCustomer: null
        },
        methods: {
            /*_Project.Code.Selling.Seller.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#Awake", this ); }

                this._line = this._lineMb;
            },
            /*_Project.Code.Selling.Seller.Awake end.*/

            /*_Project.Code.Selling.Seller.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#Update", this ); }

                var customer = { };
                if (!(UnityEngine.MonoBehaviour.op_Inequality(this._currentCustomer, null)) && this._line._Project$Code$Selling$ILine$TryGetCustomer(customer) && customer.v.enabled && customer.v.OrderSize <= this._productInventory.Count) {
                    this._currentCustomer = customer.v;
                    this.Serve();
                }
            },
            /*_Project.Code.Selling.Seller.Update end.*/

            /*_Project.Code.Selling.Seller.Serve start.*/
            Serve: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#Serve", this ); }

                var sequence = DG.Tweening.DOTween.Sequence();
                DG.Tweening.TweenSettingsExtensions.AppendInterval(sequence, 0.5);
                for (var i = 0; i < this._currentCustomer.OrderSize; i = (i + 1) | 0) {
                    var item = { v : this._productInventory.Get() };
                    var tween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(item.v.transform, this._currentCustomer.transform.position.$clone(), 0.5), (function ($me, item) {
                        return function () {
                            UnityEngine.Object.Destroy(item.v.gameObject);
                        };
                    })(this, item));
                    DG.Tweening.TweenSettingsExtensions.Join(sequence, tween);
                }
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, Bridge.fn.cacheBind(this, this.GetPaid)));
            },
            /*_Project.Code.Selling.Seller.Serve end.*/

            /*_Project.Code.Selling.Seller.GetPaid start.*/
            GetPaid: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#GetPaid", this ); }

                var count = this._currentCustomer.Money;
                var sequence = DG.Tweening.DOTween.Sequence();
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var money = { v : UnityEngine.Object.Instantiate(_Project.Code.Core.Items.Item, this._moneyPrefab) };
                    money.v.enabled = false;
                    money.v.transform.position = this._currentCustomer.transform.position.$clone();
                    var tween = DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions), DG.Tweening.ShortcutExtensions.DOMove(money.v.transform, this._moneyInventory.transform.position.$clone(), 0.5), (function ($me, money) {
                        return Bridge.fn.bind($me, function () {
                            this._moneyInventory.Add(money.v);
                        });
                    })(this, money));
                    DG.Tweening.TweenSettingsExtensions.Join(sequence, tween);
                }
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, Bridge.fn.cacheBind(this, this.OnServed)));
            },
            /*_Project.Code.Selling.Seller.GetPaid end.*/

            /*_Project.Code.Selling.Seller.OnServed start.*/
            OnServed: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Seller#OnServed", this ); }

                var customer = this._currentCustomer;
                this._currentCustomer = null;
                this._line._Project$Code$Selling$ILine$OnCustomerServed(customer);
            },
            /*_Project.Code.Selling.Seller.OnServed end.*/


        }
    });
    /*_Project.Code.Selling.Seller end.*/

    /*_Project.Code.Services.CoroutineRunner.ICoroutineRunner start.*/
    Bridge.define("_Project.Code.Services.CoroutineRunner.ICoroutineRunner", {
        $kind: 3
    });
    /*_Project.Code.Services.CoroutineRunner.ICoroutineRunner end.*/

    /*_Project.Code.Services.Input.IMoveInput start.*/
    Bridge.define("_Project.Code.Services.Input.IMoveInput", {
        $kind: 3
    });
    /*_Project.Code.Services.Input.IMoveInput end.*/

    /*_Project.Code.Services.ItemsCreation.Dropper start.*/
    Bridge.define("_Project.Code.Services.ItemsCreation.Dropper", {
        fields: {
            _creator: null
        },
        ctors: {
            ctor: function (creator) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.Dropper#ctor", this ); }

                this.$initialize();
                this._creator = creator;
            }
        },
        methods: {
            /*_Project.Code.Services.ItemsCreation.Dropper.CreateDrop start.*/
            CreateDrop: function (type, position, count) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.Dropper#CreateDrop", this ); }

                if (count === void 0) { count = 4; }
                var items = new (System.Collections.Generic.List$1(_Project.Code.Core.Items.Item)).$ctor2(count);
                for (var j = 0; j < count; j = (j + 1) | 0) {
                    var item = this._creator.Create(type);
                    item.transform.position = position.$clone();
                    item.transform.rotation = new pc.Quat().setFromEulerAngles_Unity( 0.0, 0.0, UnityEngine.Random.Range(0, 360) );
                    item.enabled = false;
                    items.add(item);
                }
                this.Animate(items, function () {
                    items.ForEach(function (i) {
                        i.enabled = true;
                    });
                });
            },
            /*_Project.Code.Services.ItemsCreation.Dropper.CreateDrop end.*/

            /*_Project.Code.Services.ItemsCreation.Dropper.Animate start.*/
            Animate: function (items, onCompleted) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.Dropper#Animate", this ); }

                var $t;
                if (onCompleted === void 0) { onCompleted = null; }
                var duration = 0.3;
                var radius = 0.3;
                var power = 0.3;
                var jumps = 1;
                var sequence = DG.Tweening.DOTween.Sequence();
                $t = Bridge.getEnumerator(items, _Project.Code.Core.Items.Item);
                try {
                    while ($t.moveNext()) {
                        var item = $t.Current;
                        var pointOnCircle = UnityEngine.Vector3.FromVector2(UnityEngine.Random.insideUnitCircle.clone().normalize().$clone());
                        var targetPosition = item.transform.position.$clone().add( pointOnCircle.$clone().clone().scale( radius ) );
                        DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.ShortcutExtensions.DOJump(item.transform, targetPosition.$clone(), power, jumps, duration));
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, function () {
                    !Bridge.staticEquals(onCompleted, null) ? onCompleted() : null;
                }));
            },
            /*_Project.Code.Services.ItemsCreation.Dropper.Animate end.*/


        }
    });
    /*_Project.Code.Services.ItemsCreation.Dropper end.*/

    /*_Project.Code.Services.ItemsCreation.ItemsCreator start.*/
    Bridge.define("_Project.Code.Services.ItemsCreation.ItemsCreator", {
        fields: {
            _prefabs: null
        },
        ctors: {
            ctor: function (prefabs) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.ItemsCreator#ctor", this ); }

                this.$initialize();
                this._prefabs = prefabs;
            }
        },
        methods: {
            /*_Project.Code.Services.ItemsCreation.ItemsCreator.Create start.*/
            Create: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ItemsCreation.ItemsCreator#Create", this ); }

                var prefab = System.Linq.Enumerable.from(this._prefabs, _Project.Code.Core.Items.Item).firstOrDefault(Bridge.fn.bind(this, function (p) {
                        return p.Type === type;
                    }), null);
                if (prefab == null) {
                    throw new System.NullReferenceException.$ctor1("No prefab for type " + System.Enum.toString(_Project.Code.Core.Items.ItemType, type));
                }
                return UnityEngine.Object.Instantiate$2(_Project.Code.Core.Items.Item, prefab, pc.Vec3.ZERO.clone(), pc.Quat.IDENTITY.clone());
            },
            /*_Project.Code.Services.ItemsCreation.ItemsCreator.Create end.*/


        }
    });
    /*_Project.Code.Services.ItemsCreation.ItemsCreator end.*/

    /*_Project.Code.Services.ServiceLocator.L start.*/
    Bridge.define("_Project.Code.Services.ServiceLocator.L", {
        statics: {
            fields: {
                _container: null
            },
            props: {
                Container: {
                    get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Container#get", this ); }

                        return _Project.Code.Services.ServiceLocator.L._container || (function () {
                            throw new System.InvalidOperationException.$ctor1("ServiceLocator not initialized.");
                        })();
                    },
                    set: function (value) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Container#set", this ); }

                        _Project.Code.Services.ServiceLocator.L._container = value;
                    }
                }
            },
            methods: {
                /*_Project.Code.Services.ServiceLocator.L.Init:static start.*/
                Init: function (container) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Init", this ); }

                    _Project.Code.Services.ServiceLocator.L._container = container;
                },
                /*_Project.Code.Services.ServiceLocator.L.Init:static end.*/

                /*_Project.Code.Services.ServiceLocator.L.Reg:static start.*/
                Reg: function (TService, creator) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Reg", this ); }

                    return _Project.Code.Services.ServiceLocator.L._container.RegisterAsSingle(TService, creator);
                },
                /*_Project.Code.Services.ServiceLocator.L.Reg:static end.*/

                /*_Project.Code.Services.ServiceLocator.L.Resolve:static start.*/
                Resolve: function (TService) {
if ( TRACE ) { TRACE( "_Project.Code.Services.ServiceLocator.L#Resolve", this ); }

                    return _Project.Code.Services.ServiceLocator.L._container.Resolve(TService);
                },
                /*_Project.Code.Services.ServiceLocator.L.Resolve:static end.*/


            }
        }
    });
    /*_Project.Code.Services.ServiceLocator.L end.*/

    /*_Project.Code.Tutorial.InfinitySignAnimation start.*/
    Bridge.define("_Project.Code.Tutorial.InfinitySignAnimation", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _width: 0,
            _duration: 0,
            _tweener: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.InfinitySignAnimation#init", this ); }

                this._width = 90.0;
                this._duration = 0.3;
            }
        },
        methods: {
            /*_Project.Code.Tutorial.InfinitySignAnimation.AnimateInfinityLoop start.*/
            AnimateInfinityLoop: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.InfinitySignAnimation#AnimateInfinityLoop", this ); }

                var resolution = 50;
                var path = System.Array.init(resolution, function (){
                    return new UnityEngine.Vector3();
                }, UnityEngine.Vector3);
                for (var i = 0; i < resolution; i = (i + 1) | 0) {
                    var t = (Bridge.Int.mul(i, 2)) * 3.14159274 / resolution;
                    var x = this._width * Math.cos(t) / (1.0 + Math.sin(t) * Math.sin(t));
                    var y = this._width * Math.cos(t) * Math.sin(t) / (1.0 + Math.sin(t) * Math.sin(t));
                    path[i] = new pc.Vec3( x, y, 0.0 ).add( this.transform.position );
                }
                this.transform.position = path[0].$clone();
                this._tweener = DG.Tweening.TweenExtensions.Play(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetLoops(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetOptions$1(DG.Tweening.ShortcutExtensions.DOPath$1(this.transform, path, this._duration, DG.Tweening.PathType.CatmullRom), true), DG.Tweening.Ease.Linear), -1));
            },
            /*_Project.Code.Tutorial.InfinitySignAnimation.AnimateInfinityLoop end.*/

            /*_Project.Code.Tutorial.InfinitySignAnimation.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.InfinitySignAnimation#OnEnable", this ); }

                this.AnimateInfinityLoop();
            },
            /*_Project.Code.Tutorial.InfinitySignAnimation.OnEnable end.*/

            /*_Project.Code.Tutorial.InfinitySignAnimation.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.InfinitySignAnimation#OnDisable", this ); }

                DG.Tweening.TweenExtensions.Kill(this._tweener);
                this._tweener = null;
            },
            /*_Project.Code.Tutorial.InfinitySignAnimation.OnDisable end.*/


        }
    });
    /*_Project.Code.Tutorial.InfinitySignAnimation end.*/

    /*_Project.Code.Tutorial.StorageTrashView start.*/
    Bridge.define("_Project.Code.Tutorial.StorageTrashView", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _inventory: null
        },
        methods: {
            /*_Project.Code.Tutorial.StorageTrashView.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.StorageTrashView#OnEnable", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this._inventory, null))) {
                    this._inventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                    this._inventory.addRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
                }
            },
            /*_Project.Code.Tutorial.StorageTrashView.OnEnable end.*/

            /*_Project.Code.Tutorial.StorageTrashView.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.StorageTrashView#OnDisable", this ); }

                if (!(UnityEngine.MonoBehaviour.op_Equality(this._inventory, null))) {
                    this._inventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
                    this._inventory.removeRemoved(Bridge.fn.cacheBind(this, this.OnRemoved));
                }
            },
            /*_Project.Code.Tutorial.StorageTrashView.OnDisable end.*/

            /*_Project.Code.Tutorial.StorageTrashView.OnRemoved start.*/
            OnRemoved: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.StorageTrashView#OnRemoved", this ); }
 },
            /*_Project.Code.Tutorial.StorageTrashView.OnRemoved end.*/

            /*_Project.Code.Tutorial.StorageTrashView.OnAdded start.*/
            OnAdded: function (collectable) {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.StorageTrashView#OnAdded", this ); }

                UnityEngine.Object.Destroy(collectable.gameObject);
            },
            /*_Project.Code.Tutorial.StorageTrashView.OnAdded end.*/


        }
    });
    /*_Project.Code.Tutorial.StorageTrashView end.*/

    /*_Project.Code.Tutorial.TutorialArrow start.*/
    Bridge.define("_Project.Code.Tutorial.TutorialArrow", {
        fields: {
            _holder: null,
            _body: null,
            _point1: null,
            _point2: null,
            _animation: null,
            _state: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.TutorialArrow#init", this ); }

                this._state = -1;
            },
            ctor: function (holder, body, point1, point2) {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.TutorialArrow#ctor", this ); }

                this.$initialize();
                this._point1 = point1;
                this._point2 = point2;
                this._body = body;
                this._holder = holder;
            }
        },
        methods: {
            /*_Project.Code.Tutorial.TutorialArrow.EnterNextState start.*/
            EnterNextState: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.TutorialArrow#EnterNextState", this ); }

                this._state = (this._state + 1) | 0;
                switch (this._state) {
                    case 0: 
                        this._holder.gameObject.SetActive(true);
                        this._holder.position = this._point1.position.$clone();
                        this._animation != null ? DG.Tweening.TweenExtensions.Kill(this._animation) : null;
                        this._animation = _Project.Code.Core.Animations.AnimationsFactory.CreatePointing(this._body);
                        DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, this._animation);
                        break;
                    case 1: 
                        this._holder.position = this._point2.position.$clone();
                        this._animation != null ? DG.Tweening.TweenExtensions.Kill(this._animation) : null;
                        this._animation = _Project.Code.Core.Animations.AnimationsFactory.CreatePointing(this._body);
                        DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, this._animation);
                        break;
                    case 2: 
                        this._holder.gameObject.SetActive(false);
                        DG.Tweening.TweenExtensions.Kill(this._animation);
                        this._animation = null;
                        this._state = -1;
                        break;
                }
            },
            /*_Project.Code.Tutorial.TutorialArrow.EnterNextState end.*/


        }
    });
    /*_Project.Code.Tutorial.TutorialArrow end.*/

    /*_Project.Code.Tutorial.WaitForJoystickMove start.*/
    Bridge.define("_Project.Code.Tutorial.WaitForJoystickMove", {
        inherits: [UnityEngine.CustomYieldInstruction],
        fields: {
            _joystick: null,
            _threshold: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.WaitForJoystickMove#keepWaiting#get", this ); }

                    return this._joystick.Direction.length() <= this._threshold;
                }
            }
        },
        ctors: {
            ctor: function (joystick, threshold) {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.WaitForJoystickMove#ctor", this ); }

                if (threshold === void 0) { threshold = 0.05; }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this._joystick = joystick;
                this._threshold = threshold;
            }
        }
    });
    /*_Project.Code.Tutorial.WaitForJoystickMove end.*/

    /*_Project.Code.Tutorial.WaitForJoystickStop start.*/
    Bridge.define("_Project.Code.Tutorial.WaitForJoystickStop", {
        inherits: [UnityEngine.CustomYieldInstruction],
        fields: {
            _joystick: null,
            _threshold: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.WaitForJoystickStop#keepWaiting#get", this ); }

                    return this._joystick.Direction.length() >= this._threshold;
                }
            }
        },
        ctors: {
            ctor: function (joystick, threshold) {
if ( TRACE ) { TRACE( "_Project.Code.Tutorial.WaitForJoystickStop#ctor", this ); }

                if (threshold === void 0) { threshold = 0.05; }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this._joystick = joystick;
                this._threshold = threshold;
            }
        }
    });
    /*_Project.Code.Tutorial.WaitForJoystickStop end.*/

    /*_Project.Code.UI.CoinsCounterUpdater start.*/
    Bridge.define("_Project.Code.UI.CoinsCounterUpdater", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            _text: null,
            _inventory: null,
            _counter: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#init", this ); }

                this._counter = 0;
            }
        },
        methods: {
            /*_Project.Code.UI.CoinsCounterUpdater.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#OnEnable", this ); }

                this._inventory.addAdded(Bridge.fn.cacheBind(this, this.OnCoinAdded));
                this._inventory.addRemoved(Bridge.fn.cacheBind(this, this.OnCoinRemoved));
            },
            /*_Project.Code.UI.CoinsCounterUpdater.OnEnable end.*/

            /*_Project.Code.UI.CoinsCounterUpdater.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#OnDisable", this ); }

                this._inventory.removeAdded(Bridge.fn.cacheBind(this, this.OnCoinAdded));
                this._inventory.removeRemoved(Bridge.fn.cacheBind(this, this.OnCoinRemoved));
            },
            /*_Project.Code.UI.CoinsCounterUpdater.OnDisable end.*/

            /*_Project.Code.UI.CoinsCounterUpdater.OnCoinRemoved start.*/
            OnCoinRemoved: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#OnCoinRemoved", this ); }

                this._counter = (this._counter - 1) | 0;
                this.UpdateView();
            },
            /*_Project.Code.UI.CoinsCounterUpdater.OnCoinRemoved end.*/

            /*_Project.Code.UI.CoinsCounterUpdater.OnCoinAdded start.*/
            OnCoinAdded: function (obj) {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#OnCoinAdded", this ); }

                this._counter = (this._counter + 1) | 0;
                this.UpdateView();
            },
            /*_Project.Code.UI.CoinsCounterUpdater.OnCoinAdded end.*/

            /*_Project.Code.UI.CoinsCounterUpdater.UpdateView start.*/
            UpdateView: function () {
if ( TRACE ) { TRACE( "_Project.Code.UI.CoinsCounterUpdater#UpdateView", this ); }

                this._text.text = Bridge.toString(this._counter);
            },
            /*_Project.Code.UI.CoinsCounterUpdater.UpdateView end.*/


        }
    });
    /*_Project.Code.UI.CoinsCounterUpdater end.*/

    /*Assets.CourseGame.Develop.DI.DIContainer start.*/
    Bridge.define("Assets.CourseGame.Develop.DI.DIContainer", {
        inherits: [System.IDisposable],
        fields: {
            _container: null,
            _parent: null,
            _requests: null
        },
        alias: ["Dispose", "System$IDisposable$Dispose"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#init", this ); }

                this._container = new (System.Collections.Generic.Dictionary$2(System.Type,Assets.CourseGame.Develop.DI.DIContainer.Registration)).ctor();
                this._requests = new (System.Collections.Generic.List$1(System.Type)).ctor();
            },
            ctor: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#ctor", this ); }

                Assets.CourseGame.Develop.DI.DIContainer.$ctor1.call(this, null);
            },
            $ctor1: function (parent) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#$ctor1", this ); }

                this.$initialize();
                this._parent = parent;
            }
        },
        methods: {
            /*Assets.CourseGame.Develop.DI.DIContainer.RegisterAsSingle start.*/
            RegisterAsSingle: function (T, creator) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#RegisterAsSingle", this ); }

                if (this.IsAlreadyRegister(T)) {
                    throw new System.InvalidOperationException.$ctor1(System.String.format("{0} already register", [T]));
                }
                var registration = new Assets.CourseGame.Develop.DI.DIContainer.Registration.ctor(function (container) {
                    return creator(container);
                });
                this._container.setItem(T, registration);
                return registration;
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.RegisterAsSingle end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.IsAlreadyRegister start.*/
            IsAlreadyRegister: function (T) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#IsAlreadyRegister", this ); }

                if (this._container.containsKey(T)) {
                    return true;
                }
                if (this._parent != null) {
                    return this._parent.IsAlreadyRegister(T);
                }
                return false;
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.IsAlreadyRegister end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.Resolve start.*/
            Resolve: function (T) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#Resolve", this ); }

                if (this._requests.contains(T)) {
                    throw new System.InvalidOperationException.$ctor1(System.String.format("Cycle resolve for {0}", [T]));
                }
                this._requests.add(T);
                try {
                    var registration = { };
                    if (this._container.tryGetValue(T, registration)) {
                        return this.CreateFrom(T, registration.v);
                    }
                    if (this._parent != null) {
                        return this._parent.Resolve(T);
                    }
                } finally {
                    this._requests.remove(T);
                }
                throw new System.InvalidOperationException.$ctor1(System.String.format("Registration for {0} not exist", [T]));
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.Resolve end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#Initialize", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._container.Values);
                try {
                    while ($t.moveNext()) {
                        var registration = $t.Current;
                        if (registration.Instance == null && registration.IsNonLazy) {
                            registration.Instance = registration.Creator(this);
                        }
                        var initializable;
                        if (registration.Instance != null && ((initializable = Bridge.as(registration.Instance, Assets.CourseGame.Develop.DI.IInitializable))) != null) {
                            initializable.Assets$CourseGame$Develop$DI$IInitializable$Initialize();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.Initialize end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.Dispose start.*/
            Dispose: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#Dispose", this ); }

                var $t;
                $t = Bridge.getEnumerator(this._container.Values);
                try {
                    while ($t.moveNext()) {
                        var registration = $t.Current;
                        var disposable;
                        if (registration.Instance != null && ((disposable = Bridge.as(registration.Instance, System.IDisposable))) != null) {
                            disposable.System$IDisposable$Dispose();
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.Dispose end.*/

            /*Assets.CourseGame.Develop.DI.DIContainer.CreateFrom start.*/
            CreateFrom: function (T, registration) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer#CreateFrom", this ); }

                if (registration.Instance == null && !Bridge.staticEquals(registration.Creator, null)) {
                    registration.Instance = registration.Creator(this);
                }
                return Bridge.cast(Bridge.unbox(registration.Instance, T), T);
            },
            /*Assets.CourseGame.Develop.DI.DIContainer.CreateFrom end.*/


        }
    });
    /*Assets.CourseGame.Develop.DI.DIContainer end.*/

    /*Assets.CourseGame.Develop.DI.DIContainer+Registration start.*/
    Bridge.define("Assets.CourseGame.Develop.DI.DIContainer.Registration", {
        $kind: 1002,
        fields: {
            Creator: null,
            Instance: null,
            IsNonLazy: false
        },
        ctors: {
            $ctor1: function (instance) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer.Registration#$ctor1", this ); }

                this.$initialize();
                this.Instance = instance;
            },
            ctor: function (creator) {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer.Registration#ctor", this ); }

                this.$initialize();
                this.Creator = creator;
            }
        },
        methods: {
            /*Assets.CourseGame.Develop.DI.DIContainer+Registration.NonLazy start.*/
            NonLazy: function () {
if ( TRACE ) { TRACE( "Assets.CourseGame.Develop.DI.DIContainer.Registration#NonLazy", this ); }

                this.IsNonLazy = true;
            },
            /*Assets.CourseGame.Develop.DI.DIContainer+Registration.NonLazy end.*/


        }
    });
    /*Assets.CourseGame.Develop.DI.DIContainer+Registration end.*/

    /*Assets.CourseGame.Develop.DI.IInitializable start.*/
    Bridge.define("Assets.CourseGame.Develop.DI.IInitializable", {
        $kind: 3
    });
    /*Assets.CourseGame.Develop.DI.IInitializable end.*/

    /*AxisOptions start.*/
    Bridge.define("AxisOptions", {
        $kind: 6,
        statics: {
            fields: {
                Both: 0,
                Horizontal: 1,
                Vertical: 2
            }
        }
    });
    /*AxisOptions end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction");
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#keepWaiting#get", this ); }

                    return this.t.active && !DG.Tweening.TweenExtensions.IsComplete(this.t);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForCompletion#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            elapsedLoops: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#keepWaiting#get", this ); }

                    return this.t.active && DG.Tweening.TweenExtensions.CompletedLoops(this.t) < this.elapsedLoops;
                }
            }
        },
        ctors: {
            ctor: function (tween, elapsedLoops) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.elapsedLoops = elapsedLoops;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForKill", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#keepWaiting#get", this ); }

                    return this.t.active;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForKill#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForPosition", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null,
            position: 0
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#keepWaiting#get", this ); }

                    return this.t.active && this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) < this.position;
                }
            }
        },
        ctors: {
            ctor: function (tween, position) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForPosition#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
                this.position = position;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForRewind", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#keepWaiting#get", this ); }

                    return this.t.active && (!this.t.playedOnce || this.t.position * (((DG.Tweening.TweenExtensions.CompletedLoops(this.t) + 1) | 0)) > 0.0);
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForRewind#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    Bridge.define("DG.Tweening.DOTweenCYInstruction.WaitForStart", {
        inherits: [UnityEngine.CustomYieldInstruction],
        $kind: 1002,
        fields: {
            t: null
        },
        props: {
            keepWaiting: {
                get: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#keepWaiting#get", this ); }

                    return this.t.active && !this.t.playedOnce;
                }
            }
        },
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenCYInstruction.WaitForStart#ctor", this ); }

                this.$initialize();
                UnityEngine.CustomYieldInstruction.ctor.call(this);
                this.t = tween;
            }
        }
    });
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    Bridge.define("DG.Tweening.DOTweenModuleAudio", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFade", this ); }

                    if (endValue < 0.0) {
                        endValue = 0.0;
                    } else if (endValue > 1.0) {
                        endValue = 1.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.volume;
                    }, function (x) {
                        target.volume = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static start.*/
                DOPitch: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPitch", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.pitch;
                    }, function (x) {
                        target.pitch = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPitch:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static start.*/
                DOSetFloat: function (target, floatName, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSetFloat", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        var value = { };
                        target.GetFloat(floatName, value);
                        return value.v;
                    }, function (x) {
                        target.SetFloat(floatName, x);
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSetFloat:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static start.*/
                DOComplete: function (target, withCallbacks) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOComplete", this ); }

                    if (withCallbacks === void 0) { withCallbacks = false; }
                    return DG.Tweening.DOTween.Complete(target, withCallbacks);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOComplete:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOKill:static start.*/
                DOKill: function (target, complete) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOKill", this ); }

                    if (complete === void 0) { complete = false; }
                    return DG.Tweening.DOTween.Kill(target, complete);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOKill:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static start.*/
                DOFlip: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOFlip", this ); }

                    return DG.Tweening.DOTween.Flip(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOFlip:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static start.*/
                DOGoto: function (target, to, andPlay) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOGoto", this ); }

                    if (andPlay === void 0) { andPlay = false; }
                    return DG.Tweening.DOTween.Goto(target, to, andPlay);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOGoto:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPause:static start.*/
                DOPause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPause", this ); }

                    return DG.Tweening.DOTween.Pause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPause:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static start.*/
                DOPlay: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlay", this ); }

                    return DG.Tweening.DOTween.Play(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlay:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static start.*/
                DOPlayBackwards: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayBackwards", this ); }

                    return DG.Tweening.DOTween.PlayBackwards(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayBackwards:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static start.*/
                DOPlayForward: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOPlayForward", this ); }

                    return DG.Tweening.DOTween.PlayForward(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOPlayForward:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORestart:static start.*/
                DORestart: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORestart", this ); }

                    return DG.Tweening.DOTween.Restart(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORestart:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DORewind:static start.*/
                DORewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DORewind", this ); }

                    return DG.Tweening.DOTween.Rewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DORewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static start.*/
                DOSmoothRewind: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOSmoothRewind", this ); }

                    return DG.Tweening.DOTween.SmoothRewind(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOSmoothRewind:static end.*/

                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static start.*/
                DOTogglePause: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleAudio#DOTogglePause", this ); }

                    return DG.Tweening.DOTween.TogglePause(target);
                },
                /*DG.Tweening.DOTweenModuleAudio.DOTogglePause:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static start.*/
                DOMoveZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOMoveZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOMoveZ:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DORotate:static start.*/
                DORotate: function (target, endValue, duration, mode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DORotate", this ); }

                    if (mode === void 0) { mode = 0; }
                    var t = DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), t, target);
                    t.plugOptions.rotateMode = mode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static start.*/
                DOLookAt: function (target, towards, duration, axisConstraint, up) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLookAt", this ); }

                    if (axisConstraint === void 0) { axisConstraint = 0; }
                    if (up === void 0) { up = null; }
                    var t = DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions), DG.Tweening.DOTween.To$9(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), towards.$clone(), duration), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetLookAt);
                    t.plugOptions.axisConstraint = axisConstraint;
                    t.plugOptions.up = ((!System.Nullable.hasValue(up)) ? pc.Vec3.UP.clone() : System.Nullable.getValue(up).$clone());
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLookAt:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, jumpPower, 0.0 ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( endValue.x, 0.0, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(DG.Tweening.DOTween.To$12(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec3( 0.0, 0.0, endValue.z ), duration), DG.Tweening.AxisConstraint.Z, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var position = target.position.$clone();
                        position.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition(position);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    Bridge.define("DG.Tweening.DOTweenModulePhysics2D", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static start.*/
                DOMove: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMove", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMove:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static start.*/
                DOMoveX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveX:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static start.*/
                DOMoveY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOMoveY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, Bridge.fn.cacheBind(target, target.MovePosition), new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOMoveY:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static start.*/
                DORotate: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DORotate", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.rotation;
                    }, Bridge.fn.cacheBind(target, target.MoveRotation), endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DORotate:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static start.*/
                DOJump: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOJump", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.position.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.position;
                    }, function (x) {
                        target.position = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Tween, yTween, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var vector = UnityEngine.Vector3.FromVector2(target.position.$clone());
                        vector.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedPercentage(yTween), DG.Tweening.Ease.OutQuad);
                        target.MovePosition$1(vector);
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOJump:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static start.*/
                DOPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static start.*/
                DOPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return UnityEngine.Vector3.FromVector2(target.position);
                    }, function (x) {
                        target.MovePosition$1(x);
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOPath$1:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static start.*/
                DOLocalPath: function (target, path, duration, pathType, pathMode, resolution, gizmoColor) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath", this ); }

                    if (pathType === void 0) { pathType = 0; }
                    if (pathMode === void 0) { pathMode = 1; }
                    if (resolution === void 0) { resolution = 10; }
                    if (gizmoColor === void 0) { gizmoColor = null; }
                    if (resolution < 1) {
                        resolution = 1;
                    }
                    var len = path.length;
                    var path3D = System.Array.init(len, function (){
                        return new UnityEngine.Vector3();
                    }, UnityEngine.Vector3);
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        path3D[i] = UnityEngine.Vector3.FromVector2(path[i].$clone());
                    }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetUpdate$1(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, new DG.Tweening.Plugins.Core.PathCore.Path.$ctor1(pathType, path3D, resolution, System.Nullable.lift1("$clone", gizmoColor)), duration), target), DG.Tweening.UpdateType.Fixed);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath:static end.*/

                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static start.*/
                DOLocalPath$1: function (target, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModulePhysics2D#DOLocalPath$1", this ); }

                    if (pathMode === void 0) { pathMode = 1; }
                    var trans = target.transform;
                    var t = DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions), DG.Tweening.DOTween.To(UnityEngine.Vector3, DG.Tweening.Plugins.Core.PathCore.Path, DG.Tweening.Plugins.Options.PathOptions, DG.Tweening.Plugins.PathPlugin.Get(), function () {
                        return trans.localPosition;
                    }, function (x) {
                        target.MovePosition$1((UnityEngine.Component.op_Equality(trans.parent, null)) ? x.$clone() : trans.parent.TransformPoint$1(x));
                    }, path, duration), target);
                    t.plugOptions.isRigidbody2D = true;
                    t.plugOptions.mode = pathMode;
                    t.plugOptions.useLocalPosition = true;
                    return t;
                },
                /*DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    Bridge.define("DG.Tweening.DOTweenModuleSprite", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOFade", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleSprite.DOColor(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleSprite.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleSprite#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleSprite.DOBlendableColor:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI.DOFade:static start.*/
                DOFade: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade", this ); }

                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.alpha;
                    }, function (x) {
                        target.alpha = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static start.*/
                DOFade$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$1", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static start.*/
                DOFade$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$2", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static start.*/
                DOFade$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$3", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static start.*/
                DOFade$4: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFade$4", this ); }

                    var t = DG.Tweening.DOTween.ToAlpha(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFade$4:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor:static start.*/
                DOColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static start.*/
                DOColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$1", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static start.*/
                DOColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$2", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.effectColor;
                    }, function (x) {
                        target.effectColor = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static start.*/
                DOColor$3: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOColor$3", this ); }

                    var t = DG.Tweening.DOTween.To$8(function () {
                        return target.color;
                    }, function (x) {
                        target.color = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOColor$3:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static start.*/
                DOFillAmount: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFillAmount", this ); }

                    if (endValue > 1.0) {
                        endValue = 1.0;
                    } else if (endValue < 0.0) {
                        endValue = 0.0;
                    }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.fillAmount;
                    }, function (x) {
                        target.fillAmount = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFillAmount:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.DOTweenModuleUI.DOColor$1(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static start.*/
                DOFlexibleSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOFlexibleSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.flexibleWidth, target.flexibleHeight );
                    }, function (x) {
                        target.flexibleWidth = x.x;
                        target.flexibleHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOFlexibleSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static start.*/
                DOMinSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOMinSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.minWidth, target.minHeight );
                    }, function (x) {
                        target.minWidth = x.x;
                        target.minHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOMinSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static start.*/
                DOPreferredSize: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPreferredSize", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.preferredWidth, target.preferredHeight );
                    }, function (x) {
                        target.preferredWidth = x.x;
                        target.preferredHeight = x.y;
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPreferredSize:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOScale:static start.*/
                DOScale: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOScale", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.effectDistance;
                    }, function (x) {
                        target.effectDistance = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOScale:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static start.*/
                DOAnchorPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static start.*/
                DOAnchorPosX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static start.*/
                DOAnchorPosY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPosY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPosY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static start.*/
                DOAnchorPos3D: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3D", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$13(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3D:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static start.*/
                DOAnchorPos3DX: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DX", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( endValue, 0.0, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.X, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static start.*/
                DOAnchorPos3DY: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DY", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Y, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static start.*/
                DOAnchorPos3DZ: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorPos3DZ", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$12(function () {
                        return target.anchoredPosition3D;
                    }, function (x) {
                        target.anchoredPosition3D = x.$clone();
                    }, new pc.Vec3( 0.0, 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$12(t, DG.Tweening.AxisConstraint.Z, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorPos3DZ:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static start.*/
                DOAnchorMax: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMax", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMax;
                    }, function (x) {
                        target.anchorMax = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMax:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static start.*/
                DOAnchorMin: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOAnchorMin", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.anchorMin;
                    }, function (x) {
                        target.anchorMin = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOAnchorMin:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivot:static start.*/
                DOPivot: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivot", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivot:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static start.*/
                DOPivotX: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotX", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( endValue, 0.0 ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.X), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotX:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static start.*/
                DOPivotY: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPivotY", this ); }

                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.pivot;
                    }, function (x) {
                        target.pivot = x.$clone();
                    }, new pc.Vec2( 0.0, endValue ), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(t, DG.Tweening.AxisConstraint.Y), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOPivotY:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static start.*/
                DOSizeDelta: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOSizeDelta", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.sizeDelta;
                    }, function (x) {
                        target.sizeDelta = x.$clone();
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOSizeDelta:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static start.*/
                DOPunchAnchorPos: function (target, punch, duration, vibrato, elasticity, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOPunchAnchorPos", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (elasticity === void 0) { elasticity = 1.0; }
                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Punch(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, UnityEngine.Vector3.FromVector2(punch.$clone()), duration, vibrato, elasticity), target), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOPunchAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static start.*/
                DOShakeAnchorPos: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos", this ); }

                    if (strength === void 0) { strength = 100.0; }
                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, strength, vibrato, randomness, true, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static start.*/
                DOShakeAnchorPos$1: function (target, duration, strength, vibrato, randomness, snapping, fadeOut, randomnessMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShakeAnchorPos$1", this ); }

                    if (vibrato === void 0) { vibrato = 10; }
                    if (randomness === void 0) { randomness = 90.0; }
                    if (snapping === void 0) { snapping = false; }
                    if (fadeOut === void 0) { fadeOut = true; }
                    if (randomnessMode === void 0) { randomnessMode = 0; }
                    return DG.Tweening.TweenSettingsExtensions.SetOptions$11(DG.Tweening.Core.Extensions.SetSpecialStartupMode(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector3,System.Array.type(UnityEngine.Vector3),DG.Tweening.Plugins.Options.Vector3ArrayOptions), DG.Tweening.DOTween.Shake$1(function () {
                        return UnityEngine.Vector3.FromVector2(target.anchoredPosition);
                    }, function (x) {
                        target.anchoredPosition = UnityEngine.Vector2.FromVector3(x.$clone());
                    }, duration, UnityEngine.Vector3.FromVector2(strength.$clone()), vibrato, randomness, fadeOut, randomnessMode), target), DG.Tweening.Core.Enums.SpecialStartupMode.SetShake), snapping);
                },
                /*DG.Tweening.DOTweenModuleUI.DOShakeAnchorPos$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static start.*/
                DOJumpAnchorPos: function (target, endValue, jumpPower, numJumps, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOJumpAnchorPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    if (numJumps < 1) {
                        numJumps = 1;
                    }
                    var startPosY = 0.0;
                    var offsetY = -1.0;
                    var offsetYSet = false;
                    var s = DG.Tweening.DOTween.Sequence();
                    var yTween = DG.Tweening.TweenSettingsExtensions.OnStart(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetLoops$1(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetRelative(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( 0.0, jumpPower ), duration / (Bridge.Int.mul(numJumps, 2))), DG.Tweening.AxisConstraint.Y, snapping), DG.Tweening.Ease.OutQuad)), Bridge.Int.mul(numJumps, 2), DG.Tweening.LoopType.Yoyo), function () {
                        startPosY = target.anchoredPosition.y;
                    });
                    DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.Join(DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$8(DG.Tweening.DOTween.To$11(function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, new pc.Vec2( endValue.x, 0.0 ), duration), DG.Tweening.AxisConstraint.X, snapping), DG.Tweening.Ease.Linear)), yTween), target), DG.Tweening.DOTween.defaultEaseType);
                    DG.Tweening.TweenSettingsExtensions.OnUpdate(DG.Tweening.Sequence, s, function () {
                        if (!offsetYSet) {
                            offsetYSet = true;
                            offsetY = (s.isRelative ? endValue.y : (endValue.y - startPosY));
                        }
                        var anchoredPosition = target.anchoredPosition.$clone();
                        anchoredPosition.y += DG.Tweening.DOVirtual.EasedValue(0.0, offsetY, DG.Tweening.TweenExtensions.ElapsedDirectionalPercentage(s), DG.Tweening.Ease.OutQuad);
                        target.anchoredPosition = anchoredPosition.$clone();
                    });
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUI.DOJumpAnchorPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static start.*/
                DONormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DONormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$9(DG.Tweening.DOTween.To$11(function () {
                        return new pc.Vec2( target.horizontalNormalizedPosition, target.verticalNormalizedPosition );
                    }, function (x) {
                        target.horizontalNormalizedPosition = x.x;
                        target.verticalNormalizedPosition = x.y;
                    }, endValue.$clone(), duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DONormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static start.*/
                DOHorizontalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOHorizontalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.horizontalNormalizedPosition;
                    }, function (x) {
                        target.horizontalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOHorizontalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static start.*/
                DOVerticalNormalizedPos: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOVerticalNormalizedPos", this ); }

                    if (snapping === void 0) { snapping = false; }
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(DG.Tweening.DOTween.To$4(function () {
                        return target.verticalNormalizedPosition;
                    }, function (x) {
                        target.verticalNormalizedPosition = x;
                    }, endValue, duration), snapping), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOVerticalNormalizedPos:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOValue:static start.*/
                DOValue: function (target, endValue, duration, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOValue", this ); }

                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To$4(function () {
                        return target.value;
                    }, function (x) {
                        target.value = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$2(t, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOValue:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOCounter:static start.*/
                DOCounter: function (target, fromValue, endValue, duration, addThousandsSeparator, culture) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOCounter", this ); }

                    if (addThousandsSeparator === void 0) { addThousandsSeparator = true; }
                    if (culture === void 0) { culture = null; }
                    var cInfo = ((!addThousandsSeparator) ? null : (culture || System.Globalization.CultureInfo.invariantCulture));
                    var t = DG.Tweening.DOTween.To$2(function () {
                        return fromValue;
                    }, function (x) {
                        fromValue = x;
                        target.text = (addThousandsSeparator ? System.Int32.format(fromValue, "N0", cInfo) : Bridge.toString(fromValue));
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOCounter:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOText:static start.*/
                DOText: function (target, endValue, duration, richTextEnabled, scrambleMode, scrambleChars) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOText", this ); }

                    if (richTextEnabled === void 0) { richTextEnabled = true; }
                    if (scrambleMode === void 0) { scrambleMode = 0; }
                    if (scrambleChars === void 0) { scrambleChars = null; }
                    if (endValue == null) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogWarning("You can't pass a NULL string to DOText: an empty string will be used instead to avoid errors");
                        }
                        endValue = "";
                    }
                    var t = DG.Tweening.DOTween.To$5(function () {
                        return target.text;
                    }, function (x) {
                        target.text = x;
                    }, endValue, duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$3(t, richTextEnabled, scrambleMode, scrambleChars), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOText:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static start.*/
                DOBlendableColor: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static start.*/
                DOBlendableColor$1: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$1", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static start.*/
                DOBlendableColor$2: function (target, endValue, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOBlendableColor$2", this ); }

                    var $t;
                    endValue = ($t = target.color.$clone(), new pc.Color( endValue.$clone().r - $t.r, endValue.$clone().g - $t.g, endValue.$clone().b - $t.b, endValue.$clone().a - $t.a ));
                    var to = new pc.Color( 0.0, 0.0, 0.0, 0.0 );
                    return DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.Core.Extensions.Blendable(UnityEngine.Color, UnityEngine.Color, DG.Tweening.Plugins.Options.ColorOptions, DG.Tweening.DOTween.To$8(function () {
                        return to;
                    }, function (x) {
                        var $t1;
                        var color = new pc.Color( x.r - to.r, x.g - to.g, x.b - to.b, x.a - to.a );
                        to = x.$clone();
                        target.color = ($t1 = target.color.$clone(), new pc.Color( $t1.r + color.$clone().r, $t1.g + color.$clone().g, $t1.b + color.$clone().b, $t1.a + color.$clone().a ));
                    }, endValue.$clone(), duration)), target);
                },
                /*DG.Tweening.DOTweenModuleUI.DOBlendableColor$2:static end.*/

                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static start.*/
                DOShapeCircle: function (target, center, endValueDegrees, duration, relativeCenter, snapping) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI#DOShapeCircle", this ); }

                    if (relativeCenter === void 0) { relativeCenter = false; }
                    if (snapping === void 0) { snapping = false; }
                    var t = DG.Tweening.DOTween.To(UnityEngine.Vector2, UnityEngine.Vector2, DG.Tweening.Plugins.CircleOptions, DG.Tweening.Plugins.CirclePlugin.Get(), function () {
                        return target.anchoredPosition;
                    }, function (x) {
                        target.anchoredPosition = x.$clone();
                    }, center.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Tweener, DG.Tweening.TweenSettingsExtensions.SetOptions$7(t, endValueDegrees, relativeCenter, snapping), target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUI.DOShapeCircle:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUI.Utils", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static start.*/
                SwitchToRectTransform: function (from, to) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUI.Utils#SwitchToRectTransform", this ); }

                    var fromPivotDerivedOffset = new pc.Vec2( from.rect.width * 0.5 + from.rect.xMin, from.rect.height * 0.5 + from.rect.yMin );
                    var screenP = UnityEngine.RectTransformUtility.WorldToScreenPoint(null, from.position);
                    screenP = screenP.$clone().add( fromPivotDerivedOffset.$clone() );
                    var localPoint = { v : new UnityEngine.Vector2() };
                    UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(to, screenP, null, localPoint);
                    var pivotDerivedOffset = new pc.Vec2( to.rect.width * 0.5 + to.rect.xMin, to.rect.height * 0.5 + to.rect.yMin );
                    return to.anchoredPosition.$clone().add( localPoint.v ).sub( pivotDerivedOffset );
                },
                /*DG.Tweening.DOTweenModuleUI+Utils.SwitchToRectTransform:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUnityVersion", {
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static start.*/
                DOGradientColor: function (target, gradient, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.color = c.color.$clone();
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$3(target, c.color.$clone(), colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static start.*/
                DOGradientColor$1: function (target, gradient, property, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOGradientColor$1", this ); }

                    var s = DG.Tweening.DOTween.Sequence();
                    var colors = gradient.colorKeys;
                    var len = colors.length;
                    for (var i = 0; i < len; i = (i + 1) | 0) {
                        var c = colors[i];
                        if (i === 0 && c.time <= 0.0) {
                            target.SetColor$1(property, c.color);
                            continue;
                        }
                        var colorDuration = ((i === ((len - 1) | 0)) ? (duration - DG.Tweening.TweenExtensions.Duration(s, false)) : (duration * ((i === 0) ? c.time : (c.time - colors[((i - 1) | 0)].time))));
                        DG.Tweening.TweenSettingsExtensions.Append(s, DG.Tweening.TweenSettingsExtensions.SetEase$2(DG.Tweening.Core.TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions), DG.Tweening.ShortcutExtensions.DOColor$4(target, c.color.$clone(), property, colorDuration), DG.Tweening.Ease.Linear));
                    }
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Sequence, s, target);
                    return s;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOGradientColor$1:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static start.*/
                WaitForCompletion: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForCompletion", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForCompletion(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForCompletion:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static start.*/
                WaitForRewind: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForRewind", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForRewind(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForRewind:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static start.*/
                WaitForKill: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForKill", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForKill(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForKill:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static start.*/
                WaitForElapsedLoops: function (t, elapsedLoops, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForElapsedLoops", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops(t, elapsedLoops);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForElapsedLoops:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static start.*/
                WaitForPosition: function (t, position, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForPosition", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForPosition(t, position);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForPosition:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static start.*/
                WaitForStart: function (t, returnCustomYieldInstruction) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#WaitForStart", this ); }

                    if (!t.active) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogInvalidTween(t);
                        }
                        return null;
                    }
                    return new DG.Tweening.DOTweenCYInstruction.WaitForStart(t);
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.WaitForStart:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static start.*/
                DOOffset: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOOffset", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureOffset(propertyID);
                    }, function (x) {
                        target.SetTextureOffset(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOOffset:static end.*/

                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static start.*/
                DOTiling: function (target, endValue, propertyID, duration) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUnityVersion#DOTiling", this ); }

                    if (!target.HasProperty(propertyID)) {
                        if (DG.Tweening.Core.Debugger.logPriority > 0) {
                            DG.Tweening.Core.Debugger.LogMissingMaterialProperty(propertyID);
                        }
                        return null;
                    }
                    var t = DG.Tweening.DOTween.To$11(function () {
                        return target.GetTextureScale(propertyID);
                    }, function (x) {
                        target.SetTextureScale(propertyID, x);
                    }, endValue.$clone(), duration);
                    DG.Tweening.TweenSettingsExtensions.SetTarget(DG.Tweening.Core.TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions), t, target);
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUnityVersion.DOTiling:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils", {
        statics: {
            fields: {
                _initialized: false
            },
            methods: {
                /*DG.Tweening.DOTweenModuleUtils.Init:static start.*/
                Init: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Init", this ); }

                    if (!DG.Tweening.DOTweenModuleUtils._initialized) {
                        DG.Tweening.DOTweenModuleUtils._initialized = true;
                        DG.Tweening.Core.DOTweenExternalCommand.addSetOrientationOnPath(DG.Tweening.DOTweenModuleUtils.Physics.SetOrientationOnPath);
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils.Init:static end.*/

                /*DG.Tweening.DOTweenModuleUtils.Preserver:static start.*/
                Preserver: function () {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils#Preserver", this ); }

                    var loadedAssemblies = System.AppDomain.getAssemblies();
                    var mi = Bridge.Reflection.getMembers(UnityEngine.MonoBehaviour, 8, 284, "Stub");
                },
                /*DG.Tweening.DOTweenModuleUtils.Preserver:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    Bridge.define("DG.Tweening.DOTweenModuleUtils.Physics", {
        $kind: 1002,
        statics: {
            methods: {
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static start.*/
                SetOrientationOnPath: function (options, t, newRot, trans) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#SetOrientationOnPath", this ); }

                    if (options.isRigidbody) {
                        Bridge.cast(t.target, UnityEngine.Rigidbody).rotation = newRot.$clone();
                    } else {
                        trans.rotation = newRot.$clone();
                    }
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.SetOrientationOnPath:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static start.*/
                HasRigidbody2D: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody2D", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody2D), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody2D:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static start.*/
                HasRigidbody: function (target) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#HasRigidbody", this ); }

                    return UnityEngine.Component.op_Inequality(target.GetComponent(UnityEngine.Rigidbody), null);
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.HasRigidbody:static end.*/

                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static start.*/
                CreateDOTweenPathTween: function (target, tweenRigidbody, isLocal, path, duration, pathMode) {
if ( TRACE ) { TRACE( "DG.Tweening.DOTweenModuleUtils.Physics#CreateDOTweenPathTween", this ); }

                    var t = null;
                    var rBodyFoundAndTweened = false;
                    if (tweenRigidbody) {
                        var rBody = target.GetComponent(UnityEngine.Rigidbody);
                        if (UnityEngine.Component.op_Inequality(rBody, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics.DOLocalPath$1(rBody, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics.DOPath$1(rBody, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened && tweenRigidbody) {
                        var rBody2D = target.GetComponent(UnityEngine.Rigidbody2D);
                        if (UnityEngine.Component.op_Inequality(rBody2D, null)) {
                            rBodyFoundAndTweened = true;
                            t = (isLocal ? DG.Tweening.DOTweenModulePhysics2D.DOLocalPath$1(rBody2D, path, duration, pathMode) : DG.Tweening.DOTweenModulePhysics2D.DOPath$1(rBody2D, path, duration, pathMode));
                        }
                    }
                    if (!rBodyFoundAndTweened) {
                        t = (isLocal ? DG.Tweening.ShortcutExtensions.DOLocalPath(target.transform, path, duration, pathMode) : DG.Tweening.ShortcutExtensions.DOPath(target.transform, path, duration, pathMode));
                    }
                    return t;
                },
                /*DG.Tweening.DOTweenModuleUtils+Physics.CreateDOTweenPathTween:static end.*/


            }
        }
    });
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Joystick start.*/
    Bridge.define("Joystick", {
        inherits: [UnityEngine.MonoBehaviour,UnityEngine.EventSystems.IPointerDownHandler,UnityEngine.EventSystems.IEventSystemHandler,UnityEngine.EventSystems.IDragHandler,UnityEngine.EventSystems.IPointerUpHandler],
        fields: {
            handleRange: 0,
            deadZone: 0,
            axisOptions: 0,
            snapX: false,
            snapY: false,
            background: null,
            _handle: null,
            baseRect: null,
            canvas: null,
            cam: null,
            input: null
        },
        props: {
            Horizontal: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Horizontal#get", this ); }

                    return this.snapX ? this.SnapFloat(this.input.x, AxisOptions.Horizontal) : this.input.x;
                }
            },
            Vertical: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Vertical#get", this ); }

                    return this.snapY ? this.SnapFloat(this.input.y, AxisOptions.Vertical) : this.input.y;
                }
            },
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#Direction#get", this ); }

                    return new pc.Vec2( this.Horizontal, this.Vertical );
                }
            },
            HandleRange: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#HandleRange#get", this ); }

                    return this.handleRange;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#HandleRange#set", this ); }

                    this.handleRange = Math.abs(value);
                }
            },
            DeadZone: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#DeadZone#get", this ); }

                    return this.deadZone;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#DeadZone#set", this ); }

                    this.deadZone = Math.abs(value);
                }
            },
            AxisOptions: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#get", this ); }

                    return this.AxisOptions;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#AxisOptions#set", this ); }

                    this.axisOptions = value;
                }
            },
            SnapX: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapX#get", this ); }

                    return this.snapX;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapX#set", this ); }

                    this.snapX = value;
                }
            },
            SnapY: {
                get: function () {
if ( TRACE ) { TRACE( "Joystick#SnapY#get", this ); }

                    return this.snapY;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "Joystick#SnapY#set", this ); }

                    this.snapY = value;
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnDrag", "UnityEngine$EventSystems$IDragHandler$OnDrag",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "Joystick#init", this ); }

                this.input = new UnityEngine.Vector2();
                this.handleRange = 1.0;
                this.deadZone = 0.0;
                this.axisOptions = AxisOptions.Both;
                this.snapX = false;
                this.snapY = false;
                this.input = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*Joystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "Joystick#Start", this ); }

                this.HandleRange = this.handleRange;
                this.DeadZone = this.deadZone;
                this.baseRect = this.GetComponent(UnityEngine.RectTransform);
                this.canvas = this.GetComponentInParent(UnityEngine.Canvas);
                if (UnityEngine.Component.op_Equality(this.canvas, null)) {
                    UnityEngine.Debug.LogError$2("The Joystick is not placed inside a canvas");
                }
                var center = new pc.Vec2( 0.5, 0.5 );
                this.background.pivot = center.$clone();
                this._handle.anchorMin = center.$clone();
                this._handle.anchorMax = center.$clone();
                this._handle.pivot = center.$clone();
                this._handle.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.Start end.*/

            /*Joystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerDown", this ); }

                this.OnDrag(eventData);
            },
            /*Joystick.OnPointerDown end.*/

            /*Joystick.OnDrag start.*/
            OnDrag: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnDrag", this ); }

                this.cam = null;
                if (this.canvas.renderMode === UnityEngine.RenderMode.ScreenSpaceCamera) {
                    this.cam = this.canvas.worldCamera;
                }
                var position = UnityEngine.RectTransformUtility.WorldToScreenPoint(this.cam, this.background.position);
                var radius = this.background.sizeDelta.$clone().scale( 1.0 / ( 2.0 ) );
                this.input = (eventData.position.$clone().sub( position )).div( (radius.$clone().scale( this.canvas.scaleFactor )) );
                this.FormatInput();
                this.HandleInput(this.input.length(), this.input.clone().normalize().$clone(), radius.$clone(), this.cam);
                this._handle.anchoredPosition = this.input.$clone().mul( radius ).scale( this.handleRange );
            },
            /*Joystick.OnDrag end.*/

            /*Joystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "Joystick#HandleInput", this ); }

                if (magnitude > this.deadZone) {
                    if (magnitude > 1.0) {
                        this.input = normalised.$clone();
                    }
                } else {
                    this.input = pc.Vec2.ZERO.clone();
                }
            },
            /*Joystick.HandleInput end.*/

            /*Joystick.FormatInput start.*/
            FormatInput: function () {
if ( TRACE ) { TRACE( "Joystick#FormatInput", this ); }

                if (this.axisOptions === AxisOptions.Horizontal) {
                    this.input = new pc.Vec2( this.input.x, 0.0 );
                } else if (this.axisOptions === AxisOptions.Vertical) {
                    this.input = new pc.Vec2( 0.0, this.input.y );
                }
            },
            /*Joystick.FormatInput end.*/

            /*Joystick.SnapFloat start.*/
            SnapFloat: function (value, snapAxis) {
if ( TRACE ) { TRACE( "Joystick#SnapFloat", this ); }

                if (value === 0.0) {
                    return value;
                }
                if (this.axisOptions === AxisOptions.Both) {
                    var angle = pc.Vec2.angle( this.input, pc.Vec2.UP.clone() );
                    switch (snapAxis) {
                        case AxisOptions.Horizontal: 
                            if (angle < 22.5 || angle > 157.5) {
                                return 0.0;
                            }
                            return (value > 0.0) ? 1 : (-1);
                        case AxisOptions.Vertical: 
                            if (angle > 67.5 && angle < 112.5) {
                                return 0.0;
                            }
                            return (value > 0.0) ? 1 : (-1);
                        default: 
                            return value;
                    }
                }
                if (value > 0.0) {
                    return 1.0;
                }
                if (value < 0.0) {
                    return -1.0;
                }
                return 0.0;
            },
            /*Joystick.SnapFloat end.*/

            /*Joystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "Joystick#OnPointerUp", this ); }

                this.input = pc.Vec2.ZERO.clone();
                this._handle.anchoredPosition = pc.Vec2.ZERO.clone();
            },
            /*Joystick.OnPointerUp end.*/

            /*Joystick.ScreenPointToAnchoredPosition start.*/
            ScreenPointToAnchoredPosition: function (screenPosition) {
if ( TRACE ) { TRACE( "Joystick#ScreenPointToAnchoredPosition", this ); }

                var localPoint = { v : pc.Vec2.ZERO.clone() };
                if (UnityEngine.RectTransformUtility.ScreenPointToLocalPointInRectangle(this.baseRect, screenPosition, this.cam, localPoint)) {
                    var pivotOffset = this.baseRect.pivot.$clone().mul( this.baseRect.sizeDelta );
                    return localPoint.v.$clone().sub( this.background.anchorMax.$clone().mul( this.baseRect.sizeDelta ) ).add( pivotOffset );
                }
                return pc.Vec2.ZERO.clone();
            },
            /*Joystick.ScreenPointToAnchoredPosition end.*/


        }
    });
    /*Joystick end.*/

    /*JoystickType start.*/
    Bridge.define("JoystickType", {
        $kind: 6,
        statics: {
            fields: {
                Fixed: 0,
                Floating: 1,
                Dynamic: 2
            }
        }
    });
    /*JoystickType end.*/

    /*_Project.Code.Core.Buyables.Buyable start.*/
    Bridge.define("_Project.Code.Core.Buyables.Buyable", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Tutorial.IBuyable],
        fields: {
            _itemInventory: null,
            _price: 0,
            _activateOnBought: null,
            _deactivateOnBought: null
        },
        props: {
            IsBought: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#IsBought#get", this ); }

                    return !Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.activeSelf;
                }
            }
        },
        alias: [
            "IsBought", "_Project$Code$Tutorial$IBuyable$IsBought",
            "Buy", "_Project$Code$Tutorial$IBuyable$Buy"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#init", this ); }

                this._price = 10;
            }
        },
        methods: {
            /*_Project.Code.Core.Buyables.Buyable.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#Awake", this ); }

                this._itemInventory.SetType(_Project.Code.Core.Items.ItemType.Coin);
                this._itemInventory.SetOperation(_Project.Code.Core.Items.Inventory.InventoryType.Receiver);
                this._itemInventory.SetCapacity(this.GetCapacity());
            },
            /*_Project.Code.Core.Buyables.Buyable.Awake end.*/

            /*_Project.Code.Core.Buyables.Buyable.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#OnEnable", this ); }

                this._itemInventory.addAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.Buyables.Buyable.OnEnable end.*/

            /*_Project.Code.Core.Buyables.Buyable.OnAdded start.*/
            OnAdded: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#OnAdded", this ); }

                if (this._itemInventory.Count === this._itemInventory.Capacity) {
                    this.Buy();
                }
            },
            /*_Project.Code.Core.Buyables.Buyable.OnAdded end.*/

            /*_Project.Code.Core.Buyables.Buyable.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#OnDisable", this ); }

                this._itemInventory.removeAdded(Bridge.fn.cacheBind(this, this.OnAdded));
            },
            /*_Project.Code.Core.Buyables.Buyable.OnDisable end.*/

            /*_Project.Code.Core.Buyables.Buyable.GetCapacity start.*/
            GetCapacity: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#GetCapacity", this ); }

                return this._price;
            },
            /*_Project.Code.Core.Buyables.Buyable.GetCapacity end.*/

            /*_Project.Code.Core.Buyables.Buyable.Buy start.*/
            Buy: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.Buyable#Buy", this ); }

                UnityEngine.GameObject.op_Inequality(this._activateOnBought, null) ? this._activateOnBought.SetActive(true) : null;
                this._deactivateOnBought.ForEach(function (g) {
                    g.SetActive(false);
                });
            },
            /*_Project.Code.Core.Buyables.Buyable.Buy end.*/


        }
    });
    /*_Project.Code.Core.Buyables.Buyable end.*/

    /*_Project.Code.Core.Buyables.InventorViewDestroyer start.*/
    Bridge.define("_Project.Code.Core.Buyables.InventorViewDestroyer", {
        inherits: [_Project.Code.Core.Items.Inventory.BaseInventoryView],
        methods: {
            /*_Project.Code.Core.Buyables.InventorViewDestroyer.OnRemoved start.*/
            OnRemoved: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.InventorViewDestroyer#OnRemoved", this ); }
 },
            /*_Project.Code.Core.Buyables.InventorViewDestroyer.OnRemoved end.*/

            /*_Project.Code.Core.Buyables.InventorViewDestroyer.OnAdded start.*/
            OnAdded: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Buyables.InventorViewDestroyer#OnAdded", this ); }

                UnityEngine.Object.Destroy(item.gameObject);
            },
            /*_Project.Code.Core.Buyables.InventorViewDestroyer.OnAdded end.*/


        }
    });
    /*_Project.Code.Core.Buyables.InventorViewDestroyer end.*/

    /*_Project.Code.Core.Collision.CollisionDetector start.*/
    Bridge.define("_Project.Code.Core.Collision.CollisionDetector", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Core.Collision.ICollisionDetector],
        events: {
            Triggered: null,
            TriggerEnter: null,
            TriggerStay: null,
            TriggerExit: null
        },
        alias: [
            "addTriggered", "_Project$Code$Core$Collision$ICollisionDetector$addTriggered",
            "removeTriggered", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggered",
            "addTriggerEnter", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerEnter",
            "removeTriggerEnter", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerEnter",
            "addTriggerStay", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerStay",
            "removeTriggerStay", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerStay",
            "addTriggerExit", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerExit",
            "removeTriggerExit", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerExit"
        ],
        methods: {
            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerEnter2D start.*/
            OnTriggerEnter2D: function (other) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.CollisionDetector#OnTriggerEnter2D", this ); }

                this.Handle(other, _Project.Code.Core.Collision.CollisionType.Enter);
            },
            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerEnter2D end.*/

            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerStay2D start.*/
            OnTriggerStay2D: function (other) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.CollisionDetector#OnTriggerStay2D", this ); }

                this.Handle(other, _Project.Code.Core.Collision.CollisionType.Stay);
            },
            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerStay2D end.*/

            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerExit2D start.*/
            OnTriggerExit2D: function (other) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.CollisionDetector#OnTriggerExit2D", this ); }

                this.Handle(other, _Project.Code.Core.Collision.CollisionType.Exit);
            },
            /*_Project.Code.Core.Collision.CollisionDetector.OnTriggerExit2D end.*/

            /*_Project.Code.Core.Collision.CollisionDetector.Handle start.*/
            Handle: function (other, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.CollisionDetector#Handle", this ); }

                !Bridge.staticEquals(this.Triggered, null) ? this.Triggered(other, type) : null;
                switch (type) {
                    case _Project.Code.Core.Collision.CollisionType.Enter: 
                        !Bridge.staticEquals(this.TriggerEnter, null) ? this.TriggerEnter(other) : null;
                        break;
                    case _Project.Code.Core.Collision.CollisionType.Stay: 
                        !Bridge.staticEquals(this.TriggerStay, null) ? this.TriggerStay(other) : null;
                        break;
                    case _Project.Code.Core.Collision.CollisionType.Exit: 
                        !Bridge.staticEquals(this.TriggerExit, null) ? this.TriggerExit(other) : null;
                        break;
                }
            },
            /*_Project.Code.Core.Collision.CollisionDetector.Handle end.*/


        }
    });
    /*_Project.Code.Core.Collision.CollisionDetector end.*/

    /*_Project.Code.Core.Collision.OverlapCollisionDetector start.*/
    Bridge.define("_Project.Code.Core.Collision.OverlapCollisionDetector", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Core.Collision.ICollisionDetector],
        fields: {
            detectionRadius: 0,
            collisionMask: null,
            _previousColliders: null,
            _currentColliders: null
        },
        events: {
            Triggered: null,
            TriggerEnter: null,
            TriggerStay: null,
            TriggerExit: null
        },
        alias: [
            "addTriggered", "_Project$Code$Core$Collision$ICollisionDetector$addTriggered",
            "removeTriggered", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggered",
            "addTriggerEnter", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerEnter",
            "removeTriggerEnter", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerEnter",
            "addTriggerStay", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerStay",
            "removeTriggerStay", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerStay",
            "addTriggerExit", "_Project$Code$Core$Collision$ICollisionDetector$addTriggerExit",
            "removeTriggerExit", "_Project$Code$Core$Collision$ICollisionDetector$removeTriggerExit"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#init", this ); }

                this.collisionMask = new UnityEngine.LayerMask();
                this.detectionRadius = 1.0;
                this._previousColliders = System.Array.init(40, null, UnityEngine.Collider2D);
                this._currentColliders = System.Array.init(40, null, UnityEngine.Collider2D);
            }
        },
        methods: {
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.FixedUpdate start.*/
            FixedUpdate: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#FixedUpdate", this ); }

                this.DetectCollisions();
            },
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.FixedUpdate end.*/

            /*_Project.Code.Core.Collision.OverlapCollisionDetector.DetectCollisions start.*/
            DetectCollisions: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#DetectCollisions", this ); }

                var $t;
                System.Array.copy(this._currentColliders, 0, this._previousColliders, 0, this._currentColliders.length);
                System.Array.fill(this._currentColliders, null, 0, this._currentColliders.length);
                var count = UnityEngine.Physics2D.OverlapCircleNonAlloc(UnityEngine.Vector2.FromVector3(this.transform.position), this.detectionRadius, this._currentColliders, UnityEngine.LayerMask.op_Implicit(this.collisionMask.$clone()));
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var collider = this._currentColliders[i];
                    if (System.Array.indexOfT(this._previousColliders, collider) === -1) {
                        this.Handle(collider, _Project.Code.Core.Collision.CollisionType.Enter);
                    } else {
                        this.Handle(collider, _Project.Code.Core.Collision.CollisionType.Stay);
                    }
                }
                var previousColliders = this._previousColliders;
                $t = Bridge.getEnumerator(previousColliders);
                try {
                    while ($t.moveNext()) {
                        var prevCollider = $t.Current;
                        if (UnityEngine.Component.op_Inequality(prevCollider, null) && System.Array.indexOfT(this._currentColliders, prevCollider) === -1) {
                            this.Handle(prevCollider, _Project.Code.Core.Collision.CollisionType.Exit);
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
            },
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.DetectCollisions end.*/

            /*_Project.Code.Core.Collision.OverlapCollisionDetector.Handle start.*/
            Handle: function (other, type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#Handle", this ); }

                !Bridge.staticEquals(this.Triggered, null) ? this.Triggered(other, type) : null;
                switch (type) {
                    case _Project.Code.Core.Collision.CollisionType.Enter: 
                        !Bridge.staticEquals(this.TriggerEnter, null) ? this.TriggerEnter(other) : null;
                        break;
                    case _Project.Code.Core.Collision.CollisionType.Stay: 
                        !Bridge.staticEquals(this.TriggerStay, null) ? this.TriggerStay(other) : null;
                        break;
                    case _Project.Code.Core.Collision.CollisionType.Exit: 
                        !Bridge.staticEquals(this.TriggerExit, null) ? this.TriggerExit(other) : null;
                        break;
                }
            },
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.Handle end.*/

            /*_Project.Code.Core.Collision.OverlapCollisionDetector.OnDrawGizmos start.*/
            OnDrawGizmos: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Collision.OverlapCollisionDetector#OnDrawGizmos", this ); }

                pc.generateStubProxy( 'UnityEngine.Gizmos', true ).color = new pc.Color( 1, 0, 0, 1 );
                pc.stubProxy.reportMethod( 'UnityEngine.Gizmos.DrawWireSphere', null );
            },
            /*_Project.Code.Core.Collision.OverlapCollisionDetector.OnDrawGizmos end.*/


        }
    });
    /*_Project.Code.Core.Collision.OverlapCollisionDetector end.*/

    /*_Project.Code.Core.Items.Inventory.ColumnInventoryView start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.ColumnInventoryView", {
        inherits: [_Project.Code.Core.Items.Inventory.BaseInventoryView],
        fields: {
            _columnPoints: null,
            _destroyOnEmptied: false,
            _rowIndex: 0,
            _columnIndex: 0
        },
        props: {
            Height: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#Height#get", this ); }

                    return this._columnIndex * 0.2;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#init", this ); }

                this._rowIndex = -1;
                this._columnIndex = 0;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#Awake", this ); }

                if (this._columnPoints.Count < 1) {
                    throw new System.NullReferenceException.$ctor1("No column points");
                }
            },
            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.Awake end.*/

            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.OnRemoved start.*/
            OnRemoved: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#OnRemoved", this ); }

                this._rowIndex = (this._rowIndex - 1) | 0;
                if (this._rowIndex < 0) {
                    this._rowIndex = (this._columnPoints.Count - 1) | 0;
                    this._columnIndex = (this._columnIndex - 1) | 0;
                }
                item.transform.parent = null;
                if (this._destroyOnEmptied && this.ItemsCount === 0) {
                    UnityEngine.Object.Destroy(Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject);
                }
            },
            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.OnRemoved end.*/

            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.OnAdded start.*/
            OnAdded: function (item) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ColumnInventoryView#OnAdded", this ); }

                this._rowIndex = (this._rowIndex + 1) | 0;
                if (this._rowIndex >= this._columnPoints.Count) {
                    this._rowIndex = 0;
                    this._columnIndex = (this._columnIndex + 1) | 0;
                }
                item.transform.parent = this._columnPoints.getItem(this._rowIndex);
                item.transform.localPosition = pc.Vec3.ZERO.clone().add( pc.Vec3.UP.clone().clone().scale( this.Height ) );
                item.transform.rotation = pc.Quat.IDENTITY.clone();
            },
            /*_Project.Code.Core.Items.Inventory.ColumnInventoryView.OnAdded end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.ColumnInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.ItemInventory start.*/
    Bridge.define("_Project.Code.Core.Items.Inventory.ItemInventory", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Tutorial.IStorage],
        fields: {
            _collectables: null,
            _type: 0,
            _inventory: 0,
            _capacity: 0
        },
        events: {
            Added: null,
            Removed: null
        },
        props: {
            ItemType: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#ItemType#get", this ); }

                    return this._type;
                }
            },
            InventoryType: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#InventoryType#get", this ); }

                    return this._inventory;
                }
            },
            Count: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#Count#get", this ); }

                    return this._collectables.Count;
                }
            },
            IsEmpty: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#IsEmpty#get", this ); }

                    return this.Count <= 0;
                }
            },
            Capacity: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#Capacity#get", this ); }

                    return this._capacity;
                }
            }
        },
        alias: ["IsEmpty", "_Project$Code$Tutorial$IStorage$IsEmpty"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#init", this ); }

                this._collectables = new (System.Collections.Generic.Stack$1(_Project.Code.Core.Items.Item)).ctor();
                this._capacity = 50;
            }
        },
        methods: {
            /*_Project.Code.Core.Items.Inventory.ItemInventory.CanAdd start.*/
            CanAdd: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#CanAdd", this ); }

                return this._collectables.Count < this._capacity;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.CanAdd end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.CanGet start.*/
            CanGet: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#CanGet", this ); }

                return this._collectables.Count > 0;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.CanGet end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.Add start.*/
            Add: function (collectable) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#Add", this ); }

                UnityEngine.Debug.Log$1(System.String.format("Adding {0} to {1} storage", Bridge.box(collectable.Type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType)), Bridge.box(this._type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))));
                if (!this.CanAdd()) {
                    throw new System.OperationCanceledException.$ctor1(System.String.format("Cant add to {0} storage", [Bridge.box(this._type, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType))]));
                }
                this._collectables.Push(collectable);
                !Bridge.staticEquals(this.Added, null) ? this.Added(collectable) : null;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.Add end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetCapacity start.*/
            SetCapacity: function (capacity) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#SetCapacity", this ); }

                this._capacity = capacity;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetCapacity end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.Get start.*/
            Get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#Get", this ); }

                if (!this.CanGet()) {
                    throw new System.InvalidOperationException.$ctor1("Storage is empty");
                }
                var collectable = this._collectables.Pop();
                !Bridge.staticEquals(this.Removed, null) ? this.Removed(collectable) : null;
                return collectable;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.Get end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.TryGet start.*/
            TryGet: function (collectable) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#TryGet", this ); }

                if (!this.CanGet()) {
                    collectable.v = null;
                    return false;
                }
                collectable.v = this._collectables.Pop();
                return true;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.TryGet end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetType start.*/
            SetType: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#SetType", this ); }

                this._type = type;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetType end.*/

            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetOperation start.*/
            SetOperation: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Core.Items.Inventory.ItemInventory#SetOperation", this ); }

                this._inventory = type;
            },
            /*_Project.Code.Core.Items.Inventory.ItemInventory.SetOperation end.*/


        }
    });
    /*_Project.Code.Core.Items.Inventory.ItemInventory end.*/

    /*_Project.Code.Entry.StorageFabric start.*/
    Bridge.define("_Project.Code.Entry.StorageFabric", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Tutorial.IStorageFabric],
        fields: {
            _inventoryPrefab: null,
            _coinPrefab: null
        },
        alias: ["CreateNew", "_Project$Code$Tutorial$IStorageFabric$CreateNew"],
        methods: {
            /*_Project.Code.Entry.StorageFabric.CreateNew start.*/
            CreateNew: function (position, type, count) {
if ( TRACE ) { TRACE( "_Project.Code.Entry.StorageFabric#CreateNew", this ); }

                var storage = UnityEngine.Object.Instantiate$2(_Project.Code.Core.Items.Inventory.ItemInventory, this._inventoryPrefab, position, pc.Quat.IDENTITY.clone());
                storage.SetType(type);
                storage.SetOperation(_Project.Code.Core.Items.Inventory.InventoryType.Sender);
                for (var i = 0; i < count; i = (i + 1) | 0) {
                    storage.Add(this.Instantiate(type));
                }
                return storage;
            },
            /*_Project.Code.Entry.StorageFabric.CreateNew end.*/

            /*_Project.Code.Entry.StorageFabric.Instantiate start.*/
            Instantiate: function (type) {
if ( TRACE ) { TRACE( "_Project.Code.Entry.StorageFabric#Instantiate", this ); }

                return UnityEngine.Object.Instantiate(_Project.Code.Core.Items.Item, this._coinPrefab);
            },
            /*_Project.Code.Entry.StorageFabric.Instantiate end.*/


        }
    });
    /*_Project.Code.Entry.StorageFabric end.*/

    /*_Project.Code.Entry.TweenEnable start.*/
    Bridge.define("_Project.Code.Entry.TweenEnable", {
        inherits: [_Project.Code.Entry.IEnable],
        fields: {
            _tween: null
        },
        alias: [
            "Enable", "_Project$Code$Entry$IEnable$Enable",
            "Disable", "_Project$Code$Entry$IEnable$Disable"
        ],
        ctors: {
            ctor: function (tween) {
if ( TRACE ) { TRACE( "_Project.Code.Entry.TweenEnable#ctor", this ); }

                this.$initialize();
                this._tween = tween;
            }
        },
        methods: {
            /*_Project.Code.Entry.TweenEnable.Enable start.*/
            Enable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.TweenEnable#Enable", this ); }

                DG.Tweening.TweenExtensions.Play(DG.Tweening.Tween, this._tween);
            },
            /*_Project.Code.Entry.TweenEnable.Enable end.*/

            /*_Project.Code.Entry.TweenEnable.Disable start.*/
            Disable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Entry.TweenEnable#Disable", this ); }

                DG.Tweening.TweenExtensions.Rewind(this._tween);
            },
            /*_Project.Code.Entry.TweenEnable.Disable end.*/


        }
    });
    /*_Project.Code.Entry.TweenEnable end.*/

    /*_Project.Code.Selling.Line.Line start.*/
    Bridge.define("_Project.Code.Selling.Line.Line", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Selling.ILine],
        fields: {
            _customerPrefab: null,
            _customerSprites: null,
            _spawnPoints: null,
            _customers: null,
            _reservedCount: 0,
            _spawnRequests: 0
        },
        alias: [
            "TryGetCustomer", "_Project$Code$Selling$ILine$TryGetCustomer",
            "OnCustomerServed", "_Project$Code$Selling$ILine$OnCustomerServed"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#init", this ); }

                this._customerSprites = new (System.Collections.Generic.List$1(UnityEngine.Sprite)).ctor();
                this._spawnPoints = new (System.Collections.Generic.List$1(UnityEngine.Transform)).ctor();
                this._customers = new (System.Collections.Generic.Queue$1(_Project.Code.Selling.Customer)).ctor();
            }
        },
        methods: {
            /*_Project.Code.Selling.Line.Line.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#OnEnable", this ); }

                this.Init();
            },
            /*_Project.Code.Selling.Line.Line.OnEnable end.*/

            /*_Project.Code.Selling.Line.Line.Init start.*/
            Init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#Init", this ); }

                this.RequestCreation$1(this._spawnPoints.Count);
                this.StartCoroutine$1(this.CreatingCustomers());
            },
            /*_Project.Code.Selling.Line.Line.Init end.*/

            /*_Project.Code.Selling.Line.Line.CreateNewCustomer start.*/
            CreateNewCustomer: function (i) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#CreateNewCustomer", this ); }

                var point = this._spawnPoints.getItem(i);
                var customer = UnityEngine.Object.Instantiate$1(_Project.Code.Selling.Customer, this._customerPrefab, point, true);
                customer.transform.localPosition = pc.Vec3.ZERO.clone();
                var spriteIndex = UnityEngine.Random.Range(0, this._customerSprites.Count);
                var sprite = this._customerSprites.getItem(spriteIndex);
                var orderSize = UnityEngine.Random.Range(1, 10);
                customer.Init(sprite, orderSize, orderSize);
                this._customers.Enqueue(customer);
                return customer;
            },
            /*_Project.Code.Selling.Line.Line.CreateNewCustomer end.*/

            /*_Project.Code.Selling.Line.Line.TryGetCustomer start.*/
            TryGetCustomer: function (customer) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#TryGetCustomer", this ); }

                customer.v = ((this._customers.Count > 0) ? this._customers.Peek() : null);
                return UnityEngine.MonoBehaviour.op_Inequality(customer.v, null);
            },
            /*_Project.Code.Selling.Line.Line.TryGetCustomer end.*/

            /*_Project.Code.Selling.Line.Line.OnCustomerServed start.*/
            OnCustomerServed: function (customer) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#OnCustomerServed", this ); }

                var dequeued = this._customers.Dequeue();
                if (UnityEngine.MonoBehaviour.op_Inequality(customer, dequeued)) {
                    throw new System.InvalidOperationException.$ctor1("Customer is not the same as dequeued");
                }
                dequeued.enabled = false;
                this.MoveCustomers(Bridge.fn.cacheBind(this, this.RequestCreation));
            },
            /*_Project.Code.Selling.Line.Line.OnCustomerServed end.*/

            /*_Project.Code.Selling.Line.Line.RequestCreation$1 start.*/
            RequestCreation$1: function (count) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#RequestCreation$1", this ); }

                this._spawnRequests = (this._spawnRequests + count) | 0;
            },
            /*_Project.Code.Selling.Line.Line.RequestCreation$1 end.*/

            /*_Project.Code.Selling.Line.Line.RequestCreation start.*/
            RequestCreation: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#RequestCreation", this ); }

                this.RequestCreation$1(1);
            },
            /*_Project.Code.Selling.Line.Line.RequestCreation end.*/

            /*_Project.Code.Selling.Line.Line.CreatingCustomers start.*/
            CreatingCustomers: function () {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#CreatingCustomers", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    pointIndex,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if ( Bridge.ensureBaseProperty(this, "gameObject").$UnityEngine$Component$gameObject.activeSelf ) {
                                            $step = 1;
                                            continue;
                                        } 
                                        $step = 6;
                                        continue;
                                }
                                case 1: {
                                    if (this._spawnRequests < 1 && this._customers.Count >= this._spawnPoints.Count) {
                                            $step = 2;
                                            continue;
                                        } 
                                        $step = 4;
                                        continue;
                                }
                                case 2: {
                                    $enumerator.current = null;
                                        $step = 3;
                                        return true;
                                }
                                case 3: {
                                    $step = 0;
                                        continue;
                                }
                                case 4: {
                                    pointIndex = this._customers.Count;
                                        this.CreateNewCustomer(pointIndex);
                                        this._spawnRequests = (this._spawnRequests - 1) | 0;
                                        $enumerator.current = new UnityEngine.WaitForSeconds(2.0);
                                        $step = 5;
                                        return true;
                                }
                                case 5: {
                                    
                                        $step = 0;
                                        continue;
                                }
                                case 6: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*_Project.Code.Selling.Line.Line.CreatingCustomers end.*/

            /*_Project.Code.Selling.Line.Line.MoveCustomers start.*/
            MoveCustomers: function (onFinished) {
if ( TRACE ) { TRACE( "_Project.Code.Selling.Line.Line#MoveCustomers", this ); }

                if (onFinished === void 0) { onFinished = null; }
                var customersArray = this._customers.ToArray();
                this._customers.Clear();
                var sequence = DG.Tweening.DOTween.Sequence();
                for (var i = 0; i < ((customersArray.length + this._reservedCount) | 0); i = (i + 1) | 0) {
                    var customer = customersArray[i];
                    if (i < this._spawnPoints.Count) {
                        customer.transform.parent = this._spawnPoints.getItem(i);
                        DG.Tweening.TweenSettingsExtensions.Join(sequence, DG.Tweening.ShortcutExtensions.DOLocalMove(customer.transform, pc.Vec3.ZERO.clone(), 0.5));
                    }
                    this._customers.Enqueue(customer);
                }
                DG.Tweening.TweenExtensions.Play(DG.Tweening.Sequence, DG.Tweening.TweenSettingsExtensions.OnComplete(DG.Tweening.Sequence, sequence, function () {
                    !Bridge.staticEquals(onFinished, null) ? onFinished() : null;
                }));
            },
            /*_Project.Code.Selling.Line.Line.MoveCustomers end.*/


        },
        overloads: {
            "RequestCreation(int)": "RequestCreation$1"
        }
    });
    /*_Project.Code.Selling.Line.Line end.*/

    /*_Project.Code.Services.CoroutineRunner.CoroutineRunner start.*/
    Bridge.define("_Project.Code.Services.CoroutineRunner.CoroutineRunner", {
        inherits: [UnityEngine.MonoBehaviour,_Project.Code.Services.CoroutineRunner.ICoroutineRunner],
        alias: [
            "Launch", "_Project$Code$Services$CoroutineRunner$ICoroutineRunner$Launch",
            "Stop", "_Project$Code$Services$CoroutineRunner$ICoroutineRunner$Stop"
        ],
        methods: {
            /*_Project.Code.Services.CoroutineRunner.CoroutineRunner.Launch start.*/
            Launch: function (coroutine) {
if ( TRACE ) { TRACE( "_Project.Code.Services.CoroutineRunner.CoroutineRunner#Launch", this ); }

                this.StartCoroutine$1(coroutine);
            },
            /*_Project.Code.Services.CoroutineRunner.CoroutineRunner.Launch end.*/

            /*_Project.Code.Services.CoroutineRunner.CoroutineRunner.Stop start.*/
            Stop: function (coroutine) {
if ( TRACE ) { TRACE( "_Project.Code.Services.CoroutineRunner.CoroutineRunner#Stop", this ); }

                this.StopCoroutine(coroutine);
            },
            /*_Project.Code.Services.CoroutineRunner.CoroutineRunner.Stop end.*/


        }
    });
    /*_Project.Code.Services.CoroutineRunner.CoroutineRunner end.*/

    /*_Project.Code.Services.Input.KeyboardMoveInput start.*/
    Bridge.define("_Project.Code.Services.Input.KeyboardMoveInput", {
        inherits: [_Project.Code.Services.Input.IMoveInput],
        props: {
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.KeyboardMoveInput#Direction#get", this ); }

                    return new pc.Vec2( UnityEngine.Input.GetAxis("Horizontal"), UnityEngine.Input.GetAxis("Vertical") ).clone().normalize().$clone();
                }
            }
        },
        alias: ["Direction", "_Project$Code$Services$Input$IMoveInput$Direction"]
    });
    /*_Project.Code.Services.Input.KeyboardMoveInput end.*/

    /*_Project.Code.Services.Input.MoveInput start.*/
    Bridge.define("_Project.Code.Services.Input.MoveInput", {
        inherits: [_Project.Code.Services.Input.IMoveInput],
        fields: {
            Enabled: false,
            _joystick: null,
            _keyboardMoveInput: null
        },
        props: {
            Direction: {
                get: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.MoveInput#Direction#get", this ); }

                    return this.GetDirection();
                }
            }
        },
        alias: ["Direction", "_Project$Code$Services$Input$IMoveInput$Direction"],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.MoveInput#init", this ); }

                this.Enabled = true;
                this._keyboardMoveInput = new _Project.Code.Services.Input.KeyboardMoveInput();
            },
            ctor: function (joystick) {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.MoveInput#ctor", this ); }

                this.$initialize();
                this._joystick = joystick;
            }
        },
        methods: {
            /*_Project.Code.Services.Input.MoveInput.GetDirection start.*/
            GetDirection: function () {
if ( TRACE ) { TRACE( "_Project.Code.Services.Input.MoveInput#GetDirection", this ); }

                if (!this.Enabled) {
                    return pc.Vec2.ZERO.clone();
                }
                var joystick = this._joystick.Direction.$clone();
                var keyboard = new pc.Vec2( UnityEngine.Input.GetAxis("Horizontal"), UnityEngine.Input.GetAxis("Vertical") ).clone().normalize().$clone();
                if (joystick.length() > 0.1) {
                    return joystick.$clone();
                }
                if (keyboard.length() > 0.1) {
                    return keyboard.$clone();
                }
                return pc.Vec2.ZERO.clone();
            },
            /*_Project.Code.Services.Input.MoveInput.GetDirection end.*/


        }
    });
    /*_Project.Code.Services.Input.MoveInput end.*/

    /*DynamicJoystick start.*/
    Bridge.define("DynamicJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "DynamicJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#init", this ); }

                this.moveThreshold = 1.0;
            }
        },
        methods: {
            /*DynamicJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DynamicJoystick#Start", this ); }

                this.MoveThreshold = this.moveThreshold;
                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*DynamicJoystick.Start end.*/

            /*DynamicJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerDown end.*/

            /*DynamicJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "DynamicJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*DynamicJoystick.OnPointerUp end.*/

            /*DynamicJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "DynamicJoystick#HandleInput", this ); }

                if (magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*DynamicJoystick.HandleInput end.*/


        }
    });
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    Bridge.define("FixedJoystick", {
        inherits: [Joystick]
    });
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    Bridge.define("FloatingJoystick", {
        inherits: [Joystick],
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        methods: {
            /*FloatingJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FloatingJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.background.gameObject.SetActive(false);
            },
            /*FloatingJoystick.Start end.*/

            /*FloatingJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerDown", this ); }

                this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                this.background.gameObject.SetActive(true);
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerDown end.*/

            /*FloatingJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "FloatingJoystick#OnPointerUp", this ); }

                this.background.gameObject.SetActive(false);
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*FloatingJoystick.OnPointerUp end.*/


        }
    });
    /*FloatingJoystick end.*/

    /*VariableJoystick start.*/
    Bridge.define("VariableJoystick", {
        inherits: [Joystick],
        fields: {
            moveThreshold: 0,
            joystickType: 0,
            fixedPosition: null
        },
        props: {
            MoveThreshold: {
                get: function () {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#get", this ); }

                    return this.moveThreshold;
                },
                set: function (value) {
if ( TRACE ) { TRACE( "VariableJoystick#MoveThreshold#set", this ); }

                    this.moveThreshold = Math.abs(value);
                }
            }
        },
        alias: [
            "OnPointerDown", "UnityEngine$EventSystems$IPointerDownHandler$OnPointerDown",
            "OnPointerUp", "UnityEngine$EventSystems$IPointerUpHandler$OnPointerUp"
        ],
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "VariableJoystick#init", this ); }

                this.fixedPosition = new UnityEngine.Vector2();
                this.moveThreshold = 1.0;
                this.joystickType = JoystickType.Fixed;
                this.fixedPosition = pc.Vec2.ZERO.clone();
            }
        },
        methods: {
            /*VariableJoystick.SetMode start.*/
            SetMode: function (joystickType) {
if ( TRACE ) { TRACE( "VariableJoystick#SetMode", this ); }

                this.joystickType = joystickType;
                if (joystickType === JoystickType.Fixed) {
                    this.background.anchoredPosition = this.fixedPosition.$clone();
                    this.background.gameObject.SetActive(true);
                } else {
                    this.background.gameObject.SetActive(false);
                }
            },
            /*VariableJoystick.SetMode end.*/

            /*VariableJoystick.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "VariableJoystick#Start", this ); }

                Joystick.prototype.Start.call(this);
                this.fixedPosition = this.background.anchoredPosition.$clone();
                this.SetMode(this.joystickType);
            },
            /*VariableJoystick.Start end.*/

            /*VariableJoystick.UpdateFixedPosition start.*/
            UpdateFixedPosition: function () {
if ( TRACE ) { TRACE( "VariableJoystick#UpdateFixedPosition", this ); }

                this.fixedPosition = this.background.anchoredPosition.$clone();
            },
            /*VariableJoystick.UpdateFixedPosition end.*/

            /*VariableJoystick.OnPointerDown start.*/
            OnPointerDown: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerDown", this ); }

                if (this.joystickType !== 0) {
                    this.background.anchoredPosition = this.ScreenPointToAnchoredPosition(eventData.position.$clone());
                    this.background.gameObject.SetActive(true);
                }
                Joystick.prototype.OnPointerDown.call(this, eventData);
            },
            /*VariableJoystick.OnPointerDown end.*/

            /*VariableJoystick.OnPointerUp start.*/
            OnPointerUp: function (eventData) {
if ( TRACE ) { TRACE( "VariableJoystick#OnPointerUp", this ); }

                if (this.joystickType !== 0) {
                    this.background.gameObject.SetActive(false);
                }
                Joystick.prototype.OnPointerUp.call(this, eventData);
            },
            /*VariableJoystick.OnPointerUp end.*/

            /*VariableJoystick.HandleInput start.*/
            HandleInput: function (magnitude, normalised, radius, cam) {
if ( TRACE ) { TRACE( "VariableJoystick#HandleInput", this ); }

                if (this.joystickType === JoystickType.Dynamic && magnitude > this.moveThreshold) {
                    var difference = normalised.$clone().scale( (magnitude - this.moveThreshold) ).mul( radius );
                    this.background.anchoredPosition = this.background.anchoredPosition.$clone().add( difference.$clone() );
                }
                Joystick.prototype.HandleInput.call(this, magnitude, normalised.$clone(), radius.$clone(), cam);
            },
            /*VariableJoystick.HandleInput end.*/


        }
    });
    /*VariableJoystick end.*/

    if ( MODULE_reflection ) {
    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","UnityEngine.EventSystems","_Project.Code.Core.Items","_Project.Code.Core.Items.Inventory","TMPro","DG.Tweening","_Project.Code.Tutorial","Assets.CourseGame.Develop.DI","_Project.Code.Services.ItemsCreation","System.Collections.Generic","_Project.Code.Services.Input","System.Collections","_Project.Code.Selling.Line","_Project.Code.Selling","_Project.Code.Services.CoroutineRunner","UnityEngine.UI","_Project.Code.Core.Items.Transfering","_Project.Code.Core.Collision","_Project.Code.Core.Harvesting","_Project.Code.Core.Character","UnityEngine.Rendering","_Project.Code.Core.Buyables","UnityEngine.Audio","DG.Tweening.Core","DG.Tweening.Plugins.Core.PathCore","System.Globalization","DG.Tweening.Plugins.Options"];

    /*AxisOptions start.*/
    $m("AxisOptions", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":AxisOptions,"sn":"Both","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Horizontal","is":true,"t":4,"rt":AxisOptions,"sn":"Horizontal","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"a":2,"n":"Vertical","is":true,"t":4,"rt":AxisOptions,"sn":"Vertical","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}}]}; }, $n);
    /*AxisOptions end.*/

    /*DynamicJoystick start.*/
    $m("DynamicJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*DynamicJoystick end.*/

    /*FixedJoystick start.*/
    $m("FixedJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*FixedJoystick end.*/

    /*FloatingJoystick start.*/
    $m("FloatingJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void}]}; }, $n);
    /*FloatingJoystick end.*/

    /*Joystick start.*/
    $m("Joystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FormatInput","t":8,"sn":"FormatInput","rt":$n[0].Void},{"v":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"a":2,"n":"OnDrag","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnDrag","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"v":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"v":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":3,"n":"ScreenPointToAnchoredPosition","t":8,"pi":[{"n":"screenPosition","pt":$n[1].Vector2,"ps":0}],"sn":"ScreenPointToAnchoredPosition","rt":$n[1].Vector2,"p":[$n[1].Vector2]},{"a":1,"n":"SnapFloat","t":8,"pi":[{"n":"value","pt":$n[0].Single,"ps":0},{"n":"snapAxis","pt":AxisOptions,"ps":1}],"sn":"SnapFloat","rt":$n[0].Single,"p":[$n[0].Single,AxisOptions],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"v":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"AxisOptions","t":16,"rt":AxisOptions,"g":{"a":2,"n":"get_AxisOptions","t":8,"rt":AxisOptions,"fg":"AxisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},"s":{"a":2,"n":"set_AxisOptions","t":8,"p":[AxisOptions],"rt":$n[0].Void,"fs":"AxisOptions"},"fn":"AxisOptions"},{"a":2,"n":"DeadZone","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_DeadZone","t":8,"rt":$n[0].Single,"fg":"DeadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_DeadZone","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"DeadZone"},"fn":"DeadZone"},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"HandleRange","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_HandleRange","t":8,"rt":$n[0].Single,"fg":"HandleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_HandleRange","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"HandleRange"},"fn":"HandleRange"},{"a":2,"n":"Horizontal","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Horizontal","t":8,"rt":$n[0].Single,"fg":"Horizontal","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Horizontal"},{"a":2,"n":"SnapX","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapX","t":8,"rt":$n[0].Boolean,"fg":"SnapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapX","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapX"},"fn":"SnapX"},{"a":2,"n":"SnapY","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_SnapY","t":8,"rt":$n[0].Boolean,"fg":"SnapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":2,"n":"set_SnapY","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"SnapY"},"fn":"SnapY"},{"a":2,"n":"Vertical","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_Vertical","t":8,"rt":$n[0].Single,"fg":"Vertical","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Vertical"},{"at":[new UnityEngine.Serialization.FormerlySerializedAsAttribute("handle"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_handle","t":4,"rt":$n[1].RectTransform,"sn":"_handle"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"axisOptions","t":4,"rt":AxisOptions,"sn":"axisOptions","box":function ($v) { return Bridge.box($v, AxisOptions, System.Enum.toStringFn(AxisOptions));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":3,"n":"background","t":4,"rt":$n[1].RectTransform,"sn":"background"},{"a":1,"n":"baseRect","t":4,"rt":$n[1].RectTransform,"sn":"baseRect"},{"a":1,"n":"cam","t":4,"rt":$n[1].Camera,"sn":"cam"},{"a":1,"n":"canvas","t":4,"rt":$n[1].Canvas,"sn":"canvas"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"deadZone","t":4,"rt":$n[0].Single,"sn":"deadZone","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"handleRange","t":4,"rt":$n[0].Single,"sn":"handleRange","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"input","t":4,"rt":$n[1].Vector2,"sn":"input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapX","t":4,"rt":$n[0].Boolean,"sn":"snapX","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"snapY","t":4,"rt":$n[0].Boolean,"sn":"snapY","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Joystick end.*/

    /*JoystickType start.*/
    $m("JoystickType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Dynamic","is":true,"t":4,"rt":JoystickType,"sn":"Dynamic","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Fixed","is":true,"t":4,"rt":JoystickType,"sn":"Fixed","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"a":2,"n":"Floating","is":true,"t":4,"rt":JoystickType,"sn":"Floating","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}}]}; }, $n);
    /*JoystickType end.*/

    /*VariableJoystick start.*/
    $m("VariableJoystick", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"HandleInput","t":8,"pi":[{"n":"magnitude","pt":$n[0].Single,"ps":0},{"n":"normalised","pt":$n[1].Vector2,"ps":1},{"n":"radius","pt":$n[1].Vector2,"ps":2},{"n":"cam","pt":$n[1].Camera,"ps":3}],"sn":"HandleInput","rt":$n[0].Void,"p":[$n[0].Single,$n[1].Vector2,$n[1].Vector2,$n[1].Camera]},{"ov":true,"a":2,"n":"OnPointerDown","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerDown","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"ov":true,"a":2,"n":"OnPointerUp","t":8,"pi":[{"n":"eventData","pt":$n[2].PointerEventData,"ps":0}],"sn":"OnPointerUp","rt":$n[0].Void,"p":[$n[2].PointerEventData]},{"a":2,"n":"SetMode","t":8,"pi":[{"n":"joystickType","pt":JoystickType,"ps":0}],"sn":"SetMode","rt":$n[0].Void,"p":[JoystickType]},{"ov":true,"a":3,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"UpdateFixedPosition","t":8,"sn":"UpdateFixedPosition","rt":$n[0].Void},{"a":2,"n":"MoveThreshold","t":16,"rt":$n[0].Single,"g":{"a":2,"n":"get_MoveThreshold","t":8,"rt":$n[0].Single,"fg":"MoveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"s":{"a":2,"n":"set_MoveThreshold","t":8,"p":[$n[0].Single],"rt":$n[0].Void,"fs":"MoveThreshold"},"fn":"MoveThreshold"},{"a":1,"n":"fixedPosition","t":4,"rt":$n[1].Vector2,"sn":"fixedPosition"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"joystickType","t":4,"rt":JoystickType,"sn":"joystickType","box":function ($v) { return Bridge.box($v, JoystickType, System.Enum.toStringFn(JoystickType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"moveThreshold","t":4,"rt":$n[0].Single,"sn":"moveThreshold","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*VariableJoystick end.*/

    /*_Project.Code.UI.CoinsCounterUpdater start.*/
    $m("_Project.Code.UI.CoinsCounterUpdater", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnCoinAdded","t":8,"pi":[{"n":"obj","pt":$n[3].Item,"ps":0}],"sn":"OnCoinAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"OnCoinRemoved","t":8,"pi":[{"n":"obj","pt":$n[3].Item,"ps":0}],"sn":"OnCoinRemoved","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"UpdateView","t":8,"sn":"UpdateView","rt":$n[0].Void},{"a":1,"n":"_counter","t":4,"rt":$n[0].Int32,"sn":"_counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[4].ItemInventory,"sn":"_inventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_text","t":4,"rt":$n[5].TMP_Text,"sn":"_text"}]}; }, $n);
    /*_Project.Code.UI.CoinsCounterUpdater end.*/

    /*_Project.Code.Tutorial.IBuyable start.*/
    $m("_Project.Code.Tutorial.IBuyable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Buy","t":8,"sn":"_Project$Code$Tutorial$IBuyable$Buy","rt":$n[0].Void},{"ab":true,"a":2,"n":"IsBought","t":16,"rt":$n[0].Boolean,"g":{"ab":true,"a":2,"n":"get_IsBought","t":8,"rt":$n[0].Boolean,"fg":"_Project$Code$Tutorial$IBuyable$IsBought","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"_Project$Code$Tutorial$IBuyable$IsBought"},{"a":1,"backing":true,"n":"<IsBought>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"_Project$Code$Tutorial$IBuyable$IsBought","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Tutorial.IBuyable end.*/

    /*_Project.Code.Tutorial.InfinitySignAnimation start.*/
    $m("_Project.Code.Tutorial.InfinitySignAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateInfinityLoop","t":8,"sn":"AnimateInfinityLoop","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_duration","t":4,"rt":$n[0].Single,"sn":"_duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_tweener","t":4,"rt":$n[6].Tweener,"sn":"_tweener"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_width","t":4,"rt":$n[0].Single,"sn":"_width","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Tutorial.InfinitySignAnimation end.*/

    /*_Project.Code.Tutorial.IStorage start.*/
    $m("_Project.Code.Tutorial.IStorage", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"ab":true,"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"_Project$Code$Tutorial$IStorage$IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"_Project$Code$Tutorial$IStorage$IsEmpty"},{"a":1,"backing":true,"n":"<IsEmpty>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"_Project$Code$Tutorial$IStorage$IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Tutorial.IStorage end.*/

    /*_Project.Code.Tutorial.IStorageFabric start.*/
    $m("_Project.Code.Tutorial.IStorageFabric", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"CreateNew","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"type","pt":$n[3].ItemType,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2}],"sn":"_Project$Code$Tutorial$IStorageFabric$CreateNew","rt":$n[7].IStorage,"p":[$n[1].Vector3,$n[3].ItemType,$n[0].Int32]}]}; }, $n);
    /*_Project.Code.Tutorial.IStorageFabric end.*/

    /*_Project.Code.Tutorial.StorageTrashView start.*/
    $m("_Project.Code.Tutorial.StorageTrashView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"collectable","pt":$n[3].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnRemoved","t":8,"pi":[{"n":"obj","pt":$n[3].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[3].Item]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[4].ItemInventory,"sn":"_inventory"}]}; }, $n);
    /*_Project.Code.Tutorial.StorageTrashView end.*/

    /*_Project.Code.Tutorial.TutorialArrow start.*/
    $m("_Project.Code.Tutorial.TutorialArrow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[1].Transform,$n[1].Transform,$n[1].Transform,$n[1].Transform],"pi":[{"n":"holder","pt":$n[1].Transform,"ps":0},{"n":"body","pt":$n[1].Transform,"ps":1},{"n":"point1","pt":$n[1].Transform,"ps":2},{"n":"point2","pt":$n[1].Transform,"ps":3}],"sn":"ctor"},{"a":2,"n":"EnterNextState","t":8,"sn":"EnterNextState","rt":$n[0].Void},{"a":1,"n":"_animation","t":4,"rt":$n[6].Tween,"sn":"_animation"},{"a":1,"n":"_body","t":4,"rt":$n[1].Transform,"sn":"_body","ro":true},{"a":1,"n":"_holder","t":4,"rt":$n[1].Transform,"sn":"_holder","ro":true},{"a":1,"n":"_point1","t":4,"rt":$n[1].Transform,"sn":"_point1","ro":true},{"a":1,"n":"_point2","t":4,"rt":$n[1].Transform,"sn":"_point2","ro":true},{"a":1,"n":"_state","t":4,"rt":$n[0].Int32,"sn":"_state","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Project.Code.Tutorial.TutorialArrow end.*/

    /*_Project.Code.Tutorial.WaitForJoystickMove start.*/
    $m("_Project.Code.Tutorial.WaitForJoystickMove", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Joystick,$n[0].Single],"pi":[{"n":"joystick","pt":Joystick,"ps":0},{"n":"threshold","dv":0.05,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick","ro":true},{"a":1,"n":"_threshold","t":4,"rt":$n[0].Single,"sn":"_threshold","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Tutorial.WaitForJoystickMove end.*/

    /*_Project.Code.Tutorial.WaitForJoystickStop start.*/
    $m("_Project.Code.Tutorial.WaitForJoystickStop", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Joystick,$n[0].Single],"pi":[{"n":"joystick","pt":Joystick,"ps":0},{"n":"threshold","dv":0.05,"o":true,"pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick","ro":true},{"a":1,"n":"_threshold","t":4,"rt":$n[0].Single,"sn":"_threshold","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Tutorial.WaitForJoystickStop end.*/

    /*_Project.Code.Services.ServiceLocator.L start.*/
    $m("_Project.Code.Services.ServiceLocator.L", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Init","is":true,"t":8,"pi":[{"n":"container","pt":$n[8].DIContainer,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[$n[8].DIContainer]},{"a":2,"n":"Reg","is":true,"t":8,"pi":[{"n":"creator","pt":Function,"ps":0}],"tpc":1,"tprm":["TService"],"sn":"Reg","rt":$n[8].DIContainer.Registration,"p":[Function]},{"a":2,"n":"Resolve","is":true,"t":8,"tpc":1,"tprm":["TService"],"sn":"Resolve","rt":System.Object},{"a":2,"n":"Container","is":true,"t":16,"rt":$n[8].DIContainer,"g":{"a":2,"n":"get_Container","t":8,"rt":$n[8].DIContainer,"fg":"Container","is":true},"s":{"a":2,"n":"set_Container","t":8,"p":[$n[8].DIContainer],"rt":$n[0].Void,"fs":"Container","is":true},"fn":"Container"},{"a":1,"n":"_container","is":true,"t":4,"rt":$n[8].DIContainer,"sn":"_container"}]}; }, $n);
    /*_Project.Code.Services.ServiceLocator.L end.*/

    /*_Project.Code.Services.ItemsCreation.Dropper start.*/
    $m("_Project.Code.Services.ItemsCreation.Dropper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].ItemsCreator],"pi":[{"n":"creator","pt":$n[9].ItemsCreator,"ps":0}],"sn":"ctor"},{"a":1,"n":"Animate","t":8,"pi":[{"n":"items","pt":$n[10].IEnumerable$1(_Project.Code.Core.Items.Item),"ps":0},{"n":"onCompleted","dv":null,"o":true,"pt":Function,"ps":1}],"sn":"Animate","rt":$n[0].Void,"p":[$n[10].IEnumerable$1(_Project.Code.Core.Items.Item),Function]},{"a":2,"n":"CreateDrop","t":8,"pi":[{"n":"type","pt":$n[3].ItemType,"ps":0},{"n":"position","pt":$n[1].Vector3,"ps":1},{"n":"count","dv":4,"o":true,"pt":$n[0].Int32,"ps":2}],"sn":"CreateDrop","rt":$n[0].Void,"p":[$n[3].ItemType,$n[1].Vector3,$n[0].Int32]},{"a":1,"n":"_creator","t":4,"rt":$n[9].ItemsCreator,"sn":"_creator","ro":true}]}; }, $n);
    /*_Project.Code.Services.ItemsCreation.Dropper end.*/

    /*_Project.Code.Services.ItemsCreation.ItemsCreator start.*/
    $m("_Project.Code.Services.ItemsCreation.ItemsCreator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[10].List$1(_Project.Code.Core.Items.Item)],"pi":[{"n":"prefabs","pt":$n[10].List$1(_Project.Code.Core.Items.Item),"ps":0}],"sn":"ctor"},{"a":2,"n":"Create","t":8,"pi":[{"n":"type","pt":$n[3].ItemType,"ps":0}],"sn":"Create","rt":$n[3].Item,"p":[$n[3].ItemType]},{"a":1,"n":"_prefabs","t":4,"rt":$n[10].List$1(_Project.Code.Core.Items.Item),"sn":"_prefabs"}]}; }, $n);
    /*_Project.Code.Services.ItemsCreation.ItemsCreator end.*/

    /*_Project.Code.Services.Input.IMoveInput start.*/
    $m("_Project.Code.Services.Input.IMoveInput", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"ab":true,"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"_Project$Code$Services$Input$IMoveInput$Direction"},"fn":"_Project$Code$Services$Input$IMoveInput$Direction"},{"a":1,"backing":true,"n":"<Direction>k__BackingField","t":4,"rt":$n[1].Vector2,"sn":"_Project$Code$Services$Input$IMoveInput$Direction"}]}; }, $n);
    /*_Project.Code.Services.Input.IMoveInput end.*/

    /*_Project.Code.Services.Input.KeyboardMoveInput start.*/
    $m("_Project.Code.Services.Input.KeyboardMoveInput", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"}]}; }, $n);
    /*_Project.Code.Services.Input.KeyboardMoveInput end.*/

    /*_Project.Code.Services.Input.MoveInput start.*/
    $m("_Project.Code.Services.Input.MoveInput", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Joystick],"pi":[{"n":"joystick","pt":Joystick,"ps":0}],"sn":"ctor"},{"a":1,"n":"GetDirection","t":8,"sn":"GetDirection","rt":$n[1].Vector2},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":2,"n":"Enabled","t":4,"rt":$n[0].Boolean,"sn":"Enabled","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick","ro":true},{"a":1,"n":"_keyboardMoveInput","t":4,"rt":$n[11].KeyboardMoveInput,"sn":"_keyboardMoveInput","ro":true}]}; }, $n);
    /*_Project.Code.Services.Input.MoveInput end.*/

    /*_Project.Code.Services.CoroutineRunner.CoroutineRunner start.*/
    $m("_Project.Code.Services.CoroutineRunner.CoroutineRunner", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Launch","t":8,"pi":[{"n":"coroutine","pt":$n[12].IEnumerator,"ps":0}],"sn":"Launch","rt":$n[0].Void,"p":[$n[12].IEnumerator]},{"a":2,"n":"Stop","t":8,"pi":[{"n":"coroutine","pt":$n[12].IEnumerator,"ps":0}],"sn":"Stop","rt":$n[0].Void,"p":[$n[12].IEnumerator]}]}; }, $n);
    /*_Project.Code.Services.CoroutineRunner.CoroutineRunner end.*/

    /*_Project.Code.Services.CoroutineRunner.ICoroutineRunner start.*/
    $m("_Project.Code.Services.CoroutineRunner.ICoroutineRunner", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Launch","t":8,"pi":[{"n":"coroutine","pt":$n[12].IEnumerator,"ps":0}],"sn":"_Project$Code$Services$CoroutineRunner$ICoroutineRunner$Launch","rt":$n[0].Void,"p":[$n[12].IEnumerator]},{"ab":true,"a":2,"n":"Stop","t":8,"pi":[{"n":"coroutine","pt":$n[12].IEnumerator,"ps":0}],"sn":"_Project$Code$Services$CoroutineRunner$ICoroutineRunner$Stop","rt":$n[0].Void,"p":[$n[12].IEnumerator]}]}; }, $n);
    /*_Project.Code.Services.CoroutineRunner.ICoroutineRunner end.*/

    /*_Project.Code.Selling.Customer start.*/
    $m("_Project.Code.Selling.Customer", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.SpriteRenderer)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"sprite","pt":$n[1].Sprite,"ps":0},{"n":"orderSize","pt":$n[0].Int32,"ps":1},{"n":"money","pt":$n[0].Int32,"ps":2}],"sn":"Init","rt":$n[0].Void,"p":[$n[1].Sprite,$n[0].Int32,$n[0].Int32]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"Money","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Money","t":8,"rt":$n[0].Int32,"fg":"Money","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_Money","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"Money"},"fn":"Money"},{"a":2,"n":"OrderSize","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_OrderSize","t":8,"rt":$n[0].Int32,"fg":"OrderSize","box":function ($v) { return Bridge.box($v, System.Int32);}},"s":{"a":1,"n":"set_OrderSize","t":8,"p":[$n[0].Int32],"rt":$n[0].Void,"fs":"OrderSize"},"fn":"OrderSize"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bubbleView","t":4,"rt":$n[13].BubbleView,"sn":"_bubbleView"},{"a":1,"n":"_spriteRenderer","t":4,"rt":$n[1].SpriteRenderer,"sn":"_spriteRenderer"},{"a":1,"backing":true,"n":"<Money>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"Money","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"backing":true,"n":"<OrderSize>k__BackingField","t":4,"rt":$n[0].Int32,"sn":"OrderSize","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Project.Code.Selling.Customer end.*/

    /*_Project.Code.Selling.ILine start.*/
    $m("_Project.Code.Selling.ILine", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"OnCustomerServed","t":8,"pi":[{"n":"customer","pt":$n[14].Customer,"ps":0}],"sn":"_Project$Code$Selling$ILine$OnCustomerServed","rt":$n[0].Void,"p":[$n[14].Customer]},{"ab":true,"a":2,"n":"TryGetCustomer","t":8,"pi":[{"n":"customer","out":true,"pt":$n[14].Customer,"ps":0}],"sn":"_Project$Code$Selling$ILine$TryGetCustomer","rt":$n[0].Boolean,"p":[$n[14].Customer],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Selling.ILine end.*/

    /*_Project.Code.Selling.Seller start.*/
    $m("_Project.Code.Selling.Seller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetPaid","t":8,"sn":"GetPaid","rt":$n[0].Void},{"a":1,"n":"OnServed","t":8,"sn":"OnServed","rt":$n[0].Void},{"a":1,"n":"Serve","t":8,"sn":"Serve","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_currentCustomer","t":4,"rt":$n[14].Customer,"sn":"_currentCustomer"},{"a":1,"n":"_line","t":4,"rt":$n[14].ILine,"sn":"_line"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_lineMb","t":4,"rt":$n[13].Line,"sn":"_lineMb"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moneyInventory","t":4,"rt":$n[4].ItemInventory,"sn":"_moneyInventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_moneyPrefab","t":4,"rt":$n[3].Item,"sn":"_moneyPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_productInventory","t":4,"rt":$n[4].ItemInventory,"sn":"_productInventory"}]}; }, $n);
    /*_Project.Code.Selling.Seller end.*/

    /*_Project.Code.Selling.Line.BubbleView start.*/
    $m("_Project.Code.Selling.Line.BubbleView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"SetText","t":8,"pi":[{"n":"text","pt":$n[0].String,"ps":0}],"sn":"SetText","rt":$n[0].Void,"p":[$n[0].String]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_body","t":4,"rt":$n[1].Transform,"sn":"_body"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_text","t":4,"rt":$n[5].TMP_Text,"sn":"_text"}]}; }, $n);
    /*_Project.Code.Selling.Line.BubbleView end.*/

    /*_Project.Code.Selling.Line.CustomerAppearanceAnimation start.*/
    $m("_Project.Code.Selling.Line.CustomerAppearanceAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_body","t":4,"rt":$n[1].Transform,"sn":"_body"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_bubble","t":4,"rt":$n[1].Transform,"sn":"_bubble"},{"a":1,"n":"_startBodyScale","t":4,"rt":$n[1].Vector3,"sn":"_startBodyScale"},{"a":1,"n":"_startBubbleScale","t":4,"rt":$n[1].Vector3,"sn":"_startBubbleScale"}]}; }, $n);
    /*_Project.Code.Selling.Line.CustomerAppearanceAnimation end.*/

    /*_Project.Code.Selling.Line.Line start.*/
    $m("_Project.Code.Selling.Line.Line", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CreateNewCustomer","t":8,"pi":[{"n":"i","pt":$n[0].Int32,"ps":0}],"sn":"CreateNewCustomer","rt":$n[14].Customer,"p":[$n[0].Int32]},{"a":1,"n":"CreatingCustomers","t":8,"sn":"CreatingCustomers","rt":$n[12].IEnumerator},{"a":1,"n":"Init","t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"MoveCustomers","t":8,"pi":[{"n":"onFinished","dv":null,"o":true,"pt":Function,"ps":0}],"sn":"MoveCustomers","rt":$n[0].Void,"p":[Function]},{"a":2,"n":"OnCustomerServed","t":8,"pi":[{"n":"customer","pt":$n[14].Customer,"ps":0}],"sn":"OnCustomerServed","rt":$n[0].Void,"p":[$n[14].Customer]},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"RequestCreation","t":8,"sn":"RequestCreation","rt":$n[0].Void},{"a":1,"n":"RequestCreation","t":8,"pi":[{"n":"count","pt":$n[0].Int32,"ps":0}],"sn":"RequestCreation$1","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"TryGetCustomer","t":8,"pi":[{"n":"customer","out":true,"pt":$n[14].Customer,"ps":0}],"sn":"TryGetCustomer","rt":$n[0].Boolean,"p":[$n[14].Customer],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_customerPrefab","t":4,"rt":$n[14].Customer,"sn":"_customerPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_customerSprites","t":4,"rt":$n[10].List$1(UnityEngine.Sprite),"sn":"_customerSprites"},{"a":1,"n":"_customers","t":4,"rt":$n[10].Queue$1(_Project.Code.Selling.Customer),"sn":"_customers"},{"a":1,"n":"_reservedCount","t":4,"rt":$n[0].Int32,"sn":"_reservedCount","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spawnPoints","t":4,"rt":$n[10].List$1(UnityEngine.Transform),"sn":"_spawnPoints"},{"a":1,"n":"_spawnRequests","t":4,"rt":$n[0].Int32,"sn":"_spawnRequests","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Project.Code.Selling.Line.Line end.*/

    /*_Project.Code.Entry.Entry start.*/
    $m("_Project.Code.Entry.Entry", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(_Project.Code.Services.CoroutineRunner.CoroutineRunner)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick"}]}; }, $n);
    /*_Project.Code.Entry.Entry end.*/

    /*_Project.Code.Entry.EntryPoint start.*/
    $m("_Project.Code.Entry.EntryPoint", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(_Project.Code.Services.CoroutineRunner.CoroutineRunner)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"GetFields","t":8,"sn":"GetFields","rt":$n[10].List$1(_Project.Code.Core.Harvesting.Field)},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"_coroutineRunner","t":4,"rt":$n[15].CoroutineRunner,"sn":"_coroutineRunner"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemPrefabs","t":4,"rt":$n[10].List$1(_Project.Code.Core.Items.Item),"sn":"_itemPrefabs"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_joystick","t":4,"rt":Joystick,"sn":"_joystick"}]}; }, $n);
    /*_Project.Code.Entry.EntryPoint end.*/

    /*_Project.Code.Entry.IEnable start.*/
    $m("_Project.Code.Entry.IEnable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Disable","t":8,"sn":"_Project$Code$Entry$IEnable$Disable","rt":$n[0].Void},{"ab":true,"a":2,"n":"Enable","t":8,"sn":"_Project$Code$Entry$IEnable$Enable","rt":$n[0].Void}]}; }, $n);
    /*_Project.Code.Entry.IEnable end.*/

    /*_Project.Code.Entry.IFiniteState start.*/
    $m("_Project.Code.Entry.IFiniteState", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Enter","t":8,"pi":[{"n":"onFinished","dv":null,"o":true,"pt":Function,"ps":0}],"sn":"_Project$Code$Entry$IFiniteState$Enter","rt":$n[0].Void,"p":[Function]}]}; }, $n);
    /*_Project.Code.Entry.IFiniteState end.*/

    /*_Project.Code.Entry.StorageFabric start.*/
    $m("_Project.Code.Entry.StorageFabric", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CreateNew","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0},{"n":"type","pt":$n[3].ItemType,"ps":1},{"n":"count","pt":$n[0].Int32,"ps":2}],"sn":"CreateNew","rt":$n[7].IStorage,"p":[$n[1].Vector3,$n[3].ItemType,$n[0].Int32]},{"a":2,"n":"Instantiate","t":8,"pi":[{"n":"type","pt":$n[3].ItemType,"ps":0}],"sn":"Instantiate","rt":$n[3].Item,"p":[$n[3].ItemType]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_coinPrefab","t":4,"rt":$n[3].Item,"sn":"_coinPrefab"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventoryPrefab","t":4,"rt":$n[4].ItemInventory,"sn":"_inventoryPrefab"}]}; }, $n);
    /*_Project.Code.Entry.StorageFabric end.*/

    /*_Project.Code.Entry.TweenEnable start.*/
    $m("_Project.Code.Entry.TweenEnable", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"a":2,"n":"Disable","t":8,"sn":"Disable","rt":$n[0].Void},{"a":2,"n":"Enable","t":8,"sn":"Enable","rt":$n[0].Void},{"a":1,"n":"_tween","t":4,"rt":$n[6].Tween,"sn":"_tween","ro":true}]}; }, $n);
    /*_Project.Code.Entry.TweenEnable end.*/

    /*_Project.Code.Core.Workers.WorkersAnimation start.*/
    $m("_Project.Code.Core.Workers.WorkersAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateField","t":8,"sn":"AnimateField","rt":$n[12].IEnumerator},{"a":1,"n":"AnimateWorker","t":8,"sn":"AnimateWorker","rt":$n[12].IEnumerator},{"a":1,"n":"AnimateWorkerBreath","t":8,"sn":"AnimateWorkerBreath","rt":$n[12].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.Serialization.FormerlySerializedAsAttribute("_offset"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_durationOffset","t":4,"rt":$n[0].Single,"sn":"_durationOffset","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.Serialization.FormerlySerializedAsAttribute("_workerOffset"),new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_endPointOffset","t":4,"rt":$n[1].Vector3,"sn":"_endPointOffset"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_plants","t":4,"rt":System.Array.type(UnityEngine.Transform),"sn":"_plants"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_worker","t":4,"rt":$n[1].Transform,"sn":"_worker"}]}; }, $n);
    /*_Project.Code.Core.Workers.WorkersAnimation end.*/

    /*_Project.Code.Core.PopcornFarm.CornFarm start.*/
    $m("_Project.Code.Core.PopcornFarm.CornFarm", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"AnimateCircle","t":8,"pi":[{"n":"onFinished","dv":null,"o":true,"pt":Function,"ps":0}],"sn":"AnimateCircle","rt":$n[12].IEnumerator,"p":[Function]},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"obj","pt":$n[3].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ProduceCorn","t":8,"sn":"ProduceCorn","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"_count","t":4,"rt":$n[0].Int32,"sn":"_count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fillImage","t":4,"rt":$n[16].Image,"sn":"_fillImage"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_final","t":4,"rt":$n[4].ItemInventory,"sn":"_final"},{"a":1,"n":"_isWorking","t":4,"rt":$n[0].Boolean,"sn":"_isWorking","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemsCreator","t":4,"rt":$n[9].ItemsCreator,"sn":"_itemsCreator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_resource","t":4,"rt":$n[4].ItemInventory,"sn":"_resource"}]}; }, $n);
    /*_Project.Code.Core.PopcornFarm.CornFarm end.*/

    /*_Project.Code.Core.Items.InventoryInitializer start.*/
    $m("_Project.Code.Core.Items.InventoryInitializer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_count","t":4,"rt":$n[0].Int32,"sn":"_count","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[4].ItemInventory,"sn":"_inventory"},{"a":1,"n":"_itemsCreator","t":4,"rt":$n[9].ItemsCreator,"sn":"_itemsCreator"}]}; }, $n);
    /*_Project.Code.Core.Items.InventoryInitializer end.*/

    /*_Project.Code.Core.Items.Item start.*/
    $m("_Project.Code.Core.Items.Item", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"Type","t":16,"rt":$n[3].ItemType,"g":{"a":2,"n":"get_Type","t":8,"rt":$n[3].ItemType,"fg":"Type","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},"fn":"Type"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_collider","t":4,"rt":$n[1].Collider2D,"sn":"_collider"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_type","t":4,"rt":$n[3].ItemType,"sn":"_type","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}}]}; }, $n);
    /*_Project.Code.Core.Items.Item end.*/

    /*_Project.Code.Core.Items.ItemType start.*/
    $m("_Project.Code.Core.Items.ItemType", function () { return {"att":8449,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Coin","is":true,"t":4,"rt":$n[3].ItemType,"sn":"Coin","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},{"a":2,"n":"Corn","is":true,"t":4,"rt":$n[3].ItemType,"sn":"Corn","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[3].ItemType,"sn":"None","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},{"a":2,"n":"Popcorn","is":true,"t":4,"rt":$n[3].ItemType,"sn":"Popcorn","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}}]}; }, $n);
    /*_Project.Code.Core.Items.ItemType end.*/

    /*_Project.Code.Core.Items.Transfering.InventoryTransferer start.*/
    $m("_Project.Code.Core.Items.Transfering.InventoryTransferer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[15].ICoroutineRunner],"pi":[{"n":"coroutineRunner","pt":$n[15].ICoroutineRunner,"ps":0}],"sn":"ctor"},{"a":1,"n":"CanTransfer","t":8,"pi":[{"n":"from","pt":$n[4].ItemInventory,"ps":0},{"n":"to","pt":$n[4].ItemInventory,"ps":1}],"sn":"CanTransfer","rt":$n[0].Boolean,"p":[$n[4].ItemInventory,$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Disconnect","t":8,"sn":"Disconnect","rt":$n[0].Void},{"a":2,"n":"HasConnectionFor","t":8,"pi":[{"n":"inventory","pt":$n[4].ItemInventory,"ps":0}],"sn":"HasConnectionFor","rt":$n[0].Boolean,"p":[$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"OnConnected","t":8,"sn":"OnConnected","rt":$n[0].Void},{"a":1,"n":"OnDisconnected","t":8,"sn":"OnDisconnected","rt":$n[0].Void},{"a":1,"n":"TransferingAll","t":8,"pi":[{"n":"from","pt":$n[4].ItemInventory,"ps":0},{"n":"to","pt":$n[4].ItemInventory,"ps":1}],"sn":"TransferingAll","rt":$n[12].IEnumerator,"p":[$n[4].ItemInventory,$n[4].ItemInventory]},{"a":2,"n":"TrySetConnection","t":8,"pi":[{"n":"storage1","pt":$n[4].ItemInventory,"ps":0},{"n":"storage2","pt":$n[4].ItemInventory,"ps":1}],"sn":"TrySetConnection","rt":$n[0].Boolean,"p":[$n[4].ItemInventory,$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"Connection","t":16,"rt":$n[17].Transfer,"g":{"a":1,"n":"get_Connection","t":8,"rt":$n[17].Transfer,"fg":"Connection"},"s":{"a":1,"n":"set_Connection","t":8,"p":[$n[17].Transfer],"rt":$n[0].Void,"fs":"Connection"},"fn":"Connection"},{"a":1,"n":"HasConnection","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_HasConnection","t":8,"rt":$n[0].Boolean,"fg":"HasConnection","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"HasConnection"},{"a":1,"n":"_connection","t":4,"rt":$n[17].Transfer,"sn":"_connection"},{"a":1,"n":"_coroutineRunner","t":4,"rt":$n[15].ICoroutineRunner,"sn":"_coroutineRunner","ro":true},{"a":1,"n":"_transferFactory","t":4,"rt":$n[17].TransferFactory,"sn":"_transferFactory","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Transfering.InventoryTransferer end.*/

    /*_Project.Code.Core.Items.Transfering.ItemTransferer start.*/
    $m("_Project.Code.Core.Items.Transfering.ItemTransferer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CanTransfer","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0},{"n":"inventory","pt":$n[4].ItemInventory,"ps":1}],"sn":"CanTransfer","rt":$n[0].Boolean,"p":[$n[3].Item,$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"GetReservedCount","t":8,"pi":[{"n":"inventory","pt":$n[4].ItemInventory,"ps":0}],"sn":"GetReservedCount","rt":$n[0].Int32,"p":[$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"Transfer","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0},{"n":"to","pt":$n[4].ItemInventory,"ps":1}],"sn":"Transfer","rt":$n[0].Void,"p":[$n[3].Item,$n[4].ItemInventory]},{"a":2,"n":"TryTransfer","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0},{"n":"inventory","pt":$n[4].ItemInventory,"ps":1}],"sn":"TryTransfer","rt":$n[0].Boolean,"p":[$n[3].Item,$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_reservations","t":4,"rt":$n[10].Dictionary$2(_Project.Code.Core.Items.Inventory.ItemInventory,System.Int32),"sn":"_reservations","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Transfering.ItemTransferer end.*/

    /*_Project.Code.Core.Items.Transfering.Transfer start.*/
    $m("_Project.Code.Core.Items.Transfering.Transfer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[4].ItemInventory,$n[4].ItemInventory],"pi":[{"n":"sender","pt":$n[4].ItemInventory,"ps":0},{"n":"receiver","pt":$n[4].ItemInventory,"ps":1}],"sn":"ctor"},{"a":2,"n":"Receiver","t":16,"rt":$n[4].ItemInventory,"g":{"a":2,"n":"get_Receiver","t":8,"rt":$n[4].ItemInventory,"fg":"Receiver"},"fn":"Receiver"},{"a":2,"n":"Sender","t":16,"rt":$n[4].ItemInventory,"g":{"a":2,"n":"get_Sender","t":8,"rt":$n[4].ItemInventory,"fg":"Sender"},"fn":"Sender"},{"a":1,"backing":true,"n":"<Receiver>k__BackingField","t":4,"rt":$n[4].ItemInventory,"sn":"Receiver"},{"a":1,"backing":true,"n":"<Sender>k__BackingField","t":4,"rt":$n[4].ItemInventory,"sn":"Sender"}]}; }, $n);
    /*_Project.Code.Core.Items.Transfering.Transfer end.*/

    /*_Project.Code.Core.Items.Transfering.TransferFactory start.*/
    $m("_Project.Code.Core.Items.Transfering.TransferFactory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CanGet","t":8,"pi":[{"n":"itemInventory","pt":$n[4].ItemInventory,"ps":0}],"sn":"CanGet","rt":$n[0].Boolean,"p":[$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CanGive","t":8,"pi":[{"n":"itemInventory","pt":$n[4].ItemInventory,"ps":0}],"sn":"CanGive","rt":$n[0].Boolean,"p":[$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"DoItemTypesMatch","t":8,"pi":[{"n":"storage1","pt":$n[4].ItemInventory,"ps":0},{"n":"storage2","pt":$n[4].ItemInventory,"ps":1}],"sn":"DoItemTypesMatch","rt":$n[0].Boolean,"p":[$n[4].ItemInventory,$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryCreate","t":8,"pi":[{"n":"storage1","pt":$n[4].ItemInventory,"ps":0},{"n":"storage2","pt":$n[4].ItemInventory,"ps":1},{"n":"connection","out":true,"pt":$n[17].Transfer,"ps":2}],"sn":"TryCreate","rt":$n[0].Boolean,"p":[$n[4].ItemInventory,$n[4].ItemInventory,$n[17].Transfer],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*_Project.Code.Core.Items.Transfering.TransferFactory end.*/

    /*_Project.Code.Core.Items.Inventory.BaseInventoryView start.*/
    $m("_Project.Code.Core.Items.Inventory.BaseInventoryView", function () { return {"att":1048705,"a":2,"m":[{"a":3,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ab":true,"a":3,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"ab":true,"a":3,"n":"OnRemoved","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[3].Item]},{"a":3,"n":"ItemsCount","t":16,"rt":$n[0].Int32,"g":{"a":3,"n":"get_ItemsCount","t":8,"rt":$n[0].Int32,"fg":"ItemsCount","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"ItemsCount"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[4].ItemInventory,"sn":"_inventory"}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.BaseInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.ColumnInventoryView start.*/
    $m("_Project.Code.Core.Items.Inventory.ColumnInventoryView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"ov":true,"a":3,"n":"OnRemoved","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"Height","t":16,"rt":$n[0].Single,"g":{"a":1,"n":"get_Height","t":8,"rt":$n[0].Single,"fg":"Height","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},"fn":"Height"},{"a":1,"n":"_columnIndex","t":4,"rt":$n[0].Int32,"sn":"_columnIndex","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_columnPoints","t":4,"rt":$n[10].List$1(UnityEngine.Transform),"sn":"_columnPoints"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_destroyOnEmptied","t":4,"rt":$n[0].Boolean,"sn":"_destroyOnEmptied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_rowIndex","t":4,"rt":$n[0].Int32,"sn":"_rowIndex","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.ColumnInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.InventoryProvider start.*/
    $m("_Project.Code.Core.Items.Inventory.InventoryProvider", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[10].List$1(_Project.Code.Core.Items.Inventory.ItemInventory)],"pi":[{"n":"storages","pt":$n[10].List$1(_Project.Code.Core.Items.Inventory.ItemInventory),"ps":0}],"sn":"ctor"},{"a":2,"n":"HasStorage","t":8,"pi":[{"n":"type","pt":$n[3].ItemType,"ps":0}],"sn":"HasStorage","rt":$n[0].Boolean,"p":[$n[3].ItemType],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"TryGetStorage","t":8,"pi":[{"n":"type","pt":$n[3].ItemType,"ps":0},{"n":"inventory","out":true,"pt":$n[4].ItemInventory,"ps":1}],"sn":"TryGetStorage","rt":$n[0].Boolean,"p":[$n[3].ItemType,$n[4].ItemInventory],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_storages","t":4,"rt":$n[10].List$1(_Project.Code.Core.Items.Inventory.ItemInventory),"sn":"_storages","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.InventoryProvider end.*/

    /*_Project.Code.Core.Items.Inventory.InventoryType start.*/
    $m("_Project.Code.Core.Items.Inventory.InventoryType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Both","is":true,"t":4,"rt":$n[4].InventoryType,"sn":"Both","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[4].InventoryType,"sn":"None","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},{"a":2,"n":"Receiver","is":true,"t":4,"rt":$n[4].InventoryType,"sn":"Receiver","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},{"a":2,"n":"Sender","is":true,"t":4,"rt":$n[4].InventoryType,"sn":"Sender","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.InventoryType end.*/

    /*_Project.Code.Core.Items.Inventory.ItemInventory start.*/
    $m("_Project.Code.Core.Items.Inventory.ItemInventory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Add","t":8,"pi":[{"n":"collectable","pt":$n[3].Item,"ps":0}],"sn":"Add","rt":$n[0].Void,"p":[$n[3].Item]},{"a":2,"n":"CanAdd","t":8,"sn":"CanAdd","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CanGet","t":8,"sn":"CanGet","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Get","t":8,"sn":"Get","rt":$n[3].Item},{"a":2,"n":"SetCapacity","t":8,"pi":[{"n":"capacity","pt":$n[0].Int32,"ps":0}],"sn":"SetCapacity","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":2,"n":"SetOperation","t":8,"pi":[{"n":"type","pt":$n[4].InventoryType,"ps":0}],"sn":"SetOperation","rt":$n[0].Void,"p":[$n[4].InventoryType]},{"a":2,"n":"SetType","t":8,"pi":[{"n":"type","pt":$n[3].ItemType,"ps":0}],"sn":"SetType","rt":$n[0].Void,"p":[$n[3].ItemType]},{"a":2,"n":"TryGet","t":8,"pi":[{"n":"collectable","out":true,"pt":$n[3].Item,"ps":0}],"sn":"TryGet","rt":$n[0].Boolean,"p":[$n[3].Item],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"Capacity","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Capacity","t":8,"rt":$n[0].Int32,"fg":"Capacity","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Capacity"},{"a":2,"n":"Count","t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_Count","t":8,"rt":$n[0].Int32,"fg":"Count","box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"Count"},{"a":2,"n":"InventoryType","t":16,"rt":$n[4].InventoryType,"g":{"a":2,"n":"get_InventoryType","t":8,"rt":$n[4].InventoryType,"fg":"InventoryType","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},"fn":"InventoryType"},{"a":2,"n":"IsEmpty","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsEmpty","t":8,"rt":$n[0].Boolean,"fg":"IsEmpty","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsEmpty"},{"a":2,"n":"ItemType","t":16,"rt":$n[3].ItemType,"g":{"a":2,"n":"get_ItemType","t":8,"rt":$n[3].ItemType,"fg":"ItemType","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},"fn":"ItemType"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_capacity","t":4,"rt":$n[0].Int32,"sn":"_capacity","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_collectables","t":4,"rt":$n[10].Stack$1(_Project.Code.Core.Items.Item),"sn":"_collectables"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[4].InventoryType,"sn":"_inventory","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.Inventory.InventoryType, System.Enum.toStringFn(_Project.Code.Core.Items.Inventory.InventoryType));}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_type","t":4,"rt":$n[3].ItemType,"sn":"_type","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Items.ItemType, System.Enum.toStringFn(_Project.Code.Core.Items.ItemType));}},{"a":2,"n":"Added","t":2,"ad":{"a":2,"n":"add_Added","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addAdded","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Added","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeAdded","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"Removed","t":2,"ad":{"a":2,"n":"add_Removed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addRemoved","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Removed","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeRemoved","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.ItemInventory end.*/

    /*_Project.Code.Core.Items.Inventory.StackInventoryView start.*/
    $m("_Project.Code.Core.Items.Inventory.StackInventoryView", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"OnRemoved","t":8,"pi":[{"n":"obj","pt":$n[3].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[3].Item]},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_attachTo","t":4,"rt":$n[1].Transform,"sn":"_attachTo"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_destroyOnEmptied","t":4,"rt":$n[0].Boolean,"sn":"_destroyOnEmptied","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemInventory","t":4,"rt":$n[4].ItemInventory,"sn":"_itemInventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_spacing","t":4,"rt":$n[0].Single,"sn":"_spacing","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.StackInventoryView end.*/

    /*_Project.Code.Core.Items.Inventory.TableStorageUpdater start.*/
    $m("_Project.Code.Core.Items.Inventory.TableStorageUpdater", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"obj","pt":$n[3].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":1,"n":"ShowCustomers","t":8,"sn":"ShowCustomers","rt":$n[12].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_buyZone","t":4,"rt":$n[1].GameObject,"sn":"_buyZone"},{"a":1,"n":"_counter","t":4,"rt":$n[0].Int32,"sn":"_counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_customers","t":4,"rt":$n[10].List$1(UnityEngine.GameObject),"sn":"_customers"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemInventory","t":4,"rt":$n[4].ItemInventory,"sn":"_itemInventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_price","t":4,"rt":$n[0].Int32,"sn":"_price","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_table","t":4,"rt":$n[1].GameObject,"sn":"_table"}]}; }, $n);
    /*_Project.Code.Core.Items.Inventory.TableStorageUpdater end.*/

    /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler start.*/
    $m("_Project.Code.Core.Items.Handlers.InventoryCollisionHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[18].ICollisionDetector,$n[4].InventoryProvider,$n[17].InventoryTransferer],"pi":[{"n":"detector","pt":$n[18].ICollisionDetector,"ps":0},{"n":"provider","pt":$n[4].InventoryProvider,"ps":1},{"n":"inventoryTransferer","pt":$n[17].InventoryTransferer,"ps":2}],"sn":"ctor"},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":1,"n":"OnTriggered","t":8,"pi":[{"n":"obj","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[18].CollisionType,"ps":1}],"sn":"OnTriggered","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[18].CollisionType]},{"a":1,"n":"_detector","t":4,"rt":$n[18].ICollisionDetector,"sn":"_detector","ro":true},{"a":1,"n":"_inventoryTransferer","t":4,"rt":$n[17].InventoryTransferer,"sn":"_inventoryTransferer","ro":true},{"a":1,"n":"_provider","t":4,"rt":$n[4].InventoryProvider,"sn":"_provider","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Handlers.InventoryCollisionHandler end.*/

    /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler start.*/
    $m("_Project.Code.Core.Items.Handlers.ItemCollisionHandler", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[18].ICollisionDetector,$n[4].InventoryProvider,$n[17].ItemTransferer],"pi":[{"n":"detector","pt":$n[18].ICollisionDetector,"ps":0},{"n":"provider","pt":$n[4].InventoryProvider,"ps":1},{"n":"transferer","pt":$n[17].ItemTransferer,"ps":2}],"sn":"ctor"},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":1,"n":"OnTriggered","t":8,"pi":[{"n":"obj","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[18].CollisionType,"ps":1}],"sn":"OnTriggered","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[18].CollisionType]},{"a":1,"n":"_detector","t":4,"rt":$n[18].ICollisionDetector,"sn":"_detector","ro":true},{"a":1,"n":"_provider","t":4,"rt":$n[4].InventoryProvider,"sn":"_provider","ro":true},{"a":1,"n":"_transferer","t":4,"rt":$n[17].ItemTransferer,"sn":"_transferer","ro":true}]}; }, $n);
    /*_Project.Code.Core.Items.Handlers.ItemCollisionHandler end.*/

    /*_Project.Code.Core.Harvesting.Field start.*/
    $m("_Project.Code.Core.Harvesting.Field", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Abort","t":8,"sn":"Abort","rt":$n[0].Void},{"a":2,"n":"Harvest","t":8,"sn":"Harvest","rt":$n[0].Void},{"a":1,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"a":1,"n":"SetState","t":8,"pi":[{"n":"state","pt":$n[19].FieldState,"ps":0}],"sn":"SetState","rt":$n[0].Void,"p":[$n[19].FieldState]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"CanHarvest","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_CanHarvest","t":8,"rt":$n[0].Boolean,"fg":"CanHarvest","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"CanHarvest"},{"a":1,"n":"IsAbortive","is":true,"t":4,"rt":$n[0].Boolean,"sn":"IsAbortive","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"_defaultScale","t":4,"rt":$n[1].Vector3,"sn":"_defaultScale"},{"a":1,"n":"_growingTween","t":4,"rt":$n[6].Tween,"sn":"_growingTween"},{"a":1,"n":"_harvestedTween","t":4,"rt":$n[6].Tween,"sn":"_harvestedTween"},{"a":1,"n":"_harvestingTween","t":4,"rt":$n[6].Tween,"sn":"_harvestingTween"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_plant","t":4,"rt":$n[1].Transform,"sn":"_plant"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_state","t":4,"rt":$n[19].FieldState,"sn":"_state","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}},{"a":2,"n":"Harvested","t":2,"ad":{"a":2,"n":"add_Harvested","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addHarvested","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Harvested","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeHarvested","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Harvesting.Field end.*/

    /*_Project.Code.Core.Harvesting.FieldsDropper start.*/
    $m("_Project.Code.Core.Harvesting.FieldsDropper", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[9].Dropper,$n[10].List$1(_Project.Code.Core.Harvesting.Field)],"pi":[{"n":"dropper","pt":$n[9].Dropper,"ps":0},{"n":"fields","pt":$n[10].List$1(_Project.Code.Core.Harvesting.Field),"ps":1}],"sn":"ctor"},{"a":1,"n":"OnHarvested","t":8,"pi":[{"n":"position","pt":$n[1].Vector3,"ps":0}],"sn":"OnHarvested","rt":$n[0].Void,"p":[$n[1].Vector3]},{"a":1,"n":"_dropper","t":4,"rt":$n[9].Dropper,"sn":"_dropper","ro":true}]}; }, $n);
    /*_Project.Code.Core.Harvesting.FieldsDropper end.*/

    /*_Project.Code.Core.Harvesting.FieldState start.*/
    $m("_Project.Code.Core.Harvesting.FieldState", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Growing","is":true,"t":4,"rt":$n[19].FieldState,"sn":"Growing","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}},{"a":2,"n":"Grown","is":true,"t":4,"rt":$n[19].FieldState,"sn":"Grown","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}},{"a":2,"n":"Harvesting","is":true,"t":4,"rt":$n[19].FieldState,"sn":"Harvesting","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}},{"a":2,"n":"None","is":true,"t":4,"rt":$n[19].FieldState,"sn":"None","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Harvesting.FieldState, System.Enum.toStringFn(_Project.Code.Core.Harvesting.FieldState));}}]}; }, $n);
    /*_Project.Code.Core.Harvesting.FieldState end.*/

    /*_Project.Code.Core.Harvesting.Harvester start.*/
    $m("_Project.Code.Core.Harvesting.Harvester", function () { return {"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[18].ICollisionDetector],"pi":[{"n":"detector","pt":$n[18].ICollisionDetector,"ps":0}],"sn":"ctor"},{"a":1,"n":"Cleanup","t":8,"sn":"Cleanup","rt":$n[0].Void},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":1,"n":"OnTriggered","t":8,"pi":[{"n":"collider","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[18].CollisionType,"ps":1}],"sn":"OnTriggered","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[18].CollisionType]},{"a":1,"n":"IsHarvesting","t":16,"rt":$n[0].Boolean,"g":{"a":1,"n":"get_IsHarvesting","t":8,"rt":$n[0].Boolean,"fg":"IsHarvesting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsHarvesting"},{"a":1,"n":"_detector","t":4,"rt":$n[18].ICollisionDetector,"sn":"_detector","ro":true},{"a":1,"n":"_harvestingField","t":4,"rt":$n[19].Field,"sn":"_harvestingField"}]}; }, $n);
    /*_Project.Code.Core.Harvesting.Harvester end.*/

    /*_Project.Code.Core.Collision.CollisionDetector start.*/
    $m("_Project.Code.Core.Collision.CollisionDetector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Handle","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[18].CollisionType,"ps":1}],"sn":"Handle","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[18].CollisionType]},{"a":1,"n":"OnTriggerEnter2D","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerEnter2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"OnTriggerExit2D","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerExit2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":1,"n":"OnTriggerStay2D","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0}],"sn":"OnTriggerStay2D","rt":$n[0].Void,"p":[$n[1].Collider2D]},{"a":2,"n":"TriggerEnter","t":2,"ad":{"a":2,"n":"add_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerEnter","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerEnter","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"TriggerExit","t":2,"ad":{"a":2,"n":"add_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerExit","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerExit","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"TriggerStay","t":2,"ad":{"a":2,"n":"add_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerStay","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerStay","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"Triggered","t":2,"ad":{"a":2,"n":"add_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggered","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggered","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Collision.CollisionDetector end.*/

    /*_Project.Code.Core.Collision.CollisionType start.*/
    $m("_Project.Code.Core.Collision.CollisionType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Enter","is":true,"t":4,"rt":$n[18].CollisionType,"sn":"Enter","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Collision.CollisionType, System.Enum.toStringFn(_Project.Code.Core.Collision.CollisionType));}},{"a":2,"n":"Exit","is":true,"t":4,"rt":$n[18].CollisionType,"sn":"Exit","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Collision.CollisionType, System.Enum.toStringFn(_Project.Code.Core.Collision.CollisionType));}},{"a":2,"n":"Stay","is":true,"t":4,"rt":$n[18].CollisionType,"sn":"Stay","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Collision.CollisionType, System.Enum.toStringFn(_Project.Code.Core.Collision.CollisionType));}}]}; }, $n);
    /*_Project.Code.Core.Collision.CollisionType end.*/

    /*_Project.Code.Core.Collision.ICollisionDetector start.*/
    $m("_Project.Code.Core.Collision.ICollisionDetector", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"TriggerEnter","t":2,"ad":{"ab":true,"a":2,"n":"add_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$addTriggerEnter","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$removeTriggerEnter","rt":$n[0].Void,"p":[Function]}},{"ab":true,"a":2,"n":"TriggerExit","t":2,"ad":{"ab":true,"a":2,"n":"add_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$addTriggerExit","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$removeTriggerExit","rt":$n[0].Void,"p":[Function]}},{"ab":true,"a":2,"n":"TriggerStay","t":2,"ad":{"ab":true,"a":2,"n":"add_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$addTriggerStay","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$removeTriggerStay","rt":$n[0].Void,"p":[Function]}},{"ab":true,"a":2,"n":"Triggered","t":2,"ad":{"ab":true,"a":2,"n":"add_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$addTriggered","rt":$n[0].Void,"p":[Function]},"r":{"ab":true,"a":2,"n":"remove_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"_Project$Code$Core$Collision$ICollisionDetector$removeTriggered","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Collision.ICollisionDetector end.*/

    /*_Project.Code.Core.Collision.OverlapCollisionDetector start.*/
    $m("_Project.Code.Core.Collision.OverlapCollisionDetector", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"DetectCollisions","t":8,"sn":"DetectCollisions","rt":$n[0].Void},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":1,"n":"Handle","t":8,"pi":[{"n":"other","pt":$n[1].Collider2D,"ps":0},{"n":"type","pt":$n[18].CollisionType,"ps":1}],"sn":"Handle","rt":$n[0].Void,"p":[$n[1].Collider2D,$n[18].CollisionType]},{"a":1,"n":"OnDrawGizmos","t":8,"sn":"OnDrawGizmos","rt":$n[0].Void},{"a":1,"n":"_currentColliders","t":4,"rt":System.Array.type(UnityEngine.Collider2D),"sn":"_currentColliders"},{"a":1,"n":"_previousColliders","t":4,"rt":System.Array.type(UnityEngine.Collider2D),"sn":"_previousColliders"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"collisionMask","t":4,"rt":$n[1].LayerMask,"sn":"collisionMask"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"detectionRadius","t":4,"rt":$n[0].Single,"sn":"detectionRadius","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"TriggerEnter","t":2,"ad":{"a":2,"n":"add_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerEnter","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerEnter","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerEnter","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"TriggerExit","t":2,"ad":{"a":2,"n":"add_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerExit","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerExit","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerExit","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"TriggerStay","t":2,"ad":{"a":2,"n":"add_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggerStay","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_TriggerStay","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggerStay","rt":$n[0].Void,"p":[Function]}},{"a":2,"n":"Triggered","t":2,"ad":{"a":2,"n":"add_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"addTriggered","rt":$n[0].Void,"p":[Function]},"r":{"a":2,"n":"remove_Triggered","t":8,"pi":[{"n":"value","pt":Function,"ps":0}],"sn":"removeTriggered","rt":$n[0].Void,"p":[Function]}}]}; }, $n);
    /*_Project.Code.Core.Collision.OverlapCollisionDetector end.*/

    /*_Project.Code.Core.Character.CharacterAnimator start.*/
    $m("_Project.Code.Core.Character.CharacterAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"SetDirection","t":8,"pi":[{"n":"direction","pt":$n[1].Vector2,"ps":0}],"sn":"SetDirection","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[20].TopDownAnimator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_breathScale","t":4,"rt":$n[0].Single,"sn":"_breathScale","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_breathSpeed","t":4,"rt":$n[0].Single,"sn":"_breathSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_transform","t":4,"rt":$n[1].Transform,"sn":"_transform"}]}; }, $n);
    /*_Project.Code.Core.Character.CharacterAnimator end.*/

    /*_Project.Code.Core.Character.CharacterInstaller start.*/
    $m("_Project.Code.Core.Character.CharacterInstaller", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[20].CharacterAnimator,"sn":"_animator"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_castingDetector","t":4,"rt":$n[18].OverlapCollisionDetector,"sn":"_castingDetector"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_mover","t":4,"rt":$n[20].Mover,"sn":"_mover"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_storages","t":4,"rt":$n[10].List$1(_Project.Code.Core.Items.Inventory.ItemInventory),"sn":"_storages"}]}; }, $n);
    /*_Project.Code.Core.Character.CharacterInstaller end.*/

    /*_Project.Code.Core.Character.Mover start.*/
    $m("_Project.Code.Core.Character.Mover", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"FixedUpdate","t":8,"sn":"FixedUpdate","rt":$n[0].Void},{"a":2,"n":"Init","t":8,"pi":[{"n":"input","pt":$n[11].IMoveInput,"ps":0}],"sn":"Init","rt":$n[0].Void,"p":[$n[11].IMoveInput]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"Direction","t":16,"rt":$n[1].Vector2,"g":{"a":2,"n":"get_Direction","t":8,"rt":$n[1].Vector2,"fg":"Direction"},"fn":"Direction"},{"a":1,"n":"SpeedScaleFactor","is":true,"t":4,"rt":$n[0].Single,"sn":"SpeedScaleFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_input","t":4,"rt":$n[11].IMoveInput,"sn":"_input"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_rigidbody","t":4,"rt":$n[1].Rigidbody2D,"sn":"_rigidbody"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Core.Character.Mover end.*/

    /*_Project.Code.Core.Character.SortingGroupAnimator start.*/
    $m("_Project.Code.Core.Character.SortingGroupAnimator", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.RequireComponent.ctor(UnityEngine.Rendering.SortingGroup)],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnValidate","t":8,"sn":"OnValidate","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_order","t":4,"rt":$n[0].Int32,"sn":"_order","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"_sortingGroup","t":4,"rt":$n[21].SortingGroup,"sn":"_sortingGroup"}]}; }, $n);
    /*_Project.Code.Core.Character.SortingGroupAnimator end.*/

    /*_Project.Code.Core.Character.TopDownAnimationConfig start.*/
    $m("_Project.Code.Core.Character.TopDownAnimationConfig", function () { return {"nested":[$n[20].TopDownAnimationConfig.AnimationEntry],"att":1048577,"a":2,"at":[Bridge.apply(new UnityEngine.CreateAssetMenuAttribute(), {
        fileName: "AnimationConfig", menuName: "Configs/AnimationConfig"
    } )],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Animations","t":4,"rt":$n[10].List$1(_Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry),"sn":"Animations"}]}; }, $n);
    /*_Project.Code.Core.Character.TopDownAnimationConfig end.*/

    /*_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry start.*/
    $m("_Project.Code.Core.Character.TopDownAnimationConfig.AnimationEntry", function () { return {"td":$n[20].TopDownAnimationConfig,"att":1056770,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Animation","t":4,"rt":$n[1].AnimationClip,"sn":"Animation"},{"a":2,"n":"Direction","t":4,"rt":$n[1].Vector2,"sn":"Direction"}]}; }, $n);
    /*_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry end.*/

    /*_Project.Code.Core.Character.TopDownAnimator start.*/
    $m("_Project.Code.Core.Character.TopDownAnimator", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"GetAnimationClip","t":8,"pi":[{"n":"direction","pt":$n[1].Vector2,"ps":0}],"sn":"GetAnimationClip","rt":$n[1].AnimationClip,"p":[$n[1].Vector2]},{"a":2,"n":"SetDirection","t":8,"pi":[{"n":"direction","pt":$n[1].Vector2,"ps":0}],"sn":"SetDirection","rt":$n[0].Void,"p":[$n[1].Vector2]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animationConfig","t":4,"rt":$n[20].TopDownAnimationConfig,"sn":"_animationConfig"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_animator","t":4,"rt":$n[1].Animator,"sn":"_animator"},{"a":1,"n":"_currentClip","t":4,"rt":$n[1].AnimationClip,"sn":"_currentClip"},{"a":1,"n":"_currentDirection","t":4,"rt":$n[1].Vector2,"sn":"_currentDirection"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_smoothTime","t":4,"rt":$n[0].Single,"sn":"_smoothTime","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_smoothedDirection","t":4,"rt":$n[1].Vector2,"sn":"_smoothedDirection"},{"a":1,"n":"_velocityX","t":4,"rt":$n[0].Single,"sn":"_velocityX","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_velocityY","t":4,"rt":$n[0].Single,"sn":"_velocityY","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Core.Character.TopDownAnimator end.*/

    /*_Project.Code.Core.Buyables.Buyable start.*/
    $m("_Project.Code.Core.Buyables.Buyable", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"Buy","t":8,"sn":"Buy","rt":$n[0].Void},{"a":1,"n":"GetCapacity","t":8,"sn":"GetCapacity","rt":$n[0].Int32,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"a":2,"n":"IsBought","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsBought","t":8,"rt":$n[0].Boolean,"fg":"IsBought","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"IsBought"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_activateOnBought","t":4,"rt":$n[1].GameObject,"sn":"_activateOnBought"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_deactivateOnBought","t":4,"rt":$n[10].List$1(UnityEngine.GameObject),"sn":"_deactivateOnBought"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_itemInventory","t":4,"rt":$n[4].ItemInventory,"sn":"_itemInventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_price","t":4,"rt":$n[0].Int32,"sn":"_price","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*_Project.Code.Core.Buyables.Buyable end.*/

    /*_Project.Code.Core.Buyables.BuyablesFlow start.*/
    $m("_Project.Code.Core.Buyables.BuyablesFlow", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*_Project.Code.Core.Buyables.BuyablesFlow end.*/

    /*_Project.Code.Core.Buyables.BuyableType start.*/
    $m("_Project.Code.Core.Buyables.BuyableType", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"Field","is":true,"t":4,"rt":$n[22].BuyableType,"sn":"Field","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Buyables.BuyableType, System.Enum.toStringFn(_Project.Code.Core.Buyables.BuyableType));}},{"a":2,"n":"Table","is":true,"t":4,"rt":$n[22].BuyableType,"sn":"Table","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Buyables.BuyableType, System.Enum.toStringFn(_Project.Code.Core.Buyables.BuyableType));}},{"a":2,"n":"Workers1","is":true,"t":4,"rt":$n[22].BuyableType,"sn":"Workers1","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Buyables.BuyableType, System.Enum.toStringFn(_Project.Code.Core.Buyables.BuyableType));}},{"a":2,"n":"Workers2","is":true,"t":4,"rt":$n[22].BuyableType,"sn":"Workers2","box":function ($v) { return Bridge.box($v, _Project.Code.Core.Buyables.BuyableType, System.Enum.toStringFn(_Project.Code.Core.Buyables.BuyableType));}}]}; }, $n);
    /*_Project.Code.Core.Buyables.BuyableType end.*/

    /*_Project.Code.Core.Buyables.CoinsViewUpdater start.*/
    $m("_Project.Code.Core.Buyables.CoinsViewUpdater", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnCoinAdded","t":8,"pi":[{"n":"obj","pt":$n[3].Item,"ps":0}],"sn":"OnCoinAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"OnCoinRemoved","t":8,"pi":[{"n":"obj","pt":$n[3].Item,"ps":0}],"sn":"OnCoinRemoved","rt":$n[0].Void,"p":[$n[3].Item]},{"a":1,"n":"UpdateView","t":8,"sn":"UpdateView","rt":$n[0].Void},{"a":1,"n":"_counter","t":4,"rt":$n[0].Int32,"sn":"_counter","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_inventory","t":4,"rt":$n[4].ItemInventory,"sn":"_inventory"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_text","t":4,"rt":$n[5].TMP_Text,"sn":"_text"}]}; }, $n);
    /*_Project.Code.Core.Buyables.CoinsViewUpdater end.*/

    /*_Project.Code.Core.Buyables.EndScreenShower start.*/
    $m("_Project.Code.Core.Buyables.EndScreenShower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"EndGame","t":8,"sn":"EndGame","rt":$n[12].IEnumerator},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"WaitEnd","t":8,"sn":"WaitEnd","rt":$n[12].IEnumerator},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_fieldBuyable","t":4,"rt":$n[22].Buyable,"sn":"_fieldBuyable"},{"a":1,"n":"_isFinished","t":4,"rt":$n[0].Boolean,"sn":"_isFinished","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_ui","t":4,"rt":$n[1].GameObject,"sn":"_ui"}]}; }, $n);
    /*_Project.Code.Core.Buyables.EndScreenShower end.*/

    /*_Project.Code.Core.Buyables.InventorViewDestroyer start.*/
    $m("_Project.Code.Core.Buyables.InventorViewDestroyer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"OnAdded","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0}],"sn":"OnAdded","rt":$n[0].Void,"p":[$n[3].Item]},{"ov":true,"a":3,"n":"OnRemoved","t":8,"pi":[{"n":"item","pt":$n[3].Item,"ps":0}],"sn":"OnRemoved","rt":$n[0].Void,"p":[$n[3].Item]}]}; }, $n);
    /*_Project.Code.Core.Buyables.InventorViewDestroyer end.*/

    /*_Project.Code.Core.Buyables.MoneyConfig start.*/
    $m("_Project.Code.Core.Buyables.MoneyConfig", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CoinItemPrice","is":true,"t":16,"rt":$n[0].Int32,"g":{"a":2,"n":"get_CoinItemPrice","t":8,"rt":$n[0].Int32,"fg":"CoinItemPrice","is":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},"fn":"CoinItemPrice"}]}; }, $n);
    /*_Project.Code.Core.Buyables.MoneyConfig end.*/

    /*_Project.Code.Core.Animations.AnimationsFactory start.*/
    $m("_Project.Code.Core.Animations.AnimationsFactory", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CreateInfinitySign","is":true,"t":8,"pi":[{"n":"body","pt":$n[1].Transform,"ps":0},{"n":"duration","dv":0.5,"o":true,"pt":$n[0].Single,"ps":1},{"n":"width","dv":50.0,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"CreateInfinitySign","rt":$n[6].Tween,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]},{"a":2,"n":"CreatePointing","is":true,"t":8,"pi":[{"n":"body","pt":$n[1].Transform,"ps":0},{"n":"duration","dv":0.5,"o":true,"pt":$n[0].Single,"ps":1},{"n":"yOffset","dv":0.2,"o":true,"pt":$n[0].Single,"ps":2}],"sn":"CreatePointing","rt":$n[6].Tween,"p":[$n[1].Transform,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*_Project.Code.Core.Animations.AnimationsFactory end.*/

    /*_Project.Code.Core.Animations.BreathAnimation start.*/
    $m("_Project.Code.Core.Animations.BreathAnimation", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Animate","t":8,"sn":"Animate","rt":$n[0].Void},{"a":1,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":1,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_duration","t":4,"rt":$n[0].Single,"sn":"_duration","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_scaleFactor","t":4,"rt":$n[0].Single,"sn":"_scaleFactor","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"_tweener","t":4,"rt":$n[6].Tweener,"sn":"_tweener"}]}; }, $n);
    /*_Project.Code.Core.Animations.BreathAnimation end.*/

    /*_Project.Code.Camera.CameraInBordersZoom start.*/
    $m("_Project.Code.Camera.CameraInBordersZoom", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"CalculateFactor","t":8,"pi":[{"n":"screenSize","pt":$n[1].Vector2,"ps":0},{"n":"boundsSize","pt":$n[1].Vector2,"ps":1}],"sn":"CalculateFactor","rt":$n[0].Single,"p":[$n[1].Vector2,$n[1].Vector2],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"GetScreenSizeInWorld","t":8,"sn":"GetScreenSizeInWorld","rt":$n[1].Vector2},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_borders","t":4,"rt":$n[1].Collider2D,"sn":"_borders"},{"a":1,"n":"_camera","t":4,"rt":$n[1].Camera,"sn":"_camera"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_defaultCameraSize","t":4,"rt":$n[0].Single,"sn":"_defaultCameraSize","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*_Project.Code.Camera.CameraInBordersZoom end.*/

    /*_Project.Code.Camera.Follower start.*/
    $m("_Project.Code.Camera.Follower", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_speed","t":4,"rt":$n[0].Single,"sn":"_speed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"_target","t":4,"rt":$n[1].Transform,"sn":"_target"}]}; }, $n);
    /*_Project.Code.Camera.Follower end.*/

    /*DG.Tweening.DOTweenCYInstruction start.*/
    $m("DG.Tweening.DOTweenCYInstruction", function () { return {"nested":[$n[6].DOTweenCYInstruction.WaitForCompletion,$n[6].DOTweenCYInstruction.WaitForRewind,$n[6].DOTweenCYInstruction.WaitForKill,$n[6].DOTweenCYInstruction.WaitForElapsedLoops,$n[6].DOTweenCYInstruction.WaitForPosition,$n[6].DOTweenCYInstruction.WaitForStart],"att":1048961,"a":2,"s":true}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForCompletion", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForCompletion end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForRewind", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForRewind end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForKill start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForKill", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForKill end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForElapsedLoops", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[0].Int32],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"elapsedLoops","t":4,"rt":$n[0].Int32,"sn":"elapsedLoops","ro":true,"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForElapsedLoops end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForPosition", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween,$n[0].Single],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"position","t":4,"rt":$n[0].Single,"sn":"position","ro":true,"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForPosition end.*/

    /*DG.Tweening.DOTweenCYInstruction+WaitForStart start.*/
    $m("DG.Tweening.DOTweenCYInstruction.WaitForStart", function () { return {"td":$n[6].DOTweenCYInstruction,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[$n[6].Tween],"pi":[{"n":"tween","pt":$n[6].Tween,"ps":0}],"sn":"ctor"},{"ov":true,"a":2,"n":"keepWaiting","t":16,"rt":$n[0].Boolean,"g":{"ov":true,"a":2,"n":"get_keepWaiting","t":8,"rt":$n[0].Boolean,"fg":"keepWaiting","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"fn":"keepWaiting"},{"a":1,"n":"t","t":4,"rt":$n[6].Tween,"sn":"t","ro":true}]}; }, $n);
    /*DG.Tweening.DOTweenCYInstruction+WaitForStart end.*/

    /*DG.Tweening.DOTweenModuleAudio start.*/
    $m("DG.Tweening.DOTweenModuleAudio", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOComplete","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0},{"n":"withCallbacks","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOComplete","rt":$n[0].Int32,"p":[$n[23].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlip","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOFlip","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOGoto","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0},{"n":"to","pt":$n[0].Single,"ps":1},{"n":"andPlay","dv":false,"o":true,"pt":$n[0].Boolean,"ps":2}],"sn":"DOGoto","rt":$n[0].Int32,"p":[$n[23].AudioMixer,$n[0].Single,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOKill","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0},{"n":"complete","dv":false,"o":true,"pt":$n[0].Boolean,"ps":1}],"sn":"DOKill","rt":$n[0].Int32,"p":[$n[23].AudioMixer,$n[0].Boolean],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPause","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOPause","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPitch","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].AudioSource,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPitch","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].AudioSource,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPlay","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOPlay","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayBackwards","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOPlayBackwards","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOPlayForward","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOPlayForward","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORestart","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DORestart","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DORewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DORewind","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOSetFloat","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0},{"n":"floatName","pt":$n[0].String,"ps":1},{"n":"endValue","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOSetFloat","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[23].AudioMixer,$n[0].String,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOSmoothRewind","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOSmoothRewind","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"DOTogglePause","is":true,"t":8,"pi":[{"n":"target","pt":$n[23].AudioMixer,"ps":0}],"sn":"DOTogglePause","rt":$n[0].Int32,"p":[$n[23].AudioMixer],"box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleAudio end.*/

    /*DG.Tweening.DOTweenModulePhysics start.*/
    $m("DG.Tweening.DOTweenModulePhysics", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[25].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[25].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOLookAt","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"towards","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"axisConstraint","dv":0,"o":true,"pt":$n[6].AxisConstraint,"ps":3},{"n":"up","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Vector3),"ps":4}],"sn":"DOLookAt","rt":$n[24].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[6].AxisConstraint,$n[0].Nullable$1(UnityEngine.Vector3)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveZ","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":$n[25].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,$n[25].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector3),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody,System.Array.type(UnityEngine.Vector3),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"mode","dv":0,"o":true,"pt":$n[6].RotateMode,"ps":3}],"sn":"DORotate","rt":$n[24].TweenerCore$3(UnityEngine.Quaternion,UnityEngine.Vector3,DG.Tweening.Plugins.Options.QuaternionOptions),"p":[$n[1].Rigidbody,$n[1].Vector3,$n[0].Single,$n[6].RotateMode]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics end.*/

    /*DG.Tweening.DOTweenModulePhysics2D start.*/
    $m("DG.Tweening.DOTweenModulePhysics2D", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOJump","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJump","rt":$n[6].Sequence,"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[25].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOLocalPath$1","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[25].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOLocalPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOLocalPath","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DOMove","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMove","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveX","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMoveY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMoveY","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":4,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":$n[25].Path,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":3}],"sn":"DOPath$1","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,$n[25].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"DOPath","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"path","pt":System.Array.type(UnityEngine.Vector2),"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"pathType","dv":0,"o":true,"pt":$n[6].PathType,"ps":3},{"n":"pathMode","dv":1,"o":true,"pt":$n[6].PathMode,"ps":4},{"n":"resolution","dv":10,"o":true,"pt":$n[0].Int32,"ps":5},{"n":"gizmoColor","dv":null,"o":true,"pt":$n[0].Nullable$1(UnityEngine.Color),"ps":6}],"sn":"DOPath","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].Rigidbody2D,System.Array.type(UnityEngine.Vector2),$n[0].Single,$n[6].PathType,$n[6].PathMode,$n[0].Int32,$n[0].Nullable$1(UnityEngine.Color)]},{"a":2,"n":"DORotate","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Rigidbody2D,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DORotate","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].Rigidbody2D,$n[0].Single,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModulePhysics2D end.*/

    /*DG.Tweening.DOTweenModuleSprite start.*/
    $m("DG.Tweening.DOTweenModuleSprite", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[1].SpriteRenderer,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].SpriteRenderer,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[1].SpriteRenderer,pc.ColorGradient,$n[0].Single]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleSprite end.*/

    /*DG.Tweening.DOTweenModuleUI start.*/
    $m("DG.Tweening.DOTweenModuleUI", function () { return {"nested":[$n[6].DOTweenModuleUI.Utils],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOAnchorMax","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMax","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorMin","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorMin","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector3,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3D","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector3,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DX","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DY","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPos3DZ","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPos3DZ","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,UnityEngine.Vector3,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosX","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOAnchorPosY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOAnchorPosY","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor","rt":$n[6].Tweener,"p":[$n[16].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$1","rt":$n[6].Tweener,"p":[$n[16].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOBlendableColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOBlendableColor$2","rt":$n[6].Tweener,"p":[$n[16].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Graphic,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[16].Graphic,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Image,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$1","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[16].Image,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Outline,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$2","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[16].Outline,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Text,"ps":0},{"n":"endValue","pt":$n[1].Color,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOColor$3","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[16].Text,$n[1].Color,$n[0].Single]},{"a":2,"n":"DOCounter","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Text,"ps":0},{"n":"fromValue","pt":$n[0].Int32,"ps":1},{"n":"endValue","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"addThousandsSeparator","dv":true,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"culture","dv":null,"o":true,"pt":$n[26].CultureInfo,"ps":5}],"sn":"DOCounter","rt":$n[24].TweenerCore$3(System.Int32,System.Int32,DG.Tweening.Plugins.Options.NoOptions),"p":[$n[16].Text,$n[0].Int32,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[26].CultureInfo]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].CanvasGroup,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[1].CanvasGroup,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Graphic,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$1","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[16].Graphic,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$2","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[16].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Outline,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$3","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[16].Outline,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFade","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Text,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFade$4","rt":$n[24].TweenerCore$3(UnityEngine.Color,UnityEngine.Color,DG.Tweening.Plugins.Options.ColorOptions),"p":[$n[16].Text,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFillAmount","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Image,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOFillAmount","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[16].Image,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOFlexibleSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOFlexibleSize","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[16].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Image,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[16].Image,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOHorizontalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOHorizontalNormalizedPos","rt":$n[6].Tweener,"p":[$n[16].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOJumpAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"jumpPower","pt":$n[0].Single,"ps":2},{"n":"numJumps","pt":$n[0].Int32,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOJumpAnchorPos","rt":$n[6].Sequence,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOMinSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOMinSize","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[16].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DONormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].ScrollRect,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DONormalizedPos","rt":$n[6].Tweener,"p":[$n[16].ScrollRect,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPivot","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivot","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOPivotX","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotX","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPivotY","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOPivotY","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single]},{"a":2,"n":"DOPreferredSize","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].LayoutElement,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOPreferredSize","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[16].LayoutElement,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOPunchAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"punch","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"elasticity","dv":1.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOPunchAnchorPos","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOScale","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Outline,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOScale","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[16].Outline,$n[1].Vector2,$n[0].Single]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","dv":100.0,"o":true,"pt":$n[0].Single,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[0].Single,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShakeAnchorPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"duration","pt":$n[0].Single,"ps":1},{"n":"strength","pt":$n[1].Vector2,"ps":2},{"n":"vibrato","dv":10,"o":true,"pt":$n[0].Int32,"ps":3},{"n":"randomness","dv":90.0,"o":true,"pt":$n[0].Single,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5},{"n":"fadeOut","dv":true,"o":true,"pt":$n[0].Boolean,"ps":6},{"n":"randomnessMode","dv":0,"o":true,"pt":$n[6].ShakeRandomnessMode,"ps":7}],"sn":"DOShakeAnchorPos$1","rt":$n[6].Tweener,"p":[$n[1].RectTransform,$n[0].Single,$n[1].Vector2,$n[0].Int32,$n[0].Single,$n[0].Boolean,$n[0].Boolean,$n[6].ShakeRandomnessMode]},{"a":2,"n":"DOShapeCircle","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"center","pt":$n[1].Vector2,"ps":1},{"n":"endValueDegrees","pt":$n[0].Single,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3},{"n":"relativeCenter","dv":false,"o":true,"pt":$n[0].Boolean,"ps":4},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":5}],"sn":"DOShapeCircle","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.CircleOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Single,$n[0].Boolean,$n[0].Boolean]},{"a":2,"n":"DOSizeDelta","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].RectTransform,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOSizeDelta","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].RectTransform,$n[1].Vector2,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOText","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Text,"ps":0},{"n":"endValue","pt":$n[0].String,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"richTextEnabled","dv":true,"o":true,"pt":$n[0].Boolean,"ps":3},{"n":"scrambleMode","dv":0,"o":true,"pt":$n[6].ScrambleMode,"ps":4},{"n":"scrambleChars","dv":null,"o":true,"pt":$n[0].String,"ps":5}],"sn":"DOText","rt":$n[24].TweenerCore$3(System.String,System.String,DG.Tweening.Plugins.Options.StringOptions),"p":[$n[16].Text,$n[0].String,$n[0].Single,$n[0].Boolean,$n[6].ScrambleMode,$n[0].String]},{"a":2,"n":"DOValue","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].Slider,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOValue","rt":$n[24].TweenerCore$3(System.Single,System.Single,DG.Tweening.Plugins.Options.FloatOptions),"p":[$n[16].Slider,$n[0].Single,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"DOVerticalNormalizedPos","is":true,"t":8,"pi":[{"n":"target","pt":$n[16].ScrollRect,"ps":0},{"n":"endValue","pt":$n[0].Single,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2},{"n":"snapping","dv":false,"o":true,"pt":$n[0].Boolean,"ps":3}],"sn":"DOVerticalNormalizedPos","rt":$n[6].Tweener,"p":[$n[16].ScrollRect,$n[0].Single,$n[0].Single,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI end.*/

    /*DG.Tweening.DOTweenModuleUI+Utils start.*/
    $m("DG.Tweening.DOTweenModuleUI.Utils", function () { return {"td":$n[6].DOTweenModuleUI,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"SwitchToRectTransform","is":true,"t":8,"pi":[{"n":"from","pt":$n[1].RectTransform,"ps":0},{"n":"to","pt":$n[1].RectTransform,"ps":1}],"sn":"SwitchToRectTransform","rt":$n[1].Vector2,"p":[$n[1].RectTransform,$n[1].RectTransform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUI+Utils end.*/

    /*DG.Tweening.DOTweenModuleUnityVersion start.*/
    $m("DG.Tweening.DOTweenModuleUnityVersion", function () { return {"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"duration","pt":$n[0].Single,"ps":2}],"sn":"DOGradientColor","rt":$n[6].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].Single]},{"a":2,"n":"DOGradientColor","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"gradient","pt":pc.ColorGradient,"ps":1},{"n":"property","pt":$n[0].String,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOGradientColor$1","rt":$n[6].Sequence,"p":[$n[1].Material,pc.ColorGradient,$n[0].String,$n[0].Single]},{"a":2,"n":"DOOffset","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOOffset","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"DOTiling","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Material,"ps":0},{"n":"endValue","pt":$n[1].Vector2,"ps":1},{"n":"propertyID","pt":$n[0].Int32,"ps":2},{"n":"duration","pt":$n[0].Single,"ps":3}],"sn":"DOTiling","rt":$n[24].TweenerCore$3(UnityEngine.Vector2,UnityEngine.Vector2,DG.Tweening.Plugins.Options.VectorOptions),"p":[$n[1].Material,$n[1].Vector2,$n[0].Int32,$n[0].Single]},{"a":2,"n":"WaitForCompletion","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForCompletion","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForElapsedLoops","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"elapsedLoops","pt":$n[0].Int32,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForElapsedLoops","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Int32,$n[0].Boolean]},{"a":2,"n":"WaitForKill","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForKill","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForPosition","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"position","pt":$n[0].Single,"ps":1},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":2}],"sn":"WaitForPosition","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Single,$n[0].Boolean]},{"a":2,"n":"WaitForRewind","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForRewind","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]},{"a":2,"n":"WaitForStart","is":true,"t":8,"pi":[{"n":"t","pt":$n[6].Tween,"ps":0},{"n":"returnCustomYieldInstruction","pt":$n[0].Boolean,"ps":1}],"sn":"WaitForStart","rt":$n[1].CustomYieldInstruction,"p":[$n[6].Tween,$n[0].Boolean]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUnityVersion end.*/

    /*DG.Tweening.DOTweenModuleUtils start.*/
    $m("DG.Tweening.DOTweenModuleUtils", function () { return {"nested":[$n[6].DOTweenModuleUtils.Physics],"att":1048961,"a":2,"s":true,"m":[{"a":2,"n":"Init","is":true,"t":8,"sn":"Init","rt":$n[0].Void},{"a":1,"n":"Preserver","is":true,"t":8,"sn":"Preserver","rt":$n[0].Void},{"a":1,"n":"_initialized","is":true,"t":4,"rt":$n[0].Boolean,"sn":"_initialized","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils end.*/

    /*DG.Tweening.DOTweenModuleUtils+Physics start.*/
    $m("DG.Tweening.DOTweenModuleUtils.Physics", function () { return {"td":$n[6].DOTweenModuleUtils,"att":1048962,"a":2,"s":true,"m":[{"a":2,"n":"CreateDOTweenPathTween","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].MonoBehaviour,"ps":0},{"n":"tweenRigidbody","pt":$n[0].Boolean,"ps":1},{"n":"isLocal","pt":$n[0].Boolean,"ps":2},{"n":"path","pt":$n[25].Path,"ps":3},{"n":"duration","pt":$n[0].Single,"ps":4},{"n":"pathMode","pt":$n[6].PathMode,"ps":5}],"sn":"CreateDOTweenPathTween","rt":$n[24].TweenerCore$3(UnityEngine.Vector3,DG.Tweening.Plugins.Core.PathCore.Path,DG.Tweening.Plugins.Options.PathOptions),"p":[$n[1].MonoBehaviour,$n[0].Boolean,$n[0].Boolean,$n[25].Path,$n[0].Single,$n[6].PathMode]},{"a":2,"n":"HasRigidbody","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"HasRigidbody2D","is":true,"t":8,"pi":[{"n":"target","pt":$n[1].Component,"ps":0}],"sn":"HasRigidbody2D","rt":$n[0].Boolean,"p":[$n[1].Component],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"SetOrientationOnPath","is":true,"t":8,"pi":[{"n":"options","pt":$n[27].PathOptions,"ps":0},{"n":"t","pt":$n[6].Tween,"ps":1},{"n":"newRot","pt":$n[1].Quaternion,"ps":2},{"n":"trans","pt":$n[1].Transform,"ps":3}],"sn":"SetOrientationOnPath","rt":$n[0].Void,"p":[$n[27].PathOptions,$n[6].Tween,$n[1].Quaternion,$n[1].Transform]}]}; }, $n);
    /*DG.Tweening.DOTweenModuleUtils+Physics end.*/

    /*Assets.CourseGame.Develop.DI.DIContainer start.*/
    $m("Assets.CourseGame.Develop.DI.DIContainer", function () { return {"nested":[$n[8].DIContainer.Registration],"att":1048577,"a":2,"m":[{"a":2,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[8].DIContainer],"pi":[{"n":"parent","pt":$n[8].DIContainer,"ps":0}],"sn":"$ctor1"},{"a":1,"n":"CreateFrom","t":8,"pi":[{"n":"registration","pt":$n[8].DIContainer.Registration,"ps":0}],"tpc":1,"tprm":["T"],"sn":"CreateFrom","rt":System.Object,"p":[$n[8].DIContainer.Registration]},{"a":2,"n":"Dispose","t":8,"sn":"Dispose","rt":$n[0].Void},{"a":2,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Void},{"a":2,"n":"IsAlreadyRegister","t":8,"tpc":1,"tprm":["T"],"sn":"IsAlreadyRegister","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"RegisterAsSingle","t":8,"pi":[{"n":"creator","pt":Function,"ps":0}],"tpc":1,"tprm":["T"],"sn":"RegisterAsSingle","rt":$n[8].DIContainer.Registration,"p":[Function]},{"a":2,"n":"Resolve","t":8,"tpc":1,"tprm":["T"],"sn":"Resolve","rt":System.Object},{"a":1,"n":"_container","t":4,"rt":$n[10].Dictionary$2(System.Type,Assets.CourseGame.Develop.DI.DIContainer.Registration),"sn":"_container","ro":true},{"a":1,"n":"_parent","t":4,"rt":$n[8].DIContainer,"sn":"_parent","ro":true},{"a":1,"n":"_requests","t":4,"rt":$n[10].List$1(System.Type),"sn":"_requests","ro":true}]}; }, $n);
    /*Assets.CourseGame.Develop.DI.DIContainer end.*/

    /*Assets.CourseGame.Develop.DI.DIContainer+Registration start.*/
    $m("Assets.CourseGame.Develop.DI.DIContainer.Registration", function () { return {"td":$n[8].DIContainer,"att":1048578,"a":2,"m":[{"a":2,"n":".ctor","t":1,"p":[Function],"pi":[{"n":"creator","pt":Function,"ps":0}],"sn":"ctor"},{"a":2,"n":".ctor","t":1,"p":[$n[0].Object],"pi":[{"n":"instance","pt":$n[0].Object,"ps":0}],"sn":"$ctor1"},{"a":2,"n":"NonLazy","t":8,"sn":"NonLazy","rt":$n[0].Void},{"a":2,"n":"Creator","t":16,"rt":Function,"g":{"a":2,"n":"get_Creator","t":8,"rt":Function,"fg":"Creator"},"fn":"Creator"},{"a":2,"n":"Instance","t":16,"rt":$n[0].Object,"g":{"a":2,"n":"get_Instance","t":8,"rt":$n[0].Object,"fg":"Instance"},"s":{"a":2,"n":"set_Instance","t":8,"p":[$n[0].Object],"rt":$n[0].Void,"fs":"Instance"},"fn":"Instance"},{"a":2,"n":"IsNonLazy","t":16,"rt":$n[0].Boolean,"g":{"a":2,"n":"get_IsNonLazy","t":8,"rt":$n[0].Boolean,"fg":"IsNonLazy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},"s":{"a":1,"n":"set_IsNonLazy","t":8,"p":[$n[0].Boolean],"rt":$n[0].Void,"fs":"IsNonLazy"},"fn":"IsNonLazy"},{"a":1,"backing":true,"n":"<Creator>k__BackingField","t":4,"rt":Function,"sn":"Creator"},{"a":1,"backing":true,"n":"<Instance>k__BackingField","t":4,"rt":$n[0].Object,"sn":"Instance"},{"a":1,"backing":true,"n":"<IsNonLazy>k__BackingField","t":4,"rt":$n[0].Boolean,"sn":"IsNonLazy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*Assets.CourseGame.Develop.DI.DIContainer+Registration end.*/

    /*Assets.CourseGame.Develop.DI.IInitializable start.*/
    $m("Assets.CourseGame.Develop.DI.IInitializable", function () { return {"att":1048737,"a":2,"m":[{"ab":true,"a":2,"n":"Initialize","t":8,"sn":"Assets$CourseGame$Develop$DI$IInitializable$Initialize","rt":$n[0].Void}]}; }, $n);
    /*Assets.CourseGame.Develop.DI.IInitializable end.*/

    }});
