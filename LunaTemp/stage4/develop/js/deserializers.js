var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointSpring' )
  var i569 = data
  i568.spring = i569[0]
  i568.damper = i569[1]
  i568.targetPosition = i569[2]
  return i568
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointMotor' )
  var i571 = data
  i570.m_TargetVelocity = i571[0]
  i570.m_Force = i571[1]
  i570.m_FreeSpin = i571[2]
  return i570
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointLimits' )
  var i573 = data
  i572.m_Min = i573[0]
  i572.m_Max = i573[1]
  i572.m_Bounciness = i573[2]
  i572.m_BounceMinVelocity = i573[3]
  i572.m_ContactDistance = i573[4]
  i572.minBounce = i573[5]
  i572.maxBounce = i573[6]
  return i572
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointDrive' )
  var i575 = data
  i574.m_PositionSpring = i575[0]
  i574.m_PositionDamper = i575[1]
  i574.m_MaximumForce = i575[2]
  i574.m_UseAcceleration = i575[3]
  return i574
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i577 = data
  i576.m_Spring = i577[0]
  i576.m_Damper = i577[1]
  return i576
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i579 = data
  i578.m_Limit = i579[0]
  i578.m_Bounciness = i579[1]
  i578.m_ContactDistance = i579[2]
  return i578
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i581 = data
  i580.m_ExtremumSlip = i581[0]
  i580.m_ExtremumValue = i581[1]
  i580.m_AsymptoteSlip = i581[2]
  i580.m_AsymptoteValue = i581[3]
  i580.m_Stiffness = i581[4]
  return i580
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i583 = data
  i582.m_LowerAngle = i583[0]
  i582.m_UpperAngle = i583[1]
  return i582
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i585 = data
  i584.m_MotorSpeed = i585[0]
  i584.m_MaximumMotorTorque = i585[1]
  return i584
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i587 = data
  i586.m_DampingRatio = i587[0]
  i586.m_Frequency = i587[1]
  i586.m_Angle = i587[2]
  return i586
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i589 = data
  i588.m_LowerTranslation = i589[0]
  i588.m_UpperTranslation = i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i591 = data
  i590.position = new pc.Vec3( i591[0], i591[1], i591[2] )
  i590.scale = new pc.Vec3( i591[3], i591[4], i591[5] )
  i590.rotation = new pc.Quat(i591[6], i591[7], i591[8], i591[9])
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i593 = data
  i592.enabled = !!i593[0]
  i592.sortingLayerIndex = i593[1]
  i592.sortingOrder = i593[2]
  i592.sortingLayerName = i593[3]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i595 = data
  i594.enabled = !!i595[0]
  request.r(i595[1], i595[2], 0, i594, 'sharedMaterial')
  var i597 = i595[3]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i594.sharedMaterials = i596
  i594.receiveShadows = !!i595[4]
  i594.shadowCastingMode = i595[5]
  i594.sortingLayerID = i595[6]
  i594.sortingOrder = i595[7]
  i594.lightmapIndex = i595[8]
  i594.lightmapSceneIndex = i595[9]
  i594.lightmapScaleOffset = new pc.Vec4( i595[10], i595[11], i595[12], i595[13] )
  i594.lightProbeUsage = i595[14]
  i594.reflectionProbeUsage = i595[15]
  i594.color = new pc.Color(i595[16], i595[17], i595[18], i595[19])
  request.r(i595[20], i595[21], 0, i594, 'sprite')
  i594.flipX = !!i595[22]
  i594.flipY = !!i595[23]
  i594.drawMode = i595[24]
  i594.size = new pc.Vec2( i595[25], i595[26] )
  i594.tileMode = i595[27]
  i594.adaptiveModeThreshold = i595[28]
  i594.maskInteraction = i595[29]
  i594.spriteSortPoint = i595[30]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i601 = data
  i600.name = i601[0]
  i600.tagId = i601[1]
  i600.enabled = !!i601[2]
  i600.isStatic = !!i601[3]
  i600.layer = i601[4]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i602 = root || new pc.UnityMaterial()
  var i603 = data
  i602.name = i603[0]
  request.r(i603[1], i603[2], 0, i602, 'shader')
  i602.renderQueue = i603[3]
  i602.enableInstancing = !!i603[4]
  var i605 = i603[5]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i605[i + 0]) );
  }
  i602.floatParameters = i604
  var i607 = i603[6]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i607[i + 0]) );
  }
  i602.colorParameters = i606
  var i609 = i603[7]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i609[i + 0]) );
  }
  i602.vectorParameters = i608
  var i611 = i603[8]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i611[i + 0]) );
  }
  i602.textureParameters = i610
  var i613 = i603[9]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i613[i + 0]) );
  }
  i602.materialFlags = i612
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i617 = data
  i616.name = i617[0]
  i616.value = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i621 = data
  i620.name = i621[0]
  i620.value = new pc.Color(i621[1], i621[2], i621[3], i621[4])
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i625 = data
  i624.name = i625[0]
  i624.value = new pc.Vec4( i625[1], i625[2], i625[3], i625[4] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i629 = data
  i628.name = i629[0]
  request.r(i629[1], i629[2], 0, i628, 'value')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i633 = data
  i632.name = i633[0]
  i632.enabled = !!i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i635 = data
  i634.name = i635[0]
  i634.width = i635[1]
  i634.height = i635[2]
  i634.mipmapCount = i635[3]
  i634.anisoLevel = i635[4]
  i634.filterMode = i635[5]
  i634.hdr = !!i635[6]
  i634.format = i635[7]
  i634.wrapMode = i635[8]
  i634.alphaIsTransparency = !!i635[9]
  i634.alphaSource = i635[10]
  i634.graphicsFormat = i635[11]
  i634.sRGBTexture = !!i635[12]
  i634.desiredColorSpace = i635[13]
  i634.wrapU = i635[14]
  i634.wrapV = i635[15]
  return i634
}

Deserializers["_Project.Code.Core.Character.CharacterInstaller"] = function (request, data, root) {
  var i636 = root || request.c( '_Project.Code.Core.Character.CharacterInstaller' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, '_mover')
  request.r(i637[2], i637[3], 0, i636, '_castingDetector')
  request.r(i637[4], i637[5], 0, i636, '_animator')
  var i639 = i637[6]
  var i638 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Inventory.ItemInventory')))
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 1, i638, '')
  }
  i636._storages = i638
  return i636
}

Deserializers["_Project.Code.Core.Collision.OverlapCollisionDetector"] = function (request, data, root) {
  var i642 = root || request.c( '_Project.Code.Core.Collision.OverlapCollisionDetector' )
  var i643 = data
  i642.detectionRadius = i643[0]
  i642.collisionMask = UnityEngine.LayerMask.FromIntegerValue( i643[1] )
  return i642
}

Deserializers["_Project.Code.Core.Character.Mover"] = function (request, data, root) {
  var i644 = root || request.c( '_Project.Code.Core.Character.Mover' )
  var i645 = data
  i644._speed = i645[0]
  request.r(i645[1], i645[2], 0, i644, '_rigidbody')
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i647 = data
  i646.bodyType = i647[0]
  request.r(i647[1], i647[2], 0, i646, 'material')
  i646.simulated = !!i647[3]
  i646.useAutoMass = !!i647[4]
  i646.mass = i647[5]
  i646.drag = i647[6]
  i646.angularDrag = i647[7]
  i646.gravityScale = i647[8]
  i646.collisionDetectionMode = i647[9]
  i646.sleepMode = i647[10]
  i646.constraints = i647[11]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i649 = data
  i648.radius = i649[0]
  i648.enabled = !!i649[1]
  i648.isTrigger = !!i649[2]
  i648.usedByEffector = !!i649[3]
  i648.density = i649[4]
  i648.offset = new pc.Vec2( i649[5], i649[6] )
  request.r(i649[7], i649[8], 0, i648, 'material')
  return i648
}

Deserializers["_Project.Code.Core.Character.CharacterAnimator"] = function (request, data, root) {
  var i650 = root || request.c( '_Project.Code.Core.Character.CharacterAnimator' )
  var i651 = data
  request.r(i651[0], i651[1], 0, i650, '_walkAnimator')
  request.r(i651[2], i651[3], 0, i650, '_idleAnimator')
  request.r(i651[4], i651[5], 0, i650, '_backpackAnimator')
  return i650
}

