import {
  EllipsisOutlined_default,
  PlusOutlined_default
} from "./chunk-IYSGSOCH.js";
import {
  KeyCode_default,
  getFocusNodeList,
  getTransitionName,
  initSlideMotion,
  useCSSVarCls_default,
  useMergeSemantic,
  useSize_default,
  useVariants_default
} from "./chunk-7YRFXPLL.js";
import {
  CloseOutlined_default
} from "./chunk-2LIZECPH.js";
import {
  ConfigContext,
  Keyframes_default,
  clearFix,
  devUseWarning,
  es_default,
  es_default2,
  es_default4 as es_default3,
  genFocusOutline,
  genFocusStyle,
  genStyleHooks,
  isEqual_default,
  merge2 as merge,
  omit,
  raf_default,
  resetComponent,
  textEllipsis,
  toArray,
  unit,
  useComponentConfig,
  useControlledState,
  useEvent_default,
  useId_default,
  useLayoutEffect_default,
  useLayoutUpdateEffect
} from "./chunk-LABRJ26G.js";
import {
  require_react_dom
} from "./chunk-NOSD3EBE.js";
import {
  clsx,
  composeRef,
  getNodeRef,
  supportRef,
  useComposeRef,
  useMemo,
  warning_default
} from "./chunk-HZ3DMHMG.js";
import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-G4V7ITBN.js";

// node_modules/is-mobile/index.js
var require_is_mobile = __commonJS({
  "node_modules/is-mobile/index.js"(exports, module) {
    "use strict";
    module.exports = isMobile2;
    module.exports.isMobile = isMobile2;
    module.exports.default = isMobile2;
    var mobileRE = /(android|bb\d+|meego).+mobile|armv7l|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|redmi|series[46]0|samsungbrowser.*mobile|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i;
    var notMobileRE = /CrOS/;
    var tabletRE = /android|ipad|playbook|silk/i;
    function isMobile2(opts) {
      if (!opts) opts = {};
      let ua = opts.ua;
      if (!ua && typeof navigator !== "undefined") ua = navigator.userAgent;
      if (ua && ua.headers && typeof ua.headers["user-agent"] === "string") {
        ua = ua.headers["user-agent"];
      }
      if (typeof ua !== "string") return false;
      let result = mobileRE.test(ua) && !notMobileRE.test(ua) || !!opts.tablet && tabletRE.test(ua);
      if (!result && opts.tablet && opts.featureDetect && navigator && navigator.maxTouchPoints > 1 && ua.indexOf("Macintosh") !== -1 && ua.indexOf("Safari") !== -1) {
        result = true;
      }
      return result;
    }
  }
});

// node_modules/antd/es/card/Card.js
var React53 = __toESM(require_react());

// node_modules/antd/es/skeleton/Skeleton.js
var React9 = __toESM(require_react());

// node_modules/antd/es/skeleton/Avatar.js
var React2 = __toESM(require_react());

// node_modules/antd/es/skeleton/Element.js
var React = __toESM(require_react());
var Element = (props) => {
  const {
    prefixCls,
    className,
    style,
    size,
    shape
  } = props;
  const sizeCls = clsx({
    [`${prefixCls}-lg`]: size === "large",
    [`${prefixCls}-sm`]: size === "small"
  });
  const shapeCls = clsx({
    [`${prefixCls}-circle`]: shape === "circle",
    [`${prefixCls}-square`]: shape === "square",
    [`${prefixCls}-round`]: shape === "round"
  });
  const sizeStyle = React.useMemo(() => typeof size === "number" ? {
    width: size,
    height: size,
    lineHeight: `${size}px`
  } : {}, [size]);
  return React.createElement("span", {
    className: clsx(prefixCls, sizeCls, shapeCls, className),
    style: {
      ...sizeStyle,
      ...style
    }
  });
};
var Element_default = Element;

// node_modules/antd/es/skeleton/style/index.js
var skeletonClsLoading = new Keyframes_default(`ant-skeleton-loading`, {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
});
var genSkeletonElementCommonSize = (size) => ({
  height: size,
  lineHeight: unit(size)
});
var genSkeletonElementSize = (size) => ({
  width: size,
  ...genSkeletonElementCommonSize(size)
});
var genSkeletonColor = (token) => ({
  background: token.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: skeletonClsLoading,
  animationDuration: token.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
});
var genSkeletonElementInputSize = (size, calc) => ({
  width: calc(size).mul(5).equal(),
  minWidth: calc(size).mul(5).equal(),
  ...genSkeletonElementCommonSize(size)
});
var genSkeletonElementAvatar = (token) => {
  const {
    skeletonAvatarCls,
    gradientFromColor,
    controlHeight,
    controlHeightLG,
    controlHeightSM
  } = token;
  return {
    [skeletonAvatarCls]: {
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      ...genSkeletonElementSize(controlHeight)
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-circle`]: {
      borderRadius: "50%"
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-lg`]: {
      ...genSkeletonElementSize(controlHeightLG)
    },
    [`${skeletonAvatarCls}${skeletonAvatarCls}-sm`]: {
      ...genSkeletonElementSize(controlHeightSM)
    }
  };
};
var genSkeletonElementInput = (token) => {
  const {
    controlHeight,
    borderRadiusSM,
    skeletonInputCls,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return {
    [skeletonInputCls]: {
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      ...genSkeletonElementInputSize(controlHeight, calc)
    },
    [`${skeletonInputCls}-lg`]: {
      ...genSkeletonElementInputSize(controlHeightLG, calc)
    },
    [`${skeletonInputCls}-sm`]: {
      ...genSkeletonElementInputSize(controlHeightSM, calc)
    }
  };
};
var genSkeletonElementShape = (token) => {
  const {
    gradientFromColor,
    borderRadiusSM,
    imageSizeBase,
    calc
  } = token;
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    background: gradientFromColor,
    borderRadius: borderRadiusSM,
    ...genSkeletonElementSize(calc(imageSizeBase).mul(2).equal())
  };
};
var genSkeletonElementNode = (token) => {
  return {
    [token.skeletonNodeCls]: {
      ...genSkeletonElementShape(token)
    }
  };
};
var genSkeletonElementImage = (token) => {
  const {
    skeletonImageCls,
    imageSizeBase,
    calc
  } = token;
  return {
    [skeletonImageCls]: {
      ...genSkeletonElementShape(token),
      [`${skeletonImageCls}-path`]: {
        fill: "#bfbfbf"
      },
      [`${skeletonImageCls}-svg`]: {
        ...genSkeletonElementSize(imageSizeBase),
        maxWidth: calc(imageSizeBase).mul(4).equal(),
        maxHeight: calc(imageSizeBase).mul(4).equal()
      },
      [`${skeletonImageCls}-svg${skeletonImageCls}-svg-circle`]: {
        borderRadius: "50%"
      }
    },
    [`${skeletonImageCls}${skeletonImageCls}-circle`]: {
      borderRadius: "50%"
    }
  };
};
var genSkeletonElementButtonShape = (token, size, buttonCls) => {
  const {
    skeletonButtonCls
  } = token;
  return {
    [`${buttonCls}${skeletonButtonCls}-circle`]: {
      width: size,
      minWidth: size,
      borderRadius: "50%"
    },
    [`${buttonCls}${skeletonButtonCls}-round`]: {
      borderRadius: size
    }
  };
};
var genSkeletonElementButtonSize = (size, calc) => ({
  width: calc(size).mul(2).equal(),
  minWidth: calc(size).mul(2).equal(),
  ...genSkeletonElementCommonSize(size)
});
var genSkeletonElementButton = (token) => {
  const {
    borderRadiusSM,
    skeletonButtonCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return {
    [skeletonButtonCls]: {
      display: "inline-block",
      verticalAlign: "top",
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      width: calc(controlHeight).mul(2).equal(),
      minWidth: calc(controlHeight).mul(2).equal(),
      ...genSkeletonElementButtonSize(controlHeight, calc)
    },
    ...genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls),
    [`${skeletonButtonCls}-lg`]: {
      ...genSkeletonElementButtonSize(controlHeightLG, calc)
    },
    ...genSkeletonElementButtonShape(token, controlHeightLG, `${skeletonButtonCls}-lg`),
    [`${skeletonButtonCls}-sm`]: {
      ...genSkeletonElementButtonSize(controlHeightSM, calc)
    },
    ...genSkeletonElementButtonShape(token, controlHeightSM, `${skeletonButtonCls}-sm`)
  };
};
var genBaseStyle = (token) => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonNodeCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    padding,
    marginSM,
    borderRadius,
    titleHeight,
    blockRadius,
    paragraphLiHeight,
    controlHeightXS,
    paragraphMarginTop
  } = token;
  return {
    [componentCls]: {
      display: "table",
      width: "100%",
      [`${componentCls}-header`]: {
        display: "table-cell",
        paddingInlineEnd: padding,
        verticalAlign: "top",
        // Avatar
        [skeletonAvatarCls]: {
          display: "inline-block",
          verticalAlign: "top",
          background: gradientFromColor,
          ...genSkeletonElementSize(controlHeight)
        },
        [`${skeletonAvatarCls}-circle`]: {
          borderRadius: "50%"
        },
        [`${skeletonAvatarCls}-lg`]: {
          ...genSkeletonElementSize(controlHeightLG)
        },
        [`${skeletonAvatarCls}-sm`]: {
          ...genSkeletonElementSize(controlHeightSM)
        }
      },
      [`${componentCls}-section`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [skeletonTitleCls]: {
          width: "100%",
          height: titleHeight,
          background: gradientFromColor,
          borderRadius: blockRadius,
          [`+ ${skeletonParagraphCls}`]: {
            marginBlockStart: controlHeightSM
          }
        },
        // paragraph
        [skeletonParagraphCls]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: paragraphLiHeight,
            listStyle: "none",
            background: gradientFromColor,
            borderRadius: blockRadius,
            "+ li": {
              marginBlockStart: controlHeightXS
            }
          }
        },
        [`${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${componentCls}-section`]: {
        [`${skeletonTitleCls}, ${skeletonParagraphCls} > li`]: {
          borderRadius
        }
      }
    },
    [`${componentCls}-with-avatar ${componentCls}-section`]: {
      // Title
      [skeletonTitleCls]: {
        marginBlockStart: marginSM,
        [`+ ${skeletonParagraphCls}`]: {
          marginBlockStart: paragraphMarginTop
        }
      }
    },
    // Skeleton with element
    [`${componentCls}${componentCls}-element`]: {
      display: "inline-block",
      width: "auto",
      ...genSkeletonElementButton(token),
      ...genSkeletonElementAvatar(token),
      ...genSkeletonElementInput(token),
      ...genSkeletonElementNode(token),
      ...genSkeletonElementImage(token)
    },
    // Skeleton Block Button, Input
    [`${componentCls}${componentCls}-block`]: {
      width: "100%",
      [skeletonButtonCls]: {
        width: "100%"
      },
      [skeletonInputCls]: {
        width: "100%"
      }
    },
    // With active animation
    [`${componentCls}${componentCls}-active`]: {
      [`
        ${skeletonTitleCls},
        ${skeletonParagraphCls} > li,
        ${skeletonAvatarCls},
        ${skeletonButtonCls},
        ${skeletonInputCls},
        ${skeletonNodeCls},
        ${skeletonImageCls}
      `]: {
        ...genSkeletonColor(token)
      }
    }
  };
};
var prepareComponentToken = (token) => {
  const {
    colorFillContent,
    colorFill
  } = token;
  const gradientFromColor = colorFillContent;
  const gradientToColor = colorFill;
  return {
    color: gradientFromColor,
    colorGradientEnd: gradientToColor,
    gradientFromColor,
    gradientToColor,
    titleHeight: token.controlHeight / 2,
    blockRadius: token.borderRadiusSM,
    paragraphMarginTop: token.marginLG + token.marginXXS,
    paragraphLiHeight: token.controlHeight / 2
  };
};
var style_default = genStyleHooks("Skeleton", (token) => {
  const {
    componentCls,
    calc
  } = token;
  const skeletonToken = merge(token, {
    skeletonAvatarCls: `${componentCls}-avatar`,
    skeletonTitleCls: `${componentCls}-title`,
    skeletonParagraphCls: `${componentCls}-paragraph`,
    skeletonButtonCls: `${componentCls}-button`,
    skeletonInputCls: `${componentCls}-input`,
    skeletonNodeCls: `${componentCls}-node`,
    skeletonImageCls: `${componentCls}-image`,
    imageSizeBase: calc(token.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${token.gradientFromColor} 25%, ${token.gradientToColor} 37%, ${token.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return genBaseStyle(skeletonToken);
}, prepareComponentToken, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
});

// node_modules/antd/es/skeleton/Avatar.js
var SkeletonAvatar = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    classNames,
    rootClassName,
    active,
    style,
    styles,
    shape = "circle",
    size = "default",
    ...rest
  } = props;
  const {
    getPrefixCls
  } = React2.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = style_default(prefixCls);
  const cls = clsx(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, classNames?.root, className, rootClassName, hashId, cssVarCls);
  return React2.createElement("div", {
    className: cls,
    style: styles?.root
  }, React2.createElement(Element_default, {
    prefixCls: `${prefixCls}-avatar`,
    className: classNames?.content,
    style: {
      ...styles?.content,
      ...style
    },
    shape,
    size,
    ...rest
  }));
};
var Avatar_default = SkeletonAvatar;

// node_modules/antd/es/skeleton/Button.js
var React3 = __toESM(require_react());
var SkeletonButton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    classNames,
    active,
    style,
    styles,
    block = false,
    size = "default",
    ...rest
  } = props;
  const {
    getPrefixCls
  } = React3.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = style_default(prefixCls);
  const cls = clsx(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, classNames?.root, className, rootClassName, hashId, cssVarCls);
  return React3.createElement("div", {
    className: cls,
    style: styles?.root
  }, React3.createElement(Element_default, {
    prefixCls: `${prefixCls}-button`,
    className: classNames?.content,
    style: {
      ...styles?.content,
      ...style
    },
    size,
    ...rest
  }));
};
var Button_default = SkeletonButton;

// node_modules/antd/es/skeleton/Image.js
var React5 = __toESM(require_react());

// node_modules/antd/es/skeleton/Node.js
var React4 = __toESM(require_react());
var SkeletonNode = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    classNames,
    rootClassName,
    internalClassName,
    style,
    styles,
    active,
    children
  } = props;
  const {
    getPrefixCls
  } = React4.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = style_default(prefixCls);
  const cls = clsx(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active
  }, hashId, classNames?.root, className, rootClassName, cssVarCls);
  return React4.createElement("div", {
    className: cls,
    style: styles?.root
  }, React4.createElement("div", {
    className: clsx(classNames?.content, internalClassName || `${prefixCls}-node`),
    style: {
      ...styles?.content,
      ...style
    }
  }, children));
};
var Node_default = SkeletonNode;

