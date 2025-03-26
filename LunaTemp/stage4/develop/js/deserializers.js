var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointSpring' )
  var i567 = data
  i566.spring = i567[0]
  i566.damper = i567[1]
  i566.targetPosition = i567[2]
  return i566
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointMotor' )
  var i569 = data
  i568.m_TargetVelocity = i569[0]
  i568.m_Force = i569[1]
  i568.m_FreeSpin = i569[2]
  return i568
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointLimits' )
  var i571 = data
  i570.m_Min = i571[0]
  i570.m_Max = i571[1]
  i570.m_Bounciness = i571[2]
  i570.m_BounceMinVelocity = i571[3]
  i570.m_ContactDistance = i571[4]
  i570.minBounce = i571[5]
  i570.maxBounce = i571[6]
  return i570
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointDrive' )
  var i573 = data
  i572.m_PositionSpring = i573[0]
  i572.m_PositionDamper = i573[1]
  i572.m_MaximumForce = i573[2]
  i572.m_UseAcceleration = i573[3]
  return i572
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i575 = data
  i574.m_Spring = i575[0]
  i574.m_Damper = i575[1]
  return i574
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i577 = data
  i576.m_Limit = i577[0]
  i576.m_Bounciness = i577[1]
  i576.m_ContactDistance = i577[2]
  return i576
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i579 = data
  i578.m_ExtremumSlip = i579[0]
  i578.m_ExtremumValue = i579[1]
  i578.m_AsymptoteSlip = i579[2]
  i578.m_AsymptoteValue = i579[3]
  i578.m_Stiffness = i579[4]
  return i578
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i581 = data
  i580.m_LowerAngle = i581[0]
  i580.m_UpperAngle = i581[1]
  return i580
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i583 = data
  i582.m_MotorSpeed = i583[0]
  i582.m_MaximumMotorTorque = i583[1]
  return i582
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i585 = data
  i584.m_DampingRatio = i585[0]
  i584.m_Frequency = i585[1]
  i584.m_Angle = i585[2]
  return i584
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i587 = data
  i586.m_LowerTranslation = i587[0]
  i586.m_UpperTranslation = i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i589 = data
  i588.position = new pc.Vec3( i589[0], i589[1], i589[2] )
  i588.scale = new pc.Vec3( i589[3], i589[4], i589[5] )
  i588.rotation = new pc.Quat(i589[6], i589[7], i589[8], i589[9])
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i591 = data
  i590.enabled = !!i591[0]
  i590.sortingLayerIndex = i591[1]
  i590.sortingOrder = i591[2]
  i590.sortingLayerName = i591[3]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i593 = data
  i592.enabled = !!i593[0]
  request.r(i593[1], i593[2], 0, i592, 'sharedMaterial')
  var i595 = i593[3]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.sharedMaterials = i594
  i592.receiveShadows = !!i593[4]
  i592.shadowCastingMode = i593[5]
  i592.sortingLayerID = i593[6]
  i592.sortingOrder = i593[7]
  i592.lightmapIndex = i593[8]
  i592.lightmapSceneIndex = i593[9]
  i592.lightmapScaleOffset = new pc.Vec4( i593[10], i593[11], i593[12], i593[13] )
  i592.lightProbeUsage = i593[14]
  i592.reflectionProbeUsage = i593[15]
  i592.color = new pc.Color(i593[16], i593[17], i593[18], i593[19])
  request.r(i593[20], i593[21], 0, i592, 'sprite')
  i592.flipX = !!i593[22]
  i592.flipY = !!i593[23]
  i592.drawMode = i593[24]
  i592.size = new pc.Vec2( i593[25], i593[26] )
  i592.tileMode = i593[27]
  i592.adaptiveModeThreshold = i593[28]
  i592.maskInteraction = i593[29]
  i592.spriteSortPoint = i593[30]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i599 = data
  i598.name = i599[0]
  i598.tagId = i599[1]
  i598.enabled = !!i599[2]
  i598.isStatic = !!i599[3]
  i598.layer = i599[4]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i600 = root || new pc.UnityMaterial()
  var i601 = data
  i600.name = i601[0]
  request.r(i601[1], i601[2], 0, i600, 'shader')
  i600.renderQueue = i601[3]
  i600.enableInstancing = !!i601[4]
  var i603 = i601[5]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i603[i + 0]) );
  }
  i600.floatParameters = i602
  var i605 = i601[6]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i605[i + 0]) );
  }
  i600.colorParameters = i604
  var i607 = i601[7]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i607[i + 0]) );
  }
  i600.vectorParameters = i606
  var i609 = i601[8]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i609[i + 0]) );
  }
  i600.textureParameters = i608
  var i611 = i601[9]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i611[i + 0]) );
  }
  i600.materialFlags = i610
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i619 = data
  i618.name = i619[0]
  i618.value = new pc.Color(i619[1], i619[2], i619[3], i619[4])
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i623 = data
  i622.name = i623[0]
  i622.value = new pc.Vec4( i623[1], i623[2], i623[3], i623[4] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i627 = data
  i626.name = i627[0]
  request.r(i627[1], i627[2], 0, i626, 'value')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i631 = data
  i630.name = i631[0]
  i630.enabled = !!i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i633 = data
  i632.name = i633[0]
  i632.width = i633[1]
  i632.height = i633[2]
  i632.mipmapCount = i633[3]
  i632.anisoLevel = i633[4]
  i632.filterMode = i633[5]
  i632.hdr = !!i633[6]
  i632.format = i633[7]
  i632.wrapMode = i633[8]
  i632.alphaIsTransparency = !!i633[9]
  i632.alphaSource = i633[10]
  i632.graphicsFormat = i633[11]
  i632.sRGBTexture = !!i633[12]
  i632.desiredColorSpace = i633[13]
  i632.wrapU = i633[14]
  i632.wrapV = i633[15]
  return i632
}

Deserializers["_Project.Code.Core.Character.CharacterInstaller"] = function (request, data, root) {
  var i634 = root || request.c( '_Project.Code.Core.Character.CharacterInstaller' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, '_mover')
  request.r(i635[2], i635[3], 0, i634, '_castingDetector')
  request.r(i635[4], i635[5], 0, i634, '_animator')
  var i637 = i635[6]
  var i636 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Inventory.ItemInventory')))
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 1, i636, '')
  }
  i634._storages = i636
  return i634
}

Deserializers["_Project.Code.Core.Collision.OverlapCollisionDetector"] = function (request, data, root) {
  var i640 = root || request.c( '_Project.Code.Core.Collision.OverlapCollisionDetector' )
  var i641 = data
  i640.detectionRadius = i641[0]
  i640.collisionMask = UnityEngine.LayerMask.FromIntegerValue( i641[1] )
  return i640
}

