var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1764 = root || request.c( 'UnityEngine.JointSpring' )
  var i1765 = data
  i1764.spring = i1765[0]
  i1764.damper = i1765[1]
  i1764.targetPosition = i1765[2]
  return i1764
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.JointMotor' )
  var i1767 = data
  i1766.m_TargetVelocity = i1767[0]
  i1766.m_Force = i1767[1]
  i1766.m_FreeSpin = i1767[2]
  return i1766
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1768 = root || request.c( 'UnityEngine.JointLimits' )
  var i1769 = data
  i1768.m_Min = i1769[0]
  i1768.m_Max = i1769[1]
  i1768.m_Bounciness = i1769[2]
  i1768.m_BounceMinVelocity = i1769[3]
  i1768.m_ContactDistance = i1769[4]
  i1768.minBounce = i1769[5]
  i1768.maxBounce = i1769[6]
  return i1768
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1770 = root || request.c( 'UnityEngine.JointDrive' )
  var i1771 = data
  i1770.m_PositionSpring = i1771[0]
  i1770.m_PositionDamper = i1771[1]
  i1770.m_MaximumForce = i1771[2]
  i1770.m_UseAcceleration = i1771[3]
  return i1770
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1773 = data
  i1772.m_Spring = i1773[0]
  i1772.m_Damper = i1773[1]
  return i1772
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1775 = data
  i1774.m_Limit = i1775[0]
  i1774.m_Bounciness = i1775[1]
  i1774.m_ContactDistance = i1775[2]
  return i1774
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1777 = data
  i1776.m_ExtremumSlip = i1777[0]
  i1776.m_ExtremumValue = i1777[1]
  i1776.m_AsymptoteSlip = i1777[2]
  i1776.m_AsymptoteValue = i1777[3]
  i1776.m_Stiffness = i1777[4]
  return i1776
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1779 = data
  i1778.m_LowerAngle = i1779[0]
  i1778.m_UpperAngle = i1779[1]
  return i1778
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1780 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1781 = data
  i1780.m_MotorSpeed = i1781[0]
  i1780.m_MaximumMotorTorque = i1781[1]
  return i1780
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1783 = data
  i1782.m_DampingRatio = i1783[0]
  i1782.m_Frequency = i1783[1]
  i1782.m_Angle = i1783[2]
  return i1782
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1785 = data
  i1784.m_LowerTranslation = i1785[0]
  i1784.m_UpperTranslation = i1785[1]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1787 = data
  i1786.pivot = new pc.Vec2( i1787[0], i1787[1] )
  i1786.anchorMin = new pc.Vec2( i1787[2], i1787[3] )
  i1786.anchorMax = new pc.Vec2( i1787[4], i1787[5] )
  i1786.sizeDelta = new pc.Vec2( i1787[6], i1787[7] )
  i1786.anchoredPosition3D = new pc.Vec3( i1787[8], i1787[9], i1787[10] )
  i1786.rotation = new pc.Quat(i1787[11], i1787[12], i1787[13], i1787[14])
  i1786.scale = new pc.Vec3( i1787[15], i1787[16], i1787[17] )
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1789 = data
  i1788.cullTransparentMesh = !!i1789[0]
  return i1788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.UI.Image' )
  var i1791 = data
  request.r(i1791[0], i1791[1], 0, i1790, 'm_Sprite')
  i1790.m_Type = i1791[2]
  i1790.m_PreserveAspect = !!i1791[3]
  i1790.m_FillCenter = !!i1791[4]
  i1790.m_FillMethod = i1791[5]
  i1790.m_FillAmount = i1791[6]
  i1790.m_FillClockwise = !!i1791[7]
  i1790.m_FillOrigin = i1791[8]
  i1790.m_UseSpriteMesh = !!i1791[9]
  i1790.m_PixelsPerUnitMultiplier = i1791[10]
  request.r(i1791[11], i1791[12], 0, i1790, 'm_Material')
  i1790.m_Maskable = !!i1791[13]
  i1790.m_Color = new pc.Color(i1791[14], i1791[15], i1791[16], i1791[17])
  i1790.m_RaycastTarget = !!i1791[18]
  i1790.m_RaycastPadding = new pc.Vec4( i1791[19], i1791[20], i1791[21], i1791[22] )
  return i1790
}

Deserializers["FloatingJoystick"] = function (request, data, root) {
  var i1792 = root || request.c( 'FloatingJoystick' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'background')
  i1792.handleRange = i1793[2]
  i1792.deadZone = i1793[3]
  i1792.axisOptions = i1793[4]
  i1792.snapX = !!i1793[5]
  i1792.snapY = !!i1793[6]
  request.r(i1793[7], i1793[8], 0, i1792, '_handle')
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1795 = data
  i1794.name = i1795[0]
  i1794.tagId = i1795[1]
  i1794.enabled = !!i1795[2]
  i1794.isStatic = !!i1795[3]
  i1794.layer = i1795[4]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1797 = data
  i1796.name = i1797[0]
  i1796.width = i1797[1]
  i1796.height = i1797[2]
  i1796.mipmapCount = i1797[3]
  i1796.anisoLevel = i1797[4]
  i1796.filterMode = i1797[5]
  i1796.hdr = !!i1797[6]
  i1796.format = i1797[7]
  i1796.wrapMode = i1797[8]
  i1796.alphaIsTransparency = !!i1797[9]
  i1796.alphaSource = i1797[10]
  i1796.graphicsFormat = i1797[11]
  i1796.sRGBTexture = !!i1797[12]
  i1796.desiredColorSpace = i1797[13]
  i1796.wrapU = i1797[14]
  i1796.wrapV = i1797[15]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1799 = data
  i1798.position = new pc.Vec3( i1799[0], i1799[1], i1799[2] )
  i1798.scale = new pc.Vec3( i1799[3], i1799[4], i1799[5] )
  i1798.rotation = new pc.Quat(i1799[6], i1799[7], i1799[8], i1799[9])
  return i1798
}

Deserializers["_Project.Code.Core.Character.CharacterInstaller"] = function (request, data, root) {
  var i1800 = root || request.c( '_Project.Code.Core.Character.CharacterInstaller' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, '_mover')
  request.r(i1801[2], i1801[3], 0, i1800, '_detector')
  request.r(i1801[4], i1801[5], 0, i1800, '_animator')
  var i1803 = i1801[6]
  var i1802 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Inventory.ItemInventory')))
  for(var i = 0; i < i1803.length; i += 2) {
  request.r(i1803[i + 0], i1803[i + 1], 1, i1802, '')
  }
  i1800._storages = i1802
  return i1800
}

Deserializers["_Project.Code.Core.Character.Mover"] = function (request, data, root) {
  var i1806 = root || request.c( '_Project.Code.Core.Character.Mover' )
  var i1807 = data
  i1806._speed = i1807[0]
  request.r(i1807[1], i1807[2], 0, i1806, '_rigidbody')
  return i1806
}

Deserializers["_Project.Code.Core.Collision.CollisionDetector"] = function (request, data, root) {
  var i1808 = root || request.c( '_Project.Code.Core.Collision.CollisionDetector' )
  var i1809 = data
  return i1808
}

Deserializers["_Project.Code.Core.Character.CharacterAnimator"] = function (request, data, root) {
  var i1810 = root || request.c( '_Project.Code.Core.Character.CharacterAnimator' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, '_animator')
  request.r(i1811[2], i1811[3], 0, i1810, '_transform')
  i1810._breathSpeed = i1811[4]
  i1810._breathScale = i1811[5]
  return i1810
}

Deserializers["_Project.Code.Core.Character.TopDownAnimator"] = function (request, data, root) {
  var i1812 = root || request.c( '_Project.Code.Core.Character.TopDownAnimator' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, '_animator')
  request.r(i1813[2], i1813[3], 0, i1812, '_animationConfig')
  i1812._smoothTime = i1813[4]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1815 = data
  i1814.bodyType = i1815[0]
  request.r(i1815[1], i1815[2], 0, i1814, 'material')
  i1814.simulated = !!i1815[3]
  i1814.useAutoMass = !!i1815[4]
  i1814.mass = i1815[5]
  i1814.drag = i1815[6]
  i1814.angularDrag = i1815[7]
  i1814.gravityScale = i1815[8]
  i1814.collisionDetectionMode = i1815[9]
  i1814.sleepMode = i1815[10]
  i1814.constraints = i1815[11]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1817 = data
  i1816.radius = i1817[0]
  i1816.enabled = !!i1817[1]
  i1816.isTrigger = !!i1817[2]
  i1816.usedByEffector = !!i1817[3]
  i1816.density = i1817[4]
  i1816.offset = new pc.Vec2( i1817[5], i1817[6] )
  request.r(i1817[7], i1817[8], 0, i1816, 'material')
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'animatorController')
  request.r(i1819[2], i1819[3], 0, i1818, 'avatar')
  i1818.updateMode = i1819[4]
  i1818.hasTransformHierarchy = !!i1819[5]
  i1818.applyRootMotion = !!i1819[6]
  var i1821 = i1819[7]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 2) {
  request.r(i1821[i + 0], i1821[i + 1], 2, i1820, '')
  }
  i1818.humanBones = i1820
  i1818.enabled = !!i1819[8]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1825 = data
  i1824.enabled = !!i1825[0]
  i1824.sortingLayerIndex = i1825[1]
  i1824.sortingOrder = i1825[2]
  i1824.sortingLayerName = i1825[3]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1827 = data
  i1826.enabled = !!i1827[0]
  request.r(i1827[1], i1827[2], 0, i1826, 'sharedMaterial')
  var i1829 = i1827[3]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 2) {
  request.r(i1829[i + 0], i1829[i + 1], 2, i1828, '')
  }
  i1826.sharedMaterials = i1828
  i1826.receiveShadows = !!i1827[4]
  i1826.shadowCastingMode = i1827[5]
  i1826.sortingLayerID = i1827[6]
  i1826.sortingOrder = i1827[7]
  i1826.lightmapIndex = i1827[8]
  i1826.lightmapSceneIndex = i1827[9]
  i1826.lightmapScaleOffset = new pc.Vec4( i1827[10], i1827[11], i1827[12], i1827[13] )
  i1826.lightProbeUsage = i1827[14]
  i1826.reflectionProbeUsage = i1827[15]
  i1826.color = new pc.Color(i1827[16], i1827[17], i1827[18], i1827[19])
  request.r(i1827[20], i1827[21], 0, i1826, 'sprite')
  i1826.flipX = !!i1827[22]
  i1826.flipY = !!i1827[23]
  i1826.drawMode = i1827[24]
  i1826.size = new pc.Vec2( i1827[25], i1827[26] )
  i1826.tileMode = i1827[27]
  i1826.adaptiveModeThreshold = i1827[28]
  i1826.maskInteraction = i1827[29]
  i1826.spriteSortPoint = i1827[30]
  return i1826
}