// node_modules/antd/es/skeleton/Image.js
var SkeletonImage = (props) => {
  const {
    getPrefixCls
  } = React5.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", props.prefixCls);
  return React5.createElement(Node_default, {
    ...props,
    internalClassName: `${prefixCls}-image`
  }, React5.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${prefixCls}-image-svg`
  }, React5.createElement("title", null, "Image placeholder"), React5.createElement("path", {
    d: "M365.7 329.1q0 45.8-32 77.7t-77.7 32-77.7-32-32-77.7 32-77.6 77.7-32 77.7 32 32 77.6M951 548.6v256H146.3V694.9L329 512l91.5 91.4L713 311zm54.8-402.3H91.4q-7.4 0-12.8 5.4T73 164.6v694.8q0 7.5 5.5 12.9t12.8 5.4h914.3q7.5 0 12.9-5.4t5.4-12.9V164.6q0-7.5-5.4-12.9t-12.9-5.4m91.4 18.3v694.8q0 37.8-26.8 64.6t-64.6 26.9H91.4q-37.7 0-64.6-26.9T0 859.4V164.6q0-37.8 26.8-64.6T91.4 73h914.3q37.8 0 64.6 26.9t26.8 64.6",
    className: `${prefixCls}-image-path`
  })));
};
var Image_default = SkeletonImage;

// node_modules/antd/es/skeleton/Input.js
var React6 = __toESM(require_react());
var SkeletonInput = (props) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    classNames,
    rootClassName,
    active,
    block,
    style,
    styles,
    size = "default",
    ...rest
  } = props;
  const {
    getPrefixCls
  } = React6.useContext(ConfigContext);
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = style_default(prefixCls);
  const cls = clsx(prefixCls, `${prefixCls}-element`, {
    [`${prefixCls}-active`]: active,
    [`${prefixCls}-block`]: block
  }, classNames?.root, className, rootClassName, hashId, cssVarCls);
  return React6.createElement("div", {
    className: cls,
    style: styles?.root
  }, React6.createElement(Element_default, {
    prefixCls: `${prefixCls}-input`,
    className: classNames?.content,
    style: {
      ...styles?.content,
      ...style
    },
    size,
    ...rest
  }));
};
var Input_default = SkeletonInput;

// node_modules/antd/es/skeleton/Paragraph.js
var React7 = __toESM(require_react());
var getWidth = (index, props) => {
  const {
    width,
    rows = 2
  } = props;
  if (Array.isArray(width)) {
    return width[index];
  }
  if (rows - 1 === index) {
    return width;
  }
  return void 0;
};
var Paragraph = (props) => {
  const {
    prefixCls,
    className,
    style,
    rows = 0
  } = props;
  const rowList = Array.from({
    length: rows
  }).map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    React7.createElement("li", {
      key: index,
      style: {
        width: getWidth(index, props)
      }
    })
  ));
  return React7.createElement("ul", {
    className: clsx(prefixCls, className),
    style
  }, rowList);
};
var Paragraph_default = Paragraph;

// node_modules/antd/es/skeleton/Title.js
var React8 = __toESM(require_react());
var Title = ({
  prefixCls,
  className,
  width,
  style
}) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  React8.createElement("h3", {
    className: clsx(prefixCls, className),
    style: {
      width,
      ...style
    }
  })
);
var Title_default = Title;

// node_modules/antd/es/skeleton/Skeleton.js
function getComponentProps(prop) {
  if (prop && typeof prop === "object") {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    return {
      size: "large",
      shape: "square"
    };
  }
  return {
    size: "large",
    shape: "circle"
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: "38%"
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: "50%"
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};
  if (!hasAvatar || !hasTitle) {
    basicProps.width = "61%";
  }
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
var Skeleton = (props) => {
  const {
    prefixCls: customizePrefixCls,
    loading,
    className,
    rootClassName,
    classNames,
    style,
    styles,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round
  } = props;
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("skeleton");
  const prefixCls = getPrefixCls("skeleton", customizePrefixCls);
  const [hashId, cssVarCls] = style_default(prefixCls);
  const mergedProps = {
    ...props,
    avatar,
    title,
    paragraph
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  if (loading || !("loading" in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;
    let avatarNode;
    if (hasAvatar) {
      const avatarProps = {
        className: mergedClassNames.avatar,
        prefixCls: `${prefixCls}-avatar`,
        ...getAvatarBasicProps(hasTitle, hasParagraph),
        ...getComponentProps(avatar),
        style: mergedStyles.avatar
      };
      avatarNode = React9.createElement("div", {
        className: clsx(mergedClassNames.header, `${prefixCls}-header`),
        style: mergedStyles.header
      }, React9.createElement(Element_default, {
        ...avatarProps
      }));
    }
    let contentNode;
    if (hasTitle || hasParagraph) {
      let $title;
      if (hasTitle) {
        const titleProps = {
          className: mergedClassNames.title,
          prefixCls: `${prefixCls}-title`,
          ...getTitleBasicProps(hasAvatar, hasParagraph),
          ...getComponentProps(title),
          style: mergedStyles.title
        };
        $title = React9.createElement(Title_default, {
          ...titleProps
        });
      }
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps = {
          className: mergedClassNames.paragraph,
          prefixCls: `${prefixCls}-paragraph`,
          ...getParagraphBasicProps(hasAvatar, hasTitle),
          ...getComponentProps(paragraph),
          style: mergedStyles.paragraph
        };
        paragraphNode = React9.createElement(Paragraph_default, {
          ...paragraphProps
        });
      }
      contentNode = React9.createElement("div", {
        className: clsx(mergedClassNames.section, `${prefixCls}-section`),
        style: mergedStyles.section
      }, $title, paragraphNode);
    }
    const cls = clsx(prefixCls, {
      [`${prefixCls}-with-avatar`]: hasAvatar,
      [`${prefixCls}-active`]: active,
      [`${prefixCls}-rtl`]: direction === "rtl",
      [`${prefixCls}-round`]: round
    }, mergedClassNames.root, contextClassName, className, rootClassName, hashId, cssVarCls);
    return React9.createElement("div", {
      className: cls,
      style: {
        ...mergedStyles.root,
        ...contextStyle,
        ...style
      }
    }, avatarNode, contentNode);
  }
  return children ?? null;
};
Skeleton.Button = Button_default;
Skeleton.Avatar = Avatar_default;
Skeleton.Input = Input_default;
Skeleton.Image = Image_default;
Skeleton.Node = Node_default;
if (true) {
  Skeleton.displayName = "Skeleton";
}
var Skeleton_default = Skeleton;

// node_modules/antd/es/skeleton/index.js
var skeleton_default = Skeleton_default;

// node_modules/antd/es/tabs/index.js
var React51 = __toESM(require_react());

// node_modules/@rc-component/util/es/isMobile.js
var import_is_mobile = __toESM(require_is_mobile());
var cached;
var isMobile_default = (() => {
  if (typeof cached === "undefined") {
    cached = (0, import_is_mobile.default)();
  }
  return cached;
});

// node_modules/@rc-component/tabs/es/Tabs.js
var React49 = __toESM(require_react());
var import_react15 = __toESM(require_react());

// node_modules/@rc-component/tabs/es/TabContext.js
var import_react = __toESM(require_react());
var TabContext_default = (0, import_react.createContext)(null);

// node_modules/@rc-component/tabs/es/TabNavList/Wrapper.js
var React46 = __toESM(require_react());

// node_modules/@rc-component/tabs/es/TabNavList/index.js
var React45 = __toESM(require_react());
var import_react14 = __toESM(require_react());

// node_modules/@rc-component/tabs/es/hooks/useIndicator.js
var import_react2 = __toESM(require_react());
var useIndicator = (options) => {
  const {
    activeTabOffset,
    horizontal,
    rtl,
    indicator = {}
  } = options;
  const {
    size,
    align = "center"
  } = indicator;
  const [inkStyle, setInkStyle] = (0, import_react2.useState)();
  const inkBarRafRef = (0, import_react2.useRef)();
  const getLength = import_react2.default.useCallback((origin) => {
    if (typeof size === "function") {
      return size(origin);
    }
    if (typeof size === "number") {
      return size;
    }
    return origin;
  }, [size]);
  function cleanInkBarRaf() {
    raf_default.cancel(inkBarRafRef.current);
  }
  (0, import_react2.useEffect)(() => {
    const newInkStyle = {};
    if (activeTabOffset) {
      if (horizontal) {
        newInkStyle.width = getLength(activeTabOffset.width);
        const key = rtl ? "right" : "left";
        if (align === "start") {
          newInkStyle[key] = activeTabOffset[key];
        }
        if (align === "center") {
          newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width / 2;
          newInkStyle.transform = rtl ? "translateX(50%)" : "translateX(-50%)";
        }
        if (align === "end") {
          newInkStyle[key] = activeTabOffset[key] + activeTabOffset.width;
          newInkStyle.transform = "translateX(-100%)";
        }
      } else {
        newInkStyle.height = getLength(activeTabOffset.height);
        if (align === "start") {
          newInkStyle.top = activeTabOffset.top;
        }
        if (align === "center") {
          newInkStyle.top = activeTabOffset.top + activeTabOffset.height / 2;
          newInkStyle.transform = "translateY(-50%)";
        }
        if (align === "end") {
          newInkStyle.top = activeTabOffset.top + activeTabOffset.height;
          newInkStyle.transform = "translateY(-100%)";
        }
      }
    }
    cleanInkBarRaf();
    inkBarRafRef.current = raf_default(() => {
      const isEqual = inkStyle && newInkStyle && Object.keys(newInkStyle).every((key) => {
        const newValue = newInkStyle[key];
        const oldValue = inkStyle[key];
        return typeof newValue === "number" && typeof oldValue === "number" ? Math.round(newValue) === Math.round(oldValue) : newValue === oldValue;
      });
      if (!isEqual) {
        setInkStyle(newInkStyle);
      }
    });
    return cleanInkBarRaf;
  }, [JSON.stringify(activeTabOffset), horizontal, rtl, align, getLength]);
  return {
    style: inkStyle
  };
};
var useIndicator_default = useIndicator;

// node_modules/@rc-component/tabs/es/hooks/useOffsets.js
var import_react3 = __toESM(require_react());
var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return (0, import_react3.useMemo)(() => {
    const map = /* @__PURE__ */ new Map();
    const lastOffset = tabSizes.get(tabs[0]?.key) || DEFAULT_SIZE;
    const rightOffset = lastOffset.left + lastOffset.width;
    for (let i = 0; i < tabs.length; i += 1) {
      const {
        key
      } = tabs[i];
      let data = tabSizes.get(key);
      if (!data) {
        data = tabSizes.get(tabs[i - 1]?.key) || DEFAULT_SIZE;
      }
      const entity = map.get(key) || {
        ...data
      };
      entity.right = rightOffset - entity.left - entity.width;
      map.set(key, entity);
    }
    return map;
  }, [tabs.map((tab) => tab.key).join("_"), tabSizes, holderScrollWidth]);
}

// node_modules/@rc-component/tabs/es/hooks/useSyncState.js
var React11 = __toESM(require_react());
function useSyncState(defaultState, onChange) {
  const stateRef = React11.useRef(defaultState);
  const [, forceUpdate] = React11.useState({});
  function setState(updater) {
    const newValue = typeof updater === "function" ? updater(stateRef.current) : updater;
    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }
    stateRef.current = newValue;
    forceUpdate({});
  }
  return [stateRef.current, setState];
}

// node_modules/@rc-component/tabs/es/hooks/useTouchMove.js
var React12 = __toESM(require_react());
var import_react4 = __toESM(require_react());
var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = 0.995 ** REFRESH_INTERVAL;
function useTouchMove(ref, onOffset) {
  const [touchPosition, setTouchPosition] = (0, import_react4.useState)();
  const [lastTimestamp, setLastTimestamp] = (0, import_react4.useState)(0);
  const [lastTimeDiff, setLastTimeDiff] = (0, import_react4.useState)(0);
  const [lastOffset, setLastOffset] = (0, import_react4.useState)();
  const motionRef = (0, import_react4.useRef)();
  function onTouchStart(e) {
    const {
      screenX,
      screenY
    } = e.touches[0];
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }
  function onTouchMove(e) {
    if (!touchPosition) return;
    const {
      screenX,
      screenY
    } = e.touches[0];
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    const offsetX = screenX - touchPosition.x;
    const offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    const now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null);
    if (lastOffset) {
      const distanceX = lastOffset.x / lastTimeDiff;
      const distanceY = lastOffset.y / lastTimeDiff;
      const absX = Math.abs(distanceX);
      const absY = Math.abs(distanceY);
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      let currentX = distanceX;
      let currentY = distanceY;
      motionRef.current = window.setInterval(() => {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }
  const lastWheelDirectionRef = (0, import_react4.useRef)();
  function onWheel(e) {
    const {
      deltaX,
      deltaY
    } = e;
    let mixed = 0;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === "x" ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = "x";
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = "y";
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }
  const touchEventsRef = (0, import_react4.useRef)(null);
  touchEventsRef.current = {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onWheel
  };
  React12.useEffect(() => {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }
    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }
    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }
    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }
    document.addEventListener("touchmove", onProxyTouchMove, {
      passive: false
    });
    document.addEventListener("touchend", onProxyTouchEnd, {
      passive: true
    });
    ref.current.addEventListener("touchstart", onProxyTouchStart, {
      passive: true
    });
    ref.current.addEventListener("wheel", onProxyWheel, {
      passive: false
    });
    return () => {
      document.removeEventListener("touchmove", onProxyTouchMove);
      document.removeEventListener("touchend", onProxyTouchEnd);
    };
  }, []);
}

// node_modules/@rc-component/tabs/es/hooks/useUpdate.js
var import_react5 = __toESM(require_react());
function useUpdate(callback) {
  const [count, setCount] = (0, import_react5.useState)(0);
  const effectRef = (0, import_react5.useRef)(0);
  const callbackRef = (0, import_react5.useRef)();
  callbackRef.current = callback;
  useLayoutUpdateEffect(() => {
    callbackRef.current?.();
  }, [count]);
  return () => {
    if (effectRef.current !== count) {
      return;
    }
    effectRef.current += 1;
    setCount(effectRef.current);
  };
}
function useUpdateState(defaultState) {
  const batchRef = (0, import_react5.useRef)([]);
  const [, forceUpdate] = (0, import_react5.useState)({});
  const state = (0, import_react5.useRef)(typeof defaultState === "function" ? defaultState() : defaultState);
  const flushUpdate = useUpdate(() => {
    let current = state.current;
    batchRef.current.forEach((callback) => {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });
  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }
  return [state.current, updater];
}

// node_modules/@rc-component/tabs/es/hooks/useVisibleRange.js
var import_react6 = __toESM(require_react());
var DEFAULT_SIZE2 = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(tabOffsets, visibleTabContentValue, transform, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, {
  tabs,
  tabPosition,
  rtl
}) {
  let charUnit;
  let position;
  let transformSize;
  if (["top", "bottom"].includes(tabPosition)) {
    charUnit = "width";
    position = rtl ? "right" : "left";
    transformSize = Math.abs(transform);
  } else {
    charUnit = "height";
    position = "top";
    transformSize = -transform;
  }
  return (0, import_react6.useMemo)(() => {
    if (!tabs.length) {
      return [0, 0];
    }
    const len = tabs.length;
    let endIndex = len;
    for (let i = 0; i < len; i += 1) {
      const offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE2;
      if (Math.floor(offset[position] + offset[charUnit]) > Math.floor(transformSize + visibleTabContentValue)) {
        endIndex = i - 1;
        break;
      }
    }
    let startIndex = 0;
    for (let i = len - 1; i >= 0; i -= 1) {
      const offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE2;
      if (offset[position] < transformSize) {
        startIndex = i + 1;
        break;
      }
    }
    return startIndex > endIndex ? [0, -1] : [startIndex, endIndex];
  }, [tabOffsets, visibleTabContentValue, tabContentSizeValue, addNodeSizeValue, operationNodeSizeValue, transformSize, tabPosition, tabs.map((tab) => tab.key).join("_"), rtl]);
}

// node_modules/@rc-component/tabs/es/util.js
function stringify(obj) {
  let tgt;
  if (obj instanceof Map) {
    tgt = {};
    obj.forEach((v, k) => {
      tgt[k] = v;
    });
  } else {
    tgt = obj;
  }
  return JSON.stringify(tgt);
}
var RC_TABS_DOUBLE_QUOTE = "TABS_DQ";
function genDataNodeKey(key) {
  return String(key).replace(/"/g, RC_TABS_DOUBLE_QUOTE);
}
function getRemovable(closable, closeIcon, editable, disabled) {
  if (
    // Only editable tabs can be removed
    !editable || // Tabs cannot be removed when disabled
    disabled || // closable is false
    closable === false || // If closable is undefined, the remove button should be hidden when closeIcon is null or false
    closable === void 0 && (closeIcon === false || closeIcon === null)
  ) {
    return false;
  }
  return true;
}

// node_modules/@rc-component/tabs/es/TabNavList/AddButton.js
var React13 = __toESM(require_react());
var AddButton = React13.forwardRef((props, ref) => {
  const {
    prefixCls,
    editable,
    locale,
    style
  } = props;
  if (!editable || editable.showAdd === false) {
    return null;
  }
  return React13.createElement("button", {
    ref,
    type: "button",
    className: `${prefixCls}-nav-add`,
    style,
    "aria-label": locale?.addAriaLabel || "Add tab",
    onClick: (event) => {
      editable.onEdit("add", {
        event
      });
    }
  }, editable.addIcon || "+");
});
var AddButton_default = AddButton;

// node_modules/@rc-component/tabs/es/TabNavList/ExtraContent.js
var React14 = __toESM(require_react());
var ExtraContent = React14.forwardRef((props, ref) => {
  const {
    position,
    prefixCls,
    extra
  } = props;
  if (!extra) {
    return null;
  }
  let content;
  let assertExtra = {};
  if (typeof extra === "object" && !React14.isValidElement(extra)) {
    assertExtra = extra;
  } else {
    assertExtra.right = extra;
  }
  if (position === "right") {
    content = assertExtra.right;
  }
  if (position === "left") {
    content = assertExtra.left;
  }
  return content ? React14.createElement("div", {
    className: `${prefixCls}-extra-content`,
    ref
  }, content) : null;
});
if (true) {
  ExtraContent.displayName = "ExtraContent";
}
var ExtraContent_default = ExtraContent;

// node_modules/@rc-component/dropdown/es/Dropdown.js
var import_react8 = __toESM(require_react());

// node_modules/@rc-component/dropdown/es/hooks/useAccessibility.js
var React15 = __toESM(require_react());
var {
  ESC,
  TAB
} = KeyCode_default;
function useAccessibility({
  visible,
  triggerRef,
  onVisibleChange,
  autoFocus,
  overlayRef
}) {
  const focusMenuRef = React15.useRef(false);
  const handleCloseMenuAndReturnFocus = () => {
    if (visible) {
      triggerRef.current?.focus?.();
      onVisibleChange?.(false);
    }
  };
  const focusMenu = () => {
    if (overlayRef.current?.focus) {
      overlayRef.current.focus();
      focusMenuRef.current = true;
      return true;
    }
    return false;
  };
  const handleKeyDown = (event) => {
    switch (event.keyCode) {
      case ESC:
        handleCloseMenuAndReturnFocus();
        break;
      case TAB: {
        let focusResult = false;
        if (!focusMenuRef.current) {
          focusResult = focusMenu();
        }
        if (focusResult) {
          event.preventDefault();
        } else {
          handleCloseMenuAndReturnFocus();
        }
        break;
      }
    }
  };
  React15.useEffect(() => {
    if (visible) {
      window.addEventListener("keydown", handleKeyDown);
      if (autoFocus) {
        raf_default(focusMenu, 3);
      }
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        focusMenuRef.current = false;
      };
    }
    return () => {
      focusMenuRef.current = false;
    };
  }, [visible]);
}

// node_modules/@rc-component/dropdown/es/Overlay.js
var import_react7 = __toESM(require_react());
var Overlay = (0, import_react7.forwardRef)((props, ref) => {
  const {
    overlay,
    arrow,
    prefixCls
  } = props;
  const overlayNode = (0, import_react7.useMemo)(() => {
    let overlayElement;
    if (typeof overlay === "function") {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  }, [overlay]);
  const composedRef = composeRef(ref, getNodeRef(overlayNode));
  return import_react7.default.createElement(import_react7.default.Fragment, null, arrow && import_react7.default.createElement("div", {
    className: `${prefixCls}-arrow`
  }), import_react7.default.cloneElement(overlayNode, {
    ref: supportRef(overlayNode) ? composedRef : void 0
  }));
});
var Overlay_default = Overlay;

// node_modules/@rc-component/dropdown/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  top: {
    points: ["bc", "tc"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  }
};
var placements_default = placements;

// node_modules/@rc-component/dropdown/es/Dropdown.js
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
var Dropdown = import_react8.default.forwardRef((props, ref) => {
  const {
    arrow = false,
    prefixCls = "rc-dropdown",
    transitionName,
    animation,
    align,
    placement = "bottomLeft",
    placements: placements3 = placements_default,
    getPopupContainer,
    showAction,
    hideAction,
    overlayClassName,
    overlayStyle,
    visible,
    trigger = ["hover"],
    autoFocus,
    overlay,
    children,
    onVisibleChange,
    ...otherProps
  } = props;
  const [triggerVisible, setTriggerVisible] = import_react8.default.useState();
  const mergedVisible = "visible" in props ? visible : triggerVisible;
  const mergedMotionName = animation ? `${prefixCls}-${animation}` : transitionName;
  const triggerRef = import_react8.default.useRef(null);
  const overlayRef = import_react8.default.useRef(null);
  const childRef = import_react8.default.useRef(null);
  import_react8.default.useImperativeHandle(ref, () => triggerRef.current);
  const handleVisibleChange = (newVisible) => {
    setTriggerVisible(newVisible);
    onVisibleChange?.(newVisible);
  };
  useAccessibility({
    visible: mergedVisible,
    triggerRef: childRef,
    onVisibleChange: handleVisibleChange,
    autoFocus,
    overlayRef
  });
  const onClick = (e) => {
    const {
      onOverlayClick
    } = props;
    setTriggerVisible(false);
    if (onOverlayClick) {
      onOverlayClick(e);
    }
  };
  const getMenuElement = () => import_react8.default.createElement(Overlay_default, {
    ref: overlayRef,
    overlay,
    prefixCls,
    arrow
  });
  const getMenuElementOrLambda = () => {
    if (typeof overlay === "function") {
      return getMenuElement;
    }
    return getMenuElement();
  };
  const getMinOverlayWidthMatchTrigger = () => {
    const {
      minOverlayWidthMatchTrigger,
      alignPoint
    } = props;
    if ("minOverlayWidthMatchTrigger" in props) {
      return minOverlayWidthMatchTrigger;
    }
    return !alignPoint;
  };
  const getOpenClassName = () => {
    const {
      openClassName
    } = props;
    if (openClassName !== void 0) {
      return openClassName;
    }
    return `${prefixCls}-open`;
  };
  const childrenNode = import_react8.default.cloneElement(children, {
    className: clsx(children.props?.className, mergedVisible && getOpenClassName()),
    ref: supportRef(children) ? composeRef(childRef, getNodeRef(children)) : void 0
  });
  let triggerHideAction = hideAction;
  if (!triggerHideAction && trigger.indexOf("contextMenu") !== -1) {
    triggerHideAction = ["click"];
  }
  return import_react8.default.createElement(es_default3, _extends({
    builtinPlacements: placements3
  }, otherProps, {
    prefixCls,
    ref: triggerRef,
    popupClassName: clsx(overlayClassName, {
      [`${prefixCls}-show-arrow`]: arrow
    }),
    popupStyle: overlayStyle,
    action: trigger,
    showAction,
    hideAction: triggerHideAction,
    popupPlacement: placement,
    popupAlign: align,
    popupMotion: {
      motionName: mergedMotionName
    },
    popupVisible: mergedVisible,
    stretch: getMinOverlayWidthMatchTrigger() ? "minWidth" : "",
    popup: getMenuElementOrLambda(),
    onOpenChange: handleVisibleChange,
    onPopupClick: onClick,
    getPopupContainer
  }), childrenNode);
});
var Dropdown_default = Dropdown;

// node_modules/@rc-component/dropdown/es/index.js
var es_default4 = Dropdown_default;

// node_modules/@babel/runtime/helpers/esm/extends.js
function _extends2() {
  return _extends2 = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends2.apply(null, arguments);
}

// node_modules/@rc-component/overflow/es/Overflow.js
var React22 = __toESM(require_react());
var import_react10 = __toESM(require_react());

// node_modules/@rc-component/overflow/es/Item.js
var React18 = __toESM(require_react());
var UNDEFINED = void 0;
function InternalItem(props, ref) {
  const {
    prefixCls,
    invalidate,
    item,
    renderItem,
    responsive,
    responsiveDisabled,
    registerSize,
    itemKey,
    className,
    style,
    children,
    display,
    order,
    component: Component2 = "div",
    ...restProps
  } = props;
  const mergedHidden = responsive && !display;
  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }
  React18.useEffect(() => () => {
    internalRegisterSize(null);
  }, []);
  const childNode = renderItem && item !== UNDEFINED ? renderItem(item, {
    index: order
  }) : children;
  let overflowStyle;
  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? "hidden" : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? "none" : UNDEFINED,
      position: mergedHidden ? "absolute" : UNDEFINED
    };
  }
  const overflowProps = {};
  if (mergedHidden) {
    overflowProps["aria-hidden"] = true;
  }
  let itemNode = React18.createElement(Component2, _extends2({
    className: clsx(!invalidate && prefixCls, className),
    style: {
      ...overflowStyle,
      ...style
    }
  }, overflowProps, restProps, {
    ref
  }), childNode);
  if (responsive) {
    itemNode = React18.createElement(es_default, {
      onResize: ({
        offsetWidth
      }) => {
        internalRegisterSize(offsetWidth);
      },
      disabled: responsiveDisabled
    }, itemNode);
  }
  return itemNode;
}
var Item = React18.forwardRef(InternalItem);
if (true) {
  Item.displayName = "Item";
}
var Item_default = Item;

// node_modules/@rc-component/overflow/es/hooks/useEffectState.js
var React19 = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// node_modules/@rc-component/overflow/es/hooks/channelUpdate.js
function channelUpdate(callback) {
  if (typeof MessageChannel === "undefined") {
    raf_default(callback);
  } else {
    const channel = new MessageChannel();
    channel.port1.onmessage = () => callback();
    channel.port2.postMessage(void 0);
  }
}

// node_modules/@rc-component/overflow/es/hooks/useEffectState.js
function useBatcher() {
  const updateFuncRef = React19.useRef(null);
  const notifyEffectUpdate = (callback) => {
    if (!updateFuncRef.current) {
      updateFuncRef.current = [];
      channelUpdate(() => {
        (0, import_react_dom.unstable_batchedUpdates)(() => {
          updateFuncRef.current.forEach((fn) => {
            fn();
          });
          updateFuncRef.current = null;
        });
      });
    }
    updateFuncRef.current.push(callback);
  };
  return notifyEffectUpdate;
}
function useEffectState(notifyEffectUpdate, defaultValue) {
  const [stateValue, setStateValue] = React19.useState(defaultValue);
  const setEffectVal = useEvent_default((nextValue) => {
    notifyEffectUpdate(() => {
      setStateValue(nextValue);
    });
  });
  return [stateValue, setEffectVal];
}

// node_modules/@rc-component/overflow/es/RawItem.js
var React21 = __toESM(require_react());

// node_modules/@rc-component/overflow/es/context.js
var import_react9 = __toESM(require_react());
var OverflowContext = import_react9.default.createContext(null);

// node_modules/@rc-component/overflow/es/RawItem.js
var InternalRawItem = (props, ref) => {
  const context = React21.useContext(OverflowContext);
  if (!context) {
    const {
      component: Component2 = "div",
      ...restProps2
    } = props;
    return React21.createElement(Component2, _extends2({}, restProps2, {
      ref
    }));
  }
  const {
    className: contextClassName,
    ...restContext
  } = context;
  const {
    className,
    ...restProps
  } = props;
  return React21.createElement(OverflowContext.Provider, {
    value: null
  }, React21.createElement(Item_default, _extends2({
    ref,
    className: clsx(contextClassName, className)
  }, restContext, restProps)));
};
var RawItem = React21.forwardRef(InternalRawItem);
if (true) {
  RawItem.displayName = "RawItem";
}
var RawItem_default = RawItem;

// node_modules/@rc-component/overflow/es/Overflow.js
var RESPONSIVE = "responsive";
var INVALIDATE = "invalidate";
function defaultRenderRest(omittedItems) {
  return `+ ${omittedItems.length} ...`;
}
function Overflow(props, ref) {
  const {
    prefixCls = "rc-overflow",
    data = [],
    renderItem,
    renderRawItem,
    itemKey,
    itemWidth = 10,
    ssr,
    style,
    className,
    maxCount,
    renderRest,
    renderRawRest,
    prefix,
    suffix,
    component: Component2 = "div",
    itemComponent,
    onVisibleChange,
    ...restProps
  } = props;
  const fullySSR = ssr === "full";
  const notifyEffectUpdate = useBatcher();
  const [containerWidth, setContainerWidth] = useEffectState(notifyEffectUpdate, null);
  const mergedContainerWidth = containerWidth || 0;
  const [itemWidths, setItemWidths] = useEffectState(notifyEffectUpdate, /* @__PURE__ */ new Map());
  const [prevRestWidth, setPrevRestWidth] = useEffectState(notifyEffectUpdate, 0);
  const [restWidth, setRestWidth] = useEffectState(notifyEffectUpdate, 0);
  const [prefixWidth, setPrefixWidth] = useEffectState(notifyEffectUpdate, 0);
  const [suffixWidth, setSuffixWidth] = useEffectState(notifyEffectUpdate, 0);
  const [suffixFixedStart, setSuffixFixedStart] = (0, import_react10.useState)(null);
  const [displayCount, setDisplayCount] = (0, import_react10.useState)(null);
  const mergedDisplayCount = React22.useMemo(() => {
    if (displayCount === null && fullySSR) {
      return Number.MAX_SAFE_INTEGER;
    }
    return displayCount || 0;
  }, [displayCount, containerWidth]);
  const [restReady, setRestReady] = (0, import_react10.useState)(false);
  const itemPrefixCls = `${prefixCls}-item`;
  const mergedRestWidth = Math.max(prevRestWidth, restWidth);
  const isResponsive = maxCount === RESPONSIVE;
  const shouldResponsive = data.length && isResponsive;
  const invalidate = maxCount === INVALIDATE;
  const showRest = shouldResponsive || typeof maxCount === "number" && data.length > maxCount;
  const mergedData = (0, import_react10.useMemo)(() => {
    let items = data;
    if (shouldResponsive) {
      if (containerWidth === null && fullySSR) {
        items = data;
      } else {
        items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
      }
    } else if (typeof maxCount === "number") {
      items = data.slice(0, maxCount);
    }
    return items;
  }, [data, itemWidth, containerWidth, maxCount, shouldResponsive]);
  const omittedItems = (0, import_react10.useMemo)(() => {
    if (shouldResponsive) {
      return data.slice(mergedDisplayCount + 1);
    }
    return data.slice(mergedData.length);
  }, [data, mergedData, shouldResponsive, mergedDisplayCount]);
  const getKey = (0, import_react10.useCallback)((item, index) => {
    if (typeof itemKey === "function") {
      return itemKey(item);
    }
    return (itemKey && item?.[itemKey]) ?? index;
  }, [itemKey]);
  const mergedRenderItem = (0, import_react10.useCallback)(renderItem || ((item) => item), [renderItem]);
  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    if (displayCount === count && (suffixFixedStartVal === void 0 || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }
    setDisplayCount(count);
    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange?.(count);
    }
    if (suffixFixedStartVal !== void 0) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  }
  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }
  function registerSize(key, width) {
    setItemWidths((origin) => {
      const clone = new Map(origin);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      return clone;
    });
  }
  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }
  function registerPrefixSize(_, width) {
    setPrefixWidth(width);
  }
  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  }
  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }
  useLayoutEffect_default(() => {
    if (mergedContainerWidth && typeof mergedRestWidth === "number" && mergedData) {
      let totalWidth = prefixWidth + suffixWidth;
      const len = mergedData.length;
      const lastIndex = len - 1;
      if (!len) {
        updateDisplayCount(0, null);
        return;
      }
      for (let i = 0; i < len; i += 1) {
        let currentItemWidth = getItemWidth(i);
        if (fullySSR) {
          currentItemWidth = currentItemWidth || 0;
        }
        if (currentItemWidth === void 0) {
          updateDisplayCount(i - 1, void 0, true);
          break;
        }
        totalWidth += currentItemWidth;
        if (
          // Only one means `totalWidth` is the final width
          lastIndex === 0 && totalWidth <= mergedContainerWidth || // Last two width will be the final width
          i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth
        ) {
          updateDisplayCount(lastIndex, null);
          break;
        } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
          updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
          break;
        }
      }
      if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
        setSuffixFixedStart(null);
      }
    }
  }, [mergedContainerWidth, itemWidths, restWidth, prefixWidth, suffixWidth, getKey, mergedData]);
  const displayRest = restReady && !!omittedItems.length;
  let suffixStyle = {};
  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: "absolute",
      left: suffixFixedStart,
      top: 0
    };
  }
  const itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate
  };
  const internalRenderItemNode = renderRawItem ? (item, index) => {
    const key = getKey(item, index);
    return React22.createElement(OverflowContext.Provider, {
      key,
      value: {
        ...itemSharedProps,
        order: index,
        item,
        itemKey: key,
        registerSize,
        display: index <= mergedDisplayCount
      }
    }, renderRawItem(item, index));
  } : (item, index) => {
    const key = getKey(item, index);
    return React22.createElement(Item_default, _extends2({}, itemSharedProps, {
      order: index,
      key,
      item,
      renderItem: mergedRenderItem,
      itemKey: key,
      registerSize,
      display: index <= mergedDisplayCount
    }));
  };
  const restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: `${itemPrefixCls}-rest`,
    registerSize: registerOverflowSize,
    display: displayRest
  };
  const mergedRenderRest = renderRest || defaultRenderRest;
  const restNode = renderRawRest ? React22.createElement(OverflowContext.Provider, {
    value: {
      ...itemSharedProps,
      ...restContextProps
    }
  }, renderRawRest(omittedItems)) : React22.createElement(Item_default, _extends2({}, itemSharedProps, restContextProps), typeof mergedRenderRest === "function" ? mergedRenderRest(omittedItems) : mergedRenderRest);
  const overflowNode = React22.createElement(Component2, _extends2({
    className: clsx(!invalidate && prefixCls, className),
    style,
    ref
  }, restProps), prefix && React22.createElement(Item_default, _extends2({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: -1,
    className: `${itemPrefixCls}-prefix`,
    registerSize: registerPrefixSize,
    display: true
  }), prefix), mergedData.map(internalRenderItemNode), showRest ? restNode : null, suffix && React22.createElement(Item_default, _extends2({}, itemSharedProps, {
    responsive: isResponsive,
    responsiveDisabled: !shouldResponsive,
    order: mergedDisplayCount,
    className: `${itemPrefixCls}-suffix`,
    registerSize: registerSuffixSize,
    display: true,
    style: suffixStyle
  }), suffix));
  return isResponsive ? React22.createElement(es_default, {
    onResize: onOverflowResize,
    disabled: !shouldResponsive
  }, overflowNode) : overflowNode;
}
var ForwardOverflow = React22.forwardRef(Overflow);
ForwardOverflow.Item = RawItem_default;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;
if (true) {
  ForwardOverflow.displayName = "Overflow";
}
var Overflow_default = ForwardOverflow;

// node_modules/@rc-component/overflow/es/index.js
var es_default5 = Overflow_default;

// node_modules/@rc-component/menu/es/Menu.js
var React42 = __toESM(require_react());
var import_react12 = __toESM(require_react());
var import_react_dom2 = __toESM(require_react_dom());

// node_modules/@rc-component/menu/es/context/IdContext.js
var React23 = __toESM(require_react());
var IdContext = React23.createContext(null);
function getMenuId(uuid2, eventKey) {
  return `${uuid2}-${eventKey}`;
}
function useMenuId(eventKey) {
  const id = React23.useContext(IdContext);
  return getMenuId(id, eventKey);
}

// node_modules/@rc-component/menu/es/context/MenuContext.js
var React24 = __toESM(require_react());
var MenuContext = React24.createContext(null);
function mergeProps(origin, target) {
  const clone = {
    ...origin
  };
  Object.keys(target).forEach((key) => {
    const value = target[key];
    if (value !== void 0) {
      clone[key] = value;
    }
  });
  return clone;
}
function InheritableContextProvider({
  children,
  locked,
  ...restProps
}) {
  const context = React24.useContext(MenuContext);
  const inheritableContext = useMemo(() => mergeProps(context, restProps), [context, restProps], (prev, next) => !locked && (prev[0] !== next[0] || !isEqual_default(prev[1], next[1], true)));
  return React24.createElement(MenuContext.Provider, {
    value: inheritableContext
  }, children);
}

// node_modules/@rc-component/menu/es/context/PathContext.js
var React25 = __toESM(require_react());
var EmptyList = [];
var PathRegisterContext = React25.createContext(null);
function useMeasure() {
  return React25.useContext(PathRegisterContext);
}
var PathTrackerContext = React25.createContext(EmptyList);
function useFullPath(eventKey) {
  const parentKeyPath = React25.useContext(PathTrackerContext);
  return React25.useMemo(() => eventKey !== void 0 ? [...parentKeyPath, eventKey] : parentKeyPath, [parentKeyPath, eventKey]);
}
var PathUserContext = React25.createContext(null);

// node_modules/@rc-component/menu/es/context/PrivateContext.js
var React26 = __toESM(require_react());
var PrivateContext = React26.createContext({});
var PrivateContext_default = PrivateContext;

// node_modules/@rc-component/menu/es/hooks/useAccessibility.js
var React27 = __toESM(require_react());
var {
  LEFT,
  RIGHT,
  UP,
  DOWN,
  ENTER,
  ESC: ESC2,
  HOME,
  END
} = KeyCode_default;
var ArrowKeys = [UP, DOWN, LEFT, RIGHT];
function getOffset(mode, isRootLevel, isRtl, which) {
  const prev = "prev";
  const next = "next";
  const children = "children";
  const parent = "parent";
  if (mode === "inline" && which === ENTER) {
    return {
      inlineTrigger: true
    };
  }
  const inline = {
    [UP]: prev,
    [DOWN]: next
  };
  const horizontal = {
    [LEFT]: isRtl ? next : prev,
    [RIGHT]: isRtl ? prev : next,
    [DOWN]: children,
    [ENTER]: children
  };
  const vertical = {
    [UP]: prev,
    [DOWN]: next,
    [ENTER]: children,
    [ESC2]: parent,
    [LEFT]: isRtl ? children : parent,
    [RIGHT]: isRtl ? parent : children
  };
  const offsets = {
    inline,
    horizontal,
    vertical,
    inlineSub: inline,
    horizontalSub: vertical,
    verticalSub: vertical
  };
  const type = offsets[`${mode}${isRootLevel ? "" : "Sub"}`]?.[which];
  switch (type) {
    case prev:
      return {
        offset: -1,
        sibling: true
      };
    case next:
      return {
        offset: 1,
        sibling: true
      };
    case parent:
      return {
        offset: -1,
        sibling: false
      };
    case children:
      return {
        offset: 1,
        sibling: false
      };
    default:
      return null;
  }
}
function findContainerUL(element) {
  let current = element;
  while (current) {
    if (current.getAttribute("data-menu-list")) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function getFocusElement(activeElement, elements) {
  let current = activeElement || document.activeElement;
  while (current) {
    if (elements.has(current)) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function getFocusableElements(container, elements) {
  const list = getFocusNodeList(container, true);
  return list.filter((ele) => elements.has(ele));
}
function getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offset = 1) {
  if (!parentQueryContainer) {
    return null;
  }
  const sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements);
  const count = sameLevelFocusableMenuElementList.length;
  let focusIndex = sameLevelFocusableMenuElementList.findIndex((ele) => focusMenuElement === ele);
  if (offset < 0) {
    if (focusIndex === -1) {
      focusIndex = count - 1;
    } else {
      focusIndex -= 1;
    }
  } else if (offset > 0) {
    focusIndex += 1;
  }
  focusIndex = (focusIndex + count) % count;
  return sameLevelFocusableMenuElementList[focusIndex];
}
var refreshElements = (keys, id) => {
  const elements = /* @__PURE__ */ new Set();
  const key2element = /* @__PURE__ */ new Map();
  const element2key = /* @__PURE__ */ new Map();
  keys.forEach((key) => {
    const element = document.querySelector(`[data-menu-id='${getMenuId(id, key)}']`);
    if (element) {
      elements.add(element);
      element2key.set(element, key);
      key2element.set(key, element);
    }
  });
  return {
    elements,
    key2element,
    element2key
  };
};
function useAccessibility2(mode, activeKey, isRtl, id, containerRef, getKeys, getKeyPath, triggerActiveKey, triggerAccessibilityOpen, originOnKeyDown) {
  const rafRef = React27.useRef();
  const activeRef = React27.useRef();
  activeRef.current = activeKey;
  const cleanRaf = () => {
    raf_default.cancel(rafRef.current);
  };
  React27.useEffect(() => () => {
    cleanRaf();
  }, []);
  return (e) => {
    const {
      which
    } = e;
    if ([...ArrowKeys, ENTER, ESC2, HOME, END].includes(which)) {
      const keys = getKeys();
      let refreshedElements = refreshElements(keys, id);
      const {
        elements,
        key2element,
        element2key
      } = refreshedElements;
      const activeElement = key2element.get(activeKey);
      const focusMenuElement = getFocusElement(activeElement, elements);
      const focusMenuKey = element2key.get(focusMenuElement);
      const offsetObj = getOffset(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which);
      if (!offsetObj && which !== HOME && which !== END) {
        return;
      }
      if (ArrowKeys.includes(which) || [HOME, END].includes(which)) {
        e.preventDefault();
      }
      const tryFocus = (menuElement) => {
        if (menuElement) {
          let focusTargetElement = menuElement;
          const link = menuElement.querySelector("a");
          if (link?.getAttribute("href")) {
            focusTargetElement = link;
          }
          const targetKey = element2key.get(menuElement);
          triggerActiveKey(targetKey);
          cleanRaf();
          rafRef.current = raf_default(() => {
            if (activeRef.current === targetKey) {
              focusTargetElement.focus();
            }
          });
        }
      };
      if ([HOME, END].includes(which) || offsetObj.sibling || !focusMenuElement) {
        let parentQueryContainer;
        if (!focusMenuElement || mode === "inline") {
          parentQueryContainer = containerRef.current;
        } else {
          parentQueryContainer = findContainerUL(focusMenuElement);
        }
        let targetElement;
        const focusableElements = getFocusableElements(parentQueryContainer, elements);
        if (which === HOME) {
          targetElement = focusableElements[0];
        } else if (which === END) {
          targetElement = focusableElements[focusableElements.length - 1];
        } else {
          targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset);
        }
        tryFocus(targetElement);
      } else if (offsetObj.inlineTrigger) {
        triggerAccessibilityOpen(focusMenuKey);
      } else if (offsetObj.offset > 0) {
        triggerAccessibilityOpen(focusMenuKey, true);
        cleanRaf();
        rafRef.current = raf_default(() => {
          refreshedElements = refreshElements(keys, id);
          const controlId = focusMenuElement.getAttribute("aria-controls");
          const subQueryContainer = document.getElementById(controlId);
          const targetElement = getNextFocusElement(subQueryContainer, refreshedElements.elements);
          tryFocus(targetElement);
        }, 5);
      } else if (offsetObj.offset < 0) {
        const keyPath = getKeyPath(focusMenuKey, true);
        const parentKey = keyPath[keyPath.length - 2];
        const parentMenuElement = key2element.get(parentKey);
        triggerAccessibilityOpen(parentKey, false);
        tryFocus(parentMenuElement);
      }
    }
    originOnKeyDown?.(e);
  };
}

// node_modules/@rc-component/menu/es/hooks/useKeyRecords.js
var React28 = __toESM(require_react());
var import_react11 = __toESM(require_react());

// node_modules/@rc-component/menu/es/utils/timeUtil.js
function nextSlice(callback) {
  Promise.resolve().then(callback);
}

// node_modules/@rc-component/menu/es/hooks/useKeyRecords.js
var PATH_SPLIT = "__RC_UTIL_PATH_SPLIT__";
var getPathStr = (keyPath) => keyPath.join(PATH_SPLIT);
var getPathKeys = (keyPathStr) => keyPathStr.split(PATH_SPLIT);
var OVERFLOW_KEY = "rc-menu-more";
function useKeyRecords() {
  const [, internalForceUpdate] = React28.useState({});
  const key2pathRef = (0, import_react11.useRef)(/* @__PURE__ */ new Map());
  const path2keyRef = (0, import_react11.useRef)(/* @__PURE__ */ new Map());
  const [overflowKeys, setOverflowKeys] = React28.useState([]);
  const updateRef = (0, import_react11.useRef)(0);
  const destroyRef = (0, import_react11.useRef)(false);
  const forceUpdate = () => {
    if (!destroyRef.current) {
      internalForceUpdate({});
    }
  };
  const registerPath = (0, import_react11.useCallback)((key, keyPath) => {
    if (true) {
      warning_default(!key2pathRef.current.has(key), `Duplicated key '${key}' used in Menu by path [${keyPath.join(" > ")}]`);
    }
    const connectedPath = getPathStr(keyPath);
    path2keyRef.current.set(connectedPath, key);
    key2pathRef.current.set(key, connectedPath);
    updateRef.current += 1;
    const id = updateRef.current;
    nextSlice(() => {
      if (id === updateRef.current) {
        forceUpdate();
      }
    });
  }, []);
  const unregisterPath = (0, import_react11.useCallback)((key, keyPath) => {
    const connectedPath = getPathStr(keyPath);
    path2keyRef.current.delete(connectedPath);
    key2pathRef.current.delete(key);
  }, []);
  const refreshOverflowKeys = (0, import_react11.useCallback)((keys) => {
    setOverflowKeys(keys);
  }, []);
  const getKeyPath = (0, import_react11.useCallback)((eventKey, includeOverflow) => {
    const fullPath = key2pathRef.current.get(eventKey) || "";
    const keys = getPathKeys(fullPath);
    if (includeOverflow && overflowKeys.includes(keys[0])) {
      keys.unshift(OVERFLOW_KEY);
    }
    return keys;
  }, [overflowKeys]);
  const isSubPathKey = (0, import_react11.useCallback)((pathKeys, eventKey) => pathKeys.filter((item) => item !== void 0).some((pathKey) => {
    const pathKeyList = getKeyPath(pathKey, true);
    return pathKeyList.includes(eventKey);
  }), [getKeyPath]);
  const getKeys = () => {
    const keys = [...key2pathRef.current.keys()];
    if (overflowKeys.length) {
      keys.push(OVERFLOW_KEY);
    }
    return keys;
  };
  const getSubPathKeys = (0, import_react11.useCallback)((key) => {
    const connectedPath = `${key2pathRef.current.get(key)}${PATH_SPLIT}`;
    const pathKeys = /* @__PURE__ */ new Set();
    [...path2keyRef.current.keys()].forEach((pathKey) => {
      if (pathKey.startsWith(connectedPath)) {
        pathKeys.add(path2keyRef.current.get(pathKey));
      }
    });
    return pathKeys;
  }, []);
  React28.useEffect(() => () => {
    destroyRef.current = true;
  }, []);
  return {
    // Register
    registerPath,
    unregisterPath,
    refreshOverflowKeys,
    // Util
    isSubPathKey,
    getKeyPath,
    getKeys,
    getSubPathKeys
  };
}

// node_modules/@rc-component/menu/es/hooks/useMemoCallback.js
var React29 = __toESM(require_react());
function useMemoCallback(func) {
  const funRef = React29.useRef(func);
  funRef.current = func;
  const callback = React29.useCallback((...args) => funRef.current?.(...args), []);
  return func ? callback : void 0;
}

// node_modules/@rc-component/menu/es/MenuItem.js
var React33 = __toESM(require_react());

// node_modules/@rc-component/menu/es/hooks/useActive.js
var React30 = __toESM(require_react());
function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
  const {
    // Active
    activeKey,
    onActive,
    onInactive
  } = React30.useContext(MenuContext);
  const ret = {
    active: activeKey === eventKey
  };
  if (!disabled) {
    ret.onMouseEnter = (domEvent) => {
      onMouseEnter?.({
        key: eventKey,
        domEvent
      });
      onActive(eventKey);
    };
    ret.onMouseLeave = (domEvent) => {
      onMouseLeave?.({
        key: eventKey,
        domEvent
      });
      onInactive(eventKey);
    };
  }
  return ret;
}

// node_modules/@rc-component/menu/es/hooks/useDirectionStyle.js
var React31 = __toESM(require_react());
function useDirectionStyle(level) {
  const {
    mode,
    rtl,
    inlineIndent
  } = React31.useContext(MenuContext);
  if (mode !== "inline") {
    return null;
  }
  const len = level;
  return rtl ? {
    paddingRight: len * inlineIndent
  } : {
    paddingLeft: len * inlineIndent
  };
}

// node_modules/@rc-component/menu/es/Icon.js
var React32 = __toESM(require_react());
function Icon({
  icon,
  props,
  children
}) {
  let iconNode;
  if (icon === null || icon === false) {
    return null;
  }
  if (typeof icon === "function") {
    iconNode = React32.createElement(icon, {
      ...props
    });
  } else if (typeof icon !== "boolean") {
    iconNode = icon;
  }
  return iconNode || children || null;
}

// node_modules/@rc-component/menu/es/utils/warnUtil.js
function warnItemProp({
  item,
  ...restInfo
}) {
  Object.defineProperty(restInfo, "item", {
    get: () => {
      warning_default(false, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future.");
      return item;
    }
  });
  return restInfo;
}

// node_modules/@rc-component/menu/es/MenuItem.js
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
var LegacyMenuItem = class extends React33.Component {
  render() {
    const {
      title,
      attribute,
      elementRef,
      ...restProps
    } = this.props;
    const passedProps = omit(restProps, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
    warning_default(!attribute, "`attribute` of Menu.Item is deprecated. Please pass attribute directly.");
    return React33.createElement(es_default5.Item, _extends3({}, attribute, {
      title: typeof title === "string" ? title : void 0
    }, passedProps, {
      ref: elementRef
    }));
  }
};
var InternalMenuItem = React33.forwardRef((props, ref) => {
  const {
    style,
    className,
    eventKey,
    warnKey,
    disabled,
    itemIcon,
    children,
    // Aria
    role,
    // Active
    onMouseEnter,
    onMouseLeave,
    onClick,
    onKeyDown,
    onFocus,
    ...restProps
  } = props;
  const domDataId = useMenuId(eventKey);
  const {
    prefixCls,
    onItemClick,
    disabled: contextDisabled,
    overflowDisabled,
    // Icon
    itemIcon: contextItemIcon,
    // Select
    selectedKeys,
    // Active
    onActive
  } = React33.useContext(MenuContext);
  const {
    _internalRenderMenuItem
  } = React33.useContext(PrivateContext_default);
  const itemCls = `${prefixCls}-item`;
  const legacyMenuItemRef = React33.useRef();
  const elementRef = React33.useRef();
  const mergedDisabled = contextDisabled || disabled;
  const mergedEleRef = useComposeRef(ref, elementRef);
  const connectedKeys = useFullPath(eventKey);
  if (warnKey) {
    warning_default(false, "MenuItem should not leave undefined `key`.");
  }
  const getEventInfo = (e) => {
    return {
      key: eventKey,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: [...connectedKeys].reverse(),
      item: legacyMenuItemRef.current,
      domEvent: e
    };
  };
  const mergedItemIcon = itemIcon || contextItemIcon;
  const {
    active,
    ...activeProps
  } = useActive(eventKey, mergedDisabled, onMouseEnter, onMouseLeave);
  const selected = selectedKeys.includes(eventKey);
  const directionStyle = useDirectionStyle(connectedKeys.length);
  const onInternalClick = (e) => {
    if (mergedDisabled) {
      return;
    }
    const info = getEventInfo(e);
    onClick?.(warnItemProp(info));
    onItemClick(info);
  };
  const onInternalKeyDown = (e) => {
    onKeyDown?.(e);
    if (e.which === KeyCode_default.ENTER) {
      const info = getEventInfo(e);
      onClick?.(warnItemProp(info));
      onItemClick(info);
    }
  };
  const onInternalFocus = (e) => {
    onActive(eventKey);
    onFocus?.(e);
  };
  const optionRoleProps = {};
  if (props.role === "option") {
    optionRoleProps["aria-selected"] = selected;
  }
  let renderNode = React33.createElement(LegacyMenuItem, _extends3({
    ref: legacyMenuItemRef,
    elementRef: mergedEleRef,
    role: role === null ? "none" : role || "menuitem",
    tabIndex: disabled ? null : -1,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId
  }, omit(restProps, ["extra"]), activeProps, optionRoleProps, {
    component: "li",
    "aria-disabled": disabled,
    style: {
      ...directionStyle,
      ...style
    },
    className: clsx(itemCls, {
      [`${itemCls}-active`]: active,
      [`${itemCls}-selected`]: selected,
      [`${itemCls}-disabled`]: mergedDisabled
    }, className),
    onClick: onInternalClick,
    onKeyDown: onInternalKeyDown,
    onFocus: onInternalFocus
  }), children, React33.createElement(Icon, {
    props: {
      ...props,
      isSelected: selected
    },
    icon: mergedItemIcon
  }));
  if (_internalRenderMenuItem) {
    renderNode = _internalRenderMenuItem(renderNode, props, {
      selected
    });
  }
  return renderNode;
});
function MenuItem(props, ref) {
  const {
    eventKey
  } = props;
  const measure = useMeasure();
  const connectedKeyPath = useFullPath(eventKey);
  React33.useEffect(() => {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return () => {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  if (measure) {
    return null;
  }
  return React33.createElement(InternalMenuItem, _extends3({}, props, {
    ref
  }));
}
var MenuItem_default = React33.forwardRef(MenuItem);

// node_modules/@rc-component/menu/es/SubMenu/index.js
var React38 = __toESM(require_react());

// node_modules/@rc-component/menu/es/SubMenu/SubMenuList.js
var React34 = __toESM(require_react());
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
var InternalSubMenuList = ({
  className,
  children,
  ...restProps
}, ref) => {
  const {
    prefixCls,
    mode,
    rtl
  } = React34.useContext(MenuContext);
  return React34.createElement("ul", _extends4({
    className: clsx(prefixCls, rtl && `${prefixCls}-rtl`, `${prefixCls}-sub`, `${prefixCls}-${mode === "inline" ? "inline" : "vertical"}`, className),
    role: "menu"
  }, restProps, {
    "data-menu-list": true,
    ref
  }), children);
};
var SubMenuList = React34.forwardRef(InternalSubMenuList);
if (true) {
  SubMenuList.displayName = "SubMenuList";
}
var SubMenuList_default = SubMenuList;

// node_modules/@rc-component/menu/es/utils/commonUtil.js
var React35 = __toESM(require_react());
function parseChildren(children, keyPath) {
  return toArray(children).map((child, index) => {
    if (React35.isValidElement(child)) {
      const {
        key
      } = child;
      let eventKey = child.props?.eventKey ?? key;
      const emptyKey = eventKey === null || eventKey === void 0;
      if (emptyKey) {
        eventKey = `tmp_key-${[...keyPath, index].join("-")}`;
      }
      const cloneProps = {
        key: eventKey,
        eventKey
      };
      if (emptyKey) {
        cloneProps.warnKey = true;
      }
      return React35.cloneElement(child, cloneProps);
    }
    return child;
  });
}

// node_modules/@rc-component/menu/es/SubMenu/PopupTrigger.js
var React36 = __toESM(require_react());

// node_modules/@rc-component/menu/es/placements.js
var autoAdjustOverflow2 = {
  adjustX: 1,
  adjustY: 1
};
var placements2 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow2
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow2
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow2
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow2
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow2
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflow2
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow2
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflow2
  }
};
var placementsRtl = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: autoAdjustOverflow2
  },
  topRight: {
    points: ["br", "tr"],
    overflow: autoAdjustOverflow2
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: autoAdjustOverflow2
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: autoAdjustOverflow2
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: autoAdjustOverflow2
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: autoAdjustOverflow2
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: autoAdjustOverflow2
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: autoAdjustOverflow2
  }
};

// node_modules/@rc-component/menu/es/utils/motionUtil.js
function getMotion(mode, motion2, defaultMotions) {
  if (motion2) {
    return motion2;
  }
  if (defaultMotions) {
    return defaultMotions[mode] || defaultMotions.other;
  }
  return void 0;
}

// node_modules/@rc-component/menu/es/SubMenu/PopupTrigger.js
var popupPlacementMap = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function PopupTrigger({
  prefixCls,
  visible,
  children,
  popup,
  popupStyle,
  popupClassName,
  popupOffset,
  disabled,
  mode,
  onVisibleChange
}) {
  const {
    getPopupContainer,
    rtl,
    subMenuOpenDelay,
    subMenuCloseDelay,
    builtinPlacements,
    triggerSubMenuAction,
    forceSubMenuRender,
    rootClassName,
    // Motion
    motion: motion2,
    defaultMotions
  } = React36.useContext(MenuContext);
  const [innerVisible, setInnerVisible] = React36.useState(false);
  const placement = rtl ? {
    ...placementsRtl,
    ...builtinPlacements
  } : {
    ...placements2,
    ...builtinPlacements
  };
  const popupPlacement = popupPlacementMap[mode];
  const targetMotion = getMotion(mode, motion2, defaultMotions);
  const targetMotionRef = React36.useRef(targetMotion);
  if (mode !== "inline") {
    targetMotionRef.current = targetMotion;
  }
  const mergedMotion = {
    ...targetMotionRef.current,
    leavedClassName: `${prefixCls}-hidden`,
    removeOnLeave: false,
    motionAppear: true
  };
  const visibleRef = React36.useRef();
  React36.useEffect(() => {
    visibleRef.current = raf_default(() => {
      setInnerVisible(visible);
    });
    return () => {
      raf_default.cancel(visibleRef.current);
    };
  }, [visible]);
  return React36.createElement(es_default3, {
    prefixCls,
    popupClassName: clsx(`${prefixCls}-popup`, {
      [`${prefixCls}-rtl`]: rtl
    }, popupClassName, rootClassName),
    stretch: mode === "horizontal" ? "minWidth" : null,
    getPopupContainer,
    builtinPlacements: placement,
    popupPlacement,
    popupVisible: innerVisible,
    popup,
    popupStyle,
    popupAlign: popupOffset && {
      offset: popupOffset
    },
    action: disabled ? [] : [triggerSubMenuAction],
    mouseEnterDelay: subMenuOpenDelay,
    mouseLeaveDelay: subMenuCloseDelay,
    onPopupVisibleChange: onVisibleChange,
    forceRender: forceSubMenuRender,
    popupMotion: mergedMotion,
    fresh: true
  }, children);
}

// node_modules/@rc-component/menu/es/SubMenu/InlineSubMenuList.js
var React37 = __toESM(require_react());
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
function InlineSubMenuList({
  id,
  open,
  keyPath,
  children
}) {
  const fixedMode = "inline";
  const {
    prefixCls,
    forceSubMenuRender,
    motion: motion2,
    defaultMotions,
    mode
  } = React37.useContext(MenuContext);
  const sameModeRef = React37.useRef(false);
  sameModeRef.current = mode === fixedMode;
  const [destroy, setDestroy] = React37.useState(!sameModeRef.current);
  const mergedOpen = sameModeRef.current ? open : false;
  React37.useEffect(() => {
    if (sameModeRef.current) {
      setDestroy(false);
    }
  }, [mode]);
  const mergedMotion = {
    ...getMotion(fixedMode, motion2, defaultMotions)
  };
  if (keyPath.length > 1) {
    mergedMotion.motionAppear = false;
  }
  const originOnVisibleChanged = mergedMotion.onVisibleChanged;
  mergedMotion.onVisibleChanged = (newVisible) => {
    if (!sameModeRef.current && !newVisible) {
      setDestroy(true);
    }
    return originOnVisibleChanged?.(newVisible);
  };
  if (destroy) {
    return null;
  }
  return React37.createElement(InheritableContextProvider, {
    mode: fixedMode,
    locked: !sameModeRef.current
  }, React37.createElement(es_default2, _extends5({
    visible: mergedOpen
  }, mergedMotion, {
    forceRender: forceSubMenuRender,
    removeOnLeave: false,
    leavedClassName: `${prefixCls}-hidden`
  }), ({
    className: motionClassName,
    style: motionStyle
  }) => {
    return React37.createElement(SubMenuList_default, {
      id,
      className: motionClassName,
      style: motionStyle
    }, children);
  }));
}

// node_modules/@rc-component/menu/es/SubMenu/index.js
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
var InternalSubMenu = React38.forwardRef((props, ref) => {
  const {
    style,
    className,
    styles,
    classNames: menuClassNames,
    title,
    eventKey,
    warnKey,
    disabled,
    internalPopupClose,
    children,
    // Icons
    itemIcon,
    expandIcon,
    // Popup
    popupClassName,
    popupOffset,
    popupStyle,
    // Events
    onClick,
    onMouseEnter,
    onMouseLeave,
    onTitleClick,
    onTitleMouseEnter,
    onTitleMouseLeave,
    popupRender: propsPopupRender,
    ...restProps
  } = props;
  const domDataId = useMenuId(eventKey);
  const {
    prefixCls,
    mode,
    openKeys,
    // Disabled
    disabled: contextDisabled,
    overflowDisabled,
    // ActiveKey
    activeKey,
    // SelectKey
    selectedKeys,
    // Icon
    itemIcon: contextItemIcon,
    expandIcon: contextExpandIcon,
    // Events
    onItemClick,
    onOpenChange,
    onActive,
    popupRender: contextPopupRender
  } = React38.useContext(MenuContext);
  const {
    _internalRenderSubMenuItem
  } = React38.useContext(PrivateContext_default);
  const {
    isSubPathKey
  } = React38.useContext(PathUserContext);
  const connectedPath = useFullPath();
  const subMenuPrefixCls = `${prefixCls}-submenu`;
  const mergedDisabled = contextDisabled || disabled;
  const elementRef = React38.useRef();
  const popupRef = React38.useRef();
  if (warnKey) {
    warning_default(false, "SubMenu should not leave undefined `key`.");
  }
  const mergedItemIcon = itemIcon ?? contextItemIcon;
  const mergedExpandIcon = expandIcon ?? contextExpandIcon;
  const originOpen = openKeys.includes(eventKey);
  const open = !overflowDisabled && originOpen;
  const childrenSelected = isSubPathKey(selectedKeys, eventKey);
  const {
    active,
    ...activeProps
  } = useActive(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave);
  const [childrenActive, setChildrenActive] = React38.useState(false);
  const triggerChildrenActive = (newActive) => {
    if (!mergedDisabled) {
      setChildrenActive(newActive);
    }
  };
  const onInternalMouseEnter = (domEvent) => {
    triggerChildrenActive(true);
    onMouseEnter?.({
      key: eventKey,
      domEvent
    });
  };
  const onInternalMouseLeave = (domEvent) => {
    triggerChildrenActive(false);
    onMouseLeave?.({
      key: eventKey,
      domEvent
    });
  };
  const mergedActive = React38.useMemo(() => {
    if (active) {
      return active;
    }
    if (mode !== "inline") {
      return childrenActive || isSubPathKey([activeKey], eventKey);
    }
    return false;
  }, [mode, active, activeKey, childrenActive, eventKey, isSubPathKey]);
  const directionStyle = useDirectionStyle(connectedPath.length);
  const onInternalTitleClick = (e) => {
    if (mergedDisabled) {
      return;
    }
    onTitleClick?.({
      key: eventKey,
      domEvent: e
    });
    if (mode === "inline") {
      onOpenChange(eventKey, !originOpen);
    }
  };
  const onMergedItemClick = useMemoCallback((info) => {
    onClick?.(warnItemProp(info));
    onItemClick(info);
  });
  const onPopupVisibleChange = (newVisible) => {
    if (mode !== "inline") {
      onOpenChange(eventKey, newVisible);
    }
  };
  const onInternalFocus = () => {
    onActive(eventKey);
  };
  const popupId = domDataId && `${domDataId}-popup`;
  const expandIconNode = React38.useMemo(() => React38.createElement(Icon, {
    icon: mode !== "horizontal" ? mergedExpandIcon : void 0,
    props: {
      ...props,
      isOpen: open,
      // [Legacy] Not sure why need this mark
      isSubMenu: true
    }
  }, React38.createElement("i", {
    className: `${subMenuPrefixCls}-arrow`
  })), [mode, mergedExpandIcon, props, open, subMenuPrefixCls]);
  let titleNode = React38.createElement("div", _extends6({
    role: "menuitem",
    style: directionStyle,
    className: `${subMenuPrefixCls}-title`,
    tabIndex: mergedDisabled ? null : -1,
    ref: elementRef,
    title: typeof title === "string" ? title : null,
    "data-menu-id": overflowDisabled && domDataId ? null : domDataId,
    "aria-expanded": open,
    "aria-haspopup": true,
    "aria-controls": popupId,
    "aria-disabled": mergedDisabled,
    onClick: onInternalTitleClick,
    onFocus: onInternalFocus
  }, activeProps), title, expandIconNode);
  const triggerModeRef = React38.useRef(mode);
  if (mode !== "inline" && connectedPath.length > 1) {
    triggerModeRef.current = "vertical";
  } else {
    triggerModeRef.current = mode;
  }
  const popupContentTriggerMode = triggerModeRef.current;
  const renderPopupContent = React38.useMemo(() => {
    const originNode = React38.createElement(InheritableContextProvider, {
      classNames: menuClassNames,
      styles,
      mode: popupContentTriggerMode === "horizontal" ? "vertical" : popupContentTriggerMode
    }, React38.createElement(SubMenuList_default, {
      id: popupId,
      ref: popupRef
    }, children));
    const mergedPopupRender = propsPopupRender || contextPopupRender;
    if (mergedPopupRender) {
      const node = mergedPopupRender(originNode, {
        item: props,
        keys: connectedPath
      });
      return node;
    }
    return originNode;
  }, [propsPopupRender, contextPopupRender, connectedPath, popupId, children, props, popupContentTriggerMode]);
  if (!overflowDisabled) {
    const triggerMode = triggerModeRef.current;
    titleNode = React38.createElement(PopupTrigger, {
      mode: triggerMode,
      prefixCls: subMenuPrefixCls,
      visible: !internalPopupClose && open && mode !== "inline",
      popupClassName,
      popupOffset,
      popupStyle,
      popup: renderPopupContent,
      disabled: mergedDisabled,
      onVisibleChange: onPopupVisibleChange
    }, titleNode);
  }
  let listNode = React38.createElement(es_default5.Item, _extends6({
    ref,
    role: "none"
  }, restProps, {
    component: "li",
    style,
    className: clsx(subMenuPrefixCls, `${subMenuPrefixCls}-${mode}`, className, {
      [`${subMenuPrefixCls}-open`]: open,
      [`${subMenuPrefixCls}-active`]: mergedActive,
      [`${subMenuPrefixCls}-selected`]: childrenSelected,
      [`${subMenuPrefixCls}-disabled`]: mergedDisabled
    }),
    onMouseEnter: onInternalMouseEnter,
    onMouseLeave: onInternalMouseLeave
  }), titleNode, !overflowDisabled && React38.createElement(InlineSubMenuList, {
    id: popupId,
    open,
    keyPath: connectedPath
  }, children));
  if (_internalRenderSubMenuItem) {
    listNode = _internalRenderSubMenuItem(listNode, props, {
      selected: childrenSelected,
      active: mergedActive,
      open,
      disabled: mergedDisabled
    });
  }
  return React38.createElement(InheritableContextProvider, {
    classNames: menuClassNames,
    styles,
    onItemClick: onMergedItemClick,
    mode: mode === "horizontal" ? "vertical" : mode,
    itemIcon: mergedItemIcon,
    expandIcon: mergedExpandIcon
  }, listNode);
});
var SubMenu = React38.forwardRef((props, ref) => {
  const {
    eventKey,
    children
  } = props;
  const connectedKeyPath = useFullPath(eventKey);
  const childList = parseChildren(children, connectedKeyPath);
  const measure = useMeasure();
  React38.useEffect(() => {
    if (measure) {
      measure.registerPath(eventKey, connectedKeyPath);
      return () => {
        measure.unregisterPath(eventKey, connectedKeyPath);
      };
    }
  }, [connectedKeyPath]);
  let renderNode;
  if (measure) {
    renderNode = childList;
  } else {
    renderNode = React38.createElement(InternalSubMenu, _extends6({
      ref
    }, props), childList);
  }
  return React38.createElement(PathTrackerContext.Provider, {
    value: connectedKeyPath
  }, renderNode);
});
if (true) {
  SubMenu.displayName = "SubMenu";
}
var SubMenu_default = SubMenu;

// node_modules/@rc-component/menu/es/utils/nodeUtil.js
var React41 = __toESM(require_react());

// node_modules/@rc-component/menu/es/Divider.js
var React39 = __toESM(require_react());
function Divider({
  className,
  style
}) {
  const {
    prefixCls
  } = React39.useContext(MenuContext);
  const measure = useMeasure();
  if (measure) {
    return null;
  }
  return React39.createElement("li", {
    role: "separator",
    className: clsx(`${prefixCls}-item-divider`, className),
    style
  });
}

// node_modules/@rc-component/menu/es/MenuItemGroup.js
var React40 = __toESM(require_react());
function _extends7() {
  _extends7 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends7.apply(this, arguments);
}
var InternalMenuItemGroup = React40.forwardRef((props, ref) => {
  const {
    className,
    title,
    eventKey,
    children,
    ...restProps
  } = props;
  const {
    prefixCls,
    classNames: menuClassNames,
    styles
  } = React40.useContext(MenuContext);
  const groupPrefixCls = `${prefixCls}-item-group`;
  return React40.createElement("li", _extends7({
    ref,
    role: "presentation"
  }, restProps, {
    onClick: (e) => e.stopPropagation(),
    className: clsx(groupPrefixCls, className)
  }), React40.createElement("div", {
    role: "presentation",
    className: clsx(`${groupPrefixCls}-title`, menuClassNames?.listTitle),
    style: styles?.listTitle,
    title: typeof title === "string" ? title : void 0
  }, title), React40.createElement("ul", {
    role: "group",
    className: clsx(`${groupPrefixCls}-list`, menuClassNames?.list),
    style: styles?.list
  }, children));
});
var MenuItemGroup = React40.forwardRef((props, ref) => {
  const {
    eventKey,
    children
  } = props;
  const connectedKeyPath = useFullPath(eventKey);
  const childList = parseChildren(children, connectedKeyPath);
  const measure = useMeasure();
  if (measure) {
    return childList;
  }
  return React40.createElement(InternalMenuItemGroup, _extends7({
    ref
  }, omit(props, ["warnKey"])), childList);
});
if (true) {
  MenuItemGroup.displayName = "MenuItemGroup";
}
var MenuItemGroup_default = MenuItemGroup;

// node_modules/@rc-component/menu/es/utils/nodeUtil.js
function _extends8() {
  _extends8 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends8.apply(this, arguments);
}
function convertItemsToNodes(list, components, prefixCls) {
  const {
    item: MergedMenuItem,
    group: MergedMenuItemGroup,
    submenu: MergedSubMenu,
    divider: MergedDivider
  } = components;
  return (list || []).map((opt, index) => {
    if (opt && typeof opt === "object") {
      const {
        label,
        children,
        key,
        type,
        extra,
        ...restProps
      } = opt;
      const mergedKey = key ?? `tmp-${index}`;
      if (children || type === "group") {
        if (type === "group") {
          return React41.createElement(MergedMenuItemGroup, _extends8({
            key: mergedKey
          }, restProps, {
            title: label
          }), convertItemsToNodes(children, components, prefixCls));
        }
        return React41.createElement(MergedSubMenu, _extends8({
          key: mergedKey
        }, restProps, {
          title: label
        }), convertItemsToNodes(children, components, prefixCls));
      }
      if (type === "divider") {
        return React41.createElement(MergedDivider, _extends8({
          key: mergedKey
        }, restProps));
      }
      return React41.createElement(MergedMenuItem, _extends8({
        key: mergedKey
      }, restProps, {
        extra
      }), label, (!!extra || extra === 0) && React41.createElement("span", {
        className: `${prefixCls}-item-extra`
      }, extra));
    }
    return null;
  }).filter((opt) => opt);
}
function parseItems(children, items, keyPath, components, prefixCls) {
  let childNodes = children;
  const mergedComponents = {
    divider: Divider,
    item: MenuItem_default,
    group: MenuItemGroup_default,
    submenu: SubMenu_default,
    ...components
  };
  if (items) {
    childNodes = convertItemsToNodes(items, mergedComponents, prefixCls);
  }
  return parseChildren(childNodes, keyPath);
}

// node_modules/@rc-component/menu/es/Menu.js
function _extends9() {
  _extends9 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends9.apply(this, arguments);
}
var EMPTY_LIST = [];
var Menu = React42.forwardRef((props, ref) => {
  const {
    prefixCls = "rc-menu",
    rootClassName,
    style,
    className,
    styles,
    classNames: menuClassNames,
    tabIndex = 0,
    items,
    children,
    direction,
    id,
    // Mode
    mode = "vertical",
    inlineCollapsed,
    // Disabled
    disabled,
    disabledOverflow,
    // Open
    subMenuOpenDelay = 0.1,
    subMenuCloseDelay = 0.1,
    forceSubMenuRender,
    defaultOpenKeys,
    openKeys,
    // Active
    activeKey,
    defaultActiveFirst,
    // Selection
    selectable = true,
    multiple = false,
    defaultSelectedKeys,
    selectedKeys,
    onSelect,
    onDeselect,
    // Level
    inlineIndent = 24,
    // Motion
    motion: motion2,
    defaultMotions,
    // Popup
    triggerSubMenuAction = "hover",
    builtinPlacements,
    // Icon
    itemIcon,
    expandIcon,
    overflowedIndicator = "...",
    overflowedIndicatorPopupClassName,
    // Function
    getPopupContainer,
    // Events
    onClick,
    onOpenChange,
    onKeyDown,
    // Deprecated
    openAnimation,
    openTransitionName,
    // Internal
    _internalRenderMenuItem,
    _internalRenderSubMenuItem,
    _internalComponents,
    popupRender,
    ...restProps
  } = props;
  const [childList, measureChildList] = React42.useMemo(() => [parseItems(children, items, EMPTY_LIST, _internalComponents, prefixCls), parseItems(children, items, EMPTY_LIST, {}, prefixCls)], [children, items, _internalComponents]);
  const [mounted, setMounted] = React42.useState(false);
  const containerRef = React42.useRef();
  const uuid2 = useId_default(id ? `rc-menu-uuid-${id}` : "rc-menu-uuid");
  const isRtl = direction === "rtl";
  if (true) {
    warning_default(!openAnimation && !openTransitionName, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  }
  const [innerOpenKeys, setMergedOpenKeys] = useControlledState(defaultOpenKeys, openKeys);
  const mergedOpenKeys = innerOpenKeys || EMPTY_LIST;
  const triggerOpenKeys = (keys, forceFlush = false) => {
    function doUpdate() {
      setMergedOpenKeys(keys);
      onOpenChange?.(keys);
    }
    if (forceFlush) {
      (0, import_react_dom2.flushSync)(doUpdate);
    } else {
      doUpdate();
    }
  };
  const [inlineCacheOpenKeys, setInlineCacheOpenKeys] = React42.useState(mergedOpenKeys);
  const mountRef = React42.useRef(false);
  const [mergedMode, mergedInlineCollapsed] = React42.useMemo(() => {
    if ((mode === "inline" || mode === "vertical") && inlineCollapsed) {
      return ["vertical", inlineCollapsed];
    }
    return [mode, false];
  }, [mode, inlineCollapsed]);
  const isInlineMode = mergedMode === "inline";
  const [internalMode, setInternalMode] = React42.useState(mergedMode);
  const [internalInlineCollapsed, setInternalInlineCollapsed] = React42.useState(mergedInlineCollapsed);
  React42.useEffect(() => {
    setInternalMode(mergedMode);
    setInternalInlineCollapsed(mergedInlineCollapsed);
    if (!mountRef.current) {
      return;
    }
    if (isInlineMode) {
      setMergedOpenKeys(inlineCacheOpenKeys);
    } else {
      triggerOpenKeys(EMPTY_LIST);
    }
  }, [mergedMode, mergedInlineCollapsed]);
  const [lastVisibleIndex, setLastVisibleIndex] = React42.useState(0);
  const allVisible = lastVisibleIndex >= childList.length - 1 || internalMode !== "horizontal" || disabledOverflow;
  React42.useEffect(() => {
    if (isInlineMode) {
      setInlineCacheOpenKeys(mergedOpenKeys);
    }
  }, [mergedOpenKeys]);
  React42.useEffect(() => {
    mountRef.current = true;
    return () => {
      mountRef.current = false;
    };
  }, []);
  const {
    registerPath,
    unregisterPath,
    refreshOverflowKeys,
    isSubPathKey,
    getKeyPath,
    getKeys,
    getSubPathKeys
  } = useKeyRecords();
  const registerPathContext = React42.useMemo(() => ({
    registerPath,
    unregisterPath
  }), [registerPath, unregisterPath]);
  const pathUserContext = React42.useMemo(() => ({
    isSubPathKey
  }), [isSubPathKey]);
  React42.useEffect(() => {
    refreshOverflowKeys(allVisible ? EMPTY_LIST : childList.slice(lastVisibleIndex + 1).map((child) => child.key));
  }, [lastVisibleIndex, allVisible]);
  const [mergedActiveKey, setMergedActiveKey] = useControlledState(activeKey || defaultActiveFirst && childList[0]?.key, activeKey);
  const onActive = useMemoCallback((key) => {
    setMergedActiveKey(key);
  });
  const onInactive = useMemoCallback(() => {
    setMergedActiveKey(void 0);
  });
  (0, import_react12.useImperativeHandle)(ref, () => {
    return {
      list: containerRef.current,
      focus: (options) => {
        const keys = getKeys();
        const {
          elements,
          key2element,
          element2key
        } = refreshElements(keys, uuid2);
        const focusableElements = getFocusableElements(containerRef.current, elements);
        let shouldFocusKey;
        if (mergedActiveKey && keys.includes(mergedActiveKey)) {
          shouldFocusKey = mergedActiveKey;
        } else {
          shouldFocusKey = focusableElements[0] ? element2key.get(focusableElements[0]) : childList.find((node) => !node.props.disabled)?.key;
        }
        const elementToFocus = key2element.get(shouldFocusKey);
        if (shouldFocusKey && elementToFocus) {
          elementToFocus?.focus?.(options);
        }
      },
      findItem: ({
        key: itemKey
      }) => {
        const keys = getKeys();
        const {
          key2element
        } = refreshElements(keys, uuid2);
        return key2element.get(itemKey) || null;
      }
    };
  });
  const [internalSelectKeys, setMergedSelectKeys] = useControlledState(defaultSelectedKeys || [], selectedKeys);
  const mergedSelectKeys = React42.useMemo(() => {
    if (Array.isArray(internalSelectKeys)) {
      return internalSelectKeys;
    }
    if (internalSelectKeys === null || internalSelectKeys === void 0) {
      return EMPTY_LIST;
    }
    return [internalSelectKeys];
  }, [internalSelectKeys]);
  const triggerSelection = (info) => {
    if (selectable) {
      const {
        key: targetKey
      } = info;
      const exist = mergedSelectKeys.includes(targetKey);
      let newSelectKeys;
      if (multiple) {
        if (exist) {
          newSelectKeys = mergedSelectKeys.filter((key) => key !== targetKey);
        } else {
          newSelectKeys = [...mergedSelectKeys, targetKey];
        }
      } else {
        newSelectKeys = [targetKey];
      }
      setMergedSelectKeys(newSelectKeys);
      const selectInfo = {
        ...info,
        selectedKeys: newSelectKeys
      };
      if (exist) {
        onDeselect?.(selectInfo);
      } else {
        onSelect?.(selectInfo);
      }
    }
    if (!multiple && mergedOpenKeys.length && internalMode !== "inline") {
      triggerOpenKeys(EMPTY_LIST);
    }
  };
  const onInternalClick = useMemoCallback((info) => {
    onClick?.(warnItemProp(info));
    triggerSelection(info);
  });
  const onInternalOpenChange = useMemoCallback((key, open) => {
    let newOpenKeys = mergedOpenKeys.filter((k) => k !== key);
    if (open) {
      newOpenKeys.push(key);
    } else if (internalMode !== "inline") {
      const subPathKeys = getSubPathKeys(key);
      newOpenKeys = newOpenKeys.filter((k) => !subPathKeys.has(k));
    }
    if (!isEqual_default(mergedOpenKeys, newOpenKeys, true)) {
      triggerOpenKeys(newOpenKeys, true);
    }
  });
  const triggerAccessibilityOpen = (key, open) => {
    const nextOpen = open ?? !mergedOpenKeys.includes(key);
    onInternalOpenChange(key, nextOpen);
  };
  const onInternalKeyDown = useAccessibility2(internalMode, mergedActiveKey, isRtl, uuid2, containerRef, getKeys, getKeyPath, setMergedActiveKey, triggerAccessibilityOpen, onKeyDown);
  React42.useEffect(() => {
    setMounted(true);
  }, []);
  const privateContext = React42.useMemo(() => ({
    _internalRenderMenuItem,
    _internalRenderSubMenuItem
  }), [_internalRenderMenuItem, _internalRenderSubMenuItem]);
  const wrappedChildList = internalMode !== "horizontal" || disabledOverflow ? childList : (
    // Need wrap for overflow dropdown that do not response for open
    childList.map((child, index) => (
      // Always wrap provider to avoid sub node re-mount
      React42.createElement(InheritableContextProvider, {
        key: child.key,
        overflowDisabled: index > lastVisibleIndex,
        classNames: menuClassNames,
        styles
      }, child)
    ))
  );
  const container = React42.createElement(es_default5, _extends9({
    id,
    ref: containerRef,
    prefixCls: `${prefixCls}-overflow`,
    component: "ul",
    itemComponent: MenuItem_default,
    className: clsx(prefixCls, `${prefixCls}-root`, `${prefixCls}-${internalMode}`, className, {
      [`${prefixCls}-inline-collapsed`]: internalInlineCollapsed,
      [`${prefixCls}-rtl`]: isRtl
    }, rootClassName),
    dir: direction,
    style,
    role: "menu",
    tabIndex,
    data: wrappedChildList,
    renderRawItem: (node) => node,
    renderRawRest: (omitItems) => {
      const len = omitItems.length;
      const originOmitItems = len ? childList.slice(-len) : null;
      return React42.createElement(SubMenu_default, {
        eventKey: OVERFLOW_KEY,
        title: overflowedIndicator,
        disabled: allVisible,
        internalPopupClose: len === 0,
        popupClassName: overflowedIndicatorPopupClassName
      }, originOmitItems);
    },
    maxCount: internalMode !== "horizontal" || disabledOverflow ? es_default5.INVALIDATE : es_default5.RESPONSIVE,
    ssr: "full",
    "data-menu-list": true,
    onVisibleChange: (newLastIndex) => {
      setLastVisibleIndex(newLastIndex);
    },
    onKeyDown: onInternalKeyDown
  }, restProps));
  return React42.createElement(PrivateContext_default.Provider, {
    value: privateContext
  }, React42.createElement(IdContext.Provider, {
    value: uuid2
  }, React42.createElement(InheritableContextProvider, {
    prefixCls,
    rootClassName,
    classNames: menuClassNames,
    styles,
    mode: internalMode,
    openKeys: mergedOpenKeys,
    rtl: isRtl,
    disabled,
    motion: mounted ? motion2 : null,
    defaultMotions: mounted ? defaultMotions : null,
    activeKey: mergedActiveKey,
    onActive,
    onInactive,
    selectedKeys: mergedSelectKeys,
    inlineIndent,
    subMenuOpenDelay,
    subMenuCloseDelay,
    forceSubMenuRender,
    builtinPlacements,
    triggerSubMenuAction,
    getPopupContainer,
    itemIcon,
    expandIcon,
    onItemClick: onInternalClick,
    onOpenChange: onInternalOpenChange,
    popupRender
  }, React42.createElement(PathUserContext.Provider, {
    value: pathUserContext
  }, container), React42.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": true
  }, React42.createElement(PathRegisterContext.Provider, {
    value: registerPathContext
  }, measureChildList)))));
});
var Menu_default = Menu;

// node_modules/@rc-component/menu/es/index.js
var ExportMenu = Menu_default;
ExportMenu.Item = MenuItem_default;
ExportMenu.SubMenu = SubMenu_default;
ExportMenu.ItemGroup = MenuItemGroup_default;
ExportMenu.Divider = Divider;
var es_default6 = ExportMenu;

// node_modules/@rc-component/tabs/es/TabNavList/OperationNode.js
var React43 = __toESM(require_react());
var import_react13 = __toESM(require_react());
function _extends10() {
  _extends10 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends10.apply(this, arguments);
}
var OperationNode = React43.forwardRef((props, ref) => {
  const {
    prefixCls,
    id,
    tabs,
    locale,
    mobile,
    more: moreProps = {},
    style,
    className,
    editable,
    tabBarGutter,
    rtl,
    removeAriaLabel,
    onTabClick,
    getPopupContainer,
    popupClassName,
    popupStyle
  } = props;
  const [open, setOpen] = (0, import_react13.useState)(false);
  const [selectedKey, setSelectedKey] = (0, import_react13.useState)(null);
  const {
    icon: moreIcon = "More"
  } = moreProps;
  const popupId = `${id}-more-popup`;
  const dropdownPrefix = `${prefixCls}-dropdown`;
  const selectedItemId = selectedKey !== null ? `${popupId}-${selectedKey}` : null;
  const dropdownAriaLabel = locale?.dropdownAriaLabel;
  function onRemoveTab(event, key) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit("remove", {
      key,
      event
    });
  }
  const menu = React43.createElement(es_default6, {
    onClick: ({
      key,
      domEvent
    }) => {
      onTabClick(key, domEvent);
      setOpen(false);
    },
    prefixCls: `${dropdownPrefix}-menu`,
    id: popupId,
    tabIndex: -1,
    role: "listbox",
    "aria-activedescendant": selectedItemId,
    selectedKeys: [selectedKey],
    "aria-label": dropdownAriaLabel !== void 0 ? dropdownAriaLabel : "expanded dropdown"
  }, tabs.map((tab) => {
    const {
      closable,
      disabled,
      closeIcon,
      key,
      label
    } = tab;
    const removable = getRemovable(closable, closeIcon, editable, disabled);
    return React43.createElement(MenuItem_default, {
      key,
      id: `${popupId}-${key}`,
      role: "option",
      "aria-controls": id && `${id}-panel-${key}`,
      disabled
    }, React43.createElement("span", null, label), removable && React43.createElement("button", {
      type: "button",
      "aria-label": removeAriaLabel || "remove",
      tabIndex: 0,
      className: `${dropdownPrefix}-menu-item-remove`,
      onClick: (e) => {
        e.stopPropagation();
        onRemoveTab(e, key);
      }
    }, closeIcon || editable.removeIcon || "×"));
  }));
  function selectOffset(offset) {
    const enabledTabs = tabs.filter((tab) => !tab.disabled);
    let selectedIndex = enabledTabs.findIndex((tab) => tab.key === selectedKey) || 0;
    const len = enabledTabs.length;
    for (let i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      const tab = enabledTabs[selectedIndex];
      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }
  function onKeyDown(e) {
    const {
      which
    } = e;
    if (!open) {
      if ([KeyCode_default.DOWN, KeyCode_default.SPACE, KeyCode_default.ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }
      return;
    }
    switch (which) {
      case KeyCode_default.UP:
        selectOffset(-1);
        e.preventDefault();
        break;
      case KeyCode_default.DOWN:
        selectOffset(1);
        e.preventDefault();
        break;
      case KeyCode_default.ESC:
        setOpen(false);
        break;
      case KeyCode_default.SPACE:
      case KeyCode_default.ENTER:
        if (selectedKey !== null) {
          onTabClick(selectedKey, e);
        }
        break;
    }
  }
  (0, import_react13.useEffect)(() => {
    const ele = document.getElementById(selectedItemId);
    if (ele?.scrollIntoView) {
      ele.scrollIntoView(false);
    }
  }, [selectedItemId, selectedKey]);
  (0, import_react13.useEffect)(() => {
    if (!open) {
      setSelectedKey(null);
    }
  }, [open]);
  const moreStyle = {
    marginInlineStart: tabBarGutter
  };
  if (!tabs.length) {
    moreStyle.visibility = "hidden";
    moreStyle.order = 1;
  }
  const overlayClassName = clsx(popupClassName, {
    [`${dropdownPrefix}-rtl`]: rtl
  });
  const moreNode = mobile ? null : React43.createElement(es_default4, _extends10({
    prefixCls: dropdownPrefix,
    overlay: menu,
    visible: tabs.length ? open : false,
    onVisibleChange: setOpen,
    overlayClassName,
    overlayStyle: popupStyle,
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    getPopupContainer
  }, moreProps), React43.createElement("button", {
    type: "button",
    className: `${prefixCls}-nav-more`,
    style: moreStyle,
    "aria-haspopup": "listbox",
    "aria-controls": popupId,
    id: `${id}-more`,
    "aria-expanded": open,
    onKeyDown
  }, moreIcon));
  return React43.createElement("div", {
    className: clsx(`${prefixCls}-nav-operations`, className),
    style,
    ref
  }, moreNode, React43.createElement(AddButton_default, {
    prefixCls,
    locale,
    editable
  }));
});
var OperationNode_default = React43.memo(OperationNode, (_, next) => (
  // https://github.com/ant-design/ant-design/issues/32544
  // We'd better remove syntactic sugar in `rc-menu` since this has perf issue
  next.tabMoving
));

// node_modules/@rc-component/tabs/es/TabNavList/TabNode.js
var React44 = __toESM(require_react());
var TabNode = (props) => {
  const {
    prefixCls,
    id,
    active,
    focus,
    tab: {
      key,
      label,
      disabled,
      closeIcon,
      icon
    },
    closable,
    renderWrapper,
    removeAriaLabel,
    editable,
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    onMouseDown,
    onMouseUp,
    style,
    className,
    tabCount,
    currentPosition
  } = props;
  const tabPrefix = `${prefixCls}-tab`;
  const removable = getRemovable(closable, closeIcon, editable, disabled);
  function onInternalClick(e) {
    if (disabled) {
      return;
    }
    onClick(e);
  }
  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit("remove", {
      key,
      event
    });
  }
  const labelNode = React44.useMemo(() => icon && typeof label === "string" ? React44.createElement("span", null, label) : label, [label, icon]);
  const btnRef = React44.useRef(null);
  React44.useEffect(() => {
    if (focus && btnRef.current) {
      btnRef.current.focus();
    }
  }, [focus]);
  const node = React44.createElement("div", {
    key,
    "data-node-key": genDataNodeKey(key),
    className: clsx(tabPrefix, className, {
      [`${tabPrefix}-with-remove`]: removable,
      [`${tabPrefix}-active`]: active,
      [`${tabPrefix}-disabled`]: disabled,
      [`${tabPrefix}-focus`]: focus
    }),
    style,
    onClick: onInternalClick
  }, React44.createElement("div", {
    ref: btnRef,
    role: "tab",
    "aria-selected": active,
    id: id && `${id}-tab-${key}`,
    className: `${tabPrefix}-btn`,
    "aria-controls": id && `${id}-panel-${key}`,
    "aria-disabled": disabled,
    tabIndex: disabled ? null : active ? 0 : -1,
    onClick: (e) => {
      e.stopPropagation();
      onInternalClick(e);
    },
    onKeyDown,
    onMouseDown,
    onMouseUp,
    onFocus,
    onBlur
  }, focus && React44.createElement("div", {
    "aria-live": "polite",
    style: {
      width: 0,
      height: 0,
      position: "absolute",
      overflow: "hidden",
      opacity: 0
    }
  }, `Tab ${currentPosition} of ${tabCount}`), icon && React44.createElement("span", {
    className: `${tabPrefix}-icon`
  }, icon), label && labelNode), removable && React44.createElement("button", {
    type: "button",
    "aria-label": removeAriaLabel || "remove",
    tabIndex: active ? 0 : -1,
    className: `${tabPrefix}-remove`,
    onClick: (e) => {
      e.stopPropagation();
      onRemoveTab(e);
    }
  }, closeIcon || editable.removeIcon || "×"));
  return renderWrapper ? renderWrapper(node) : node;
};
var TabNode_default = TabNode;

// node_modules/@rc-component/tabs/es/TabNavList/index.js
function _extends11() {
  _extends11 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends11.apply(this, arguments);
}
var getTabSize = (tab, containerRect) => {
  const {
    offsetWidth,
    offsetHeight,
    offsetTop,
    offsetLeft
  } = tab;
  const {
    width,
    height,
    left,
    top
  } = tab.getBoundingClientRect();
  if (Math.abs(width - offsetWidth) < 1) {
    return [width, height, left - containerRect.left, top - containerRect.top];
  }
  return [offsetWidth, offsetHeight, offsetLeft, offsetTop];
};
var getSize = (refObj) => {
  const {
    offsetWidth = 0,
    offsetHeight = 0
  } = refObj.current || {};
  if (refObj.current) {
    const {
      width,
      height
    } = refObj.current.getBoundingClientRect();
    if (Math.abs(width - offsetWidth) < 1) {
      return [width, height];
    }
  }
  return [offsetWidth, offsetHeight];
};
var getUnitValue = (size, tabPositionTopOrBottom) => {
  return size[tabPositionTopOrBottom ? 0 : 1];
};
var TabNavList = React45.forwardRef((props, ref) => {
  const {
    className,
    style,
    id,
    animated,
    activeKey,
    rtl,
    extra,
    editable,
    locale,
    tabPosition,
    tabBarGutter,
    children,
    onTabClick,
    onTabScroll,
    indicator,
    classNames: tabsClassNames,
    styles
  } = props;
  const {
    prefixCls,
    tabs
  } = React45.useContext(TabContext_default);
  const containerRef = (0, import_react14.useRef)(null);
  const extraLeftRef = (0, import_react14.useRef)(null);
  const extraRightRef = (0, import_react14.useRef)(null);
  const tabsWrapperRef = (0, import_react14.useRef)(null);
  const tabListRef = (0, import_react14.useRef)(null);
  const operationsRef = (0, import_react14.useRef)(null);
  const innerAddButtonRef = (0, import_react14.useRef)(null);
  const tabPositionTopOrBottom = tabPosition === "top" || tabPosition === "bottom";
  const [transformLeft, setTransformLeft] = useSyncState(0, (next, prev) => {
    if (tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? "left" : "right"
      });
    }
  });
  const [transformTop, setTransformTop] = useSyncState(0, (next, prev) => {
    if (!tabPositionTopOrBottom && onTabScroll) {
      onTabScroll({
        direction: next > prev ? "top" : "bottom"
      });
    }
  });
  const [containerExcludeExtraSize, setContainerExcludeExtraSize] = (0, import_react14.useState)([0, 0]);
  const [tabContentSize, setTabContentSize] = (0, import_react14.useState)([0, 0]);
  const [addSize, setAddSize] = (0, import_react14.useState)([0, 0]);
  const [operationSize, setOperationSize] = (0, import_react14.useState)([0, 0]);
  const [tabSizes, setTabSizes] = useUpdateState(/* @__PURE__ */ new Map());
  const tabOffsets = useOffsets(tabs, tabSizes, tabContentSize[0]);
  const containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
  const tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
  const addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
  const operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
  const needScroll = Math.floor(containerExcludeExtraSizeValue) < Math.floor(tabContentSizeValue + addSizeValue);
  const visibleTabContentValue = needScroll ? containerExcludeExtraSizeValue - operationSizeValue : containerExcludeExtraSizeValue - addSizeValue;
  const operationsHiddenClassName = `${prefixCls}-nav-operations-hidden`;
  let transformMin = 0;
  let transformMax = 0;
  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
  } else {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  }
  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }
    if (value > transformMax) {
      return transformMax;
    }
    return value;
  }
  const touchMovingRef = (0, import_react14.useRef)(null);
  const [lockAnimation, setLockAnimation] = (0, import_react14.useState)();
  function doLockAnimation() {
    setLockAnimation(Date.now());
  }
  function clearTouchMoving() {
    if (touchMovingRef.current) {
      clearTimeout(touchMovingRef.current);
    }
  }
  useTouchMove(tabsWrapperRef, (offsetX, offsetY) => {
    function doMove(setState, offset) {
      setState((value) => {
        const newValue = alignInRange(value + offset);
        return newValue;
      });
    }
    if (!needScroll) {
      return false;
    }
    if (tabPositionTopOrBottom) {
      doMove(setTransformLeft, offsetX);
    } else {
      doMove(setTransformTop, offsetY);
    }
    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  (0, import_react14.useEffect)(() => {
    clearTouchMoving();
    if (lockAnimation) {
      touchMovingRef.current = setTimeout(() => {
        setLockAnimation(0);
      }, 100);
    }
    return clearTouchMoving;
  }, [lockAnimation]);
  const [visibleStart, visibleEnd] = useVisibleRange(
    tabOffsets,
    // Container
    visibleTabContentValue,
    // Transform
    tabPositionTopOrBottom ? transformLeft : transformTop,
    // Tabs
    tabContentSizeValue,
    // Add
    addSizeValue,
    // Operation
    operationSizeValue,
    {
      ...props,
      tabs
    }
  );
  const scrollToTab = useEvent_default((key = activeKey) => {
    const tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (tabPositionTopOrBottom) {
      let newTransform = transformLeft;
      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) {
          newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
        }
      } else if (tabOffset.left < -transformLeft) {
        newTransform = -tabOffset.left;
      } else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) {
        newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
      }
      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      let newTransform = transformTop;
      if (tabOffset.top < -transformTop) {
        newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) {
        newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
      }
      setTransformLeft(0);
      setTransformTop(alignInRange(newTransform));
    }
  });
  const [focusKey, setFocusKey] = (0, import_react14.useState)();
  const [isMouse, setIsMouse] = (0, import_react14.useState)(false);
  const enabledTabs = tabs.filter((tab) => !tab.disabled).map((tab) => tab.key);
  const onOffset = (offset) => {
    const currentIndex = enabledTabs.indexOf(focusKey || activeKey);
    const len = enabledTabs.length;
    const nextIndex = (currentIndex + offset + len) % len;
    const newKey = enabledTabs[nextIndex];
    setFocusKey(newKey);
  };
  const handleRemoveTab = (removalTabKey, e) => {
    const removeIndex = enabledTabs.indexOf(removalTabKey);
    const removeTab = tabs.find((tab) => tab.key === removalTabKey);
    const removable = getRemovable(removeTab?.closable, removeTab?.closeIcon, editable, removeTab?.disabled);
    if (removable) {
      e.preventDefault();
      e.stopPropagation();
      editable.onEdit("remove", {
        key: removalTabKey,
        event: e
      });
      if (removeIndex === enabledTabs.length - 1) {
        onOffset(-1);
      } else {
        onOffset(1);
      }
    }
  };
  const handleMouseDown = (key, e) => {
    setIsMouse(true);
    if (e.button === 1) {
      handleRemoveTab(key, e);
    }
  };
  const handleKeyDown = (e) => {
    const {
      code
    } = e;
    const isRTL = rtl && tabPositionTopOrBottom;
    const firstEnabledTab = enabledTabs[0];
    const lastEnabledTab = enabledTabs[enabledTabs.length - 1];
    switch (code) {
      // LEFT
      case "ArrowLeft": {
        if (tabPositionTopOrBottom) {
          onOffset(isRTL ? 1 : -1);
        }
        break;
      }
      // RIGHT
      case "ArrowRight": {
        if (tabPositionTopOrBottom) {
          onOffset(isRTL ? -1 : 1);
        }
        break;
      }
      // UP
      case "ArrowUp": {
        e.preventDefault();
        if (!tabPositionTopOrBottom) {
          onOffset(-1);
        }
        break;
      }
      // DOWN
      case "ArrowDown": {
        e.preventDefault();
        if (!tabPositionTopOrBottom) {
          onOffset(1);
        }
        break;
      }
      // HOME
      case "Home": {
        e.preventDefault();
        setFocusKey(firstEnabledTab);
        break;
      }
      // END
      case "End": {
        e.preventDefault();
        setFocusKey(lastEnabledTab);
        break;
      }
      // Enter & Space
      case "Enter":
      case "Space": {
        e.preventDefault();
        onTabClick(focusKey ?? activeKey, e);
        break;
      }
      // Backspace
      case "Backspace":
      case "Delete": {
        handleRemoveTab(focusKey, e);
        break;
      }
    }
  };
  const tabNodeStyle = {};
  if (tabPositionTopOrBottom) {
    tabNodeStyle.marginInlineStart = tabBarGutter;
  } else {
    tabNodeStyle.marginTop = tabBarGutter;
  }
  const tabNodes = tabs.map((tab, i) => {
    const {
      key
    } = tab;
    return React45.createElement(TabNode_default, {
      id,
      prefixCls,
      key,
      tab,
      className: tabsClassNames?.item,
      style: i === 0 ? styles?.item : {
        ...tabNodeStyle,
        ...styles?.item
      },
      closable: tab.closable,
      editable,
      active: key === activeKey,
      focus: key === focusKey,
      renderWrapper: children,
      removeAriaLabel: locale?.removeAriaLabel,
      tabCount: enabledTabs.length,
      currentPosition: i + 1,
      onClick: (e) => {
        onTabClick(key, e);
      },
      onKeyDown: handleKeyDown,
      onFocus: () => {
        if (!isMouse) {
          setFocusKey(key);
        }
        scrollToTab(key);
        doLockAnimation();
        if (!tabsWrapperRef.current) {
          return;
        }
        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }
        tabsWrapperRef.current.scrollTop = 0;
      },
      onBlur: () => {
        setFocusKey(void 0);
      },
      onMouseDown: (e) => handleMouseDown(key, e),
      onMouseUp: () => {
        setIsMouse(false);
      }
    });
  });
  const updateTabSizes = () => setTabSizes(() => {
    const newSizes = /* @__PURE__ */ new Map();
    const listRect = tabListRef.current?.getBoundingClientRect();
    tabs.forEach(({
      key
    }) => {
      const btnNode = tabListRef.current?.querySelector(`[data-node-key="${genDataNodeKey(key)}"]`);
      if (btnNode) {
        const [width, height, left, top] = getTabSize(btnNode, listRect);
        newSizes.set(key, {
          width,
          height,
          left,
          top
        });
      }
    });
    return newSizes;
  });
  (0, import_react14.useEffect)(() => {
    updateTabSizes();
  }, [tabs.map((tab) => tab.key).join("_")]);
  const onListHolderResize = useUpdate(() => {
    const containerSize = getSize(containerRef);
    const extraLeftSize = getSize(extraLeftRef);
    const extraRightSize = getSize(extraRightRef);
    setContainerExcludeExtraSize([containerSize[0] - extraLeftSize[0] - extraRightSize[0], containerSize[1] - extraLeftSize[1] - extraRightSize[1]]);
    const newAddSize = getSize(innerAddButtonRef);
    setAddSize(newAddSize);
    const newOperationSize = getSize(operationsRef);
    setOperationSize(newOperationSize);
    const tabContentFullSize = getSize(tabListRef);
    setTabContentSize([tabContentFullSize[0] - newAddSize[0], tabContentFullSize[1] - newAddSize[1]]);
    updateTabSizes();
  });
  const startHiddenTabs = tabs.slice(0, visibleStart);
  const endHiddenTabs = tabs.slice(visibleEnd + 1);
  const hiddenTabs = [...startHiddenTabs, ...endHiddenTabs];
  const activeTabOffset = tabOffsets.get(activeKey);
  const {
    style: indicatorStyle
  } = useIndicator_default({
    activeTabOffset,
    horizontal: tabPositionTopOrBottom,
    indicator,
    rtl
  });
  (0, import_react14.useEffect)(() => {
    scrollToTab();
  }, [activeKey, transformMin, transformMax, stringify(activeTabOffset), stringify(tabOffsets), tabPositionTopOrBottom]);
  (0, import_react14.useEffect)(() => {
    onListHolderResize();
  }, [rtl]);
  const hasDropdown = !!hiddenTabs.length;
  const wrapPrefix = `${prefixCls}-nav-wrap`;
  let pingLeft;
  let pingRight;
  let pingTop;
  let pingBottom;
  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft !== transformMax;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = transformLeft !== transformMin;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = transformTop !== transformMin;
  }
  return React45.createElement(es_default, {
    onResize: onListHolderResize
  }, React45.createElement("div", {
    ref: useComposeRef(ref, containerRef),
    role: "tablist",
    "aria-orientation": tabPositionTopOrBottom ? "horizontal" : "vertical",
    className: clsx(`${prefixCls}-nav`, className, tabsClassNames?.header),
    style: {
      ...styles?.header,
      ...style
    },
    onKeyDown: () => {
      doLockAnimation();
    }
  }, React45.createElement(ExtraContent_default, {
    ref: extraLeftRef,
    position: "left",
    extra,
    prefixCls
  }), React45.createElement(es_default, {
    onResize: onListHolderResize
  }, React45.createElement("div", {
    className: clsx(wrapPrefix, {
      [`${wrapPrefix}-ping-left`]: pingLeft,
      [`${wrapPrefix}-ping-right`]: pingRight,
      [`${wrapPrefix}-ping-top`]: pingTop,
      [`${wrapPrefix}-ping-bottom`]: pingBottom
    }),
    ref: tabsWrapperRef
  }, React45.createElement(es_default, {
    onResize: onListHolderResize
  }, React45.createElement("div", {
    ref: tabListRef,
    className: `${prefixCls}-nav-list`,
    style: {
      transform: `translate(${transformLeft}px, ${transformTop}px)`,
      transition: lockAnimation ? "none" : void 0
    }
  }, tabNodes, React45.createElement(AddButton_default, {
    ref: innerAddButtonRef,
    prefixCls,
    locale,
    editable,
    style: {
      ...tabNodes.length === 0 ? void 0 : tabNodeStyle,
      visibility: hasDropdown ? "hidden" : null
    }
  }), React45.createElement("div", {
    className: clsx(`${prefixCls}-ink-bar`, tabsClassNames?.indicator, {
      [`${prefixCls}-ink-bar-animated`]: animated.inkBar
    }),
    style: {
      ...indicatorStyle,
      ...styles?.indicator
    }
  }))))), React45.createElement(OperationNode_default, _extends11({}, props, {
    removeAriaLabel: locale?.removeAriaLabel,
    ref: operationsRef,
    prefixCls,
    tabs: hiddenTabs,
    className: !hasDropdown && operationsHiddenClassName,
    popupStyle: styles?.popup,
    tabMoving: !!lockAnimation
  })), React45.createElement(ExtraContent_default, {
    ref: extraRightRef,
    position: "right",
    extra,
    prefixCls
  })));
});
var TabNavList_default = TabNavList;

// node_modules/@rc-component/tabs/es/TabNavList/Wrapper.js
var TabNavListWrapper = ({
  renderTabBar,
  ...restProps
}) => {
  if (renderTabBar) {
    return renderTabBar(restProps, TabNavList_default);
  }
  return React46.createElement(TabNavList_default, restProps);
};
if (true) {
  TabNavListWrapper.displayName = "TabNavListWrapper";
}
var Wrapper_default = TabNavListWrapper;

// node_modules/@rc-component/tabs/es/TabPanelList/index.js
var React48 = __toESM(require_react());

// node_modules/@rc-component/tabs/es/TabPanelList/TabPane.js
var React47 = __toESM(require_react());
var TabPane = React47.forwardRef((props, ref) => {
  const {
    prefixCls,
    className,
    style,
    id,
    active,
    tabKey,
    children
  } = props;
  const hasContent = React47.Children.count(children) > 0;
  return React47.createElement("div", {
    id: id && `${id}-panel-${tabKey}`,
    role: "tabpanel",
    tabIndex: active && hasContent ? 0 : -1,
    "aria-labelledby": id && `${id}-tab-${tabKey}`,
    "aria-hidden": !active,
    style,
    className: clsx(prefixCls, active && `${prefixCls}-active`, className),
    ref
  }, children);
});
if (true) {
  TabPane.displayName = "TabPane";
}
var TabPane_default = TabPane;

// node_modules/@rc-component/tabs/es/TabPanelList/index.js
function _extends12() {
  _extends12 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends12.apply(this, arguments);
}
var TabPanelList = (props) => {
  const {
    id,
    activeKey,
    animated,
    tabPosition,
    destroyOnHidden,
    contentStyle,
    contentClassName
  } = props;
  const {
    prefixCls,
    tabs
  } = React48.useContext(TabContext_default);
  const tabPaneAnimated = animated.tabPane;
  const tabPanePrefixCls = `${prefixCls}-tabpane`;
  return React48.createElement("div", {
    className: clsx(`${prefixCls}-content-holder`)
  }, React48.createElement("div", {
    className: clsx(`${prefixCls}-content`, `${prefixCls}-content-${tabPosition}`, {
      [`${prefixCls}-content-animated`]: tabPaneAnimated
    })
  }, tabs.map((item) => {
    const {
      key,
      forceRender,
      style: paneStyle,
      className: paneClassName,
      destroyOnHidden: itemDestroyOnHidden,
      ...restTabProps
    } = item;
    const active = key === activeKey;
    return React48.createElement(es_default2, _extends12({
      key,
      visible: active,
      forceRender,
      removeOnLeave: !!(destroyOnHidden ?? itemDestroyOnHidden),
      leavedClassName: `${tabPanePrefixCls}-hidden`
    }, animated.tabPaneMotion), ({
      style: motionStyle,
      className: motionClassName
    }, ref) => React48.createElement(TabPane_default, _extends12({}, restTabProps, {
      prefixCls: tabPanePrefixCls,
      id,
      tabKey: key,
      animated: tabPaneAnimated,
      active,
      style: {
        ...contentStyle,
        ...paneStyle,
        ...motionStyle
      },
      className: clsx(contentClassName, paneClassName, motionClassName),
      ref
    })));
  })));
};
var TabPanelList_default = TabPanelList;

// node_modules/@rc-component/tabs/es/hooks/useAnimateConfig.js
function useAnimateConfig(animated = {
  inkBar: true,
  tabPane: false
}) {
  let mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: false
    };
  } else {
    mergedAnimated = {
      inkBar: true,
      ...typeof animated === "object" ? animated : {}
    };
  }
  if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === void 0) {
    mergedAnimated.tabPane = true;
  }
  if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
    if (true) {
      warning_default(false, "`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work.");
    }
    mergedAnimated.tabPane = false;
  }
  return mergedAnimated;
}