Deserializers["_Project.Code.Core.Character.Mover"] = function (request, data, root) {
  var i642 = root || request.c( '_Project.Code.Core.Character.Mover' )
  var i643 = data
  i642._speed = i643[0]
  request.r(i643[1], i643[2], 0, i642, '_rigidbody')
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i645 = data
  i644.bodyType = i645[0]
  request.r(i645[1], i645[2], 0, i644, 'material')
  i644.simulated = !!i645[3]
  i644.useAutoMass = !!i645[4]
  i644.mass = i645[5]
  i644.drag = i645[6]
  i644.angularDrag = i645[7]
  i644.gravityScale = i645[8]
  i644.collisionDetectionMode = i645[9]
  i644.sleepMode = i645[10]
  i644.constraints = i645[11]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i647 = data
  i646.radius = i647[0]
  i646.enabled = !!i647[1]
  i646.isTrigger = !!i647[2]
  i646.usedByEffector = !!i647[3]
  i646.density = i647[4]
  i646.offset = new pc.Vec2( i647[5], i647[6] )
  request.r(i647[7], i647[8], 0, i646, 'material')
  return i646
}

Deserializers["_Project.Code.Core.Character.CharacterAnimator"] = function (request, data, root) {
  var i648 = root || request.c( '_Project.Code.Core.Character.CharacterAnimator' )
  var i649 = data
  var i651 = i649[0]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Animator')))
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 1, i650, '')
  }
  i648._directionalAnimators = i650
  request.r(i649[1], i649[2], 0, i648, '_movingAnimator')
  i648._breathSpeed = i649[3]
  i648._breathScale = i649[4]
  return i648
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

Deserializers["_Project.Code.Camera.CameraInBordersZoom"] = function (request, data, root) {
  var i700 = root || request.c( '_Project.Code.Camera.CameraInBordersZoom' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, '_borders')
  i700._defaultCameraSize = i701[2]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i703 = data
  i702.enabled = !!i703[0]
  i702.aspect = i703[1]
  i702.orthographic = !!i703[2]
  i702.orthographicSize = i703[3]
  i702.backgroundColor = new pc.Color(i703[4], i703[5], i703[6], i703[7])
  i702.nearClipPlane = i703[8]
  i702.farClipPlane = i703[9]
  i702.fieldOfView = i703[10]
  i702.depth = i703[11]
  i702.clearFlags = i703[12]
  i702.cullingMask = i703[13]
  i702.rect = i703[14]
  request.r(i703[15], i703[16], 0, i702, 'targetTexture')
  i702.usePhysicalProperties = !!i703[17]
  i702.focalLength = i703[18]
  i702.sensorSize = new pc.Vec2( i703[19], i703[20] )
  i702.lensShift = new pc.Vec2( i703[21], i703[22] )
  i702.gateFit = i703[23]
  i702.commandBufferCount = i703[24]
  i702.cameraType = i703[25]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i705 = data
  i704.enabled = !!i705[0]
  i704.isTrigger = !!i705[1]
  i704.usedByEffector = !!i705[2]
  i704.density = i705[3]
  i704.offset = new pc.Vec2( i705[4], i705[5] )
  request.r(i705[6], i705[7], 0, i704, 'material')
  i704.usedByComposite = !!i705[8]
  i704.autoTiling = !!i705[9]
  var i707 = i705[10]
  var i706 = []
  for(var i = 0; i < i707.length; i += 1) {
  var i709 = i707[i + 0]
  var i708 = []
  for(var i = 0; i < i709.length; i += 2) {
    i708.push( new pc.Vec2( i709[i + 0], i709[i + 1] ) );
  }
    i706.push( i708 );
  }
  i704.points = i706
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i717 = data
  i716.usedByComposite = !!i717[0]
  i716.autoTiling = !!i717[1]
  i716.size = new pc.Vec2( i717[2], i717[3] )
  i716.edgeRadius = i717[4]
  i716.enabled = !!i717[5]
  i716.isTrigger = !!i717[6]
  i716.usedByEffector = !!i717[7]
  i716.density = i717[8]
  i716.offset = new pc.Vec2( i717[9], i717[10] )
  request.r(i717[11], i717[12], 0, i716, 'material')
  return i716
}

Deserializers["_Project.Code.Camera.Follower"] = function (request, data, root) {
  var i718 = root || request.c( '_Project.Code.Camera.Follower' )
  var i719 = data
  i718._speed = i719[0]
  request.r(i719[1], i719[2], 0, i718, '_target')
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
  request.r(i733[0], i733[1], 0, i732, '_tutorialText')
  request.r(i733[2], i733[3], 0, i732, '_tutorialInventory')
  request.r(i733[4], i733[5], 0, i732, '_joystick')
  request.r(i733[6], i733[7], 0, i732, '_arrow')
  request.r(i733[8], i733[9], 0, i732, '_point1')
  request.r(i733[10], i733[11], 0, i732, '_point2')
  request.r(i733[12], i733[13], 0, i732, '_buyable')
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

Deserializers["_Project.Code.Core.Buyables.CoinsViewUpdater"] = function (request, data, root) {
  var i740 = root || request.c( '_Project.Code.Core.Buyables.CoinsViewUpdater' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, '_text')
  request.r(i741[2], i741[3], 0, i740, '_inventory')
  return i740
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.Mask' )
  var i743 = data
  i742.m_ShowMaskGraphic = !!i743[0]
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
  i746._duration = i747[0]
  i746._scaleFactor = i747[1]
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

Deserializers["_Project.Code.Selling.Line.Line"] = function (request, data, root) {
  var i752 = root || request.c( '_Project.Code.Selling.Line.Line' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, '_customerPrefab')
  var i755 = i753[2]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEditor.Animations.AnimatorController')))
  for(var i = 0; i < i755.length; i += 2) {
  request.r(i755[i + 0], i755[i + 1], 1, i754, '')
  }
  i752._customerAnimatorControllers = i754
  var i757 = i753[3]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 1, i756, '')
  }
  i752._spawnPoints = i756
  return i752
}

Deserializers["_Project.Code.Selling.Seller"] = function (request, data, root) {
  var i760 = root || request.c( '_Project.Code.Selling.Seller' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, '_moneyPrefab')
  request.r(i761[2], i761[3], 0, i760, '_lineMb')
  request.r(i761[4], i761[5], 0, i760, '_productInventory')
  request.r(i761[6], i761[7], 0, i760, '_moneyInventory')
  return i760
}

Deserializers["_Project.Code.Core.Buyables.Buyable"] = function (request, data, root) {
  var i762 = root || request.c( '_Project.Code.Core.Buyables.Buyable' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, '_itemInventory')
  i762._price = i763[2]
  request.r(i763[3], i763[4], 0, i762, '_activateOnBought')
  var i765 = i763[5]
  var i764 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 1, i764, '')
  }
  i762._deactivateOnBought = i764
  return i762
}

Deserializers["_Project.Code.Core.Buyables.InventorViewDestroyer"] = function (request, data, root) {
  var i768 = root || request.c( '_Project.Code.Core.Buyables.InventorViewDestroyer' )
  var i769 = data
  request.r(i769[0], i769[1], 0, i768, '_inventory')
  return i768
}