Deserializers["_Project.Code.Core.Character.TopDownAnimator"] = function (request, data, root) {
  var i652 = root || request.c( '_Project.Code.Core.Character.TopDownAnimator' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, '_config')
  request.r(i653[2], i653[3], 0, i652, '_animator')
  request.r(i653[4], i653[5], 0, i652, '_flipBody')
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'animatorController')
  request.r(i655[2], i655[3], 0, i654, 'avatar')
  i654.updateMode = i655[4]
  i654.hasTransformHierarchy = !!i655[5]
  i654.applyRootMotion = !!i655[6]
  var i657 = i655[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.humanBones = i656
  i654.enabled = !!i655[8]
  return i654
}

Deserializers["_Project.Code.Core.Character.SortingGroupAnimator"] = function (request, data, root) {
  var i660 = root || request.c( '_Project.Code.Core.Character.SortingGroupAnimator' )
  var i661 = data
  i660._order = i661[0]
  return i660
}

Deserializers["_Project.Code.Core.Items.Inventory.ItemInventory"] = function (request, data, root) {
  var i662 = root || request.c( '_Project.Code.Core.Items.Inventory.ItemInventory' )
  var i663 = data
  i662._type = i663[0]
  i662._inventory = i663[1]
  i662._capacity = i663[2]
  return i662
}

Deserializers["_Project.Code.Core.Items.Inventory.ColumnInventoryView"] = function (request, data, root) {
  var i664 = root || request.c( '_Project.Code.Core.Items.Inventory.ColumnInventoryView' )
  var i665 = data
  var i667 = i665[0]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 1, i666, '')
  }
  i664._columnPoints = i666
  i664._destroyOnEmptied = !!i665[1]
  request.r(i665[2], i665[3], 0, i664, '_inventory')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i671 = data
  i670.pivot = new pc.Vec2( i671[0], i671[1] )
  i670.anchorMin = new pc.Vec2( i671[2], i671[3] )
  i670.anchorMax = new pc.Vec2( i671[4], i671[5] )
  i670.sizeDelta = new pc.Vec2( i671[6], i671[7] )
  i670.anchoredPosition3D = new pc.Vec3( i671[8], i671[9], i671[10] )
  i670.rotation = new pc.Quat(i671[11], i671[12], i671[13], i671[14])
  i670.scale = new pc.Vec3( i671[15], i671[16], i671[17] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i673 = data
  i672.cullTransparentMesh = !!i673[0]
  return i672
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i674 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i675 = data
  i674.m_hasFontAssetChanged = !!i675[0]
  request.r(i675[1], i675[2], 0, i674, 'm_baseMaterial')
  i674.m_maskOffset = new pc.Vec4( i675[3], i675[4], i675[5], i675[6] )
  i674.m_text = i675[7]
  i674.m_isRightToLeft = !!i675[8]
  request.r(i675[9], i675[10], 0, i674, 'm_fontAsset')
  request.r(i675[11], i675[12], 0, i674, 'm_sharedMaterial')
  var i677 = i675[13]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i674.m_fontSharedMaterials = i676
  request.r(i675[14], i675[15], 0, i674, 'm_fontMaterial')
  var i679 = i675[16]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i674.m_fontMaterials = i678
  i674.m_fontColor32 = UnityEngine.Color32.ConstructColor(i675[17], i675[18], i675[19], i675[20])
  i674.m_fontColor = new pc.Color(i675[21], i675[22], i675[23], i675[24])
  i674.m_enableVertexGradient = !!i675[25]
  i674.m_colorMode = i675[26]
  i674.m_fontColorGradient = request.d('TMPro.VertexGradient', i675[27], i674.m_fontColorGradient)
  request.r(i675[28], i675[29], 0, i674, 'm_fontColorGradientPreset')
  request.r(i675[30], i675[31], 0, i674, 'm_spriteAsset')
  i674.m_tintAllSprites = !!i675[32]
  request.r(i675[33], i675[34], 0, i674, 'm_StyleSheet')
  i674.m_TextStyleHashCode = i675[35]
  i674.m_overrideHtmlColors = !!i675[36]
  i674.m_faceColor = UnityEngine.Color32.ConstructColor(i675[37], i675[38], i675[39], i675[40])
  i674.m_fontSize = i675[41]
  i674.m_fontSizeBase = i675[42]
  i674.m_fontWeight = i675[43]
  i674.m_enableAutoSizing = !!i675[44]
  i674.m_fontSizeMin = i675[45]
  i674.m_fontSizeMax = i675[46]
  i674.m_fontStyle = i675[47]
  i674.m_HorizontalAlignment = i675[48]
  i674.m_VerticalAlignment = i675[49]
  i674.m_textAlignment = i675[50]
  i674.m_characterSpacing = i675[51]
  i674.m_wordSpacing = i675[52]
  i674.m_lineSpacing = i675[53]
  i674.m_lineSpacingMax = i675[54]
  i674.m_paragraphSpacing = i675[55]
  i674.m_charWidthMaxAdj = i675[56]
  i674.m_enableWordWrapping = !!i675[57]
  i674.m_wordWrappingRatios = i675[58]
  i674.m_overflowMode = i675[59]
  request.r(i675[60], i675[61], 0, i674, 'm_linkedTextComponent')
  request.r(i675[62], i675[63], 0, i674, 'parentLinkedComponent')
  i674.m_enableKerning = !!i675[64]
  i674.m_enableExtraPadding = !!i675[65]
  i674.checkPaddingRequired = !!i675[66]
  i674.m_isRichText = !!i675[67]
  i674.m_parseCtrlCharacters = !!i675[68]
  i674.m_isOrthographic = !!i675[69]
  i674.m_isCullingEnabled = !!i675[70]
  i674.m_horizontalMapping = i675[71]
  i674.m_verticalMapping = i675[72]
  i674.m_uvLineOffset = i675[73]
  i674.m_geometrySortingOrder = i675[74]
  i674.m_IsTextObjectScaleStatic = !!i675[75]
  i674.m_VertexBufferAutoSizeReduction = !!i675[76]
  i674.m_useMaxVisibleDescender = !!i675[77]
  i674.m_pageToDisplay = i675[78]
  i674.m_margin = new pc.Vec4( i675[79], i675[80], i675[81], i675[82] )
  i674.m_isUsingLegacyAnimationComponent = !!i675[83]
  i674.m_isVolumetricText = !!i675[84]
  request.r(i675[85], i675[86], 0, i674, 'm_Material')
  i674.m_Maskable = !!i675[87]
  i674.m_Color = new pc.Color(i675[88], i675[89], i675[90], i675[91])
  i674.m_RaycastTarget = !!i675[92]
  i674.m_RaycastPadding = new pc.Vec4( i675[93], i675[94], i675[95], i675[96] )
  return i674
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i680 = root || request.c( 'TMPro.VertexGradient' )
  var i681 = data
  i680.topLeft = new pc.Color(i681[0], i681[1], i681[2], i681[3])
  i680.topRight = new pc.Color(i681[4], i681[5], i681[6], i681[7])
  i680.bottomLeft = new pc.Color(i681[8], i681[9], i681[10], i681[11])
  i680.bottomRight = new pc.Color(i681[12], i681[13], i681[14], i681[15])
  return i680
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Image' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_Sprite')
  i682.m_Type = i683[2]
  i682.m_PreserveAspect = !!i683[3]
  i682.m_FillCenter = !!i683[4]
  i682.m_FillMethod = i683[5]
  i682.m_FillAmount = i683[6]
  i682.m_FillClockwise = !!i683[7]
  i682.m_FillOrigin = i683[8]
  i682.m_UseSpriteMesh = !!i683[9]
  i682.m_PixelsPerUnitMultiplier = i683[10]
  request.r(i683[11], i683[12], 0, i682, 'm_Material')
  i682.m_Maskable = !!i683[13]
  i682.m_Color = new pc.Color(i683[14], i683[15], i683[16], i683[17])
  i682.m_RaycastTarget = !!i683[18]
  i682.m_RaycastPadding = new pc.Vec4( i683[19], i683[20], i683[21], i683[22] )
  return i682
}

Deserializers["_Project.Code.Core.Items.Item"] = function (request, data, root) {
  var i684 = root || request.c( '_Project.Code.Core.Items.Item' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, '_collider')
  i684._type = i685[2]
  return i684
}

Deserializers["_Project.Code.Core.Harvesting.Field"] = function (request, data, root) {
  var i686 = root || request.c( '_Project.Code.Core.Harvesting.Field' )
  var i687 = data
  i686._state = i687[0]
  request.r(i687[1], i687[2], 0, i686, '_plant')
  return i686
}

Deserializers["_Project.Code.Core.Items.InventoryInitializer"] = function (request, data, root) {
  var i688 = root || request.c( '_Project.Code.Core.Items.InventoryInitializer' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, '_inventory')
  i688._count = i689[2]
  return i688
}