Deserializers["_Project.Code.Core.Character.SortingGroupAnimator"] = function (request, data, root) {
  var i1832 = root || request.c( '_Project.Code.Core.Character.SortingGroupAnimator' )
  var i1833 = data
  i1832._order = i1833[0]
  return i1832
}

Deserializers["_Project.Code.Core.Items.Inventory.ItemInventory"] = function (request, data, root) {
  var i1834 = root || request.c( '_Project.Code.Core.Items.Inventory.ItemInventory' )
  var i1835 = data
  i1834._type = i1835[0]
  i1834._inventory = i1835[1]
  i1834._capacity = i1835[2]
  return i1834
}

Deserializers["_Project.Code.Core.Items.Inventory.ColumnInventoryView"] = function (request, data, root) {
  var i1836 = root || request.c( '_Project.Code.Core.Items.Inventory.ColumnInventoryView' )
  var i1837 = data
  var i1839 = i1837[0]
  var i1838 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1839.length; i += 2) {
  request.r(i1839[i + 0], i1839[i + 1], 1, i1838, '')
  }
  i1836._columnPoints = i1838
  request.r(i1837[1], i1837[2], 0, i1836, '_inventory')
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1842 = root || new pc.UnityMaterial()
  var i1843 = data
  i1842.name = i1843[0]
  request.r(i1843[1], i1843[2], 0, i1842, 'shader')
  i1842.renderQueue = i1843[3]
  i1842.enableInstancing = !!i1843[4]
  var i1845 = i1843[5]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1845[i + 0]) );
  }
  i1842.floatParameters = i1844
  var i1847 = i1843[6]
  var i1846 = []
  for(var i = 0; i < i1847.length; i += 1) {
    i1846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1847[i + 0]) );
  }
  i1842.colorParameters = i1846
  var i1849 = i1843[7]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1849[i + 0]) );
  }
  i1842.vectorParameters = i1848
  var i1851 = i1843[8]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1851[i + 0]) );
  }
  i1842.textureParameters = i1850
  var i1853 = i1843[9]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1853[i + 0]) );
  }
  i1842.materialFlags = i1852
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1857 = data
  i1856.name = i1857[0]
  i1856.value = i1857[1]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1861 = data
  i1860.name = i1861[0]
  i1860.value = new pc.Color(i1861[1], i1861[2], i1861[3], i1861[4])
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1865 = data
  i1864.name = i1865[0]
  i1864.value = new pc.Vec4( i1865[1], i1865[2], i1865[3], i1865[4] )
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1869 = data
  i1868.name = i1869[0]
  request.r(i1869[1], i1869[2], 0, i1868, 'value')
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1873 = data
  i1872.name = i1873[0]
  i1872.enabled = !!i1873[1]
  return i1872
}

Deserializers["_Project.Code.Core.Items.Item"] = function (request, data, root) {
  var i1874 = root || request.c( '_Project.Code.Core.Items.Item' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, '_collider')
  i1874._type = i1875[2]
  return i1874
}

Deserializers["Cinemachine.CinemachineVirtualCamera"] = function (request, data, root) {
  var i1876 = root || request.c( 'Cinemachine.CinemachineVirtualCamera' )
  var i1877 = data
  request.r(i1877[0], i1877[1], 0, i1876, 'm_LookAt')
  request.r(i1877[2], i1877[3], 0, i1876, 'm_Follow')
  i1876.m_Lens = request.d('Cinemachine.LensSettings', i1877[4], i1876.m_Lens)
  i1876.m_Transitions = request.d('Cinemachine.CinemachineVirtualCameraBase+TransitionParams', i1877[5], i1876.m_Transitions)
  var i1879 = i1877[6]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1876.m_ExcludedPropertiesInInspector = i1878
  var i1881 = i1877[7]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( i1881[i + 0] );
  }
  i1876.m_LockStageInInspector = i1880
  i1876.m_Priority = i1877[8]
  i1876.m_StandbyUpdate = i1877[9]
  i1876.m_LegacyBlendHint = i1877[10]
  request.r(i1877[11], i1877[12], 0, i1876, 'm_ComponentOwner')
  i1876.m_StreamingVersion = i1877[13]
  return i1876
}

Deserializers["Cinemachine.LensSettings"] = function (request, data, root) {
  var i1882 = root || request.c( 'Cinemachine.LensSettings' )
  var i1883 = data
  i1882.FieldOfView = i1883[0]
  i1882.OrthographicSize = i1883[1]
  i1882.NearClipPlane = i1883[2]
  i1882.FarClipPlane = i1883[3]
  i1882.Dutch = i1883[4]
  i1882.ModeOverride = i1883[5]
  i1882.LensShift = new pc.Vec2( i1883[6], i1883[7] )
  i1882.GateFit = i1883[8]
  i1882.FocusDistance = i1883[9]
  i1882.m_SensorSize = new pc.Vec2( i1883[10], i1883[11] )
  return i1882
}

Deserializers["Cinemachine.CinemachineVirtualCameraBase+TransitionParams"] = function (request, data, root) {
  var i1884 = root || request.c( 'Cinemachine.CinemachineVirtualCameraBase+TransitionParams' )
  var i1885 = data
  i1884.m_BlendHint = i1885[0]
  i1884.m_InheritPosition = !!i1885[1]
  i1884.m_OnCameraLive = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1885[2], i1884.m_OnCameraLive)
  return i1884
}

Deserializers["Cinemachine.CinemachineBrain+VcamActivatedEvent"] = function (request, data, root) {
  var i1886 = root || request.c( 'Cinemachine.CinemachineBrain+VcamActivatedEvent' )
  var i1887 = data
  i1886.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1887[0], i1886.m_PersistentCalls)
  return i1886
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1888 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1889 = data
  var i1891 = i1889[0]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(request.d('UnityEngine.Events.PersistentCall', i1891[i + 0]));
  }
  i1888.m_Calls = i1890
  return i1888
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1894 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'm_Target')
  i1894.m_TargetAssemblyTypeName = i1895[2]
  i1894.m_MethodName = i1895[3]
  i1894.m_Mode = i1895[4]
  i1894.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1895[5], i1894.m_Arguments)
  i1894.m_CallState = i1895[6]
  return i1894
}

Deserializers["Cinemachine.CinemachineConfiner2D"] = function (request, data, root) {
  var i1900 = root || request.c( 'Cinemachine.CinemachineConfiner2D' )
  var i1901 = data
  request.r(i1901[0], i1901[1], 0, i1900, 'm_BoundingShape2D')
  i1900.m_Damping = i1901[2]
  i1900.m_MaxWindowSize = i1901[3]
  i1900.m_Padding = i1901[4]
  return i1900
}

Deserializers["_Project.Code.Camera.CameraInBordersZoom"] = function (request, data, root) {
  var i1902 = root || request.c( '_Project.Code.Camera.CameraInBordersZoom' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, '_borders')
  request.r(i1903[2], i1903[3], 0, i1902, '_virtualCamera')
  i1902._defaultCameraSize = i1903[4]
  return i1902
}

Deserializers["_Project.Code.Camera.CinemachineConfinerUpdater"] = function (request, data, root) {
  var i1904 = root || request.c( '_Project.Code.Camera.CinemachineConfinerUpdater' )
  var i1905 = data
  return i1904
}

Deserializers["Cinemachine.CinemachinePipeline"] = function (request, data, root) {
  var i1906 = root || request.c( 'Cinemachine.CinemachinePipeline' )
  var i1907 = data
  return i1906
}

Deserializers["Cinemachine.CinemachineFramingTransposer"] = function (request, data, root) {
  var i1908 = root || request.c( 'Cinemachine.CinemachineFramingTransposer' )
  var i1909 = data
  i1908.m_TrackedObjectOffset = new pc.Vec3( i1909[0], i1909[1], i1909[2] )
  i1908.m_LookaheadTime = i1909[3]
  i1908.m_LookaheadSmoothing = i1909[4]
  i1908.m_LookaheadIgnoreY = !!i1909[5]
  i1908.m_XDamping = i1909[6]
  i1908.m_YDamping = i1909[7]
  i1908.m_ZDamping = i1909[8]
  i1908.m_TargetMovementOnly = !!i1909[9]
  i1908.m_ScreenX = i1909[10]
  i1908.m_ScreenY = i1909[11]
  i1908.m_CameraDistance = i1909[12]
  i1908.m_DeadZoneWidth = i1909[13]
  i1908.m_DeadZoneHeight = i1909[14]
  i1908.m_DeadZoneDepth = i1909[15]
  i1908.m_UnlimitedSoftZone = !!i1909[16]
  i1908.m_SoftZoneWidth = i1909[17]
  i1908.m_SoftZoneHeight = i1909[18]
  i1908.m_BiasX = i1909[19]
  i1908.m_BiasY = i1909[20]
  i1908.m_CenterOnActivate = !!i1909[21]
  i1908.m_GroupFramingMode = i1909[22]
  i1908.m_AdjustmentMode = i1909[23]
  i1908.m_GroupFramingSize = i1909[24]
  i1908.m_MaxDollyIn = i1909[25]
  i1908.m_MaxDollyOut = i1909[26]
  i1908.m_MinimumDistance = i1909[27]
  i1908.m_MaximumDistance = i1909[28]
  i1908.m_MinimumFOV = i1909[29]
  i1908.m_MaximumFOV = i1909[30]
  i1908.m_MinimumOrthoSize = i1909[31]
  i1908.m_MaximumOrthoSize = i1909[32]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1911 = data
  i1910.enabled = !!i1911[0]
  i1910.aspect = i1911[1]
  i1910.orthographic = !!i1911[2]
  i1910.orthographicSize = i1911[3]
  i1910.backgroundColor = new pc.Color(i1911[4], i1911[5], i1911[6], i1911[7])
  i1910.nearClipPlane = i1911[8]
  i1910.farClipPlane = i1911[9]
  i1910.fieldOfView = i1911[10]
  i1910.depth = i1911[11]
  i1910.clearFlags = i1911[12]
  i1910.cullingMask = i1911[13]
  i1910.rect = i1911[14]
  request.r(i1911[15], i1911[16], 0, i1910, 'targetTexture')
  i1910.usePhysicalProperties = !!i1911[17]
  i1910.focalLength = i1911[18]
  i1910.sensorSize = new pc.Vec2( i1911[19], i1911[20] )
  i1910.lensShift = new pc.Vec2( i1911[21], i1911[22] )
  i1910.gateFit = i1911[23]
  i1910.commandBufferCount = i1911[24]
  i1910.cameraType = i1911[25]
  return i1910
}

