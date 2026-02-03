import {
  CheckOutlined_default,
  CloseCircleFilled_default,
  CopyOutlined_default,
  EditOutlined_default,
  EnterOutlined_default,
  LoadingOutlined_default
} from "./chunk-TJUM7WYY.js";
import {
  FormItemInputContext,
  KeyCode_default,
  NoFormStyle,
  getTransitionName,
  initFadeMotion,
  initZoomMotion,
  isNonNullable_default,
  triggerFocus,
  useCSSVarCls_default,
  useMergeSemantic,
  useOrientation,
  useSize_default,
  useVariants_default,
  useZIndex,
  zindexContext_default
} from "./chunk-7YRFXPLL.js";
import {
  ConfigContext,
  DisabledContext_default,
  PresetColors,
  UniqueProvider_default,
  _classCallCheck,
  _createClass,
  _toConsumableArray,
  clearFix,
  cloneElement,
  devUseWarning,
  es_default,
  es_default4 as es_default2,
  genCssVar,
  genPresetColor,
  genStyleHooks,
  isFragment,
  merge2 as merge,
  omit,
  operationUnit,
  raf_default,
  resetComponent,
  toArray,
  unit,
  useComponentConfig,
  useControlledState,
  useEvent_default,
  useId_default,
  useLayoutEffect_default,
  useLocale_default,
  useToken,
  warning_default
} from "./chunk-LABRJ26G.js";
import {
  FastColor,
  canUseDom,
  clsx,
  composeRef,
  gold
} from "./chunk-HZ3DMHMG.js";
import {
  __toESM,
  require_react
} from "./chunk-G4V7ITBN.js";

// node_modules/antd/es/tooltip/index.js
var React16 = __toESM(require_react());

// node_modules/@rc-component/tooltip/es/Popup.js
var React = __toESM(require_react());
var Popup = (props) => {
  const {
    children,
    prefixCls,
    id,
    classNames,
    styles,
    className,
    style
  } = props;
  return React.createElement("div", {
    id,
    className: clsx(`${prefixCls}-container`, classNames?.container, className),
    style: {
      ...styles?.container,
      ...style
    },
    role: "tooltip"
  }, typeof children === "function" ? children() : children);
};
var Popup_default = Popup;

// node_modules/@rc-component/tooltip/es/Tooltip.js
var React2 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/@rc-component/tooltip/es/placements.js
var autoAdjustOverflowTopBottom = {
  shiftX: 64,
  adjustY: 1
};
var autoAdjustOverflowLeftRight = {
  adjustX: 1,
  shiftY: true
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ["cr", "cl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  },
  right: {
    points: ["cl", "cr"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, -4],
    targetOffset
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [4, 0],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflowTopBottom,
    offset: [0, 4],
    targetOffset
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflowLeftRight,
    offset: [-4, 0],
    targetOffset
  }
};

// node_modules/@rc-component/tooltip/es/Tooltip.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var Tooltip = React2.forwardRef((props, ref) => {
  const {
    trigger = ["hover"],
    mouseEnterDelay = 0,
    mouseLeaveDelay = 0.1,
    prefixCls = "rc-tooltip",
    children,
    onVisibleChange,
    afterVisibleChange,
    motion,
    placement = "right",
    align = {},
    destroyOnHidden = false,
    defaultVisible,
    getTooltipContainer,
    arrowContent,
    overlay,
    id,
    showArrow = true,
    classNames,
    styles,
    ...restProps
  } = props;
  const mergedId = useId_default(id);
  const triggerRef = (0, import_react.useRef)(null);
  (0, import_react.useImperativeHandle)(ref, () => triggerRef.current);
  const extraProps = {
    ...restProps
  };
  if ("visible" in props) {
    extraProps.popupVisible = props.visible;
  }
  const mergedArrow = React2.useMemo(() => {
    if (!showArrow) {
      return false;
    }
    const arrowConfig = showArrow === true ? {} : showArrow;
    return {
      ...arrowConfig,
      className: clsx(arrowConfig.className, classNames?.arrow),
      style: {
        ...arrowConfig.style,
        ...styles?.arrow
      },
      content: arrowConfig.content ?? arrowContent
    };
  }, [showArrow, classNames?.arrow, styles?.arrow, arrowContent]);
  const getChildren = ({
    open
  }) => {
    const child = React2.Children.only(children);
    const ariaProps = {
      "aria-describedby": overlay && open ? mergedId : void 0
    };
    return React2.cloneElement(child, ariaProps);
  };
  return React2.createElement(es_default2, _extends({
    popupClassName: classNames?.root,
    prefixCls,
    popup: React2.createElement(Popup_default, {
      key: "content",
      prefixCls,
      id: mergedId,
      classNames,
      styles
    }, overlay),
    action: trigger,
    builtinPlacements: placements,
    popupPlacement: placement,
    ref: triggerRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onOpenChange: onVisibleChange,
    afterOpenChange: afterVisibleChange,
    popupMotion: motion,
    defaultPopupVisible: defaultVisible,
    autoDestroy: destroyOnHidden,
    mouseLeaveDelay,
    popupStyle: styles?.root,
    mouseEnterDelay,
    arrow: mergedArrow,
    uniqueContainerClassName: classNames?.uniqueContainer,
    uniqueContainerStyle: styles?.uniqueContainer
  }, extraProps), getChildren);
});
var Tooltip_default = Tooltip;

// node_modules/@rc-component/tooltip/es/index.js
var es_default3 = Tooltip_default;

// node_modules/antd/es/_util/ContextIsolator.js
var import_react2 = __toESM(require_react());

// node_modules/antd/es/space/Compact.js
var React3 = __toESM(require_react());

// node_modules/antd/es/space/style/compact.js
var genSpaceCompactStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [componentCls]: {
      display: "inline-flex",
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
var compact_default = genStyleHooks(["Space", "Compact"], (token) => [genSpaceCompactStyle(token)], () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: false
});

// node_modules/antd/es/space/Compact.js
var SpaceCompactItemContext = React3.createContext(null);
var useCompactItemContext = (prefixCls, direction) => {
  const compactItemContext = React3.useContext(SpaceCompactItemContext);
  const compactItemClassnames = React3.useMemo(() => {
    if (!compactItemContext) {
      return "";
    }
    const {
      compactDirection,
      isFirstItem,
      isLastItem
    } = compactItemContext;
    const separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return clsx(`${prefixCls}-compact${separator}item`, {
      [`${prefixCls}-compact${separator}first-item`]: isFirstItem,
      [`${prefixCls}-compact${separator}last-item`]: isLastItem,
      [`${prefixCls}-compact${separator}item-rtl`]: direction === "rtl"
    });
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext?.compactSize,
    compactDirection: compactItemContext?.compactDirection,
    compactItemClassnames
  };
};
var NoCompactStyle = (props) => {
  const {
    children
  } = props;
  return React3.createElement(SpaceCompactItemContext.Provider, {
    value: null
  }, children);
};
var CompactItem = (props) => {
  const {
    children,
    ...others
  } = props;
  return React3.createElement(SpaceCompactItemContext.Provider, {
    value: React3.useMemo(() => others, [others])
  }, children);
};
var Compact = (props) => {
  const {
    getPrefixCls,
    direction: directionConfig
  } = React3.useContext(ConfigContext);
  const {
    size,
    direction,
    orientation,
    block,
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    vertical,
    ...restProps
  } = props;
  if (true) {
    const warning = devUseWarning("Space.Compact");
    warning.deprecated(!direction, "direction", "orientation");
  }
  const [mergedOrientation, mergedVertical] = useOrientation(orientation, vertical, direction);
  const mergedSize = useSize_default((ctx) => size ?? ctx);
  const prefixCls = getPrefixCls("space-compact", customizePrefixCls);
  const [hashId] = compact_default(prefixCls);
  const clx = clsx(prefixCls, hashId, {
    [`${prefixCls}-rtl`]: directionConfig === "rtl",
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-vertical`]: mergedVertical
  }, className, rootClassName);
  const compactItemContext = React3.useContext(SpaceCompactItemContext);
  const childNodes = toArray(children);
  const nodes = React3.useMemo(() => childNodes.map((child, i) => {
    const key = child?.key || `${prefixCls}-item-${i}`;
    return React3.createElement(CompactItem, {
      key,
      compactSize: mergedSize,
      compactDirection: mergedOrientation,
      isFirstItem: i === 0 && (!compactItemContext || compactItemContext?.isFirstItem),
      isLastItem: i === childNodes.length - 1 && (!compactItemContext || compactItemContext?.isLastItem)
    }, child);
  }), [childNodes, compactItemContext, mergedOrientation, mergedSize, prefixCls]);
  if (childNodes.length === 0) {
    return null;
  }
  return React3.createElement("div", {
    className: clx,
    ...restProps
  }, nodes);
};
var Compact_default = Compact;

// node_modules/antd/es/_util/ContextIsolator.js
var ContextIsolator = (props) => {
  const {
    space,
    form,
    children
  } = props;
  if (!isNonNullable_default(children)) {
    return null;
  }
  let result = children;
  if (form) {
    result = import_react2.default.createElement(NoFormStyle, {
      override: true,
      status: true
    }, result);
  }
  if (space) {
    result = import_react2.default.createElement(NoCompactStyle, null, result);
  }
  return result;
};
var ContextIsolator_default = ContextIsolator;

// node_modules/antd/es/style/roundedArrow.js
function getArrowToken(token) {
  const {
    sizePopupArrow,
    borderRadiusXS,
    borderRadiusOuter
  } = token;
  const unitWidth = sizePopupArrow / 2;
  const ax = 0;
  const ay = unitWidth;
  const bx = borderRadiusOuter * 1 / Math.sqrt(2);
  const by = unitWidth - borderRadiusOuter * (1 - 1 / Math.sqrt(2));
  const cx = unitWidth - borderRadiusXS * (1 / Math.sqrt(2));
  const cy = borderRadiusOuter * (Math.sqrt(2) - 1) + borderRadiusXS * (1 / Math.sqrt(2));
  const dx = 2 * unitWidth - cx;
  const dy = cy;
  const ex = 2 * unitWidth - bx;
  const ey = by;
  const fx = 2 * unitWidth - ax;
  const fy = ay;
  const shadowWidth = unitWidth * Math.sqrt(2) + borderRadiusOuter * (Math.sqrt(2) - 2);
  const polygonOffset = borderRadiusOuter * (Math.sqrt(2) - 1);
  const arrowPolygon = `polygon(${polygonOffset}px 100%, 50% ${polygonOffset}px, ${2 * unitWidth - polygonOffset}px 100%, ${polygonOffset}px 100%)`;
  const arrowPath = `path('M ${ax} ${ay} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${bx} ${by} L ${cx} ${cy} A ${borderRadiusXS} ${borderRadiusXS} 0 0 1 ${dx} ${dy} L ${ex} ${ey} A ${borderRadiusOuter} ${borderRadiusOuter} 0 0 0 ${fx} ${fy} Z')`;
  return {
    arrowShadowWidth: shadowWidth,
    arrowPath,
    arrowPolygon
  };
}
var genRoundedArrow = (token, bgColor, boxShadow) => {
  const {
    sizePopupArrow,
    arrowPolygon,
    arrowPath,
    arrowShadowWidth,
    borderRadiusXS,
    calc
  } = token;
  return {
    pointerEvents: "none",
    width: sizePopupArrow,
    height: sizePopupArrow,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: sizePopupArrow,
      height: calc(sizePopupArrow).div(2).equal(),
      background: bgColor,
      clipPath: {
        _multi_value_: true,
        value: [arrowPolygon, arrowPath]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: arrowShadowWidth,
      height: arrowShadowWidth,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: true,
        value: `0 0 ${unit(borderRadiusXS)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow,
      zIndex: 0,
      background: "transparent"
    }
  };
};

// node_modules/antd/es/style/placementArrow.js
var MAX_VERTICAL_CONTENT_RADIUS = 8;
function getArrowOffsetToken(options) {
  const {
    contentRadius,
    limitVerticalRadius
  } = options;
  const arrowOffset = contentRadius > 12 ? contentRadius + 2 : 12;
  const arrowOffsetVertical = limitVerticalRadius ? MAX_VERTICAL_CONTENT_RADIUS : arrowOffset;
  return {
    arrowOffsetHorizontal: arrowOffset,
    arrowOffsetVertical
  };
}
function isInject(valid, code) {
  if (!valid) {
    return {};
  }
  return code;
}
var getArrowStyle = (token, colorBg, options) => {
  const {
    componentCls,
    boxShadowPopoverArrow,
    arrowOffsetVertical,
    arrowOffsetHorizontal,
    antCls
  } = token;
  const [varName] = genCssVar(antCls, "tooltip");
  const {
    arrowDistance = 0,
    arrowPlacement = {
      left: true,
      right: true,
      top: true,
      bottom: true
    }
  } = options || {};
  return {
    [componentCls]: {
      // ============================ Basic ============================
      [`${componentCls}-arrow`]: [{
        position: "absolute",
        zIndex: 1,
        // lift it up so the menu wouldn't cask shadow on it
        display: "block",
        ...genRoundedArrow(token, colorBg, boxShadowPopoverArrow),
        "&:before": {
          background: colorBg
        }
      }],
      // ========================== Placement ==========================
      // Here handle the arrow position and rotate stuff
      // >>>>> Top
      ...isInject(!!arrowPlacement.top, {
        [[`&-placement-top > ${componentCls}-arrow`, `&-placement-topLeft > ${componentCls}-arrow`, `&-placement-topRight > ${componentCls}-arrow`].join(",")]: {
          bottom: arrowDistance,
          transform: "translateY(100%) rotate(180deg)"
        },
        [`&-placement-top > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateX(-50%) translateY(100%) rotate(180deg)"
        },
        "&-placement-topLeft": {
          [varName("arrow-offset-horizontal")]: arrowOffsetHorizontal,
          [`> ${componentCls}-arrow`]: {
            left: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        },
        "&-placement-topRight": {
          [varName("arrow-offset-horizontal")]: `calc(100% - ${unit(arrowOffsetHorizontal)})`,
          [`> ${componentCls}-arrow`]: {
            right: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        }
      }),
      // >>>>> Bottom
      ...isInject(!!arrowPlacement.bottom, {
        [[`&-placement-bottom > ${componentCls}-arrow`, `&-placement-bottomLeft > ${componentCls}-arrow`, `&-placement-bottomRight > ${componentCls}-arrow`].join(",")]: {
          top: arrowDistance,
          transform: `translateY(-100%)`
        },
        [`&-placement-bottom > ${componentCls}-arrow`]: {
          left: {
            _skip_check_: true,
            value: "50%"
          },
          transform: `translateX(-50%) translateY(-100%)`
        },
        "&-placement-bottomLeft": {
          [varName("arrow-offset-horizontal")]: arrowOffsetHorizontal,
          [`> ${componentCls}-arrow`]: {
            left: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        },
        "&-placement-bottomRight": {
          [varName("arrow-offset-horizontal")]: `calc(100% - ${unit(arrowOffsetHorizontal)})`,
          [`> ${componentCls}-arrow`]: {
            right: {
              _skip_check_: true,
              value: arrowOffsetHorizontal
            }
          }
        }
      }),
      // >>>>> Left
      ...isInject(!!arrowPlacement.left, {
        [[`&-placement-left > ${componentCls}-arrow`, `&-placement-leftTop > ${componentCls}-arrow`, `&-placement-leftBottom > ${componentCls}-arrow`].join(",")]: {
          right: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(100%) rotate(90deg)"
        },
        [`&-placement-left > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(100%) rotate(90deg)"
        },
        [`&-placement-leftTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-leftBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      }),
      // >>>>> Right
      ...isInject(!!arrowPlacement.right, {
        [[`&-placement-right > ${componentCls}-arrow`, `&-placement-rightTop > ${componentCls}-arrow`, `&-placement-rightBottom > ${componentCls}-arrow`].join(",")]: {
          left: {
            _skip_check_: true,
            value: arrowDistance
          },
          transform: "translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-right > ${componentCls}-arrow`]: {
          top: {
            _skip_check_: true,
            value: "50%"
          },
          transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
        },
        [`&-placement-rightTop > ${componentCls}-arrow`]: {
          top: arrowOffsetVertical
        },
        [`&-placement-rightBottom > ${componentCls}-arrow`]: {
          bottom: arrowOffsetVertical
        }
      })
    }
  };
};
var placementArrow_default = getArrowStyle;

// node_modules/antd/es/_util/placements.js
function getOverflowOptions(placement, arrowOffset, arrowWidth, autoAdjustOverflow) {
  if (autoAdjustOverflow === false) {
    return {
      adjustX: false,
      adjustY: false
    };
  }
  const overflow = autoAdjustOverflow && typeof autoAdjustOverflow === "object" ? autoAdjustOverflow : {};
  const baseOverflow = {};
  switch (placement) {
    case "top":
    case "bottom":
      baseOverflow.shiftX = arrowOffset.arrowOffsetHorizontal * 2 + arrowWidth;
      baseOverflow.shiftY = true;
      baseOverflow.adjustY = true;
      break;
    case "left":
    case "right":
      baseOverflow.shiftY = arrowOffset.arrowOffsetVertical * 2 + arrowWidth;
      baseOverflow.shiftX = true;
      baseOverflow.adjustX = true;
      break;
  }
  const mergedOverflow = {
    ...baseOverflow,
    ...overflow
  };
  if (!mergedOverflow.shiftX) {
    mergedOverflow.adjustX = true;
  }
  if (!mergedOverflow.shiftY) {
    mergedOverflow.adjustY = true;
  }
  return mergedOverflow;
}
var PlacementAlignMap = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
};
var ArrowCenterPlacementAlignMap = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
};
var DisableAutoArrowList = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function getPlacements(config) {
  const {
    arrowWidth,
    autoAdjustOverflow,
    arrowPointAtCenter,
    offset,
    borderRadius,
    visibleFirst
  } = config;
  const halfArrowWidth = arrowWidth / 2;
  const placementMap = {};
  const arrowOffset = getArrowOffsetToken({
    contentRadius: borderRadius,
    limitVerticalRadius: true
  });
  Object.keys(PlacementAlignMap).forEach((key) => {
    const template = arrowPointAtCenter && ArrowCenterPlacementAlignMap[key] || PlacementAlignMap[key];
    const placementInfo = {
      ...template,
      offset: [0, 0],
      dynamicInset: true
    };
    placementMap[key] = placementInfo;
    if (DisableAutoArrowList.has(key)) {
      placementInfo.autoArrow = false;
    }
    switch (key) {
      case "top":
      case "topLeft":
      case "topRight":
        placementInfo.offset[1] = -halfArrowWidth - offset;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        placementInfo.offset[1] = halfArrowWidth + offset;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        placementInfo.offset[0] = -halfArrowWidth - offset;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        placementInfo.offset[0] = halfArrowWidth + offset;
        break;
    }
    if (arrowPointAtCenter) {
      switch (key) {
        case "topLeft":
        case "bottomLeft":
          placementInfo.offset[0] = -arrowOffset.arrowOffsetHorizontal - halfArrowWidth;
          break;
        case "topRight":
        case "bottomRight":
          placementInfo.offset[0] = arrowOffset.arrowOffsetHorizontal + halfArrowWidth;
          break;
        case "leftTop":
        case "rightTop":
          placementInfo.offset[1] = -arrowOffset.arrowOffsetHorizontal * 2 + halfArrowWidth;
          break;
        case "leftBottom":
        case "rightBottom":
          placementInfo.offset[1] = arrowOffset.arrowOffsetHorizontal * 2 - halfArrowWidth;
          break;
      }
    }
    placementInfo.overflow = getOverflowOptions(key, arrowOffset, arrowWidth, autoAdjustOverflow);
    if (visibleFirst) {
      placementInfo.htmlRegion = "visibleFirst";
    }
  });
  return placementMap;
}