Deserializers["_Project.Code.Core.PopcornFarm.CornFarm"] = function (request, data, root) {
  var i770 = root || request.c( '_Project.Code.Core.PopcornFarm.CornFarm' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, '_fillImage')
  request.r(i771[2], i771[3], 0, i770, '_resource')
  request.r(i771[4], i771[5], 0, i770, '_final')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i773 = data
  i772.ambientIntensity = i773[0]
  i772.reflectionIntensity = i773[1]
  i772.ambientMode = i773[2]
  i772.ambientLight = new pc.Color(i773[3], i773[4], i773[5], i773[6])
  i772.ambientSkyColor = new pc.Color(i773[7], i773[8], i773[9], i773[10])
  i772.ambientGroundColor = new pc.Color(i773[11], i773[12], i773[13], i773[14])
  i772.ambientEquatorColor = new pc.Color(i773[15], i773[16], i773[17], i773[18])
  i772.fogColor = new pc.Color(i773[19], i773[20], i773[21], i773[22])
  i772.fogEndDistance = i773[23]
  i772.fogStartDistance = i773[24]
  i772.fogDensity = i773[25]
  i772.fog = !!i773[26]
  request.r(i773[27], i773[28], 0, i772, 'skybox')
  i772.fogMode = i773[29]
  var i775 = i773[30]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i775[i + 0]) );
  }
  i772.lightmaps = i774
  i772.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i773[31], i772.lightProbes)
  i772.lightmapsMode = i773[32]
  i772.mixedBakeMode = i773[33]
  i772.environmentLightingMode = i773[34]
  i772.ambientProbe = new pc.SphericalHarmonicsL2(i773[35])
  i772.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i773[36])
  i772.useReferenceAmbientProbe = !!i773[37]
  request.r(i773[38], i773[39], 0, i772, 'customReflection')
  request.r(i773[40], i773[41], 0, i772, 'defaultReflection')
  i772.defaultReflectionMode = i773[42]
  i772.defaultReflectionResolution = i773[43]
  i772.sunLightObjectId = i773[44]
  i772.pixelLightCount = i773[45]
  i772.defaultReflectionHDR = !!i773[46]
  i772.hasLightDataAsset = !!i773[47]
  i772.hasManualGenerate = !!i773[48]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'lightmapColor')
  request.r(i779[2], i779[3], 0, i778, 'lightmapDirection')
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i780 = root || new UnityEngine.LightProbes()
  var i781 = data
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i791[i + 0]));
  }
  i788.ShaderCompilationErrors = i790
  i788.name = i789[1]
  i788.guid = i789[2]
  var i793 = i789[3]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( i793[i + 0] );
  }
  i788.shaderDefinedKeywords = i792
  var i795 = i789[4]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i795[i + 0]) );
  }
  i788.passes = i794
  var i797 = i789[5]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i797[i + 0]) );
  }
  i788.usePasses = i796
  var i799 = i789[6]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i799[i + 0]) );
  }
  i788.defaultParameterValues = i798
  request.r(i789[7], i789[8], 0, i788, 'unityFallbackShader')
  i788.readDepth = !!i789[9]
  i788.isCreatedByShaderGraph = !!i789[10]
  i788.compiled = !!i789[11]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i803 = data
  i802.shaderName = i803[0]
  i802.errorMessage = i803[1]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i808 = root || new pc.UnityShaderPass()
  var i809 = data
  i808.id = i809[0]
  i808.subShaderIndex = i809[1]
  i808.name = i809[2]
  i808.passType = i809[3]
  i808.grabPassTextureName = i809[4]
  i808.usePass = !!i809[5]
  i808.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[6], i808.zTest)
  i808.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[7], i808.zWrite)
  i808.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[8], i808.culling)
  i808.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i809[9], i808.blending)
  i808.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i809[10], i808.alphaBlending)
  i808.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[11], i808.colorWriteMask)
  i808.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[12], i808.offsetUnits)
  i808.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[13], i808.offsetFactor)
  i808.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[14], i808.stencilRef)
  i808.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[15], i808.stencilReadMask)
  i808.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[16], i808.stencilWriteMask)
  i808.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i809[17], i808.stencilOp)
  i808.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i809[18], i808.stencilOpFront)
  i808.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i809[19], i808.stencilOpBack)
  var i811 = i809[20]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i811[i + 0]) );
  }
  i808.tags = i810
  var i813 = i809[21]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( i813[i + 0] );
  }
  i808.passDefinedKeywords = i812
  var i815 = i809[22]
  var i814 = []
  for(var i = 0; i < i815.length; i += 1) {
    i814.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i815[i + 0]) );
  }
  i808.passDefinedKeywordGroups = i814
  var i817 = i809[23]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i817[i + 0]) );
  }
  i808.variants = i816
  var i819 = i809[24]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i819[i + 0]) );
  }
  i808.excludedVariants = i818
  i808.hasDepthReader = !!i809[25]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i821 = data
  i820.val = i821[0]
  i820.name = i821[1]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i823 = data
  i822.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[0], i822.src)
  i822.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[1], i822.dst)
  i822.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i823[2], i822.op)
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i825 = data
  i824.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[0], i824.pass)
  i824.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[1], i824.fail)
  i824.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[2], i824.zFail)
  i824.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i825[3], i824.comp)
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i829 = data
  i828.name = i829[0]
  i828.value = i829[1]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i833 = data
  var i835 = i833[0]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( i835[i + 0] );
  }
  i832.keywords = i834
  i832.hasDiscard = !!i833[1]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i839 = data
  i838.passId = i839[0]
  i838.subShaderIndex = i839[1]
  var i841 = i839[2]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( i841[i + 0] );
  }
  i838.keywords = i840
  i838.vertexProgram = i839[3]
  i838.fragmentProgram = i839[4]
  i838.exportedForWebGl2 = !!i839[5]
  i838.readDepth = !!i839[6]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'shader')
  i844.pass = i845[2]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i849 = data
  i848.name = i849[0]
  i848.type = i849[1]
  i848.value = new pc.Vec4( i849[2], i849[3], i849[4], i849[5] )
  i848.textureValue = i849[6]
  i848.shaderPropertyFlag = i849[7]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i851 = data
  i850.name = i851[0]
  request.r(i851[1], i851[2], 0, i850, 'texture')
  i850.aabb = i851[3]
  i850.vertices = i851[4]
  i850.triangles = i851[5]
  i850.textureRect = UnityEngine.Rect.MinMaxRect(i851[6], i851[7], i851[8], i851[9])
  i850.packedRect = UnityEngine.Rect.MinMaxRect(i851[10], i851[11], i851[12], i851[13])
  i850.border = new pc.Vec4( i851[14], i851[15], i851[16], i851[17] )
  i850.transparency = i851[18]
  i850.bounds = i851[19]
  i850.pixelsPerUnit = i851[20]
  i850.textureWidth = i851[21]
  i850.textureHeight = i851[22]
  i850.nativeSize = new pc.Vec2( i851[23], i851[24] )
  i850.pivot = new pc.Vec2( i851[25], i851[26] )
  i850.textureRectOffset = new pc.Vec2( i851[27], i851[28] )
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i853 = data
  i852.name = i853[0]
  i852.wrapMode = i853[1]
  i852.isLooping = !!i853[2]
  i852.length = i853[3]
  var i855 = i853[4]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i855[i + 0]) );
  }
  i852.curves = i854
  var i857 = i853[5]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i857[i + 0]) );
  }
  i852.events = i856
  i852.halfPrecision = !!i853[6]
  i852._frameRate = i853[7]
  i852.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i853[8], i852.localBounds)
  i852.hasMuscleCurves = !!i853[9]
  var i859 = i853[10]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i852.clipMuscleConstant = i858
  i852.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i853[11], i852.clipBindingConstant)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i863 = data
  i862.path = i863[0]
  i862.hash = i863[1]
  i862.componentType = i863[2]
  i862.property = i863[3]
  i862.keys = i863[4]
  var i865 = i863[5]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i865[i + 0]) );
  }
  i862.objectReferenceKeys = i864
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i869 = data
  i868.time = i869[0]
  request.r(i869[1], i869[2], 0, i868, 'value')
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i873 = data
  i872.functionName = i873[0]
  i872.floatParameter = i873[1]
  i872.intParameter = i873[2]
  i872.stringParameter = i873[3]
  request.r(i873[4], i873[5], 0, i872, 'objectReferenceParameter')
  i872.time = i873[6]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i875 = data
  i874.center = new pc.Vec3( i875[0], i875[1], i875[2] )
  i874.extends = new pc.Vec3( i875[3], i875[4], i875[5] )
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i879 = data
  var i881 = i879[0]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i878.genericBindings = i880
  var i883 = i879[1]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( i883[i + 0] );
  }
  i878.pptrCurveMapping = i882
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i885 = data
  i884.name = i885[0]
  i884.ascent = i885[1]
  i884.originalLineHeight = i885[2]
  i884.fontSize = i885[3]
  var i887 = i885[4]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i887[i + 0]) );
  }
  i884.characterInfo = i886
  request.r(i885[5], i885[6], 0, i884, 'texture')
  i884.originalFontSize = i885[7]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i891 = data
  i890.index = i891[0]
  i890.advance = i891[1]
  i890.bearing = i891[2]
  i890.glyphWidth = i891[3]
  i890.glyphHeight = i891[4]
  i890.minX = i891[5]
  i890.maxX = i891[6]
  i890.minY = i891[7]
  i890.maxY = i891[8]
  i890.uvBottomLeftX = i891[9]
  i890.uvBottomLeftY = i891[10]
  i890.uvBottomRightX = i891[11]
  i890.uvBottomRightY = i891[12]
  i890.uvTopLeftX = i891[13]
  i890.uvTopLeftY = i891[14]
  i890.uvTopRightX = i891[15]
  i890.uvTopRightY = i891[16]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i893 = data
  i892.name = i893[0]
  var i895 = i893[1]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i895[i + 0]) );
  }
  i892.layers = i894
  var i897 = i893[2]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i897[i + 0]) );
  }
  i892.parameters = i896
  i892.animationClips = i893[3]
  i892.avatarUnsupported = i893[4]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i901 = data
  i900.name = i901[0]
  i900.defaultWeight = i901[1]
  i900.blendingMode = i901[2]
  i900.avatarMask = i901[3]
  i900.syncedLayerIndex = i901[4]
  i900.syncedLayerAffectsTiming = !!i901[5]
  i900.syncedLayers = i901[6]
  i900.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i901[7], i900.stateMachine)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i903 = data
  i902.id = i903[0]
  i902.name = i903[1]
  i902.path = i903[2]
  var i905 = i903[3]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i905[i + 0]) );
  }
  i902.states = i904
  var i907 = i903[4]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i907[i + 0]) );
  }
  i902.machines = i906
  var i909 = i903[5]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i909[i + 0]) );
  }
  i902.entryStateTransitions = i908
  var i911 = i903[6]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i911[i + 0]) );
  }
  i902.exitStateTransitions = i910
  var i913 = i903[7]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i913[i + 0]) );
  }
  i902.anyStateTransitions = i912
  i902.defaultStateId = i903[8]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i917 = data
  i916.id = i917[0]
  i916.name = i917[1]
  i916.cycleOffset = i917[2]
  i916.cycleOffsetParameter = i917[3]
  i916.cycleOffsetParameterActive = !!i917[4]
  i916.mirror = !!i917[5]
  i916.mirrorParameter = i917[6]
  i916.mirrorParameterActive = !!i917[7]
  i916.motionId = i917[8]
  i916.nameHash = i917[9]
  i916.fullPathHash = i917[10]
  i916.speed = i917[11]
  i916.speedParameter = i917[12]
  i916.speedParameterActive = !!i917[13]
  i916.tag = i917[14]
  i916.tagHash = i917[15]
  i916.writeDefaultValues = !!i917[16]
  var i919 = i917[17]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.behaviours = i918
  var i921 = i917[18]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i921[i + 0]) );
  }
  i916.transitions = i920
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i927 = data
  i926.fullPath = i927[0]
  i926.canTransitionToSelf = !!i927[1]
  i926.duration = i927[2]
  i926.exitTime = i927[3]
  i926.hasExitTime = !!i927[4]
  i926.hasFixedDuration = !!i927[5]
  i926.interruptionSource = i927[6]
  i926.offset = i927[7]
  i926.orderedInterruption = !!i927[8]
  i926.destinationStateId = i927[9]
  i926.isExit = !!i927[10]
  i926.mute = !!i927[11]
  i926.solo = !!i927[12]
  var i929 = i927[13]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i929[i + 0]) );
  }
  i926.conditions = i928
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i933 = data
  i932.mode = i933[0]
  i932.parameter = i933[1]
  i932.threshold = i933[2]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i939 = data
  i938.destinationStateId = i939[0]
  i938.isExit = !!i939[1]
  i938.mute = !!i939[2]
  i938.solo = !!i939[3]
  var i941 = i939[4]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i941[i + 0]) );
  }
  i938.conditions = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i945 = data
  i944.defaultBool = !!i945[0]
  i944.defaultFloat = i945[1]
  i944.defaultInt = i945[2]
  i944.name = i945[3]
  i944.nameHash = i945[4]
  i944.type = i945[5]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i947 = data
  i946.name = i947[0]
  i946.bytes64 = i947[1]
  i946.data = i947[2]
  return i946
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i948 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i949 = data
  i948.hashCode = i949[0]
  request.r(i949[1], i949[2], 0, i948, 'material')
  i948.materialHashCode = i949[3]
  request.r(i949[4], i949[5], 0, i948, 'atlas')
  i948.normalStyle = i949[6]
  i948.normalSpacingOffset = i949[7]
  i948.boldStyle = i949[8]
  i948.boldSpacing = i949[9]
  i948.italicStyle = i949[10]
  i948.tabSize = i949[11]
  i948.m_Version = i949[12]
  i948.m_SourceFontFileGUID = i949[13]
  request.r(i949[14], i949[15], 0, i948, 'm_SourceFontFile_EditorRef')
  request.r(i949[16], i949[17], 0, i948, 'm_SourceFontFile')
  i948.m_AtlasPopulationMode = i949[18]
  i948.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i949[19], i948.m_FaceInfo)
  var i951 = i949[20]
  var i950 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i951.length; i += 1) {
    i950.add(request.d('UnityEngine.TextCore.Glyph', i951[i + 0]));
  }
  i948.m_GlyphTable = i950
  var i953 = i949[21]
  var i952 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i953.length; i += 1) {
    i952.add(request.d('TMPro.TMP_Character', i953[i + 0]));
  }
  i948.m_CharacterTable = i952
  var i955 = i949[22]
  var i954 = []
  for(var i = 0; i < i955.length; i += 2) {
  request.r(i955[i + 0], i955[i + 1], 2, i954, '')
  }
  i948.m_AtlasTextures = i954
  i948.m_AtlasTextureIndex = i949[23]
  i948.m_IsMultiAtlasTexturesEnabled = !!i949[24]
  i948.m_ClearDynamicDataOnBuild = !!i949[25]
  var i957 = i949[26]
  var i956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i957.length; i += 1) {
    i956.add(request.d('UnityEngine.TextCore.GlyphRect', i957[i + 0]));
  }
  i948.m_UsedGlyphRects = i956
  var i959 = i949[27]
  var i958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i959.length; i += 1) {
    i958.add(request.d('UnityEngine.TextCore.GlyphRect', i959[i + 0]));
  }
  i948.m_FreeGlyphRects = i958
  i948.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i949[28], i948.m_fontInfo)
  i948.m_AtlasWidth = i949[29]
  i948.m_AtlasHeight = i949[30]
  i948.m_AtlasPadding = i949[31]
  i948.m_AtlasRenderMode = i949[32]
  var i961 = i949[33]
  var i960 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i961.length; i += 1) {
    i960.add(request.d('TMPro.TMP_Glyph', i961[i + 0]));
  }
  i948.m_glyphInfoList = i960
  i948.m_KerningTable = request.d('TMPro.KerningTable', i949[34], i948.m_KerningTable)
  i948.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i949[35], i948.m_FontFeatureTable)
  var i963 = i949[36]
  var i962 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i963.length; i += 2) {
  request.r(i963[i + 0], i963[i + 1], 1, i962, '')
  }
  i948.fallbackFontAssets = i962
  var i965 = i949[37]
  var i964 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i965.length; i += 2) {
  request.r(i965[i + 0], i965[i + 1], 1, i964, '')
  }
  i948.m_FallbackFontAssetTable = i964
  i948.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i949[38], i948.m_CreationSettings)
  var i967 = i949[39]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('TMPro.TMP_FontWeightPair', i967[i + 0]) );
  }
  i948.m_FontWeightTable = i966
  var i969 = i949[40]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('TMPro.TMP_FontWeightPair', i969[i + 0]) );
  }
  i948.fontWeights = i968
  return i948
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i970 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i971 = data
  i970.m_FaceIndex = i971[0]
  i970.m_FamilyName = i971[1]
  i970.m_StyleName = i971[2]
  i970.m_PointSize = i971[3]
  i970.m_Scale = i971[4]
  i970.m_UnitsPerEM = i971[5]
  i970.m_LineHeight = i971[6]
  i970.m_AscentLine = i971[7]
  i970.m_CapLine = i971[8]
  i970.m_MeanLine = i971[9]
  i970.m_Baseline = i971[10]
  i970.m_DescentLine = i971[11]
  i970.m_SuperscriptOffset = i971[12]
  i970.m_SuperscriptSize = i971[13]
  i970.m_SubscriptOffset = i971[14]
  i970.m_SubscriptSize = i971[15]
  i970.m_UnderlineOffset = i971[16]
  i970.m_UnderlineThickness = i971[17]
  i970.m_StrikethroughOffset = i971[18]
  i970.m_StrikethroughThickness = i971[19]
  i970.m_TabWidth = i971[20]
  return i970
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i974 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i975 = data
  i974.m_Index = i975[0]
  i974.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i975[1], i974.m_Metrics)
  i974.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i975[2], i974.m_GlyphRect)
  i974.m_Scale = i975[3]
  i974.m_AtlasIndex = i975[4]
  i974.m_ClassDefinitionType = i975[5]
  return i974
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i976 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i977 = data
  i976.m_Width = i977[0]
  i976.m_Height = i977[1]
  i976.m_HorizontalBearingX = i977[2]
  i976.m_HorizontalBearingY = i977[3]
  i976.m_HorizontalAdvance = i977[4]
  return i976
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i978 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i979 = data
  i978.m_X = i979[0]
  i978.m_Y = i979[1]
  i978.m_Width = i979[2]
  i978.m_Height = i979[3]
  return i978
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i982 = root || request.c( 'TMPro.TMP_Character' )
  var i983 = data
  i982.m_ElementType = i983[0]
  i982.m_Unicode = i983[1]
  i982.m_GlyphIndex = i983[2]
  i982.m_Scale = i983[3]
  return i982
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i988 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i989 = data
  i988.Name = i989[0]
  i988.PointSize = i989[1]
  i988.Scale = i989[2]
  i988.CharacterCount = i989[3]
  i988.LineHeight = i989[4]
  i988.Baseline = i989[5]
  i988.Ascender = i989[6]
  i988.CapHeight = i989[7]
  i988.Descender = i989[8]
  i988.CenterLine = i989[9]
  i988.SuperscriptOffset = i989[10]
  i988.SubscriptOffset = i989[11]
  i988.SubSize = i989[12]
  i988.Underline = i989[13]
  i988.UnderlineThickness = i989[14]
  i988.strikethrough = i989[15]
  i988.strikethroughThickness = i989[16]
  i988.TabWidth = i989[17]
  i988.Padding = i989[18]
  i988.AtlasWidth = i989[19]
  i988.AtlasHeight = i989[20]
  return i988
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_Glyph' )
  var i993 = data
  i992.id = i993[0]
  i992.x = i993[1]
  i992.y = i993[2]
  i992.width = i993[3]
  i992.height = i993[4]
  i992.xOffset = i993[5]
  i992.yOffset = i993[6]
  i992.xAdvance = i993[7]
  i992.scale = i993[8]
  return i992
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i994 = root || request.c( 'TMPro.KerningTable' )
  var i995 = data
  var i997 = i995[0]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('TMPro.KerningPair', i997[i + 0]));
  }
  i994.kerningPairs = i996
  return i994
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1000 = root || request.c( 'TMPro.KerningPair' )
  var i1001 = data
  i1000.xOffset = i1001[0]
  i1000.m_FirstGlyph = i1001[1]
  i1000.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1001[2], i1000.m_FirstGlyphAdjustments)
  i1000.m_SecondGlyph = i1001[3]
  i1000.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1001[4], i1000.m_SecondGlyphAdjustments)
  i1000.m_IgnoreSpacingAdjustments = !!i1001[5]
  return i1000
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1002 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1003 = data
  var i1005 = i1003[0]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1005[i + 0]));
  }
  i1002.m_GlyphPairAdjustmentRecords = i1004
  return i1002
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1008 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1009 = data
  i1008.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1009[0], i1008.m_FirstAdjustmentRecord)
  i1008.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1009[1], i1008.m_SecondAdjustmentRecord)
  i1008.m_FeatureLookupFlags = i1009[2]
  return i1008
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1010 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1011 = data
  i1010.m_GlyphIndex = i1011[0]
  i1010.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1011[1], i1010.m_GlyphValueRecord)
  return i1010
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1012 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1013 = data
  i1012.m_XPlacement = i1013[0]
  i1012.m_YPlacement = i1013[1]
  i1012.m_XAdvance = i1013[2]
  i1012.m_YAdvance = i1013[3]
  return i1012
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1017 = data
  i1016.sourceFontFileName = i1017[0]
  i1016.sourceFontFileGUID = i1017[1]
  i1016.pointSizeSamplingMode = i1017[2]
  i1016.pointSize = i1017[3]
  i1016.padding = i1017[4]
  i1016.packingMode = i1017[5]
  i1016.atlasWidth = i1017[6]
  i1016.atlasHeight = i1017[7]
  i1016.characterSetSelectionMode = i1017[8]
  i1016.characterSequence = i1017[9]
  i1016.referencedFontAssetGUID = i1017[10]
  i1016.referencedTextAssetGUID = i1017[11]
  i1016.fontStyle = i1017[12]
  i1016.fontStyleModifier = i1017[13]
  i1016.renderMode = i1017[14]
  i1016.includeFontFeatures = !!i1017[15]
  return i1016
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1020 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1021 = data
  request.r(i1021[0], i1021[1], 0, i1020, 'regularTypeface')
  request.r(i1021[2], i1021[3], 0, i1020, 'italicTypeface')
  return i1020
}