Deserializers["Cinemachine.CinemachineBrain"] = function (request, data, root) {
  var i1912 = root || request.c( 'Cinemachine.CinemachineBrain' )
  var i1913 = data
  i1912.m_ShowDebugText = !!i1913[0]
  i1912.m_ShowCameraFrustum = !!i1913[1]
  i1912.m_IgnoreTimeScale = !!i1913[2]
  request.r(i1913[3], i1913[4], 0, i1912, 'm_WorldUpOverride')
  i1912.m_UpdateMethod = i1913[5]
  i1912.m_BlendUpdateMethod = i1913[6]
  i1912.m_DefaultBlend = request.d('Cinemachine.CinemachineBlendDefinition', i1913[7], i1912.m_DefaultBlend)
  request.r(i1913[8], i1913[9], 0, i1912, 'm_CustomBlends')
  i1912.m_CameraCutEvent = request.d('Cinemachine.CinemachineBrain+BrainEvent', i1913[10], i1912.m_CameraCutEvent)
  i1912.m_CameraActivatedEvent = request.d('Cinemachine.CinemachineBrain+VcamActivatedEvent', i1913[11], i1912.m_CameraActivatedEvent)
  return i1912
}

Deserializers["Cinemachine.CinemachineBlendDefinition"] = function (request, data, root) {
  var i1914 = root || request.c( 'Cinemachine.CinemachineBlendDefinition' )
  var i1915 = data
  i1914.m_Style = i1915[0]
  i1914.m_Time = i1915[1]
  i1914.m_CustomCurve = new pc.AnimationCurve( { keys_flow: i1915[2] } )
  return i1914
}

Deserializers["Cinemachine.CinemachineBrain+BrainEvent"] = function (request, data, root) {
  var i1916 = root || request.c( 'Cinemachine.CinemachineBrain+BrainEvent' )
  var i1917 = data
  i1916.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1917[0], i1916.m_PersistentCalls)
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D' )
  var i1919 = data
  i1918.enabled = !!i1919[0]
  i1918.isTrigger = !!i1919[1]
  i1918.usedByEffector = !!i1919[2]
  i1918.density = i1919[3]
  i1918.offset = new pc.Vec2( i1919[4], i1919[5] )
  request.r(i1919[6], i1919[7], 0, i1918, 'material')
  i1918.usedByComposite = !!i1919[8]
  i1918.autoTiling = !!i1919[9]
  var i1921 = i1919[10]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
  var i1923 = i1921[i + 0]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 2) {
    i1922.push( new pc.Vec2( i1923[i + 0], i1923[i + 1] ) );
  }
    i1920.push( i1922 );
  }
  i1918.points = i1920
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1931 = data
  i1930.usedByComposite = !!i1931[0]
  i1930.autoTiling = !!i1931[1]
  i1930.size = new pc.Vec2( i1931[2], i1931[3] )
  i1930.edgeRadius = i1931[4]
  i1930.enabled = !!i1931[5]
  i1930.isTrigger = !!i1931[6]
  i1930.usedByEffector = !!i1931[7]
  i1930.density = i1931[8]
  i1930.offset = new pc.Vec2( i1931[9], i1931[10] )
  request.r(i1931[11], i1931[12], 0, i1930, 'material')
  return i1930
}

Deserializers["_Project.Code.Camera.Follower"] = function (request, data, root) {
  var i1932 = root || request.c( '_Project.Code.Camera.Follower' )
  var i1933 = data
  i1932._speed = i1933[0]
  request.r(i1933[1], i1933[2], 0, i1932, '_target')
  return i1932
}

Deserializers["_Project.Code.Selling.Customer"] = function (request, data, root) {
  var i1934 = root || request.c( '_Project.Code.Selling.Customer' )
  var i1935 = data
  request.r(i1935[0], i1935[1], 0, i1934, '_bubbleView')
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1937 = data
  i1936.enabled = !!i1937[0]
  i1936.planeDistance = i1937[1]
  i1936.referencePixelsPerUnit = i1937[2]
  i1936.isFallbackOverlay = !!i1937[3]
  i1936.renderMode = i1937[4]
  i1936.renderOrder = i1937[5]
  i1936.sortingLayerName = i1937[6]
  i1936.sortingOrder = i1937[7]
  i1936.scaleFactor = i1937[8]
  request.r(i1937[9], i1937[10], 0, i1936, 'worldCamera')
  i1936.overrideSorting = !!i1937[11]
  i1936.pixelPerfect = !!i1937[12]
  i1936.targetDisplay = i1937[13]
  i1936.overridePixelPerfect = !!i1937[14]
  return i1936
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1938 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1939 = data
  i1938.m_UiScaleMode = i1939[0]
  i1938.m_ReferencePixelsPerUnit = i1939[1]
  i1938.m_ScaleFactor = i1939[2]
  i1938.m_ReferenceResolution = new pc.Vec2( i1939[3], i1939[4] )
  i1938.m_ScreenMatchMode = i1939[5]
  i1938.m_MatchWidthOrHeight = i1939[6]
  i1938.m_PhysicalUnit = i1939[7]
  i1938.m_FallbackScreenDPI = i1939[8]
  i1938.m_DefaultSpriteDPI = i1939[9]
  i1938.m_DynamicPixelsPerUnit = i1939[10]
  i1938.m_PresetInfoIsWorld = !!i1939[11]
  return i1938
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1941 = data
  i1940.m_IgnoreReversedGraphics = !!i1941[0]
  i1940.m_BlockingObjects = i1941[1]
  i1940.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1941[2] )
  return i1940
}

Deserializers["_Project.Code.Selling.Line.BubbleView"] = function (request, data, root) {
  var i1942 = root || request.c( '_Project.Code.Selling.Line.BubbleView' )
  var i1943 = data
  request.r(i1943[0], i1943[1], 0, i1942, '_text')
  request.r(i1943[2], i1943[3], 0, i1942, '_body')
  return i1942
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1944 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1945 = data
  i1944.m_hasFontAssetChanged = !!i1945[0]
  request.r(i1945[1], i1945[2], 0, i1944, 'm_baseMaterial')
  i1944.m_maskOffset = new pc.Vec4( i1945[3], i1945[4], i1945[5], i1945[6] )
  i1944.m_text = i1945[7]
  i1944.m_isRightToLeft = !!i1945[8]
  request.r(i1945[9], i1945[10], 0, i1944, 'm_fontAsset')
  request.r(i1945[11], i1945[12], 0, i1944, 'm_sharedMaterial')
  var i1947 = i1945[13]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 2) {
  request.r(i1947[i + 0], i1947[i + 1], 2, i1946, '')
  }
  i1944.m_fontSharedMaterials = i1946
  request.r(i1945[14], i1945[15], 0, i1944, 'm_fontMaterial')
  var i1949 = i1945[16]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 2) {
  request.r(i1949[i + 0], i1949[i + 1], 2, i1948, '')
  }
  i1944.m_fontMaterials = i1948
  i1944.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1945[17], i1945[18], i1945[19], i1945[20])
  i1944.m_fontColor = new pc.Color(i1945[21], i1945[22], i1945[23], i1945[24])
  i1944.m_enableVertexGradient = !!i1945[25]
  i1944.m_colorMode = i1945[26]
  i1944.m_fontColorGradient = request.d('TMPro.VertexGradient', i1945[27], i1944.m_fontColorGradient)
  request.r(i1945[28], i1945[29], 0, i1944, 'm_fontColorGradientPreset')
  request.r(i1945[30], i1945[31], 0, i1944, 'm_spriteAsset')
  i1944.m_tintAllSprites = !!i1945[32]
  request.r(i1945[33], i1945[34], 0, i1944, 'm_StyleSheet')
  i1944.m_TextStyleHashCode = i1945[35]
  i1944.m_overrideHtmlColors = !!i1945[36]
  i1944.m_faceColor = UnityEngine.Color32.ConstructColor(i1945[37], i1945[38], i1945[39], i1945[40])
  i1944.m_fontSize = i1945[41]
  i1944.m_fontSizeBase = i1945[42]
  i1944.m_fontWeight = i1945[43]
  i1944.m_enableAutoSizing = !!i1945[44]
  i1944.m_fontSizeMin = i1945[45]
  i1944.m_fontSizeMax = i1945[46]
  i1944.m_fontStyle = i1945[47]
  i1944.m_HorizontalAlignment = i1945[48]
  i1944.m_VerticalAlignment = i1945[49]
  i1944.m_textAlignment = i1945[50]
  i1944.m_characterSpacing = i1945[51]
  i1944.m_wordSpacing = i1945[52]
  i1944.m_lineSpacing = i1945[53]
  i1944.m_lineSpacingMax = i1945[54]
  i1944.m_paragraphSpacing = i1945[55]
  i1944.m_charWidthMaxAdj = i1945[56]
  i1944.m_enableWordWrapping = !!i1945[57]
  i1944.m_wordWrappingRatios = i1945[58]
  i1944.m_overflowMode = i1945[59]
  request.r(i1945[60], i1945[61], 0, i1944, 'm_linkedTextComponent')
  request.r(i1945[62], i1945[63], 0, i1944, 'parentLinkedComponent')
  i1944.m_enableKerning = !!i1945[64]
  i1944.m_enableExtraPadding = !!i1945[65]
  i1944.checkPaddingRequired = !!i1945[66]
  i1944.m_isRichText = !!i1945[67]
  i1944.m_parseCtrlCharacters = !!i1945[68]
  i1944.m_isOrthographic = !!i1945[69]
  i1944.m_isCullingEnabled = !!i1945[70]
  i1944.m_horizontalMapping = i1945[71]
  i1944.m_verticalMapping = i1945[72]
  i1944.m_uvLineOffset = i1945[73]
  i1944.m_geometrySortingOrder = i1945[74]
  i1944.m_IsTextObjectScaleStatic = !!i1945[75]
  i1944.m_VertexBufferAutoSizeReduction = !!i1945[76]
  i1944.m_useMaxVisibleDescender = !!i1945[77]
  i1944.m_pageToDisplay = i1945[78]
  i1944.m_margin = new pc.Vec4( i1945[79], i1945[80], i1945[81], i1945[82] )
  i1944.m_isUsingLegacyAnimationComponent = !!i1945[83]
  i1944.m_isVolumetricText = !!i1945[84]
  request.r(i1945[85], i1945[86], 0, i1944, 'm_Material')
  i1944.m_Maskable = !!i1945[87]
  i1944.m_Color = new pc.Color(i1945[88], i1945[89], i1945[90], i1945[91])
  i1944.m_RaycastTarget = !!i1945[92]
  i1944.m_RaycastPadding = new pc.Vec4( i1945[93], i1945[94], i1945[95], i1945[96] )
  return i1944
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1950 = root || request.c( 'TMPro.VertexGradient' )
  var i1951 = data
  i1950.topLeft = new pc.Color(i1951[0], i1951[1], i1951[2], i1951[3])
  i1950.topRight = new pc.Color(i1951[4], i1951[5], i1951[6], i1951[7])
  i1950.bottomLeft = new pc.Color(i1951[8], i1951[9], i1951[10], i1951[11])
  i1950.bottomRight = new pc.Color(i1951[12], i1951[13], i1951[14], i1951[15])
  return i1950
}