Deserializers["_Project.Code.Selling.Customer"] = function (request, data, root) {
  var i690 = root || request.c( '_Project.Code.Selling.Customer' )
  var i691 = data
  request.r(i691[0], i691[1], 0, i690, '_bubbleView')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i693 = data
  i692.enabled = !!i693[0]
  i692.planeDistance = i693[1]
  i692.referencePixelsPerUnit = i693[2]
  i692.isFallbackOverlay = !!i693[3]
  i692.renderMode = i693[4]
  i692.renderOrder = i693[5]
  i692.sortingLayerName = i693[6]
  i692.sortingOrder = i693[7]
  i692.scaleFactor = i693[8]
  request.r(i693[9], i693[10], 0, i692, 'worldCamera')
  i692.overrideSorting = !!i693[11]
  i692.pixelPerfect = !!i693[12]
  i692.targetDisplay = i693[13]
  i692.overridePixelPerfect = !!i693[14]
  return i692
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i694 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i695 = data
  i694.m_UiScaleMode = i695[0]
  i694.m_ReferencePixelsPerUnit = i695[1]
  i694.m_ScaleFactor = i695[2]
  i694.m_ReferenceResolution = new pc.Vec2( i695[3], i695[4] )
  i694.m_ScreenMatchMode = i695[5]
  i694.m_MatchWidthOrHeight = i695[6]
  i694.m_PhysicalUnit = i695[7]
  i694.m_FallbackScreenDPI = i695[8]
  i694.m_DefaultSpriteDPI = i695[9]
  i694.m_DynamicPixelsPerUnit = i695[10]
  i694.m_PresetInfoIsWorld = !!i695[11]
  return i694
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i696 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i697 = data
  i696.m_IgnoreReversedGraphics = !!i697[0]
  i696.m_BlockingObjects = i697[1]
  i696.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i697[2] )
  return i696
}

Deserializers["_Project.Code.Selling.Line.BubbleView"] = function (request, data, root) {
  var i698 = root || request.c( '_Project.Code.Selling.Line.BubbleView' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, '_text')
  request.r(i699[2], i699[3], 0, i698, '_body')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i701 = data
  i700.enabled = !!i701[0]
  i700.aspect = i701[1]
  i700.orthographic = !!i701[2]
  i700.orthographicSize = i701[3]
  i700.backgroundColor = new pc.Color(i701[4], i701[5], i701[6], i701[7])
  i700.nearClipPlane = i701[8]
  i700.farClipPlane = i701[9]
  i700.fieldOfView = i701[10]
  i700.depth = i701[11]
  i700.clearFlags = i701[12]
  i700.cullingMask = i701[13]
  i700.rect = i701[14]
  request.r(i701[15], i701[16], 0, i700, 'targetTexture')
  i700.usePhysicalProperties = !!i701[17]
  i700.focalLength = i701[18]
  i700.sensorSize = new pc.Vec2( i701[19], i701[20] )
  i700.lensShift = new pc.Vec2( i701[21], i701[22] )
  i700.gateFit = i701[23]
  i700.commandBufferCount = i701[24]
  i700.cameraType = i701[25]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i703 = data
  i702.enabled = !!i703[0]
  i702.isTrigger = !!i703[1]
  i702.usedByEffector = !!i703[2]
  i702.density = i703[3]
  i702.offset = new pc.Vec2( i703[4], i703[5] )
  request.r(i703[6], i703[7], 0, i702, 'material')
  i702.usedByComposite = !!i703[8]
  i702.autoTiling = !!i703[9]
  var i705 = i703[10]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
  var i707 = i705[i + 0]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
    i706.push( new pc.Vec2( i707[i + 0], i707[i + 1] ) );
  }
    i704.push( i706 );
  }
  i702.points = i704
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i715 = data
  i714.usedByComposite = !!i715[0]
  i714.autoTiling = !!i715[1]
  i714.size = new pc.Vec2( i715[2], i715[3] )
  i714.edgeRadius = i715[4]
  i714.enabled = !!i715[5]
  i714.isTrigger = !!i715[6]
  i714.usedByEffector = !!i715[7]
  i714.density = i715[8]
  i714.offset = new pc.Vec2( i715[9], i715[10] )
  request.r(i715[11], i715[12], 0, i714, 'material')
  return i714
}

Deserializers["_Project.Code.Camera.Follower"] = function (request, data, root) {
  var i716 = root || request.c( '_Project.Code.Camera.Follower' )
  var i717 = data
  i716._speed = i717[0]
  request.r(i717[1], i717[2], 0, i716, '_target')
  return i716
}

Deserializers["_Project.Code.Camera.CameraInBordersZoom"] = function (request, data, root) {
  var i718 = root || request.c( '_Project.Code.Camera.CameraInBordersZoom' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, '_borders')
  i718._defaultCameraSize = i719[2]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i721 = data
  i720.name = i721[0]
  i720.index = i721[1]
  i720.startup = !!i721[2]
  return i720
}

Deserializers["_Project.Code.Entry.EntryPoint"] = function (request, data, root) {
  var i722 = root || request.c( '_Project.Code.Entry.EntryPoint' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, '_joystick')
  var i725 = i723[2]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Item')))
  for(var i = 0; i < i725.length; i += 2) {
  request.r(i725[i + 0], i725[i + 1], 1, i724, '')
  }
  i722._itemPrefabs = i724
  return i722
}

Deserializers["_Project.Code.Services.CoroutineRunner.CoroutineRunner"] = function (request, data, root) {
  var i728 = root || request.c( '_Project.Code.Services.CoroutineRunner.CoroutineRunner' )
  var i729 = data
  return i728
}

Deserializers["_Project.Code.Core.Buyables.EndScreenShower"] = function (request, data, root) {
  var i730 = root || request.c( '_Project.Code.Core.Buyables.EndScreenShower' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, '_fieldBuyable')
  request.r(i731[2], i731[3], 0, i730, '_ui')
  return i730
}

Deserializers["_Project.Code.Tutorial.Tutorial"] = function (request, data, root) {
  var i732 = root || request.c( '_Project.Code.Tutorial.Tutorial' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, '_tutorialCollider')
  request.r(i733[2], i733[3], 0, i732, '_tutorialText')
  request.r(i733[4], i733[5], 0, i732, '_tutorialInventory')
  request.r(i733[6], i733[7], 0, i732, '_joystick')
  request.r(i733[8], i733[9], 0, i732, '_arrow')
  request.r(i733[10], i733[11], 0, i732, '_point1')
  request.r(i733[12], i733[13], 0, i732, '_point2')
  request.r(i733[14], i733[15], 0, i732, '_buyable')
  return i732
}

Deserializers["ArrowAnimator"] = function (request, data, root) {
  var i734 = root || request.c( 'ArrowAnimator' )
  var i735 = data
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i737 = data
  i736.enabled = !!i737[0]
  i736.isTrigger = !!i737[1]
  i736.usedByEffector = !!i737[2]
  i736.density = i737[3]
  i736.offset = new pc.Vec2( i737[4], i737[5] )
  request.r(i737[6], i737[7], 0, i736, 'material')
  i736.edgeRadius = i737[8]
  var i739 = i737[9]
  var i738 = []
  for(var i = 0; i < i739.length; i += 2) {
    i738.push( new pc.Vec2( i739[i + 0], i739[i + 1] ) );
  }
  i736.points = i738
  i736.useAdjacentStartPoint = !!i737[10]
  i736.adjacentStartPoint = new pc.Vec2( i737[11], i737[12] )
  i736.useAdjacentEndPoint = !!i737[13]
  i736.adjacentEndPoint = new pc.Vec2( i737[14], i737[15] )
  return i736
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.Mask' )
  var i741 = data
  i740.m_ShowMaskGraphic = !!i741[0]
  return i740
}

Deserializers["_Project.Code.Core.Buyables.CoinsViewUpdater"] = function (request, data, root) {
  var i742 = root || request.c( '_Project.Code.Core.Buyables.CoinsViewUpdater' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, '_text')
  request.r(i743[2], i743[3], 0, i742, '_inventory')
  return i742
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i744 = root || request.c( 'VariableJoystick' )
  var i745 = data
  i744.moveThreshold = i745[0]
  i744.joystickType = i745[1]
  request.r(i745[2], i745[3], 0, i744, 'background')
  i744.handleRange = i745[4]
  i744.deadZone = i745[5]
  i744.axisOptions = i745[6]
  i744.snapX = !!i745[7]
  i744.snapY = !!i745[8]
  request.r(i745[9], i745[10], 0, i744, '_handle')
  return i744
}