// node_modules/antd/es/tooltip/hook/useMergedArrow.js
var import_react3 = __toESM(require_react());
var useMergedArrow = (providedArrow, providedContextArrow) => {
  const toConfig = (arrow) => typeof arrow === "boolean" ? {
    show: arrow
  } : arrow || {};
  return import_react3.default.useMemo(() => {
    const arrowConfig = toConfig(providedArrow);
    const contextArrowConfig = toConfig(providedContextArrow);
    return {
      ...contextArrowConfig,
      ...arrowConfig,
      show: arrowConfig.show ?? contextArrowConfig.show ?? true
    };
  }, [providedArrow, providedContextArrow]);
};
var useMergedArrow_default = useMergedArrow;

// node_modules/antd/es/tooltip/PurePanel.js
var React15 = __toESM(require_react());

// node_modules/antd/es/tooltip/style/index.js
var FALL_BACK_ORIGIN = "50%";
var genTooltipStyle = (token) => {
  const {
    calc,
    componentCls,
    // ant-tooltip
    tooltipMaxWidth,
    tooltipColor,
    tooltipBg,
    tooltipBorderRadius,
    zIndexPopup,
    controlHeight,
    boxShadowSecondary,
    paddingSM,
    paddingXS,
    arrowOffsetHorizontal,
    sizePopupArrow,
    antCls
  } = token;
  const [varName, varRef] = genCssVar(antCls, "tooltip");
  const edgeAlignMinWidth = calc(tooltipBorderRadius).add(sizePopupArrow).add(arrowOffsetHorizontal).equal();
  const centerAlignMinWidth = calc(tooltipBorderRadius).mul(2).add(sizePopupArrow).equal();
  const sharedBodyStyle = {
    minWidth: centerAlignMinWidth,
    minHeight: controlHeight,
    padding: `${unit(token.calc(paddingSM).div(2).equal())} ${unit(paddingXS)}`,
    color: varRef("overlay-color", tooltipColor),
    textAlign: "start",
    textDecoration: "none",
    wordWrap: "break-word",
    backgroundColor: tooltipBg,
    borderRadius: tooltipBorderRadius,
    boxShadow: boxShadowSecondary,
    boxSizing: "border-box"
  };
  const sharedTransformOrigin = {
    // When use `autoArrow`, origin will follow the arrow position
    [varName("valid-offset-x")]: varRef("arrow-offset-horizontal", "var(--arrow-x)"),
    transformOrigin: [varRef("valid-offset-x", FALL_BACK_ORIGIN), `var(--arrow-y, ${FALL_BACK_ORIGIN})`].join(" ")
  };
  return [
    {
      [componentCls]: {
        ...resetComponent(token),
        position: "absolute",
        zIndex: zIndexPopup,
        display: "block",
        width: "max-content",
        maxWidth: tooltipMaxWidth,
        visibility: "visible",
        ...sharedTransformOrigin,
        "&-hidden": {
          display: "none"
        },
        [varName("arrow-background-color")]: tooltipBg,
        // Wrapper for the tooltip content
        [`${componentCls}-container`]: [sharedBodyStyle, initFadeMotion(token, true)],
        [`&:has(~ ${componentCls}-unique-container)`]: {
          [`${componentCls}-container`]: {
            border: "none",
            background: "transparent",
            boxShadow: "none"
          }
        },
        // Align placement should have another min width
        [[`&-placement-topLeft`, `&-placement-topRight`, `&-placement-bottomLeft`, `&-placement-bottomRight`].join(",")]: {
          minWidth: edgeAlignMinWidth
        },
        // Limit left and right placement radius
        [[`&-placement-left`, `&-placement-leftTop`, `&-placement-leftBottom`, `&-placement-right`, `&-placement-rightTop`, `&-placement-rightBottom`].join(",")]: {
          [`${componentCls}-inner`]: {
            borderRadius: token.min(tooltipBorderRadius, MAX_VERTICAL_CONTENT_RADIUS)
          }
        },
        [`${componentCls}-content`]: {
          position: "relative"
        },
        // generator for preset color
        ...genPresetColor(token, (colorKey, {
          darkColor
        }) => ({
          [`&${componentCls}-${colorKey}`]: {
            [`${componentCls}-container`]: {
              backgroundColor: darkColor
            },
            [`${componentCls}-arrow`]: {
              [varName("arrow-background-color")]: darkColor
            }
          }
        })),
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      }
    },
    // Arrow Style
    placementArrow_default(token, varRef("arrow-background-color")),
    // Pure Render
    {
      [`${componentCls}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: token.sizePopupArrow
      }
    },
    // Unique Body
    {
      [`${componentCls}-unique-container`]: {
        ...sharedBodyStyle,
        ...sharedTransformOrigin,
        position: "absolute",
        zIndex: calc(zIndexPopup).sub(1).equal(),
        "&-hidden": {
          display: "none"
        },
        "&-visible": {
          transition: `all ${token.motionDurationSlow}`
        }
      }
    }
  ];
};
var prepareComponentToken = (token) => ({
  zIndexPopup: token.zIndexPopupBase + 70,
  maxWidth: 250,
  ...getArrowOffsetToken({
    contentRadius: token.borderRadius,
    limitVerticalRadius: true
  }),
  ...getArrowToken(merge(token, {
    borderRadiusOuter: Math.min(token.borderRadiusOuter, 4)
  }))
});
var style_default = (prefixCls, rootCls, injectStyle = true) => {
  const useStyle = genStyleHooks("Tooltip", (token) => {
    const {
      borderRadius,
      colorTextLightSolid,
      colorBgSpotlight,
      maxWidth
    } = token;
    const TooltipToken = merge(token, {
      // default variables
      tooltipMaxWidth: maxWidth,
      tooltipColor: colorTextLightSolid,
      tooltipBorderRadius: borderRadius,
      tooltipBg: colorBgSpotlight
    });
    return [genTooltipStyle(TooltipToken), initZoomMotion(token, "zoom-big-fast")];
  }, prepareComponentToken, {
    resetStyle: false,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle
  });
  return useStyle(prefixCls, rootCls);
};

// node_modules/antd/es/_util/colors.js
var inverseColors = PresetColors.map((color) => `${color}-inverse`);
var PresetStatusColors = ["success", "processing", "error", "default", "warning"];
function isPresetColor(color, includeInverse = true) {
  if (includeInverse) {
    return [].concat(_toConsumableArray(inverseColors), _toConsumableArray(PresetColors)).includes(color);
  }
  return PresetColors.includes(color);
}
function isPresetStatusColor(color) {
  return PresetStatusColors.includes(color);
}

// node_modules/@rc-component/color-picker/es/ColorPicker.js
var import_react13 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/color.js
var getRoundNumber = (value) => Math.round(Number(value || 0));
var convertHsb2Hsv = (color) => {
  if (color instanceof FastColor) {
    return color;
  }
  if (color && typeof color === "object" && "h" in color && "b" in color) {
    const {
      b,
      ...resets
    } = color;
    return {
      ...resets,
      v: b
    };
  }
  if (typeof color === "string" && /hsb/.test(color)) {
    return color.replace(/hsb/, "hsv");
  }
  return color;
};
var Color = class extends FastColor {
  constructor(color) {
    super(convertHsb2Hsv(color));
  }
  toHsbString() {
    const hsb = this.toHsb();
    const saturation = getRoundNumber(hsb.s * 100);
    const lightness = getRoundNumber(hsb.b * 100);
    const hue = getRoundNumber(hsb.h);
    const alpha = hsb.a;
    const hsbString = `hsb(${hue}, ${saturation}%, ${lightness}%)`;
    const hsbaString = `hsba(${hue}, ${saturation}%, ${lightness}%, ${alpha.toFixed(alpha === 0 ? 0 : 2)})`;
    return alpha === 1 ? hsbString : hsbaString;
  }
  toHsb() {
    const {
      v,
      ...resets
    } = this.toHsv();
    return {
      ...resets,
      b: v,
      a: this.a
    };
  }
};

// node_modules/@rc-component/color-picker/es/util.js
var ColorPickerPrefixCls = "rc-color-picker";
var generateColor = (color) => {
  if (color instanceof Color) {
    return color;
  }
  return new Color(color);
};
var defaultColor = generateColor("#1677ff");
var calculateColor = (props) => {
  const {
    offset,
    targetRef,
    containerRef,
    color,
    type
  } = props;
  const {
    width,
    height
  } = containerRef.current.getBoundingClientRect();
  const {
    width: targetWidth,
    height: targetHeight
  } = targetRef.current.getBoundingClientRect();
  const centerOffsetX = targetWidth / 2;
  const centerOffsetY = targetHeight / 2;
  const saturation = (offset.x + centerOffsetX) / width;
  const bright = 1 - (offset.y + centerOffsetY) / height;
  const hsb = color.toHsb();
  const alphaOffset = saturation;
  const hueOffset = (offset.x + centerOffsetX) / width * 360;
  if (type) {
    switch (type) {
      case "hue":
        return generateColor({
          ...hsb,
          h: hueOffset <= 0 ? 0 : hueOffset
        });
      case "alpha":
        return generateColor({
          ...hsb,
          a: alphaOffset <= 0 ? 0 : alphaOffset
        });
    }
  }
  return generateColor({
    h: hsb.h,
    s: saturation <= 0 ? 0 : saturation,
    b: bright >= 1 ? 1 : bright,
    a: hsb.a
  });
};
var calcOffset = (color, type) => {
  const hsb = color.toHsb();
  switch (type) {
    case "hue":
      return {
        x: hsb.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: color.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: hsb.s * 100,
        y: (1 - hsb.b) * 100
      };
  }
};

// node_modules/@rc-component/color-picker/es/components/ColorBlock.js
var import_react4 = __toESM(require_react());
var ColorBlock = ({
  color,
  prefixCls,
  className,
  style,
  onClick
}) => {
  const colorBlockCls = `${prefixCls}-color-block`;
  return import_react4.default.createElement("div", {
    className: clsx(colorBlockCls, className),
    style,
    onClick
  }, import_react4.default.createElement("div", {
    className: `${colorBlockCls}-inner`,
    style: {
      background: color
    }
  }));
};
var ColorBlock_default = ColorBlock;

// node_modules/@rc-component/color-picker/es/components/Picker.js
var import_react9 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/hooks/useColorDrag.js
var import_react5 = __toESM(require_react());
function getPosition(e) {
  const obj = "touches" in e ? e.touches[0] : e;
  const scrollXOffset = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset;
  const scrollYOffset = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: obj.pageX - scrollXOffset,
    pageY: obj.pageY - scrollYOffset
  };
}
function useColorDrag(props) {
  const {
    targetRef,
    containerRef,
    direction,
    onDragChange,
    onDragChangeComplete,
    calculate,
    color,
    disabledDrag
  } = props;
  const [offsetValue, setOffsetValue] = (0, import_react5.useState)({
    x: 0,
    y: 0
  });
  const mouseMoveRef = (0, import_react5.useRef)(null);
  const mouseUpRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    setOffsetValue(calculate());
  }, [color]);
  (0, import_react5.useEffect)(() => () => {
    document.removeEventListener("mousemove", mouseMoveRef.current);
    document.removeEventListener("mouseup", mouseUpRef.current);
    document.removeEventListener("touchmove", mouseMoveRef.current);
    document.removeEventListener("touchend", mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
  }, []);
  const updateOffset = (e) => {
    const {
      pageX,
      pageY
    } = getPosition(e);
    const {
      x: rectX,
      y: rectY,
      width,
      height
    } = containerRef.current.getBoundingClientRect();
    const {
      width: targetWidth,
      height: targetHeight
    } = targetRef.current.getBoundingClientRect();
    const centerOffsetX = targetWidth / 2;
    const centerOffsetY = targetHeight / 2;
    const offsetX = Math.max(0, Math.min(pageX - rectX, width)) - centerOffsetX;
    const offsetY = Math.max(0, Math.min(pageY - rectY, height)) - centerOffsetY;
    const calcOffset2 = {
      x: offsetX,
      y: direction === "x" ? offsetValue.y : offsetY
    };
    if (targetWidth === 0 && targetHeight === 0 || targetWidth !== targetHeight) {
      return false;
    }
    onDragChange?.(calcOffset2);
  };
  const onDragMove = (e) => {
    e.preventDefault();
    updateOffset(e);
  };
  const onDragStop = (e) => {
    e.preventDefault();
    document.removeEventListener("mousemove", mouseMoveRef.current);
    document.removeEventListener("mouseup", mouseUpRef.current);
    document.removeEventListener("touchmove", mouseMoveRef.current);
    document.removeEventListener("touchend", mouseUpRef.current);
    mouseMoveRef.current = null;
    mouseUpRef.current = null;
    onDragChangeComplete?.();
  };
  const onDragStart = (e) => {
    document.removeEventListener("mousemove", mouseMoveRef.current);
    document.removeEventListener("mouseup", mouseUpRef.current);
    if (disabledDrag) {
      return;
    }
    updateOffset(e);
    document.addEventListener("mousemove", onDragMove);
    document.addEventListener("mouseup", onDragStop);
    document.addEventListener("touchmove", onDragMove);
    document.addEventListener("touchend", onDragStop);
    mouseMoveRef.current = onDragMove;
    mouseUpRef.current = onDragStop;
  };
  return [offsetValue, onDragStart];
}
var useColorDrag_default = useColorDrag;

// node_modules/@rc-component/color-picker/es/components/Handler.js
var import_react6 = __toESM(require_react());
var Handler = ({
  size = "default",
  color,
  prefixCls
}) => {
  return import_react6.default.createElement("div", {
    className: clsx(`${prefixCls}-handler`, {
      [`${prefixCls}-handler-sm`]: size === "small"
    }),
    style: {
      backgroundColor: color
    }
  });
};
var Handler_default = Handler;

// node_modules/@rc-component/color-picker/es/components/Palette.js
var import_react7 = __toESM(require_react());
var Palette = ({
  children,
  style,
  prefixCls
}) => {
  return import_react7.default.createElement("div", {
    className: `${prefixCls}-palette`,
    style: {
      position: "relative",
      ...style
    }
  }, children);
};
var Palette_default = Palette;

// node_modules/@rc-component/color-picker/es/components/Transform.js
var import_react8 = __toESM(require_react());
var Transform = (0, import_react8.forwardRef)((props, ref) => {
  const {
    children,
    x,
    y
  } = props;
  return import_react8.default.createElement("div", {
    ref,
    style: {
      position: "absolute",
      left: `${x}%`,
      top: `${y}%`,
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, children);
});
var Transform_default = Transform;

// node_modules/@rc-component/color-picker/es/components/Picker.js
var Picker = ({
  color,
  onChange,
  prefixCls,
  onChangeComplete,
  disabled
}) => {
  const pickerRef = (0, import_react9.useRef)();
  const transformRef = (0, import_react9.useRef)();
  const colorRef = (0, import_react9.useRef)(color);
  const onDragChange = useEvent_default((offsetValue) => {
    const calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: pickerRef,
      color
    });
    colorRef.current = calcColor;
    onChange(calcColor);
  });
  const [offset, dragStartHandle] = useColorDrag_default({
    color,
    containerRef: pickerRef,
    targetRef: transformRef,
    calculate: () => calcOffset(color),
    onDragChange,
    onDragChangeComplete: () => onChangeComplete?.(colorRef.current),
    disabledDrag: disabled
  });
  return import_react9.default.createElement("div", {
    ref: pickerRef,
    className: `${prefixCls}-select`,
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, import_react9.default.createElement(Palette_default, {
    prefixCls
  }, import_react9.default.createElement(Transform_default, {
    x: offset.x,
    y: offset.y,
    ref: transformRef
  }, import_react9.default.createElement(Handler_default, {
    color: color.toRgbString(),
    prefixCls
  })), import_react9.default.createElement("div", {
    className: `${prefixCls}-saturation`,
    style: {
      backgroundColor: `hsl(${color.toHsb().h},100%, 50%)`,
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
};
var Picker_default = Picker;

// node_modules/@rc-component/color-picker/es/hooks/useColorState.js
var import_react10 = __toESM(require_react());
var useColorState = (defaultValue, value) => {
  const [mergedValue, setValue] = useControlledState(defaultValue, value);
  const color = (0, import_react10.useMemo)(() => generateColor(mergedValue), [mergedValue]);
  return [color, setValue];
};
var useColorState_default = useColorState;

// node_modules/@rc-component/color-picker/es/hooks/useComponent.js
var React13 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/components/Slider.js
var import_react12 = __toESM(require_react());

// node_modules/@rc-component/color-picker/es/components/Gradient.js
var import_react11 = __toESM(require_react());
var Gradient = ({
  colors,
  children,
  direction = "to right",
  type,
  prefixCls
}) => {
  const gradientColors = (0, import_react11.useMemo)(() => colors.map((color, idx) => {
    let result = generateColor(color);
    if (type === "alpha" && idx === colors.length - 1) {
      result = new Color(result.setA(1));
    }
    return result.toRgbString();
  }).join(","), [colors, type]);
  return import_react11.default.createElement("div", {
    className: `${prefixCls}-gradient`,
    style: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(${direction}, ${gradientColors})`
    }
  }, children);
};
var Gradient_default = Gradient;