Deserializers["_Project.Code.Core.Character.TopDownAnimatorState"] = function (request, data, root) {
  var i1022 = root || request.c( '_Project.Code.Core.Character.TopDownAnimatorState' )
  var i1023 = data
  i1022._layer = i1023[0]
  request.r(i1023[1], i1023[2], 0, i1022, '_animationConfig')
  i1022._parameterX = i1023[3]
  i1022._parameterY = i1023[4]
  return i1022
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig"] = function (request, data, root) {
  var i1024 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig' )
  var i1025 = data
  var i1027 = i1025[0]
  var i1026 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Character.DirectedAnimation')))
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.add(request.d('_Project.Code.Core.Character.DirectedAnimation', i1027[i + 0]));
  }
  i1024.Animations = i1026
  return i1024
}

Deserializers["_Project.Code.Core.Character.DirectedAnimation"] = function (request, data, root) {
  var i1030 = root || request.c( '_Project.Code.Core.Character.DirectedAnimation' )
  var i1031 = data
  request.r(i1031[0], i1031[1], 0, i1030, 'Clip')
  i1030.Direction = new pc.Vec2( i1031[2], i1031[3] )
  i1030.Flip = !!i1031[4]
  return i1030
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1032 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1033 = data
  i1032.useSafeMode = !!i1033[0]
  i1032.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1033[1], i1032.safeModeOptions)
  i1032.timeScale = i1033[2]
  i1032.unscaledTimeScale = i1033[3]
  i1032.useSmoothDeltaTime = !!i1033[4]
  i1032.maxSmoothUnscaledTime = i1033[5]
  i1032.rewindCallbackMode = i1033[6]
  i1032.showUnityEditorReport = !!i1033[7]
  i1032.logBehaviour = i1033[8]
  i1032.drawGizmos = !!i1033[9]
  i1032.defaultRecyclable = !!i1033[10]
  i1032.defaultAutoPlay = i1033[11]
  i1032.defaultUpdateType = i1033[12]
  i1032.defaultTimeScaleIndependent = !!i1033[13]
  i1032.defaultEaseType = i1033[14]
  i1032.defaultEaseOvershootOrAmplitude = i1033[15]
  i1032.defaultEasePeriod = i1033[16]
  i1032.defaultAutoKill = !!i1033[17]
  i1032.defaultLoopType = i1033[18]
  i1032.debugMode = !!i1033[19]
  i1032.debugStoreTargetId = !!i1033[20]
  i1032.showPreviewPanel = !!i1033[21]
  i1032.storeSettingsLocation = i1033[22]
  i1032.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1033[23], i1032.modules)
  i1032.createASMDEF = !!i1033[24]
  i1032.showPlayingTweens = !!i1033[25]
  i1032.showPausedTweens = !!i1033[26]
  return i1032
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1034 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1035 = data
  i1034.logBehaviour = i1035[0]
  i1034.nestedTweenFailureBehaviour = i1035[1]
  return i1034
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1036 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1037 = data
  i1036.showPanel = !!i1037[0]
  i1036.audioEnabled = !!i1037[1]
  i1036.physicsEnabled = !!i1037[2]
  i1036.physics2DEnabled = !!i1037[3]
  i1036.spriteEnabled = !!i1037[4]
  i1036.uiEnabled = !!i1037[5]
  i1036.textMeshProEnabled = !!i1037[6]
  i1036.tk2DEnabled = !!i1037[7]
  i1036.deAudioEnabled = !!i1037[8]
  i1036.deUnityExtendedEnabled = !!i1037[9]
  i1036.epoOutlineEnabled = !!i1037[10]
  return i1036
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.TMP_Settings' )
  var i1039 = data
  i1038.m_enableWordWrapping = !!i1039[0]
  i1038.m_enableKerning = !!i1039[1]
  i1038.m_enableExtraPadding = !!i1039[2]
  i1038.m_enableTintAllSprites = !!i1039[3]
  i1038.m_enableParseEscapeCharacters = !!i1039[4]
  i1038.m_EnableRaycastTarget = !!i1039[5]
  i1038.m_GetFontFeaturesAtRuntime = !!i1039[6]
  i1038.m_missingGlyphCharacter = i1039[7]
  i1038.m_warningsDisabled = !!i1039[8]
  request.r(i1039[9], i1039[10], 0, i1038, 'm_defaultFontAsset')
  i1038.m_defaultFontAssetPath = i1039[11]
  i1038.m_defaultFontSize = i1039[12]
  i1038.m_defaultAutoSizeMinRatio = i1039[13]
  i1038.m_defaultAutoSizeMaxRatio = i1039[14]
  i1038.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1039[15], i1039[16] )
  i1038.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1039[17], i1039[18] )
  i1038.m_autoSizeTextContainer = !!i1039[19]
  i1038.m_IsTextObjectScaleStatic = !!i1039[20]
  var i1041 = i1039[21]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1041.length; i += 2) {
  request.r(i1041[i + 0], i1041[i + 1], 1, i1040, '')
  }
  i1038.m_fallbackFontAssets = i1040
  i1038.m_matchMaterialPreset = !!i1039[22]
  request.r(i1039[23], i1039[24], 0, i1038, 'm_defaultSpriteAsset')
  i1038.m_defaultSpriteAssetPath = i1039[25]
  i1038.m_enableEmojiSupport = !!i1039[26]
  i1038.m_MissingCharacterSpriteUnicode = i1039[27]
  i1038.m_defaultColorGradientPresetsPath = i1039[28]
  request.r(i1039[29], i1039[30], 0, i1038, 'm_defaultStyleSheet')
  i1038.m_StyleSheetsResourcePath = i1039[31]
  request.r(i1039[32], i1039[33], 0, i1038, 'm_leadingCharacters')
  request.r(i1039[34], i1039[35], 0, i1038, 'm_followingCharacters')
  i1038.m_UseModernHangulLineBreakingRules = !!i1039[36]
  return i1038
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1042 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1043 = data
  i1042.hashCode = i1043[0]
  request.r(i1043[1], i1043[2], 0, i1042, 'material')
  i1042.materialHashCode = i1043[3]
  request.r(i1043[4], i1043[5], 0, i1042, 'spriteSheet')
  var i1045 = i1043[6]
  var i1044 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.add(request.d('TMPro.TMP_Sprite', i1045[i + 0]));
  }
  i1042.spriteInfoList = i1044
  var i1047 = i1043[7]
  var i1046 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1047.length; i += 2) {
  request.r(i1047[i + 0], i1047[i + 1], 1, i1046, '')
  }
  i1042.fallbackSpriteAssets = i1046
  i1042.m_Version = i1043[8]
  i1042.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1043[9], i1042.m_FaceInfo)
  var i1049 = i1043[10]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('TMPro.TMP_SpriteCharacter', i1049[i + 0]));
  }
  i1042.m_SpriteCharacterTable = i1048
  var i1051 = i1043[11]
  var i1050 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.add(request.d('TMPro.TMP_SpriteGlyph', i1051[i + 0]));
  }
  i1042.m_SpriteGlyphTable = i1050
  return i1042
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1055 = data
  i1054.name = i1055[0]
  i1054.hashCode = i1055[1]
  i1054.unicode = i1055[2]
  i1054.pivot = new pc.Vec2( i1055[3], i1055[4] )
  request.r(i1055[5], i1055[6], 0, i1054, 'sprite')
  i1054.id = i1055[7]
  i1054.x = i1055[8]
  i1054.y = i1055[9]
  i1054.width = i1055[10]
  i1054.height = i1055[11]
  i1054.xOffset = i1055[12]
  i1054.yOffset = i1055[13]
  i1054.xAdvance = i1055[14]
  i1054.scale = i1055[15]
  return i1054
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1060 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1061 = data
  i1060.m_Name = i1061[0]
  i1060.m_HashCode = i1061[1]
  i1060.m_ElementType = i1061[2]
  i1060.m_Unicode = i1061[3]
  i1060.m_GlyphIndex = i1061[4]
  i1060.m_Scale = i1061[5]
  return i1060
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1065 = data
  request.r(i1065[0], i1065[1], 0, i1064, 'sprite')
  i1064.m_Index = i1065[2]
  i1064.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1065[3], i1064.m_Metrics)
  i1064.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1065[4], i1064.m_GlyphRect)
  i1064.m_Scale = i1065[5]
  i1064.m_AtlasIndex = i1065[6]
  i1064.m_ClassDefinitionType = i1065[7]
  return i1064
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1066 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1067 = data
  var i1069 = i1067[0]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.add(request.d('TMPro.TMP_Style', i1069[i + 0]));
  }
  i1066.m_StyleList = i1068
  return i1066
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1072 = root || request.c( 'TMPro.TMP_Style' )
  var i1073 = data
  i1072.m_Name = i1073[0]
  i1072.m_HashCode = i1073[1]
  i1072.m_OpeningDefinition = i1073[2]
  i1072.m_ClosingDefinition = i1073[3]
  i1072.m_OpeningTagArray = i1073[4]
  i1072.m_ClosingTagArray = i1073[5]
  i1072.m_OpeningTagUnicodeArray = i1073[6]
  i1072.m_ClosingTagUnicodeArray = i1073[7]
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1075 = data
  var i1077 = i1075[0]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1077[i + 0]) );
  }
  i1074.files = i1076
  i1074.componentToPrefabIds = i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1081 = data
  i1080.path = i1081[0]
  request.r(i1081[1], i1081[2], 0, i1080, 'unityObject')
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1083 = data
  var i1085 = i1083[0]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1085[i + 0]) );
  }
  i1082.scriptsExecutionOrder = i1084
  var i1087 = i1083[1]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1087[i + 0]) );
  }
  i1082.sortingLayers = i1086
  var i1089 = i1083[2]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1089[i + 0]) );
  }
  i1082.cullingLayers = i1088
  i1082.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1083[3], i1082.timeSettings)
  i1082.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1083[4], i1082.physicsSettings)
  i1082.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1083[5], i1082.physics2DSettings)
  i1082.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1083[6], i1082.qualitySettings)
  i1082.enableRealtimeShadows = !!i1083[7]
  i1082.enableAutoInstancing = !!i1083[8]
  i1082.enableDynamicBatching = !!i1083[9]
  i1082.lightmapEncodingQuality = i1083[10]
  i1082.desiredColorSpace = i1083[11]
  var i1091 = i1083[12]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( i1091[i + 0] );
  }
  i1082.allTags = i1090
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1095 = data
  i1094.name = i1095[0]
  i1094.value = i1095[1]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1099 = data
  i1098.id = i1099[0]
  i1098.name = i1099[1]
  i1098.value = i1099[2]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1103 = data
  i1102.id = i1103[0]
  i1102.name = i1103[1]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1105 = data
  i1104.fixedDeltaTime = i1105[0]
  i1104.maximumDeltaTime = i1105[1]
  i1104.timeScale = i1105[2]
  i1104.maximumParticleTimestep = i1105[3]
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1107 = data
  i1106.gravity = new pc.Vec3( i1107[0], i1107[1], i1107[2] )
  i1106.defaultSolverIterations = i1107[3]
  i1106.bounceThreshold = i1107[4]
  i1106.autoSyncTransforms = !!i1107[5]
  i1106.autoSimulation = !!i1107[6]
  var i1109 = i1107[7]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 1) {
    i1108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1109[i + 0]) );
  }
  i1106.collisionMatrix = i1108
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1113 = data
  i1112.enabled = !!i1113[0]
  i1112.layerId = i1113[1]
  i1112.otherLayerId = i1113[2]
  return i1112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1115 = data
  request.r(i1115[0], i1115[1], 0, i1114, 'material')
  i1114.gravity = new pc.Vec2( i1115[2], i1115[3] )
  i1114.positionIterations = i1115[4]
  i1114.velocityIterations = i1115[5]
  i1114.velocityThreshold = i1115[6]
  i1114.maxLinearCorrection = i1115[7]
  i1114.maxAngularCorrection = i1115[8]
  i1114.maxTranslationSpeed = i1115[9]
  i1114.maxRotationSpeed = i1115[10]
  i1114.baumgarteScale = i1115[11]
  i1114.baumgarteTOIScale = i1115[12]
  i1114.timeToSleep = i1115[13]
  i1114.linearSleepTolerance = i1115[14]
  i1114.angularSleepTolerance = i1115[15]
  i1114.defaultContactOffset = i1115[16]
  i1114.autoSimulation = !!i1115[17]
  i1114.queriesHitTriggers = !!i1115[18]
  i1114.queriesStartInColliders = !!i1115[19]
  i1114.callbacksOnDisable = !!i1115[20]
  i1114.reuseCollisionCallbacks = !!i1115[21]
  i1114.autoSyncTransforms = !!i1115[22]
  var i1117 = i1115[23]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1117[i + 0]) );
  }
  i1114.collisionMatrix = i1116
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1121 = data
  i1120.enabled = !!i1121[0]
  i1120.layerId = i1121[1]
  i1120.otherLayerId = i1121[2]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1123 = data
  var i1125 = i1123[0]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1125[i + 0]) );
  }
  i1122.qualityLevels = i1124
  var i1127 = i1123[1]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( i1127[i + 0] );
  }
  i1122.names = i1126
  i1122.shadows = i1123[2]
  i1122.anisotropicFiltering = i1123[3]
  i1122.antiAliasing = i1123[4]
  i1122.lodBias = i1123[5]
  i1122.shadowCascades = i1123[6]
  i1122.shadowDistance = i1123[7]
  i1122.shadowmaskMode = i1123[8]
  i1122.shadowProjection = i1123[9]
  i1122.shadowResolution = i1123[10]
  i1122.softParticles = !!i1123[11]
  i1122.softVegetation = !!i1123[12]
  i1122.activeColorSpace = i1123[13]
  i1122.desiredColorSpace = i1123[14]
  i1122.masterTextureLimit = i1123[15]
  i1122.maxQueuedFrames = i1123[16]
  i1122.particleRaycastBudget = i1123[17]
  i1122.pixelLightCount = i1123[18]
  i1122.realtimeReflectionProbes = !!i1123[19]
  i1122.shadowCascade2Split = i1123[20]
  i1122.shadowCascade4Split = new pc.Vec3( i1123[21], i1123[22], i1123[23] )
  i1122.streamingMipmapsActive = !!i1123[24]
  i1122.vSyncCount = i1123[25]
  i1122.asyncUploadBufferSize = i1123[26]
  i1122.asyncUploadTimeSlice = i1123[27]
  i1122.billboardsFaceCameraPosition = !!i1123[28]
  i1122.shadowNearPlaneOffset = i1123[29]
  i1122.streamingMipmapsMemoryBudget = i1123[30]
  i1122.maximumLODLevel = i1123[31]
  i1122.streamingMipmapsAddAllCameras = !!i1123[32]
  i1122.streamingMipmapsMaxLevelReduction = i1123[33]
  i1122.streamingMipmapsRenderersPerFrame = i1123[34]
  i1122.resolutionScalingFixedDPIFactor = i1123[35]
  i1122.streamingMipmapsMaxFileIORequests = i1123[36]
  i1122.currentQualityLevel = i1123[37]
  return i1122
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1130 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1131 = data
  i1130.xPlacement = i1131[0]
  i1130.yPlacement = i1131[1]
  i1130.xAdvance = i1131[2]
  i1130.yAdvance = i1131[3]
  return i1130
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[74],"75":[35],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[13],"85":[13],"86":[13],"87":[13],"88":[13],"89":[13],"90":[13],"91":[13],"92":[13],"93":[13],"94":[13],"95":[13],"96":[13],"97":[35],"98":[99],"100":[101],"102":[101],"30":[19],"103":[41],"39":[41],"28":[2],"17":[1],"104":[105],"106":[2],"107":[105],"108":[19],"109":[19],"32":[30],"24":[20,19],"110":[19],"31":[30],"111":[19],"112":[19],"113":[19],"114":[19],"115":[19],"116":[19],"117":[19],"49":[19],"118":[19],"119":[20,19],"120":[19],"121":[19],"122":[19],"123":[19],"124":[20,19],"125":[19],"126":[51],"127":[51],"52":[51],"128":[51],"129":[35],"130":[35],"131":[132],"133":[35],"134":[19],"135":[99,19],"22":[19,20],"136":[19],"137":[20,19],"138":[99],"139":[20,19],"140":[19],"141":[105]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","UnityEngine.Material","UnityEngine.Sprite","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.MonoBehaviour","_Project.Code.Core.Character.CharacterInstaller","_Project.Code.Core.Character.Mover","_Project.Code.Core.Collision.OverlapCollisionDetector","_Project.Code.Core.Character.CharacterAnimator","_Project.Code.Core.Items.Inventory.ItemInventory","UnityEngine.Rigidbody2D","UnityEngine.CircleCollider2D","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","_Project.Code.Core.Character.SortingGroupAnimator","_Project.Code.Core.Items.Inventory.ColumnInventoryView","UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.UI.Image","_Project.Code.Core.Items.Item","_Project.Code.Core.Harvesting.Field","_Project.Code.Core.Items.InventoryInitializer","_Project.Code.Selling.Customer","_Project.Code.Selling.Line.BubbleView","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","_Project.Code.Camera.CameraInBordersZoom","UnityEngine.BoxCollider2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.PolygonCollider2D","_Project.Code.Camera.Follower","_Project.Code.Entry.EntryPoint","VariableJoystick","_Project.Code.Services.CoroutineRunner.CoroutineRunner","_Project.Code.Core.Buyables.EndScreenShower","_Project.Code.Core.Buyables.Buyable","UnityEngine.GameObject","_Project.Code.Tutorial.Tutorial","ArrowAnimator","UnityEngine.EdgeCollider2D","_Project.Code.Core.Buyables.CoinsViewUpdater","UnityEngine.UI.Mask","_Project.Code.Core.Animations.BreathAnimation","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","_Project.Code.Selling.Line.Line","_Project.Code.Selling.Seller","_Project.Code.Core.Buyables.InventorViewDestroyer","_Project.Code.Core.PopcornFarm.CornFarm","_Project.Code.Core.Character.TopDownAnimatorState","UnityEngine.Font","_Project.Code.Core.Character.TopDownAnimationConfig","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","_Project.Code.Entry.Entry","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "SpongeBob-Playable";

Deserializers.lunaInitializationTime = "03/26/2025 08:26:55";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "6.2.1";

Deserializers.lunaSHA = "28f227c1b455c28500de29df936f0d1376ee9c43";

Deserializers.creativeName = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "0";

Deserializers.runtimeAnalysisExcludedMethodsCount = "0";

Deserializers.runtimeAnalysisExcludedModules = "";

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

Deserializers.buildID = "0a986876-54e3-4f4a-9e36-9dbc7071ffe7";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