Deserializers["_Project.Code.Core.Harvesting.Field"] = function (request, data, root) {
  var i1952 = root || request.c( '_Project.Code.Core.Harvesting.Field' )
  var i1953 = data
  i1952._state = i1953[0]
  request.r(i1953[1], i1953[2], 0, i1952, '_plant')
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1955 = data
  i1954.name = i1955[0]
  i1954.index = i1955[1]
  i1954.startup = !!i1955[2]
  return i1954
}

Deserializers["_Project.Code.Entry.EntryPoint"] = function (request, data, root) {
  var i1956 = root || request.c( '_Project.Code.Entry.EntryPoint' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, '_itemsCreator')
  request.r(i1957[2], i1957[3], 0, i1956, '_joystick')
  request.r(i1957[4], i1957[5], 0, i1956, '_character')
  request.r(i1957[6], i1957[7], 0, i1956, '_fieldsHolder')
  return i1956
}

Deserializers["_Project.Code.Services.ItemsCreation.ItemsCreator"] = function (request, data, root) {
  var i1958 = root || request.c( '_Project.Code.Services.ItemsCreation.ItemsCreator' )
  var i1959 = data
  var i1961 = i1959[0]
  var i1960 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Items.Item')))
  for(var i = 0; i < i1961.length; i += 2) {
  request.r(i1961[i + 0], i1961[i + 1], 1, i1960, '')
  }
  i1958._prefabs = i1960
  return i1958
}

Deserializers["_Project.Code.Services.CoroutineRunner.CoroutineRunner"] = function (request, data, root) {
  var i1964 = root || request.c( '_Project.Code.Services.CoroutineRunner.CoroutineRunner' )
  var i1965 = data
  return i1964
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1967 = data
  request.r(i1967[0], i1967[1], 0, i1966, 'm_FirstSelected')
  i1966.m_sendNavigationEvents = !!i1967[2]
  i1966.m_DragThreshold = i1967[3]
  return i1966
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1969 = data
  i1968.m_HorizontalAxis = i1969[0]
  i1968.m_VerticalAxis = i1969[1]
  i1968.m_SubmitButton = i1969[2]
  i1968.m_CancelButton = i1969[3]
  i1968.m_InputActionsPerSecond = i1969[4]
  i1968.m_RepeatDelay = i1969[5]
  i1968.m_ForceModuleActive = !!i1969[6]
  i1968.m_SendPointerHoverToParent = !!i1969[7]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D' )
  var i1971 = data
  i1970.enabled = !!i1971[0]
  i1970.isTrigger = !!i1971[1]
  i1970.usedByEffector = !!i1971[2]
  i1970.density = i1971[3]
  i1970.offset = new pc.Vec2( i1971[4], i1971[5] )
  request.r(i1971[6], i1971[7], 0, i1970, 'material')
  i1970.edgeRadius = i1971[8]
  var i1973 = i1971[9]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 2) {
    i1972.push( new pc.Vec2( i1973[i + 0], i1973[i + 1] ) );
  }
  i1970.points = i1972
  i1970.useAdjacentStartPoint = !!i1971[10]
  i1970.adjacentStartPoint = new pc.Vec2( i1971[11], i1971[12] )
  i1970.useAdjacentEndPoint = !!i1971[13]
  i1970.adjacentEndPoint = new pc.Vec2( i1971[14], i1971[15] )
  return i1970
}

Deserializers["_Project.Code.Selling.Line.Line"] = function (request, data, root) {
  var i1974 = root || request.c( '_Project.Code.Selling.Line.Line' )
  var i1975 = data
  request.r(i1975[0], i1975[1], 0, i1974, '_customerPrefab')
  var i1977 = i1975[2]
  var i1976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1977.length; i += 2) {
  request.r(i1977[i + 0], i1977[i + 1], 1, i1976, '')
  }
  i1974._customerSprites = i1976
  var i1979 = i1975[3]
  var i1978 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1979.length; i += 2) {
  request.r(i1979[i + 0], i1979[i + 1], 1, i1978, '')
  }
  i1974._spawnPoints = i1978
  return i1974
}

Deserializers["_Project.Code.Selling.Seller"] = function (request, data, root) {
  var i1982 = root || request.c( '_Project.Code.Selling.Seller' )
  var i1983 = data
  request.r(i1983[0], i1983[1], 0, i1982, '_moneyPrefab')
  request.r(i1983[2], i1983[3], 0, i1982, '_lineMb')
  request.r(i1983[4], i1983[5], 0, i1982, '_productInventory')
  request.r(i1983[6], i1983[7], 0, i1982, '_moneyInventory')
  return i1982
}

Deserializers["_Project.Code.Core.PopcornFarm.CornFarm"] = function (request, data, root) {
  var i1984 = root || request.c( '_Project.Code.Core.PopcornFarm.CornFarm' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, '_fillImage')
  request.r(i1985[2], i1985[3], 0, i1984, '_resource')
  request.r(i1985[4], i1985[5], 0, i1984, '_final')
  request.r(i1985[6], i1985[7], 0, i1984, '_itemsCreator')
  return i1984
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1986 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1987 = data
  i1986.m_ShowMaskGraphic = !!i1987[0]
  return i1986
}

Deserializers["VariableJoystick"] = function (request, data, root) {
  var i1988 = root || request.c( 'VariableJoystick' )
  var i1989 = data
  i1988.moveThreshold = i1989[0]
  i1988.joystickType = i1989[1]
  request.r(i1989[2], i1989[3], 0, i1988, 'background')
  i1988.handleRange = i1989[4]
  i1988.deadZone = i1989[5]
  i1988.axisOptions = i1989[6]
  i1988.snapX = !!i1989[7]
  i1988.snapY = !!i1989[8]
  request.r(i1989[9], i1989[10], 0, i1988, '_handle')
  return i1988
}

Deserializers["_Project.Code.Tutorial.InfinitySignAnimation"] = function (request, data, root) {
  var i1990 = root || request.c( '_Project.Code.Tutorial.InfinitySignAnimation' )
  var i1991 = data
  i1990._width = i1991[0]
  i1990._duration = i1991[1]
  return i1990
}