// node_modules/@rc-component/color-picker/es/components/Slider.js
var Slider = (props) => {
  const {
    prefixCls,
    colors,
    disabled,
    onChange,
    onChangeComplete,
    color,
    type
  } = props;
  const sliderRef = (0, import_react12.useRef)(null);
  const transformRef = (0, import_react12.useRef)(null);
  const colorRef = (0, import_react12.useRef)(color);
  const getValue = (c) => {
    return type === "hue" ? c.getHue() : c.a * 100;
  };
  const onDragChange = useEvent_default((offsetValue) => {
    const calcColor = calculateColor({
      offset: offsetValue,
      targetRef: transformRef,
      containerRef: sliderRef,
      color,
      type
    });
    colorRef.current = calcColor;
    onChange(getValue(calcColor));
  });
  const [offset, dragStartHandle] = useColorDrag_default({
    color,
    targetRef: transformRef,
    containerRef: sliderRef,
    calculate: () => calcOffset(color, type),
    onDragChange,
    onDragChangeComplete() {
      onChangeComplete(getValue(colorRef.current));
    },
    direction: "x",
    disabledDrag: disabled
  });
  const handleColor = import_react12.default.useMemo(() => {
    if (type === "hue") {
      const hsb = color.toHsb();
      hsb.s = 1;
      hsb.b = 1;
      hsb.a = 1;
      const lightColor = new Color(hsb);
      return lightColor;
    }
    return color;
  }, [color, type]);
  const gradientList = import_react12.default.useMemo(() => colors.map((info) => `${info.color} ${info.percent}%`), [colors]);
  return import_react12.default.createElement("div", {
    ref: sliderRef,
    className: clsx(`${prefixCls}-slider`, `${prefixCls}-slider-${type}`),
    onMouseDown: dragStartHandle,
    onTouchStart: dragStartHandle
  }, import_react12.default.createElement(Palette_default, {
    prefixCls
  }, import_react12.default.createElement(Transform_default, {
    x: offset.x,
    y: offset.y,
    ref: transformRef
  }, import_react12.default.createElement(Handler_default, {
    size: "small",
    color: handleColor.toHexString(),
    prefixCls
  })), import_react12.default.createElement(Gradient_default, {
    colors: gradientList,
    type,
    prefixCls
  })));
};
var Slider_default = Slider;

// node_modules/@rc-component/color-picker/es/hooks/useComponent.js
function useComponent(components) {
  return React13.useMemo(() => {
    const {
      slider
    } = components || {};
    return [slider || Slider_default];
  }, [components]);
}

// node_modules/@rc-component/color-picker/es/ColorPicker.js
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var HUE_COLORS = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}];
var ColorPicker = (0, import_react13.forwardRef)((props, ref) => {
  const {
    value,
    defaultValue,
    prefixCls = ColorPickerPrefixCls,
    onChange,
    onChangeComplete,
    className,
    style,
    panelRender,
    disabledAlpha = false,
    disabled = false,
    components
  } = props;
  const [Slider2] = useComponent(components);
  const [colorValue, setColorValue] = useColorState_default(defaultValue || defaultColor, value);
  const alphaColor = (0, import_react13.useMemo)(() => colorValue.setA(1).toRgbString(), [colorValue]);
  const handleChange = (data, type) => {
    if (!value) {
      setColorValue(data);
    }
    onChange?.(data, type);
  };
  const getHueColor = (hue) => new Color(colorValue.setHue(hue));
  const getAlphaColor = (alpha) => new Color(colorValue.setA(alpha / 100));
  const onHueChange = (hue) => {
    handleChange(getHueColor(hue), {
      type: "hue",
      value: hue
    });
  };
  const onAlphaChange = (alpha) => {
    handleChange(getAlphaColor(alpha), {
      type: "alpha",
      value: alpha
    });
  };
  const onHueChangeComplete = (hue) => {
    if (onChangeComplete) {
      onChangeComplete(getHueColor(hue));
    }
  };
  const onAlphaChangeComplete = (alpha) => {
    if (onChangeComplete) {
      onChangeComplete(getAlphaColor(alpha));
    }
  };
  const mergeCls = clsx(`${prefixCls}-panel`, className, {
    [`${prefixCls}-panel-disabled`]: disabled
  });
  const sharedSliderProps = {
    prefixCls,
    disabled,
    color: colorValue
  };
  const defaultPanel = import_react13.default.createElement(import_react13.default.Fragment, null, import_react13.default.createElement(Picker_default, _extends2({
    onChange: handleChange
  }, sharedSliderProps, {
    onChangeComplete
  })), import_react13.default.createElement("div", {
    className: `${prefixCls}-slider-container`
  }, import_react13.default.createElement("div", {
    className: clsx(`${prefixCls}-slider-group`, {
      [`${prefixCls}-slider-group-disabled-alpha`]: disabledAlpha
    })
  }, import_react13.default.createElement(Slider2, _extends2({}, sharedSliderProps, {
    type: "hue",
    colors: HUE_COLORS,
    min: 0,
    max: 359,
    value: colorValue.getHue(),
    onChange: onHueChange,
    onChangeComplete: onHueChangeComplete
  })), !disabledAlpha && import_react13.default.createElement(Slider2, _extends2({}, sharedSliderProps, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: alphaColor
    }],
    min: 0,
    max: 100,
    value: colorValue.a * 100,
    onChange: onAlphaChange,
    onChangeComplete: onAlphaChangeComplete
  }))), import_react13.default.createElement(ColorBlock_default, {
    color: colorValue.toRgbString(),
    prefixCls
  })));
  return import_react13.default.createElement("div", {
    className: mergeCls,
    style,
    ref
  }, typeof panelRender === "function" ? panelRender(defaultPanel) : defaultPanel);
});
if (true) {
  ColorPicker.displayName = "ColorPicker";
}
var ColorPicker_default = ColorPicker;

// node_modules/@rc-component/color-picker/es/index.js
var es_default4 = ColorPicker_default;

// node_modules/antd/es/color-picker/color.js
var toHexFormat = (value, alpha) => value?.replace(/[^0-9a-f]/gi, "").slice(0, alpha ? 8 : 6) || "";
var getHex = (value, alpha) => value ? toHexFormat(value, alpha) : "";
var AggregationColor = (function() {
  function AggregationColor2(color) {
    _classCallCheck(this, AggregationColor2);
    this.cleared = false;
    if (color instanceof AggregationColor2) {
      this.metaColor = color.metaColor.clone();
      this.colors = color.colors?.map((info) => ({
        color: new AggregationColor2(info.color),
        percent: info.percent
      }));
      this.cleared = color.cleared;
      return;
    }
    const isArray = Array.isArray(color);
    if (isArray && color.length) {
      this.colors = color.map(({
        color: c,
        percent
      }) => ({
        color: new AggregationColor2(c),
        percent
      }));
      this.metaColor = new Color(this.colors[0].color.metaColor);
    } else {
      this.metaColor = new Color(isArray ? "" : color);
    }
    if (!color || isArray && !this.colors) {
      this.metaColor = this.metaColor.setA(0);
      this.cleared = true;
    }
  }
  return _createClass(AggregationColor2, [{
    key: "toHsb",
    value: function toHsb() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function toHsbString() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function toHex() {
      return getHex(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function toHexString() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function toRgbString() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function isGradient() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function getColors() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function toCssString() {
      const {
        colors
      } = this;
      if (colors) {
        const colorsStr = colors.map((c) => `${c.color.toRgbString()} ${c.percent}%`).join(", ");
        return `linear-gradient(90deg, ${colorsStr})`;
      }
      return this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function equals(color) {
      if (!color || this.isGradient() !== color.isGradient()) {
        return false;
      }
      if (!this.isGradient()) {
        return this.toHexString() === color.toHexString();
      }
      return this.colors.length === color.colors.length && this.colors.every((c, i) => {
        const target = color.colors[i];
        return c.percent === target.percent && c.color.equals(target.color);
      });
    }
  }]);
})();

// node_modules/antd/es/color-picker/util.js
var generateColor2 = (color) => {
  if (color instanceof AggregationColor) {
    return color;
  }
  return new AggregationColor(color);
};
var getRoundNumber2 = (value) => Math.round(Number(value || 0));
var getColorAlpha = (color) => getRoundNumber2(color.toHsb().a * 100);
var genAlphaColor = (color, alpha) => {
  const rgba = color.toRgb();
  if (!rgba.r && !rgba.g && !rgba.b) {
    const hsba = color.toHsb();
    hsba.a = alpha || 1;
    return generateColor2(hsba);
  }
  rgba.a = alpha || 1;
  return generateColor2(rgba);
};
var getGradientPercentColor = (colors, percent) => {
  const filledColors = [{
    percent: 0,
    color: colors[0].color
  }].concat(_toConsumableArray(colors), [{
    percent: 100,
    color: colors[colors.length - 1].color
  }]);
  for (let i = 0; i < filledColors.length - 1; i += 1) {
    const startPtg = filledColors[i].percent;
    const endPtg = filledColors[i + 1].percent;
    const startColor = filledColors[i].color;
    const endColor = filledColors[i + 1].color;
    if (startPtg <= percent && percent <= endPtg) {
      const dist = endPtg - startPtg;
      if (dist === 0) {
        return startColor;
      }
      const ratio = (percent - startPtg) / dist * 100;
      const startRcColor = new Color(startColor);
      const endRcColor = new Color(endColor);
      return startRcColor.mix(endRcColor, ratio).toRgbString();
    }
  }
  return "";
};

// node_modules/antd/es/tooltip/util.js
var parseColor = (rootPrefixCls, prefixCls, color) => {
  const isInternalColor = isPresetColor(color);
  const [varName] = genCssVar(rootPrefixCls, "tooltip");
  const className = clsx({
    [`${prefixCls}-${color}`]: color && isInternalColor
  });
  const overlayStyle = {};
  const arrowStyle = {};
  const rgb = generateColor2(color).toRgb();
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  const textColor = luminance < 0.5 ? "#FFF" : "#000";
  if (color && !isInternalColor) {
    overlayStyle.background = color;
    overlayStyle[varName("overlay-color")] = textColor;
    arrowStyle[varName("arrow-background-color")] = color;
  }
  return {
    className,
    overlayStyle,
    arrowStyle
  };
};

// node_modules/antd/es/tooltip/PurePanel.js
var PurePanel = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    placement = "top",
    title,
    color,
    overlayInnerStyle,
    classNames,
    styles
  } = props;
  const {
    getPrefixCls
  } = React15.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const rootCls = useCSSVarCls_default(prefixCls);
  const [hashId, cssVarCls] = style_default(prefixCls, rootCls);
  const colorInfo = parseColor(rootPrefixCls, prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const innerStyles = React15.useMemo(() => {
    const mergedStyle = {
      ...overlayInnerStyle,
      ...colorInfo.overlayStyle
    };
    return {
      container: mergedStyle
    };
  }, [overlayInnerStyle, colorInfo.overlayStyle]);
  const mergedProps = {
    ...props,
    placement
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([classNames], [innerStyles, styles], {
    props: mergedProps
  });
  const rootClassName = clsx(rootCls, hashId, cssVarCls, prefixCls, `${prefixCls}-pure`, `${prefixCls}-placement-${placement}`, className, colorInfo.className);
  return React15.createElement("div", {
    className: rootClassName,
    style: arrowContentStyle
  }, React15.createElement("div", {
    className: `${prefixCls}-arrow`
  }), React15.createElement(Popup_default, {
    ...props,
    className: hashId,
    prefixCls,
    classNames: mergedClassNames,
    styles: mergedStyles
  }, title));
};
var PurePanel_default = PurePanel;

// node_modules/antd/es/tooltip/index.js
var InternalTooltip = React16.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    openClassName,
    getTooltipContainer,
    color,
    children,
    afterOpenChange,
    arrow: tooltipArrow,
    destroyTooltipOnHide,
    destroyOnHidden,
    title,
    overlay,
    trigger,
    builtinPlacements,
    autoAdjustOverflow = true,
    motion,
    getPopupContainer,
    placement = "top",
    mouseEnterDelay = 0.1,
    mouseLeaveDelay = 0.1,
    rootClassName,
    styles,
    classNames,
    onOpenChange,
    // Legacy
    overlayInnerStyle,
    overlayStyle,
    overlayClassName,
    ...restProps
  } = props;
  const [, token] = useToken();
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles,
    arrow: contextArrow,
    trigger: contextTrigger
  } = useComponentConfig("tooltip");
  const mergedArrow = useMergedArrow_default(tooltipArrow, contextArrow);
  const mergedShowArrow = mergedArrow.show;
  const mergedTrigger = trigger || contextTrigger || "hover";
  const warning = devUseWarning("Tooltip");
  const tooltipRef = React16.useRef(null);
  const forceAlign = () => {
    tooltipRef.current?.forceAlign();
  };
  React16.useImperativeHandle(ref, () => ({
    forceAlign,
    nativeElement: tooltipRef.current?.nativeElement,
    popupElement: tooltipRef.current?.popupElement
  }));
  if (true) {
    [["overlayStyle", "styles.root"], ["overlayInnerStyle", "styles.container"], ["overlayClassName", "classNames.root"], ["destroyTooltipOnHide", "destroyOnHidden"]].forEach(([deprecatedName, newName]) => {
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
    true ? warning(!destroyTooltipOnHide || typeof destroyTooltipOnHide === "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly.") : void 0;
  }
  const [open, setOpen] = useControlledState(props.defaultOpen ?? false, props.open);
  const noTitle = !title && !overlay && title !== 0;
  const onInternalOpenChange = (vis) => {
    setOpen(noTitle ? false : vis);
    if (!noTitle && onOpenChange) {
      onOpenChange(vis);
    }
  };
  const tooltipPlacements = React16.useMemo(() => {
    return builtinPlacements || getPlacements({
      arrowPointAtCenter: mergedArrow?.pointAtCenter ?? false,
      autoAdjustOverflow,
      arrowWidth: mergedShowArrow ? token.sizePopupArrow : 0,
      borderRadius: token.borderRadius,
      offset: token.marginXXS,
      visibleFirst: true
    });
  }, [mergedArrow, builtinPlacements, token, mergedShowArrow, autoAdjustOverflow]);
  const memoOverlay = React16.useMemo(() => {
    if (title === 0) {
      return title;
    }
    return overlay || title || "";
  }, [overlay, title]);
  const memoOverlayWrapper = React16.createElement(ContextIsolator_default, {
    space: true,
    form: true
  }, typeof memoOverlay === "function" ? memoOverlay() : memoOverlay);
  const mergedProps = {
    ...props,
    trigger: mergedTrigger,
    color,
    placement,
    builtinPlacements,
    openClassName,
    arrow: tooltipArrow,
    autoAdjustOverflow,
    getPopupContainer,
    children,
    destroyTooltipOnHide,
    destroyOnHidden
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const prefixCls = getPrefixCls("tooltip", customizePrefixCls);
  const rootPrefixCls = getPrefixCls();
  const injectFromPopover = props["data-popover-inject"];
  let tempOpen = open;
  if (!("open" in props) && noTitle) {
    tempOpen = false;
  }
  const child = React16.isValidElement(children) && !isFragment(children) ? children : React16.createElement("span", null, children);
  const childProps = child.props;
  const childCls = !childProps.className || typeof childProps.className === "string" ? clsx(childProps.className, openClassName || `${prefixCls}-open`) : childProps.className;
  const rootCls = useCSSVarCls_default(prefixCls);
  const [hashId, cssVarCls] = style_default(prefixCls, rootCls, !injectFromPopover);
  const colorInfo = parseColor(rootPrefixCls, prefixCls, color);
  const arrowContentStyle = colorInfo.arrowStyle;
  const themeCls = clsx(rootCls, hashId, cssVarCls);
  const rootClassNames = clsx(overlayClassName, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, colorInfo.className, rootClassName, themeCls, contextClassName, mergedClassNames.root);
  const [zIndex, contextZIndex] = useZIndex("Tooltip", restProps.zIndex);
  const containerStyle = {
    ...mergedStyles.container,
    ...overlayInnerStyle,
    ...colorInfo.overlayStyle
  };
  const content = React16.createElement(es_default3, {
    unique: true,
    ...restProps,
    trigger: mergedTrigger,
    zIndex,
    showArrow: mergedShowArrow,
    placement,
    mouseEnterDelay,
    mouseLeaveDelay,
    prefixCls,
    classNames: {
      root: rootClassNames,
      container: mergedClassNames.container,
      arrow: mergedClassNames.arrow,
      uniqueContainer: clsx(themeCls, mergedClassNames.container)
    },
    styles: {
      root: {
        ...arrowContentStyle,
        ...mergedStyles.root,
        ...contextStyle,
        ...overlayStyle
      },
      container: containerStyle,
      uniqueContainer: containerStyle,
      arrow: mergedStyles.arrow
    },
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: tooltipRef,
    builtinPlacements: tooltipPlacements,
    overlay: memoOverlayWrapper,
    visible: tempOpen,
    onVisibleChange: onInternalOpenChange,
    afterVisibleChange: afterOpenChange,
    arrowContent: React16.createElement("span", {
      className: `${prefixCls}-arrow-content`
    }),
    motion: {
      motionName: getTransitionName(rootPrefixCls, "zoom-big-fast", typeof motion?.motionName === "string" ? motion?.motionName : void 0),
      motionDeadline: 1e3
    },
    destroyOnHidden: destroyOnHidden ?? !!destroyTooltipOnHide
  }, tempOpen ? cloneElement(child, {
    className: childCls
  }) : child);
  return React16.createElement(zindexContext_default.Provider, {
    value: contextZIndex
  }, content);
});
var Tooltip2 = InternalTooltip;
if (true) {
  Tooltip2.displayName = "Tooltip";
}
Tooltip2._InternalPanelDoNotUseOrYouWillBeFired = PurePanel_default;
Tooltip2.UniqueProvider = UniqueProvider_default;
var tooltip_default = Tooltip2;

// node_modules/antd/es/typography/Typography.js
var React17 = __toESM(require_react());

// node_modules/antd/es/typography/style/mixins.js
var getTitleStyle = (fontSize, lineHeight, color, token) => {
  const {
    titleMarginBottom,
    fontWeightStrong
  } = token;
  return {
    marginBottom: titleMarginBottom,
    color,
    fontWeight: fontWeightStrong,
    fontSize,
    lineHeight
  };
};
var getTitleStyles = (token) => {
  const headings = [1, 2, 3, 4, 5];
  const styles = {};
  headings.forEach((headingLevel) => {
    styles[`
      h${headingLevel}&,
      div&-h${headingLevel},
      div&-h${headingLevel} > textarea,
      h${headingLevel}
    `] = getTitleStyle(token[`fontSizeHeading${headingLevel}`], token[`lineHeightHeading${headingLevel}`], token.colorTextHeading, token);
  });
  return styles;
};
var getLinkStyles = (token) => {
  const {
    componentCls
  } = token;
  const linkCls = `${componentCls}-link`;
  return {
    [`&${linkCls}`]: {
      ...operationUnit(token),
      userSelect: "text",
      [`&[disabled], &${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        "&:active, &:hover": {
          color: token.colorTextDisabled
        },
        "&:active": {
          pointerEvents: "none"
        }
      }
    }
  };
};
var getResetStyles = (token) => ({
  code: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.2em 0.1em",
    fontSize: "85%",
    fontFamily: token.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3
  },
  kbd: {
    margin: "0 0.2em",
    paddingInline: "0.4em",
    paddingBlock: "0.15em 0.1em",
    fontSize: "90%",
    fontFamily: token.fontFamilyCode,
    background: "rgba(150, 150, 150, 0.06)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderBottomWidth: 2,
    borderRadius: 3
  },
  mark: {
    padding: 0,
    // FIXME hardcode in v4
    backgroundColor: gold[2]
  },
  "u, ins": {
    textDecoration: "underline",
    textDecorationSkipInk: "auto"
  },
  "s, del": {
    textDecoration: "line-through"
  },
  strong: {
    fontWeight: token.fontWeightStrong
  },
  // list
  "ul, ol": {
    marginInline: 0,
    marginBlock: "0 1em",
    padding: 0,
    li: {
      marginInline: "20px 0",
      marginBlock: 0,
      paddingInline: "4px 0",
      paddingBlock: 0
    }
  },
  ul: {
    listStyleType: "circle",
    ul: {
      listStyleType: "disc"
    }
  },
  ol: {
    listStyleType: "decimal"
  },
  // pre & block
  "pre, blockquote": {
    margin: "1em 0"
  },
  pre: {
    padding: "0.4em 0.6em",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    background: "rgba(150, 150, 150, 0.1)",
    border: "1px solid rgba(100, 100, 100, 0.2)",
    borderRadius: 3,
    fontFamily: token.fontFamilyCode,
    // Compatible for marked
    code: {
      display: "inline",
      margin: 0,
      padding: 0,
      fontSize: "inherit",
      fontFamily: "inherit",
      background: "transparent",
      border: 0
    }
  },
  blockquote: {
    paddingInline: "0.6em 0",
    paddingBlock: 0,
    borderInlineStart: "4px solid rgba(100, 100, 100, 0.2)",
    opacity: 0.85
  }
});
var getEditableStyles = (token) => {
  const {
    componentCls,
    paddingSM
  } = token;
  const inputShift = paddingSM;
  return {
    "&-edit-content": {
      position: "relative",
      "div&": {
        insetInlineStart: token.calc(token.paddingSM).mul(-1).equal(),
        insetBlockStart: token.calc(inputShift).div(-2).add(1).equal(),
        marginBottom: token.calc(inputShift).div(2).sub(2).equal()
      },
      [`${componentCls}-edit-content-confirm`]: {
        position: "absolute",
        insetInlineEnd: token.calc(token.marginXS).add(2).equal(),
        insetBlockEnd: token.marginXS,
        color: token.colorIcon,
        // default style
        fontWeight: "normal",
        fontSize: token.fontSize,
        fontStyle: "normal",
        pointerEvents: "none"
      },
      textarea: {
        margin: "0!important",
        // Fix Editable Textarea flash in Firefox
        MozTransition: "none",
        height: "1em"
      }
    }
  };
};
var getCopyableStyles = (token) => ({
  [`${token.componentCls}-copy-success`]: {
    [`
    &,
    &:hover,
    &:focus`]: {
      color: token.colorSuccess
    }
  },
  [`${token.componentCls}-copy-icon-only`]: {
    marginInlineStart: 0
  }
});
var getEllipsisStyles = () => ({
  [`
  a&-ellipsis,
  span&-ellipsis
  `]: {
    display: "inline-block",
    maxWidth: "100%"
  },
  "&-ellipsis-single-line": {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    // https://blog.csdn.net/iefreer/article/details/50421025
    "a&, span&": {
      verticalAlign: "bottom"
    },
    "> code": {
      paddingBlock: 0,
      maxWidth: "calc(100% - 1.2em)",
      display: "inline-block",
      overflow: "hidden",
      textOverflow: "ellipsis",
      verticalAlign: "bottom",
      // https://github.com/ant-design/ant-design/issues/45953
      boxSizing: "content-box"
    }
  },
  "&-ellipsis-multiple-line": {
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical"
  }
});

// node_modules/antd/es/typography/style/index.js
var genTypographyStyle = (token) => {
  const {
    componentCls,
    titleMarginTop
  } = token;
  return {
    [componentCls]: {
      color: token.colorText,
      wordBreak: "break-word",
      lineHeight: token.lineHeight,
      [`&${componentCls}-secondary, &${componentCls}-link${componentCls}-secondary`]: {
        color: token.colorTextDescription
      },
      [`&${componentCls}-success, &${componentCls}-link${componentCls}-success`]: {
        color: token.colorSuccessText
      },
      [`&${componentCls}-warning, &${componentCls}-link${componentCls}-warning`]: {
        color: token.colorWarningText
      },
      [`&${componentCls}-danger, &${componentCls}-link${componentCls}-danger`]: {
        color: token.colorErrorText,
        [`&${componentCls}-link:active, &${componentCls}-link:focus`]: {
          color: token.colorErrorTextActive
        },
        [`&${componentCls}-link:hover`]: {
          color: token.colorErrorTextHover
        }
      },
      [`&${componentCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed",
        userSelect: "none"
      },
      [`
        div&,
        p
      `]: {
        marginBottom: "1em"
      },
      ...getTitleStyles(token),
      [`
      & + h1${componentCls},
      & + h2${componentCls},
      & + h3${componentCls},
      & + h4${componentCls},
      & + h5${componentCls}
      `]: {
        marginTop: titleMarginTop
      },
      [`
      div,
      ul,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5`]: {
        [`
        + h1,
        + h2,
        + h3,
        + h4,
        + h5
        `]: {
          marginTop: titleMarginTop
        }
      },
      ...getResetStyles(token),
      ...getLinkStyles(token),
      // Operation
      [`
        ${componentCls}-expand,
        ${componentCls}-collapse,
        ${componentCls}-edit,
        ${componentCls}-copy
      `]: {
        ...operationUnit(token),
        marginInlineStart: token.marginXXS
      },
      ...getEditableStyles(token),
      ...getCopyableStyles(token),
      ...getEllipsisStyles(),
      "&-rtl": {
        direction: "rtl"
      }
    }
  };
};
var prepareComponentToken2 = () => ({
  titleMarginTop: "1.2em",
  titleMarginBottom: "0.5em"
});
var style_default2 = genStyleHooks("Typography", genTypographyStyle, prepareComponentToken2);

// node_modules/antd/es/typography/Typography.js
var Typography = React17.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    component: Component = "article",
    className,
    rootClassName,
    children,
    direction: typographyDirection,
    style,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    direction: contextDirection,
    className: contextClassName,
    style: contextStyle
  } = useComponentConfig("typography");
  const direction = typographyDirection ?? contextDirection;
  const prefixCls = getPrefixCls("typography", customizePrefixCls);
  const [hashId, cssVarCls] = style_default2(prefixCls);
  const componentClassName = clsx(prefixCls, contextClassName, {
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId, cssVarCls);
  const mergedStyle = {
    ...contextStyle,
    ...style
  };
  return (
    // @ts-expect-error: Expression produces a union type that is too complex to represent.
    React17.createElement(Component, {
      className: componentClassName,
      style: mergedStyle,
      ref,
      ...restProps
    }, children)
  );
});
if (true) {
  Typography.displayName = "Typography";
}
var Typography_default = Typography;

// node_modules/antd/es/typography/Base/index.js
var React32 = __toESM(require_react());

// node_modules/@rc-component/util/es/Dom/styleChecker.js
var isStyleNameSupport = (styleName) => {
  if (canUseDom() && window.document.documentElement) {
    const styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    const {
      documentElement
    } = window.document;
    return styleNameList.some((name) => name in documentElement.style);
  }
  return false;
};
var isStyleValueSupport = (styleName, value) => {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  const ele = document.createElement("div");
  const origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== void 0) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}

