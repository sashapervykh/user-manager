import {
  BarsOutlined_default,
  LeftOutlined_default,
  RightOutlined_default
} from "./chunk-XD5CQT5C.js";
import {
  ConfigContext,
  _toConsumableArray,
  genStyleHooks,
  omit,
  toArray,
  unit,
  useComponentConfig
} from "./chunk-LABRJ26G.js";
import {
  clsx
} from "./chunk-HZ3DMHMG.js";
import {
  __toESM,
  require_react
} from "./chunk-G4V7ITBN.js";

// node_modules/antd/es/layout/layout.js
var React3 = __toESM(require_react());

// node_modules/antd/es/layout/context.js
var React = __toESM(require_react());
var LayoutContext = React.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});

// node_modules/antd/es/layout/Sider.js
var React2 = __toESM(require_react());
var import_react = __toESM(require_react());

// node_modules/antd/es/layout/style/index.js
var genLayoutStyle = (token) => {
  const {
    antCls,
    // .ant
    componentCls,
    // .ant-layout
    colorText,
    footerBg,
    headerHeight,
    headerPadding,
    headerColor,
    footerPadding,
    fontSize,
    bodyBg,
    headerBg
  } = token;
  return {
    [componentCls]: {
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: bodyBg,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${componentCls}-has-sider`]: {
        flexDirection: "row",
        [`> ${componentCls}, > ${componentCls}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${componentCls}-header, &${componentCls}-footer`]: {
        flex: "0 0 auto"
      },
      // RTL
      "&-rtl": {
        direction: "rtl"
      }
    },
    // ==================== Header ====================
    [`${componentCls}-header`]: {
      height: headerHeight,
      padding: headerPadding,
      color: headerColor,
      lineHeight: unit(headerHeight),
      background: headerBg,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${antCls}-menu`]: {
        lineHeight: "inherit"
      }
    },
    // ==================== Footer ====================
    [`${componentCls}-footer`]: {
      padding: footerPadding,
      color: colorText,
      fontSize,
      background: footerBg
    },
    // =================== Content ====================
    [`${componentCls}-content`]: {
      flex: "auto",
      color: colorText,
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
};
var prepareComponentToken = (token) => {
  const {
    colorBgLayout,
    controlHeight,
    controlHeightLG,
    colorText,
    controlHeightSM,
    marginXXS,
    colorTextLightSolid,
    colorBgContainer
  } = token;
  const paddingInline = controlHeightLG * 1.25;
  return {
    // Deprecated
    colorBgHeader: "#001529",
    colorBgBody: colorBgLayout,
    colorBgTrigger: "#002140",
    bodyBg: colorBgLayout,
    headerBg: "#001529",
    headerHeight: controlHeight * 2,
    headerPadding: `0 ${paddingInline}px`,
    headerColor: colorText,
    footerPadding: `${controlHeightSM}px ${paddingInline}px`,
    footerBg: colorBgLayout,
    siderBg: "#001529",
    triggerHeight: controlHeightLG + marginXXS * 2,
    triggerBg: "#002140",
    triggerColor: colorTextLightSolid,
    zeroTriggerWidth: controlHeightLG,
    zeroTriggerHeight: controlHeightLG,
    lightSiderBg: colorBgContainer,
    lightTriggerBg: colorBgContainer,
    lightTriggerColor: colorText
  };
};
var DEPRECATED_TOKENS = [["colorBgBody", "bodyBg"], ["colorBgHeader", "headerBg"], ["colorBgTrigger", "triggerBg"]];
var style_default = genStyleHooks("Layout", genLayoutStyle, prepareComponentToken, {
  deprecatedTokens: DEPRECATED_TOKENS
});

// node_modules/antd/es/layout/style/sider.js
var genSiderStyle = (token) => {
  const {
    componentCls,
    siderBg,
    motionDurationMid,
    motionDurationSlow,
    antCls,
    triggerHeight,
    triggerColor,
    triggerBg,
    headerHeight,
    zeroTriggerWidth,
    zeroTriggerHeight,
    borderRadiusLG,
    lightSiderBg,
    lightTriggerColor,
    lightTriggerBg,
    bodyBg
  } = token;
  return {
    [componentCls]: {
      position: "relative",
      // fix firefox can't set width smaller than content on flex item
      minWidth: 0,
      background: siderBg,
      transition: `all ${motionDurationMid}, background 0s`,
      "&-has-trigger": {
        paddingBottom: triggerHeight
      },
      "&-right": {
        order: 1
      },
      [`${componentCls}-children`]: {
        height: "100%",
        // Hack for fixing margin collapse bug
        // https://github.com/ant-design/ant-design/issues/7967
        // solution from https://stackoverflow.com/a/33132624/3040605
        marginTop: -0.1,
        paddingTop: 0.1,
        [`${antCls}-menu${antCls}-menu-inline-collapsed`]: {
          width: "auto"
        }
      },
      [`&-zero-width ${componentCls}-children`]: {
        overflow: "hidden"
      },
      [`${componentCls}-trigger`]: {
        position: "fixed",
        bottom: 0,
        zIndex: 1,
        height: triggerHeight,
        color: triggerColor,
        lineHeight: unit(triggerHeight),
        textAlign: "center",
        background: triggerBg,
        cursor: "pointer",
        transition: `all ${motionDurationMid}`
      },
      [`${componentCls}-zero-width-trigger`]: {
        position: "absolute",
        top: headerHeight,
        insetInlineEnd: token.calc(zeroTriggerWidth).mul(-1).equal(),
        zIndex: 1,
        width: zeroTriggerWidth,
        height: zeroTriggerHeight,
        color: triggerColor,
        fontSize: token.fontSizeXL,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: siderBg,
        borderRadius: `0 ${unit(borderRadiusLG)} ${unit(borderRadiusLG)} 0`,
        cursor: "pointer",
        transition: `background-color ${motionDurationSlow} ease`,
        "&::after": {
          position: "absolute",
          inset: 0,
          background: "transparent",
          transition: `all ${motionDurationSlow}`,
          content: '""'
        },
        "&:hover::after": {
          background: `rgba(255, 255, 255, 0.2)`
        },
        "&-right": {
          insetInlineStart: token.calc(zeroTriggerWidth).mul(-1).equal(),
          borderRadius: `${unit(borderRadiusLG)} 0 0 ${unit(borderRadiusLG)}`
        }
      },
      // Light
      "&-light": {
        background: lightSiderBg,
        [`${componentCls}-trigger`]: {
          color: lightTriggerColor,
          background: lightTriggerBg
        },
        [`${componentCls}-zero-width-trigger`]: {
          color: lightTriggerColor,
          background: lightTriggerBg,
          border: `1px solid ${bodyBg}`,
          // Safe to modify to any other color
          borderInlineStart: 0
        }
      }
    }
  };
};
var sider_default = genStyleHooks(["Layout", "Sider"], genSiderStyle, prepareComponentToken, {
  deprecatedTokens: DEPRECATED_TOKENS
});

// node_modules/antd/es/layout/Sider.js
var dimensionMaxMap = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
};
var isNumeric = (val) => !Number.isNaN(Number.parseFloat(val)) && Number.isFinite(Number(val));
var SiderContext = React2.createContext({});
var generateId = /* @__PURE__ */ (() => {
  let i = 0;
  return (prefix = "") => {
    i += 1;
    return `${prefix}${i}`;
  };
})();
var Sider = React2.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    trigger,
    children,
    defaultCollapsed = false,
    theme = "dark",
    style = {},
    collapsible = false,
    reverseArrow = false,
    width = 200,
    collapsedWidth = 80,
    zeroWidthTriggerStyle,
    breakpoint,
    onCollapse,
    onBreakpoint,
    ...otherProps
  } = props;
  const {
    siderHook
  } = (0, import_react.useContext)(LayoutContext);
  const [collapsed, setCollapsed] = (0, import_react.useState)("collapsed" in props ? props.collapsed : defaultCollapsed);
  const [below, setBelow] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if ("collapsed" in props) {
      setCollapsed(props.collapsed);
    }
  }, [props.collapsed]);
  const handleSetCollapsed = (value, type) => {
    if (!("collapsed" in props)) {
      setCollapsed(value);
    }
    onCollapse?.(value, type);
  };
  const {
    getPrefixCls,
    direction
  } = (0, import_react.useContext)(ConfigContext);
  const prefixCls = getPrefixCls("layout-sider", customizePrefixCls);
  const [hashId, cssVarCls] = sider_default(prefixCls);
  const responsiveHandlerRef = (0, import_react.useRef)(null);
  responsiveHandlerRef.current = (mql) => {
    setBelow(mql.matches);
    onBreakpoint?.(mql.matches);
    if (collapsed !== mql.matches) {
      handleSetCollapsed(mql.matches, "responsive");
    }
  };
  (0, import_react.useEffect)(() => {
    function responsiveHandler(mql2) {
      return responsiveHandlerRef.current?.(mql2);
    }
    let mql;
    if (typeof window?.matchMedia !== "undefined" && breakpoint && breakpoint in dimensionMaxMap) {
      mql = window.matchMedia(`screen and (max-width: ${dimensionMaxMap[breakpoint]})`);
      if (typeof mql?.addEventListener === "function") {
        mql.addEventListener("change", responsiveHandler);
      }
      responsiveHandler(mql);
    }
    return () => {
      if (typeof mql?.removeEventListener === "function") {
        mql.removeEventListener("change", responsiveHandler);
      }
    };
  }, [breakpoint]);
  (0, import_react.useEffect)(() => {
    const uniqueId = generateId("ant-sider-");
    siderHook.addSider(uniqueId);
    return () => siderHook.removeSider(uniqueId);
  }, []);
  const toggle = () => {
    handleSetCollapsed(!collapsed, "clickTrigger");
  };
  const divProps = omit(otherProps, ["collapsed"]);
  const rawWidth = collapsed ? collapsedWidth : width;
  const siderWidth = isNumeric(rawWidth) ? `${rawWidth}px` : String(rawWidth);
  const zeroWidthTrigger = Number.parseFloat(String(collapsedWidth || 0)) === 0 ? React2.createElement("span", {
    onClick: toggle,
    className: clsx(`${prefixCls}-zero-width-trigger`, `${prefixCls}-zero-width-trigger-${reverseArrow ? "right" : "left"}`),
    style: zeroWidthTriggerStyle
  }, trigger || React2.createElement(BarsOutlined_default, null)) : null;
  const reverseIcon = direction === "rtl" === !reverseArrow;
  const iconObj = {
    expanded: reverseIcon ? React2.createElement(RightOutlined_default, null) : React2.createElement(LeftOutlined_default, null),
    collapsed: reverseIcon ? React2.createElement(LeftOutlined_default, null) : React2.createElement(RightOutlined_default, null)
  };
  const status = collapsed ? "collapsed" : "expanded";
  const defaultTrigger = iconObj[status];
  const triggerDom = trigger !== null ? zeroWidthTrigger || React2.createElement("div", {
    className: `${prefixCls}-trigger`,
    onClick: toggle,
    style: {
      width: siderWidth
    }
  }, trigger || defaultTrigger) : null;
  const divStyle = {
    ...style,
    flex: `0 0 ${siderWidth}`,
    maxWidth: siderWidth,
    // Fix width transition bug in IE11
    minWidth: siderWidth,
    // https://github.com/ant-design/ant-design/issues/6349
    width: siderWidth
  };
  const siderCls = clsx(prefixCls, `${prefixCls}-${theme}`, {
    [`${prefixCls}-collapsed`]: !!collapsed,
    [`${prefixCls}-has-trigger`]: collapsible && trigger !== null && !zeroWidthTrigger,
    [`${prefixCls}-below`]: !!below,
    [`${prefixCls}-zero-width`]: Number.parseFloat(siderWidth) === 0
  }, className, hashId, cssVarCls);
  const contextValue = React2.useMemo(() => ({
    siderCollapsed: collapsed
  }), [collapsed]);
  return React2.createElement(SiderContext.Provider, {
    value: contextValue
  }, React2.createElement("aside", {
    className: siderCls,
    ...divProps,
    style: divStyle,
    ref
  }, React2.createElement("div", {
    className: `${prefixCls}-children`
  }, children), collapsible || below && zeroWidthTrigger ? triggerDom : null));
});
if (true) {
  Sider.displayName = "Sider";
}
var Sider_default = Sider;