Deserializers["_Project.Code.Core.Animations.BreathAnimation"] = function (request, data, root) {
  var i746 = root || request.c( '_Project.Code.Core.Animations.BreathAnimation' )
  var i747 = data
  i746._scaleFactor = i747[0]
  return i746
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_FirstSelected')
  i748.m_sendNavigationEvents = !!i749[2]
  i748.m_DragThreshold = i749[3]
  return i748
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i751 = data
  i750.m_HorizontalAxis = i751[0]
  i750.m_VerticalAxis = i751[1]
  i750.m_SubmitButton = i751[2]
  i750.m_CancelButton = i751[3]
  i750.m_InputActionsPerSecond = i751[4]
  i750.m_RepeatDelay = i751[5]
  i750.m_ForceModuleActive = !!i751[6]
  i750.m_SendPointerHoverToParent = !!i751[7]
  return i750
}

Deserializers["_Project.Code.Core.Buyables.Buyable"] = function (request, data, root) {
  var i752 = root || request.c( '_Project.Code.Core.Buyables.Buyable' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, '_itemInventory')
  i752._price = i753[2]
  request.r(i753[3], i753[4], 0, i752, '_activateOnBought')
  var i755 = i753[5]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 1, i754, '')
  }
  i752._deactivateOnBought = i754
  return i752
}

Deserializers["_Project.Code.Core.Buyables.InventorViewDestroyer"] = function (request, data, root) {
  var i758 = root || request.c( '_Project.Code.Core.Buyables.InventorViewDestroyer' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, '_inventory')
  return i758
}

Deserializers["_Project.Code.Core.Workers.Worker"] = function (request, data, root) {
  var i760 = root || request.c( '_Project.Code.Core.Workers.Worker' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, '_animator')
  request.r(i761[2], i761[3], 0, i760, '_detector')
  var i763 = i761[4]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Harvesting.Field')))
  for(var i = 0; i < i763.length; i += 2) {
  request.r(i763[i + 0], i763[i + 1], 1, i762, '')
  }
  i760._fields = i762
  request.r(i761[5], i761[6], 0, i760, '_inventory')
  return i760
}

Deserializers["_Project.Code.Core.PopcornFarm.CornFarm"] = function (request, data, root) {
  var i766 = root || request.c( '_Project.Code.Core.PopcornFarm.CornFarm' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, '_fillImage')
  request.r(i767[2], i767[3], 0, i766, '_resource')
  request.r(i767[4], i767[5], 0, i766, '_final')
  return i766
}

Deserializers["_Project.Code.Selling.Line.Line"] = function (request, data, root) {
  var i768 = root || request.c( '_Project.Code.Selling.Line.Line' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, '_customerPrefab')
  var i771 = i769[2]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.Animations.AnimatorController')))
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 1, i770, '')
  }
  i768._customerAnimatorControllers = i770
  var i773 = i769[3]
  var i772 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i773.length; i += 2) {
  request.r(i773[i + 0], i773[i + 1], 1, i772, '')
  }
  i768._spawnPoints = i772
  return i768
}