// node_modules/@rc-component/tabs/es/Tabs.js
function _extends13() {
  _extends13 = Object.assign ? Object.assign.bind() : function(target) {
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
  return _extends13.apply(this, arguments);
}
var uuid = 0;
var Tabs = React49.forwardRef((props, ref) => {
  const {
    id,
    prefixCls = "rc-tabs",
    className,
    items,
    direction,
    activeKey,
    defaultActiveKey,
    editable,
    animated,
    tabPosition = "top",
    tabBarGutter,
    tabBarStyle,
    tabBarExtraContent,
    locale,
    more,
    destroyOnHidden,
    renderTabBar,
    onChange,
    onTabClick,
    onTabScroll,
    getPopupContainer,
    popupClassName,
    indicator,
    classNames: tabsClassNames,
    styles,
    ...restProps
  } = props;
  const tabs = React49.useMemo(() => (items || []).filter((item) => item && typeof item === "object" && "key" in item), [items]);
  const rtl = direction === "rtl";
  const mergedAnimated = useAnimateConfig(animated);
  const [mobile, setMobile] = (0, import_react15.useState)(false);
  (0, import_react15.useEffect)(() => {
    setMobile(isMobile_default());
  }, []);
  const [mergedActiveKey, setMergedActiveKey] = useControlledState(defaultActiveKey ?? tabs[0]?.key, activeKey);
  const [activeIndex, setActiveIndex] = (0, import_react15.useState)(() => tabs.findIndex((tab) => tab.key === mergedActiveKey));
  (0, import_react15.useEffect)(() => {
    let newActiveIndex = tabs.findIndex((tab) => tab.key === mergedActiveKey);
    if (newActiveIndex === -1) {
      newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
      setMergedActiveKey(tabs[newActiveIndex]?.key);
    }
    setActiveIndex(newActiveIndex);
  }, [tabs.map((tab) => tab.key).join("_"), mergedActiveKey, activeIndex]);
  const [mergedId, setMergedId] = useControlledState(null, id);
  (0, import_react15.useEffect)(() => {
    if (!id) {
      setMergedId(`rc-tabs-${false ? "test" : uuid}`);
      uuid += 1;
    }
  }, []);
  function onInternalTabClick(key, e) {
    onTabClick?.(key, e);
    const isActiveChanged = key !== mergedActiveKey;
    setMergedActiveKey(key);
    if (isActiveChanged) {
      onChange?.(key);
    }
  }
  const sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition,
    rtl,
    mobile
  };
  const tabNavBarProps = {
    ...sharedProps,
    editable,
    locale,
    more,
    tabBarGutter,
    onTabClick: onInternalTabClick,
    onTabScroll,
    extra: tabBarExtraContent,
    style: tabBarStyle,
    getPopupContainer,
    popupClassName: clsx(popupClassName, tabsClassNames?.popup),
    indicator,
    styles,
    classNames: tabsClassNames
  };
  const memoizedValue = React49.useMemo(() => {
    return {
      tabs,
      prefixCls
    };
  }, [tabs, prefixCls]);
  return React49.createElement(TabContext_default.Provider, {
    value: memoizedValue
  }, React49.createElement("div", _extends13({
    ref,
    id,
    className: clsx(prefixCls, `${prefixCls}-${tabPosition}`, {
      [`${prefixCls}-mobile`]: mobile,
      [`${prefixCls}-editable`]: editable,
      [`${prefixCls}-rtl`]: rtl
    }, className)
  }, restProps), React49.createElement(Wrapper_default, _extends13({}, tabNavBarProps, {
    renderTabBar
  })), React49.createElement(TabPanelList_default, _extends13({
    destroyOnHidden
  }, sharedProps, {
    contentStyle: styles?.content,
    contentClassName: tabsClassNames?.content,
    animated: mergedAnimated
  }))));
});
if (true) {
  Tabs.displayName = "Tabs";
}
var Tabs_default = Tabs;