Deserializers["_Project.Code.Core.Animations.BreathAnimation"] = function (request, data, root) {
  var i1992 = root || request.c( '_Project.Code.Core.Animations.BreathAnimation' )
  var i1993 = data
  i1992._duration = i1993[0]
  i1992._scaleFactor = i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1995 = data
  i1994.ambientIntensity = i1995[0]
  i1994.reflectionIntensity = i1995[1]
  i1994.ambientMode = i1995[2]
  i1994.ambientLight = new pc.Color(i1995[3], i1995[4], i1995[5], i1995[6])
  i1994.ambientSkyColor = new pc.Color(i1995[7], i1995[8], i1995[9], i1995[10])
  i1994.ambientGroundColor = new pc.Color(i1995[11], i1995[12], i1995[13], i1995[14])
  i1994.ambientEquatorColor = new pc.Color(i1995[15], i1995[16], i1995[17], i1995[18])
  i1994.fogColor = new pc.Color(i1995[19], i1995[20], i1995[21], i1995[22])
  i1994.fogEndDistance = i1995[23]
  i1994.fogStartDistance = i1995[24]
  i1994.fogDensity = i1995[25]
  i1994.fog = !!i1995[26]
  request.r(i1995[27], i1995[28], 0, i1994, 'skybox')
  i1994.fogMode = i1995[29]
  var i1997 = i1995[30]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1997[i + 0]) );
  }
  i1994.lightmaps = i1996
  i1994.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1995[31], i1994.lightProbes)
  i1994.lightmapsMode = i1995[32]
  i1994.mixedBakeMode = i1995[33]
  i1994.environmentLightingMode = i1995[34]
  i1994.ambientProbe = new pc.SphericalHarmonicsL2(i1995[35])
  i1994.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1995[36])
  i1994.useReferenceAmbientProbe = !!i1995[37]
  request.r(i1995[38], i1995[39], 0, i1994, 'customReflection')
  request.r(i1995[40], i1995[41], 0, i1994, 'defaultReflection')
  i1994.defaultReflectionMode = i1995[42]
  i1994.defaultReflectionResolution = i1995[43]
  i1994.sunLightObjectId = i1995[44]
  i1994.pixelLightCount = i1995[45]
  i1994.defaultReflectionHDR = !!i1995[46]
  i1994.hasLightDataAsset = !!i1995[47]
  i1994.hasManualGenerate = !!i1995[48]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2001 = data
  request.r(i2001[0], i2001[1], 0, i2000, 'lightmapColor')
  request.r(i2001[2], i2001[3], 0, i2000, 'lightmapDirection')
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2002 = root || new UnityEngine.LightProbes()
  var i2003 = data
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2011 = data
  var i2013 = i2011[0]
  var i2012 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2013[i + 0]));
  }
  i2010.ShaderCompilationErrors = i2012
  i2010.name = i2011[1]
  i2010.guid = i2011[2]
  var i2015 = i2011[3]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( i2015[i + 0] );
  }
  i2010.shaderDefinedKeywords = i2014
  var i2017 = i2011[4]
  var i2016 = []
  for(var i = 0; i < i2017.length; i += 1) {
    i2016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2017[i + 0]) );
  }
  i2010.passes = i2016
  var i2019 = i2011[5]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2019[i + 0]) );
  }
  i2010.usePasses = i2018
  var i2021 = i2011[6]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2021[i + 0]) );
  }
  i2010.defaultParameterValues = i2020
  request.r(i2011[7], i2011[8], 0, i2010, 'unityFallbackShader')
  i2010.readDepth = !!i2011[9]
  i2010.isCreatedByShaderGraph = !!i2011[10]
  i2010.compiled = !!i2011[11]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2025 = data
  i2024.shaderName = i2025[0]
  i2024.errorMessage = i2025[1]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2028 = root || new pc.UnityShaderPass()
  var i2029 = data
  i2028.id = i2029[0]
  i2028.subShaderIndex = i2029[1]
  i2028.name = i2029[2]
  i2028.passType = i2029[3]
  i2028.grabPassTextureName = i2029[4]
  i2028.usePass = !!i2029[5]
  i2028.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[6], i2028.zTest)
  i2028.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[7], i2028.zWrite)
  i2028.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[8], i2028.culling)
  i2028.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2029[9], i2028.blending)
  i2028.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2029[10], i2028.alphaBlending)
  i2028.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[11], i2028.colorWriteMask)
  i2028.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[12], i2028.offsetUnits)
  i2028.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[13], i2028.offsetFactor)
  i2028.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[14], i2028.stencilRef)
  i2028.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[15], i2028.stencilReadMask)
  i2028.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2029[16], i2028.stencilWriteMask)
  i2028.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2029[17], i2028.stencilOp)
  i2028.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2029[18], i2028.stencilOpFront)
  i2028.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2029[19], i2028.stencilOpBack)
  var i2031 = i2029[20]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2031[i + 0]) );
  }
  i2028.tags = i2030
  var i2033 = i2029[21]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( i2033[i + 0] );
  }
  i2028.passDefinedKeywords = i2032
  var i2035 = i2029[22]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2035[i + 0]) );
  }
  i2028.passDefinedKeywordGroups = i2034
  var i2037 = i2029[23]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2037[i + 0]) );
  }
  i2028.variants = i2036
  var i2039 = i2029[24]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2039[i + 0]) );
  }
  i2028.excludedVariants = i2038
  i2028.hasDepthReader = !!i2029[25]
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2041 = data
  i2040.val = i2041[0]
  i2040.name = i2041[1]
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2043 = data
  i2042.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[0], i2042.src)
  i2042.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[1], i2042.dst)
  i2042.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2043[2], i2042.op)
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2045 = data
  i2044.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2045[0], i2044.pass)
  i2044.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2045[1], i2044.fail)
  i2044.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2045[2], i2044.zFail)
  i2044.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2045[3], i2044.comp)
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2049 = data
  i2048.name = i2049[0]
  i2048.value = i2049[1]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2053 = data
  var i2055 = i2053[0]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( i2055[i + 0] );
  }
  i2052.keywords = i2054
  i2052.hasDiscard = !!i2053[1]
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2059 = data
  i2058.passId = i2059[0]
  i2058.subShaderIndex = i2059[1]
  var i2061 = i2059[2]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( i2061[i + 0] );
  }
  i2058.keywords = i2060
  i2058.vertexProgram = i2059[3]
  i2058.fragmentProgram = i2059[4]
  i2058.exportedForWebGl2 = !!i2059[5]
  i2058.readDepth = !!i2059[6]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2065 = data
  request.r(i2065[0], i2065[1], 0, i2064, 'shader')
  i2064.pass = i2065[2]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2069 = data
  i2068.name = i2069[0]
  i2068.type = i2069[1]
  i2068.value = new pc.Vec4( i2069[2], i2069[3], i2069[4], i2069[5] )
  i2068.textureValue = i2069[6]
  i2068.shaderPropertyFlag = i2069[7]
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2071 = data
  i2070.name = i2071[0]
  request.r(i2071[1], i2071[2], 0, i2070, 'texture')
  i2070.aabb = i2071[3]
  i2070.vertices = i2071[4]
  i2070.triangles = i2071[5]
  i2070.textureRect = UnityEngine.Rect.MinMaxRect(i2071[6], i2071[7], i2071[8], i2071[9])
  i2070.packedRect = UnityEngine.Rect.MinMaxRect(i2071[10], i2071[11], i2071[12], i2071[13])
  i2070.border = new pc.Vec4( i2071[14], i2071[15], i2071[16], i2071[17] )
  i2070.transparency = i2071[18]
  i2070.bounds = i2071[19]
  i2070.pixelsPerUnit = i2071[20]
  i2070.textureWidth = i2071[21]
  i2070.textureHeight = i2071[22]
  i2070.nativeSize = new pc.Vec2( i2071[23], i2071[24] )
  i2070.pivot = new pc.Vec2( i2071[25], i2071[26] )
  i2070.textureRectOffset = new pc.Vec2( i2071[27], i2071[28] )
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2073 = data
  i2072.name = i2073[0]
  i2072.wrapMode = i2073[1]
  i2072.isLooping = !!i2073[2]
  i2072.length = i2073[3]
  var i2075 = i2073[4]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2075[i + 0]) );
  }
  i2072.curves = i2074
  var i2077 = i2073[5]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2077[i + 0]) );
  }
  i2072.events = i2076
  i2072.halfPrecision = !!i2073[6]
  i2072._frameRate = i2073[7]
  i2072.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2073[8], i2072.localBounds)
  i2072.hasMuscleCurves = !!i2073[9]
  var i2079 = i2073[10]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( i2079[i + 0] );
  }
  i2072.clipMuscleConstant = i2078
  i2072.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2073[11], i2072.clipBindingConstant)
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2083 = data
  i2082.path = i2083[0]
  i2082.hash = i2083[1]
  i2082.componentType = i2083[2]
  i2082.property = i2083[3]
  i2082.keys = i2083[4]
  var i2085 = i2083[5]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2085[i + 0]) );
  }
  i2082.objectReferenceKeys = i2084
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2089 = data
  i2088.time = i2089[0]
  request.r(i2089[1], i2089[2], 0, i2088, 'value')
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2093 = data
  i2092.functionName = i2093[0]
  i2092.floatParameter = i2093[1]
  i2092.intParameter = i2093[2]
  i2092.stringParameter = i2093[3]
  request.r(i2093[4], i2093[5], 0, i2092, 'objectReferenceParameter')
  i2092.time = i2093[6]
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2095 = data
  i2094.center = new pc.Vec3( i2095[0], i2095[1], i2095[2] )
  i2094.extends = new pc.Vec3( i2095[3], i2095[4], i2095[5] )
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2099 = data
  var i2101 = i2099[0]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( i2101[i + 0] );
  }
  i2098.genericBindings = i2100
  var i2103 = i2099[1]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( i2103[i + 0] );
  }
  i2098.pptrCurveMapping = i2102
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2105 = data
  i2104.name = i2105[0]
  i2104.ascent = i2105[1]
  i2104.originalLineHeight = i2105[2]
  i2104.fontSize = i2105[3]
  var i2107 = i2105[4]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2107[i + 0]) );
  }
  i2104.characterInfo = i2106
  request.r(i2105[5], i2105[6], 0, i2104, 'texture')
  i2104.originalFontSize = i2105[7]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2111 = data
  i2110.index = i2111[0]
  i2110.advance = i2111[1]
  i2110.bearing = i2111[2]
  i2110.glyphWidth = i2111[3]
  i2110.glyphHeight = i2111[4]
  i2110.minX = i2111[5]
  i2110.maxX = i2111[6]
  i2110.minY = i2111[7]
  i2110.maxY = i2111[8]
  i2110.uvBottomLeftX = i2111[9]
  i2110.uvBottomLeftY = i2111[10]
  i2110.uvBottomRightX = i2111[11]
  i2110.uvBottomRightY = i2111[12]
  i2110.uvTopLeftX = i2111[13]
  i2110.uvTopLeftY = i2111[14]
  i2110.uvTopRightX = i2111[15]
  i2110.uvTopRightY = i2111[16]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2113 = data
  i2112.name = i2113[0]
  var i2115 = i2113[1]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2115[i + 0]) );
  }
  i2112.layers = i2114
  var i2117 = i2113[2]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2117[i + 0]) );
  }
  i2112.parameters = i2116
  i2112.animationClips = i2113[3]
  i2112.avatarUnsupported = i2113[4]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2121 = data
  i2120.name = i2121[0]
  i2120.defaultWeight = i2121[1]
  i2120.blendingMode = i2121[2]
  i2120.avatarMask = i2121[3]
  i2120.syncedLayerIndex = i2121[4]
  i2120.syncedLayerAffectsTiming = !!i2121[5]
  i2120.syncedLayers = i2121[6]
  i2120.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2121[7], i2120.stateMachine)
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2123 = data
  i2122.id = i2123[0]
  i2122.name = i2123[1]
  i2122.path = i2123[2]
  var i2125 = i2123[3]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2125[i + 0]) );
  }
  i2122.states = i2124
  var i2127 = i2123[4]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2127[i + 0]) );
  }
  i2122.machines = i2126
  var i2129 = i2123[5]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2129[i + 0]) );
  }
  i2122.entryStateTransitions = i2128
  var i2131 = i2123[6]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2131[i + 0]) );
  }
  i2122.exitStateTransitions = i2130
  var i2133 = i2123[7]
  var i2132 = []
  for(var i = 0; i < i2133.length; i += 1) {
    i2132.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2133[i + 0]) );
  }
  i2122.anyStateTransitions = i2132
  i2122.defaultStateId = i2123[8]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2137 = data
  i2136.id = i2137[0]
  i2136.name = i2137[1]
  i2136.cycleOffset = i2137[2]
  i2136.cycleOffsetParameter = i2137[3]
  i2136.cycleOffsetParameterActive = !!i2137[4]
  i2136.mirror = !!i2137[5]
  i2136.mirrorParameter = i2137[6]
  i2136.mirrorParameterActive = !!i2137[7]
  i2136.motionId = i2137[8]
  i2136.nameHash = i2137[9]
  i2136.fullPathHash = i2137[10]
  i2136.speed = i2137[11]
  i2136.speedParameter = i2137[12]
  i2136.speedParameterActive = !!i2137[13]
  i2136.tag = i2137[14]
  i2136.tagHash = i2137[15]
  i2136.writeDefaultValues = !!i2137[16]
  var i2139 = i2137[17]
  var i2138 = []
  for(var i = 0; i < i2139.length; i += 2) {
  request.r(i2139[i + 0], i2139[i + 1], 2, i2138, '')
  }
  i2136.behaviours = i2138
  var i2141 = i2137[18]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2141[i + 0]) );
  }
  i2136.transitions = i2140
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2147 = data
  i2146.fullPath = i2147[0]
  i2146.canTransitionToSelf = !!i2147[1]
  i2146.duration = i2147[2]
  i2146.exitTime = i2147[3]
  i2146.hasExitTime = !!i2147[4]
  i2146.hasFixedDuration = !!i2147[5]
  i2146.interruptionSource = i2147[6]
  i2146.offset = i2147[7]
  i2146.orderedInterruption = !!i2147[8]
  i2146.destinationStateId = i2147[9]
  i2146.isExit = !!i2147[10]
  i2146.mute = !!i2147[11]
  i2146.solo = !!i2147[12]
  var i2149 = i2147[13]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2149[i + 0]) );
  }
  i2146.conditions = i2148
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2155 = data
  i2154.destinationStateId = i2155[0]
  i2154.isExit = !!i2155[1]
  i2154.mute = !!i2155[2]
  i2154.solo = !!i2155[3]
  var i2157 = i2155[4]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2157[i + 0]) );
  }
  i2154.conditions = i2156
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2161 = data
  i2160.defaultBool = !!i2161[0]
  i2160.defaultFloat = i2161[1]
  i2160.defaultInt = i2161[2]
  i2160.name = i2161[3]
  i2160.nameHash = i2161[4]
  i2160.type = i2161[5]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.bytes64 = i2163[1]
  i2162.data = i2163[2]
  return i2162
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig"] = function (request, data, root) {
  var i2164 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig' )
  var i2165 = data
  var i2167 = i2165[0]
  var i2166 = new (System.Collections.Generic.List$1(Bridge.ns('_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry')))
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.add(request.d('_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry', i2167[i + 0]));
  }
  i2164.Animations = i2166
  return i2164
}