Deserializers["_Project.Code.Selling.Seller"] = function (request, data, root) {
  var i776 = root || request.c( '_Project.Code.Selling.Seller' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, '_moneyPrefab')
  request.r(i777[2], i777[3], 0, i776, '_lineMb')
  request.r(i777[4], i777[5], 0, i776, '_productInventory')
  request.r(i777[6], i777[7], 0, i776, '_moneyInventory')
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i779 = data
  i778.ambientIntensity = i779[0]
  i778.reflectionIntensity = i779[1]
  i778.ambientMode = i779[2]
  i778.ambientLight = new pc.Color(i779[3], i779[4], i779[5], i779[6])
  i778.ambientSkyColor = new pc.Color(i779[7], i779[8], i779[9], i779[10])
  i778.ambientGroundColor = new pc.Color(i779[11], i779[12], i779[13], i779[14])
  i778.ambientEquatorColor = new pc.Color(i779[15], i779[16], i779[17], i779[18])
  i778.fogColor = new pc.Color(i779[19], i779[20], i779[21], i779[22])
  i778.fogEndDistance = i779[23]
  i778.fogStartDistance = i779[24]
  i778.fogDensity = i779[25]
  i778.fog = !!i779[26]
  request.r(i779[27], i779[28], 0, i778, 'skybox')
  i778.fogMode = i779[29]
  var i781 = i779[30]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i781[i + 0]) );
  }
  i778.lightmaps = i780
  i778.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i779[31], i778.lightProbes)
  i778.lightmapsMode = i779[32]
  i778.mixedBakeMode = i779[33]
  i778.environmentLightingMode = i779[34]
  i778.ambientProbe = new pc.SphericalHarmonicsL2(i779[35])
  i778.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i779[36])
  i778.useReferenceAmbientProbe = !!i779[37]
  request.r(i779[38], i779[39], 0, i778, 'customReflection')
  request.r(i779[40], i779[41], 0, i778, 'defaultReflection')
  i778.defaultReflectionMode = i779[42]
  i778.defaultReflectionResolution = i779[43]
  i778.sunLightObjectId = i779[44]
  i778.pixelLightCount = i779[45]
  i778.defaultReflectionHDR = !!i779[46]
  i778.hasLightDataAsset = !!i779[47]
  i778.hasManualGenerate = !!i779[48]
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'lightmapColor')
  request.r(i785[2], i785[3], 0, i784, 'lightmapDirection')
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i786 = root || new UnityEngine.LightProbes()
  var i787 = data
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i795 = data
  var i797 = i795[0]
  var i796 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i797.length; i += 1) {
    i796.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i797[i + 0]));
  }
  i794.ShaderCompilationErrors = i796
  i794.name = i795[1]
  i794.guid = i795[2]
  var i799 = i795[3]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( i799[i + 0] );
  }
  i794.shaderDefinedKeywords = i798
  var i801 = i795[4]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i801[i + 0]) );
  }
  i794.passes = i800
  var i803 = i795[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i803[i + 0]) );
  }
  i794.usePasses = i802
  var i805 = i795[6]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i805[i + 0]) );
  }
  i794.defaultParameterValues = i804
  request.r(i795[7], i795[8], 0, i794, 'unityFallbackShader')
  i794.readDepth = !!i795[9]
  i794.isCreatedByShaderGraph = !!i795[10]
  i794.compiled = !!i795[11]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i809 = data
  i808.shaderName = i809[0]
  i808.errorMessage = i809[1]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i814 = root || new pc.UnityShaderPass()
  var i815 = data
  i814.id = i815[0]
  i814.subShaderIndex = i815[1]
  i814.name = i815[2]
  i814.passType = i815[3]
  i814.grabPassTextureName = i815[4]
  i814.usePass = !!i815[5]
  i814.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[6], i814.zTest)
  i814.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[7], i814.zWrite)
  i814.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[8], i814.culling)
  i814.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i815[9], i814.blending)
  i814.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i815[10], i814.alphaBlending)
  i814.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[11], i814.colorWriteMask)
  i814.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[12], i814.offsetUnits)
  i814.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[13], i814.offsetFactor)
  i814.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[14], i814.stencilRef)
  i814.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[15], i814.stencilReadMask)
  i814.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i815[16], i814.stencilWriteMask)
  i814.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i815[17], i814.stencilOp)
  i814.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i815[18], i814.stencilOpFront)
  i814.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i815[19], i814.stencilOpBack)
  var i817 = i815[20]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i817[i + 0]) );
  }
  i814.tags = i816
  var i819 = i815[21]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i814.passDefinedKeywords = i818
  var i821 = i815[22]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i821[i + 0]) );
  }
  i814.passDefinedKeywordGroups = i820
  var i823 = i815[23]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i823[i + 0]) );
  }
  i814.variants = i822
  var i825 = i815[24]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i825[i + 0]) );
  }
  i814.excludedVariants = i824
  i814.hasDepthReader = !!i815[25]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i827 = data
  i826.val = i827[0]
  i826.name = i827[1]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i829 = data
  i828.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[0], i828.src)
  i828.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[1], i828.dst)
  i828.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i829[2], i828.op)
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i831 = data
  i830.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i831[0], i830.pass)
  i830.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i831[1], i830.fail)
  i830.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i831[2], i830.zFail)
  i830.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i831[3], i830.comp)
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i835 = data
  i834.name = i835[0]
  i834.value = i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i839 = data
  var i841 = i839[0]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( i841[i + 0] );
  }
  i838.keywords = i840
  i838.hasDiscard = !!i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i845 = data
  i844.passId = i845[0]
  i844.subShaderIndex = i845[1]
  var i847 = i845[2]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( i847[i + 0] );
  }
  i844.keywords = i846
  i844.vertexProgram = i845[3]
  i844.fragmentProgram = i845[4]
  i844.exportedForWebGl2 = !!i845[5]
  i844.readDepth = !!i845[6]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i851 = data
  request.r(i851[0], i851[1], 0, i850, 'shader')
  i850.pass = i851[2]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i855 = data
  i854.name = i855[0]
  i854.type = i855[1]
  i854.value = new pc.Vec4( i855[2], i855[3], i855[4], i855[5] )
  i854.textureValue = i855[6]
  i854.shaderPropertyFlag = i855[7]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i857 = data
  i856.name = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'texture')
  i856.aabb = i857[3]
  i856.vertices = i857[4]
  i856.triangles = i857[5]
  i856.textureRect = UnityEngine.Rect.MinMaxRect(i857[6], i857[7], i857[8], i857[9])
  i856.packedRect = UnityEngine.Rect.MinMaxRect(i857[10], i857[11], i857[12], i857[13])
  i856.border = new pc.Vec4( i857[14], i857[15], i857[16], i857[17] )
  i856.transparency = i857[18]
  i856.bounds = i857[19]
  i856.pixelsPerUnit = i857[20]
  i856.textureWidth = i857[21]
  i856.textureHeight = i857[22]
  i856.nativeSize = new pc.Vec2( i857[23], i857[24] )
  i856.pivot = new pc.Vec2( i857[25], i857[26] )
  i856.textureRectOffset = new pc.Vec2( i857[27], i857[28] )
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i859 = data
  i858.name = i859[0]
  i858.wrapMode = i859[1]
  i858.isLooping = !!i859[2]
  i858.length = i859[3]
  var i861 = i859[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i861[i + 0]) );
  }
  i858.curves = i860
  var i863 = i859[5]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i863[i + 0]) );
  }
  i858.events = i862
  i858.halfPrecision = !!i859[6]
  i858._frameRate = i859[7]
  i858.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i859[8], i858.localBounds)
  i858.hasMuscleCurves = !!i859[9]
  var i865 = i859[10]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( i865[i + 0] );
  }
  i858.clipMuscleConstant = i864
  i858.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i859[11], i858.clipBindingConstant)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i869 = data
  i868.path = i869[0]
  i868.hash = i869[1]
  i868.componentType = i869[2]
  i868.property = i869[3]
  i868.keys = i869[4]
  var i871 = i869[5]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i871[i + 0]) );
  }
  i868.objectReferenceKeys = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i875 = data
  i874.time = i875[0]
  request.r(i875[1], i875[2], 0, i874, 'value')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i879 = data
  i878.functionName = i879[0]
  i878.floatParameter = i879[1]
  i878.intParameter = i879[2]
  i878.stringParameter = i879[3]
  request.r(i879[4], i879[5], 0, i878, 'objectReferenceParameter')
  i878.time = i879[6]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i881 = data
  i880.center = new pc.Vec3( i881[0], i881[1], i881[2] )
  i880.extends = new pc.Vec3( i881[3], i881[4], i881[5] )
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i885 = data
  var i887 = i885[0]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i884.genericBindings = i886
  var i889 = i885[1]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( i889[i + 0] );
  }
  i884.pptrCurveMapping = i888
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i891 = data
  i890.name = i891[0]
  i890.ascent = i891[1]
  i890.originalLineHeight = i891[2]
  i890.fontSize = i891[3]
  var i893 = i891[4]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i893[i + 0]) );
  }
  i890.characterInfo = i892
  request.r(i891[5], i891[6], 0, i890, 'texture')
  i890.originalFontSize = i891[7]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i897 = data
  i896.index = i897[0]
  i896.advance = i897[1]
  i896.bearing = i897[2]
  i896.glyphWidth = i897[3]
  i896.glyphHeight = i897[4]
  i896.minX = i897[5]
  i896.maxX = i897[6]
  i896.minY = i897[7]
  i896.maxY = i897[8]
  i896.uvBottomLeftX = i897[9]
  i896.uvBottomLeftY = i897[10]
  i896.uvBottomRightX = i897[11]
  i896.uvBottomRightY = i897[12]
  i896.uvTopLeftX = i897[13]
  i896.uvTopLeftY = i897[14]
  i896.uvTopRightX = i897[15]
  i896.uvTopRightY = i897[16]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i899 = data
  i898.name = i899[0]
  var i901 = i899[1]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i901[i + 0]) );
  }
  i898.layers = i900
  var i903 = i899[2]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i903[i + 0]) );
  }
  i898.parameters = i902
  i898.animationClips = i899[3]
  i898.avatarUnsupported = i899[4]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i907 = data
  i906.name = i907[0]
  i906.defaultWeight = i907[1]
  i906.blendingMode = i907[2]
  i906.avatarMask = i907[3]
  i906.syncedLayerIndex = i907[4]
  i906.syncedLayerAffectsTiming = !!i907[5]
  i906.syncedLayers = i907[6]
  i906.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i907[7], i906.stateMachine)
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i909 = data
  i908.id = i909[0]
  i908.name = i909[1]
  i908.path = i909[2]
  var i911 = i909[3]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i911[i + 0]) );
  }
  i908.states = i910
  var i913 = i909[4]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i913[i + 0]) );
  }
  i908.machines = i912
  var i915 = i909[5]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i915[i + 0]) );
  }
  i908.entryStateTransitions = i914
  var i917 = i909[6]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i917[i + 0]) );
  }
  i908.exitStateTransitions = i916
  var i919 = i909[7]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i919[i + 0]) );
  }
  i908.anyStateTransitions = i918
  i908.defaultStateId = i909[8]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i923 = data
  i922.id = i923[0]
  i922.name = i923[1]
  i922.cycleOffset = i923[2]
  i922.cycleOffsetParameter = i923[3]
  i922.cycleOffsetParameterActive = !!i923[4]
  i922.mirror = !!i923[5]
  i922.mirrorParameter = i923[6]
  i922.mirrorParameterActive = !!i923[7]
  i922.motionId = i923[8]
  i922.nameHash = i923[9]
  i922.fullPathHash = i923[10]
  i922.speed = i923[11]
  i922.speedParameter = i923[12]
  i922.speedParameterActive = !!i923[13]
  i922.tag = i923[14]
  i922.tagHash = i923[15]
  i922.writeDefaultValues = !!i923[16]
  var i925 = i923[17]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i922.behaviours = i924
  var i927 = i923[18]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i927[i + 0]) );
  }
  i922.transitions = i926
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i933 = data
  i932.fullPath = i933[0]
  i932.canTransitionToSelf = !!i933[1]
  i932.duration = i933[2]
  i932.exitTime = i933[3]
  i932.hasExitTime = !!i933[4]
  i932.hasFixedDuration = !!i933[5]
  i932.interruptionSource = i933[6]
  i932.offset = i933[7]
  i932.orderedInterruption = !!i933[8]
  i932.destinationStateId = i933[9]
  i932.isExit = !!i933[10]
  i932.mute = !!i933[11]
  i932.solo = !!i933[12]
  var i935 = i933[13]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i935[i + 0]) );
  }
  i932.conditions = i934
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i941 = data
  i940.destinationStateId = i941[0]
  i940.isExit = !!i941[1]
  i940.mute = !!i941[2]
  i940.solo = !!i941[3]
  var i943 = i941[4]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i943[i + 0]) );
  }
  i940.conditions = i942
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i947 = data
  i946.mode = i947[0]
  i946.parameter = i947[1]
  i946.threshold = i947[2]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i951 = data
  i950.defaultBool = !!i951[0]
  i950.defaultFloat = i951[1]
  i950.defaultInt = i951[2]
  i950.name = i951[3]
  i950.nameHash = i951[4]
  i950.type = i951[5]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i953 = data
  i952.name = i953[0]
  i952.bytes64 = i953[1]
  i952.data = i953[2]
  return i952
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i954 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i955 = data
  i954.hashCode = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'material')
  i954.materialHashCode = i955[3]
  request.r(i955[4], i955[5], 0, i954, 'atlas')
  i954.normalStyle = i955[6]
  i954.normalSpacingOffset = i955[7]
  i954.boldStyle = i955[8]
  i954.boldSpacing = i955[9]
  i954.italicStyle = i955[10]
  i954.tabSize = i955[11]
  i954.m_Version = i955[12]
  i954.m_SourceFontFileGUID = i955[13]
  request.r(i955[14], i955[15], 0, i954, 'm_SourceFontFile_EditorRef')
  request.r(i955[16], i955[17], 0, i954, 'm_SourceFontFile')
  i954.m_AtlasPopulationMode = i955[18]
  i954.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i955[19], i954.m_FaceInfo)
  var i957 = i955[20]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('UnityEngine.TextCore.Glyph', i957[i + 0]));
  }
  i954.m_GlyphTable = i956
  var i959 = i955[21]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('TMPro.TMP_Character', i959[i + 0]));
  }
  i954.m_CharacterTable = i958
  var i961 = i955[22]
  var i960 = []
  for(var i = 0; i < i961.length; i += 2) {
  request.r(i961[i + 0], i961[i + 1], 2, i960, '')
  }
  i954.m_AtlasTextures = i960
  i954.m_AtlasTextureIndex = i955[23]
  i954.m_IsMultiAtlasTexturesEnabled = !!i955[24]
  i954.m_ClearDynamicDataOnBuild = !!i955[25]
  var i963 = i955[26]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i963.length; i += 1) {
    i962.add(request.d('UnityEngine.TextCore.GlyphRect', i963[i + 0]));
  }
  i954.m_UsedGlyphRects = i962
  var i965 = i955[27]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i965.length; i += 1) {
    i964.add(request.d('UnityEngine.TextCore.GlyphRect', i965[i + 0]));
  }
  i954.m_FreeGlyphRects = i964
  i954.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i955[28], i954.m_fontInfo)
  i954.m_AtlasWidth = i955[29]
  i954.m_AtlasHeight = i955[30]
  i954.m_AtlasPadding = i955[31]
  i954.m_AtlasRenderMode = i955[32]
  var i967 = i955[33]
  var i966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i967.length; i += 1) {
    i966.add(request.d('TMPro.TMP_Glyph', i967[i + 0]));
  }
  i954.m_glyphInfoList = i966
  i954.m_KerningTable = request.d('TMPro.KerningTable', i955[34], i954.m_KerningTable)
  i954.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i955[35], i954.m_FontFeatureTable)
  var i969 = i955[36]
  var i968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i969.length; i += 2) {
  request.r(i969[i + 0], i969[i + 1], 1, i968, '')
  }
  i954.fallbackFontAssets = i968
  var i971 = i955[37]
  var i970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i971.length; i += 2) {
  request.r(i971[i + 0], i971[i + 1], 1, i970, '')
  }
  i954.m_FallbackFontAssetTable = i970
  i954.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i955[38], i954.m_CreationSettings)
  var i973 = i955[39]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('TMPro.TMP_FontWeightPair', i973[i + 0]) );
  }
  i954.m_FontWeightTable = i972
  var i975 = i955[40]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('TMPro.TMP_FontWeightPair', i975[i + 0]) );
  }
  i954.fontWeights = i974
  return i954
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i977 = data
  i976.m_FaceIndex = i977[0]
  i976.m_FamilyName = i977[1]
  i976.m_StyleName = i977[2]
  i976.m_PointSize = i977[3]
  i976.m_Scale = i977[4]
  i976.m_UnitsPerEM = i977[5]
  i976.m_LineHeight = i977[6]
  i976.m_AscentLine = i977[7]
  i976.m_CapLine = i977[8]
  i976.m_MeanLine = i977[9]
  i976.m_Baseline = i977[10]
  i976.m_DescentLine = i977[11]
  i976.m_SuperscriptOffset = i977[12]
  i976.m_SuperscriptSize = i977[13]
  i976.m_SubscriptOffset = i977[14]
  i976.m_SubscriptSize = i977[15]
  i976.m_UnderlineOffset = i977[16]
  i976.m_UnderlineThickness = i977[17]
  i976.m_StrikethroughOffset = i977[18]
  i976.m_StrikethroughThickness = i977[19]
  i976.m_TabWidth = i977[20]
  return i976
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i980 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i981 = data
  i980.m_Index = i981[0]
  i980.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i981[1], i980.m_Metrics)
  i980.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i981[2], i980.m_GlyphRect)
  i980.m_Scale = i981[3]
  i980.m_AtlasIndex = i981[4]
  i980.m_ClassDefinitionType = i981[5]
  return i980
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i982 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i983 = data
  i982.m_Width = i983[0]
  i982.m_Height = i983[1]
  i982.m_HorizontalBearingX = i983[2]
  i982.m_HorizontalBearingY = i983[3]
  i982.m_HorizontalAdvance = i983[4]
  return i982
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i984 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i985 = data
  i984.m_X = i985[0]
  i984.m_Y = i985[1]
  i984.m_Width = i985[2]
  i984.m_Height = i985[3]
  return i984
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.TMP_Character' )
  var i989 = data
  i988.m_ElementType = i989[0]
  i988.m_Unicode = i989[1]
  i988.m_GlyphIndex = i989[2]
  i988.m_Scale = i989[3]
  return i988
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i995 = data
  i994.Name = i995[0]
  i994.PointSize = i995[1]
  i994.Scale = i995[2]
  i994.CharacterCount = i995[3]
  i994.LineHeight = i995[4]
  i994.Baseline = i995[5]
  i994.Ascender = i995[6]
  i994.CapHeight = i995[7]
  i994.Descender = i995[8]
  i994.CenterLine = i995[9]
  i994.SuperscriptOffset = i995[10]
  i994.SubscriptOffset = i995[11]
  i994.SubSize = i995[12]
  i994.Underline = i995[13]
  i994.UnderlineThickness = i995[14]
  i994.strikethrough = i995[15]
  i994.strikethroughThickness = i995[16]
  i994.TabWidth = i995[17]
  i994.Padding = i995[18]
  i994.AtlasWidth = i995[19]
  i994.AtlasHeight = i995[20]
  return i994
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i998 = root || request.c( 'TMPro.TMP_Glyph' )
  var i999 = data
  i998.id = i999[0]
  i998.x = i999[1]
  i998.y = i999[2]
  i998.width = i999[3]
  i998.height = i999[4]
  i998.xOffset = i999[5]
  i998.yOffset = i999[6]
  i998.xAdvance = i999[7]
  i998.scale = i999[8]
  return i998
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.KerningTable' )
  var i1001 = data
  var i1003 = i1001[0]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.add(request.d('TMPro.KerningPair', i1003[i + 0]));
  }
  i1000.kerningPairs = i1002
  return i1000
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1006 = root || request.c( 'TMPro.KerningPair' )
  var i1007 = data
  i1006.xOffset = i1007[0]
  i1006.m_FirstGlyph = i1007[1]
  i1006.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1007[2], i1006.m_FirstGlyphAdjustments)
  i1006.m_SecondGlyph = i1007[3]
  i1006.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1007[4], i1006.m_SecondGlyphAdjustments)
  i1006.m_IgnoreSpacingAdjustments = !!i1007[5]
  return i1006
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1009 = data
  var i1011 = i1009[0]
  var i1010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1011[i + 0]));
  }
  i1008.m_GlyphPairAdjustmentRecords = i1010
  return i1008
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1014 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1015 = data
  i1014.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1015[0], i1014.m_FirstAdjustmentRecord)
  i1014.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1015[1], i1014.m_SecondAdjustmentRecord)
  i1014.m_FeatureLookupFlags = i1015[2]
  return i1014
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1017 = data
  i1016.m_GlyphIndex = i1017[0]
  i1016.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1017[1], i1016.m_GlyphValueRecord)
  return i1016
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1018 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1019 = data
  i1018.m_XPlacement = i1019[0]
  i1018.m_YPlacement = i1019[1]
  i1018.m_XAdvance = i1019[2]
  i1018.m_YAdvance = i1019[3]
  return i1018
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1022 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1023 = data
  i1022.sourceFontFileName = i1023[0]
  i1022.sourceFontFileGUID = i1023[1]
  i1022.pointSizeSamplingMode = i1023[2]
  i1022.pointSize = i1023[3]
  i1022.padding = i1023[4]
  i1022.packingMode = i1023[5]
  i1022.atlasWidth = i1023[6]
  i1022.atlasHeight = i1023[7]
  i1022.characterSetSelectionMode = i1023[8]
  i1022.characterSequence = i1023[9]
  i1022.referencedFontAssetGUID = i1023[10]
  i1022.referencedTextAssetGUID = i1023[11]
  i1022.fontStyle = i1023[12]
  i1022.fontStyleModifier = i1023[13]
  i1022.renderMode = i1023[14]
  i1022.includeFontFeatures = !!i1023[15]
  return i1022
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1027 = data
  request.r(i1027[0], i1027[1], 0, i1026, 'regularTypeface')
  request.r(i1027[2], i1027[3], 0, i1026, 'italicTypeface')
  return i1026
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig"] = function (request, data, root) {
  var i1028 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig' )
  var i1029 = data
  var i1031 = i1029[0]
  var i1030 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Character.DirectedAnimation')))
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.add(request.d('_Project.Code.Core.Character.DirectedAnimation', i1031[i + 0]));
  }
  i1028.Animations = i1030
  return i1028
}