// node_modules/@rc-component/tabs/es/index.js
var es_default7 = Tabs_default;

// node_modules/antd/es/tabs/hooks/useAnimateConfig.js
var motion = {
  motionAppear: false,
  motionEnter: true,
  motionLeave: true
};
function useAnimateConfig2(prefixCls, animated = {
  inkBar: true,
  tabPane: false
}) {
  let mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: true
    };
  } else {
    mergedAnimated = {
      inkBar: true,
      ...typeof animated === "object" ? animated : {}
    };
  }
  if (mergedAnimated.tabPane) {
    mergedAnimated.tabPaneMotion = {
      ...motion,
      motionName: getTransitionName(prefixCls, "switch")
    };
  }
  return mergedAnimated;
}

// node_modules/antd/es/tabs/hooks/useLegacyItems.js
var React50 = __toESM(require_react());
function filter(items) {
  return items.filter((item) => item);
}
function useLegacyItems(items, children) {
  if (true) {
    const warning = devUseWarning("Tabs");
    warning.deprecated(!children, "Tabs.TabPane", "items");
  }
  if (items) {
    return items.map((item) => ({
      ...item,
      destroyOnHidden: item.destroyOnHidden ?? item.destroyInactiveTabPane
    }));
  }
  const childrenItems = toArray(children).map((node) => {
    if (React50.isValidElement(node)) {
      const {
        key,
        props
      } = node;
      const {
        tab,
        ...restProps
      } = props || {};
      const item = {
        key: String(key),
        ...restProps,
        label: tab
      };
      return item;
    }
    return null;
  });
  return filter(childrenItems);
}
var useLegacyItems_default = useLegacyItems;