// node_modules/antd/es/_util/styleChecker.js
var canUseDocElement = () => canUseDom() && window.document.documentElement;

// node_modules/antd/es/typography/Editable.js
var React26 = __toESM(require_react());

// node_modules/antd/es/input/TextArea.js
var React25 = __toESM(require_react());
var import_react20 = __toESM(require_react());

// node_modules/@rc-component/input/es/BaseInput.js
var import_react14 = __toESM(require_react());

// node_modules/@rc-component/input/es/utils/commonUtils.js
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
function cloneEvent(event, target, value) {
  const currentTarget = target.cloneNode(true);
  const newEvent = Object.create(event, {
    target: {
      value: currentTarget
    },
    currentTarget: {
      value: currentTarget
    }
  });
  currentTarget.value = value;
  if (typeof target.selectionStart === "number" && typeof target.selectionEnd === "number") {
    currentTarget.selectionStart = target.selectionStart;
    currentTarget.selectionEnd = target.selectionEnd;
  }
  currentTarget.setSelectionRange = (...args) => {
    target.setSelectionRange(...args);
  };
  return newEvent;
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  let event = e;
  if (e.type === "click") {
    event = cloneEvent(e, target, "");
    onChange(event);
    return;
  }
  if (target.type !== "file" && targetValue !== void 0) {
    event = cloneEvent(e, target, targetValue);
    onChange(event);
    return;
  }
  onChange(event);
}

// node_modules/@rc-component/input/es/BaseInput.js
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
var BaseInput = import_react14.default.forwardRef((props, ref) => {
  const {
    inputElement: inputEl,
    children,
    prefixCls,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    className,
    style,
    disabled,
    readOnly,
    focused,
    triggerFocus: triggerFocus2,
    allowClear,
    value,
    handleReset,
    hidden,
    classes,
    classNames,
    dataAttrs,
    styles,
    components,
    onClear
  } = props;
  const inputElement = children ?? inputEl;
  const AffixWrapperComponent = components?.affixWrapper || "span";
  const GroupWrapperComponent = components?.groupWrapper || "span";
  const WrapperComponent = components?.wrapper || "span";
  const GroupAddonComponent = components?.groupAddon || "span";
  const containerRef = (0, import_react14.useRef)(null);
  const onInputClick = (e) => {
    if (containerRef.current?.contains(e.target)) {
      triggerFocus2?.();
    }
  };
  const hasAffix = hasPrefixSuffix(props);
  let element = (0, import_react14.cloneElement)(inputElement, {
    value,
    className: clsx(inputElement.props?.className, !hasAffix && classNames?.variant) || null
  });
  const groupRef = (0, import_react14.useRef)(null);
  import_react14.default.useImperativeHandle(ref, () => ({
    nativeElement: groupRef.current || containerRef.current
  }));
  if (hasAffix) {
    let clearIcon = null;
    if (allowClear) {
      const needClear = !disabled && !readOnly && value;
      const clearIconCls = `${prefixCls}-clear-icon`;
      const iconNode = typeof allowClear === "object" && allowClear?.clearIcon ? allowClear.clearIcon : "✖";
      clearIcon = import_react14.default.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: (event) => {
          handleReset?.(event);
          onClear?.();
        },
        onMouseDown: (e) => e.preventDefault(),
        className: clsx(clearIconCls, {
          [`${clearIconCls}-hidden`]: !needClear,
          [`${clearIconCls}-has-suffix`]: !!suffix
        })
      }, iconNode);
    }
    const affixWrapperPrefixCls = `${prefixCls}-affix-wrapper`;
    const affixWrapperCls = clsx(affixWrapperPrefixCls, {
      [`${prefixCls}-disabled`]: disabled,
      [`${affixWrapperPrefixCls}-disabled`]: disabled,
      // Not used, but keep it
      [`${affixWrapperPrefixCls}-focused`]: focused,
      // Not used, but keep it
      [`${affixWrapperPrefixCls}-readonly`]: readOnly,
      [`${affixWrapperPrefixCls}-input-with-clear-btn`]: suffix && allowClear && value
    }, classes?.affixWrapper, classNames?.affixWrapper, classNames?.variant);
    const suffixNode = (suffix || allowClear) && import_react14.default.createElement("span", {
      className: clsx(`${prefixCls}-suffix`, classNames?.suffix),
      style: styles?.suffix
    }, clearIcon, suffix);
    element = import_react14.default.createElement(AffixWrapperComponent, _extends3({
      className: affixWrapperCls,
      style: styles?.affixWrapper,
      onClick: onInputClick
    }, dataAttrs?.affixWrapper, {
      ref: containerRef
    }), prefix && import_react14.default.createElement("span", {
      className: clsx(`${prefixCls}-prefix`, classNames?.prefix),
      style: styles?.prefix
    }, prefix), element, suffixNode);
  }
  if (hasAddon(props)) {
    const wrapperCls = `${prefixCls}-group`;
    const addonCls = `${wrapperCls}-addon`;
    const groupWrapperCls = `${wrapperCls}-wrapper`;
    const mergedWrapperClassName = clsx(`${prefixCls}-wrapper`, wrapperCls, classes?.wrapper, classNames?.wrapper);
    const mergedGroupClassName = clsx(groupWrapperCls, {
      [`${groupWrapperCls}-disabled`]: disabled
    }, classes?.group, classNames?.groupWrapper);
    element = import_react14.default.createElement(GroupWrapperComponent, {
      className: mergedGroupClassName,
      ref: groupRef
    }, import_react14.default.createElement(WrapperComponent, {
      className: mergedWrapperClassName
    }, addonBefore && import_react14.default.createElement(GroupAddonComponent, {
      className: addonCls
    }, addonBefore), element, addonAfter && import_react14.default.createElement(GroupAddonComponent, {
      className: addonCls
    }, addonAfter)));
  }
  return import_react14.default.cloneElement(element, {
    className: clsx(element.props?.className, className) || null,
    style: {
      ...element.props?.style,
      ...style
    },
    hidden
  });
});
var BaseInput_default = BaseInput;

// node_modules/@rc-component/input/es/Input.js
var import_react15 = __toESM(require_react());

// node_modules/@rc-component/input/es/hooks/useCount.js
var React19 = __toESM(require_react());
function useCount(count, showCount) {
  return React19.useMemo(() => {
    let mergedConfig = {};
    if (showCount) {
      mergedConfig.show = typeof showCount === "object" && showCount.formatter ? showCount.formatter : !!showCount;
    }
    mergedConfig = {
      ...mergedConfig,
      ...count
    };
    const {
      show,
      ...rest
    } = mergedConfig;
    return {
      ...rest,
      show: !!show,
      showFormatter: typeof show === "function" ? show : void 0,
      strategy: rest.strategy || ((value) => value.length)
    };
  }, [count, showCount]);
}

// node_modules/@rc-component/input/es/Input.js
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
var Input = (0, import_react15.forwardRef)((props, ref) => {
  const {
    autoComplete,
    onChange,
    onFocus,
    onBlur,
    onPressEnter,
    onKeyDown,
    onKeyUp,
    prefixCls = "rc-input",
    disabled,
    htmlSize,
    className,
    maxLength,
    suffix,
    showCount,
    count,
    type = "text",
    classes,
    classNames,
    styles,
    onCompositionStart,
    onCompositionEnd,
    ...rest
  } = props;
  const [focused, setFocused] = (0, import_react15.useState)(false);
  const compositionRef = (0, import_react15.useRef)(false);
  const keyLockRef = (0, import_react15.useRef)(false);
  const inputRef = (0, import_react15.useRef)(null);
  const holderRef = (0, import_react15.useRef)(null);
  const focus = (option) => {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };
  const [value, setValue] = useControlledState(props.defaultValue, props.value);
  const formatValue = value === void 0 || value === null ? "" : String(value);
  const [selection, setSelection] = (0, import_react15.useState)(null);
  const countConfig = useCount(count, showCount);
  const mergedMax = countConfig.max || maxLength;
  const valueLength = countConfig.strategy(formatValue);
  const isOutOfRange = !!mergedMax && valueLength > mergedMax;
  (0, import_react15.useImperativeHandle)(ref, () => ({
    focus,
    blur: () => {
      inputRef.current?.blur();
    },
    setSelectionRange: (start, end, direction) => {
      inputRef.current?.setSelectionRange(start, end, direction);
    },
    select: () => {
      inputRef.current?.select();
    },
    input: inputRef.current,
    nativeElement: holderRef.current?.nativeElement || inputRef.current
  }));
  (0, import_react15.useEffect)(() => {
    if (keyLockRef.current) {
      keyLockRef.current = false;
    }
    setFocused((prev) => prev && disabled ? false : prev);
  }, [disabled]);
  const triggerChange = (e, currentValue, info) => {
    let cutValue = currentValue;
    if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max
      });
      if (currentValue !== cutValue) {
        setSelection([inputRef.current?.selectionStart || 0, inputRef.current?.selectionEnd || 0]);
      }
    } else if (info.source === "compositionEnd") {
      return;
    }
    setValue(cutValue);
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange, cutValue);
    }
  };
  (0, import_react15.useEffect)(() => {
    if (selection) {
      inputRef.current?.setSelectionRange(...selection);
    }
  }, [selection]);
  const onInternalChange = (e) => {
    triggerChange(e, e.target.value, {
      source: "change"
    });
  };
  const onInternalCompositionEnd = (e) => {
    compositionRef.current = false;
    triggerChange(e, e.currentTarget.value, {
      source: "compositionEnd"
    });
    onCompositionEnd?.(e);
  };
  const handleKeyDown = (e) => {
    if (onPressEnter && e.key === "Enter" && !keyLockRef.current && !e.nativeEvent.isComposing) {
      keyLockRef.current = true;
      onPressEnter(e);
    }
    onKeyDown?.(e);
  };
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      keyLockRef.current = false;
    }
    onKeyUp?.(e);
  };
  const handleFocus = (e) => {
    setFocused(true);
    onFocus?.(e);
  };
  const handleBlur = (e) => {
    if (keyLockRef.current) {
      keyLockRef.current = false;
    }
    setFocused(false);
    onBlur?.(e);
  };
  const handleReset = (e) => {
    setValue("");
    focus();
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };
  const outOfRangeCls = isOutOfRange && `${prefixCls}-out-of-range`;
  const getInputElement = () => {
    const otherProps = omit(props, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return import_react15.default.createElement("input", _extends4({
      autoComplete
    }, otherProps, {
      onChange: onInternalChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown: handleKeyDown,
      onKeyUp: handleKeyUp,
      className: clsx(prefixCls, {
        [`${prefixCls}-disabled`]: disabled
      }, classNames?.input),
      style: styles?.input,
      ref: inputRef,
      size: htmlSize,
      type,
      onCompositionStart: (e) => {
        compositionRef.current = true;
        onCompositionStart?.(e);
      },
      onCompositionEnd: onInternalCompositionEnd
    }));
  };
  const getSuffix = () => {
    const hasMaxLength = Number(mergedMax) > 0;
    if (suffix || countConfig.show) {
      const dataCount = countConfig.showFormatter ? countConfig.showFormatter({
        value: formatValue,
        count: valueLength,
        maxLength: mergedMax
      }) : `${valueLength}${hasMaxLength ? ` / ${mergedMax}` : ""}`;
      return import_react15.default.createElement(import_react15.default.Fragment, null, countConfig.show && import_react15.default.createElement("span", {
        className: clsx(`${prefixCls}-show-count-suffix`, {
          [`${prefixCls}-show-count-has-suffix`]: !!suffix
        }, classNames?.count),
        style: {
          ...styles?.count
        }
      }, dataCount), suffix);
    }
    return null;
  };
  return import_react15.default.createElement(BaseInput_default, _extends4({}, rest, {
    prefixCls,
    className: clsx(className, outOfRangeCls),
    handleReset,
    value: formatValue,
    focused,
    triggerFocus: focus,
    suffix: getSuffix(),
    disabled,
    classes,
    classNames,
    styles,
    ref: holderRef
  }), getInputElement());
});
var Input_default = Input;

