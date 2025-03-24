var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointSpring' )
  var i597 = data
  i596.spring = i597[0]
  i596.damper = i597[1]
  i596.targetPosition = i597[2]
  return i596
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointMotor' )
  var i599 = data
  i598.m_TargetVelocity = i599[0]
  i598.m_Force = i599[1]
  i598.m_FreeSpin = i599[2]
  return i598
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointLimits' )
  var i601 = data
  i600.m_Min = i601[0]
  i600.m_Max = i601[1]
  i600.m_Bounciness = i601[2]
  i600.m_BounceMinVelocity = i601[3]
  i600.m_ContactDistance = i601[4]
  i600.minBounce = i601[5]
  i600.maxBounce = i601[6]
  return i600
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointDrive' )
  var i603 = data
  i602.m_PositionSpring = i603[0]
  i602.m_PositionDamper = i603[1]
  i602.m_MaximumForce = i603[2]
  i602.m_UseAcceleration = i603[3]
  return i602
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i605 = data
  i604.m_Spring = i605[0]
  i604.m_Damper = i605[1]
  return i604
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i607 = data
  i606.m_Limit = i607[0]
  i606.m_Bounciness = i607[1]
  i606.m_ContactDistance = i607[2]
  return i606
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i609 = data
  i608.m_ExtremumSlip = i609[0]
  i608.m_ExtremumValue = i609[1]
  i608.m_AsymptoteSlip = i609[2]
  i608.m_AsymptoteValue = i609[3]
  i608.m_Stiffness = i609[4]
  return i608
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i611 = data
  i610.m_LowerAngle = i611[0]
  i610.m_UpperAngle = i611[1]
  return i610
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i613 = data
  i612.m_MotorSpeed = i613[0]
  i612.m_MaximumMotorTorque = i613[1]
  return i612
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i615 = data
  i614.m_DampingRatio = i615[0]
  i614.m_Frequency = i615[1]
  i614.m_Angle = i615[2]
  return i614
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i617 = data
  i616.m_LowerTranslation = i617[0]
  i616.m_UpperTranslation = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i619 = data
  i618.name = i619[0]
  i618.width = i619[1]
  i618.height = i619[2]
  i618.mipmapCount = i619[3]
  i618.anisoLevel = i619[4]
  i618.filterMode = i619[5]
  i618.hdr = !!i619[6]
  i618.format = i619[7]
  i618.wrapMode = i619[8]
  i618.alphaIsTransparency = !!i619[9]
  i618.alphaSource = i619[10]
  i618.graphicsFormat = i619[11]
  i618.sRGBTexture = !!i619[12]
  i618.desiredColorSpace = i619[13]
  i618.wrapU = i619[14]
  i618.wrapV = i619[15]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i620 = root || new pc.UnityMaterial()
  var i621 = data
  i620.name = i621[0]
  request.r(i621[1], i621[2], 0, i620, 'shader')
  i620.renderQueue = i621[3]
  i620.enableInstancing = !!i621[4]
  var i623 = i621[5]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i623[i + 0]) );
  }
  i620.floatParameters = i622
  var i625 = i621[6]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i625[i + 0]) );
  }
  i620.colorParameters = i624
  var i627 = i621[7]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i627[i + 0]) );
  }
  i620.vectorParameters = i626
  var i629 = i621[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i629[i + 0]) );
  }
  i620.textureParameters = i628
  var i631 = i621[9]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i631[i + 0]) );
  }
  i620.materialFlags = i630
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i635 = data
  i634.name = i635[0]
  i634.value = i635[1]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i639 = data
  i638.name = i639[0]
  i638.value = new pc.Color(i639[1], i639[2], i639[3], i639[4])
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i643 = data
  i642.name = i643[0]
  i642.value = new pc.Vec4( i643[1], i643[2], i643[3], i643[4] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i647 = data
  i646.name = i647[0]
  request.r(i647[1], i647[2], 0, i646, 'value')
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i651 = data
  i650.name = i651[0]
  i650.enabled = !!i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i653 = data
  i652.position = new pc.Vec3( i653[0], i653[1], i653[2] )
  i652.scale = new pc.Vec3( i653[3], i653[4], i653[5] )
  i652.rotation = new pc.Quat(i653[6], i653[7], i653[8], i653[9])
  return i652
}

Deserializers["_Project.Code.Core.Character.CharacterInstaller"] = function (request, data, root) {
  var i654 = root || request.c( '_Project.Code.Core.Character.CharacterInstaller' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, '_mover')
  request.r(i655[2], i655[3], 0, i654, '_castingDetector')
  request.r(i655[4], i655[5], 0, i654, '_animator')
  var i657 = i655[6]
  var i656 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Inventory.ItemInventory')))
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 1, i656, '')
  }
  i654._storages = i656
  return i654
}

Deserializers["_Project.Code.Core.Collision.OverlapCollisionDetector"] = function (request, data, root) {
  var i660 = root || request.c( '_Project.Code.Core.Collision.OverlapCollisionDetector' )
  var i661 = data
  i660.detectionRadius = i661[0]
  i660.collisionMask = UnityEngine.LayerMask.FromIntegerValue( i661[1] )
  return i660
}

Deserializers["_Project.Code.Core.Character.Mover"] = function (request, data, root) {
  var i662 = root || request.c( '_Project.Code.Core.Character.Mover' )
  var i663 = data
  i662._speed = i663[0]
  request.r(i663[1], i663[2], 0, i662, '_rigidbody')
  return i662
}

Deserializers["_Project.Code.Core.Character.CharacterAnimator"] = function (request, data, root) {
  var i664 = root || request.c( '_Project.Code.Core.Character.CharacterAnimator' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, '_animator')
  request.r(i665[2], i665[3], 0, i664, '_transform')
  i664._breathSpeed = i665[4]
  i664._breathScale = i665[5]
  return i664
}

Deserializers["_Project.Code.Core.Character.TopDownAnimator"] = function (request, data, root) {
  var i666 = root || request.c( '_Project.Code.Core.Character.TopDownAnimator' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, '_animator')
  request.r(i667[2], i667[3], 0, i666, '_animationConfig')
  i666._smoothTime = i667[4]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i669 = data
  i668.bodyType = i669[0]
  request.r(i669[1], i669[2], 0, i668, 'material')
  i668.simulated = !!i669[3]
  i668.useAutoMass = !!i669[4]
  i668.mass = i669[5]
  i668.drag = i669[6]
  i668.angularDrag = i669[7]
  i668.gravityScale = i669[8]
  i668.collisionDetectionMode = i669[9]
  i668.sleepMode = i669[10]
  i668.constraints = i669[11]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i671 = data
  i670.radius = i671[0]
  i670.enabled = !!i671[1]
  i670.isTrigger = !!i671[2]
  i670.usedByEffector = !!i671[3]
  i670.density = i671[4]
  i670.offset = new pc.Vec2( i671[5], i671[6] )
  request.r(i671[7], i671[8], 0, i670, 'material')
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'animatorController')
  request.r(i673[2], i673[3], 0, i672, 'avatar')
  i672.updateMode = i673[4]
  i672.hasTransformHierarchy = !!i673[5]
  i672.applyRootMotion = !!i673[6]
  var i675 = i673[7]
  var i674 = []
  for(var i = 0; i < i675.length; i += 2) {
  request.r(i675[i + 0], i675[i + 1], 2, i674, '')
  }
  i672.humanBones = i674
  i672.enabled = !!i673[8]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i679 = data
  i678.enabled = !!i679[0]
  i678.sortingLayerIndex = i679[1]
  i678.sortingOrder = i679[2]
  i678.sortingLayerName = i679[3]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i681 = data
  i680.enabled = !!i681[0]
  request.r(i681[1], i681[2], 0, i680, 'sharedMaterial')
  var i683 = i681[3]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i680.sharedMaterials = i682
  i680.receiveShadows = !!i681[4]
  i680.shadowCastingMode = i681[5]
  i680.sortingLayerID = i681[6]
  i680.sortingOrder = i681[7]
  i680.lightmapIndex = i681[8]
  i680.lightmapSceneIndex = i681[9]
  i680.lightmapScaleOffset = new pc.Vec4( i681[10], i681[11], i681[12], i681[13] )
  i680.lightProbeUsage = i681[14]
  i680.reflectionProbeUsage = i681[15]
  i680.color = new pc.Color(i681[16], i681[17], i681[18], i681[19])
  request.r(i681[20], i681[21], 0, i680, 'sprite')
  i680.flipX = !!i681[22]
  i680.flipY = !!i681[23]
  i680.drawMode = i681[24]
  i680.size = new pc.Vec2( i681[25], i681[26] )
  i680.tileMode = i681[27]
  i680.adaptiveModeThreshold = i681[28]
  i680.maskInteraction = i681[29]
  i680.spriteSortPoint = i681[30]
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i687 = data
  i686.name = i687[0]
  i686.tagId = i687[1]
  i686.enabled = !!i687[2]
  i686.isStatic = !!i687[3]
  i686.layer = i687[4]
  return i686
}

Deserializers["_Project.Code.Core.Character.SortingGroupAnimator"] = function (request, data, root) {
  var i688 = root || request.c( '_Project.Code.Core.Character.SortingGroupAnimator' )
  var i689 = data
  i688._order = i689[0]
  return i688
}