// node_modules/antd/es/tabs/style/motion.js
var genMotionStyle = (token) => {
  const {
    componentCls,
    motionDurationSlow
  } = token;
  return [
    {
      [componentCls]: {
        [`${componentCls}-switch`]: {
          "&-appear, &-enter": {
            transition: "none",
            "&-start": {
              opacity: 0
            },
            "&-active": {
              opacity: 1,
              transition: `opacity ${motionDurationSlow}`
            }
          },
          "&-leave": {
            position: "absolute",
            transition: "none",
            inset: 0,
            "&-start": {
              opacity: 1
            },
            "&-active": {
              opacity: 0,
              transition: `opacity ${motionDurationSlow}`
            }
          }
        }
      }
    },
    // Follow code may reuse in other components
    [initSlideMotion(token, "slide-up"), initSlideMotion(token, "slide-down")]
  ];
};
var motion_default = genMotionStyle;

// node_modules/antd/es/tabs/style/index.js
var genCardStyle = (token) => {
  const {
    componentCls,
    tabsCardPadding,
    cardBg,
    cardGutter,
    colorBorderSecondary,
    itemSelectedColor
  } = token;
  return {
    [`${componentCls}-card`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: 0,
          padding: tabsCardPadding,
          background: cardBg,
          border: `${unit(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`
        },
        [`${componentCls}-tab-active`]: {
          color: itemSelectedColor,
          background: token.colorBgContainer
        },
        [`${componentCls}-tab-focus:has(${componentCls}-tab-btn:focus-visible)`]: genFocusOutline(token, -3),
        [`& ${componentCls}-tab${componentCls}-tab-focus ${componentCls}-tab-btn:focus-visible`]: {
          outline: "none"
        },
        [`${componentCls}-ink-bar`]: {
          visibility: "hidden"
        }
      },
      // ========================== Top & Bottom ==========================
      [`&${componentCls}-top, &${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginLeft: {
              _skip_check_: true,
              value: unit(cardGutter)
            }
          }
        }
      },
      [`&${componentCls}-top`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)} 0 0`
          },
          [`${componentCls}-tab-active`]: {
            borderBottomColor: token.colorBgContainer
          }
        }
      },
      [`&${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: `0 0 ${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)}`
          },
          [`${componentCls}-tab-active`]: {
            borderTopColor: token.colorBgContainer
          }
        }
      },
      // ========================== Left & Right ==========================
      [`&${componentCls}-left, &${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginTop: unit(cardGutter)
          }
        }
      },
      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${unit(token.borderRadiusLG)} 0 0 ${unit(token.borderRadiusLG)}`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderRightColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      },
      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)} 0`
            }
          },
          [`${componentCls}-tab-active`]: {
            borderLeftColor: {
              _skip_check_: true,
              value: token.colorBgContainer
            }
          }
        }
      }
    }
  };
};
var genDropdownStyle = (token) => {
  const {
    componentCls,
    itemHoverColor,
    dropdownEdgeChildVerticalPadding
  } = token;
  return {
    [`${componentCls}-dropdown`]: {
      ...resetComponent(token),
      position: "absolute",
      top: -9999,
      left: {
        _skip_check_: true,
        value: -9999
      },
      zIndex: token.zIndexPopup,
      display: "block",
      "&-hidden": {
        display: "none"
      },
      [`${componentCls}-dropdown-menu`]: {
        maxHeight: token.tabsDropdownHeight,
        margin: 0,
        padding: `${unit(dropdownEdgeChildVerticalPadding)} 0`,
        overflowX: "hidden",
        overflowY: "auto",
        textAlign: {
          _skip_check_: true,
          value: "left"
        },
        listStyleType: "none",
        backgroundColor: token.colorBgContainer,
        backgroundClip: "padding-box",
        borderRadius: token.borderRadiusLG,
        outline: "none",
        boxShadow: token.boxShadowSecondary,
        "&-item": {
          ...textEllipsis,
          display: "flex",
          alignItems: "center",
          minWidth: token.tabsDropdownWidth,
          margin: 0,
          padding: `${unit(token.paddingXXS)} ${unit(token.paddingSM)}`,
          color: token.colorText,
          fontWeight: "normal",
          fontSize: token.fontSize,
          lineHeight: token.lineHeight,
          cursor: "pointer",
          transition: `all ${token.motionDurationSlow}`,
          "> span": {
            flex: 1,
            whiteSpace: "nowrap"
          },
          "&-remove": {
            flex: "none",
            marginLeft: {
              _skip_check_: true,
              value: token.marginSM
            },
            color: token.colorIcon,
            fontSize: token.fontSizeSM,
            background: "transparent",
            border: 0,
            cursor: "pointer",
            "&:hover": {
              color: itemHoverColor
            }
          },
          "&:hover": {
            background: token.controlItemBgHover
          },
          "&-disabled": {
            "&, &:hover": {
              color: token.colorTextDisabled,
              background: "transparent",
              cursor: "not-allowed"
            }
          }
        }
      }
    }
  };
};
var genPositionStyle = (token) => {
  const {
    componentCls,
    margin,
    colorBorderSecondary,
    horizontalMargin,
    verticalItemPadding,
    verticalItemMargin,
    calc
  } = token;
  return {
    // ========================== Top & Bottom ==========================
    [`${componentCls}-top, ${componentCls}-bottom`]: {
      flexDirection: "column",
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        margin: horizontalMargin,
        "&::before": {
          position: "absolute",
          right: {
            _skip_check_: true,
            value: 0
          },
          left: {
            _skip_check_: true,
            value: 0
          },
          borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
          content: "''"
        },
        [`${componentCls}-ink-bar`]: {
          height: token.lineWidthBold,
          "&-animated": {
            transition: `width ${token.motionDurationSlow}, left ${token.motionDurationSlow},
            right ${token.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-wrap`]: {
          "&::before, &::after": {
            top: 0,
            bottom: 0,
            width: token.controlHeight
          },
          "&::before": {
            left: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowLeft
          },
          "&::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            boxShadow: token.boxShadowTabsOverflowRight
          },
          [`&${componentCls}-nav-wrap-ping-left::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-right::after`]: {
            opacity: 1
          }
        }
      }
    },
    [`${componentCls}-top`]: {
      [`> ${componentCls}-nav,
        > div > ${componentCls}-nav`]: {
        "&::before": {
          bottom: 0
        },
        [`${componentCls}-ink-bar`]: {
          bottom: 0
        }
      }
    },
    [`${componentCls}-bottom`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        marginTop: margin,
        marginBottom: 0,
        "&::before": {
          top: 0
        },
        [`${componentCls}-ink-bar`]: {
          top: 0
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0
      }
    },
    // ========================== Left & Right ==========================
    [`${componentCls}-left, ${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        flexDirection: "column",
        minWidth: calc(token.controlHeight).mul(1.25).equal(),
        // >>>>>>>>>>> Tab
        [`${componentCls}-tab`]: {
          padding: verticalItemPadding,
          textAlign: "center"
        },
        [`${componentCls}-tab + ${componentCls}-tab`]: {
          margin: verticalItemMargin
        },
        // >>>>>>>>>>> Nav
        [`${componentCls}-nav-wrap`]: {
          flexDirection: "column",
          "&::before, &::after": {
            right: {
              _skip_check_: true,
              value: 0
            },
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.controlHeight
          },
          "&::before": {
            top: 0,
            boxShadow: token.boxShadowTabsOverflowTop
          },
          "&::after": {
            bottom: 0,
            boxShadow: token.boxShadowTabsOverflowBottom
          },
          [`&${componentCls}-nav-wrap-ping-top::before`]: {
            opacity: 1
          },
          [`&${componentCls}-nav-wrap-ping-bottom::after`]: {
            opacity: 1
          }
        },
        // >>>>>>>>>>> Ink Bar
        [`${componentCls}-ink-bar`]: {
          width: token.lineWidthBold,
          "&-animated": {
            transition: `height ${token.motionDurationSlow}, top ${token.motionDurationSlow}`
          }
        },
        [`${componentCls}-nav-list, ${componentCls}-nav-operations`]: {
          flex: "1 0 auto",
          // fix safari scroll problem
          flexDirection: "column"
        }
      }
    },
    [`${componentCls}-left`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-ink-bar`]: {
          right: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        marginLeft: {
          _skip_check_: true,
          value: unit(calc(token.lineWidth).mul(-1).equal())
        },
        borderLeft: {
          _skip_check_: true,
          value: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingLeft: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    },
    [`${componentCls}-right`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        order: 1,
        [`${componentCls}-ink-bar`]: {
          left: {
            _skip_check_: true,
            value: 0
          }
        }
      },
      [`> ${componentCls}-content-holder, > div > ${componentCls}-content-holder`]: {
        order: 0,
        marginRight: {
          _skip_check_: true,
          value: calc(token.lineWidth).mul(-1).equal()
        },
        borderRight: {
          _skip_check_: true,
          value: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorder}`
        },
        [`> ${componentCls}-content > ${componentCls}-tabpane`]: {
          paddingRight: {
            _skip_check_: true,
            value: token.paddingLG
          }
        }
      }
    }
  };
};
var genSizeStyle = (token) => {
  const {
    componentCls,
    cardPaddingSM,
    cardPaddingLG,
    cardHeightSM,
    cardHeightLG,
    horizontalItemPaddingSM,
    horizontalItemPaddingLG
  } = token;
  return {
    // >>>>> shared
    [componentCls]: {
      "&-small": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: horizontalItemPaddingSM,
            fontSize: token.titleFontSizeSM
          }
        }
      },
      "&-large": {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: horizontalItemPaddingLG,
            fontSize: token.titleFontSizeLG,
            lineHeight: token.lineHeightLG
          }
        }
      }
    },
    // >>>>> card
    [`${componentCls}-card`]: {
      // Small
      [`&${componentCls}-small`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: cardPaddingSM
          },
          [`${componentCls}-nav-add`]: {
            minWidth: cardHeightSM,
            minHeight: cardHeightSM
          }
        },
        [`&${componentCls}-bottom`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `0 0 ${unit(token.borderRadius)} ${unit(token.borderRadius)}`
          }
        },
        [`&${componentCls}-top`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: `${unit(token.borderRadius)} ${unit(token.borderRadius)} 0 0`
          }
        },
        [`&${componentCls}-right`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `0 ${unit(token.borderRadius)} ${unit(token.borderRadius)} 0`
            }
          }
        },
        [`&${componentCls}-left`]: {
          [`> ${componentCls}-nav ${componentCls}-tab`]: {
            borderRadius: {
              _skip_check_: true,
              value: `${unit(token.borderRadius)} 0 0 ${unit(token.borderRadius)}`
            }
          }
        }
      },
      // Large
      [`&${componentCls}-large`]: {
        [`> ${componentCls}-nav`]: {
          [`${componentCls}-tab`]: {
            padding: cardPaddingLG
          },
          [`${componentCls}-nav-add`]: {
            minWidth: cardHeightLG,
            minHeight: cardHeightLG
          }
        }
      }
    }
  };
};
var genTabStyle = (token) => {
  const {
    componentCls,
    itemActiveColor,
    itemHoverColor,
    iconCls,
    tabsHorizontalItemMargin,
    horizontalItemPadding,
    itemSelectedColor,
    itemColor
  } = token;
  const tabCls = `${componentCls}-tab`;
  return {
    [tabCls]: {
      position: "relative",
      WebkitTouchCallout: "none",
      WebkitTapHighlightColor: "transparent",
      display: "inline-flex",
      alignItems: "center",
      padding: horizontalItemPadding,
      fontSize: token.titleFontSize,
      background: "transparent",
      border: 0,
      outline: "none",
      cursor: "pointer",
      color: itemColor,
      "&-btn, &-remove": {
        "&:focus:not(:focus-visible), &:active": {
          color: itemActiveColor
        }
      },
      "&-btn": {
        outline: "none",
        transition: `all ${token.motionDurationSlow}`,
        [`${tabCls}-icon:not(:last-child)`]: {
          marginInlineEnd: token.marginSM
        }
      },
      "&-remove": {
        flex: "none",
        lineHeight: 1,
        marginRight: {
          _skip_check_: true,
          value: token.calc(token.marginXXS).mul(-1).equal()
        },
        marginLeft: {
          _skip_check_: true,
          value: token.marginXS
        },
        color: token.colorIcon,
        fontSize: token.fontSizeSM,
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        transition: `all ${token.motionDurationSlow}`,
        "&:hover": {
          color: token.colorTextHeading
        },
        ...genFocusStyle(token)
      },
      "&:hover": {
        color: itemHoverColor
      },
      [`&${tabCls}-active ${tabCls}-btn`]: {
        color: itemSelectedColor
      },
      [`&${tabCls}-focus ${tabCls}-btn:focus-visible`]: genFocusOutline(token),
      [`&${tabCls}-disabled`]: {
        color: token.colorTextDisabled,
        cursor: "not-allowed"
      },
      [`&${tabCls}-disabled ${tabCls}-btn, &${tabCls}-disabled ${componentCls}-remove`]: {
        "&:focus, &:active": {
          color: token.colorTextDisabled
        }
      },
      [`& ${tabCls}-remove ${iconCls}`]: {
        margin: 0,
        verticalAlign: "middle"
      },
      [`${iconCls}:not(:last-child)`]: {
        marginRight: {
          _skip_check_: true,
          value: token.marginSM
        }
      }
    },
    [`${tabCls} + ${tabCls}`]: {
      margin: {
        _skip_check_: true,
        value: tabsHorizontalItemMargin
      }
    }
  };
};
var genRtlStyle = (token) => {
  const {
    componentCls,
    tabsHorizontalItemMarginRTL,
    iconCls,
    cardGutter,
    calc
  } = token;
  const rtlCls = `${componentCls}-rtl`;
  return {
    [rtlCls]: {
      direction: "rtl",
      [`${componentCls}-nav`]: {
        [`${componentCls}-tab`]: {
          margin: {
            _skip_check_: true,
            value: tabsHorizontalItemMarginRTL
          },
          [`${componentCls}-tab:last-of-type`]: {
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          },
          [iconCls]: {
            marginRight: {
              _skip_check_: true,
              value: 0
            },
            marginLeft: {
              _skip_check_: true,
              value: unit(token.marginSM)
            }
          },
          [`${componentCls}-tab-remove`]: {
            marginRight: {
              _skip_check_: true,
              value: unit(token.marginXS)
            },
            marginLeft: {
              _skip_check_: true,
              value: unit(calc(token.marginXXS).mul(-1).equal())
            },
            [iconCls]: {
              margin: 0
            }
          }
        }
      },
      [`&${componentCls}-left`]: {
        [`> ${componentCls}-nav`]: {
          order: 1
        },
        [`> ${componentCls}-content-holder`]: {
          order: 0
        }
      },
      [`&${componentCls}-right`]: {
        [`> ${componentCls}-nav`]: {
          order: 0
        },
        [`> ${componentCls}-content-holder`]: {
          order: 1
        }
      },
      // ====================== Card ======================
      [`&${componentCls}-card${componentCls}-top, &${componentCls}-card${componentCls}-bottom`]: {
        [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
          [`${componentCls}-tab + ${componentCls}-tab`]: {
            marginRight: {
              _skip_check_: true,
              value: cardGutter
            },
            marginLeft: {
              _skip_check_: true,
              value: 0
            }
          }
        }
      }
    },
    [`${componentCls}-dropdown-rtl`]: {
      direction: "rtl"
    },
    [`${componentCls}-menu-item`]: {
      [`${componentCls}-dropdown-rtl`]: {
        textAlign: {
          _skip_check_: true,
          value: "right"
        }
      }
    }
  };
};
var genTabsStyle = (token) => {
  const {
    componentCls,
    tabsCardPadding,
    cardHeight,
    cardGutter,
    itemHoverColor,
    itemActiveColor,
    colorBorderSecondary
  } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      display: "flex",
      // ========================== Navigation ==========================
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        position: "relative",
        display: "flex",
        flex: "none",
        alignItems: "center",
        [`${componentCls}-nav-wrap`]: {
          position: "relative",
          display: "flex",
          flex: "auto",
          alignSelf: "stretch",
          overflow: "hidden",
          whiteSpace: "nowrap",
          transform: "translate(0)",
          // Fix chrome render bug
          // >>>>> Ping shadow
          "&::before, &::after": {
            position: "absolute",
            zIndex: 1,
            opacity: 0,
            transition: `opacity ${token.motionDurationSlow}`,
            content: "''",
            pointerEvents: "none"
          }
        },
        [`${componentCls}-nav-list`]: {
          position: "relative",
          display: "flex",
          transition: `opacity ${token.motionDurationSlow}`
        },
        // >>>>>>>> Operations
        [`${componentCls}-nav-operations`]: {
          display: "flex",
          alignSelf: "stretch"
        },
        [`${componentCls}-nav-operations-hidden`]: {
          position: "absolute",
          visibility: "hidden",
          pointerEvents: "none"
        },
        [`${componentCls}-nav-more`]: {
          position: "relative",
          padding: tabsCardPadding,
          background: "transparent",
          border: 0,
          color: token.colorText,
          "&::after": {
            position: "absolute",
            right: {
              _skip_check_: true,
              value: 0
            },
            bottom: 0,
            left: {
              _skip_check_: true,
              value: 0
            },
            height: token.calc(token.controlHeightLG).div(8).equal(),
            transform: "translateY(100%)",
            content: "''"
          }
        },
        [`${componentCls}-nav-add`]: {
          minWidth: cardHeight,
          minHeight: cardHeight,
          marginLeft: {
            _skip_check_: true,
            value: cardGutter
          },
          background: "transparent",
          border: `${unit(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
          borderRadius: `${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)} 0 0`,
          outline: "none",
          cursor: "pointer",
          color: token.colorText,
          transition: `all ${token.motionDurationSlow} ${token.motionEaseInOut}`,
          "&:hover": {
            color: itemHoverColor
          },
          "&:active, &:focus:not(:focus-visible)": {
            color: itemActiveColor
          },
          ...genFocusStyle(token, -3)
        }
      },
      [`${componentCls}-extra-content`]: {
        flex: "none"
      },
      // ============================ InkBar ============================
      [`${componentCls}-ink-bar`]: {
        position: "absolute",
        background: token.inkBarColor,
        pointerEvents: "none"
      },
      // ============================= Tabs =============================
      ...genTabStyle(token),
      // =========================== TabPanes ===========================
      [`${componentCls}-content`]: {
        position: "relative",
        width: "100%"
      },
      [`${componentCls}-content-holder`]: {
        flex: "auto",
        minWidth: 0,
        minHeight: 0
      },
      [`${componentCls}-tabpane`]: {
        ...genFocusStyle(token),
        "&-hidden": {
          display: "none"
        }
      }
    },
    [`${componentCls}-centered`]: {
      [`> ${componentCls}-nav, > div > ${componentCls}-nav`]: {
        [`${componentCls}-nav-wrap`]: {
          [`&:not([class*='${componentCls}-nav-wrap-ping']) > ${componentCls}-nav-list`]: {
            margin: "auto"
          }
        }
      }
    }
  };
};
var prepareComponentToken2 = (token) => {
  const {
    cardHeight,
    cardHeightSM,
    cardHeightLG,
    controlHeight,
    controlHeightLG
  } = token;
  const mergedCardHeight = cardHeight || controlHeightLG;
  const mergedCardHeightSM = cardHeightSM || controlHeight;
  const mergedCardHeightLG = cardHeightLG || controlHeightLG + 8;
  return {
    zIndexPopup: token.zIndexPopupBase + 50,
    cardBg: token.colorFillAlter,
    // We can not pass this as valid value,
    // Since `cardHeight` will lock nav add button height.
    cardHeight: mergedCardHeight,
    cardHeightSM: mergedCardHeightSM,
    cardHeightLG: mergedCardHeightLG,
    // Initialize with empty string, because cardPadding will be calculated with cardHeight by default.
    cardPadding: `${(mergedCardHeight - token.fontHeight) / 2 - token.lineWidth}px ${token.padding}px`,
    cardPaddingSM: `${(mergedCardHeightSM - token.fontHeight) / 2 - token.lineWidth}px ${token.paddingXS}px`,
    cardPaddingLG: `${(mergedCardHeightLG - token.fontHeightLG) / 2 - token.lineWidth}px ${token.padding}px`,
    titleFontSize: token.fontSize,
    titleFontSizeLG: token.fontSizeLG,
    titleFontSizeSM: token.fontSize,
    inkBarColor: token.colorPrimary,
    horizontalMargin: `0 0 ${token.margin}px 0`,
    horizontalItemGutter: 32,
    // Fixed Value
    // Initialize with empty string, because horizontalItemMargin will be calculated with horizontalItemGutter by default.
    horizontalItemMargin: ``,
    horizontalItemMarginRTL: ``,
    horizontalItemPadding: `${token.paddingSM}px 0`,
    horizontalItemPaddingSM: `${token.paddingXS}px 0`,
    horizontalItemPaddingLG: `${token.padding}px 0`,
    verticalItemPadding: `${token.paddingXS}px ${token.paddingLG}px`,
    verticalItemMargin: `${token.margin}px 0 0 0`,
    itemColor: token.colorText,
    itemSelectedColor: token.colorPrimary,
    itemHoverColor: token.colorPrimaryHover,
    itemActiveColor: token.colorPrimaryActive,
    cardGutter: token.marginXXS / 2
  };
};
var style_default2 = genStyleHooks("Tabs", (token) => {
  const tabsToken = merge(token, {
    // `cardPadding` is empty by default, so we could calculate with dynamic `cardHeight`
    tabsCardPadding: token.cardPadding,
    dropdownEdgeChildVerticalPadding: token.paddingXXS,
    tabsDropdownHeight: 200,
    tabsDropdownWidth: 120,
    tabsHorizontalItemMargin: `0 0 0 ${unit(token.horizontalItemGutter)}`,
    tabsHorizontalItemMarginRTL: `0 0 0 ${unit(token.horizontalItemGutter)}`
  });
  return [genSizeStyle(tabsToken), genRtlStyle(tabsToken), genPositionStyle(tabsToken), genDropdownStyle(tabsToken), genCardStyle(tabsToken), genTabsStyle(tabsToken), motion_default(tabsToken)];
}, prepareComponentToken2);