// node_modules/@rc-component/input/es/index.js
var es_default5 = Input_default;

// node_modules/@rc-component/textarea/es/TextArea.js
var import_react16 = __toESM(require_react());

// node_modules/@rc-component/textarea/es/ResizableTextArea.js
var React21 = __toESM(require_react());

// node_modules/@rc-component/textarea/es/calculateNodeHeight.js
var HIDDEN_TEXTAREA_STYLE = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`;
var SIZING_STYLE = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node, useCache = false) {
  const nodeRef = node.getAttribute("id") || node.getAttribute("data-reactid") || node.getAttribute("name");
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  const style = window.getComputedStyle(node);
  const boxSizing = style.getPropertyValue("box-sizing") || style.getPropertyValue("-moz-box-sizing") || style.getPropertyValue("-webkit-box-sizing");
  const paddingSize = parseFloat(style.getPropertyValue("padding-bottom")) + parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = parseFloat(style.getPropertyValue("border-bottom-width")) + parseFloat(style.getPropertyValue("border-top-width"));
  const sizingStyle = SIZING_STYLE.map((name) => `${name}:${style.getPropertyValue(name)}`).join(";");
  const nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode, useCache = false, minRows = null, maxRows = null) {
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.setAttribute("tab-index", "-1");
    hiddenTextarea.setAttribute("aria-hidden", "true");
    hiddenTextarea.setAttribute("name", "hiddenTextarea");
    document.body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute("wrap")) {
    hiddenTextarea.setAttribute("wrap", uiTextNode.getAttribute("wrap"));
  } else {
    hiddenTextarea.removeAttribute("wrap");
  }
  const {
    paddingSize,
    borderSize,
    boxSizing,
    sizingStyle
  } = calculateNodeStyling(uiTextNode, useCache);
  hiddenTextarea.setAttribute("style", `${sizingStyle};${HIDDEN_TEXTAREA_STYLE}`);
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || "";
  let minHeight = void 0;
  let maxHeight = void 0;
  let overflowY;
  let height = hiddenTextarea.scrollHeight;
  if (boxSizing === "border-box") {
    height += borderSize;
  } else if (boxSizing === "content-box") {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = " ";
    const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === "border-box") {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === "border-box") {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? "" : "hidden";
      height = Math.min(maxHeight, height);
    }
  }
  const style = {
    height,
    overflowY,
    resize: "none"
  };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (maxHeight) {
    style.maxHeight = maxHeight;
  }
  return style;
}

// node_modules/@rc-component/textarea/es/ResizableTextArea.js
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = React21.forwardRef((props, ref) => {
  const {
    prefixCls,
    defaultValue,
    value,
    autoSize,
    onResize,
    className,
    style,
    disabled,
    onChange,
    // Test only
    onInternalAutoSize,
    ...restProps
  } = props;
  const [internalValue, setMergedValue] = useControlledState(defaultValue, value);
  const mergedValue = internalValue ?? "";
  const onInternalChange = (event) => {
    setMergedValue(event.target.value);
    onChange?.(event);
  };
  const textareaRef = React21.useRef();
  React21.useImperativeHandle(ref, () => ({
    textArea: textareaRef.current
  }));
  const [minRows, maxRows] = React21.useMemo(() => {
    if (autoSize && typeof autoSize === "object") {
      return [autoSize.minRows, autoSize.maxRows];
    }
    return [];
  }, [autoSize]);
  const needAutoSize = !!autoSize;
  const [resizeState, setResizeState] = React21.useState(RESIZE_STABLE);
  const [autoSizeStyle, setAutoSizeStyle] = React21.useState();
  const startResize = () => {
    setResizeState(RESIZE_START);
    if (false) {
      onInternalAutoSize?.();
    }
  };
  useLayoutEffect_default(() => {
    if (needAutoSize) {
      startResize();
    }
  }, [value, minRows, maxRows, needAutoSize]);
  useLayoutEffect_default(() => {
    if (resizeState === RESIZE_START) {
      setResizeState(RESIZE_MEASURING);
    } else if (resizeState === RESIZE_MEASURING) {
      const textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
      setResizeState(RESIZE_STABLE);
      setAutoSizeStyle(textareaStyles);
    } else {
    }
  }, [resizeState]);
  const resizeRafRef = React21.useRef();
  const cleanRaf = () => {
    raf_default.cancel(resizeRafRef.current);
  };
  const onInternalResize = (size) => {
    if (resizeState === RESIZE_STABLE) {
      onResize?.(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = raf_default(() => {
          startResize();
        });
      }
    }
  };
  React21.useEffect(() => cleanRaf, []);
  const mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  const mergedStyle = {
    ...style,
    ...mergedAutoSizeStyle
  };
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = "hidden";
    mergedStyle.overflowX = "hidden";
  }
  return React21.createElement(es_default, {
    onResize: onInternalResize,
    disabled: !(autoSize || onResize)
  }, React21.createElement("textarea", _extends5({}, restProps, {
    ref: textareaRef,
    style: mergedStyle,
    className: clsx(prefixCls, className, {
      [`${prefixCls}-disabled`]: disabled
    }),
    disabled,
    value: mergedValue,
    onChange: onInternalChange
  })));
});
var ResizableTextArea_default = ResizableTextArea;

// node_modules/@rc-component/textarea/es/TextArea.js
function _extends6() {
  _extends6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
var TextArea = import_react16.default.forwardRef(({
  defaultValue,
  value: customValue,
  onFocus,
  onBlur,
  onChange,
  allowClear,
  maxLength,
  onCompositionStart,
  onCompositionEnd,
  suffix,
  prefixCls = "rc-textarea",
  showCount,
  count,
  className,
  style,
  disabled,
  hidden,
  classNames,
  styles,
  onResize,
  onClear,
  onPressEnter,
  readOnly,
  autoSize,
  onKeyDown,
  ...rest
}, ref) => {
  const [value, setValue] = useControlledState(defaultValue, customValue);
  const formatValue = value === void 0 || value === null ? "" : String(value);
  const [focused, setFocused] = import_react16.default.useState(false);
  const compositionRef = import_react16.default.useRef(false);
  const [textareaResized, setTextareaResized] = import_react16.default.useState(null);
  const holderRef = (0, import_react16.useRef)(null);
  const resizableTextAreaRef = (0, import_react16.useRef)(null);
  const getTextArea = () => resizableTextAreaRef.current?.textArea;
  const focus = () => {
    getTextArea().focus();
  };
  (0, import_react16.useImperativeHandle)(ref, () => ({
    resizableTextArea: resizableTextAreaRef.current,
    focus,
    blur: () => {
      getTextArea().blur();
    },
    nativeElement: holderRef.current?.nativeElement || getTextArea()
  }));
  (0, import_react16.useEffect)(() => {
    setFocused((prev) => !disabled && prev);
  }, [disabled]);
  const [selection, setSelection] = import_react16.default.useState(null);
  import_react16.default.useEffect(() => {
    if (selection) {
      getTextArea().setSelectionRange(...selection);
    }
  }, [selection]);
  const countConfig = useCount(count, showCount);
  const mergedMax = countConfig.max ?? maxLength;
  const hasMaxLength = Number(mergedMax) > 0;
  const valueLength = countConfig.strategy(formatValue);
  const isOutOfRange = !!mergedMax && valueLength > mergedMax;
  const triggerChange = (e, currentValue) => {
    let cutValue = currentValue;
    if (!compositionRef.current && countConfig.exceedFormatter && countConfig.max && countConfig.strategy(currentValue) > countConfig.max) {
      cutValue = countConfig.exceedFormatter(currentValue, {
        max: countConfig.max
      });
      if (currentValue !== cutValue) {
        setSelection([getTextArea().selectionStart || 0, getTextArea().selectionEnd || 0]);
      }
    }
    setValue(cutValue);
    resolveOnChange(e.currentTarget, e, onChange, cutValue);
  };
  const onInternalCompositionStart = (e) => {
    compositionRef.current = true;
    onCompositionStart?.(e);
  };
  const onInternalCompositionEnd = (e) => {
    compositionRef.current = false;
    triggerChange(e, e.currentTarget.value);
    onCompositionEnd?.(e);
  };
  const onInternalChange = (e) => {
    triggerChange(e, e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && onPressEnter && !e.nativeEvent.isComposing) {
      onPressEnter(e);
    }
    onKeyDown?.(e);
  };
  const handleFocus = (e) => {
    setFocused(true);
    onFocus?.(e);
  };
  const handleBlur = (e) => {
    setFocused(false);
    onBlur?.(e);
  };
  const handleReset = (e) => {
    setValue("");
    focus();
    resolveOnChange(getTextArea(), e, onChange);
  };
  let suffixNode = suffix;
  let dataCount;
  if (countConfig.show) {
    if (countConfig.showFormatter) {
      dataCount = countConfig.showFormatter({
        value: formatValue,
        count: valueLength,
        maxLength: mergedMax
      });
    } else {
      dataCount = `${valueLength}${hasMaxLength ? ` / ${mergedMax}` : ""}`;
    }
    suffixNode = import_react16.default.createElement(import_react16.default.Fragment, null, suffixNode, import_react16.default.createElement("span", {
      className: clsx(`${prefixCls}-data-count`, classNames?.count),
      style: styles?.count
    }, dataCount));
  }
  const handleResize = (size) => {
    onResize?.(size);
    if (getTextArea()?.style.height) {
      setTextareaResized(true);
    }
  };
  const isPureTextArea = !autoSize && !showCount && !allowClear;
  return import_react16.default.createElement(BaseInput_default, {
    ref: holderRef,
    value: formatValue,
    allowClear,
    handleReset,
    suffix: suffixNode,
    prefixCls,
    classNames: {
      ...classNames,
      affixWrapper: clsx(classNames?.affixWrapper, {
        [`${prefixCls}-show-count`]: showCount,
        [`${prefixCls}-textarea-allow-clear`]: allowClear
      })
    },
    disabled,
    focused,
    className: clsx(className, isOutOfRange && `${prefixCls}-out-of-range`),
    style: {
      ...style,
      ...textareaResized && !isPureTextArea ? {
        height: "auto"
      } : {}
    },
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof dataCount === "string" ? dataCount : void 0
      }
    },
    hidden,
    readOnly,
    onClear
  }, import_react16.default.createElement(ResizableTextArea_default, _extends6({}, rest, {
    autoSize,
    maxLength,
    onKeyDown: handleKeyDown,
    onChange: onInternalChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onCompositionStart: onInternalCompositionStart,
    onCompositionEnd: onInternalCompositionEnd,
    className: clsx(classNames?.textarea),
    style: {
      resize: style?.resize,
      ...styles?.textarea
    },
    disabled,
    prefixCls,
    onResize: handleResize,
    ref: resizableTextAreaRef,
    readOnly
  })));
});
var TextArea_default = TextArea;

// node_modules/@rc-component/textarea/es/index.js
var es_default6 = TextArea_default;

// node_modules/antd/es/_util/getAllowClear.js
var import_react17 = __toESM(require_react());
var getAllowClear = (allowClear) => {
  let mergedAllowClear;
  if (typeof allowClear === "object" && allowClear?.clearIcon) {
    mergedAllowClear = allowClear;
  } else if (allowClear) {
    mergedAllowClear = {
      clearIcon: import_react17.default.createElement(CloseCircleFilled_default, null)
    };
  }
  return mergedAllowClear;
};
var getAllowClear_default = getAllowClear;

// node_modules/antd/es/_util/statusUtils.js
var getStatusClassNames = (prefixCls, status, hasFeedback) => {
  return clsx({
    [`${prefixCls}-status-success`]: status === "success",
    [`${prefixCls}-status-warning`]: status === "warning",
    [`${prefixCls}-status-error`]: status === "error",
    [`${prefixCls}-status-validating`]: status === "validating",
    [`${prefixCls}-has-feedback`]: hasFeedback
  });
};
var getMergedStatus = (contextStatus, customStatus) => customStatus || contextStatus;

// node_modules/antd/es/input/Input.js
var import_react19 = __toESM(require_react());

// node_modules/antd/es/input/hooks/useRemovePasswordTimeout.js
var import_react18 = __toESM(require_react());
function useRemovePasswordTimeout(inputRef, triggerOnMount) {
  const removePasswordTimeoutRef = (0, import_react18.useRef)([]);
  const removePasswordTimeout = () => {
    removePasswordTimeoutRef.current.push(setTimeout(() => {
      if (inputRef.current?.input && inputRef.current?.input.getAttribute("type") === "password" && inputRef.current?.input.hasAttribute("value")) {
        inputRef.current?.input.removeAttribute("value");
      }
    }));
  };
  (0, import_react18.useEffect)(() => {
    if (triggerOnMount) {
      removePasswordTimeout();
    }
    return () => removePasswordTimeoutRef.current.forEach((timer) => {
      if (timer) {
        clearTimeout(timer);
      }
    });
  }, []);
  return removePasswordTimeout;
}

// node_modules/antd/es/style/compact-item.js
function compactItemBorder(token, parentCls, options, prefixCls) {
  const {
    focusElCls,
    focus,
    borderElCls
  } = options;
  const childCombinator = borderElCls ? "> *" : "";
  const hoverEffects = ["hover", focus ? "focus" : null, "active"].filter(Boolean).map((n) => `&:${n} ${childCombinator}`).join(",");
  return {
    [`&-item:not(${parentCls}-last-item)`]: {
      marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${prefixCls}-status-success)`]: {
      zIndex: 2
    },
    "&-item": {
      [hoverEffects]: {
        zIndex: 3
      },
      ...focusElCls ? {
        [`&${focusElCls}`]: {
          zIndex: 3
        }
      } : {},
      [`&[disabled] ${childCombinator}`]: {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderRadius(prefixCls, parentCls, options) {
  const {
    borderElCls
  } = options;
  const childCombinator = borderElCls ? `> ${borderElCls}` : "";
  return {
    [`&-item:not(${parentCls}-first-item):not(${parentCls}-last-item) ${childCombinator}`]: {
      borderRadius: 0
    },
    [`&-item:not(${parentCls}-last-item)${parentCls}-first-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${parentCls}-first-item)${parentCls}-last-item`]: {
      [`& ${childCombinator}, &${prefixCls}-sm ${childCombinator}, &${prefixCls}-lg ${childCombinator}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function genCompactItemStyle(token, options = {
  focus: true
}) {
  const {
    componentCls
  } = token;
  const {
    componentCls: customizePrefixCls
  } = options;
  const mergedComponentCls = customizePrefixCls || componentCls;
  const compactCls = `${mergedComponentCls}-compact`;
  return {
    [compactCls]: {
      ...compactItemBorder(token, compactCls, options, mergedComponentCls),
      ...compactItemBorderRadius(mergedComponentCls, compactCls, options)
    }
  };
}

// node_modules/antd/es/input/style/token.js
function initInputToken(token) {
  return merge(token, {
    inputAffixPadding: token.paddingXXS
  });
}
var initComponentToken = (token) => {
  const {
    controlHeight,
    fontSize,
    lineHeight,
    lineWidth,
    controlHeightSM,
    controlHeightLG,
    fontSizeLG,
    lineHeightLG,
    paddingSM,
    controlPaddingHorizontalSM,
    controlPaddingHorizontal,
    colorFillAlter,
    colorPrimaryHover,
    colorPrimary,
    controlOutlineWidth,
    controlOutline,
    colorErrorOutline,
    colorWarningOutline,
    colorBgContainer,
    inputFontSize,
    inputFontSizeLG,
    inputFontSizeSM
  } = token;
  const mergedFontSize = inputFontSize || fontSize;
  const mergedFontSizeSM = inputFontSizeSM || mergedFontSize;
  const mergedFontSizeLG = inputFontSizeLG || fontSizeLG;
  const paddingBlock = Math.round((controlHeight - mergedFontSize * lineHeight) / 2 * 10) / 10 - lineWidth;
  const paddingBlockSM = Math.round((controlHeightSM - mergedFontSizeSM * lineHeight) / 2 * 10) / 10 - lineWidth;
  const paddingBlockLG = Math.ceil((controlHeightLG - mergedFontSizeLG * lineHeightLG) / 2 * 10) / 10 - lineWidth;
  return {
    paddingBlock: Math.max(paddingBlock, 0),
    paddingBlockSM: Math.max(paddingBlockSM, 0),
    paddingBlockLG: Math.max(paddingBlockLG, 0),
    paddingInline: paddingSM - lineWidth,
    paddingInlineSM: controlPaddingHorizontalSM - lineWidth,
    paddingInlineLG: controlPaddingHorizontal - lineWidth,
    addonBg: colorFillAlter,
    activeBorderColor: colorPrimary,
    hoverBorderColor: colorPrimaryHover,
    activeShadow: `0 0 0 ${controlOutlineWidth}px ${controlOutline}`,
    errorActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorErrorOutline}`,
    warningActiveShadow: `0 0 0 ${controlOutlineWidth}px ${colorWarningOutline}`,
    hoverBg: colorBgContainer,
    activeBg: colorBgContainer,
    inputFontSize: mergedFontSize,
    inputFontSizeLG: mergedFontSizeLG,
    inputFontSizeSM: mergedFontSizeSM
  };
};

// node_modules/antd/es/input/style/variants.js
var genHoverStyle = (token) => ({
  borderColor: token.hoverBorderColor,
  backgroundColor: token.hoverBg
});
var genDisabledStyle = (token) => ({
  color: token.colorTextDisabled,
  backgroundColor: token.colorBgContainerDisabled,
  borderColor: token.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": {
    ...genHoverStyle(merge(token, {
      hoverBorderColor: token.colorBorder,
      hoverBg: token.colorBgContainerDisabled
    }))
  }
});
var genBaseOutlinedStyle = (token, options) => ({
  background: token.colorBgContainer,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: options.borderColor,
  "&:hover": {
    borderColor: options.hoverBorderColor,
    backgroundColor: token.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: options.activeBorderColor,
    boxShadow: options.activeShadow,
    outline: 0,
    backgroundColor: token.activeBg
  }
});
var genOutlinedStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
    ...genBaseOutlinedStyle(token, options),
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  },
  [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
    borderColor: options.borderColor
  }
});
var genOutlinedStyle = (token, extraStyles) => ({
  "&-outlined": {
    ...genBaseOutlinedStyle(token, {
      borderColor: token.colorBorder,
      hoverBorderColor: token.hoverBorderColor,
      activeBorderColor: token.activeBorderColor,
      activeShadow: token.activeShadow
    }),
    [`&${token.componentCls}-disabled, &[disabled]`]: {
      ...genDisabledStyle(token)
    },
    ...genOutlinedStatusStyle(token, {
      status: "error",
      borderColor: token.colorError,
      hoverBorderColor: token.colorErrorBorderHover,
      activeBorderColor: token.colorError,
      activeShadow: token.errorActiveShadow,
      affixColor: token.colorError
    }),
    ...genOutlinedStatusStyle(token, {
      status: "warning",
      borderColor: token.colorWarning,
      hoverBorderColor: token.colorWarningBorderHover,
      activeBorderColor: token.colorWarning,
      activeShadow: token.warningActiveShadow,
      affixColor: token.colorWarning
    }),
    ...extraStyles
  }
});
var genOutlinedGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      borderColor: options.addonBorderColor,
      color: options.addonColor
    }
  }
});
var genOutlinedGroupStyle = (token) => ({
  "&-outlined": {
    [`${token.componentCls}-group`]: {
      "&-addon": {
        background: token.addonBg,
        border: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    },
    ...genOutlinedGroupStatusStyle(token, {
      status: "error",
      addonBorderColor: token.colorError,
      addonColor: token.colorErrorText
    }),
    ...genOutlinedGroupStatusStyle(token, {
      status: "warning",
      addonBorderColor: token.colorWarning,
      addonColor: token.colorWarningText
    }),
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group-addon`]: {
        ...genDisabledStyle(token)
      }
    }
  }
});
var genBorderlessStyle = (token, extraStyles) => {
  const {
    componentCls
  } = token;
  return {
    "&-borderless": {
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${componentCls}-disabled, &[disabled]`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${componentCls}-status-error`]: {
        "&, & input, & textarea": {
          color: token.colorError
        }
      },
      [`&${componentCls}-status-warning`]: {
        "&, & input, & textarea": {
          color: token.colorWarning
        }
      },
      ...extraStyles
    }
  };
};
var genBaseFilledStyle = (token, options) => ({
  background: options.bg,
  borderWidth: token.lineWidth,
  borderStyle: token.lineType,
  borderColor: "transparent",
  "input&, & input, textarea&, & textarea": {
    color: options?.inputColor ?? "unset"
  },
  "&:hover": {
    background: options.hoverBg
  },
  "&:focus, &:focus-within": {
    outline: 0,
    borderColor: options.activeBorderColor,
    backgroundColor: token.activeBg
  }
});
var genFilledStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
    ...genBaseFilledStyle(token, options),
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  }
});
var genFilledStyle = (token, extraStyles) => ({
  "&-filled": {
    ...genBaseFilledStyle(token, {
      bg: token.colorFillTertiary,
      hoverBg: token.colorFillSecondary,
      activeBorderColor: token.activeBorderColor,
      inputColor: token.colorText
    }),
    [`&${token.componentCls}-disabled, &[disabled]`]: {
      ...genDisabledStyle(token)
    },
    ...genFilledStatusStyle(token, {
      status: "error",
      bg: token.colorErrorBg,
      hoverBg: token.colorErrorBgHover,
      activeBorderColor: token.colorError,
      inputColor: token.colorErrorText,
      affixColor: token.colorError
    }),
    ...genFilledStatusStyle(token, {
      status: "warning",
      bg: token.colorWarningBg,
      hoverBg: token.colorWarningBgHover,
      activeBorderColor: token.colorWarning,
      inputColor: token.colorWarningText,
      affixColor: token.colorWarning
    }),
    ...extraStyles
  }
});
var genFilledGroupStatusStyle = (token, options) => ({
  [`&${token.componentCls}-group-wrapper-status-${options.status}`]: {
    [`${token.componentCls}-group-addon`]: {
      background: options.addonBg,
      color: options.addonColor
    }
  }
});
var genFilledGroupStyle = (token) => ({
  "&-filled": {
    [`${token.componentCls}-group-addon`]: {
      background: token.colorFillTertiary,
      "&:last-child": {
        position: "static"
      }
    },
    ...genFilledGroupStatusStyle(token, {
      status: "error",
      addonBg: token.colorErrorBg,
      addonColor: token.colorErrorText
    }),
    ...genFilledGroupStatusStyle(token, {
      status: "warning",
      addonBg: token.colorWarningBg,
      addonColor: token.colorWarningText
    }),
    [`&${token.componentCls}-group-wrapper-disabled`]: {
      [`${token.componentCls}-group`]: {
        "&-addon": {
          background: token.colorFillTertiary,
          color: token.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderTop: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`,
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        }
      }
    }
  }
});
var genBaseUnderlinedStyle = (token, options) => ({
  background: token.colorBgContainer,
  borderWidth: `${unit(token.lineWidth)} 0`,
  borderStyle: `${token.lineType} none`,
  borderColor: `transparent transparent ${options.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${options.hoverBorderColor} transparent`,
    backgroundColor: token.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${options.activeBorderColor} transparent`,
    outline: 0,
    backgroundColor: token.activeBg
  }
});
var genUnderlinedStatusStyle = (token, options) => ({
  [`&${token.componentCls}-status-${options.status}:not(${token.componentCls}-disabled)`]: {
    ...genBaseUnderlinedStyle(token, options),
    [`${token.componentCls}-prefix, ${token.componentCls}-suffix`]: {
      color: options.affixColor
    }
  },
  [`&${token.componentCls}-status-${options.status}${token.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${options.borderColor} transparent`
  }
});
var genUnderlinedStyle = (token, extraStyles) => ({
  "&-underlined": {
    ...genBaseUnderlinedStyle(token, {
      borderColor: token.colorBorder,
      hoverBorderColor: token.hoverBorderColor,
      activeBorderColor: token.activeBorderColor,
      activeShadow: token.activeShadow
    }),
    // >>>>> Disabled
    [`&${token.componentCls}-disabled, &[disabled]`]: {
      color: token.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${token.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    },
    ...genUnderlinedStatusStyle(token, {
      status: "error",
      borderColor: token.colorError,
      hoverBorderColor: token.colorErrorBorderHover,
      activeBorderColor: token.colorError,
      activeShadow: token.errorActiveShadow,
      affixColor: token.colorError
    }),
    ...genUnderlinedStatusStyle(token, {
      status: "warning",
      borderColor: token.colorWarning,
      hoverBorderColor: token.colorWarningBorderHover,
      activeBorderColor: token.colorWarning,
      activeShadow: token.warningActiveShadow,
      affixColor: token.colorWarning
    }),
    ...extraStyles
  }
});

// node_modules/antd/es/input/style/index.js
var genPlaceholderStyle = (color) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
});
var genInputLargeStyle = (token) => {
  const {
    paddingBlockLG,
    lineHeightLG,
    borderRadiusLG,
    paddingInlineLG
  } = token;
  return {
    padding: `${unit(paddingBlockLG)} ${unit(paddingInlineLG)}`,
    fontSize: token.inputFontSizeLG,
    lineHeight: lineHeightLG,
    borderRadius: borderRadiusLG
  };
};
var genInputSmallStyle = (token) => ({
  padding: `${unit(token.paddingBlockSM)} ${unit(token.paddingInlineSM)}`,
  fontSize: token.inputFontSizeSM,
  borderRadius: token.borderRadiusSM
});
var genBasicInputStyle = (token, option = {}) => ({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${unit(token.paddingBlock)} ${unit(token.paddingInline)}`,
  color: token.colorText,
  fontSize: token.inputFontSize,
  lineHeight: token.lineHeight,
  borderRadius: token.borderRadius,
  transition: `all ${token.motionDurationMid}`,
  ...genPlaceholderStyle(token.colorTextPlaceholder),
  // Size
  "&-lg": {
    ...genInputLargeStyle(token),
    ...option.largeStyle
  },
  "&-sm": {
    ...genInputSmallStyle(token),
    ...option.smallStyle
  },
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
});
var genInputGroupStyle = (token) => {
  const {
    componentCls,
    antCls
  } = token;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: token.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${componentCls}, &-lg > ${componentCls}-group-addon`]: {
      ...genInputLargeStyle(token)
    },
    [`&-sm ${componentCls}, &-sm > ${componentCls}-group-addon`]: {
      ...genInputSmallStyle(token)
    },
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${antCls}-select-single`]: {
      height: token.controlHeightLG
    },
    [`&-sm ${antCls}-select-single`]: {
      height: token.controlHeightSM
    },
    [`> ${componentCls}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${componentCls}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${unit(token.paddingInline)}`,
        color: token.colorText,
        fontWeight: "normal",
        fontSize: token.inputFontSize,
        textAlign: "center",
        borderRadius: token.borderRadius,
        transition: `all ${token.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${antCls}-select`]: {
          margin: `${unit(token.calc(token.paddingBlock).add(1).mul(-1).equal())} ${unit(token.calc(token.paddingInline).mul(-1).equal())}`,
          [`&${antCls}-select-single:not(${antCls}-select-customize-input):not(${antCls}-pagination-size-changer)`]: {
            backgroundColor: "inherit",
            border: `${unit(token.lineWidth)} ${token.lineType} transparent`,
            boxShadow: "none"
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${antCls}-cascader-picker`]: {
          margin: `-9px ${unit(token.calc(token.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${antCls}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [componentCls]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1
      }
    },
    // Reset rounded corners
    [`> ${componentCls}:first-child, ${componentCls}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}-affix-wrapper`]: {
      [`&:not(:first-child) ${componentCls}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${componentCls}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${componentCls}:last-child, ${componentCls}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${antCls}-select`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${componentCls}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      },
      "&:not(:first-child)": {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${componentCls}-group-compact`]: {
      display: "block",
      ...clearFix(),
      [`${componentCls}-group-addon, ${componentCls}-group-wrap, > ${componentCls}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: token.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${componentCls}-affix-wrapper,
        & > ${componentCls}-number-affix-wrapper,
        & > ${antCls}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: token.calc(token.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: token.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [componentCls]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${antCls}-select,
      & > ${antCls}-select-auto-complete ${componentCls},
      & > ${antCls}-cascader-picker ${componentCls},
      & > ${componentCls}-group-wrapper ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${antCls}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${antCls}-select > ${antCls}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${antCls}-select:first-child,
      & > ${antCls}-select-auto-complete:first-child ${componentCls},
      & > ${antCls}-cascader-picker:first-child ${componentCls}`]: {
        borderStartStartRadius: token.borderRadius,
        borderEndStartRadius: token.borderRadius
      },
      [`& > *:last-child,
      & > ${antCls}-select:last-child,
      & > ${antCls}-cascader-picker:last-child ${componentCls},
      & > ${antCls}-cascader-picker-focused:last-child ${componentCls}`]: {
        borderInlineEndWidth: token.lineWidth,
        borderStartEndRadius: token.borderRadius,
        borderEndEndRadius: token.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${antCls}-select-auto-complete ${componentCls}`]: {
        verticalAlign: "top"
      },
      [`${componentCls}-group-wrapper + ${componentCls}-group-wrapper`]: {
        marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
        [`${componentCls}-affix-wrapper`]: {
          // borderRadius: 0,
        }
      }
    }
  };
};
var genInputStyle = (token) => {
  const {
    componentCls,
    controlHeightSM,
    lineWidth,
    calc
  } = token;
  const FIXED_CHROME_COLOR_HEIGHT = 16;
  const colorSmallPadding = calc(controlHeightSM).sub(calc(lineWidth).mul(2)).sub(FIXED_CHROME_COLOR_HEIGHT).div(2).equal();
  return {
    [componentCls]: {
      ...resetComponent(token),
      ...genBasicInputStyle(token),
      // Variants
      ...genOutlinedStyle(token),
      ...genFilledStyle(token),
      ...genBorderlessStyle(token),
      ...genUnderlinedStyle(token),
      '&[type="color"]': {
        height: token.controlHeight,
        [`&${componentCls}-lg`]: {
          height: token.controlHeightLG
        },
        [`&${componentCls}-sm`]: {
          height: controlHeightSM,
          paddingTop: colorSmallPadding,
          paddingBottom: colorSmallPadding
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    }
  };
};
var genAllowClearStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    // ========================= Input =========================
    [`${componentCls}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: token.colorTextQuaternary,
      fontSize: token.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${token.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: token.colorIcon
      },
      "&:active": {
        color: token.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${unit(token.inputAffixPadding)}`
      }
    }
  };
};
var genAffixStyle = (token) => {
  const {
    componentCls,
    inputAffixPadding,
    colorTextDescription,
    motionDurationSlow,
    colorIcon,
    colorIconHover,
    iconCls
  } = token;
  const affixCls = `${componentCls}-affix-wrapper`;
  const affixClsDisabled = `${componentCls}-affix-wrapper-disabled`;
  return {
    [affixCls]: {
      ...genBasicInputStyle(token),
      display: "inline-flex",
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${componentCls}`]: {
        padding: 0
      },
      [`> input${componentCls}, > textarea${componentCls}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [componentCls]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: token.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: colorTextDescription,
          direction: "ltr"
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: token.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: inputAffixPadding
        },
        "&-suffix": {
          marginInlineStart: inputAffixPadding
        }
      },
      ...genAllowClearStyle(token),
      // password
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "pointer",
        transition: `all ${motionDurationSlow}`,
        "&:hover": {
          color: colorIconHover
        }
      }
    },
    // 覆盖 affix-wrapper borderRadius！
    [`${componentCls}-underlined`]: {
      borderRadius: 0
    },
    [affixClsDisabled]: {
      // password disabled
      [`${iconCls}${componentCls}-password-icon`]: {
        color: colorIcon,
        cursor: "not-allowed",
        "&:hover": {
          color: colorIcon
        }
      }
    }
  };
};
var genGroupStyle = (token) => {
  const {
    componentCls,
    borderRadiusLG,
    borderRadiusSM
  } = token;
  return {
    [`${componentCls}-group`]: {
      // Style for input-group: input with label, with button or dropdown...
      ...resetComponent(token),
      ...genInputGroupStyle(token),
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": {
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design/issues/6403
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusLG,
            fontSize: token.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${componentCls}-group-addon`]: {
            borderRadius: borderRadiusSM
          }
        },
        // Variants
        ...genOutlinedGroupStyle(token),
        ...genFilledGroupStyle(token),
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${componentCls}-compact-first-item):not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-first-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-last-item`]: {
          [`${componentCls}, ${componentCls}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${componentCls}-compact-last-item)${componentCls}-compact-item`]: {
          [`${componentCls}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${componentCls}-compact-first-item)${componentCls}-compact-item`]: {
          [`${componentCls}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      }
    }
  };
};
var genRangeStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    [`${componentCls}-out-of-range`]: {
      [`&, & input, & textarea, ${componentCls}-show-count-suffix, ${componentCls}-data-count`]: {
        color: token.colorError
      }
    }
  };
};
var useSharedStyle = genStyleHooks(["Input", "Shared"], (token) => {
  const inputToken = merge(token, initInputToken(token));
  return [genInputStyle(inputToken), genAffixStyle(inputToken)];
}, initComponentToken, {
  resetFont: false
});
var style_default3 = genStyleHooks(["Input", "Component"], (token) => {
  const inputToken = merge(token, initInputToken(token));
  return [
    genGroupStyle(inputToken),
    genRangeStyle(inputToken),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    genCompactItemStyle(inputToken, {
      focus: true,
      focusElCls: `${inputToken.componentCls}-affix-wrapper-focused`
    })
  ];
}, initComponentToken, {
  resetFont: false
});

// node_modules/antd/es/input/utils.js
function hasPrefixSuffix2(props) {
  return !!(props.prefix || props.suffix || props.allowClear || props.showCount);
}

// node_modules/antd/es/input/Input.js
var Input2 = (0, import_react19.forwardRef)((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    status: customStatus,
    size: customSize,
    disabled: customDisabled,
    onBlur,
    onFocus,
    suffix,
    allowClear,
    addonAfter,
    addonBefore,
    className,
    style,
    styles,
    rootClassName,
    onChange,
    classNames,
    variant: customVariant,
    ...rest
  } = props;
  if (true) {
    const {
      deprecated
    } = devUseWarning("Input");
    [["bordered", "variant"], ["addonAfter", "Space.Compact"], ["addonBefore", "Space.Compact"]].forEach(([prop, newProp]) => {
      deprecated(!(prop in props), prop, newProp);
    });
  }
  const {
    getPrefixCls,
    direction,
    allowClear: contextAllowClear,
    autoComplete: contextAutoComplete,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("input");
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const inputRef = (0, import_react19.useRef)(null);
  const rootCls = useCSSVarCls_default(prefixCls);
  const [hashId, cssVarCls] = useSharedStyle(prefixCls, rootClassName);
  style_default3(prefixCls, rootCls);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const mergedSize = useSize_default((ctx) => customSize ?? compactSize ?? ctx);
  const disabled = import_react19.default.useContext(DisabledContext_default);
  const mergedDisabled = customDisabled ?? disabled;
  const mergedProps = {
    ...props,
    size: mergedSize,
    disabled: mergedDisabled
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = (0, import_react19.useContext)(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const inputHasPrefixSuffix = hasPrefixSuffix2(props) || !!hasFeedback;
  const prevHasPrefixSuffix = (0, import_react19.useRef)(inputHasPrefixSuffix);
  if (true) {
    const warning = devUseWarning("Input");
    (0, import_react19.useEffect)(() => {
      if (inputHasPrefixSuffix && !prevHasPrefixSuffix.current) {
        true ? warning(document.activeElement === inputRef.current?.input, "usage", `When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ`) : void 0;
      }
      prevHasPrefixSuffix.current = inputHasPrefixSuffix;
    }, [inputHasPrefixSuffix]);
  }
  const removePasswordTimeout = useRemovePasswordTimeout(inputRef, true);
  const handleBlur = (e) => {
    removePasswordTimeout();
    onBlur?.(e);
  };
  const handleFocus = (e) => {
    removePasswordTimeout();
    onFocus?.(e);
  };
  const handleChange = (e) => {
    removePasswordTimeout();
    onChange?.(e);
  };
  const suffixNode = (hasFeedback || suffix) && import_react19.default.createElement(import_react19.default.Fragment, null, suffix, hasFeedback && feedbackIcon);
  const mergedAllowClear = getAllowClear_default(allowClear ?? contextAllowClear);
  const [variant, enableVariantCls] = useVariants_default("input", customVariant, bordered);
  return import_react19.default.createElement(es_default5, {
    ref: composeRef(ref, inputRef),
    prefixCls,
    autoComplete: contextAutoComplete,
    ...rest,
    disabled: mergedDisabled,
    onBlur: handleBlur,
    onFocus: handleFocus,
    style: {
      ...mergedStyles.root,
      ...contextStyle,
      ...style
    },
    styles: mergedStyles,
    suffix: suffixNode,
    allowClear: mergedAllowClear,
    className: clsx(className, rootClassName, cssVarCls, rootCls, compactItemClassnames, contextClassName, mergedClassNames.root),
    onChange: handleChange,
    addonBefore: addonBefore && import_react19.default.createElement(ContextIsolator_default, {
      form: true,
      space: true
    }, addonBefore),
    addonAfter: addonAfter && import_react19.default.createElement(ContextIsolator_default, {
      form: true,
      space: true
    }, addonAfter),
    classNames: {
      ...mergedClassNames,
      input: clsx({
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large",
        [`${prefixCls}-rtl`]: direction === "rtl"
      }, mergedClassNames.input, hashId),
      variant: clsx({
        [`${prefixCls}-${variant}`]: enableVariantCls
      }, getStatusClassNames(prefixCls, mergedStatus)),
      affixWrapper: clsx({
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl"
      }, hashId),
      wrapper: clsx({
        [`${prefixCls}-group-rtl`]: direction === "rtl"
      }, hashId),
      groupWrapper: clsx({
        [`${prefixCls}-group-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-group-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-group-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-group-wrapper-${variant}`]: enableVariantCls
      }, getStatusClassNames(`${prefixCls}-group-wrapper`, mergedStatus, hasFeedback), hashId)
    }
  });
});
if (true) {
  Input2.displayName = "Input";
}
var Input_default2 = Input2;

// node_modules/antd/es/input/style/textarea.js
var genTextAreaStyle = (token) => {
  const {
    componentCls,
    paddingLG
  } = token;
  const textareaPrefixCls = `${componentCls}-textarea`;
  return {
    // Raw Textarea
    [`textarea${componentCls}`]: {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: token.controlHeight,
      lineHeight: token.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${token.motionDurationSlow}`,
      resize: "vertical",
      [`&${componentCls}-mouse-active`]: {
        transition: `all ${token.motionDurationSlow}, height 0s, width 0s`
      }
    },
    // Wrapper for resize
    [`${componentCls}-textarea-affix-wrapper-resize-dirty`]: {
      width: "auto"
    },
    [textareaPrefixCls]: {
      position: "relative",
      "&-show-count": {
        [`${componentCls}-data-count`]: {
          position: "absolute",
          bottom: token.calc(token.fontSize).mul(token.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: token.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${componentCls},
        &-affix-wrapper${textareaPrefixCls}-has-feedback ${componentCls}
      `]: {
        paddingInlineEnd: paddingLG
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${componentCls}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          minHeight: token.calc(token.controlHeight).sub(token.calc(token.lineWidth).mul(2)).equal(),
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${componentCls}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${componentCls}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: token.paddingInline,
            insetBlockStart: token.paddingXS
          },
          // Feedback Icon
          [`${textareaPrefixCls}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: token.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper-rtl`]: {
        [`${componentCls}-suffix`]: {
          [`${componentCls}-data-count`]: {
            direction: "ltr",
            insetInlineStart: 0
          }
        }
      },
      [`&-affix-wrapper${componentCls}-affix-wrapper-sm`]: {
        [`${componentCls}-suffix`]: {
          [`${componentCls}-clear-icon`]: {
            insetInlineEnd: token.paddingInlineSM
          }
        }
      }
    }
  };
};
var textarea_default = genStyleHooks(["Input", "TextArea"], (token) => {
  const inputToken = merge(token, initInputToken(token));
  return genTextAreaStyle(inputToken);
}, initComponentToken, {
  resetFont: false
});

// node_modules/antd/es/input/TextArea.js
var TextArea2 = (0, import_react20.forwardRef)((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    bordered = true,
    size: customizeSize,
    disabled: customDisabled,
    status: customStatus,
    allowClear,
    classNames,
    rootClassName,
    className,
    style,
    styles,
    variant: customVariant,
    showCount,
    onMouseDown,
    onResize,
    ...rest
  } = props;
  if (true) {
    const {
      deprecated
    } = devUseWarning("TextArea");
    deprecated(!("bordered" in props), "bordered", "variant");
  }
  const {
    getPrefixCls,
    direction,
    allowClear: contextAllowClear,
    autoComplete: contextAutoComplete,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("textArea");
  const disabled = React25.useContext(DisabledContext_default);
  const mergedDisabled = customDisabled ?? disabled;
  const {
    status: contextStatus,
    hasFeedback,
    feedbackIcon
  } = React25.useContext(FormItemInputContext);
  const mergedStatus = getMergedStatus(contextStatus, customStatus);
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props
  });
  const innerRef = React25.useRef(null);
  React25.useImperativeHandle(ref, () => ({
    resizableTextArea: innerRef.current?.resizableTextArea,
    focus: (option) => {
      triggerFocus(innerRef.current?.resizableTextArea?.textArea, option);
    },
    blur: () => innerRef.current?.blur(),
    nativeElement: innerRef.current?.nativeElement || null
  }));
  const prefixCls = getPrefixCls("input", customizePrefixCls);
  const rootCls = useCSSVarCls_default(prefixCls);
  const [hashId, cssVarCls] = useSharedStyle(prefixCls, rootClassName);
  textarea_default(prefixCls, rootCls);
  const {
    compactSize,
    compactItemClassnames
  } = useCompactItemContext(prefixCls, direction);
  const mergedSize = useSize_default((ctx) => customizeSize ?? compactSize ?? ctx);
  const [variant, enableVariantCls] = useVariants_default("textArea", customVariant, bordered);
  const mergedAllowClear = getAllowClear_default(allowClear ?? contextAllowClear);
  const [isMouseDown, setIsMouseDown] = React25.useState(false);
  const [resizeDirty, setResizeDirty] = React25.useState(false);
  const onInternalMouseDown = (e) => {
    setIsMouseDown(true);
    onMouseDown?.(e);
    const onMouseUp = () => {
      setIsMouseDown(false);
      document.removeEventListener("mouseup", onMouseUp);
    };
    document.addEventListener("mouseup", onMouseUp);
  };
  const onInternalResize = (size) => {
    onResize?.(size);
    if (isMouseDown && typeof getComputedStyle === "function") {
      const ele = innerRef.current?.nativeElement?.querySelector("textarea");
      if (ele && getComputedStyle(ele).resize === "both") {
        setResizeDirty(true);
      }
    }
  };
  return React25.createElement(es_default6, {
    autoComplete: contextAutoComplete,
    ...rest,
    style: {
      ...mergedStyles.root,
      ...contextStyle,
      ...style
    },
    styles: mergedStyles,
    disabled: mergedDisabled,
    allowClear: mergedAllowClear,
    className: clsx(
      cssVarCls,
      rootCls,
      className,
      rootClassName,
      compactItemClassnames,
      contextClassName,
      mergedClassNames.root,
      // Only for wrapper
      {
        [`${prefixCls}-textarea-affix-wrapper-resize-dirty`]: resizeDirty
      }
    ),
    classNames: {
      ...mergedClassNames,
      textarea: clsx({
        [`${prefixCls}-sm`]: mergedSize === "small",
        [`${prefixCls}-lg`]: mergedSize === "large"
      }, hashId, mergedClassNames.textarea, isMouseDown && `${prefixCls}-mouse-active`),
      variant: clsx({
        [`${prefixCls}-${variant}`]: enableVariantCls
      }, getStatusClassNames(prefixCls, mergedStatus)),
      affixWrapper: clsx(`${prefixCls}-textarea-affix-wrapper`, {
        [`${prefixCls}-affix-wrapper-rtl`]: direction === "rtl",
        [`${prefixCls}-affix-wrapper-sm`]: mergedSize === "small",
        [`${prefixCls}-affix-wrapper-lg`]: mergedSize === "large",
        [`${prefixCls}-textarea-show-count`]: showCount || props.count?.show
      }, hashId)
    },
    prefixCls,
    suffix: hasFeedback && React25.createElement("span", {
      className: `${prefixCls}-textarea-suffix`
    }, feedbackIcon),
    showCount,
    ref: innerRef,
    onResize: onInternalResize,
    onMouseDown: onInternalMouseDown
  });
});
var TextArea_default2 = TextArea2;

// node_modules/antd/es/typography/Editable.js
var Editable = (props) => {
  const {
    prefixCls,
    "aria-label": ariaLabel,
    className,
    style,
    direction,
    maxLength,
    autoSize = true,
    value,
    onSave,
    onCancel,
    onEnd,
    component,
    enterIcon = React26.createElement(EnterOutlined_default, null)
  } = props;
  const ref = React26.useRef(null);
  const inComposition = React26.useRef(false);
  const lastKeyCode = React26.useRef(null);
  const [current, setCurrent] = React26.useState(value);
  React26.useEffect(() => {
    setCurrent(value);
  }, [value]);
  React26.useEffect(() => {
    if (ref.current?.resizableTextArea) {
      const {
        textArea
      } = ref.current.resizableTextArea;
      textArea.focus();
      const {
        length
      } = textArea.value;
      textArea.setSelectionRange(length, length);
    }
  }, []);
  const onChange = ({
    target
  }) => {
    setCurrent(target.value.replace(/[\n\r]/g, ""));
  };
  const onCompositionStart = () => {
    inComposition.current = true;
  };
  const onCompositionEnd = () => {
    inComposition.current = false;
  };
  const onKeyDown = ({
    keyCode
  }) => {
    if (inComposition.current) {
      return;
    }
    lastKeyCode.current = keyCode;
  };
  const confirmChange = () => {
    onSave(current.trim());
  };
  const onKeyUp = ({
    keyCode,
    ctrlKey,
    altKey,
    metaKey,
    shiftKey
  }) => {
    if (lastKeyCode.current !== keyCode || inComposition.current || ctrlKey || altKey || metaKey || shiftKey) {
      return;
    }
    if (keyCode === KeyCode_default.ENTER) {
      confirmChange();
      onEnd?.();
    } else if (keyCode === KeyCode_default.ESC) {
      onCancel();
    }
  };
  const onBlur = () => {
    confirmChange();
  };
  const [hashId, cssVarCls] = style_default2(prefixCls);
  const textAreaClassName = clsx(prefixCls, `${prefixCls}-edit-content`, {
    [`${prefixCls}-rtl`]: direction === "rtl",
    [`${prefixCls}-${component}`]: !!component
  }, className, hashId, cssVarCls);
  return React26.createElement("div", {
    className: textAreaClassName,
    style
  }, React26.createElement(TextArea_default2, {
    ref,
    maxLength,
    value: current,
    onChange,
    onKeyDown,
    onKeyUp,
    onCompositionStart,
    onCompositionEnd,
    onBlur,
    "aria-label": ariaLabel,
    rows: 1,
    autoSize
  }), enterIcon !== null ? cloneElement(enterIcon, {
    className: `${prefixCls}-edit-content-confirm`
  }) : null);
};
var Editable_default = Editable;

// node_modules/antd/es/typography/hooks/useCopyClick.js
var React27 = __toESM(require_react());

// node_modules/antd/es/_util/copy.js
var execCopy = (text, isHtmlFormat) => {
  let copySuccess = false;
  const onCopy = (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.clipboardData?.clearData();
    event.clipboardData?.setData("text/plain", text);
    if (isHtmlFormat) {
      event.clipboardData?.setData("text/html", text);
    }
    copySuccess = true;
  };
  try {
    document.addEventListener("copy", onCopy, {
      capture: true
    });
    document.execCommand("copy");
    return copySuccess;
  } catch {
    return false;
  } finally {
    document.removeEventListener("copy", onCopy, {
      capture: true
    });
  }
};
var asyncCopy = async (text, isHtmlFormat) => {
  try {
    if (isHtmlFormat) {
      await navigator.clipboard.write([new ClipboardItem({
        "text/html": new Blob([text], {
          type: "text/html"
        }),
        "text/plain": new Blob([text], {
          type: "text/plain"
        })
      })]);
    } else {
      await navigator.clipboard.writeText(text);
    }
    return true;
  } catch {
    return false;
  }
};
async function copy(text, config) {
  if (typeof text !== "string") {
    true ? warning_default(false, "The clipboard content must be of string type", "") : void 0;
    return false;
  }
  const isHtmlFormat = config?.format === "text/html";
  if (await asyncCopy(text, isHtmlFormat)) {
    return true;
  }
  if (execCopy(text, isHtmlFormat)) {
    return true;
  }
  return false;
}
var copy_default = copy;

// node_modules/antd/es/_util/toList.js
var toList = (candidate, skipEmpty = false) => {
  if (skipEmpty && !isNonNullable_default(candidate)) {
    return [];
  }
  return Array.isArray(candidate) ? candidate : [candidate];
};
var toList_default = toList;

// node_modules/antd/es/typography/hooks/useCopyClick.js
var useCopyClick = ({
  copyConfig,
  children
}) => {
  const [copied, setCopied] = React27.useState(false);
  const [copyLoading, setCopyLoading] = React27.useState(false);
  const copyIdRef = React27.useRef(null);
  const cleanCopyId = () => {
    if (copyIdRef.current) {
      clearTimeout(copyIdRef.current);
    }
  };
  const copyOptions = {};
  if (copyConfig.format) {
    copyOptions.format = copyConfig.format;
  }
  React27.useEffect(() => cleanCopyId, []);
  const onClick = useEvent_default(async (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCopyLoading(true);
    try {
      const text = typeof copyConfig.text === "function" ? await copyConfig.text() : copyConfig.text;
      await copy_default(text || toList_default(children, true).join("") || "", copyOptions);
      setCopyLoading(false);
      setCopied(true);
      cleanCopyId();
      copyIdRef.current = setTimeout(() => {
        setCopied(false);
      }, 3e3);
      copyConfig.onCopy?.(e);
    } catch (error) {
      setCopyLoading(false);
      throw error;
    }
  });
  return {
    copied,
    copyLoading,
    onClick
  };
};
var useCopyClick_default = useCopyClick;

// node_modules/antd/es/typography/hooks/useMergedConfig.js
var React28 = __toESM(require_react());
function useMergedConfig(propConfig, templateConfig) {
  return React28.useMemo(() => {
    const support = !!propConfig;
    return [support, {
      ...templateConfig,
      ...support && typeof propConfig === "object" ? propConfig : null
    }];
  }, [propConfig]);
}

// node_modules/antd/es/typography/hooks/usePrevious.js
var import_react21 = __toESM(require_react());
var usePrevious = (value) => {
  const ref = (0, import_react21.useRef)(void 0);
  (0, import_react21.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
};
var usePrevious_default = usePrevious;

// node_modules/antd/es/typography/hooks/useTooltipProps.js
var import_react22 = __toESM(require_react());
var useTooltipProps = (tooltip, editConfigText, children) => (0, import_react22.useMemo)(() => {
  if (tooltip === true) {
    return {
      title: editConfigText ?? children
    };
  }
  if ((0, import_react22.isValidElement)(tooltip)) {
    return {
      title: tooltip
    };
  }
  if (typeof tooltip === "object") {
    return {
      title: editConfigText ?? children,
      ...tooltip
    };
  }
  return {
    title: tooltip
  };
}, [tooltip, editConfigText, children]);
var useTooltipProps_default = useTooltipProps;

// node_modules/antd/es/typography/Base/CopyBtn.js
var React29 = __toESM(require_react());

// node_modules/antd/es/typography/Base/util.js
function toList2(val) {
  if (val === false) {
    return [false, false];
  }
  return Array.isArray(val) ? val : [val];
}
function getNode(dom, defaultNode, needDom) {
  if (dom === true || dom === void 0) {
    return defaultNode;
  }
  return dom || needDom && defaultNode;
}
function isEleEllipsis(ele) {
  const childDiv = document.createElement("em");
  ele.appendChild(childDiv);
  if (true) {
    childDiv.className = "ant-typography-css-ellipsis-content-measure";
  }
  const rect = ele.getBoundingClientRect();
  const childRect = childDiv.getBoundingClientRect();
  ele.removeChild(childDiv);
  return (
    // Horizontal out of range
    rect.left > childRect.left || childRect.right > rect.right || // Vertical out of range
    rect.top > childRect.top || childRect.bottom > rect.bottom
  );
}
var isValidText = (val) => ["string", "number"].includes(typeof val);

// node_modules/antd/es/typography/Base/CopyBtn.js
var CopyBtn = ({
  prefixCls,
  copied,
  locale,
  iconOnly,
  tooltips,
  icon,
  tabIndex,
  onCopy,
  loading: btnLoading
}) => {
  const tooltipNodes = toList2(tooltips);
  const iconNodes = toList2(icon);
  const {
    copied: copiedText,
    copy: copyText
  } = locale ?? {};
  const systemStr = copied ? copiedText : copyText;
  const copyTitle = getNode(tooltipNodes[copied ? 1 : 0], systemStr);
  const ariaLabel = typeof copyTitle === "string" ? copyTitle : systemStr;
  return React29.createElement(tooltip_default, {
    title: copyTitle
  }, React29.createElement("button", {
    type: "button",
    className: clsx(`${prefixCls}-copy`, {
      [`${prefixCls}-copy-success`]: copied,
      [`${prefixCls}-copy-icon-only`]: iconOnly
    }),
    onClick: onCopy,
    "aria-label": ariaLabel,
    tabIndex
  }, copied ? getNode(iconNodes[1], React29.createElement(CheckOutlined_default, null), true) : getNode(iconNodes[0], btnLoading ? React29.createElement(LoadingOutlined_default, null) : React29.createElement(CopyOutlined_default, null), true)));
};
var CopyBtn_default = CopyBtn;

// node_modules/antd/es/typography/Base/Ellipsis.js
var React30 = __toESM(require_react());
var MeasureText = React30.forwardRef(({
  style,
  children
}, ref) => {
  const spanRef = React30.useRef(null);
  React30.useImperativeHandle(ref, () => ({
    isExceed: () => {
      const span = spanRef.current;
      return span.scrollHeight > span.clientHeight;
    },
    getHeight: () => spanRef.current.clientHeight
  }));
  return React30.createElement("span", {
    "aria-hidden": true,
    ref: spanRef,
    style: {
      position: "fixed",
      display: "block",
      left: 0,
      top: 0,
      pointerEvents: "none",
      backgroundColor: "rgba(255, 0, 0, 0.65)",
      ...style
    }
  }, children);
});
var getNodesLen = (nodeList) => nodeList.reduce((totalLen, node) => totalLen + (isValidText(node) ? String(node).length : 1), 0);
function sliceNodes(nodeList, len) {
  let currLen = 0;
  const currentNodeList = [];
  for (let i = 0; i < nodeList.length; i += 1) {
    if (currLen === len) {
      return currentNodeList;
    }
    const node = nodeList[i];
    const canCut = isValidText(node);
    const nodeLen = canCut ? String(node).length : 1;
    const nextLen = currLen + nodeLen;
    if (nextLen > len) {
      const restLen = len - currLen;
      currentNodeList.push(String(node).slice(0, restLen));
      return currentNodeList;
    }
    currentNodeList.push(node);
    currLen = nextLen;
  }
  return nodeList;
}
var STATUS_MEASURE_NONE = 0;
var STATUS_MEASURE_PREPARE = 1;
var STATUS_MEASURE_START = 2;
var STATUS_MEASURE_NEED_ELLIPSIS = 3;
var STATUS_MEASURE_NO_NEED_ELLIPSIS = 4;
var lineClipStyle = {
  display: "-webkit-box",
  overflow: "hidden",
  WebkitBoxOrient: "vertical"
};
function EllipsisMeasure(props) {
  const {
    enableMeasure,
    width,
    text,
    children,
    rows,
    expanded,
    miscDeps,
    onEllipsis
  } = props;
  const nodeList = React30.useMemo(() => toArray(text), [text]);
  const nodeLen = React30.useMemo(() => getNodesLen(nodeList), [text]);
  const fullContent = React30.useMemo(() => children(nodeList, false), [text]);
  const [ellipsisCutIndex, setEllipsisCutIndex] = React30.useState(null);
  const cutMidRef = React30.useRef(null);
  const measureWhiteSpaceRef = React30.useRef(null);
  const needEllipsisRef = React30.useRef(null);
  const descRowsEllipsisRef = React30.useRef(null);
  const symbolRowEllipsisRef = React30.useRef(null);
  const [canEllipsis, setCanEllipsis] = React30.useState(false);
  const [needEllipsis, setNeedEllipsis] = React30.useState(STATUS_MEASURE_NONE);
  const [ellipsisHeight, setEllipsisHeight] = React30.useState(0);
  const [parentWhiteSpace, setParentWhiteSpace] = React30.useState(null);
  useLayoutEffect_default(() => {
    if (enableMeasure && width && nodeLen) {
      setNeedEllipsis(STATUS_MEASURE_PREPARE);
    } else {
      setNeedEllipsis(STATUS_MEASURE_NONE);
    }
  }, [width, text, rows, enableMeasure, nodeList]);
  useLayoutEffect_default(() => {
    if (needEllipsis === STATUS_MEASURE_PREPARE) {
      setNeedEllipsis(STATUS_MEASURE_START);
      const nextWhiteSpace = measureWhiteSpaceRef.current && getComputedStyle(measureWhiteSpaceRef.current).whiteSpace;
      setParentWhiteSpace(nextWhiteSpace);
    } else if (needEllipsis === STATUS_MEASURE_START) {
      const isOverflow = !!needEllipsisRef.current?.isExceed();
      setNeedEllipsis(isOverflow ? STATUS_MEASURE_NEED_ELLIPSIS : STATUS_MEASURE_NO_NEED_ELLIPSIS);
      setEllipsisCutIndex(isOverflow ? [0, nodeLen] : null);
      setCanEllipsis(isOverflow);
      const baseRowsEllipsisHeight = needEllipsisRef.current?.getHeight() || 0;
      const descRowsEllipsisHeight = rows === 1 ? 0 : descRowsEllipsisRef.current?.getHeight() || 0;
      const symbolRowEllipsisHeight = symbolRowEllipsisRef.current?.getHeight() || 0;
      const maxRowsHeight = Math.max(
        baseRowsEllipsisHeight,
        // height of rows with ellipsis
        descRowsEllipsisHeight + symbolRowEllipsisHeight
      );
      setEllipsisHeight(maxRowsHeight + 1);
      onEllipsis(isOverflow);
    }
  }, [needEllipsis]);
  const cutMidIndex = ellipsisCutIndex ? Math.ceil((ellipsisCutIndex[0] + ellipsisCutIndex[1]) / 2) : 0;
  useLayoutEffect_default(() => {
    const [minIndex, maxIndex] = ellipsisCutIndex || [0, 0];
    if (minIndex !== maxIndex) {
      const midHeight = cutMidRef.current?.getHeight() || 0;
      const isOverflow = midHeight > ellipsisHeight;
      let targetMidIndex = cutMidIndex;
      if (maxIndex - minIndex === 1) {
        targetMidIndex = isOverflow ? minIndex : maxIndex;
      }
      setEllipsisCutIndex(isOverflow ? [minIndex, targetMidIndex] : [targetMidIndex, maxIndex]);
    }
  }, [ellipsisCutIndex, cutMidIndex]);
  const finalContent = React30.useMemo(() => {
    if (!enableMeasure) {
      return children(nodeList, false);
    }
    if (needEllipsis !== STATUS_MEASURE_NEED_ELLIPSIS || !ellipsisCutIndex || ellipsisCutIndex[0] !== ellipsisCutIndex[1]) {
      const content = children(nodeList, false);
      if ([STATUS_MEASURE_NO_NEED_ELLIPSIS, STATUS_MEASURE_NONE].includes(needEllipsis)) {
        return content;
      }
      return React30.createElement("span", {
        style: {
          ...lineClipStyle,
          WebkitLineClamp: rows
        }
      }, content);
    }
    return children(expanded ? nodeList : sliceNodes(nodeList, ellipsisCutIndex[0]), canEllipsis);
  }, [expanded, needEllipsis, ellipsisCutIndex, nodeList].concat(_toConsumableArray(miscDeps)));
  const measureStyle = {
    width,
    margin: 0,
    padding: 0,
    whiteSpace: parentWhiteSpace === "nowrap" ? "normal" : "inherit"
  };
  return React30.createElement(React30.Fragment, null, finalContent, needEllipsis === STATUS_MEASURE_START && React30.createElement(React30.Fragment, null, React30.createElement(MeasureText, {
    style: {
      ...measureStyle,
      ...lineClipStyle,
      WebkitLineClamp: rows
    },
    ref: needEllipsisRef
  }, fullContent), React30.createElement(MeasureText, {
    style: {
      ...measureStyle,
      ...lineClipStyle,
      WebkitLineClamp: rows - 1
    },
    ref: descRowsEllipsisRef
  }, fullContent), React30.createElement(MeasureText, {
    style: {
      ...measureStyle,
      ...lineClipStyle,
      WebkitLineClamp: 1
    },
    ref: symbolRowEllipsisRef
  }, children([], true))), needEllipsis === STATUS_MEASURE_NEED_ELLIPSIS && ellipsisCutIndex && ellipsisCutIndex[0] !== ellipsisCutIndex[1] && React30.createElement(MeasureText, {
    style: {
      ...measureStyle,
      top: 400
    },
    ref: cutMidRef
  }, children(sliceNodes(nodeList, cutMidIndex), true)), needEllipsis === STATUS_MEASURE_PREPARE && React30.createElement("span", {
    style: {
      whiteSpace: "inherit"
    },
    ref: measureWhiteSpaceRef
  }));
}

// node_modules/antd/es/typography/Base/EllipsisTooltip.js
var React31 = __toESM(require_react());
var EllipsisTooltip = ({
  enableEllipsis,
  isEllipsis,
  children,
  tooltipProps
}) => {
  if (!tooltipProps?.title || !enableEllipsis) {
    return children;
  }
  return React31.createElement(tooltip_default, {
    open: isEllipsis ? void 0 : false,
    ...tooltipProps
  }, children);
};
if (true) {
  EllipsisTooltip.displayName = "EllipsisTooltip";
}
var EllipsisTooltip_default = EllipsisTooltip;

// node_modules/antd/es/typography/Base/index.js
function wrapperDecorations({
  mark,
  code,
  underline,
  delete: del,
  strong,
  keyboard,
  italic
}, content) {
  let currentContent = content;
  function wrap(tag, needed) {
    if (!needed) {
      return;
    }
    currentContent = React32.createElement(tag, {}, currentContent);
  }
  wrap("strong", strong);
  wrap("u", underline);
  wrap("del", del);
  wrap("code", code);
  wrap("mark", mark);
  wrap("kbd", keyboard);
  wrap("i", italic);
  return currentContent;
}
var ELLIPSIS_STR = "...";
var DECORATION_PROPS = ["delete", "mark", "code", "underline", "strong", "keyboard", "italic"];
var Base = React32.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    style,
    type,
    disabled,
    children,
    ellipsis,
    editable,
    copyable,
    component,
    title,
    ...restProps
  } = props;
  const {
    getPrefixCls,
    direction
  } = React32.useContext(ConfigContext);
  const [textLocale] = useLocale_default("Text");
  const typographyRef = React32.useRef(null);
  const editIconRef = React32.useRef(null);
  const prefixCls = getPrefixCls("typography", customizePrefixCls);
  const textProps = omit(restProps, DECORATION_PROPS);
  const [enableEdit, editConfig] = useMergedConfig(editable);
  const [editing, setEditing] = useControlledState(false, editConfig.editing);
  const {
    triggerType = ["icon"]
  } = editConfig;
  const triggerEdit = (edit) => {
    if (edit) {
      editConfig.onStart?.();
    }
    setEditing(edit);
  };
  const prevEditing = usePrevious_default(editing);
  useLayoutEffect_default(() => {
    if (!editing && prevEditing) {
      editIconRef.current?.focus();
    }
  }, [editing]);
  const onEditClick = (e) => {
    e?.preventDefault();
    triggerEdit(true);
  };
  const onEditChange = (value) => {
    editConfig.onChange?.(value);
    triggerEdit(false);
  };
  const onEditCancel = () => {
    editConfig.onCancel?.();
    triggerEdit(false);
  };
  const [enableCopy, copyConfig] = useMergedConfig(copyable);
  const {
    copied,
    copyLoading,
    onClick: onCopyClick
  } = useCopyClick_default({
    copyConfig,
    children
  });
  const [isLineClampSupport, setIsLineClampSupport] = React32.useState(false);
  const [isTextOverflowSupport, setIsTextOverflowSupport] = React32.useState(false);
  const [isJsEllipsis, setIsJsEllipsis] = React32.useState(false);
  const [isNativeEllipsis, setIsNativeEllipsis] = React32.useState(false);
  const [isNativeVisible, setIsNativeVisible] = React32.useState(true);
  const [enableEllipsis, ellipsisConfig] = useMergedConfig(ellipsis, {
    expandable: false,
    symbol: (isExpanded) => isExpanded ? textLocale?.collapse : textLocale?.expand
  });
  const [expanded, setExpanded] = useControlledState(ellipsisConfig.defaultExpanded || false, ellipsisConfig.expanded);
  const mergedEnableEllipsis = enableEllipsis && (!expanded || ellipsisConfig.expandable === "collapsible");
  const {
    rows = 1
  } = ellipsisConfig;
  const needMeasureEllipsis = React32.useMemo(() => (
    // Disable ellipsis
    mergedEnableEllipsis && // Provide suffix
    (ellipsisConfig.suffix !== void 0 || ellipsisConfig.onEllipsis || // Can't use css ellipsis since we need to provide the place for button
    ellipsisConfig.expandable || enableEdit || enableCopy)
  ), [mergedEnableEllipsis, ellipsisConfig, enableEdit, enableCopy]);
  useLayoutEffect_default(() => {
    if (enableEllipsis && !needMeasureEllipsis) {
      setIsLineClampSupport(isStyleSupport("webkitLineClamp"));
      setIsTextOverflowSupport(isStyleSupport("textOverflow"));
    }
  }, [needMeasureEllipsis, enableEllipsis]);
  const [cssEllipsis, setCssEllipsis] = React32.useState(mergedEnableEllipsis);
  const canUseCssEllipsis = React32.useMemo(() => {
    if (needMeasureEllipsis) {
      return false;
    }
    if (rows === 1) {
      return isTextOverflowSupport;
    }
    return isLineClampSupport;
  }, [needMeasureEllipsis, isTextOverflowSupport, isLineClampSupport]);
  useLayoutEffect_default(() => {
    setCssEllipsis(canUseCssEllipsis && mergedEnableEllipsis);
  }, [canUseCssEllipsis, mergedEnableEllipsis]);
  const isMergedEllipsis = mergedEnableEllipsis && (cssEllipsis ? isNativeEllipsis : isJsEllipsis);
  const cssTextOverflow = mergedEnableEllipsis && rows === 1 && cssEllipsis;
  const cssLineClamp = mergedEnableEllipsis && rows > 1 && cssEllipsis;
  const onExpandClick = (e, info) => {
    setExpanded(info.expanded);
    ellipsisConfig.onExpand?.(e, info);
  };
  const [ellipsisWidth, setEllipsisWidth] = React32.useState(0);
  const onResize = ({
    offsetWidth
  }) => {
    setEllipsisWidth(offsetWidth);
  };
  const onJsEllipsis = (jsEllipsis) => {
    setIsJsEllipsis(jsEllipsis);
    if (isJsEllipsis !== jsEllipsis) {
      ellipsisConfig.onEllipsis?.(jsEllipsis);
    }
  };
  React32.useEffect(() => {
    const textEle = typographyRef.current;
    if (enableEllipsis && cssEllipsis && textEle) {
      const currentEllipsis = isEleEllipsis(textEle);
      if (isNativeEllipsis !== currentEllipsis) {
        setIsNativeEllipsis(currentEllipsis);
      }
    }
  }, [enableEllipsis, cssEllipsis, children, cssLineClamp, isNativeVisible, ellipsisWidth]);
  React32.useEffect(() => {
    const textEle = typographyRef.current;
    if (typeof IntersectionObserver === "undefined" || !textEle || !cssEllipsis || !mergedEnableEllipsis) {
      return;
    }
    const observer = new IntersectionObserver(() => {
      setIsNativeVisible(!!textEle.offsetParent);
    });
    observer.observe(textEle);
    return () => {
      observer.disconnect();
    };
  }, [cssEllipsis, mergedEnableEllipsis]);
  const tooltipProps = useTooltipProps_default(ellipsisConfig.tooltip, editConfig.text, children);
  const topAriaLabel = React32.useMemo(() => {
    if (!enableEllipsis || cssEllipsis) {
      return void 0;
    }
    return [editConfig.text, children, title, tooltipProps.title].find(isValidText);
  }, [enableEllipsis, cssEllipsis, title, tooltipProps.title, isMergedEllipsis]);
  if (editing) {
    return React32.createElement(Editable_default, {
      value: editConfig.text ?? (typeof children === "string" ? children : ""),
      onSave: onEditChange,
      onCancel: onEditCancel,
      onEnd: editConfig.onEnd,
      prefixCls,
      className,
      style,
      direction,
      component,
      maxLength: editConfig.maxLength,
      autoSize: editConfig.autoSize,
      enterIcon: editConfig.enterIcon
    });
  }
  const renderExpand = () => {
    const {
      expandable,
      symbol
    } = ellipsisConfig;
    return expandable ? React32.createElement("button", {
      type: "button",
      key: "expand",
      className: `${prefixCls}-${expanded ? "collapse" : "expand"}`,
      onClick: (e) => onExpandClick(e, {
        expanded: !expanded
      }),
      "aria-label": expanded ? textLocale.collapse : textLocale?.expand
    }, typeof symbol === "function" ? symbol(expanded) : symbol) : null;
  };
  const renderEdit = () => {
    if (!enableEdit) {
      return;
    }
    const {
      icon,
      tooltip,
      tabIndex
    } = editConfig;
    const editTitle = toArray(tooltip)[0] || textLocale?.edit;
    const ariaLabel = typeof editTitle === "string" ? editTitle : "";
    return triggerType.includes("icon") ? React32.createElement(tooltip_default, {
      key: "edit",
      title: tooltip === false ? "" : editTitle
    }, React32.createElement("button", {
      type: "button",
      ref: editIconRef,
      className: `${prefixCls}-edit`,
      onClick: onEditClick,
      "aria-label": ariaLabel,
      tabIndex
    }, icon || React32.createElement(EditOutlined_default, {
      role: "button"
    }))) : null;
  };
  const renderCopy = () => {
    if (!enableCopy) {
      return null;
    }
    return React32.createElement(CopyBtn_default, {
      key: "copy",
      ...copyConfig,
      prefixCls,
      copied,
      locale: textLocale,
      onCopy: onCopyClick,
      loading: copyLoading,
      iconOnly: !isNonNullable_default(children)
    });
  };
  const renderOperations = (canEllipsis) => [canEllipsis && renderExpand(), renderEdit(), renderCopy()];
  const renderEllipsis = (canEllipsis) => [canEllipsis && !expanded && React32.createElement("span", {
    "aria-hidden": true,
    key: "ellipsis"
  }, ELLIPSIS_STR), ellipsisConfig.suffix, renderOperations(canEllipsis)];
  return React32.createElement(es_default, {
    onResize,
    disabled: !mergedEnableEllipsis
  }, (resizeRef) => React32.createElement(EllipsisTooltip_default, {
    tooltipProps,
    enableEllipsis: mergedEnableEllipsis,
    isEllipsis: isMergedEllipsis
  }, React32.createElement(Typography_default, {
    className: clsx({
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-ellipsis`]: enableEllipsis,
      [`${prefixCls}-ellipsis-single-line`]: cssTextOverflow,
      [`${prefixCls}-ellipsis-multiple-line`]: cssLineClamp,
      [`${prefixCls}-link`]: component === "a"
    }, className),
    prefixCls: customizePrefixCls,
    style: {
      ...style,
      WebkitLineClamp: cssLineClamp ? rows : void 0
    },
    component,
    ref: composeRef(resizeRef, typographyRef, ref),
    direction,
    onClick: triggerType.includes("text") ? onEditClick : void 0,
    "aria-label": topAriaLabel?.toString(),
    title,
    ...textProps
  }, React32.createElement(EllipsisMeasure, {
    enableMeasure: mergedEnableEllipsis && !cssEllipsis,
    text: children,
    rows,
    width: ellipsisWidth,
    onEllipsis: onJsEllipsis,
    expanded,
    miscDeps: [copied, expanded, copyLoading, enableEdit, enableCopy, textLocale].concat(_toConsumableArray(DECORATION_PROPS.map((key) => props[key])))
  }, (node, canEllipsis) => wrapperDecorations(props, React32.createElement(React32.Fragment, null, node.length > 0 && canEllipsis && !expanded && topAriaLabel ? React32.createElement("span", {
    key: "show-content",
    "aria-hidden": true
  }, node) : node, renderEllipsis(canEllipsis)))))));
});
var Base_default = Base;