Deserializers["_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry"] = function (request, data, root) {
  var i2170 = root || request.c( '_Project.Code.Core.Character.TopDownAnimationConfig+AnimationEntry' )
  var i2171 = data
  request.r(i2171[0], i2171[1], 0, i2170, 'Animation')
  i2170.Direction = new pc.Vec2( i2171[2], i2171[3] )
  return i2170
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i2172 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i2173 = data
  i2172.hashCode = i2173[0]
  request.r(i2173[1], i2173[2], 0, i2172, 'material')
  i2172.materialHashCode = i2173[3]
  request.r(i2173[4], i2173[5], 0, i2172, 'atlas')
  i2172.normalStyle = i2173[6]
  i2172.normalSpacingOffset = i2173[7]
  i2172.boldStyle = i2173[8]
  i2172.boldSpacing = i2173[9]
  i2172.italicStyle = i2173[10]
  i2172.tabSize = i2173[11]
  i2172.m_Version = i2173[12]
  i2172.m_SourceFontFileGUID = i2173[13]
  request.r(i2173[14], i2173[15], 0, i2172, 'm_SourceFontFile_EditorRef')
  request.r(i2173[16], i2173[17], 0, i2172, 'm_SourceFontFile')
  i2172.m_AtlasPopulationMode = i2173[18]
  i2172.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2173[19], i2172.m_FaceInfo)
  var i2175 = i2173[20]
  var i2174 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.add(request.d('UnityEngine.TextCore.Glyph', i2175[i + 0]));
  }
  i2172.m_GlyphTable = i2174
  var i2177 = i2173[21]
  var i2176 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.add(request.d('TMPro.TMP_Character', i2177[i + 0]));
  }
  i2172.m_CharacterTable = i2176
  var i2179 = i2173[22]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 2) {
  request.r(i2179[i + 0], i2179[i + 1], 2, i2178, '')
  }
  i2172.m_AtlasTextures = i2178
  i2172.m_AtlasTextureIndex = i2173[23]
  i2172.m_IsMultiAtlasTexturesEnabled = !!i2173[24]
  i2172.m_ClearDynamicDataOnBuild = !!i2173[25]
  var i2181 = i2173[26]
  var i2180 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2181.length; i += 1) {
    i2180.add(request.d('UnityEngine.TextCore.GlyphRect', i2181[i + 0]));
  }
  i2172.m_UsedGlyphRects = i2180
  var i2183 = i2173[27]
  var i2182 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.add(request.d('UnityEngine.TextCore.GlyphRect', i2183[i + 0]));
  }
  i2172.m_FreeGlyphRects = i2182
  i2172.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i2173[28], i2172.m_fontInfo)
  i2172.m_AtlasWidth = i2173[29]
  i2172.m_AtlasHeight = i2173[30]
  i2172.m_AtlasPadding = i2173[31]
  i2172.m_AtlasRenderMode = i2173[32]
  var i2185 = i2173[33]
  var i2184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i2185.length; i += 1) {
    i2184.add(request.d('TMPro.TMP_Glyph', i2185[i + 0]));
  }
  i2172.m_glyphInfoList = i2184
  i2172.m_KerningTable = request.d('TMPro.KerningTable', i2173[34], i2172.m_KerningTable)
  i2172.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i2173[35], i2172.m_FontFeatureTable)
  var i2187 = i2173[36]
  var i2186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2187.length; i += 2) {
  request.r(i2187[i + 0], i2187[i + 1], 1, i2186, '')
  }
  i2172.fallbackFontAssets = i2186
  var i2189 = i2173[37]
  var i2188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2189.length; i += 2) {
  request.r(i2189[i + 0], i2189[i + 1], 1, i2188, '')
  }
  i2172.m_FallbackFontAssetTable = i2188
  i2172.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i2173[38], i2172.m_CreationSettings)
  var i2191 = i2173[39]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('TMPro.TMP_FontWeightPair', i2191[i + 0]) );
  }
  i2172.m_FontWeightTable = i2190
  var i2193 = i2173[40]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( request.d('TMPro.TMP_FontWeightPair', i2193[i + 0]) );
  }
  i2172.fontWeights = i2192
  return i2172
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i2194 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i2195 = data
  i2194.m_FaceIndex = i2195[0]
  i2194.m_FamilyName = i2195[1]
  i2194.m_StyleName = i2195[2]
  i2194.m_PointSize = i2195[3]
  i2194.m_Scale = i2195[4]
  i2194.m_UnitsPerEM = i2195[5]
  i2194.m_LineHeight = i2195[6]
  i2194.m_AscentLine = i2195[7]
  i2194.m_CapLine = i2195[8]
  i2194.m_MeanLine = i2195[9]
  i2194.m_Baseline = i2195[10]
  i2194.m_DescentLine = i2195[11]
  i2194.m_SuperscriptOffset = i2195[12]
  i2194.m_SuperscriptSize = i2195[13]
  i2194.m_SubscriptOffset = i2195[14]
  i2194.m_SubscriptSize = i2195[15]
  i2194.m_UnderlineOffset = i2195[16]
  i2194.m_UnderlineThickness = i2195[17]
  i2194.m_StrikethroughOffset = i2195[18]
  i2194.m_StrikethroughThickness = i2195[19]
  i2194.m_TabWidth = i2195[20]
  return i2194
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i2198 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i2199 = data
  i2198.m_Index = i2199[0]
  i2198.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2199[1], i2198.m_Metrics)
  i2198.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2199[2], i2198.m_GlyphRect)
  i2198.m_Scale = i2199[3]
  i2198.m_AtlasIndex = i2199[4]
  i2198.m_ClassDefinitionType = i2199[5]
  return i2198
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i2200 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i2201 = data
  i2200.m_Width = i2201[0]
  i2200.m_Height = i2201[1]
  i2200.m_HorizontalBearingX = i2201[2]
  i2200.m_HorizontalBearingY = i2201[3]
  i2200.m_HorizontalAdvance = i2201[4]
  return i2200
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i2202 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i2203 = data
  i2202.m_X = i2203[0]
  i2202.m_Y = i2203[1]
  i2202.m_Width = i2203[2]
  i2202.m_Height = i2203[3]
  return i2202
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i2206 = root || request.c( 'TMPro.TMP_Character' )
  var i2207 = data
  i2206.m_ElementType = i2207[0]
  i2206.m_Unicode = i2207[1]
  i2206.m_GlyphIndex = i2207[2]
  i2206.m_Scale = i2207[3]
  return i2206
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i2212 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i2213 = data
  i2212.Name = i2213[0]
  i2212.PointSize = i2213[1]
  i2212.Scale = i2213[2]
  i2212.CharacterCount = i2213[3]
  i2212.LineHeight = i2213[4]
  i2212.Baseline = i2213[5]
  i2212.Ascender = i2213[6]
  i2212.CapHeight = i2213[7]
  i2212.Descender = i2213[8]
  i2212.CenterLine = i2213[9]
  i2212.SuperscriptOffset = i2213[10]
  i2212.SubscriptOffset = i2213[11]
  i2212.SubSize = i2213[12]
  i2212.Underline = i2213[13]
  i2212.UnderlineThickness = i2213[14]
  i2212.strikethrough = i2213[15]
  i2212.strikethroughThickness = i2213[16]
  i2212.TabWidth = i2213[17]
  i2212.Padding = i2213[18]
  i2212.AtlasWidth = i2213[19]
  i2212.AtlasHeight = i2213[20]
  return i2212
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i2216 = root || request.c( 'TMPro.TMP_Glyph' )
  var i2217 = data
  i2216.id = i2217[0]
  i2216.x = i2217[1]
  i2216.y = i2217[2]
  i2216.width = i2217[3]
  i2216.height = i2217[4]
  i2216.xOffset = i2217[5]
  i2216.yOffset = i2217[6]
  i2216.xAdvance = i2217[7]
  i2216.scale = i2217[8]
  return i2216
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i2218 = root || request.c( 'TMPro.KerningTable' )
  var i2219 = data
  var i2221 = i2219[0]
  var i2220 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i2221.length; i += 1) {
    i2220.add(request.d('TMPro.KerningPair', i2221[i + 0]));
  }
  i2218.kerningPairs = i2220
  return i2218
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i2224 = root || request.c( 'TMPro.KerningPair' )
  var i2225 = data
  i2224.xOffset = i2225[0]
  i2224.m_FirstGlyph = i2225[1]
  i2224.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2225[2], i2224.m_FirstGlyphAdjustments)
  i2224.m_SecondGlyph = i2225[3]
  i2224.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i2225[4], i2224.m_SecondGlyphAdjustments)
  i2224.m_IgnoreSpacingAdjustments = !!i2225[5]
  return i2224
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i2226 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i2227 = data
  var i2229 = i2227[0]
  var i2228 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i2229.length; i += 1) {
    i2228.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i2229[i + 0]));
  }
  i2226.m_GlyphPairAdjustmentRecords = i2228
  return i2226
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i2232 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i2233 = data
  i2232.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2233[0], i2232.m_FirstAdjustmentRecord)
  i2232.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i2233[1], i2232.m_SecondAdjustmentRecord)
  i2232.m_FeatureLookupFlags = i2233[2]
  return i2232
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i2234 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i2235 = data
  i2234.m_GlyphIndex = i2235[0]
  i2234.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i2235[1], i2234.m_GlyphValueRecord)
  return i2234
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i2236 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i2237 = data
  i2236.m_XPlacement = i2237[0]
  i2236.m_YPlacement = i2237[1]
  i2236.m_XAdvance = i2237[2]
  i2236.m_YAdvance = i2237[3]
  return i2236
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i2240 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i2241 = data
  i2240.sourceFontFileName = i2241[0]
  i2240.sourceFontFileGUID = i2241[1]
  i2240.pointSizeSamplingMode = i2241[2]
  i2240.pointSize = i2241[3]
  i2240.padding = i2241[4]
  i2240.packingMode = i2241[5]
  i2240.atlasWidth = i2241[6]
  i2240.atlasHeight = i2241[7]
  i2240.characterSetSelectionMode = i2241[8]
  i2240.characterSequence = i2241[9]
  i2240.referencedFontAssetGUID = i2241[10]
  i2240.referencedTextAssetGUID = i2241[11]
  i2240.fontStyle = i2241[12]
  i2240.fontStyleModifier = i2241[13]
  i2240.renderMode = i2241[14]
  i2240.includeFontFeatures = !!i2241[15]
  return i2240
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i2244 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i2245 = data
  request.r(i2245[0], i2245[1], 0, i2244, 'regularTypeface')
  request.r(i2245[2], i2245[3], 0, i2244, 'italicTypeface')
  return i2244
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2246 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2247 = data
  i2246.useSafeMode = !!i2247[0]
  i2246.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2247[1], i2246.safeModeOptions)
  i2246.timeScale = i2247[2]
  i2246.unscaledTimeScale = i2247[3]
  i2246.useSmoothDeltaTime = !!i2247[4]
  i2246.maxSmoothUnscaledTime = i2247[5]
  i2246.rewindCallbackMode = i2247[6]
  i2246.showUnityEditorReport = !!i2247[7]
  i2246.logBehaviour = i2247[8]
  i2246.drawGizmos = !!i2247[9]
  i2246.defaultRecyclable = !!i2247[10]
  i2246.defaultAutoPlay = i2247[11]
  i2246.defaultUpdateType = i2247[12]
  i2246.defaultTimeScaleIndependent = !!i2247[13]
  i2246.defaultEaseType = i2247[14]
  i2246.defaultEaseOvershootOrAmplitude = i2247[15]
  i2246.defaultEasePeriod = i2247[16]
  i2246.defaultAutoKill = !!i2247[17]
  i2246.defaultLoopType = i2247[18]
  i2246.debugMode = !!i2247[19]
  i2246.debugStoreTargetId = !!i2247[20]
  i2246.showPreviewPanel = !!i2247[21]
  i2246.storeSettingsLocation = i2247[22]
  i2246.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2247[23], i2246.modules)
  i2246.createASMDEF = !!i2247[24]
  i2246.showPlayingTweens = !!i2247[25]
  i2246.showPausedTweens = !!i2247[26]
  return i2246
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2248 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2249 = data
  i2248.logBehaviour = i2249[0]
  i2248.nestedTweenFailureBehaviour = i2249[1]
  return i2248
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2250 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2251 = data
  i2250.showPanel = !!i2251[0]
  i2250.audioEnabled = !!i2251[1]
  i2250.physicsEnabled = !!i2251[2]
  i2250.physics2DEnabled = !!i2251[3]
  i2250.spriteEnabled = !!i2251[4]
  i2250.uiEnabled = !!i2251[5]
  i2250.textMeshProEnabled = !!i2251[6]
  i2250.tk2DEnabled = !!i2251[7]
  i2250.deAudioEnabled = !!i2251[8]
  i2250.deUnityExtendedEnabled = !!i2251[9]
  i2250.epoOutlineEnabled = !!i2251[10]
  return i2250
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i2252 = root || request.c( 'TMPro.TMP_Settings' )
  var i2253 = data
  i2252.m_enableWordWrapping = !!i2253[0]
  i2252.m_enableKerning = !!i2253[1]
  i2252.m_enableExtraPadding = !!i2253[2]
  i2252.m_enableTintAllSprites = !!i2253[3]
  i2252.m_enableParseEscapeCharacters = !!i2253[4]
  i2252.m_EnableRaycastTarget = !!i2253[5]
  i2252.m_GetFontFeaturesAtRuntime = !!i2253[6]
  i2252.m_missingGlyphCharacter = i2253[7]
  i2252.m_warningsDisabled = !!i2253[8]
  request.r(i2253[9], i2253[10], 0, i2252, 'm_defaultFontAsset')
  i2252.m_defaultFontAssetPath = i2253[11]
  i2252.m_defaultFontSize = i2253[12]
  i2252.m_defaultAutoSizeMinRatio = i2253[13]
  i2252.m_defaultAutoSizeMaxRatio = i2253[14]
  i2252.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i2253[15], i2253[16] )
  i2252.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i2253[17], i2253[18] )
  i2252.m_autoSizeTextContainer = !!i2253[19]
  i2252.m_IsTextObjectScaleStatic = !!i2253[20]
  var i2255 = i2253[21]
  var i2254 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i2255.length; i += 2) {
  request.r(i2255[i + 0], i2255[i + 1], 1, i2254, '')
  }
  i2252.m_fallbackFontAssets = i2254
  i2252.m_matchMaterialPreset = !!i2253[22]
  request.r(i2253[23], i2253[24], 0, i2252, 'm_defaultSpriteAsset')
  i2252.m_defaultSpriteAssetPath = i2253[25]
  i2252.m_enableEmojiSupport = !!i2253[26]
  i2252.m_MissingCharacterSpriteUnicode = i2253[27]
  i2252.m_defaultColorGradientPresetsPath = i2253[28]
  request.r(i2253[29], i2253[30], 0, i2252, 'm_defaultStyleSheet')
  i2252.m_StyleSheetsResourcePath = i2253[31]
  request.r(i2253[32], i2253[33], 0, i2252, 'm_leadingCharacters')
  request.r(i2253[34], i2253[35], 0, i2252, 'm_followingCharacters')
  i2252.m_UseModernHangulLineBreakingRules = !!i2253[36]
  return i2252
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i2256 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i2257 = data
  i2256.hashCode = i2257[0]
  request.r(i2257[1], i2257[2], 0, i2256, 'material')
  i2256.materialHashCode = i2257[3]
  request.r(i2257[4], i2257[5], 0, i2256, 'spriteSheet')
  var i2259 = i2257[6]
  var i2258 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i2259.length; i += 1) {
    i2258.add(request.d('TMPro.TMP_Sprite', i2259[i + 0]));
  }
  i2256.spriteInfoList = i2258
  var i2261 = i2257[7]
  var i2260 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i2261.length; i += 2) {
  request.r(i2261[i + 0], i2261[i + 1], 1, i2260, '')
  }
  i2256.fallbackSpriteAssets = i2260
  i2256.m_Version = i2257[8]
  i2256.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i2257[9], i2256.m_FaceInfo)
  var i2263 = i2257[10]
  var i2262 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.add(request.d('TMPro.TMP_SpriteCharacter', i2263[i + 0]));
  }
  i2256.m_SpriteCharacterTable = i2262
  var i2265 = i2257[11]
  var i2264 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.add(request.d('TMPro.TMP_SpriteGlyph', i2265[i + 0]));
  }
  i2256.m_SpriteGlyphTable = i2264
  return i2256
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i2268 = root || request.c( 'TMPro.TMP_Sprite' )
  var i2269 = data
  i2268.name = i2269[0]
  i2268.hashCode = i2269[1]
  i2268.unicode = i2269[2]
  i2268.pivot = new pc.Vec2( i2269[3], i2269[4] )
  request.r(i2269[5], i2269[6], 0, i2268, 'sprite')
  i2268.id = i2269[7]
  i2268.x = i2269[8]
  i2268.y = i2269[9]
  i2268.width = i2269[10]
  i2268.height = i2269[11]
  i2268.xOffset = i2269[12]
  i2268.yOffset = i2269[13]
  i2268.xAdvance = i2269[14]
  i2268.scale = i2269[15]
  return i2268
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i2274 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i2275 = data
  i2274.m_Name = i2275[0]
  i2274.m_HashCode = i2275[1]
  i2274.m_ElementType = i2275[2]
  i2274.m_Unicode = i2275[3]
  i2274.m_GlyphIndex = i2275[4]
  i2274.m_Scale = i2275[5]
  return i2274
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i2278 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i2279 = data
  request.r(i2279[0], i2279[1], 0, i2278, 'sprite')
  i2278.m_Index = i2279[2]
  i2278.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i2279[3], i2278.m_Metrics)
  i2278.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i2279[4], i2278.m_GlyphRect)
  i2278.m_Scale = i2279[5]
  i2278.m_AtlasIndex = i2279[6]
  i2278.m_ClassDefinitionType = i2279[7]
  return i2278
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i2280 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i2281 = data
  var i2283 = i2281[0]
  var i2282 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i2283.length; i += 1) {
    i2282.add(request.d('TMPro.TMP_Style', i2283[i + 0]));
  }
  i2280.m_StyleList = i2282
  return i2280
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i2286 = root || request.c( 'TMPro.TMP_Style' )
  var i2287 = data
  i2286.m_Name = i2287[0]
  i2286.m_HashCode = i2287[1]
  i2286.m_OpeningDefinition = i2287[2]
  i2286.m_ClosingDefinition = i2287[3]
  i2286.m_OpeningTagArray = i2287[4]
  i2286.m_ClosingTagArray = i2287[5]
  i2286.m_OpeningTagUnicodeArray = i2287[6]
  i2286.m_ClosingTagUnicodeArray = i2287[7]
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2289 = data
  var i2291 = i2289[0]
  var i2290 = []
  for(var i = 0; i < i2291.length; i += 1) {
    i2290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2291[i + 0]) );
  }
  i2288.files = i2290
  i2288.componentToPrefabIds = i2289[1]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2295 = data
  i2294.path = i2295[0]
  request.r(i2295[1], i2295[2], 0, i2294, 'unityObject')
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2297 = data
  var i2299 = i2297[0]
  var i2298 = []
  for(var i = 0; i < i2299.length; i += 1) {
    i2298.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2299[i + 0]) );
  }
  i2296.scriptsExecutionOrder = i2298
  var i2301 = i2297[1]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2301[i + 0]) );
  }
  i2296.sortingLayers = i2300
  var i2303 = i2297[2]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2303[i + 0]) );
  }
  i2296.cullingLayers = i2302
  i2296.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2297[3], i2296.timeSettings)
  i2296.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2297[4], i2296.physicsSettings)
  i2296.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2297[5], i2296.physics2DSettings)
  i2296.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2297[6], i2296.qualitySettings)
  i2296.enableRealtimeShadows = !!i2297[7]
  i2296.enableAutoInstancing = !!i2297[8]
  i2296.enableDynamicBatching = !!i2297[9]
  i2296.lightmapEncodingQuality = i2297[10]
  i2296.desiredColorSpace = i2297[11]
  var i2305 = i2297[12]
  var i2304 = []
  for(var i = 0; i < i2305.length; i += 1) {
    i2304.push( i2305[i + 0] );
  }
  i2296.allTags = i2304
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2309 = data
  i2308.name = i2309[0]
  i2308.value = i2309[1]
  return i2308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2313 = data
  i2312.id = i2313[0]
  i2312.name = i2313[1]
  i2312.value = i2313[2]
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2317 = data
  i2316.id = i2317[0]
  i2316.name = i2317[1]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2319 = data
  i2318.fixedDeltaTime = i2319[0]
  i2318.maximumDeltaTime = i2319[1]
  i2318.timeScale = i2319[2]
  i2318.maximumParticleTimestep = i2319[3]
  return i2318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2321 = data
  i2320.gravity = new pc.Vec3( i2321[0], i2321[1], i2321[2] )
  i2320.defaultSolverIterations = i2321[3]
  i2320.bounceThreshold = i2321[4]
  i2320.autoSyncTransforms = !!i2321[5]
  i2320.autoSimulation = !!i2321[6]
  var i2323 = i2321[7]
  var i2322 = []
  for(var i = 0; i < i2323.length; i += 1) {
    i2322.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2323[i + 0]) );
  }
  i2320.collisionMatrix = i2322
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2327 = data
  i2326.enabled = !!i2327[0]
  i2326.layerId = i2327[1]
  i2326.otherLayerId = i2327[2]
  return i2326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2329 = data
  request.r(i2329[0], i2329[1], 0, i2328, 'material')
  i2328.gravity = new pc.Vec2( i2329[2], i2329[3] )
  i2328.positionIterations = i2329[4]
  i2328.velocityIterations = i2329[5]
  i2328.velocityThreshold = i2329[6]
  i2328.maxLinearCorrection = i2329[7]
  i2328.maxAngularCorrection = i2329[8]
  i2328.maxTranslationSpeed = i2329[9]
  i2328.maxRotationSpeed = i2329[10]
  i2328.baumgarteScale = i2329[11]
  i2328.baumgarteTOIScale = i2329[12]
  i2328.timeToSleep = i2329[13]
  i2328.linearSleepTolerance = i2329[14]
  i2328.angularSleepTolerance = i2329[15]
  i2328.defaultContactOffset = i2329[16]
  i2328.autoSimulation = !!i2329[17]
  i2328.queriesHitTriggers = !!i2329[18]
  i2328.queriesStartInColliders = !!i2329[19]
  i2328.callbacksOnDisable = !!i2329[20]
  i2328.reuseCollisionCallbacks = !!i2329[21]
  i2328.autoSyncTransforms = !!i2329[22]
  var i2331 = i2329[23]
  var i2330 = []
  for(var i = 0; i < i2331.length; i += 1) {
    i2330.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2331[i + 0]) );
  }
  i2328.collisionMatrix = i2330
  return i2328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2335 = data
  i2334.enabled = !!i2335[0]
  i2334.layerId = i2335[1]
  i2334.otherLayerId = i2335[2]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2337 = data
  var i2339 = i2337[0]
  var i2338 = []
  for(var i = 0; i < i2339.length; i += 1) {
    i2338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2339[i + 0]) );
  }
  i2336.qualityLevels = i2338
  var i2341 = i2337[1]
  var i2340 = []
  for(var i = 0; i < i2341.length; i += 1) {
    i2340.push( i2341[i + 0] );
  }
  i2336.names = i2340
  i2336.shadows = i2337[2]
  i2336.anisotropicFiltering = i2337[3]
  i2336.antiAliasing = i2337[4]
  i2336.lodBias = i2337[5]
  i2336.shadowCascades = i2337[6]
  i2336.shadowDistance = i2337[7]
  i2336.shadowmaskMode = i2337[8]
  i2336.shadowProjection = i2337[9]
  i2336.shadowResolution = i2337[10]
  i2336.softParticles = !!i2337[11]
  i2336.softVegetation = !!i2337[12]
  i2336.activeColorSpace = i2337[13]
  i2336.desiredColorSpace = i2337[14]
  i2336.masterTextureLimit = i2337[15]
  i2336.maxQueuedFrames = i2337[16]
  i2336.particleRaycastBudget = i2337[17]
  i2336.pixelLightCount = i2337[18]
  i2336.realtimeReflectionProbes = !!i2337[19]
  i2336.shadowCascade2Split = i2337[20]
  i2336.shadowCascade4Split = new pc.Vec3( i2337[21], i2337[22], i2337[23] )
  i2336.streamingMipmapsActive = !!i2337[24]
  i2336.vSyncCount = i2337[25]
  i2336.asyncUploadBufferSize = i2337[26]
  i2336.asyncUploadTimeSlice = i2337[27]
  i2336.billboardsFaceCameraPosition = !!i2337[28]
  i2336.shadowNearPlaneOffset = i2337[29]
  i2336.streamingMipmapsMemoryBudget = i2337[30]
  i2336.maximumLODLevel = i2337[31]
  i2336.streamingMipmapsAddAllCameras = !!i2337[32]
  i2336.streamingMipmapsMaxLevelReduction = i2337[33]
  i2336.streamingMipmapsRenderersPerFrame = i2337[34]
  i2336.resolutionScalingFixedDPIFactor = i2337[35]
  i2336.streamingMipmapsMaxFileIORequests = i2337[36]
  i2336.currentQualityLevel = i2337[37]
  return i2336
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2344 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2345 = data
  request.r(i2345[0], i2345[1], 0, i2344, 'm_ObjectArgument')
  i2344.m_ObjectArgumentAssemblyTypeName = i2345[2]
  i2344.m_IntArgument = i2345[3]
  i2344.m_FloatArgument = i2345[4]
  i2344.m_StringArgument = i2345[5]
  i2344.m_BoolArgument = !!i2345[6]
  return i2344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2349 = data
  i2348.mode = i2349[0]
  i2348.parameter = i2349[1]
  i2348.threshold = i2349[2]
  return i2348
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i2350 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i2351 = data
  i2350.xPlacement = i2351[0]
  i2350.yPlacement = i2351[1]
  i2350.xAdvance = i2351[2]
  i2350.yAdvance = i2351[3]
  return i2350
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"enabled":0,"sortingLayerIndex":1,"sortingOrder":2,"sortingLayerName":3},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"color":16,"sprite":20,"flipX":22,"flipY":23,"drawMode":24,"size":25,"tileMode":27,"adaptiveModeThreshold":28,"maskInteraction":29,"spriteSortPoint":30},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.PolygonCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"usedByComposite":8,"autoTiling":9,"points":10},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.EdgeCollider2D":{"enabled":0,"isTrigger":1,"usedByEffector":2,"density":3,"offset":4,"material":6,"edgeRadius":8,"points":9,"useAdjacentStartPoint":10,"adjacentStartPoint":11,"useAdjacentEndPoint":13,"adjacentEndPoint":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2}}