Deserializers["_Project.Code.Core.Character.DirectedAnimation"] = function (request, data, root) {
  var i1034 = root || request.c( '_Project.Code.Core.Character.DirectedAnimation' )
  var i1035 = data
  request.r(i1035[0], i1035[1], 0, i1034, 'Clip')
  i1034.Direction = new pc.Vec2( i1035[2], i1035[3] )
  i1034.Flip = !!i1035[4]
  return i1034
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1037 = data
  i1036.useSafeMode = !!i1037[0]
  i1036.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1037[1], i1036.safeModeOptions)
  i1036.timeScale = i1037[2]
  i1036.unscaledTimeScale = i1037[3]
  i1036.useSmoothDeltaTime = !!i1037[4]
  i1036.maxSmoothUnscaledTime = i1037[5]
  i1036.rewindCallbackMode = i1037[6]
  i1036.showUnityEditorReport = !!i1037[7]
  i1036.logBehaviour = i1037[8]
  i1036.drawGizmos = !!i1037[9]
  i1036.defaultRecyclable = !!i1037[10]
  i1036.defaultAutoPlay = i1037[11]
  i1036.defaultUpdateType = i1037[12]
  i1036.defaultTimeScaleIndependent = !!i1037[13]
  i1036.defaultEaseType = i1037[14]
  i1036.defaultEaseOvershootOrAmplitude = i1037[15]
  i1036.defaultEasePeriod = i1037[16]
  i1036.defaultAutoKill = !!i1037[17]
  i1036.defaultLoopType = i1037[18]
  i1036.debugMode = !!i1037[19]
  i1036.debugStoreTargetId = !!i1037[20]
  i1036.showPreviewPanel = !!i1037[21]
  i1036.storeSettingsLocation = i1037[22]
  i1036.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1037[23], i1036.modules)
  i1036.createASMDEF = !!i1037[24]
  i1036.showPlayingTweens = !!i1037[25]
  i1036.showPausedTweens = !!i1037[26]
  return i1036
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1038 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1039 = data
  i1038.logBehaviour = i1039[0]
  i1038.nestedTweenFailureBehaviour = i1039[1]
  return i1038
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1040 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1041 = data
  i1040.showPanel = !!i1041[0]
  i1040.audioEnabled = !!i1041[1]
  i1040.physicsEnabled = !!i1041[2]
  i1040.physics2DEnabled = !!i1041[3]
  i1040.spriteEnabled = !!i1041[4]
  i1040.uiEnabled = !!i1041[5]
  i1040.textMeshProEnabled = !!i1041[6]
  i1040.tk2DEnabled = !!i1041[7]
  i1040.deAudioEnabled = !!i1041[8]
  i1040.deUnityExtendedEnabled = !!i1041[9]
  i1040.epoOutlineEnabled = !!i1041[10]
  return i1040
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_Settings' )
  var i1043 = data
  i1042.m_enableWordWrapping = !!i1043[0]
  i1042.m_enableKerning = !!i1043[1]
  i1042.m_enableExtraPadding = !!i1043[2]
  i1042.m_enableTintAllSprites = !!i1043[3]
  i1042.m_enableParseEscapeCharacters = !!i1043[4]
  i1042.m_EnableRaycastTarget = !!i1043[5]
  i1042.m_GetFontFeaturesAtRuntime = !!i1043[6]
  i1042.m_missingGlyphCharacter = i1043[7]
  i1042.m_warningsDisabled = !!i1043[8]
  request.r(i1043[9], i1043[10], 0, i1042, 'm_defaultFontAsset')
  i1042.m_defaultFontAssetPath = i1043[11]
  i1042.m_defaultFontSize = i1043[12]
  i1042.m_defaultAutoSizeMinRatio = i1043[13]
  i1042.m_defaultAutoSizeMaxRatio = i1043[14]
  i1042.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1043[15], i1043[16] )
  i1042.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1043[17], i1043[18] )
  i1042.m_autoSizeTextContainer = !!i1043[19]
  i1042.m_IsTextObjectScaleStatic = !!i1043[20]
  var i1045 = i1043[21]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1045.length; i += 2) {
  request.r(i1045[i + 0], i1045[i + 1], 1, i1044, '')
  }
  i1042.m_fallbackFontAssets = i1044
  i1042.m_matchMaterialPreset = !!i1043[22]
  request.r(i1043[23], i1043[24], 0, i1042, 'm_defaultSpriteAsset')
  i1042.m_defaultSpriteAssetPath = i1043[25]
  i1042.m_enableEmojiSupport = !!i1043[26]
  i1042.m_MissingCharacterSpriteUnicode = i1043[27]
  i1042.m_defaultColorGradientPresetsPath = i1043[28]
  request.r(i1043[29], i1043[30], 0, i1042, 'm_defaultStyleSheet')
  i1042.m_StyleSheetsResourcePath = i1043[31]
  request.r(i1043[32], i1043[33], 0, i1042, 'm_leadingCharacters')
  request.r(i1043[34], i1043[35], 0, i1042, 'm_followingCharacters')
  i1042.m_UseModernHangulLineBreakingRules = !!i1043[36]
  return i1042
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1047 = data
  i1046.hashCode = i1047[0]
  request.r(i1047[1], i1047[2], 0, i1046, 'material')
  i1046.materialHashCode = i1047[3]
  request.r(i1047[4], i1047[5], 0, i1046, 'spriteSheet')
  var i1049 = i1047[6]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('TMPro.TMP_Sprite', i1049[i + 0]));
  }
  i1046.spriteInfoList = i1048
  var i1051 = i1047[7]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1051.length; i += 2) {
  request.r(i1051[i + 0], i1051[i + 1], 1, i1050, '')
  }
  i1046.fallbackSpriteAssets = i1050
  i1046.m_Version = i1047[8]
  i1046.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1047[9], i1046.m_FaceInfo)
  var i1053 = i1047[10]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.TMP_SpriteCharacter', i1053[i + 0]));
  }
  i1046.m_SpriteCharacterTable = i1052
  var i1055 = i1047[11]
  var i1054 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.add(request.d('TMPro.TMP_SpriteGlyph', i1055[i + 0]));
  }
  i1046.m_SpriteGlyphTable = i1054
  return i1046
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.hashCode = i1059[1]
  i1058.unicode = i1059[2]
  i1058.pivot = new pc.Vec2( i1059[3], i1059[4] )
  request.r(i1059[5], i1059[6], 0, i1058, 'sprite')
  i1058.id = i1059[7]
  i1058.x = i1059[8]
  i1058.y = i1059[9]
  i1058.width = i1059[10]
  i1058.height = i1059[11]
  i1058.xOffset = i1059[12]
  i1058.yOffset = i1059[13]
  i1058.xAdvance = i1059[14]
  i1058.scale = i1059[15]
  return i1058
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1065 = data
  i1064.m_Name = i1065[0]
  i1064.m_HashCode = i1065[1]
  i1064.m_ElementType = i1065[2]
  i1064.m_Unicode = i1065[3]
  i1064.m_GlyphIndex = i1065[4]
  i1064.m_Scale = i1065[5]
  return i1064
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1069 = data
  request.r(i1069[0], i1069[1], 0, i1068, 'sprite')
  i1068.m_Index = i1069[2]
  i1068.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1069[3], i1068.m_Metrics)
  i1068.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1069[4], i1068.m_GlyphRect)
  i1068.m_Scale = i1069[5]
  i1068.m_AtlasIndex = i1069[6]
  i1068.m_ClassDefinitionType = i1069[7]
  return i1068
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1070 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('TMPro.TMP_Style', i1073[i + 0]));
  }
  i1070.m_StyleList = i1072
  return i1070
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_Style' )
  var i1077 = data
  i1076.m_Name = i1077[0]
  i1076.m_HashCode = i1077[1]
  i1076.m_OpeningDefinition = i1077[2]
  i1076.m_ClosingDefinition = i1077[3]
  i1076.m_OpeningTagArray = i1077[4]
  i1076.m_ClosingTagArray = i1077[5]
  i1076.m_OpeningTagUnicodeArray = i1077[6]
  i1076.m_ClosingTagUnicodeArray = i1077[7]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1081[i + 0]) );
  }
  i1078.files = i1080
  i1078.componentToPrefabIds = i1079[1]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1085 = data
  i1084.path = i1085[0]
  request.r(i1085[1], i1085[2], 0, i1084, 'unityObject')
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1089[i + 0]) );
  }
  i1086.scriptsExecutionOrder = i1088
  var i1091 = i1087[1]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1091[i + 0]) );
  }
  i1086.sortingLayers = i1090
  var i1093 = i1087[2]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1093[i + 0]) );
  }
  i1086.cullingLayers = i1092
  i1086.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1087[3], i1086.timeSettings)
  i1086.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1087[4], i1086.physicsSettings)
  i1086.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1087[5], i1086.physics2DSettings)
  i1086.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1087[6], i1086.qualitySettings)
  i1086.enableRealtimeShadows = !!i1087[7]
  i1086.enableAutoInstancing = !!i1087[8]
  i1086.enableDynamicBatching = !!i1087[9]
  i1086.lightmapEncodingQuality = i1087[10]
  i1086.desiredColorSpace = i1087[11]
  var i1095 = i1087[12]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( i1095[i + 0] );
  }
  i1086.allTags = i1094
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1099 = data
  i1098.name = i1099[0]
  i1098.value = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1103 = data
  i1102.id = i1103[0]
  i1102.name = i1103[1]
  i1102.value = i1103[2]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1107 = data
  i1106.id = i1107[0]
  i1106.name = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1109 = data
  i1108.fixedDeltaTime = i1109[0]
  i1108.maximumDeltaTime = i1109[1]
  i1108.timeScale = i1109[2]
  i1108.maximumParticleTimestep = i1109[3]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1111 = data
  i1110.gravity = new pc.Vec3( i1111[0], i1111[1], i1111[2] )
  i1110.defaultSolverIterations = i1111[3]
  i1110.bounceThreshold = i1111[4]
  i1110.autoSyncTransforms = !!i1111[5]
  i1110.autoSimulation = !!i1111[6]
  var i1113 = i1111[7]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1113[i + 0]) );
  }
  i1110.collisionMatrix = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1117 = data
  i1116.enabled = !!i1117[0]
  i1116.layerId = i1117[1]
  i1116.otherLayerId = i1117[2]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'material')
  i1118.gravity = new pc.Vec2( i1119[2], i1119[3] )
  i1118.positionIterations = i1119[4]
  i1118.velocityIterations = i1119[5]
  i1118.velocityThreshold = i1119[6]
  i1118.maxLinearCorrection = i1119[7]
  i1118.maxAngularCorrection = i1119[8]
  i1118.maxTranslationSpeed = i1119[9]
  i1118.maxRotationSpeed = i1119[10]
  i1118.baumgarteScale = i1119[11]
  i1118.baumgarteTOIScale = i1119[12]
  i1118.timeToSleep = i1119[13]
  i1118.linearSleepTolerance = i1119[14]
  i1118.angularSleepTolerance = i1119[15]
  i1118.defaultContactOffset = i1119[16]
  i1118.autoSimulation = !!i1119[17]
  i1118.queriesHitTriggers = !!i1119[18]
  i1118.queriesStartInColliders = !!i1119[19]
  i1118.callbacksOnDisable = !!i1119[20]
  i1118.reuseCollisionCallbacks = !!i1119[21]
  i1118.autoSyncTransforms = !!i1119[22]
  var i1121 = i1119[23]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1121[i + 0]) );
  }
  i1118.collisionMatrix = i1120
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1125 = data
  i1124.enabled = !!i1125[0]
  i1124.layerId = i1125[1]
  i1124.otherLayerId = i1125[2]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1127 = data
  var i1129 = i1127[0]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1129[i + 0]) );
  }
  i1126.qualityLevels = i1128
  var i1131 = i1127[1]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.names = i1130
  i1126.shadows = i1127[2]
  i1126.anisotropicFiltering = i1127[3]
  i1126.antiAliasing = i1127[4]
  i1126.lodBias = i1127[5]
  i1126.shadowCascades = i1127[6]
  i1126.shadowDistance = i1127[7]
  i1126.shadowmaskMode = i1127[8]
  i1126.shadowProjection = i1127[9]
  i1126.shadowResolution = i1127[10]
  i1126.softParticles = !!i1127[11]
  i1126.softVegetation = !!i1127[12]
  i1126.activeColorSpace = i1127[13]
  i1126.desiredColorSpace = i1127[14]
  i1126.masterTextureLimit = i1127[15]
  i1126.maxQueuedFrames = i1127[16]
  i1126.particleRaycastBudget = i1127[17]
  i1126.pixelLightCount = i1127[18]
  i1126.realtimeReflectionProbes = !!i1127[19]
  i1126.shadowCascade2Split = i1127[20]
  i1126.shadowCascade4Split = new pc.Vec3( i1127[21], i1127[22], i1127[23] )
  i1126.streamingMipmapsActive = !!i1127[24]
  i1126.vSyncCount = i1127[25]
  i1126.asyncUploadBufferSize = i1127[26]
  i1126.asyncUploadTimeSlice = i1127[27]
  i1126.billboardsFaceCameraPosition = !!i1127[28]
  i1126.shadowNearPlaneOffset = i1127[29]
  i1126.streamingMipmapsMemoryBudget = i1127[30]
  i1126.maximumLODLevel = i1127[31]
  i1126.streamingMipmapsAddAllCameras = !!i1127[32]
  i1126.streamingMipmapsMaxLevelReduction = i1127[33]
  i1126.streamingMipmapsRenderersPerFrame = i1127[34]
  i1126.resolutionScalingFixedDPIFactor = i1127[35]
  i1126.streamingMipmapsMaxFileIORequests = i1127[36]
  i1126.currentQualityLevel = i1127[37]
  return i1126
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1134 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1135 = data
  i1134.xPlacement = i1135[0]
  i1134.yPlacement = i1135[1]
  i1134.xAdvance = i1135[2]
  i1134.yAdvance = i1135[3]
  return i1134
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[75],"76":[35],"77":[78],"79":[78],"80":[78],"81":[78],"82":[78],"83":[78],"84":[78],"85":[13],"86":[13],"87":[13],"88":[13],"89":[13],"90":[13],"91":[13],"92":[13],"93":[13],"94":[13],"95":[13],"96":[13],"97":[13],"98":[35],"99":[100],"101":[102],"103":[102],"32":[21],"104":[43],"41":[43],"30":[2],"19":[1],"105":[106],"107":[2],"108":[106],"109":[21],"110":[21],"34":[32],"26":[22,21],"111":[21],"33":[32],"112":[21],"113":[21],"114":[21],"115":[21],"116":[21],"117":[21],"118":[21],"50":[21],"119":[21],"120":[22,21],"121":[21],"122":[21],"123":[21],"124":[21],"125":[22,21],"126":[21],"127":[53],"128":[53],"54":[53],"129":[53],"130":[35],"131":[35],"132":[133],"134":[35],"135":[21],"136":[100,21],"24":[21,22],"137":[21],"138":[22,21],"139":[100],"140":[22,21],"141":[21],"142":[106]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","_Project.Code.Core.Character.CharacterInstaller","_Project.Code.Core.Character.Mover","_Project.Code.Core.Collision.OverlapCollisionDetector","_Project.Code.Core.Character.CharacterAnimator","_Project.Code.Core.Items.Inventory.ItemInventory","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","_Project.Code.Core.Character.TopDownAnimator","_Project.Code.Core.Character.TopDownAnimationConfig","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","_Project.Code.Core.Character.SortingGroupAnimator","_Project.Code.Core.Items.Inventory.ColumnInventoryView","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","_Project.Code.Core.Items.Item","_Project.Code.Core.Harvesting.Field","_Project.Code.Core.Items.InventoryInitializer","_Project.Code.Selling.Customer","_Project.Code.Selling.Line.BubbleView","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.PolygonCollider2D","UnityEngine.BoxCollider2D","_Project.Code.Camera.Follower","_Project.Code.Camera.CameraInBordersZoom","_Project.Code.Entry.EntryPoint","VariableJoystick","_Project.Code.Services.CoroutineRunner.CoroutineRunner","_Project.Code.Core.Buyables.EndScreenShower","_Project.Code.Core.Buyables.Buyable","UnityEngine.GameObject","_Project.Code.Tutorial.Tutorial","UnityEngine.EdgeCollider2D","ArrowAnimator","UnityEngine.UI.Mask","_Project.Code.Core.Buyables.CoinsViewUpdater","_Project.Code.Core.Animations.BreathAnimation","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","_Project.Code.Core.Buyables.InventorViewDestroyer","_Project.Code.Core.Workers.Worker","_Project.Code.Core.PopcornFarm.CornFarm","_Project.Code.Selling.Line.Line","_Project.Code.Selling.Seller","UnityEngine.Font","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","_Project.Code.Entry.Entry","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "SpongeBob-Playable";

Deserializers.lunaInitializationTime = "03/18/2025 07:46:22";

Deserializers.lunaDaysRunning = "8.9";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "SBA";

Deserializers.lunaAppID = "28018";

Deserializers.projectId = "b0f9f364381b82c4293fa128685c1068";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.7\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1740";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4397";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "cf7fb521-3df2-4164-8e06-d94c7fa84e85";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