export {
  useCompactItemContext,
  Compact_default,
  Color,
  ColorBlock_default,
  es_default4 as es_default,
  toHexFormat,
  AggregationColor,
  generateColor2 as generateColor,
  getRoundNumber2 as getRoundNumber,
  getColorAlpha,
  genAlphaColor,
  getGradientPercentColor,
  genCompactItemStyle,
  ContextIsolator_default,
  canUseDocElement,
  getStatusClassNames,
  getMergedStatus,
  Popup_default,
  getArrowToken,
  genRoundedArrow,
  MAX_VERTICAL_CONTENT_RADIUS,
  getArrowOffsetToken,
  placementArrow_default,
  getPlacements,
  useMergedArrow_default,
  isPresetColor,
  isPresetStatusColor,
  tooltip_default,
  initInputToken,
  initComponentToken,
  genDisabledStyle,
  genBaseOutlinedStyle,
  genOutlinedStyle,
  genBorderlessStyle,
  genFilledStyle,
  genUnderlinedStyle,
  genPlaceholderStyle,
  genInputLargeStyle,
  genInputSmallStyle,
  genBasicInputStyle,
  style_default3 as style_default,
  BaseInput_default,
  getAllowClear_default,
  useRemovePasswordTimeout,
  Input_default2 as Input_default,
  es_default6 as es_default2,
  TextArea_default2 as TextArea_default,
  toList_default,
  Typography_default,
  Base_default
};
//# sourceMappingURL=chunk-L4SS7JHA.js.map