Deserializers["_Project.Code.Core.Items.Inventory.ItemInventory"] = function (request, data, root) {
  var i690 = root || request.c( '_Project.Code.Core.Items.Inventory.ItemInventory' )
  var i691 = data
  i690._type = i691[0]
  i690._inventory = i691[1]
  i690._capacity = i691[2]
  return i690
}

Deserializers["_Project.Code.Core.Items.Inventory.ColumnInventoryView"] = function (request, data, root) {
  var i692 = root || request.c( '_Project.Code.Core.Items.Inventory.ColumnInventoryView' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i695.length; i += 2) {
  request.r(i695[i + 0], i695[i + 1], 1, i694, '')
  }
  i692._columnPoints = i694
  i692._destroyOnEmptied = !!i693[1]
  request.r(i693[2], i693[3], 0, i692, '_inventory')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i699 = data
  i698.pivot = new pc.Vec2( i699[0], i699[1] )
  i698.anchorMin = new pc.Vec2( i699[2], i699[3] )
  i698.anchorMax = new pc.Vec2( i699[4], i699[5] )
  i698.sizeDelta = new pc.Vec2( i699[6], i699[7] )
  i698.anchoredPosition3D = new pc.Vec3( i699[8], i699[9], i699[10] )
  i698.rotation = new pc.Quat(i699[11], i699[12], i699[13], i699[14])
  i698.scale = new pc.Vec3( i699[15], i699[16], i699[17] )
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i701 = data
  i700.cullTransparentMesh = !!i701[0]
  return i700
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i702 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i703 = data
  i702.m_hasFontAssetChanged = !!i703[0]
  request.r(i703[1], i703[2], 0, i702, 'm_baseMaterial')
  i702.m_maskOffset = new pc.Vec4( i703[3], i703[4], i703[5], i703[6] )
  i702.m_text = i703[7]
  i702.m_isRightToLeft = !!i703[8]
  request.r(i703[9], i703[10], 0, i702, 'm_fontAsset')
  request.r(i703[11], i703[12], 0, i702, 'm_sharedMaterial')
  var i705 = i703[13]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.m_fontSharedMaterials = i704
  request.r(i703[14], i703[15], 0, i702, 'm_fontMaterial')
  var i707 = i703[16]
  var i706 = []
  for(var i = 0; i < i707.length; i += 2) {
  request.r(i707[i + 0], i707[i + 1], 2, i706, '')
  }
  i702.m_fontMaterials = i706
  i702.m_fontColor32 = UnityEngine.Color32.ConstructColor(i703[17], i703[18], i703[19], i703[20])
  i702.m_fontColor = new pc.Color(i703[21], i703[22], i703[23], i703[24])
  i702.m_enableVertexGradient = !!i703[25]
  i702.m_colorMode = i703[26]
  i702.m_fontColorGradient = request.d('TMPro.VertexGradient', i703[27], i702.m_fontColorGradient)
  request.r(i703[28], i703[29], 0, i702, 'm_fontColorGradientPreset')
  request.r(i703[30], i703[31], 0, i702, 'm_spriteAsset')
  i702.m_tintAllSprites = !!i703[32]
  request.r(i703[33], i703[34], 0, i702, 'm_StyleSheet')
  i702.m_TextStyleHashCode = i703[35]
  i702.m_overrideHtmlColors = !!i703[36]
  i702.m_faceColor = UnityEngine.Color32.ConstructColor(i703[37], i703[38], i703[39], i703[40])
  i702.m_fontSize = i703[41]
  i702.m_fontSizeBase = i703[42]
  i702.m_fontWeight = i703[43]
  i702.m_enableAutoSizing = !!i703[44]
  i702.m_fontSizeMin = i703[45]
  i702.m_fontSizeMax = i703[46]
  i702.m_fontStyle = i703[47]
  i702.m_HorizontalAlignment = i703[48]
  i702.m_VerticalAlignment = i703[49]
  i702.m_textAlignment = i703[50]
  i702.m_characterSpacing = i703[51]
  i702.m_wordSpacing = i703[52]
  i702.m_lineSpacing = i703[53]
  i702.m_lineSpacingMax = i703[54]
  i702.m_paragraphSpacing = i703[55]
  i702.m_charWidthMaxAdj = i703[56]
  i702.m_enableWordWrapping = !!i703[57]
  i702.m_wordWrappingRatios = i703[58]
  i702.m_overflowMode = i703[59]
  request.r(i703[60], i703[61], 0, i702, 'm_linkedTextComponent')
  request.r(i703[62], i703[63], 0, i702, 'parentLinkedComponent')
  i702.m_enableKerning = !!i703[64]
  i702.m_enableExtraPadding = !!i703[65]
  i702.checkPaddingRequired = !!i703[66]
  i702.m_isRichText = !!i703[67]
  i702.m_parseCtrlCharacters = !!i703[68]
  i702.m_isOrthographic = !!i703[69]
  i702.m_isCullingEnabled = !!i703[70]
  i702.m_horizontalMapping = i703[71]
  i702.m_verticalMapping = i703[72]
  i702.m_uvLineOffset = i703[73]
  i702.m_geometrySortingOrder = i703[74]
  i702.m_IsTextObjectScaleStatic = !!i703[75]
  i702.m_VertexBufferAutoSizeReduction = !!i703[76]
  i702.m_useMaxVisibleDescender = !!i703[77]
  i702.m_pageToDisplay = i703[78]
  i702.m_margin = new pc.Vec4( i703[79], i703[80], i703[81], i703[82] )
  i702.m_isUsingLegacyAnimationComponent = !!i703[83]
  i702.m_isVolumetricText = !!i703[84]
  request.r(i703[85], i703[86], 0, i702, 'm_Material')
  i702.m_Maskable = !!i703[87]
  i702.m_Color = new pc.Color(i703[88], i703[89], i703[90], i703[91])
  i702.m_RaycastTarget = !!i703[92]
  i702.m_RaycastPadding = new pc.Vec4( i703[93], i703[94], i703[95], i703[96] )
  return i702
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i708 = root || request.c( 'TMPro.VertexGradient' )
  var i709 = data
  i708.topLeft = new pc.Color(i709[0], i709[1], i709[2], i709[3])
  i708.topRight = new pc.Color(i709[4], i709[5], i709[6], i709[7])
  i708.bottomLeft = new pc.Color(i709[8], i709[9], i709[10], i709[11])
  i708.bottomRight = new pc.Color(i709[12], i709[13], i709[14], i709[15])
  return i708
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.Image' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Sprite')
  i710.m_Type = i711[2]
  i710.m_PreserveAspect = !!i711[3]
  i710.m_FillCenter = !!i711[4]
  i710.m_FillMethod = i711[5]
  i710.m_FillAmount = i711[6]
  i710.m_FillClockwise = !!i711[7]
  i710.m_FillOrigin = i711[8]
  i710.m_UseSpriteMesh = !!i711[9]
  i710.m_PixelsPerUnitMultiplier = i711[10]
  request.r(i711[11], i711[12], 0, i710, 'm_Material')
  i710.m_Maskable = !!i711[13]
  i710.m_Color = new pc.Color(i711[14], i711[15], i711[16], i711[17])
  i710.m_RaycastTarget = !!i711[18]
  i710.m_RaycastPadding = new pc.Vec4( i711[19], i711[20], i711[21], i711[22] )
  return i710
}

Deserializers["_Project.Code.Core.Items.Item"] = function (request, data, root) {
  var i712 = root || request.c( '_Project.Code.Core.Items.Item' )
  var i713 = data
  request.r(i713[0], i713[1], 0, i712, '_collider')
  i712._type = i713[2]
  return i712
}

Deserializers["_Project.Code.Core.Harvesting.Field"] = function (request, data, root) {
  var i714 = root || request.c( '_Project.Code.Core.Harvesting.Field' )
  var i715 = data
  i714._state = i715[0]
  request.r(i715[1], i715[2], 0, i714, '_plant')
  return i714
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i716 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_LookAt')
  request.r(i717[2], i717[3], 0, i716, 'm_Follow')
  i716.m_Lens = request.d('Cinemachine.LensSettings', i717[4], i716.m_Lens)
  i716.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i717[5], i716.m_Transitions)
  var i719 = i717[6]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i716.m_ExcludedPropertiesInInspector = i718
  var i721 = i717[7]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( i721[i + 0] );
  }
  i716.m_LockStageInInspector = i720
  i716.m_Priority = i717[8]
  i716.m_StandbyUpdate = i717[9]
  i716.m_LegacyBlendHint = i717[10]
  request.r(i717[11], i717[12], 0, i716, 'm_ComponentOwner')
  i716.m_StreamingVersion = i717[13]
  return i716
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i722 = root || request.c( 'Cinemachine.LensSettings' )
  var i723 = data
  i722.FieldOfView = i723[0]
  i722.OrthographicSize = i723[1]
  i722.NearClipPlane = i723[2]
  i722.FarClipPlane = i723[3]
  i722.Dutch = i723[4]
  i722.ModeOverride = i723[5]
  i722.LensShift = new pc.Vec2( i723[6], i723[7] )
  i722.GateFit = i723[8]
  i722.FocusDistance = i723[9]
  i722.m_SensorSize = new pc.Vec2( i723[10], i723[11] )
  return i722
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i724 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i725 = data
  i724.m_BlendHint = i725[0]
  i724.m_InheritPosition = !!i725[1]
  i724.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i725[2], i724.m_OnCameraLive)
  return i724
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i726 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i727 = data
  i726.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i727[0], i726.m_PersistentCalls)
  return i726
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i729 = data
  var i731 = i729[0]
  var i730 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i731.length; i += 1) {
    i730.add(request.d('UnityEngine.Events.PersistentCall', i731[i + 0]));
  }
  i728.m_Calls = i730
  return i728
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_Target')
  i734.m_TargetAssemblyTypeName = i735[2]
  i734.m_MethodName = i735[3]
  i734.m_Mode = i735[4]
  i734.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i735[5], i734.m_Arguments)
  i734.m_CallState = i735[6]
  return i734
}