Deserializers.requiredComponents = {"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[76],"77":[34],"78":[79],"80":[79],"81":[79],"82":[79],"83":[79],"84":[79],"85":[79],"86":[13],"87":[13],"88":[13],"89":[13],"90":[13],"91":[13],"92":[13],"93":[13],"94":[13],"95":[13],"96":[13],"97":[13],"98":[13],"99":[34],"100":[101],"102":[103],"104":[103],"40":[0],"38":[20],"47":[50],"22":[19],"31":[27],"105":[106],"107":[20],"108":[106],"109":[0],"110":[0],"42":[40],"3":[1,0],"111":[0],"41":[40],"112":[0],"113":[0],"114":[0],"115":[0],"116":[0],"117":[0],"118":[0],"57":[0],"119":[0],"120":[1,0],"121":[0],"122":[0],"123":[0],"124":[0],"125":[1,0],"126":[0],"127":[51],"128":[51],"52":[51],"129":[51],"130":[34],"131":[34],"132":[133],"134":[34],"135":[0],"136":[101,0],"43":[0,1],"137":[0],"138":[1,0],"139":[101],"140":[1,0],"141":[0],"142":[106],"143":[34],"144":[145]}

Deserializers.types = ["UnityEngine.RectTransform","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.MonoBehaviour","FloatingJoystick","UnityEngine.Sprite","UnityEngine.Transform","_Project.Code.Core.Character.CharacterInstaller","_Project.Code.Core.Character.Mover","_Project.Code.Core.Collision.CollisionDetector","_Project.Code.Core.Character.CharacterAnimator","_Project.Code.Core.Items.Inventory.ItemInventory","UnityEngine.Rigidbody2D","_Project.Code.Core.Character.TopDownAnimator","UnityEngine.Animator","_Project.Code.Core.Character.TopDownAnimationConfig","UnityEngine.CircleCollider2D","UnityEditor.Animations.AnimatorController","UnityEngine.Rendering.SortingGroup","UnityEngine.SpriteRenderer","UnityEngine.Material","_Project.Code.Core.Character.SortingGroupAnimator","_Project.Code.Core.Items.Inventory.ColumnInventoryView","UnityEngine.Shader","_Project.Code.Core.Items.Item","Cinemachine.CinemachineVirtualCamera","Cinemachine.CinemachineConfiner2D","UnityEngine.PolygonCollider2D","_Project.Code.Camera.CameraInBordersZoom","UnityEngine.BoxCollider2D","_Project.Code.Camera.CinemachineConfinerUpdater","Cinemachine.CinemachinePipeline","Cinemachine.CinemachineFramingTransposer","UnityEngine.Camera","UnityEngine.AudioListener","Cinemachine.CinemachineBrain","_Project.Code.Camera.Follower","_Project.Code.Selling.Customer","_Project.Code.Selling.Line.BubbleView","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Texture2D","_Project.Code.Core.Harvesting.Field","_Project.Code.Entry.EntryPoint","_Project.Code.Services.ItemsCreation.ItemsCreator","UnityEngine.GameObject","_Project.Code.Services.CoroutineRunner.CoroutineRunner","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EdgeCollider2D","_Project.Code.Selling.Line.Line","_Project.Code.Selling.Seller","_Project.Code.Core.PopcornFarm.CornFarm","UnityEngine.UI.Mask","VariableJoystick","_Project.Code.Tutorial.InfinitySignAnimation","_Project.Code.Core.Animations.BreathAnimation","UnityEngine.AnimationClip","UnityEngine.Font","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.U2D.Animation.SpriteSkin","Unity.VisualScripting.ScriptMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","UnityEngine.U2D.PixelPerfectCamera","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.StateMachine","Cinemachine.CinemachineExternalCamera","Cinemachine.GroupWeightManipulator","Cinemachine.CinemachineTargetGroup"]

Deserializers.unityVersion = "2022.3.49f1";

Deserializers.productName = "SpongeBob-Playable";

Deserializers.lunaInitializationTime = "03/12/2025 22:40:31";

Deserializers.lunaDaysRunning = "5.3";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1865";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4485";

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

Deserializers.buildID = "2bf7fbe2-d495-48fd-bb44-d51009dcb371";

Deserializers.runtimeInitializeOnLoadInfos = [[["Cinemachine","CinemachineImpulseManager","InitializeModule"],["Cinemachine","CinemachineCore","InitializeModule"],["Cinemachine","UpdateTracker","InitializeModule"],["Cinemachine","CinemachineStoryboard","InitializeModule"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