// node_modules/antd/es/layout/hooks/useHasSider.js
function useHasSider(siders, children, hasSider) {
  if (typeof hasSider === "boolean") {
    return hasSider;
  }
  if (siders.length) {
    return true;
  }
  const childNodes = toArray(children);
  return childNodes.some((node) => node.type === Sider_default);
}

// node_modules/antd/es/layout/layout.js
var generator = ({
  suffixCls,
  tagName,
  displayName
}) => {
  return (Component) => {
    const Adapter = React3.forwardRef((props, ref) => React3.createElement(Component, {
      ref,
      suffixCls,
      tagName,
      ...props
    }));
    if (true) {
      Adapter.displayName = displayName;
    }
    return Adapter;
  };
};
var Basic = React3.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    suffixCls,
    className,
    tagName: TagName,
    ...others
  } = props;
  const {
    getPrefixCls
  } = React3.useContext(ConfigContext);
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const [hashId] = style_default(prefixCls);
  const prefixWithSuffixCls = suffixCls ? `${prefixCls}-${suffixCls}` : prefixCls;
  return React3.createElement(TagName, {
    className: clsx(customizePrefixCls || prefixWithSuffixCls, className, hashId),
    ref,
    ...others
  });
});
var BasicLayout = React3.forwardRef((props, ref) => {
  const {
    direction
  } = React3.useContext(ConfigContext);
  const [siders, setSiders] = React3.useState([]);
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    children,
    hasSider,
    tagName: Tag,
    style,
    ...others
  } = props;
  const passedProps = omit(others, ["suffixCls"]);
  const {
    getPrefixCls,
    className: contextClassName,
    style: contextStyle
  } = useComponentConfig("layout");
  const prefixCls = getPrefixCls("layout", customizePrefixCls);
  const mergedHasSider = useHasSider(siders, children, hasSider);
  const [hashId, cssVarCls] = style_default(prefixCls);
  const classString = clsx(prefixCls, {
    [`${prefixCls}-has-sider`]: mergedHasSider,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, contextClassName, className, rootClassName, hashId, cssVarCls);
  const contextValue = React3.useMemo(() => ({
    siderHook: {
      addSider: (id) => {
        setSiders((prev) => [].concat(_toConsumableArray(prev), [id]));
      },
      removeSider: (id) => {
        setSiders((prev) => prev.filter((currentId) => currentId !== id));
      }
    }
  }), []);
  return React3.createElement(LayoutContext.Provider, {
    value: contextValue
  }, React3.createElement(Tag, {
    ref,
    className: classString,
    style: {
      ...contextStyle,
      ...style
    },
    ...passedProps
  }, children));
});
var Layout = generator({
  tagName: "div",
  displayName: "Layout"
})(BasicLayout);
var Header = generator({
  suffixCls: "header",
  tagName: "header",
  displayName: "Header"
})(Basic);
var Footer = generator({
  suffixCls: "footer",
  tagName: "footer",
  displayName: "Footer"
})(Basic);
var Content = generator({
  suffixCls: "content",
  tagName: "main",
  displayName: "Content"
})(Basic);
var layout_default = Layout;

export {
  SiderContext,
  Sider_default,
  Header,
  Footer,
  Content,
  layout_default
};
//# sourceMappingURL=chunk-T7VC7ZWF.js.map