Deserializers["Cinemachine.CinemachineConfiner2D"] = function (request, data, root) {
  var i740 = root || request.c( 'Cinemachine.CinemachineConfiner2D' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'm_BoundingShape2D')
  i740.m_Damping = i741[2]
  i740.m_MaxWindowSize = i741[3]
  i740.m_Padding = i741[4]
  return i740
}

Deserializers["_Project.Code.Camera.CameraInBordersZoom"] = function (request, data, root) {
  var i742 = root || request.c( '_Project.Code.Camera.CameraInBordersZoom' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, '_borders')
  i742._defaultCameraSize = i743[2]
  return i742
}

Deserializers["_Project.Code.Camera.CinemachineConfinerUpdater"] = function (request, data, root) {
  var i744 = root || request.c( '_Project.Code.Camera.CinemachineConfinerUpdater' )
  var i745 = data
  return i744
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i746 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i747 = data
  return i746
}

Deserializers["Cinemachine.CinemachineFramingTransposer"] = function (request, data, root) {
  var i748 = root || request.c( 'Cinemachine.CinemachineFramingTransposer' )
  var i749 = data
  i748.m_TrackedObjectOffset = new pc.Vec3( i749[0], i749[1], i749[2] )
  i748.m_LookaheadTime = i749[3]
  i748.m_LookaheadSmoothing = i749[4]
  i748.m_LookaheadIgnoreY = !!i749[5]
  i748.m_XDamping = i749[6]
  i748.m_YDamping = i749[7]
  i748.m_ZDamping = i749[8]
  i748.m_TargetMovementOnly = !!i749[9]
  i748.m_ScreenX = i749[10]
  i748.m_ScreenY = i749[11]
  i748.m_CameraDistance = i749[12]
  i748.m_DeadZoneWidth = i749[13]
  i748.m_DeadZoneHeight = i749[14]
  i748.m_DeadZoneDepth = i749[15]
  i748.m_UnlimitedSoftZone = !!i749[16]
  i748.m_SoftZoneWidth = i749[17]
  i748.m_SoftZoneHeight = i749[18]
  i748.m_BiasX = i749[19]
  i748.m_BiasY = i749[20]
  i748.m_CenterOnActivate = !!i749[21]
  i748.m_GroupFramingMode = i749[22]
  i748.m_AdjustmentMode = i749[23]
  i748.m_GroupFramingSize = i749[24]
  i748.m_MaxDollyIn = i749[25]
  i748.m_MaxDollyOut = i749[26]
  i748.m_MinimumDistance = i749[27]
  i748.m_MaximumDistance = i749[28]
  i748.m_MinimumFOV = i749[29]
  i748.m_MaximumFOV = i749[30]
  i748.m_MinimumOrthoSize = i749[31]
  i748.m_MaximumOrthoSize = i749[32]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i751 = data
  i750.enabled = !!i751[0]
  i750.aspect = i751[1]
  i750.orthographic = !!i751[2]
  i750.orthographicSize = i751[3]
  i750.backgroundColor = new pc.Color(i751[4], i751[5], i751[6], i751[7])
  i750.nearClipPlane = i751[8]
  i750.farClipPlane = i751[9]
  i750.fieldOfView = i751[10]
  i750.depth = i751[11]
  i750.clearFlags = i751[12]
  i750.cullingMask = i751[13]
  i750.rect = i751[14]
  request.r(i751[15], i751[16], 0, i750, 'targetTexture')
  i750.usePhysicalProperties = !!i751[17]
  i750.focalLength = i751[18]
  i750.sensorSize = new pc.Vec2( i751[19], i751[20] )
  i750.lensShift = new pc.Vec2( i751[21], i751[22] )
  i750.gateFit = i751[23]
  i750.commandBufferCount = i751[24]
  i750.cameraType = i751[25]
  return i750
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i752 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i753 = data
  i752.m_ShowDebugText = !!i753[0]
  i752.m_ShowCameraFrustum = !!i753[1]
  i752.m_IgnoreTimeScale = !!i753[2]
  request.r(i753[3], i753[4], 0, i752, 'm_WorldUpOverride')
  i752.m_UpdateMethod = i753[5]
  i752.m_BlendUpdateMethod = i753[6]
  i752.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i753[7], i752.m_DefaultBlend)
  request.r(i753[8], i753[9], 0, i752, 'm_CustomBlends')
  i752.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i753[10], i752.m_CameraCutEvent)
  i752.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i753[11], i752.m_CameraActivatedEvent)
  return i752
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i754 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i755 = data
  i754.m_Style = i755[0]
  i754.m_Time = i755[1]
  i754.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i755[2] } )
  return i754
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i756 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i757 = data
  i756.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i757[0], i756.m_PersistentCalls)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i759 = data
  i758.enabled = !!i759[0]
  i758.isTrigger = !!i759[1]
  i758.usedByEffector = !!i759[2]
  i758.density = i759[3]
  i758.offset = new pc.Vec2( i759[4], i759[5] )
  request.r(i759[6], i759[7], 0, i758, 'material')
  i758.usedByComposite = !!i759[8]
  i758.autoTiling = !!i759[9]
  var i761 = i759[10]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
  var i763 = i761[i + 0]
  var i762 = []
  for(var i = 0; i < i763.length; i += 2) {
    i762.push( new pc.Vec2( i763[i + 0], i763[i + 1] ) );
  }
    i760.push( i762 );
  }
  i758.points = i760
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i771 = data
  i770.usedByComposite = !!i771[0]
  i770.autoTiling = !!i771[1]
  i770.size = new pc.Vec2( i771[2], i771[3] )
  i770.edgeRadius = i771[4]
  i770.enabled = !!i771[5]
  i770.isTrigger = !!i771[6]
  i770.usedByEffector = !!i771[7]
  i770.density = i771[8]
  i770.offset = new pc.Vec2( i771[9], i771[10] )
  request.r(i771[11], i771[12], 0, i770, 'material')
  return i770
}

Deserializers["_Project.Code.Camera.Follower"] = function (request, data, root) {
  var i772 = root || request.c( '_Project.Code.Camera.Follower' )
  var i773 = data
  i772._speed = i773[0]
  request.r(i773[1], i773[2], 0, i772, '_target')
  return i772
}

Deserializers["_Project.Code.Selling.Customer"] = function (request, data, root) {
  var i774 = root || request.c( '_Project.Code.Selling.Customer' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, '_bubbleView')
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i777 = data
  i776.enabled = !!i777[0]
  i776.planeDistance = i777[1]
  i776.referencePixelsPerUnit = i777[2]
  i776.isFallbackOverlay = !!i777[3]
  i776.renderMode = i777[4]
  i776.renderOrder = i777[5]
  i776.sortingLayerName = i777[6]
  i776.sortingOrder = i777[7]
  i776.scaleFactor = i777[8]
  request.r(i777[9], i777[10], 0, i776, 'worldCamera')
  i776.overrideSorting = !!i777[11]
  i776.pixelPerfect = !!i777[12]
  i776.targetDisplay = i777[13]
  i776.overridePixelPerfect = !!i777[14]
  return i776
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i779 = data
  i778.m_UiScaleMode = i779[0]
  i778.m_ReferencePixelsPerUnit = i779[1]
  i778.m_ScaleFactor = i779[2]
  i778.m_ReferenceResolution = new pc.Vec2( i779[3], i779[4] )
  i778.m_ScreenMatchMode = i779[5]
  i778.m_MatchWidthOrHeight = i779[6]
  i778.m_PhysicalUnit = i779[7]
  i778.m_FallbackScreenDPI = i779[8]
  i778.m_DefaultSpriteDPI = i779[9]
  i778.m_DynamicPixelsPerUnit = i779[10]
  i778.m_PresetInfoIsWorld = !!i779[11]
  return i778
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i781 = data
  i780.m_IgnoreReversedGraphics = !!i781[0]
  i780.m_BlockingObjects = i781[1]
  i780.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i781[2] )
  return i780
}

Deserializers["_Project.Code.Selling.Line.BubbleView"] = function (request, data, root) {
  var i782 = root || request.c( '_Project.Code.Selling.Line.BubbleView' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, '_text')
  request.r(i783[2], i783[3], 0, i782, '_body')
  return i782
}

Deserializers["_Project.Code.Core.Items.InventoryInitializer"] = function (request, data, root) {
  var i784 = root || request.c( '_Project.Code.Core.Items.InventoryInitializer' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, '_inventory')
  i784._count = i785[2]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i787 = data
  i786.name = i787[0]
  i786.index = i787[1]
  i786.startup = !!i787[2]
  return i786
}

Deserializers["_Project.Code.Entry.EntryPoint"] = function (request, data, root) {
  var i788 = root || request.c( '_Project.Code.Entry.EntryPoint' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, '_joystick')
  var i791 = i789[2]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Item')))
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 1, i790, '')
  }
  i788._itemPrefabs = i790
  return i788
}