// node_modules/antd/es/tabs/TabPane.js
var TabPane2 = () => null;
if (true) {
  TabPane2.displayName = "DeprecatedTabPane";
}
var TabPane_default2 = TabPane2;

// node_modules/antd/es/tabs/index.js
var InternalTabs = React51.forwardRef((props, ref) => {
  const {
    type,
    className,
    rootClassName,
    size: customSize,
    onEdit,
    hideAdd,
    centered,
    addIcon,
    removeIcon,
    moreIcon,
    more,
    popupClassName,
    children,
    items,
    animated,
    style,
    indicatorSize,
    indicator,
    classNames,
    styles,
    destroyInactiveTabPane,
    destroyOnHidden,
    tabPlacement,
    tabPosition,
    ...restProps
  } = props;
  const {
    prefixCls: customizePrefixCls
  } = restProps;
  const {
    getPrefixCls,
    direction,
    getPopupContainer,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("tabs");
  const {
    tabs
  } = React51.useContext(ConfigContext);
  const prefixCls = getPrefixCls("tabs", customizePrefixCls);
  const rootCls = useCSSVarCls_default(prefixCls);
  const [hashId, cssVarCls] = style_default2(prefixCls, rootCls);
  const tabsRef = React51.useRef(null);
  React51.useImperativeHandle(ref, () => ({
    nativeElement: tabsRef.current
  }));
  let editable;
  if (type === "editable-card") {
    editable = {
      onEdit: (editType, {
        key,
        event
      }) => {
        onEdit?.(editType === "add" ? event : key, editType);
      },
      removeIcon: removeIcon ?? tabs?.removeIcon ?? React51.createElement(CloseOutlined_default, null),
      addIcon: (addIcon ?? tabs?.addIcon) || React51.createElement(PlusOutlined_default, null),
      showAdd: hideAdd !== true
    };
  }
  const rootPrefixCls = getPrefixCls();
  if (true) {
    const warning = devUseWarning("Tabs");
    [["popupClassName", "classNames.popup"], ["tabPosition", "tabPlacement"]].forEach(([deprecatedName, newName]) => {
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
    true ? warning(!("onPrevClick" in props) && !("onNextClick" in props), "breaking", "`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead.") : void 0;
    true ? warning(!(indicatorSize || tabs?.indicatorSize), "deprecated", "`indicatorSize` has been deprecated. Please use `indicator={{ size: ... }}` instead.") : void 0;
    warning.deprecated(!("destroyInactiveTabPane" in props || items?.some((item) => "destroyInactiveTabPane" in item)), "destroyInactiveTabPane", "destroyOnHidden");
  }
  const size = useSize_default(customSize);
  const mergedItems = useLegacyItems_default(items, children);
  const mergedAnimated = useAnimateConfig2(prefixCls, animated);
  const mergedIndicator = {
    align: indicator?.align ?? tabs?.indicator?.align,
    size: indicator?.size ?? indicatorSize ?? tabs?.indicator?.size ?? tabs?.indicatorSize
  };
  const mergedPlacement = React51.useMemo(() => {
    const placement = tabPlacement ?? tabPosition ?? void 0;
    const isRTL = direction === "rtl";
    switch (placement) {
      case "start":
        return isRTL ? "right" : "left";
      case "end":
        return isRTL ? "left" : "right";
      default:
        return placement;
    }
  }, [tabPlacement, tabPosition, direction]);
  const mergedProps = {
    ...props,
    size,
    tabPlacement: mergedPlacement,
    items: mergedItems
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  }, {
    popup: {
      _default: "root"
    }
  });
  return React51.createElement(es_default7, {
    ref: tabsRef,
    direction,
    getPopupContainer,
    ...restProps,
    items: mergedItems,
    className: clsx({
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-card`]: ["card", "editable-card"].includes(type),
      [`${prefixCls}-editable-card`]: type === "editable-card",
      [`${prefixCls}-centered`]: centered
    }, contextClassName, className, rootClassName, mergedClassNames.root, hashId, cssVarCls, rootCls),
    classNames: {
      ...mergedClassNames,
      popup: clsx(popupClassName, hashId, cssVarCls, rootCls, mergedClassNames.popup?.root)
    },
    styles: mergedStyles,
    style: {
      ...mergedStyles.root,
      ...contextStyle,
      ...style
    },
    editable,
    more: {
      icon: tabs?.more?.icon ?? tabs?.moreIcon ?? moreIcon ?? React51.createElement(EllipsisOutlined_default, null),
      transitionName: `${rootPrefixCls}-slide-up`,
      ...more
    },
    prefixCls,
    animated: mergedAnimated,
    indicator: mergedIndicator,
    destroyOnHidden: destroyOnHidden ?? destroyInactiveTabPane,
    tabPosition: mergedPlacement
  });
});
var Tabs2 = InternalTabs;
Tabs2.TabPane = TabPane_default2;
if (true) {
  Tabs2.displayName = "Tabs";
}
var tabs_default = Tabs2;

// node_modules/antd/es/card/CardGrid.js
var React52 = __toESM(require_react());
var CardGrid = ({
  prefixCls,
  className,
  hoverable = true,
  ...rest
}) => {
  const {
    getPrefixCls
  } = React52.useContext(ConfigContext);
  const prefix = getPrefixCls("card", prefixCls);
  const classString = clsx(`${prefix}-grid`, className, {
    [`${prefix}-grid-hoverable`]: hoverable
  });
  return React52.createElement("div", {
    ...rest,
    className: classString
  });
};
if (true) {
  CardGrid.displayName = "CardGrid";
}
var CardGrid_default = CardGrid;

// node_modules/antd/es/card/style/index.js
var genCardHeadStyle = (token) => {
  const {
    antCls,
    componentCls,
    headerHeight,
    headerPadding,
    tabsMarginBottom
  } = token;
  return {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    minHeight: headerHeight,
    marginBottom: -1,
    // Fix card grid overflow bug: https://gw.alipayobjects.com/zos/rmsportal/XonYxBikwpgbqIQBeuhk.png
    padding: `0 ${unit(headerPadding)}`,
    color: token.colorTextHeading,
    fontWeight: token.fontWeightStrong,
    fontSize: token.headerFontSize,
    background: token.headerBg,
    borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorderSecondary}`,
    borderRadius: `${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)} 0 0`,
    ...clearFix(),
    "&-wrapper": {
      width: "100%",
      display: "flex",
      alignItems: "center"
    },
    "&-title": {
      display: "inline-block",
      flex: 1,
      ...textEllipsis,
      [`
          > ${componentCls}-typography,
          > ${componentCls}-typography-edit-content
        `]: {
        insetInlineStart: 0,
        marginTop: 0,
        marginBottom: 0
      }
    },
    [`${antCls}-tabs-top`]: {
      clear: "both",
      marginBottom: tabsMarginBottom,
      color: token.colorText,
      fontWeight: "normal",
      fontSize: token.fontSize,
      "&-bar": {
        borderBottom: `${unit(token.lineWidth)} ${token.lineType} ${token.colorBorderSecondary}`
      }
    }
  };
};
var genCardGridStyle = (token) => {
  const {
    cardPaddingBase,
    colorBorderSecondary,
    cardShadow,
    lineWidth
  } = token;
  return {
    width: "33.33%",
    padding: cardPaddingBase,
    border: 0,
    borderRadius: 0,
    boxShadow: `
      ${unit(lineWidth)} 0 0 0 ${colorBorderSecondary},
      0 ${unit(lineWidth)} 0 0 ${colorBorderSecondary},
      ${unit(lineWidth)} ${unit(lineWidth)} 0 0 ${colorBorderSecondary},
      ${unit(lineWidth)} 0 0 0 ${colorBorderSecondary} inset,
      0 ${unit(lineWidth)} 0 0 ${colorBorderSecondary} inset;
    `,
    transition: `all ${token.motionDurationMid}`,
    "&-hoverable:hover": {
      position: "relative",
      zIndex: 1,
      boxShadow: cardShadow
    }
  };
};
var genCardActionsStyle = (token) => {
  const {
    componentCls,
    iconCls,
    actionsLiMargin,
    cardActionsIconSize,
    colorBorderSecondary,
    actionsBg
  } = token;
  return {
    margin: 0,
    padding: 0,
    listStyle: "none",
    background: actionsBg,
    borderTop: `${unit(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
    display: "flex",
    borderRadius: `0 0 ${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)}`,
    ...clearFix(),
    "& > li": {
      margin: actionsLiMargin,
      color: token.colorTextDescription,
      textAlign: "center",
      "> span": {
        position: "relative",
        display: "block",
        minWidth: token.calc(token.cardActionsIconSize).mul(2).equal(),
        fontSize: token.fontSize,
        lineHeight: token.lineHeight,
        cursor: "pointer",
        "&:hover": {
          color: token.colorPrimary,
          transition: `color ${token.motionDurationMid}`
        },
        [`a:not(${componentCls}-btn), > ${iconCls}`]: {
          display: "inline-block",
          width: "100%",
          color: token.colorIcon,
          lineHeight: unit(token.fontHeight),
          transition: `color ${token.motionDurationMid}`,
          "&:hover": {
            color: token.colorPrimary
          }
        },
        [`> ${iconCls}`]: {
          fontSize: cardActionsIconSize,
          lineHeight: unit(token.calc(cardActionsIconSize).mul(token.lineHeight).equal())
        }
      },
      "&:not(:last-child)": {
        borderInlineEnd: `${unit(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`
      }
    }
  };
};
var genCardMetaStyle = (token) => ({
  margin: `${unit(token.calc(token.marginXXS).mul(-1).equal())} 0`,
  display: "flex",
  ...clearFix(),
  "&-avatar": {
    paddingInlineEnd: token.padding
  },
  "&-section": {
    overflow: "hidden",
    flex: 1,
    "> div:not(:last-child)": {
      marginBottom: token.marginXS
    }
  },
  "&-title": {
    color: token.colorTextHeading,
    fontWeight: token.fontWeightStrong,
    fontSize: token.fontSizeLG,
    ...textEllipsis
  },
  "&-description": {
    color: token.colorTextDescription
  }
});
var genCardTypeInnerStyle = (token) => {
  const {
    componentCls,
    colorFillAlter,
    headerPadding,
    bodyPadding
  } = token;
  return {
    [`${componentCls}-head`]: {
      padding: `0 ${unit(headerPadding)}`,
      background: colorFillAlter,
      "&-title": {
        fontSize: token.fontSize
      }
    },
    [`${componentCls}-body`]: {
      padding: `${unit(token.padding)} ${unit(bodyPadding)}`
    }
  };
};
var genCardLoadingStyle = (token) => {
  const {
    componentCls
  } = token;
  return {
    overflow: "hidden",
    [`${componentCls}-body`]: {
      userSelect: "none"
    }
  };
};
var genCardStyle2 = (token) => {
  const {
    componentCls,
    cardShadow,
    cardHeadPadding,
    colorBorderSecondary,
    boxShadowTertiary,
    bodyPadding,
    extraColor
  } = token;
  return {
    [componentCls]: {
      ...resetComponent(token),
      position: "relative",
      background: token.colorBgContainer,
      borderRadius: token.borderRadiusLG,
      [`&:not(${componentCls}-bordered)`]: {
        boxShadow: boxShadowTertiary
      },
      [`${componentCls}-head`]: genCardHeadStyle(token),
      [`${componentCls}-extra`]: {
        // https://stackoverflow.com/a/22429853/3040605
        marginInlineStart: "auto",
        color: extraColor,
        fontWeight: "normal",
        fontSize: token.fontSize
      },
      [`${componentCls}-body`]: {
        padding: bodyPadding,
        borderRadius: `0 0 ${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)}`,
        "&:first-child": {
          borderStartStartRadius: token.borderRadiusLG,
          borderStartEndRadius: token.borderRadiusLG
        },
        "&:not(:last-child)": {
          borderEndStartRadius: 0,
          borderEndEndRadius: 0
        }
      },
      [`${componentCls}-grid`]: genCardGridStyle(token),
      [`${componentCls}-cover`]: {
        "> *": {
          display: "block",
          width: "100%",
          borderRadius: `${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)} 0 0`
        }
      },
      [`${componentCls}-actions`]: genCardActionsStyle(token),
      [`${componentCls}-meta`]: genCardMetaStyle(token)
    },
    [`${componentCls}-bordered`]: {
      border: `${unit(token.lineWidth)} ${token.lineType} ${colorBorderSecondary}`,
      [`${componentCls}-cover`]: {
        marginTop: -1,
        marginInlineStart: -1,
        marginInlineEnd: -1
      }
    },
    [`${componentCls}-hoverable`]: {
      cursor: "pointer",
      transition: `box-shadow ${token.motionDurationMid}, border-color ${token.motionDurationMid}`,
      "&:hover": {
        borderColor: "transparent",
        boxShadow: cardShadow
      }
    },
    [`${componentCls}-contain-grid`]: {
      borderRadius: `${unit(token.borderRadiusLG)} ${unit(token.borderRadiusLG)} 0 0 `,
      // Reset border radius when no head exists
      [`&:not(:has(> ${componentCls}-head))`]: {
        borderRadius: 0
      },
      [`${componentCls}-body`]: {
        display: "flex",
        flexWrap: "wrap"
      },
      [`&:not(${componentCls}-loading) ${componentCls}-body`]: {
        marginBlockStart: token.calc(token.lineWidth).mul(-1).equal(),
        marginInlineStart: token.calc(token.lineWidth).mul(-1).equal(),
        padding: 0
      }
    },
    [`${componentCls}-contain-tabs`]: {
      [`> div${componentCls}-head`]: {
        minHeight: 0,
        [`${componentCls}-head-title, ${componentCls}-extra`]: {
          paddingTop: cardHeadPadding
        }
      }
    },
    [`${componentCls}-type-inner`]: genCardTypeInnerStyle(token),
    [`${componentCls}-loading`]: genCardLoadingStyle(token),
    [`${componentCls}-rtl`]: {
      direction: "rtl"
    }
  };
};
var genCardSizeStyle = (token) => {
  const {
    componentCls,
    bodyPaddingSM,
    headerPaddingSM,
    headerHeightSM,
    headerFontSizeSM
  } = token;
  return {
    [`${componentCls}-small`]: {
      [`> ${componentCls}-head`]: {
        minHeight: headerHeightSM,
        padding: `0 ${unit(headerPaddingSM)}`,
        fontSize: headerFontSizeSM,
        [`> ${componentCls}-head-wrapper`]: {
          [`> ${componentCls}-extra`]: {
            fontSize: token.fontSize
          }
        }
      },
      [`> ${componentCls}-body`]: {
        padding: bodyPaddingSM
      }
    },
    [`${componentCls}-small${componentCls}-contain-tabs`]: {
      [`> ${componentCls}-head`]: {
        [`${componentCls}-head-title, ${componentCls}-extra`]: {
          paddingTop: 0,
          display: "flex",
          alignItems: "center"
        }
      }
    }
  };
};
var prepareComponentToken3 = (token) => ({
  headerBg: "transparent",
  headerFontSize: token.fontSizeLG,
  headerFontSizeSM: token.fontSize,
  headerHeight: token.fontSizeLG * token.lineHeightLG + token.padding * 2,
  headerHeightSM: token.fontSize * token.lineHeight + token.paddingXS * 2,
  actionsBg: token.colorBgContainer,
  actionsLiMargin: `${token.paddingSM}px 0`,
  tabsMarginBottom: -token.padding - token.lineWidth,
  extraColor: token.colorText,
  bodyPaddingSM: 12,
  // Fixed padding.
  headerPaddingSM: 12,
  bodyPadding: token.bodyPadding ?? token.paddingLG,
  headerPadding: token.headerPadding ?? token.paddingLG
});
var style_default3 = genStyleHooks("Card", (token) => {
  const cardToken = merge(token, {
    cardShadow: token.boxShadowCard,
    cardHeadPadding: token.padding,
    cardPaddingBase: token.paddingLG,
    cardActionsIconSize: token.fontSize
  });
  return [
    // Style
    genCardStyle2(cardToken),
    // Size
    genCardSizeStyle(cardToken)
  ];
}, prepareComponentToken3);

// node_modules/antd/es/card/Card.js
var ActionNode = (props) => {
  const {
    actionClasses,
    actions = [],
    actionStyle
  } = props;
  return React53.createElement("ul", {
    className: actionClasses,
    style: actionStyle
  }, actions.map((action, index) => {
    const key = `action-${index}`;
    return React53.createElement("li", {
      style: {
        width: `${100 / actions.length}%`
      },
      key
    }, React53.createElement("span", null, action));
  }));
};
var Card = React53.forwardRef((props, ref) => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    extra,
    headStyle = {},
    bodyStyle = {},
    title,
    loading,
    bordered,
    variant: customVariant,
    size: customizeSize,
    type,
    cover,
    actions,
    tabList,
    children,
    activeTabKey,
    defaultActiveTabKey,
    tabBarExtraContent,
    hoverable,
    tabProps = {},
    classNames,
    styles,
    ...rest
  } = props;
  const {
    getPrefixCls,
    direction,
    className: contextClassName,
    style: contextStyle,
    classNames: contextClassNames,
    styles: contextStyles
  } = useComponentConfig("card");
  const [variant] = useVariants_default("card", customVariant, bordered);
  const mergedSize = useSize_default(customizeSize);
  const mergedProps = {
    ...props,
    size: mergedSize,
    variant,
    loading
  };
  const [mergedClassNames, mergedStyles] = useMergeSemantic([contextClassNames, classNames], [contextStyles, styles], {
    props: mergedProps
  });
  if (true) {
    const warning = devUseWarning("Card");
    [["headStyle", "styles.header"], ["bodyStyle", "styles.body"], ["bordered", "variant"]].forEach(([deprecatedName, newName]) => {
      warning.deprecated(!(deprecatedName in props), deprecatedName, newName);
    });
  }
  const onTabChange = (key) => {
    props.onTabChange?.(key);
  };
  const isContainGrid = React53.useMemo(() => {
    const childNodes = toArray(children);
    return childNodes.some((child) => React53.isValidElement(child) && child.type === CardGrid_default);
  }, [children]);
  const prefixCls = getPrefixCls("card", customizePrefixCls);
  const [hashId, cssVarCls] = style_default3(prefixCls);
  const loadingBlock = React53.createElement(skeleton_default, {
    loading: true,
    active: true,
    paragraph: {
      rows: 4
    },
    title: false
  }, children);
  const hasActiveTabKey = activeTabKey !== void 0;
  const extraProps = {
    ...tabProps,
    [hasActiveTabKey ? "activeKey" : "defaultActiveKey"]: hasActiveTabKey ? activeTabKey : defaultActiveTabKey,
    tabBarExtraContent
  };
  let head;
  const tabSize = !mergedSize || mergedSize === "default" ? "large" : mergedSize;
  const tabs = tabList ? React53.createElement(tabs_default, {
    size: tabSize,
    ...extraProps,
    className: `${prefixCls}-head-tabs`,
    onChange: onTabChange,
    items: tabList.map(({
      tab,
      ...item
    }) => ({
      label: tab,
      ...item
    }))
  }) : null;
  if (title || extra || tabs) {
    const headClasses = clsx(`${prefixCls}-head`, mergedClassNames.header);
    const titleClasses = clsx(`${prefixCls}-head-title`, mergedClassNames.title);
    const extraClasses = clsx(`${prefixCls}-extra`, mergedClassNames.extra);
    const mergedHeadStyle = {
      ...headStyle,
      ...mergedStyles.header
    };
    head = React53.createElement("div", {
      className: headClasses,
      style: mergedHeadStyle
    }, React53.createElement("div", {
      className: `${prefixCls}-head-wrapper`
    }, title && React53.createElement("div", {
      className: titleClasses,
      style: mergedStyles.title
    }, title), extra && React53.createElement("div", {
      className: extraClasses,
      style: mergedStyles.extra
    }, extra)), tabs);
  }
  const coverClasses = clsx(`${prefixCls}-cover`, mergedClassNames.cover);
  const coverDom = cover ? React53.createElement("div", {
    className: coverClasses,
    style: mergedStyles.cover
  }, cover) : null;
  const bodyClasses = clsx(`${prefixCls}-body`, mergedClassNames.body);
  const mergedBodyStyle = {
    ...bodyStyle,
    ...mergedStyles.body
  };
  const body = React53.createElement("div", {
    className: bodyClasses,
    style: mergedBodyStyle
  }, loading ? loadingBlock : children);
  const actionClasses = clsx(`${prefixCls}-actions`, mergedClassNames.actions);
  const actionDom = actions?.length ? React53.createElement(ActionNode, {
    actionClasses,
    actionStyle: mergedStyles.actions,
    actions
  }) : null;
  const divProps = omit(rest, ["onTabChange"]);
  const classString = clsx(prefixCls, contextClassName, {
    [`${prefixCls}-loading`]: loading,
    [`${prefixCls}-bordered`]: variant !== "borderless",
    [`${prefixCls}-hoverable`]: hoverable,
    [`${prefixCls}-contain-grid`]: isContainGrid,
    [`${prefixCls}-contain-tabs`]: tabList?.length,
    [`${prefixCls}-${mergedSize}`]: mergedSize,
    [`${prefixCls}-type-${type}`]: !!type,
    [`${prefixCls}-rtl`]: direction === "rtl"
  }, className, rootClassName, hashId, cssVarCls, mergedClassNames.root);
  const mergedStyle = {
    ...mergedStyles.root,
    ...contextStyle,
    ...style
  };
  return React53.createElement("div", {
    ref,
    ...divProps,
    className: classString,
    style: mergedStyle
  }, head, coverDom, body, actionDom);
});
if (true) {
  Card.displayName = "Card";
}
var Card_default = Card;

export {
  _extends2 as _extends,
  skeleton_default,
  es_default5 as es_default,
  es_default4 as es_default2,
  useFullPath,
  MenuItem_default,
  SubMenu_default,
  Divider,
  MenuItemGroup_default,
  es_default6 as es_default3,
  tabs_default,
  CardGrid_default,
  Card_default
};
//# sourceMappingURL=chunk-2LER2LVD.js.map