Deserializers["_Project.Code.Services.CoroutineRunner.CoroutineRunner"] = function (request, data, root) {
  var i794 = root || request.c( '_Project.Code.Services.CoroutineRunner.CoroutineRunner' )
  var i795 = data
  return i794
}

Deserializers["_Project.Code.Core.Buyables.EndScreenShower"] = function (request, data, root) {
  var i796 = root || request.c( '_Project.Code.Core.Buyables.EndScreenShower' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, '_fieldBuyable')
  request.r(i797[2], i797[3], 0, i796, '_ui')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i799 = data
  i798.enabled = !!i799[0]
  i798.isTrigger = !!i799[1]
  i798.usedByEffector = !!i799[2]
  i798.density = i799[3]
  i798.offset = new pc.Vec2( i799[4], i799[5] )
  request.r(i799[6], i799[7], 0, i798, 'material')
  i798.edgeRadius = i799[8]
  var i801 = i799[9]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
    i800.push( new pc.Vec2( i801[i + 0], i801[i + 1] ) );
  }
  i798.points = i800
  i798.useAdjacentStartPoint = !!i799[10]
  i798.adjacentStartPoint = new pc.Vec2( i799[11], i799[12] )
  i798.useAdjacentEndPoint = !!i799[13]
  i798.adjacentEndPoint = new pc.Vec2( i799[14], i799[15] )
  return i798
}

Deserializers["_Project.Code.Core.Buyables.CoinsViewUpdater"] = function (request, data, root) {
  var i802 = root || request.c( '_Project.Code.Core.Buyables.CoinsViewUpdater' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, '_text')
  request.r(i803[2], i803[3], 0, i802, '_inventory')
  return i802
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.Mask' )
  var i805 = data
  i804.m_ShowMaskGraphic = !!i805[0]
  return i804
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i806 = root || request.c( 'VariableJoystick' )
  var i807 = data
  i806.moveThreshold = i807[0]
  i806.joystickType = i807[1]
  request.r(i807[2], i807[3], 0, i806, 'background')
  i806.handleRange = i807[4]
  i806.deadZone = i807[5]
  i806.axisOptions = i807[6]
  i806.snapX = !!i807[7]
  i806.snapY = !!i807[8]
  request.r(i807[9], i807[10], 0, i806, '_handle')
  return i806
}

Deserializers["_Project.Code.Core.Animations.BreathAnimation"] = function (request, data, root) {
  var i808 = root || request.c( '_Project.Code.Core.Animations.BreathAnimation' )
  var i809 = data
  i808._duration = i809[0]
  i808._scaleFactor = i809[1]
  return i808
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_FirstSelected')
  i810.m_sendNavigationEvents = !!i811[2]
  i810.m_DragThreshold = i811[3]
  return i810
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i813 = data
  i812.m_HorizontalAxis = i813[0]
  i812.m_VerticalAxis = i813[1]
  i812.m_SubmitButton = i813[2]
  i812.m_CancelButton = i813[3]
  i812.m_InputActionsPerSecond = i813[4]
  i812.m_RepeatDelay = i813[5]
  i812.m_ForceModuleActive = !!i813[6]
  i812.m_SendPointerHoverToParent = !!i813[7]
  return i812
}

Deserializers["_Project.Code.Selling.Line.Line"] = function (request, data, root) {
  var i814 = root || request.c( '_Project.Code.Selling.Line.Line' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, '_customerPrefab')
  var i817 = i815[2]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 1, i816, '')
  }
  i814._customerSprites = i816
  var i819 = i815[3]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 1, i818, '')
  }
  i814._spawnPoints = i818
  return i814
}

Deserializers["_Project.Code.Selling.Seller"] = function (request, data, root) {
  var i822 = root || request.c( '_Project.Code.Selling.Seller' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, '_moneyPrefab')
  request.r(i823[2], i823[3], 0, i822, '_lineMb')
  request.r(i823[4], i823[5], 0, i822, '_productInventory')
  request.r(i823[6], i823[7], 0, i822, '_moneyInventory')
  return i822
}

Deserializers["_Project.Code.Core.Buyables.Buyable"] = function (request, data, root) {
  var i824 = root || request.c( '_Project.Code.Core.Buyables.Buyable' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, '_itemInventory')
  i824._price = i825[2]
  request.r(i825[3], i825[4], 0, i824, '_activateOnBought')
  var i827 = i825[5]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 1, i826, '')
  }
  i824._deactivateOnBought = i826
  return i824
}

Deserializers["_Project.Code.Core.Buyables.InventorViewDestroyer"] = function (request, data, root) {
  var i830 = root || request.c( '_Project.Code.Core.Buyables.InventorViewDestroyer' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, '_inventory')
  return i830
}

Deserializers["_Project.Code.Core.PopcornFarm.CornFarm"] = function (request, data, root) {
  var i832 = root || request.c( '_Project.Code.Core.PopcornFarm.CornFarm' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, '_fillImage')
  request.r(i833[2], i833[3], 0, i832, '_resource')
  request.r(i833[4], i833[5], 0, i832, '_final')
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i835 = data
  i834.ambientIntensity = i835[0]
  i834.reflectionIntensity = i835[1]
  i834.ambientMode = i835[2]
  i834.ambientLight = new pc.Color(i835[3], i835[4], i835[5], i835[6])
  i834.ambientSkyColor = new pc.Color(i835[7], i835[8], i835[9], i835[10])
  i834.ambientGroundColor = new pc.Color(i835[11], i835[12], i835[13], i835[14])
  i834.ambientEquatorColor = new pc.Color(i835[15], i835[16], i835[17], i835[18])
  i834.fogColor = new pc.Color(i835[19], i835[20], i835[21], i835[22])
  i834.fogEndDistance = i835[23]
  i834.fogStartDistance = i835[24]
  i834.fogDensity = i835[25]
  i834.fog = !!i835[26]
  request.r(i835[27], i835[28], 0, i834, 'skybox')
  i834.fogMode = i835[29]
  var i837 = i835[30]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i837[i + 0]) );
  }
  i834.lightmaps = i836
  i834.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i835[31], i834.lightProbes)
  i834.lightmapsMode = i835[32]
  i834.mixedBakeMode = i835[33]
  i834.environmentLightingMode = i835[34]
  i834.ambientProbe = new pc.SphericalHarmonicsL2(i835[35])
  i834.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i835[36])
  i834.useReferenceAmbientProbe = !!i835[37]
  request.r(i835[38], i835[39], 0, i834, 'customReflection')
  request.r(i835[40], i835[41], 0, i834, 'defaultReflection')
  i834.defaultReflectionMode = i835[42]
  i834.defaultReflectionResolution = i835[43]
  i834.sunLightObjectId = i835[44]
  i834.pixelLightCount = i835[45]
  i834.defaultReflectionHDR = !!i835[46]
  i834.hasLightDataAsset = !!i835[47]
  i834.hasManualGenerate = !!i835[48]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'lightmapColor')
  request.r(i841[2], i841[3], 0, i840, 'lightmapDirection')
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i842 = root || new UnityEngine.LightProbes()
  var i843 = data
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i851 = data
  var i853 = i851[0]
  var i852 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i853.length; i += 1) {
    i852.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i853[i + 0]));
  }
  i850.ShaderCompilationErrors = i852
  i850.name = i851[1]
  i850.guid = i851[2]
  var i855 = i851[3]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( i855[i + 0] );
  }
  i850.shaderDefinedKeywords = i854
  var i857 = i851[4]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i857[i + 0]) );
  }
  i850.passes = i856
  var i859 = i851[5]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i859[i + 0]) );
  }
  i850.usePasses = i858
  var i861 = i851[6]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i861[i + 0]) );
  }
  i850.defaultParameterValues = i860
  request.r(i851[7], i851[8], 0, i850, 'unityFallbackShader')
  i850.readDepth = !!i851[9]
  i850.isCreatedByShaderGraph = !!i851[10]
  i850.compiled = !!i851[11]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i865 = data
  i864.shaderName = i865[0]
  i864.errorMessage = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i868 = root || new pc.UnityShaderPass()
  var i869 = data
  i868.id = i869[0]
  i868.subShaderIndex = i869[1]
  i868.name = i869[2]
  i868.passType = i869[3]
  i868.grabPassTextureName = i869[4]
  i868.usePass = !!i869[5]
  i868.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[6], i868.zTest)
  i868.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[7], i868.zWrite)
  i868.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[8], i868.culling)
  i868.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i869[9], i868.blending)
  i868.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i869[10], i868.alphaBlending)
  i868.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[11], i868.colorWriteMask)
  i868.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[12], i868.offsetUnits)
  i868.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[13], i868.offsetFactor)
  i868.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[14], i868.stencilRef)
  i868.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[15], i868.stencilReadMask)
  i868.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i869[16], i868.stencilWriteMask)
  i868.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[17], i868.stencilOp)
  i868.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[18], i868.stencilOpFront)
  i868.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i869[19], i868.stencilOpBack)
  var i871 = i869[20]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i871[i + 0]) );
  }
  i868.tags = i870
  var i873 = i869[21]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.passDefinedKeywords = i872
  var i875 = i869[22]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i875[i + 0]) );
  }
  i868.passDefinedKeywordGroups = i874
  var i877 = i869[23]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i877[i + 0]) );
  }
  i868.variants = i876
  var i879 = i869[24]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i879[i + 0]) );
  }
  i868.excludedVariants = i878
  i868.hasDepthReader = !!i869[25]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i881 = data
  i880.val = i881[0]
  i880.name = i881[1]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i883 = data
  i882.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[0], i882.src)
  i882.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[1], i882.dst)
  i882.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i883[2], i882.op)
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i885 = data
  i884.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[0], i884.pass)
  i884.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[1], i884.fail)
  i884.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[2], i884.zFail)
  i884.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i885[3], i884.comp)
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i889 = data
  i888.name = i889[0]
  i888.value = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( i895[i + 0] );
  }
  i892.keywords = i894
  i892.hasDiscard = !!i893[1]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i899 = data
  i898.passId = i899[0]
  i898.subShaderIndex = i899[1]
  var i901 = i899[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i898.keywords = i900
  i898.vertexProgram = i899[3]
  i898.fragmentProgram = i899[4]
  i898.exportedForWebGl2 = !!i899[5]
  i898.readDepth = !!i899[6]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i905 = data
  request.r(i905[0], i905[1], 0, i904, 'shader')
  i904.pass = i905[2]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i909 = data
  i908.name = i909[0]
  i908.type = i909[1]
  i908.value = new pc.Vec4( i909[2], i909[3], i909[4], i909[5] )
  i908.textureValue = i909[6]
  i908.shaderPropertyFlag = i909[7]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i911 = data
  i910.name = i911[0]
  request.r(i911[1], i911[2], 0, i910, 'texture')
  i910.aabb = i911[3]
  i910.vertices = i911[4]
  i910.triangles = i911[5]
  i910.textureRect = UnityEngine.Rect.MinMaxRect(i911[6], i911[7], i911[8], i911[9])
  i910.packedRect = UnityEngine.Rect.MinMaxRect(i911[10], i911[11], i911[12], i911[13])
  i910.border = new pc.Vec4( i911[14], i911[15], i911[16], i911[17] )
  i910.transparency = i911[18]
  i910.bounds = i911[19]
  i910.pixelsPerUnit = i911[20]
  i910.textureWidth = i911[21]
  i910.textureHeight = i911[22]
  i910.nativeSize = new pc.Vec2( i911[23], i911[24] )
  i910.pivot = new pc.Vec2( i911[25], i911[26] )
  i910.textureRectOffset = new pc.Vec2( i911[27], i911[28] )
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i913 = data
  i912.name = i913[0]
  i912.wrapMode = i913[1]
  i912.isLooping = !!i913[2]
  i912.length = i913[3]
  var i915 = i913[4]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i915[i + 0]) );
  }
  i912.curves = i914
  var i917 = i913[5]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i917[i + 0]) );
  }
  i912.events = i916
  i912.halfPrecision = !!i913[6]
  i912._frameRate = i913[7]
  i912.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i913[8], i912.localBounds)
  i912.hasMuscleCurves = !!i913[9]
  var i919 = i913[10]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( i919[i + 0] );
  }
  i912.clipMuscleConstant = i918
  i912.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i913[11], i912.clipBindingConstant)
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i923 = data
  i922.path = i923[0]
  i922.hash = i923[1]
  i922.componentType = i923[2]
  i922.property = i923[3]
  i922.keys = i923[4]
  var i925 = i923[5]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i925[i + 0]) );
  }
  i922.objectReferenceKeys = i924
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i929 = data
  i928.time = i929[0]
  request.r(i929[1], i929[2], 0, i928, 'value')
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i933 = data
  i932.functionName = i933[0]
  i932.floatParameter = i933[1]
  i932.intParameter = i933[2]
  i932.stringParameter = i933[3]
  request.r(i933[4], i933[5], 0, i932, 'objectReferenceParameter')
  i932.time = i933[6]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i935 = data
  i934.center = new pc.Vec3( i935[0], i935[1], i935[2] )
  i934.extends = new pc.Vec3( i935[3], i935[4], i935[5] )
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i939 = data
  var i941 = i939[0]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i938.genericBindings = i940
  var i943 = i939[1]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( i943[i + 0] );
  }
  i938.pptrCurveMapping = i942
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i945 = data
  i944.name = i945[0]
  i944.ascent = i945[1]
  i944.originalLineHeight = i945[2]
  i944.fontSize = i945[3]
  var i947 = i945[4]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i947[i + 0]) );
  }
  i944.characterInfo = i946
  request.r(i945[5], i945[6], 0, i944, 'texture')
  i944.originalFontSize = i945[7]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i951 = data
  i950.index = i951[0]
  i950.advance = i951[1]
  i950.bearing = i951[2]
  i950.glyphWidth = i951[3]
  i950.glyphHeight = i951[4]
  i950.minX = i951[5]
  i950.maxX = i951[6]
  i950.minY = i951[7]
  i950.maxY = i951[8]
  i950.uvBottomLeftX = i951[9]
  i950.uvBottomLeftY = i951[10]
  i950.uvBottomRightX = i951[11]
  i950.uvBottomRightY = i951[12]
  i950.uvTopLeftX = i951[13]
  i950.uvTopLeftY = i951[14]
  i950.uvTopRightX = i951[15]
  i950.uvTopRightY = i951[16]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i953 = data
  i952.name = i953[0]
  var i955 = i953[1]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i955[i + 0]) );
  }
  i952.layers = i954
  var i957 = i953[2]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i957[i + 0]) );
  }
  i952.parameters = i956
  i952.animationClips = i953[3]
  i952.avatarUnsupported = i953[4]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i961 = data
  i960.name = i961[0]
  i960.defaultWeight = i961[1]
  i960.blendingMode = i961[2]
  i960.avatarMask = i961[3]
  i960.syncedLayerIndex = i961[4]
  i960.syncedLayerAffectsTiming = !!i961[5]
  i960.syncedLayers = i961[6]
  i960.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i961[7], i960.stateMachine)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i963 = data
  i962.id = i963[0]
  i962.name = i963[1]
  i962.path = i963[2]
  var i965 = i963[3]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i965[i + 0]) );
  }
  i962.states = i964
  var i967 = i963[4]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i967[i + 0]) );
  }
  i962.machines = i966
  var i969 = i963[5]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i969[i + 0]) );
  }
  i962.entryStateTransitions = i968
  var i971 = i963[6]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i971[i + 0]) );
  }
  i962.exitStateTransitions = i970
  var i973 = i963[7]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i973[i + 0]) );
  }
  i962.anyStateTransitions = i972
  i962.defaultStateId = i963[8]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i977 = data
  i976.id = i977[0]
  i976.name = i977[1]
  i976.cycleOffset = i977[2]
  i976.cycleOffsetParameter = i977[3]
  i976.cycleOffsetParameterActive = !!i977[4]
  i976.mirror = !!i977[5]
  i976.mirrorParameter = i977[6]
  i976.mirrorParameterActive = !!i977[7]
  i976.motionId = i977[8]
  i976.nameHash = i977[9]
  i976.fullPathHash = i977[10]
  i976.speed = i977[11]
  i976.speedParameter = i977[12]
  i976.speedParameterActive = !!i977[13]
  i976.tag = i977[14]
  i976.tagHash = i977[15]
  i976.writeDefaultValues = !!i977[16]
  var i979 = i977[17]
  var i978 = []
  for(var i = 0; i < i979.length; i += 2) {
  request.r(i979[i + 0], i979[i + 1], 2, i978, '')
  }
  i976.behaviours = i978
  var i981 = i977[18]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i981[i + 0]) );
  }
  i976.transitions = i980
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i987 = data
  i986.fullPath = i987[0]
  i986.canTransitionToSelf = !!i987[1]
  i986.duration = i987[2]
  i986.exitTime = i987[3]
  i986.hasExitTime = !!i987[4]
  i986.hasFixedDuration = !!i987[5]
  i986.interruptionSource = i987[6]
  i986.offset = i987[7]
  i986.orderedInterruption = !!i987[8]
  i986.destinationStateId = i987[9]
  i986.isExit = !!i987[10]
  i986.mute = !!i987[11]
  i986.solo = !!i987[12]
  var i989 = i987[13]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i989[i + 0]) );
  }
  i986.conditions = i988
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i995 = data
  i994.destinationStateId = i995[0]
  i994.isExit = !!i995[1]
  i994.mute = !!i995[2]
  i994.solo = !!i995[3]
  var i997 = i995[4]
  var i996 = []
  for(var i = 0; i < i997.length; i += 1) {
    i996.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i997[i + 0]) );
  }
  i994.conditions = i996
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1001 = data
  i1000.defaultBool = !!i1001[0]
  i1000.defaultFloat = i1001[1]
  i1000.defaultInt = i1001[2]
  i1000.name = i1001[3]
  i1000.nameHash = i1001[4]
  i1000.type = i1001[5]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.bytes64 = i1003[1]
  i1002.data = i1003[2]
  return i1002
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1004 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1005 = data
  i1004.hashCode = i1005[0]
  request.r(i1005[1], i1005[2], 0, i1004, 'material')
  i1004.materialHashCode = i1005[3]
  request.r(i1005[4], i1005[5], 0, i1004, 'atlas')
  i1004.normalStyle = i1005[6]
  i1004.normalSpacingOffset = i1005[7]
  i1004.boldStyle = i1005[8]
  i1004.boldSpacing = i1005[9]
  i1004.italicStyle = i1005[10]
  i1004.tabSize = i1005[11]
  i1004.m_Version = i1005[12]
  i1004.m_SourceFontFileGUID = i1005[13]
  request.r(i1005[14], i1005[15], 0, i1004, 'm_SourceFontFile_EditorRef')
  request.r(i1005[16], i1005[17], 0, i1004, 'm_SourceFontFile')
  i1004.m_AtlasPopulationMode = i1005[18]
  i1004.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1005[19], i1004.m_FaceInfo)
  var i1007 = i1005[20]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.add(request.d('UnityEngine.TextCore.Glyph', i1007[i + 0]));
  }
  i1004.m_GlyphTable = i1006
  var i1009 = i1005[21]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.add(request.d('TMPro.TMP_Character', i1009[i + 0]));
  }
  i1004.m_CharacterTable = i1008
  var i1011 = i1005[22]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 2) {
  request.r(i1011[i + 0], i1011[i + 1], 2, i1010, '')
  }
  i1004.m_AtlasTextures = i1010
  i1004.m_AtlasTextureIndex = i1005[23]
  i1004.m_IsMultiAtlasTexturesEnabled = !!i1005[24]
  i1004.m_ClearDynamicDataOnBuild = !!i1005[25]
  var i1013 = i1005[26]
  var i1012 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.add(request.d('UnityEngine.TextCore.GlyphRect', i1013[i + 0]));
  }
  i1004.m_UsedGlyphRects = i1012
  var i1015 = i1005[27]
  var i1014 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.add(request.d('UnityEngine.TextCore.GlyphRect', i1015[i + 0]));
  }
  i1004.m_FreeGlyphRects = i1014
  i1004.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1005[28], i1004.m_fontInfo)
  i1004.m_AtlasWidth = i1005[29]
  i1004.m_AtlasHeight = i1005[30]
  i1004.m_AtlasPadding = i1005[31]
  i1004.m_AtlasRenderMode = i1005[32]
  var i1017 = i1005[33]
  var i1016 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.add(request.d('TMPro.TMP_Glyph', i1017[i + 0]));
  }
  i1004.m_glyphInfoList = i1016
  i1004.m_KerningTable = request.d('TMPro.KerningTable', i1005[34], i1004.m_KerningTable)
  i1004.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1005[35], i1004.m_FontFeatureTable)
  var i1019 = i1005[36]
  var i1018 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1019.length; i += 2) {
  request.r(i1019[i + 0], i1019[i + 1], 1, i1018, '')
  }
  i1004.fallbackFontAssets = i1018
  var i1021 = i1005[37]
  var i1020 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1021.length; i += 2) {
  request.r(i1021[i + 0], i1021[i + 1], 1, i1020, '')
  }
  i1004.m_FallbackFontAssetTable = i1020
  i1004.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1005[38], i1004.m_CreationSettings)
  var i1023 = i1005[39]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( request.d('TMPro.TMP_FontWeightPair', i1023[i + 0]) );
  }
  i1004.m_FontWeightTable = i1022
  var i1025 = i1005[40]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('TMPro.TMP_FontWeightPair', i1025[i + 0]) );
  }
  i1004.fontWeights = i1024
  return i1004
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1027 = data
  i1026.m_FaceIndex = i1027[0]
  i1026.m_FamilyName = i1027[1]
  i1026.m_StyleName = i1027[2]
  i1026.m_PointSize = i1027[3]
  i1026.m_Scale = i1027[4]
  i1026.m_UnitsPerEM = i1027[5]
  i1026.m_LineHeight = i1027[6]
  i1026.m_AscentLine = i1027[7]
  i1026.m_CapLine = i1027[8]
  i1026.m_MeanLine = i1027[9]
  i1026.m_Baseline = i1027[10]
  i1026.m_DescentLine = i1027[11]
  i1026.m_SuperscriptOffset = i1027[12]
  i1026.m_SuperscriptSize = i1027[13]
  i1026.m_SubscriptOffset = i1027[14]
  i1026.m_SubscriptSize = i1027[15]
  i1026.m_UnderlineOffset = i1027[16]
  i1026.m_UnderlineThickness = i1027[17]
  i1026.m_StrikethroughOffset = i1027[18]
  i1026.m_StrikethroughThickness = i1027[19]
  i1026.m_TabWidth = i1027[20]
  return i1026
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1031 = data
  i1030.m_Index = i1031[0]
  i1030.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1031[1], i1030.m_Metrics)
  i1030.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1031[2], i1030.m_GlyphRect)
  i1030.m_Scale = i1031[3]
  i1030.m_AtlasIndex = i1031[4]
  i1030.m_ClassDefinitionType = i1031[5]
  return i1030
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1033 = data
  i1032.m_Width = i1033[0]
  i1032.m_Height = i1033[1]
  i1032.m_HorizontalBearingX = i1033[2]
  i1032.m_HorizontalBearingY = i1033[3]
  i1032.m_HorizontalAdvance = i1033[4]
  return i1032
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1035 = data
  i1034.m_X = i1035[0]
  i1034.m_Y = i1035[1]
  i1034.m_Width = i1035[2]
  i1034.m_Height = i1035[3]
  return i1034
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_Character' )
  var i1039 = data
  i1038.m_ElementType = i1039[0]
  i1038.m_Unicode = i1039[1]
  i1038.m_GlyphIndex = i1039[2]
  i1038.m_Scale = i1039[3]
  return i1038
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1045 = data
  i1044.Name = i1045[0]
  i1044.PointSize = i1045[1]
  i1044.Scale = i1045[2]
  i1044.CharacterCount = i1045[3]
  i1044.LineHeight = i1045[4]
  i1044.Baseline = i1045[5]
  i1044.Ascender = i1045[6]
  i1044.CapHeight = i1045[7]
  i1044.Descender = i1045[8]
  i1044.CenterLine = i1045[9]
  i1044.SuperscriptOffset = i1045[10]
  i1044.SubscriptOffset = i1045[11]
  i1044.SubSize = i1045[12]
  i1044.Underline = i1045[13]
  i1044.UnderlineThickness = i1045[14]
  i1044.strikethrough = i1045[15]
  i1044.strikethroughThickness = i1045[16]
  i1044.TabWidth = i1045[17]
  i1044.Padding = i1045[18]
  i1044.AtlasWidth = i1045[19]
  i1044.AtlasHeight = i1045[20]
  return i1044
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1048 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1049 = data
  i1048.id = i1049[0]
  i1048.x = i1049[1]
  i1048.y = i1049[2]
  i1048.width = i1049[3]
  i1048.height = i1049[4]
  i1048.xOffset = i1049[5]
  i1048.yOffset = i1049[6]
  i1048.xAdvance = i1049[7]
  i1048.scale = i1049[8]
  return i1048
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1050 = root || request.c( 'TMPro.KerningTable' )
  var i1051 = data
  var i1053 = i1051[0]
  var i1052 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.add(request.d('TMPro.KerningPair', i1053[i + 0]));
  }
  i1050.kerningPairs = i1052
  return i1050
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.KerningPair' )
  var i1057 = data
  i1056.xOffset = i1057[0]
  i1056.m_FirstGlyph = i1057[1]
  i1056.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1057[2], i1056.m_FirstGlyphAdjustments)
  i1056.m_SecondGlyph = i1057[3]
  i1056.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1057[4], i1056.m_SecondGlyphAdjustments)
  i1056.m_IgnoreSpacingAdjustments = !!i1057[5]
  return i1056
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1059 = data
  var i1061 = i1059[0]
  var i1060 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1061[i + 0]));
  }
  i1058.m_GlyphPairAdjustmentRecords = i1060
  return i1058
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1065 = data
  i1064.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1065[0], i1064.m_FirstAdjustmentRecord)
  i1064.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1065[1], i1064.m_SecondAdjustmentRecord)
  i1064.m_FeatureLookupFlags = i1065[2]
  return i1064
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1067 = data
  i1066.m_GlyphIndex = i1067[0]
  i1066.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1067[1], i1066.m_GlyphValueRecord)
  return i1066
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1068 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1069 = data
  i1068.m_XPlacement = i1069[0]
  i1068.m_YPlacement = i1069[1]
  i1068.m_XAdvance = i1069[2]
  i1068.m_YAdvance = i1069[3]
  return i1068
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1072 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1073 = data
  i1072.sourceFontFileName = i1073[0]
  i1072.sourceFontFileGUID = i1073[1]
  i1072.pointSizeSamplingMode = i1073[2]
  i1072.pointSize = i1073[3]
  i1072.padding = i1073[4]
  i1072.packingMode = i1073[5]
  i1072.atlasWidth = i1073[6]
  i1072.atlasHeight = i1073[7]
  i1072.characterSetSelectionMode = i1073[8]
  i1072.characterSequence = i1073[9]
  i1072.referencedFontAssetGUID = i1073[10]
  i1072.referencedTextAssetGUID = i1073[11]
  i1072.fontStyle = i1073[12]
  i1072.fontStyleModifier = i1073[13]
  i1072.renderMode = i1073[14]
  i1072.includeFontFeatures = !!i1073[15]
  return i1072
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1077 = data
  request.r(i1077[0], i1077[1], 0, i1076, 'regularTypeface')
  request.r(i1077[2], i1077[3], 0, i1076, 'italicTypeface')
  return i1076
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig"] = function (request, data, root) {
  var i1078 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry')))
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.add(request.d('_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry', i1081[i + 0]));
  }
  i1078.Animations = i1080
  return i1078
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry"] = function (request, data, root) {
  var i1084 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry' )
  var i1085 = data
  request.r(i1085[0], i1085[1], 0, i1084, 'Animation')
  i1084.Direction = new pc.Vec2( i1085[2], i1085[3] )
  return i1084
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1086 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1087 = data
  i1086.useSafeMode = !!i1087[0]
  i1086.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1087[1], i1086.safeModeOptions)
  i1086.timeScale = i1087[2]
  i1086.unscaledTimeScale = i1087[3]
  i1086.useSmoothDeltaTime = !!i1087[4]
  i1086.maxSmoothUnscaledTime = i1087[5]
  i1086.rewindCallbackMode = i1087[6]
  i1086.showUnityEditorReport = !!i1087[7]
  i1086.logBehaviour = i1087[8]
  i1086.drawGizmos = !!i1087[9]
  i1086.defaultRecyclable = !!i1087[10]
  i1086.defaultAutoPlay = i1087[11]
  i1086.defaultUpdateType = i1087[12]
  i1086.defaultTimeScaleIndependent = !!i1087[13]
  i1086.defaultEaseType = i1087[14]
  i1086.defaultEaseOvershootOrAmplitude = i1087[15]
  i1086.defaultEasePeriod = i1087[16]
  i1086.defaultAutoKill = !!i1087[17]
  i1086.defaultLoopType = i1087[18]
  i1086.debugMode = !!i1087[19]
  i1086.debugStoreTargetId = !!i1087[20]
  i1086.showPreviewPanel = !!i1087[21]
  i1086.storeSettingsLocation = i1087[22]
  i1086.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1087[23], i1086.modules)
  i1086.createASMDEF = !!i1087[24]
  i1086.showPlayingTweens = !!i1087[25]
  i1086.showPausedTweens = !!i1087[26]
  return i1086
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1088 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1089 = data
  i1088.logBehaviour = i1089[0]
  i1088.nestedTweenFailureBehaviour = i1089[1]
  return i1088
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1090 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1091 = data
  i1090.showPanel = !!i1091[0]
  i1090.audioEnabled = !!i1091[1]
  i1090.physicsEnabled = !!i1091[2]
  i1090.physics2DEnabled = !!i1091[3]
  i1090.spriteEnabled = !!i1091[4]
  i1090.uiEnabled = !!i1091[5]
  i1090.textMeshProEnabled = !!i1091[6]
  i1090.tk2DEnabled = !!i1091[7]
  i1090.deAudioEnabled = !!i1091[8]
  i1090.deUnityExtendedEnabled = !!i1091[9]
  i1090.epoOutlineEnabled = !!i1091[10]
  return i1090
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1092 = root || request.c( 'TMPro.TMP_Settings' )
  var i1093 = data
  i1092.m_enableWordWrapping = !!i1093[0]
  i1092.m_enableKerning = !!i1093[1]
  i1092.m_enableExtraPadding = !!i1093[2]
  i1092.m_enableTintAllSprites = !!i1093[3]
  i1092.m_enableParseEscapeCharacters = !!i1093[4]
  i1092.m_EnableRaycastTarget = !!i1093[5]
  i1092.m_GetFontFeaturesAtRuntime = !!i1093[6]
  i1092.m_missingGlyphCharacter = i1093[7]
  i1092.m_warningsDisabled = !!i1093[8]
  request.r(i1093[9], i1093[10], 0, i1092, 'm_defaultFontAsset')
  i1092.m_defaultFontAssetPath = i1093[11]
  i1092.m_defaultFontSize = i1093[12]
  i1092.m_defaultAutoSizeMinRatio = i1093[13]
  i1092.m_defaultAutoSizeMaxRatio = i1093[14]
  i1092.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1093[15], i1093[16] )
  i1092.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1093[17], i1093[18] )
  i1092.m_autoSizeTextContainer = !!i1093[19]
  i1092.m_IsTextObjectScaleStatic = !!i1093[20]
  var i1095 = i1093[21]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1095.length; i += 2) {
  request.r(i1095[i + 0], i1095[i + 1], 1, i1094, '')
  }
  i1092.m_fallbackFontAssets = i1094
  i1092.m_matchMaterialPreset = !!i1093[22]
  request.r(i1093[23], i1093[24], 0, i1092, 'm_defaultSpriteAsset')
  i1092.m_defaultSpriteAssetPath = i1093[25]
  i1092.m_enableEmojiSupport = !!i1093[26]
  i1092.m_MissingCharacterSpriteUnicode = i1093[27]
  i1092.m_defaultColorGradientPresetsPath = i1093[28]
  request.r(i1093[29], i1093[30], 0, i1092, 'm_defaultStyleSheet')
  i1092.m_StyleSheetsResourcePath = i1093[31]
  request.r(i1093[32], i1093[33], 0, i1092, 'm_leadingCharacters')
  request.r(i1093[34], i1093[35], 0, i1092, 'm_followingCharacters')
  i1092.m_UseModernHangulLineBreakingRules = !!i1093[36]
  return i1092
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1096 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1097 = data
  i1096.hashCode = i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, 'material')
  i1096.materialHashCode = i1097[3]
  request.r(i1097[4], i1097[5], 0, i1096, 'spriteSheet')
  var i1099 = i1097[6]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(request.d('TMPro.TMP_Sprite', i1099[i + 0]));
  }
  i1096.spriteInfoList = i1098
  var i1101 = i1097[7]
  var i1100 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1101.length; i += 2) {
  request.r(i1101[i + 0], i1101[i + 1], 1, i1100, '')
  }
  i1096.fallbackSpriteAssets = i1100
  i1096.m_Version = i1097[8]
  i1096.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1097[9], i1096.m_FaceInfo)
  var i1103 = i1097[10]
  var i1102 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.add(request.d('TMPro.TMP_SpriteCharacter', i1103[i + 0]));
  }
  i1096.m_SpriteCharacterTable = i1102
  var i1105 = i1097[11]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.add(request.d('TMPro.TMP_SpriteGlyph', i1105[i + 0]));
  }
  i1096.m_SpriteGlyphTable = i1104
  return i1096
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1108 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1109 = data
  i1108.name = i1109[0]
  i1108.hashCode = i1109[1]
  i1108.unicode = i1109[2]
  i1108.pivot = new pc.Vec2( i1109[3], i1109[4] )
  request.r(i1109[5], i1109[6], 0, i1108, 'sprite')
  i1108.id = i1109[7]
  i1108.x = i1109[8]
  i1108.y = i1109[9]
  i1108.width = i1109[10]
  i1108.height = i1109[11]
  i1108.xOffset = i1109[12]
  i1108.yOffset = i1109[13]
  i1108.xAdvance = i1109[14]
  i1108.scale = i1109[15]
  return i1108
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1114 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1115 = data
  i1114.m_Name = i1115[0]
  i1114.m_HashCode = i1115[1]
  i1114.m_ElementType = i1115[2]
  i1114.m_Unicode = i1115[3]
  i1114.m_GlyphIndex = i1115[4]
  i1114.m_Scale = i1115[5]
  return i1114
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1118 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1119 = data
  request.r(i1119[0], i1119[1], 0, i1118, 'sprite')
  i1118.m_Index = i1119[2]
  i1118.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1119[3], i1118.m_Metrics)
  i1118.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1119[4], i1118.m_GlyphRect)
  i1118.m_Scale = i1119[5]
  i1118.m_AtlasIndex = i1119[6]
  i1118.m_ClassDefinitionType = i1119[7]
  return i1118
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1120 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1121 = data
  var i1123 = i1121[0]
  var i1122 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.add(request.d('TMPro.TMP_Style', i1123[i + 0]));
  }
  i1120.m_StyleList = i1122
  return i1120
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1126 = root || request.c( 'TMPro.TMP_Style' )
  var i1127 = data
  i1126.m_Name = i1127[0]
  i1126.m_HashCode = i1127[1]
  i1126.m_OpeningDefinition = i1127[2]
  i1126.m_ClosingDefinition = i1127[3]
  i1126.m_OpeningTagArray = i1127[4]
  i1126.m_ClosingTagArray = i1127[5]
  i1126.m_OpeningTagUnicodeArray = i1127[6]
  i1126.m_ClosingTagUnicodeArray = i1127[7]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1129 = data
  var i1131 = i1129[0]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1131[i + 0]) );
  }
  i1128.files = i1130
  i1128.componentToPrefabIds = i1129[1]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1135 = data
  i1134.path = i1135[0]
  request.r(i1135[1], i1135[2], 0, i1134, 'unityObject')
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1137 = data
  var i1139 = i1137[0]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1139[i + 0]) );
  }
  i1136.scriptsExecutionOrder = i1138
  var i1141 = i1137[1]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1141[i + 0]) );
  }
  i1136.sortingLayers = i1140
  var i1143 = i1137[2]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1143[i + 0]) );
  }
  i1136.cullingLayers = i1142
  i1136.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1137[3], i1136.timeSettings)
  i1136.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1137[4], i1136.physicsSettings)
  i1136.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1137[5], i1136.physics2DSettings)
  i1136.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1137[6], i1136.qualitySettings)
  i1136.enableRealtimeShadows = !!i1137[7]
  i1136.enableAutoInstancing = !!i1137[8]
  i1136.enableDynamicBatching = !!i1137[9]
  i1136.lightmapEncodingQuality = i1137[10]
  i1136.desiredColorSpace = i1137[11]
  var i1145 = i1137[12]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( i1145[i + 0] );
  }
  i1136.allTags = i1144
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1149 = data
  i1148.name = i1149[0]
  i1148.value = i1149[1]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1153 = data
  i1152.id = i1153[0]
  i1152.name = i1153[1]
  i1152.value = i1153[2]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1157 = data
  i1156.id = i1157[0]
  i1156.name = i1157[1]
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1159 = data
  i1158.fixedDeltaTime = i1159[0]
  i1158.maximumDeltaTime = i1159[1]
  i1158.timeScale = i1159[2]
  i1158.maximumParticleTimestep = i1159[3]
  return i1158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1161 = data
  i1160.gravity = new pc.Vec3( i1161[0], i1161[1], i1161[2] )
  i1160.defaultSolverIterations = i1161[3]
  i1160.bounceThreshold = i1161[4]
  i1160.autoSyncTransforms = !!i1161[5]
  i1160.autoSimulation = !!i1161[6]
  var i1163 = i1161[7]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1163[i + 0]) );
  }
  i1160.collisionMatrix = i1162
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1167 = data
  i1166.enabled = !!i1167[0]
  i1166.layerId = i1167[1]
  i1166.otherLayerId = i1167[2]
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1169 = data
  request.r(i1169[0], i1169[1], 0, i1168, 'material')
  i1168.gravity = new pc.Vec2( i1169[2], i1169[3] )
  i1168.positionIterations = i1169[4]
  i1168.velocityIterations = i1169[5]
  i1168.velocityThreshold = i1169[6]
  i1168.maxLinearCorrection = i1169[7]
  i1168.maxAngularCorrection = i1169[8]
  i1168.maxTranslationSpeed = i1169[9]
  i1168.maxRotationSpeed = i1169[10]
  i1168.baumgarteScale = i1169[11]
  i1168.baumgarteTOIScale = i1169[12]
  i1168.timeToSleep = i1169[13]
  i1168.linearSleepTolerance = i1169[14]
  i1168.angularSleepTolerance = i1169[15]
  i1168.defaultContactOffset = i1169[16]
  i1168.autoSimulation = !!i1169[17]
  i1168.queriesHitTriggers = !!i1169[18]
  i1168.queriesStartInColliders = !!i1169[19]
  i1168.callbacksOnDisable = !!i1169[20]
  i1168.reuseCollisionCallbacks = !!i1169[21]
  i1168.autoSyncTransforms = !!i1169[22]
  var i1171 = i1169[23]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1171[i + 0]) );
  }
  i1168.collisionMatrix = i1170
  return i1168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1174 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1175 = data
  i1174.enabled = !!i1175[0]
  i1174.layerId = i1175[1]
  i1174.otherLayerId = i1175[2]
  return i1174
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1177 = data
  var i1179 = i1177[0]
  var i1178 = []
  for(var i = 0; i < i1179.length; i += 1) {
    i1178.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1179[i + 0]) );
  }
  i1176.qualityLevels = i1178
  var i1181 = i1177[1]
  var i1180 = []
  for(var i = 0; i < i1181.length; i += 1) {
    i1180.push( i1181[i + 0] );
  }
  i1176.names = i1180
  i1176.shadows = i1177[2]
  i1176.anisotropicFiltering = i1177[3]
  i1176.antiAliasing = i1177[4]
  i1176.lodBias = i1177[5]
  i1176.shadowCascades = i1177[6]
  i1176.shadowDistance = i1177[7]
  i1176.shadowmaskMode = i1177[8]
  i1176.shadowProjection = i1177[9]
  i1176.shadowResolution = i1177[10]
  i1176.softParticles = !!i1177[11]
  i1176.softVegetation = !!i1177[12]
  i1176.activeColorSpace = i1177[13]
  i1176.desiredColorSpace = i1177[14]
  i1176.masterTextureLimit = i1177[15]
  i1176.maxQueuedFrames = i1177[16]
  i1176.particleRaycastBudget = i1177[17]
  i1176.pixelLightCount = i1177[18]
  i1176.realtimeReflectionProbes = !!i1177[19]
  i1176.shadowCascade2Split = i1177[20]
  i1176.shadowCascade4Split = new pc.Vec3( i1177[21], i1177[22], i1177[23] )
  i1176.streamingMipmapsActive = !!i1177[24]
  i1176.vSyncCount = i1177[25]
  i1176.asyncUploadBufferSize = i1177[26]
  i1176.asyncUploadTimeSlice = i1177[27]
  i1176.billboardsFaceCameraPosition = !!i1177[28]
  i1176.shadowNearPlaneOffset = i1177[29]
  i1176.streamingMipmapsMemoryBudget = i1177[30]
  i1176.maximumLODLevel = i1177[31]
  i1176.streamingMipmapsAddAllCameras = !!i1177[32]
  i1176.streamingMipmapsMaxLevelReduction = i1177[33]
  i1176.streamingMipmapsRenderersPerFrame = i1177[34]
  i1176.resolutionScalingFixedDPIFactor = i1177[35]
  i1176.streamingMipmapsMaxFileIORequests = i1177[36]
  i1176.currentQualityLevel = i1177[37]
  return i1176
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1184 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1185 = data
  request.r(i1185[0], i1185[1], 0, i1184, 'm_ObjectArgument')
  i1184.m_ObjectArgumentAssemblyTypeName = i1185[2]
  i1184.m_IntArgument = i1185[3]
  i1184.m_FloatArgument = i1185[4]
  i1184.m_StringArgument = i1185[5]
  i1184.m_BoolArgument = !!i1185[6]
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1189 = data
  i1188.mode = i1189[0]
  i1188.parameter = i1189[1]
  i1188.threshold = i1189[2]
  return i1188
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1190 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1191 = data
  i1190.xPlacement = i1191[0]
  i1190.yPlacement = i1191[1]
  i1190.xAdvance = i1191[2]
  i1190.yAdvance = i1191[3]
  return i1190
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[78],"79":[37],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[9],"89":[9],"90":[9],"91":[9],"92":[9],"93":[9],"94":[9],"95":[9],"96":[9],"97":[9],"98":[9],"99":[9],"100":[9],"101":[37],"102":[103],"104":[105],"106":[105],"43":[21],"107":[49],"47":[49],"41":[16],"19":[15],"34":[30],"108":[109],"110":[111],"112":[37],"113":[21],"114":[103,21],"24":[21,22],"115":[21],"116":[22,21],"117":[103],"118":[22,21],"119":[21],"120":[109],"121":[16],"122":[21],"123":[21],"45":[43],"26":[22,21],"124":[21],"44":[43],"125":[21],"126":[21],"127":[21],"128":[21],"129":[21],"130":[21],"131":[21],"55":[21],"132":[21],"133":[22,21],"134":[21],"135":[21],"136":[21],"137":[21],"138":[22,21],"139":[21],"140":[57],"141":[57],"58":[57],"142":[57],"143":[37],"144":[37],"145":[109],"146":[37],"147":[148]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MonoBehaviour","_Project.Code.Core.Character.CharacterInstaller","_Project.Code.Core.Character.Mover","_Project.Code.Core.Collision.OverlapCollisionDetector","_Project.Code.Core.Character.CharacterAnimator","_Project.Code.Core.Items.Inventory.ItemInventory","UnityEngine.Rigidbody2D","_Project.Code.Core.Character.TopDownAnimator","UnityEngine.Animator","_Project.Code.Core.Character.TopDownAnimationConfig","UnityEngine.CircleCollider2D","UnityEditor.Animations.AnimatorController","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","_Project.Code.Core.Character.SortingGroupAnimator","_Project.Code.Core.Items.Inventory.ColumnInventoryView","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","_Project.Code.Core.Items.Item","_Project.Code.Core.Harvesting.Field","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachineConfiner2D","UnityEngine.PolygonCollider2D","_Project.Code.Camera.CameraInBordersZoom","UnityEngine.BoxCollider2D","_Project.Code.Camera.CinemachineConfinerUpdater","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineFramingTransposer","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","_Project.Code.Camera.Follower","_Project.Code.Selling.Customer","_Project.Code.Selling.Line.BubbleView","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","_Project.Code.Core.Items.InventoryInitializer","_Project.Code.Entry.EntryPoint","VariableJoystick","_Project.Code.Services.CoroutineRunner.CoroutineRunner","_Project.Code.Core.Buyables.EndScreenShower","_Project.Code.Core.Buyables.Buyable","UnityEngine.GameObject","UnityEngine.EdgeCollider2D","_Project.Code.Core.Buyables.CoinsViewUpdater","UnityEngine.UI.Mask","_Project.Code.Core.Animations.BreathAnimation","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","_Project.Code.Selling.Line.Line","_Project.Code.Selling.Seller","_Project.Code.Core.Buyables.InventorViewDestroyer","_Project.Code.Core.PopcornFarm.CornFarm","UnityEngine.Font","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","_Project.Code.Entry.Entry","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.SceneVariables","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "SpongeBob-Playable";

Deserializers.lunaInitializationTime = "03/18/2025 07:46:22";

Deserializers.lunaDaysRunning = "2.1";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "SBA";

Deserializers.lunaAppID = "28018";

Deserializers.projectId = "7595613fef887204c9bdb46853a5a3ea";

Deserializers.packagesInfo = "com.unity.cinemachine: 2.10.3\ncom.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1861";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4543";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2DProject";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "677ee48e-1d5f-42e4-a04b-d36850ff0f6a";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

