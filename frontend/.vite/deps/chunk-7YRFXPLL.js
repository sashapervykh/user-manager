import {
  CloseOutlined_default
} from "./chunk-2LIZECPH.js";
import {
  ConfigContext,
  Keyframes_default,
  SizeContext_default,
  Variants,
  _assertThisInitialized,
  _classCallCheck,
  _createClass,
  _createSuper,
  _defineProperty,
  _getPrototypeOf,
  _inherits,
  _isNativeReflectConstruct,
  _objectSpread2,
  _setPrototypeOf,
  _toConsumableArray,
  _typeof,
  defaultPrefixCls,
  devUseWarning,
  en_US_default4 as en_US_default,
  get,
  isEqual_default,
  isVisible_default,
  merge,
  mergeWith,
  omit,
  set,
  toArray,
  useEvent_default,
  useLocale_default,
  useToken
} from "./chunk-LABRJ26G.js";
import {
  clsx,
  warning_default
} from "./chunk-HZ3DMHMG.js";
import {
  __toESM,
  require_react
} from "./chunk-G4V7ITBN.js";

// node_modules/antd/es/_util/hooks/useMergeSemantic.js
var React = __toESM(require_react());
var mergeClassNames = (schema, ...classNames) => {
  const mergedSchema = schema || {};
  return classNames.filter(Boolean).reduce((acc, cur) => {
    Object.keys(cur || {}).forEach((key) => {
      const keySchema = mergedSchema[key];
      const curVal = cur[key];
      if (keySchema && typeof keySchema === "object") {
        if (curVal && typeof curVal === "object") {
          acc[key] = mergeClassNames(keySchema, acc[key], curVal);
        } else {
          const {
            _default: defaultField
          } = keySchema;
          if (defaultField) {
            acc[key] = acc[key] || {};
            acc[key][defaultField] = clsx(acc[key][defaultField], curVal);
          }
        }
      } else {
        acc[key] = clsx(acc[key], curVal);
      }
    });
    return acc;
  }, {});
};
var useSemanticClassNames = (schema, ...classNames) => {
  return React.useMemo(() => mergeClassNames.apply(void 0, [schema].concat(classNames)), [schema].concat(classNames));
};
var mergeStyles = (...styles) => {
  return styles.filter(Boolean).reduce((acc, cur = {}) => {
    Object.keys(cur).forEach((key) => {
      acc[key] = {
        ...acc[key],
        ...cur[key]
      };
    });
    return acc;
  }, {});
};
var useSemanticStyles = (...styles) => {
  return React.useMemo(() => mergeStyles.apply(void 0, styles), [].concat(styles));
};
var fillObjectBySchema = (obj, schema) => {
  const newObj = {
    ...obj
  };
  Object.keys(schema).forEach((key) => {
    if (key !== "_default") {
      const nestSchema = schema[key];
      const nextValue = newObj[key] || {};
      newObj[key] = nestSchema ? fillObjectBySchema(nextValue, nestSchema) : nextValue;
    }
  });
  return newObj;
};
var resolveStyleOrClass = (value, info) => {
  return typeof value === "function" ? value(info) : value;
};
var useMergeSemantic = (classNamesList, stylesList, info, schema) => {
  const resolvedClassNamesList = classNamesList.map((classNames) => classNames ? resolveStyleOrClass(classNames, info) : void 0);
  const resolvedStylesList = stylesList.map((styles) => styles ? resolveStyleOrClass(styles, info) : void 0);
  const mergedClassNames = useSemanticClassNames.apply(void 0, [schema].concat(_toConsumableArray(resolvedClassNamesList)));
  const mergedStyles = useSemanticStyles.apply(void 0, _toConsumableArray(resolvedStylesList));
  return React.useMemo(() => {
    if (!schema) {
      return [mergedClassNames, mergedStyles];
    }
    return [fillObjectBySchema(mergedClassNames, schema), fillObjectBySchema(mergedStyles, schema)];
  }, [mergedClassNames, mergedStyles, schema]);
};

// node_modules/antd/es/_util/hooks/useClosable.js
var import_react = __toESM(require_react());

// node_modules/@rc-component/util/es/pickAttrs.js
var attributes = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`;
var eventsName = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`;
var propList = `${attributes} ${eventsName}`.split(/[\s\n]+/);
var ariaPrefix = "aria-";
var dataPrefix = "data-";
function match(key, prefix) {
  return key.indexOf(prefix) === 0;
}
function pickAttrs(props, ariaOnly = false) {
  let mergedConfig;
  if (ariaOnly === false) {
    mergedConfig = {
      aria: true,
      data: true,
      attr: true
    };
  } else if (ariaOnly === true) {
    mergedConfig = {
      aria: true
    };
  } else {
    mergedConfig = {
      ...ariaOnly
    };
  }
  const attrs = {};
  Object.keys(props).forEach((key) => {
    if (
      // Aria
      mergedConfig.aria && (key === "role" || match(key, ariaPrefix)) || // Data
      mergedConfig.data && match(key, dataPrefix) || // Attr
      mergedConfig.attr && propList.includes(key)
    ) {
      attrs[key] = props[key];
    }
  });
  return attrs;
}

// node_modules/antd/es/_util/extendsObject.js
function mergeProps(...items) {
  const ret = {};
  items.forEach((item) => {
    if (item) {
      Object.keys(item).forEach((key) => {
        if (item[key] !== void 0) {
          ret[key] = item[key];
        }
      });
    }
  });
  return ret;
}
var extendsObject_default = mergeProps;

// node_modules/antd/es/_util/isNonNullable.js
var isNonNullable = (val) => {
  return val !== void 0 && val !== null;
};
var isNonNullable_default = isNonNullable;

// node_modules/antd/es/_util/hooks/useClosable.js
var pickClosable = (context) => {
  if (!context) {
    return void 0;
  }
  const {
    closable,
    closeIcon
  } = context;
  return {
    closable,
    closeIcon
  };
};
var EmptyFallbackCloseCollection = {};
var computeClosableConfig = (closable, closeIcon) => {
  if (!closable && (closable === false || closeIcon === false || closeIcon === null)) {
    return false;
  }
  if (closable === void 0 && closeIcon === void 0) {
    return null;
  }
  let closableConfig = {
    closeIcon: typeof closeIcon !== "boolean" && closeIcon !== null ? closeIcon : void 0
  };
  if (closable && typeof closable === "object") {
    closableConfig = {
      ...closableConfig,
      ...closable
    };
  }
  return closableConfig;
};
var mergeClosableConfigs = (propConfig, contextConfig, fallbackConfig) => {
  if (propConfig === false) {
    return false;
  }
  if (propConfig) {
    return extendsObject_default(fallbackConfig, contextConfig, propConfig);
  }
  if (contextConfig === false) {
    return false;
  }
  if (contextConfig) {
    return extendsObject_default(fallbackConfig, contextConfig);
  }
  return fallbackConfig.closable ? fallbackConfig : false;
};
var computeCloseIcon = (mergedConfig, fallbackCloseCollection, closeLabel) => {
  const {
    closeIconRender
  } = fallbackCloseCollection;
  const {
    closeIcon,
    ...restConfig
  } = mergedConfig;
  let finalCloseIcon = closeIcon;
  const ariaOrDataProps = pickAttrs(restConfig, true);
  if (isNonNullable_default(finalCloseIcon)) {
    if (closeIconRender) {
      finalCloseIcon = closeIconRender(finalCloseIcon);
    }
    finalCloseIcon = import_react.default.isValidElement(finalCloseIcon) ? import_react.default.cloneElement(finalCloseIcon, {
      "aria-label": closeLabel,
      ...finalCloseIcon.props,
      ...ariaOrDataProps
    }) : import_react.default.createElement("span", {
      "aria-label": closeLabel,
      ...ariaOrDataProps
    }, finalCloseIcon);
  }
  return [finalCloseIcon, ariaOrDataProps];
};
var computeClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection, closeLabel = "Close") => {
  const propConfig = computeClosableConfig(propCloseCollection?.closable, propCloseCollection?.closeIcon);
  const contextConfig = computeClosableConfig(contextCloseCollection?.closable, contextCloseCollection?.closeIcon);
  const mergedFallback = {
    closeIcon: import_react.default.createElement(CloseOutlined_default, null),
    ...fallbackCloseCollection
  };
  const mergedConfig = mergeClosableConfigs(propConfig, contextConfig, mergedFallback);
  const closeBtnIsDisabled = typeof mergedConfig !== "boolean" ? !!mergedConfig?.disabled : false;
  if (mergedConfig === false) {
    return [false, null, closeBtnIsDisabled, {}];
  }
  const [closeIcon, ariaProps] = computeCloseIcon(mergedConfig, mergedFallback, closeLabel);
  return [true, closeIcon, closeBtnIsDisabled, ariaProps];
};
var useClosable = (propCloseCollection, contextCloseCollection, fallbackCloseCollection = EmptyFallbackCloseCollection) => {
  const [contextLocale] = useLocale_default("global", en_US_default.global);
  return import_react.default.useMemo(() => {
    return computeClosable(propCloseCollection, contextCloseCollection, {
      closeIcon: import_react.default.createElement(CloseOutlined_default, null),
      ...fallbackCloseCollection
    }, contextLocale.close);
  }, [propCloseCollection, contextCloseCollection, fallbackCloseCollection, contextLocale.close]);
};

// node_modules/antd/es/_util/hooks/useForceUpdate.js
var import_react2 = __toESM(require_react());
var useForceUpdate = () => {
  return import_react2.default.useReducer((ori) => ori + 1, 0);
};

// node_modules/antd/es/_util/hooks/useMergedMask.js
var import_react3 = __toESM(require_react());
var normalizeMaskConfig = (mask) => {
  if (mask && typeof mask === "object") {
    return mask;
  }
  if (typeof mask === "boolean") {
    return {
      enabled: mask,
      blur: mask
    };
  }
  return {};
};
var useMergedMask = (mask, contextMask, prefixCls) => {
  return (0, import_react3.useMemo)(() => {
    const maskConfig = normalizeMaskConfig(mask);
    const contextMaskConfig = normalizeMaskConfig(contextMask);
    const mergedConfig = {
      ...contextMaskConfig,
      ...maskConfig
    };
    const className = mergedConfig.blur !== false ? `${prefixCls}-mask-blur` : void 0;
    return [mergedConfig.enabled !== false, {
      mask: className
    }];
  }, [mask, contextMask, prefixCls]);
};

// node_modules/antd/es/_util/hooks/useMultipleSelect.js
var import_react4 = __toESM(require_react());
var useMultipleSelect = (getKey) => {
  const [prevSelectedIndex, setPrevSelectedIndex] = (0, import_react4.useState)(null);
  const multipleSelect = (0, import_react4.useCallback)((currentSelectedIndex, data, selectedKeys) => {
    const configPrevSelectedIndex = prevSelectedIndex ?? currentSelectedIndex;
    const startIndex = Math.min(configPrevSelectedIndex || 0, currentSelectedIndex);
    const endIndex = Math.max(configPrevSelectedIndex || 0, currentSelectedIndex);
    const rangeKeys = data.slice(startIndex, endIndex + 1).map(getKey);
    const shouldSelected = rangeKeys.some((rangeKey) => !selectedKeys.has(rangeKey));
    const changedKeys = [];
    rangeKeys.forEach((item) => {
      if (shouldSelected) {
        if (!selectedKeys.has(item)) {
          changedKeys.push(item);
        }
        selectedKeys.add(item);
      } else {
        selectedKeys.delete(item);
        changedKeys.push(item);
      }
    });
    setPrevSelectedIndex(shouldSelected ? endIndex : null);
    return changedKeys;
  }, [prevSelectedIndex]);
  return [multipleSelect, setPrevSelectedIndex];
};

// node_modules/antd/es/_util/hooks/useOrientation.js
var import_react5 = __toESM(require_react());
var isValidOrientation = (orientation) => {
  return orientation === "horizontal" || orientation === "vertical";
};
var useOrientation = (orientation, vertical, legacyDirection) => {
  return (0, import_react5.useMemo)(() => {
    const validOrientation = isValidOrientation(orientation);
    let mergedOrientation;
    if (validOrientation) {
      mergedOrientation = orientation;
    } else if (typeof vertical === "boolean") {
      mergedOrientation = vertical ? "vertical" : "horizontal";
    } else {
      const validLegacyDirection = isValidOrientation(legacyDirection);
      mergedOrientation = validLegacyDirection ? legacyDirection : "horizontal";
    }
    return [mergedOrientation, mergedOrientation === "vertical"];
  }, [legacyDirection, orientation, vertical]);
};

// node_modules/antd/es/_util/hooks/usePatchElement.js
var React4 = __toESM(require_react());
var usePatchElement = () => {
  const [elements, setElements] = React4.useState([]);
  const patchElement = React4.useCallback((element) => {
    setElements((originElements) => [].concat(_toConsumableArray(originElements), [element]));
    return () => {
      setElements((originElements) => originElements.filter((ele) => ele !== element));
    };
  }, []);
  return [elements, patchElement];
};

// node_modules/antd/es/_util/hooks/useProxyImperativeHandle.js
var import_react6 = __toESM(require_react());
var fillProxy = (element, handler) => {
  element._antProxy = element._antProxy || {};
  Object.keys(handler).forEach((key) => {
    if (!(key in element._antProxy)) {
      const ori = element[key];
      element._antProxy[key] = ori;
      element[key] = handler[key];
    }
  });
  return element;
};
var useProxyImperativeHandle = (ref, init) => {
  return (0, import_react6.useImperativeHandle)(ref, () => {
    const refObj = init();
    const {
      nativeElement
    } = refObj;
    if (typeof Proxy !== "undefined") {
      return new Proxy(nativeElement, {
        get(obj, prop) {
          if (refObj[prop]) {
            return refObj[prop];
          }
          return Reflect.get(obj, prop);
        }
      });
    }
    return fillProxy(nativeElement, refObj);
  });
};

// node_modules/antd/es/_util/hooks/useSyncState.js
var React5 = __toESM(require_react());
var useSyncState = (initialValue) => {
  const ref = React5.useRef(initialValue);
  const [, forceUpdate] = useForceUpdate();
  return [() => ref.current, (newValue) => {
    ref.current = newValue;
    forceUpdate();
  }];
};

// node_modules/antd/es/_util/hooks/useZIndex.js
var import_react8 = __toESM(require_react());

// node_modules/antd/es/_util/zindexContext.js
var import_react7 = __toESM(require_react());
var zIndexContext = import_react7.default.createContext(void 0);
if (true) {
  zIndexContext.displayName = "zIndexContext";
}
var zindexContext_default = zIndexContext;

// node_modules/antd/es/_util/hooks/useZIndex.js
var CONTAINER_OFFSET = 100;
var CONTAINER_OFFSET_MAX_COUNT = 10;
var CONTAINER_MAX_OFFSET = CONTAINER_OFFSET * CONTAINER_OFFSET_MAX_COUNT;
var CONTAINER_MAX_OFFSET_WITH_CHILDREN = CONTAINER_MAX_OFFSET + CONTAINER_OFFSET;
var containerBaseZIndexOffset = {
  Modal: CONTAINER_OFFSET,
  Drawer: CONTAINER_OFFSET,
  Popover: CONTAINER_OFFSET,
  Popconfirm: CONTAINER_OFFSET,
  Tooltip: CONTAINER_OFFSET,
  Tour: CONTAINER_OFFSET,
  FloatButton: CONTAINER_OFFSET
};
var consumerBaseZIndexOffset = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
var isContainerType = (type5) => {
  return type5 in containerBaseZIndexOffset;
};
var useZIndex = (componentType, customZIndex) => {
  const [, token] = useToken();
  const parentZIndex = import_react8.default.useContext(zindexContext_default);
  const isContainer = isContainerType(componentType);
  let result;
  if (customZIndex !== void 0) {
    result = [customZIndex, customZIndex];
  } else {
    let zIndex = parentZIndex ?? 0;
    if (isContainer) {
      zIndex += // Use preset token zIndex by default but not stack when has parent container
      (parentZIndex ? 0 : token.zIndexPopupBase) + // Container offset
      containerBaseZIndexOffset[componentType];
    } else {
      zIndex += consumerBaseZIndexOffset[componentType];
    }
    result = [parentZIndex === void 0 ? customZIndex : zIndex, zIndex];
  }
  if (true) {
    const warning3 = devUseWarning(componentType);
    const maxZIndex = token.zIndexPopupBase + CONTAINER_MAX_OFFSET_WITH_CHILDREN;
    const currentZIndex = result[0] || 0;
    true ? warning3(customZIndex !== void 0 || currentZIndex <= maxZIndex, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.") : void 0;
  }
  return result;
};

// node_modules/antd/es/config-provider/hooks/useSize.js
var import_react9 = __toESM(require_react());
var useSize = (customSize) => {
  const size = import_react9.default.useContext(SizeContext_default);
  const mergedSize = import_react9.default.useMemo(() => {
    if (!customSize) {
      return size;
    }
    if (typeof customSize === "string") {
      return customSize ?? size;
    }
    if (typeof customSize === "function") {
      return customSize(size);
    }
    return size;
  }, [customSize, size]);
  return mergedSize;
};
var useSize_default = useSize;

// node_modules/antd/es/form/hooks/useVariants.js
var React19 = __toESM(require_react());

// node_modules/antd/es/form/context.js
var React18 = __toESM(require_react());

// node_modules/@rc-component/form/es/index.js
var React17 = __toESM(require_react());

// node_modules/@rc-component/form/es/Field.js
var React12 = __toESM(require_react());

// node_modules/@rc-component/form/es/FieldContext.js
var React9 = __toESM(require_react());
var HOOK_MARK = "RC_FORM_INTERNAL_HOOKS";
var warningFunc = () => {
  warning_default(false, "Can not find FormContext. Please make sure you wrap Field under Form.");
};
var Context = React9.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: () => {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
var FieldContext_default = Context;

// node_modules/@rc-component/form/es/ListContext.js
var React10 = __toESM(require_react());
var ListContext = React10.createContext(null);
var ListContext_default = ListContext;

// node_modules/@rc-component/form/es/utils/typeUtil.js
function toArray2(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}
function isFormInstance(form) {
  return form && !!form._init;
}

// node_modules/@rc-component/async-validator/es/messages.js
function newMessages() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      tel: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    }
  };
}
var messages = newMessages();

// node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}

// node_modules/@babel/runtime/helpers/esm/construct.js
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}

// node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper2(t2) {
    if (null === t2 || !_isNativeFunction(t2)) return t2;
    if ("function" != typeof t2) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t2)) return r.get(t2);
      r.set(t2, Wrapper);
    }
    function Wrapper() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t2.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), _setPrototypeOf(Wrapper, t2);
  }, _wrapNativeSuper(t);
}

// node_modules/@rc-component/async-validator/es/util.js
var formatRegExp = /%[sdj%]/g;
var warning = function warning2() {
};
if (typeof process !== "undefined" && process.env && true && typeof window !== "undefined" && typeof document !== "undefined") {
  warning = function warning3(type5, errors) {
    if (typeof console !== "undefined" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === "undefined") {
      if (errors.every(function(e) {
        return typeof e === "string";
      })) {
        console.warn(type5, errors);
      }
    }
  };
}
function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function(error) {
    var field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}
function format(template) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  var i = 0;
  var len = args.length;
  if (typeof template === "function") {
    return template.apply(null, args);
  }
  if (typeof template === "string") {
    var str = template.replace(formatRegExp, function(x) {
      if (x === "%%") {
        return "%";
      }
      if (i >= len) {
        return x;
      }
      switch (x) {
        case "%s":
          return String(args[i++]);
        case "%d":
          return Number(args[i++]);
        case "%j":
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return "[Circular]";
          }
          break;
        default:
          return x;
      }
    });
    return str;
  }
  return template;
}
function isNativeStringType(type5) {
  return type5 === "string" || type5 === "url" || type5 === "hex" || type5 === "email" || type5 === "date" || type5 === "pattern" || type5 === "tel";
}
function isEmptyValue(value, type5) {
  if (value === void 0 || value === null) {
    return true;
  }
  if (type5 === "array" && Array.isArray(value) && !value.length) {
    return true;
  }
  if (isNativeStringType(type5) && typeof value === "string" && !value) {
    return true;
  }
  return false;
}
function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;
  function count(errors) {
    results.push.apply(results, _toConsumableArray(errors || []));
    total++;
    if (total === arrLength) {
      callback(results);
    }
  }
  arr.forEach(function(a) {
    func(a, count);
  });
}
function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;
  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }
    var original = index;
    index = index + 1;
    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }
  next([]);
}
function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function(k) {
    ret.push.apply(ret, _toConsumableArray(objArr[k] || []));
  });
  return ret;
}
var AsyncValidationError = (function(_Error) {
  _inherits(AsyncValidationError2, _Error);
  var _super = _createSuper(AsyncValidationError2);
  function AsyncValidationError2(errors, fields) {
    var _this;
    _classCallCheck(this, AsyncValidationError2);
    _this = _super.call(this, "Async Validation Error");
    _defineProperty(_assertThisInitialized(_this), "errors", void 0);
    _defineProperty(_assertThisInitialized(_this), "fields", void 0);
    _this.errors = errors;
    _this.fields = fields;
    return _this;
  }
  return _createClass(AsyncValidationError2);
})(_wrapNativeSuper(Error));
function asyncMap(objArr, option, func, callback, source) {
  if (option.first) {
    var _pending = new Promise(function(resolve, reject) {
      var next = function next2(errors) {
        callback(errors);
        return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
      };
      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });
    _pending.catch(function(e) {
      return e;
    });
    return _pending;
  }
  var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function(resolve, reject) {
    var next = function next2(errors) {
      results.push.apply(results, errors);
      total++;
      if (total === objArrLength) {
        callback(results);
        return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
      }
    };
    if (!objArrKeys.length) {
      callback(results);
      resolve(source);
    }
    objArrKeys.forEach(function(key) {
      var arr = objArr[key];
      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending.catch(function(e) {
    return e;
  });
  return pending;
}
function isErrorObj(obj) {
  return !!(obj && obj.message !== void 0);
}
function getValue(value, path) {
  var v = value;
  for (var i = 0; i < path.length; i++) {
    if (v == void 0) {
      return v;
    }
    v = v[path[i]];
  }
  return v;
}
function complementError(rule, source) {
  return function(oe) {
    var fieldValue;
    if (rule.fullFields) {
      fieldValue = getValue(source, rule.fullFields);
    } else {
      fieldValue = source[oe.field || rule.fullField];
    }
    if (isErrorObj(oe)) {
      oe.field = oe.field || rule.fullField;
      oe.fieldValue = fieldValue;
      return oe;
    }
    return {
      message: typeof oe === "function" ? oe() : oe,
      fieldValue,
      field: oe.field || rule.fullField
    };
  };
}
function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];
        if (_typeof(value) === "object" && _typeof(target[s]) === "object") {
          target[s] = _objectSpread2(_objectSpread2({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }
  return target;
}

// node_modules/@rc-component/async-validator/es/rule/enum.js
var ENUM = "enum";
var enumerable = function enumerable2(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];
  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(", ")));
  }
};
var enum_default = enumerable;

// node_modules/@rc-component/async-validator/es/rule/pattern.js
var pattern = function pattern2(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      rule.pattern.lastIndex = 0;
      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === "string") {
      var _pattern = new RegExp(rule.pattern);
      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
};
var pattern_default = pattern;

// node_modules/@rc-component/async-validator/es/rule/range.js
var range = function range2(rule, value, source, errors, options) {
  var len = typeof rule.len === "number";
  var min = typeof rule.min === "number";
  var max = typeof rule.max === "number";
  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === "number";
  var str = typeof value === "string";
  var arr = Array.isArray(value);
  if (num) {
    key = "number";
  } else if (str) {
    key = "string";
  } else if (arr) {
    key = "array";
  }
  if (!key) {
    return false;
  }
  if (arr) {
    val = value.length;
  }
  if (str) {
    val = value.replace(spRegexp, "_").length;
  }
  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
};
var range_default = range;

// node_modules/@rc-component/async-validator/es/rule/required.js
var required = function required2(rule, value, source, errors, options, type5) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type5 || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
};
var required_default = required;

// node_modules/@rc-component/async-validator/es/rule/url.js
var urlReg;
var url_default = (function() {
  if (urlReg) {
    return urlReg;
  }
  var word = "[a-fA-F\\d:]";
  var b = function b2(options) {
    return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(word, ")|(?<=").concat(word, ")(?=\\s|$))") : "";
  };
  var v4 = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}";
  var v6seg = "[a-fA-F\\d]{1,4}";
  var v6List = [
    "(?:".concat(v6seg, ":){7}(?:").concat(v6seg, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(v6seg, ":){6}(?:").concat(v4, "|:").concat(v6seg, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(v6seg, ":){5}(?::").concat(v4, "|(?::").concat(v6seg, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(v6seg, ":){4}(?:(?::").concat(v6seg, "){0,1}:").concat(v4, "|(?::").concat(v6seg, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(v6seg, ":){3}(?:(?::").concat(v6seg, "){0,2}:").concat(v4, "|(?::").concat(v6seg, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(v6seg, ":){2}(?:(?::").concat(v6seg, "){0,3}:").concat(v4, "|(?::").concat(v6seg, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(v6seg, ":){1}(?:(?::").concat(v6seg, "){0,4}:").concat(v4, "|(?::").concat(v6seg, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(v6seg, "){0,5}:").concat(v4, "|(?::").concat(v6seg, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ];
  var v6Eth0 = "(?:%[0-9a-zA-Z]{1,})?";
  var v6 = "(?:".concat(v6List.join("|"), ")").concat(v6Eth0);
  var v46Exact = new RegExp("(?:^".concat(v4, "$)|(?:^").concat(v6, "$)"));
  var v4exact = new RegExp("^".concat(v4, "$"));
  var v6exact = new RegExp("^".concat(v6, "$"));
  var ip = function ip2(options) {
    return options && options.exact ? v46Exact : new RegExp("(?:".concat(b(options)).concat(v4).concat(b(options), ")|(?:").concat(b(options)).concat(v6).concat(b(options), ")"), "g");
  };
  ip.v4 = function(options) {
    return options && options.exact ? v4exact : new RegExp("".concat(b(options)).concat(v4).concat(b(options)), "g");
  };
  ip.v6 = function(options) {
    return options && options.exact ? v6exact : new RegExp("".concat(b(options)).concat(v6).concat(b(options)), "g");
  };
  var protocol = "(?:(?:[a-z]+:)?//)";
  var auth = "(?:\\S+(?::\\S*)?@)?";
  var ipv4 = ip.v4().source;
  var ipv6 = ip.v6().source;
  var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
  var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
  var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
  var port = "(?::\\d{2,5})?";
  var path = '(?:[/?#][^\\s"]*)?';
  var regex = "(?:".concat(protocol, "|www\\.)").concat(auth, "(?:localhost|").concat(ipv4, "|").concat(ipv6, "|").concat(host).concat(domain).concat(tld, ")").concat(port).concat(path);
  urlReg = new RegExp("(?:^".concat(regex, "$)"), "i");
  return urlReg;
});

// node_modules/@rc-component/async-validator/es/rule/type.js
var pattern3 = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  /**
   * Phone number regex, support country code, brackets, spaces, and dashes (or non-breaking hyphen \u2011).
   * @see https://regexr.com/3c53v
   * @see https://ihateregex.io/expr/phone/
   * @see https://developers.google.com/style/phone-numbers using non-breaking hyphen \u2011
   */
  tel: /^(\+[0-9]{1,3}[-\s\u2011]?)?(\([0-9]{1,4}\)[-\s\u2011]?)?([0-9]+[-\s\u2011]?)*[0-9]+$/,
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var types = {
  integer: function integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  float: function float(value) {
    return types.number(value) && !types.integer(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }
    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === "function" && typeof value.getMonth === "function" && typeof value.getYear === "function" && !isNaN(value.getTime());
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === "number";
  },
  object: function object(value) {
    return _typeof(value) === "object" && !types.array(value);
  },
  method: function method(value) {
    return typeof value === "function";
  },
  email: function email(value) {
    return typeof value === "string" && value.length <= 320 && !!value.match(pattern3.email);
  },
  tel: function tel(value) {
    return typeof value === "string" && value.length <= 32 && !!value.match(pattern3.tel);
  },
  url: function url(value) {
    return typeof value === "string" && value.length <= 2048 && !!value.match(url_default());
  },
  hex: function hex(value) {
    return typeof value === "string" && !!value.match(pattern3.hex);
  }
};
var type = function type2(rule, value, source, errors, options) {
  if (rule.required && value === void 0) {
    required_default(rule, value, source, errors, options);
    return;
  }
  var custom = ["integer", "float", "array", "regexp", "object", "method", "email", "tel", "number", "date", "url", "hex"];
  var ruleType = rule.type;
  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    }
  } else if (ruleType && _typeof(value) !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
};
var type_default = type;

// node_modules/@rc-component/async-validator/es/rule/whitespace.js
var whitespace = function whitespace2(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === "") {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
};
var whitespace_default = whitespace;

// node_modules/@rc-component/async-validator/es/rule/index.js
var rule_default = {
  required: required_default,
  whitespace: whitespace_default,
  type: type_default,
  range: range_default,
  enum: enum_default,
  pattern: pattern_default
};

// node_modules/@rc-component/async-validator/es/validator/any.js
var any = function any2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
  }
  callback(errors);
};
var any_default = any;

// node_modules/@rc-component/async-validator/es/validator/array.js
var array2 = function array3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if ((value === void 0 || value === null) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options, "array");
    if (value !== void 0 && value !== null) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var array_default = array2;

// node_modules/@rc-component/async-validator/es/validator/boolean.js
var boolean = function boolean2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var boolean_default = boolean;

// node_modules/@rc-component/async-validator/es/validator/date.js
var date2 = function date3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "date") && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "date")) {
      var dateObject;
      if (value instanceof Date) {
        dateObject = value;
      } else {
        dateObject = new Date(value);
      }
      rule_default.type(rule, dateObject, source, errors, options);
      if (dateObject) {
        rule_default.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }
  callback(errors);
};
var date_default = date2;

// node_modules/@rc-component/async-validator/es/validator/enum.js
var ENUM2 = "enum";
var enumerable3 = function enumerable4(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default[ENUM2](rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var enum_default2 = enumerable3;

// node_modules/@rc-component/async-validator/es/validator/float.js
var floatFn = function floatFn2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var float_default = floatFn;

// node_modules/@rc-component/async-validator/es/validator/integer.js
var integer2 = function integer3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var integer_default = integer2;

// node_modules/@rc-component/async-validator/es/validator/method.js
var method2 = function method3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var method_default = method2;

// node_modules/@rc-component/async-validator/es/validator/number.js
var number2 = function number3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (value === "") {
      value = void 0;
    }
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var number_default = number2;

// node_modules/@rc-component/async-validator/es/validator/object.js
var object2 = function object3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (value !== void 0) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var object_default = object2;

// node_modules/@rc-component/async-validator/es/validator/pattern.js
var pattern4 = function pattern5(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (!isEmptyValue(value, "string")) {
      rule_default.pattern(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var pattern_default2 = pattern4;

// node_modules/@rc-component/async-validator/es/validator/regexp.js
var regexp2 = function regexp3(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options);
    if (!isEmptyValue(value)) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var regexp_default = regexp2;

// node_modules/@rc-component/async-validator/es/validator/required.js
var required3 = function required4(rule, value, callback, source, options) {
  var errors = [];
  var type5 = Array.isArray(value) ? "array" : _typeof(value);
  rule_default.required(rule, value, source, errors, options, type5);
  callback(errors);
};
var required_default2 = required3;

// node_modules/@rc-component/async-validator/es/validator/string.js
var string = function string2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, "string") && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options, "string");
    if (!isEmptyValue(value, "string")) {
      rule_default.type(rule, value, source, errors, options);
      rule_default.range(rule, value, source, errors, options);
      rule_default.pattern(rule, value, source, errors, options);
      if (rule.whitespace === true) {
        rule_default.whitespace(rule, value, source, errors, options);
      }
    }
  }
  callback(errors);
};
var string_default = string;

// node_modules/@rc-component/async-validator/es/validator/type.js
var type3 = function type4(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }
    rule_default.required(rule, value, source, errors, options, ruleType);
    if (!isEmptyValue(value, ruleType)) {
      rule_default.type(rule, value, source, errors, options);
    }
  }
  callback(errors);
};
var type_default2 = type3;

// node_modules/@rc-component/async-validator/es/validator/index.js
var validator_default = {
  string: string_default,
  method: method_default,
  number: number_default,
  boolean: boolean_default,
  regexp: regexp_default,
  integer: integer_default,
  float: float_default,
  array: array_default,
  object: object_default,
  enum: enum_default2,
  pattern: pattern_default2,
  date: date_default,
  url: type_default2,
  hex: type_default2,
  email: type_default2,
  tel: type_default2,
  required: required_default2,
  any: any_default
};

// node_modules/@rc-component/async-validator/es/index.js
var Schema = (function() {
  function Schema2(descriptor) {
    _classCallCheck(this, Schema2);
    _defineProperty(this, "rules", null);
    _defineProperty(this, "_messages", messages);
    this.define(descriptor);
  }
  _createClass(Schema2, [{
    key: "define",
    value: function define(rules) {
      var _this = this;
      if (!rules) {
        throw new Error("Cannot configure a schema with no rules");
      }
      if (_typeof(rules) !== "object" || Array.isArray(rules)) {
        throw new Error("Rules must be an object");
      }
      this.rules = {};
      Object.keys(rules).forEach(function(name) {
        var item = rules[name];
        _this.rules[name] = Array.isArray(item) ? item : [item];
      });
    }
  }, {
    key: "messages",
    value: function messages2(_messages) {
      if (_messages) {
        this._messages = deepMerge(newMessages(), _messages);
      }
      return this._messages;
    }
  }, {
    key: "validate",
    value: function validate(source_) {
      var _this2 = this;
      var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var oc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      };
      var source = source_;
      var options = o;
      var callback = oc;
      if (typeof options === "function") {
        callback = options;
        options = {};
      }
      if (!this.rules || Object.keys(this.rules).length === 0) {
        if (callback) {
          callback(null, source);
        }
        return Promise.resolve(source);
      }
      function complete(results) {
        var errors = [];
        var fields = {};
        function add(e) {
          if (Array.isArray(e)) {
            var _errors;
            errors = (_errors = errors).concat.apply(_errors, _toConsumableArray(e));
          } else {
            errors.push(e);
          }
        }
        for (var i = 0; i < results.length; i++) {
          add(results[i]);
        }
        if (!errors.length) {
          callback(null, source);
        } else {
          fields = convertFieldsError(errors);
          callback(errors, fields);
        }
      }
      if (options.messages) {
        var messages2 = this.messages();
        if (messages2 === messages) {
          messages2 = newMessages();
        }
        deepMerge(messages2, options.messages);
        options.messages = messages2;
      } else {
        options.messages = this.messages();
      }
      var series = {};
      var keys = options.keys || Object.keys(this.rules);
      keys.forEach(function(z) {
        var arr = _this2.rules[z];
        var value = source[z];
        arr.forEach(function(r) {
          var rule = r;
          if (typeof rule.transform === "function") {
            if (source === source_) {
              source = _objectSpread2({}, source);
            }
            value = source[z] = rule.transform(value);
            if (value !== void 0 && value !== null) {
              rule.type = rule.type || (Array.isArray(value) ? "array" : _typeof(value));
            }
          }
          if (typeof rule === "function") {
            rule = {
              validator: rule
            };
          } else {
            rule = _objectSpread2({}, rule);
          }
          rule.validator = _this2.getValidationMethod(rule);
          if (!rule.validator) {
            return;
          }
          rule.field = z;
          rule.fullField = rule.fullField || z;
          rule.type = _this2.getType(rule);
          series[z] = series[z] || [];
          series[z].push({
            rule,
            value,
            source,
            field: z
          });
        });
      });
      var errorFields = {};
      return asyncMap(series, options, function(data, doIt) {
        var rule = data.rule;
        var deep = (rule.type === "object" || rule.type === "array") && (_typeof(rule.fields) === "object" || _typeof(rule.defaultField) === "object");
        deep = deep && (rule.required || !rule.required && data.value);
        rule.field = data.field;
        function addFullField(key, schema) {
          return _objectSpread2(_objectSpread2({}, schema), {}, {
            fullField: "".concat(rule.fullField, ".").concat(key),
            fullFields: rule.fullFields ? [].concat(_toConsumableArray(rule.fullFields), [key]) : [key]
          });
        }
        function cb() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          var errorList = Array.isArray(e) ? e : [e];
          if (!options.suppressWarning && errorList.length) {
            Schema2.warning("async-validator:", errorList);
          }
          if (errorList.length && rule.message !== void 0 && rule.message !== null) {
            errorList = [].concat(rule.message);
          }
          var filledErrors = errorList.map(complementError(rule, source));
          if (options.first && filledErrors.length) {
            errorFields[rule.field] = 1;
            return doIt(filledErrors);
          }
          if (!deep) {
            doIt(filledErrors);
          } else {
            if (rule.required && !data.value) {
              if (rule.message !== void 0) {
                filledErrors = [].concat(rule.message).map(complementError(rule, source));
              } else if (options.error) {
                filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
              }
              return doIt(filledErrors);
            }
            var fieldsSchema = {};
            if (rule.defaultField) {
              Object.keys(data.value).map(function(key) {
                fieldsSchema[key] = rule.defaultField;
              });
            }
            fieldsSchema = _objectSpread2(_objectSpread2({}, fieldsSchema), data.rule.fields);
            var paredFieldsSchema = {};
            Object.keys(fieldsSchema).forEach(function(field) {
              var fieldSchema = fieldsSchema[field];
              var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
              paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
            });
            var schema = new Schema2(paredFieldsSchema);
            schema.messages(options.messages);
            if (data.rule.options) {
              data.rule.options.messages = options.messages;
              data.rule.options.error = options.error;
            }
            schema.validate(data.value, data.rule.options || options, function(errs) {
              var finalErrors = [];
              if (filledErrors && filledErrors.length) {
                finalErrors.push.apply(finalErrors, _toConsumableArray(filledErrors));
              }
              if (errs && errs.length) {
                finalErrors.push.apply(finalErrors, _toConsumableArray(errs));
              }
              doIt(finalErrors.length ? finalErrors : null);
            });
          }
        }
        var res;
        if (rule.asyncValidator) {
          res = rule.asyncValidator(rule, data.value, cb, data.source, options);
        } else if (rule.validator) {
          try {
            res = rule.validator(rule, data.value, cb, data.source, options);
          } catch (error) {
            var _console$error, _console;
            (_console$error = (_console = console).error) === null || _console$error === void 0 || _console$error.call(_console, error);
            if (!options.suppressValidatorError) {
              setTimeout(function() {
                throw error;
              }, 0);
            }
            cb(error.message);
          }
          if (res === true) {
            cb();
          } else if (res === false) {
            cb(typeof rule.message === "function" ? rule.message(rule.fullField || rule.field) : rule.message || "".concat(rule.fullField || rule.field, " fails"));
          } else if (res instanceof Array) {
            cb(res);
          } else if (res instanceof Error) {
            cb(res.message);
          }
        }
        if (res && res.then) {
          res.then(function() {
            return cb();
          }, function(e) {
            return cb(e);
          });
        }
      }, function(results) {
        complete(results);
      }, source);
    }
  }, {
    key: "getType",
    value: function getType(rule) {
      if (rule.type === void 0 && rule.pattern instanceof RegExp) {
        rule.type = "pattern";
      }
      if (typeof rule.validator !== "function" && rule.type && !validator_default.hasOwnProperty(rule.type)) {
        throw new Error(format("Unknown rule type %s", rule.type));
      }
      return rule.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function getValidationMethod(rule) {
      if (typeof rule.validator === "function") {
        return rule.validator;
      }
      var keys = Object.keys(rule);
      var messageIndex = keys.indexOf("message");
      if (messageIndex !== -1) {
        keys.splice(messageIndex, 1);
      }
      if (keys.length === 1 && keys[0] === "required") {
        return validator_default.required;
      }
      return validator_default[this.getType(rule)] || void 0;
    }
  }]);
  return Schema2;
})();
_defineProperty(Schema, "register", function register(type5, validator) {
  if (typeof validator !== "function") {
    throw new Error("Cannot register a validator by type, validator is not a function");
  }
  validator_default[type5] = validator;
});
_defineProperty(Schema, "warning", warning);
_defineProperty(Schema, "messages", messages);
_defineProperty(Schema, "validators", validator_default);
var es_default = Schema;

// node_modules/@rc-component/form/es/utils/validateUtil.js
var React11 = __toESM(require_react());

// node_modules/@rc-component/form/es/utils/messages.js
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    tel: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

// node_modules/@rc-component/form/es/utils/validateUtil.js
var AsyncValidator = es_default;
function replaceMessage(template, kv) {
  return template.replace(/\\?\$\{\w+\}/g, (str) => {
    if (str.startsWith("\\")) {
      return str.slice(1);
    }
    const key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = "CODE_LOGIC_ERROR";
async function validateRule(name, value, rule, options, messageVariables) {
  const cloneRule = {
    ...rule
  };
  delete cloneRule.ruleIndex;
  AsyncValidator.warning = () => void 0;
  if (cloneRule.validator) {
    const originValidator = cloneRule.validator;
    cloneRule.validator = (...args) => {
      try {
        return originValidator(...args);
      } catch (error) {
        console.error(error);
        return Promise.reject(CODE_LOGIC_ERROR);
      }
    };
  }
  let subRuleField = null;
  if (cloneRule && cloneRule.type === "array" && cloneRule.defaultField) {
    subRuleField = cloneRule.defaultField;
    delete cloneRule.defaultField;
  }
  const validator = new AsyncValidator({
    [name]: [cloneRule]
  });
  const messages2 = merge(defaultValidateMessages, options.validateMessages);
  validator.messages(messages2);
  let result = [];
  try {
    await Promise.resolve(validator.validate({
      [name]: value
    }, {
      ...options
    }));
  } catch (errObj) {
    if (errObj.errors) {
      result = errObj.errors.map(({
        message
      }, index) => {
        const mergedMessage = message === CODE_LOGIC_ERROR ? messages2.default : message;
        return React11.isValidElement(mergedMessage) ? (
          // Wrap ReactNode with `key`
          React11.cloneElement(mergedMessage, {
            key: `error_${index}`
          })
        ) : mergedMessage;
      });
    }
  }
  if (!result.length && subRuleField && Array.isArray(value) && value.length > 0) {
    const subResults = await Promise.all(value.map((subValue, i) => validateRule(`${name}.${i}`, subValue, subRuleField, options, messageVariables)));
    return subResults.reduce((prev, errors) => [...prev, ...errors], []);
  }
  const kv = {
    ...rule,
    name,
    enum: (rule.enum || []).join(", "),
    ...messageVariables
  };
  const fillVariableResult = result.map((error) => {
    if (typeof error === "string") {
      return replaceMessage(error, kv);
    }
    return error;
  });
  return fillVariableResult;
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  const name = namePath.join(".");
  const filledRules = rules.map((currentRule, ruleIndex) => {
    const originValidatorFunc = currentRule.validator;
    const cloneRule = {
      ...currentRule,
      ruleIndex
    };
    if (originValidatorFunc) {
      cloneRule.validator = (rule, val, callback) => {
        let hasPromise = false;
        const wrappedCallback = (...args) => {
          Promise.resolve().then(() => {
            warning_default(!hasPromise, "Your validator function has already return a promise. `callback` will be ignored.");
            if (!hasPromise) {
              callback(...args);
            }
          });
        };
        const promise = originValidatorFunc(rule, val, wrappedCallback);
        hasPromise = promise && typeof promise.then === "function" && typeof promise.catch === "function";
        warning_default(hasPromise, "`callback` is deprecated. Please return a promise instead.");
        if (hasPromise) {
          promise.then(() => {
            callback();
          }).catch((err) => {
            callback(err || " ");
          });
        }
      };
    }
    return cloneRule;
  }).sort(({
    warningOnly: w1,
    ruleIndex: i1
  }, {
    warningOnly: w2,
    ruleIndex: i2
  }) => {
    if (!!w1 === !!w2) {
      return i1 - i2;
    }
    if (w1) {
      return 1;
    }
    return -1;
  });
  let summaryPromise;
  if (validateFirst === true) {
    summaryPromise = new Promise(async (resolve, reject) => {
      for (let i = 0; i < filledRules.length; i += 1) {
        const rule = filledRules[i];
        const errors = await validateRule(name, value, rule, options, messageVariables);
        if (errors.length) {
          reject([{
            errors,
            rule
          }]);
          return;
        }
      }
      resolve([]);
    });
  } else {
    const rulePromises = filledRules.map((rule) => validateRule(name, value, rule, options, messageVariables).then((errors) => ({
      errors,
      rule
    })));
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then((errors) => {
      return Promise.reject(errors);
    });
  }
  summaryPromise.catch((e) => e);
  return summaryPromise;
}
async function finishOnAllFailed(rulePromises) {
  return Promise.all(rulePromises).then((errorsList) => {
    const errors = [].concat(...errorsList);
    return errors;
  });
}
async function finishOnFirstFailed(rulePromises) {
  let count = 0;
  return new Promise((resolve) => {
    rulePromises.forEach((promise) => {
      promise.then((ruleError) => {
        if (ruleError.errors.length) {
          resolve([ruleError]);
        }
        count += 1;
        if (count === rulePromises.length) {
          resolve([]);
        }
      });
    });
  });
}

// node_modules/@rc-component/form/es/utils/valueUtil.js
function getNamePath(path) {
  return toArray2(path);
}
function cloneByNamePathList(store, namePathList) {
  let newStore = {};
  namePathList.forEach((namePath) => {
    const value = get(store, namePath);
    newStore = set(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath, partialMatch = false) {
  return namePathList && namePathList.some((path) => matchNamePath(namePath, path, partialMatch));
}
function matchNamePath(namePath, subNamePath, partialMatch = false) {
  if (!namePath || !subNamePath) {
    return false;
  }
  if (!partialMatch && namePath.length !== subNamePath.length) {
    return false;
  }
  return subNamePath.every((nameUnit, i) => namePath[i] === nameUnit);
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if (!source && target || source && !target) {
    return false;
  }
  if (!source || !target || typeof source !== "object" || typeof target !== "object") {
    return false;
  }
  const sourceKeys = Object.keys(source);
  const targetKeys = Object.keys(target);
  const keys = /* @__PURE__ */ new Set([...sourceKeys, ...targetKeys]);
  return [...keys].every((key) => {
    const sourceValue = source[key];
    const targetValue = target[key];
    if (typeof sourceValue === "function" && typeof targetValue === "function") {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && typeof event.target === "object" && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}
function move(array4, moveIndex, toIndex) {
  const {
    length
  } = array4;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array4;
  }
  const item = array4[moveIndex];
  const diff = moveIndex - toIndex;
  if (diff > 0) {
    return [...array4.slice(0, toIndex), item, ...array4.slice(toIndex, moveIndex), ...array4.slice(moveIndex + 1, length)];
  }
  if (diff < 0) {
    return [...array4.slice(0, moveIndex), ...array4.slice(moveIndex + 1, toIndex + 1), item, ...array4.slice(toIndex + 1, length)];
  }
  return array4;
}

// node_modules/@rc-component/form/es/Field.js
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
var EMPTY_ERRORS = [];
var EMPTY_WARNINGS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === "function") {
    return shouldUpdate(prev, next, "source" in info ? {
      source: info.source
    } : {});
  }
  return prevValue !== nextValue;
}
var Field = class extends React12.Component {
  static contextType = FieldContext_default;
  state = {
    resetCount: 0
  };
  cancelRegisterFunc = null;
  mounted = false;
  /**
   * Follow state should not management in State since it will async update by React.
   * This makes first render of form can not get correct state value.
   */
  touched = false;
  /**
   * Mark when touched & validated. Currently only used for `dependencies`.
   * Note that we do not think field with `initialValue` is dirty
   * but this will be by `isFieldDirty` func.
   */
  dirty = false;
  validatePromise;
  prevValidating;
  errors = EMPTY_ERRORS;
  warnings = EMPTY_WARNINGS;
  // ============================== Subscriptions ==============================
  constructor(props) {
    super(props);
    if (props.fieldContext) {
      const {
        getInternalHooks
      } = props.fieldContext;
      const {
        initEntityValue
      } = getInternalHooks(HOOK_MARK);
      initEntityValue(this);
    }
  }
  componentDidMount() {
    const {
      shouldUpdate,
      fieldContext
    } = this.props;
    this.mounted = true;
    if (fieldContext) {
      const {
        getInternalHooks
      } = fieldContext;
      const {
        registerField
      } = getInternalHooks(HOOK_MARK);
      this.cancelRegisterFunc = registerField(this);
    }
    if (shouldUpdate === true) {
      this.reRender();
    }
  }
  componentWillUnmount() {
    this.cancelRegister();
    this.triggerMetaEvent(true);
    this.mounted = false;
  }
  cancelRegister = () => {
    const {
      preserve,
      isListField,
      name
    } = this.props;
    if (this.cancelRegisterFunc) {
      this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
    }
    this.cancelRegisterFunc = null;
  };
  // ================================== Utils ==================================
  getNamePath = () => {
    const {
      name,
      fieldContext
    } = this.props;
    const {
      prefixName = []
    } = fieldContext;
    return name !== void 0 ? [...prefixName, ...name] : [];
  };
  getRules = () => {
    const {
      rules = [],
      fieldContext
    } = this.props;
    return rules.map((rule) => {
      if (typeof rule === "function") {
        return rule(fieldContext);
      }
      return rule;
    });
  };
  reRender() {
    if (!this.mounted) return;
    this.forceUpdate();
  }
  refresh = () => {
    if (!this.mounted) return;
    this.setState(({
      resetCount
    }) => ({
      resetCount: resetCount + 1
    }));
  };
  // Event should only trigger when meta changed
  metaCache = null;
  triggerMetaEvent = (destroy) => {
    const {
      onMetaChange
    } = this.props;
    if (onMetaChange) {
      const meta = {
        ...this.getMeta(),
        destroy
      };
      if (!isEqual_default(this.metaCache, meta)) {
        onMetaChange(meta);
      }
      this.metaCache = meta;
    } else {
      this.metaCache = null;
    }
  };
  // ========================= Field Entity Interfaces =========================
  // Trigger by store update. Check if need update the component
  onStoreChange = (prevStore, namePathList, info) => {
    const {
      shouldUpdate,
      dependencies = [],
      onReset
    } = this.props;
    const {
      store
    } = info;
    const namePath = this.getNamePath();
    const prevValue = this.getValue(prevStore);
    const curValue = this.getValue(store);
    const namePathMatch = namePathList && containsNamePath(namePathList, namePath);
    if (info.type === "valueUpdate" && info.source === "external" && !isEqual_default(prevValue, curValue)) {
      this.touched = true;
      this.dirty = true;
      this.validatePromise = null;
      this.errors = EMPTY_ERRORS;
      this.warnings = EMPTY_WARNINGS;
      this.triggerMetaEvent();
    }
    switch (info.type) {
      case "reset":
        if (!namePathList || namePathMatch) {
          this.touched = false;
          this.dirty = false;
          this.validatePromise = void 0;
          this.errors = EMPTY_ERRORS;
          this.warnings = EMPTY_WARNINGS;
          this.triggerMetaEvent();
          onReset?.();
          this.refresh();
          return;
        }
        break;
      /**
       * In case field with `preserve = false` nest deps like:
       * - A = 1 => show B
       * - B = 1 => show C
       * - Reset A, need clean B, C
       */
      case "remove": {
        if (shouldUpdate && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
          this.reRender();
          return;
        }
        break;
      }
      case "setField": {
        const {
          data
        } = info;
        if (namePathMatch) {
          if ("touched" in data) {
            this.touched = data.touched;
          }
          if ("validating" in data && !("originRCField" in data)) {
            this.validatePromise = data.validating ? Promise.resolve([]) : null;
          }
          if ("errors" in data) {
            this.errors = data.errors || EMPTY_ERRORS;
          }
          if ("warnings" in data) {
            this.warnings = data.warnings || EMPTY_WARNINGS;
          }
          this.dirty = true;
          this.triggerMetaEvent();
          this.reRender();
          return;
        } else if ("value" in data && containsNamePath(namePathList, namePath, true)) {
          this.reRender();
          return;
        }
        if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
          this.reRender();
          return;
        }
        break;
      }
      case "dependenciesUpdate": {
        const dependencyList = dependencies.map(getNamePath);
        if (dependencyList.some((dependency) => containsNamePath(info.relatedFields, dependency))) {
          this.reRender();
          return;
        }
        break;
      }
      default:
        if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
          this.reRender();
          return;
        }
        break;
    }
    if (shouldUpdate === true) {
      this.reRender();
    }
  };
  validateRules = (options) => {
    const namePath = this.getNamePath();
    const currentValue = this.getValue();
    const {
      triggerName,
      validateOnly = false
    } = options || {};
    const rootPromise = Promise.resolve().then(async () => {
      if (!this.mounted) {
        return [];
      }
      const {
        validateFirst = false,
        messageVariables,
        validateDebounce
      } = this.props;
      let filteredRules = this.getRules();
      if (triggerName) {
        filteredRules = filteredRules.filter((rule) => rule).filter((rule) => {
          const {
            validateTrigger
          } = rule;
          if (!validateTrigger) {
            return true;
          }
          const triggerList = toArray2(validateTrigger);
          return triggerList.includes(triggerName);
        });
      }
      if (validateDebounce && triggerName) {
        await new Promise((resolve) => {
          setTimeout(resolve, validateDebounce);
        });
        if (this.validatePromise !== rootPromise) {
          return [];
        }
      }
      const promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
      promise.catch((e) => e).then((ruleErrors = EMPTY_ERRORS) => {
        if (this.validatePromise === rootPromise) {
          this.validatePromise = null;
          const nextErrors = [];
          const nextWarnings = [];
          ruleErrors.forEach?.(({
            rule: {
              warningOnly
            },
            errors = EMPTY_ERRORS
          }) => {
            if (warningOnly) {
              nextWarnings.push(...errors);
            } else {
              nextErrors.push(...errors);
            }
          });
          this.errors = nextErrors;
          this.warnings = nextWarnings;
          this.triggerMetaEvent();
          this.reRender();
        }
      });
      return promise;
    });
    if (validateOnly) {
      return rootPromise;
    }
    this.validatePromise = rootPromise;
    this.dirty = true;
    this.errors = EMPTY_ERRORS;
    this.warnings = EMPTY_WARNINGS;
    this.triggerMetaEvent();
    this.reRender();
    return rootPromise;
  };
  isFieldValidating = () => !!this.validatePromise;
  isFieldTouched = () => this.touched;
  isFieldDirty = () => {
    if (this.dirty || this.props.initialValue !== void 0) {
      return true;
    }
    const {
      fieldContext
    } = this.props;
    const {
      getInitialValue
    } = fieldContext.getInternalHooks(HOOK_MARK);
    if (getInitialValue(this.getNamePath()) !== void 0) {
      return true;
    }
    return false;
  };
  getErrors = () => this.errors;
  getWarnings = () => this.warnings;
  isListField = () => this.props.isListField;
  isList = () => this.props.isList;
  isPreserve = () => this.props.preserve;
  // ============================= Child Component =============================
  getMeta = () => {
    this.prevValidating = this.isFieldValidating();
    const meta = {
      touched: this.isFieldTouched(),
      validating: this.prevValidating,
      errors: this.errors,
      warnings: this.warnings,
      name: this.getNamePath(),
      validated: this.validatePromise === null
    };
    return meta;
  };
  // Only return validate child node. If invalidate, will do nothing about field.
  getOnlyChild = (children) => {
    if (typeof children === "function") {
      const meta = this.getMeta();
      return {
        ...this.getOnlyChild(children(this.getControlled(), meta, this.props.fieldContext)),
        isFunction: true
      };
    }
    const childList = toArray(children);
    if (childList.length !== 1 || !React12.isValidElement(childList[0])) {
      return {
        child: childList,
        isFunction: false
      };
    }
    return {
      child: childList[0],
      isFunction: false
    };
  };
  // ============================== Field Control ==============================
  getValue = (store) => {
    const {
      getFieldsValue
    } = this.props.fieldContext;
    const namePath = this.getNamePath();
    return get(store || getFieldsValue(true), namePath);
  };
  getControlled = (childProps = {}) => {
    const {
      name,
      trigger = "onChange",
      validateTrigger,
      getValueFromEvent,
      normalize: normalize2,
      valuePropName = "value",
      getValueProps,
      fieldContext
    } = this.props;
    const mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : fieldContext.validateTrigger;
    const namePath = this.getNamePath();
    const {
      getInternalHooks,
      getFieldsValue
    } = fieldContext;
    const {
      dispatch
    } = getInternalHooks(HOOK_MARK);
    const value = this.getValue();
    const mergedGetValueProps = getValueProps || ((val) => ({
      [valuePropName]: val
    }));
    const originTriggerFunc = childProps[trigger];
    const valueProps = name !== void 0 ? mergedGetValueProps(value) : {};
    if (valueProps) {
      Object.keys(valueProps).forEach((key) => {
        warning_default(typeof valueProps[key] !== "function", `It's not recommended to generate dynamic function prop by \`getValueProps\`. Please pass it to child component directly (prop: ${key})`);
      });
    }
    const control = {
      ...childProps,
      ...valueProps
    };
    control[trigger] = (...args) => {
      this.touched = true;
      this.dirty = true;
      this.triggerMetaEvent();
      let newValue;
      if (getValueFromEvent) {
        newValue = getValueFromEvent(...args);
      } else {
        newValue = defaultGetValueFromEvent(valuePropName, ...args);
      }
      if (normalize2) {
        newValue = normalize2(newValue, value, getFieldsValue(true));
      }
      if (newValue !== value) {
        dispatch({
          type: "updateValue",
          namePath,
          value: newValue
        });
      }
      if (originTriggerFunc) {
        originTriggerFunc(...args);
      }
    };
    const validateTriggerList = toArray2(mergedValidateTrigger || []);
    validateTriggerList.forEach((triggerName) => {
      const originTrigger = control[triggerName];
      control[triggerName] = (...args) => {
        if (originTrigger) {
          originTrigger(...args);
        }
        const {
          rules
        } = this.props;
        if (rules && rules.length) {
          dispatch({
            type: "validateField",
            namePath,
            triggerName
          });
        }
      };
    });
    return control;
  };
  render() {
    const {
      resetCount
    } = this.state;
    const {
      children
    } = this.props;
    const {
      child,
      isFunction
    } = this.getOnlyChild(children);
    let returnChildNode;
    if (isFunction) {
      returnChildNode = child;
    } else if (React12.isValidElement(child)) {
      returnChildNode = React12.cloneElement(child, this.getControlled(child.props));
    } else {
      warning_default(!child, "`children` of Field is not validate ReactElement.");
      returnChildNode = child;
    }
    return React12.createElement(React12.Fragment, {
      key: resetCount
    }, returnChildNode);
  }
};
function WrapperField({
  name,
  ...restProps
}) {
  const fieldContext = React12.useContext(FieldContext_default);
  const listContext = React12.useContext(ListContext_default);
  const namePath = name !== void 0 ? getNamePath(name) : void 0;
  const isMergedListField = restProps.isListField ?? !!listContext;
  let key = "keep";
  if (!isMergedListField) {
    key = `_${(namePath || []).join("_")}`;
  }
  if (restProps.preserve === false && isMergedListField && namePath.length <= 1) {
    warning_default(false, "`preserve` should not apply on Form.List fields.");
  }
  return React12.createElement(Field, _extends({
    key,
    name: namePath,
    isListField: isMergedListField
  }, restProps, {
    fieldContext
  }));
}
var Field_default = WrapperField;

// node_modules/@rc-component/form/es/List.js
var React13 = __toESM(require_react());
function List({
  name,
  initialValue,
  children,
  rules,
  validateTrigger,
  isListField
}) {
  const context = React13.useContext(FieldContext_default);
  const wrapperListContext = React13.useContext(ListContext_default);
  const keyRef = React13.useRef({
    keys: [],
    id: 0
  });
  const keyManager = keyRef.current;
  const prefixName = React13.useMemo(() => {
    const parentPrefixName = getNamePath(context.prefixName) || [];
    return [...parentPrefixName, ...getNamePath(name)];
  }, [context.prefixName, name]);
  const fieldContext = React13.useMemo(() => ({
    ...context,
    prefixName
  }), [context, prefixName]);
  const listContext = React13.useMemo(() => ({
    getKey: (namePath) => {
      const len = prefixName.length;
      const pathName = namePath[len];
      return [keyManager.keys[pathName], namePath.slice(len + 1)];
    }
  }), [keyManager, prefixName]);
  if (typeof children !== "function") {
    warning_default(false, "Form.List only accepts function as children.");
    return null;
  }
  const shouldUpdate = (prevValue, nextValue, {
    source
  }) => {
    if (source === "internal") {
      return false;
    }
    return prevValue !== nextValue;
  };
  return React13.createElement(ListContext_default.Provider, {
    value: listContext
  }, React13.createElement(FieldContext_default.Provider, {
    value: fieldContext
  }, React13.createElement(Field_default, {
    name: [],
    shouldUpdate,
    rules,
    validateTrigger,
    initialValue,
    isList: true,
    isListField: isListField ?? !!wrapperListContext
  }, ({
    value = [],
    onChange
  }, meta) => {
    const {
      getFieldValue
    } = context;
    const getNewValue = () => {
      const values = getFieldValue(prefixName || []);
      return values || [];
    };
    const operations = {
      add: (defaultValue, index) => {
        const newValue = getNewValue();
        if (index >= 0 && index <= newValue.length) {
          keyManager.keys = [...keyManager.keys.slice(0, index), keyManager.id, ...keyManager.keys.slice(index)];
          onChange([...newValue.slice(0, index), defaultValue, ...newValue.slice(index)]);
        } else {
          if (index < 0 || index > newValue.length) {
            warning_default(false, "The second parameter of the add function should be a valid positive number.");
          }
          keyManager.keys = [...keyManager.keys, keyManager.id];
          onChange([...newValue, defaultValue]);
        }
        keyManager.id += 1;
      },
      remove: (index) => {
        const newValue = getNewValue();
        const indexSet = new Set(Array.isArray(index) ? index : [index]);
        if (indexSet.size <= 0) {
          return;
        }
        keyManager.keys = keyManager.keys.filter((_, keysIndex) => !indexSet.has(keysIndex));
        onChange(newValue.filter((_, valueIndex) => !indexSet.has(valueIndex)));
      },
      move(from, to) {
        if (from === to) {
          return;
        }
        const newValue = getNewValue();
        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
          return;
        }
        keyManager.keys = move(keyManager.keys, from, to);
        onChange(move(newValue, from, to));
      }
    };
    let listValue = value || [];
    if (!Array.isArray(listValue)) {
      listValue = [];
      if (true) {
        warning_default(false, `Current value of '${prefixName.join(" > ")}' is not an array type.`);
      }
    }
    return children(listValue.map((__, index) => {
      let key = keyManager.keys[index];
      if (key === void 0) {
        keyManager.keys[index] = keyManager.id;
        key = keyManager.keys[index];
        keyManager.id += 1;
      }
      return {
        name: index,
        key,
        isListField: true
      };
    }), operations, meta);
  })));
}
var List_default = List;

// node_modules/@rc-component/form/es/hooks/useForm.js
var React14 = __toESM(require_react());

// node_modules/@rc-component/form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  let hasError = false;
  let count = promiseList.length;
  const results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise.catch((e) => {
        hasError = true;
        return e;
      }).then((result) => {
        count -= 1;
        results[index] = result;
        if (count > 0) {
          return;
        }
        if (hasError) {
          reject(results);
        }
        resolve(results);
      });
    });
  });
}

// node_modules/@rc-component/form/es/utils/NameMap.js
var SPLIT = "__@field_split__";
function normalize(namePath) {
  return namePath.map((cell) => `${typeof cell}:${cell}`).join(SPLIT);
}
var NameMap = class {
  kvs = /* @__PURE__ */ new Map();
  set(key, value) {
    this.kvs.set(normalize(key), value);
  }
  get(key) {
    return this.kvs.get(normalize(key));
  }
  getAsPrefix(key) {
    const normalizedKey = normalize(key);
    const normalizedPrefix = normalizedKey + SPLIT;
    const results = [];
    const current = this.kvs.get(normalizedKey);
    if (current !== void 0) {
      results.push(current);
    }
    this.kvs.forEach((value, itemNormalizedKey) => {
      if (itemNormalizedKey.startsWith(normalizedPrefix)) {
        results.push(value);
      }
    });
    return results;
  }
  update(key, updater) {
    const origin = this.get(key);
    const next = updater(origin);
    if (!next) {
      this.delete(key);
    } else {
      this.set(key, next);
    }
  }
  delete(key) {
    this.kvs.delete(normalize(key));
  }
  // Since we only use this in test, let simply realize this
  map(callback) {
    return [...this.kvs.entries()].map(([key, value]) => {
      const cells = key.split(SPLIT);
      return callback({
        key: cells.map((cell) => {
          const [, type5, unit] = cell.match(/^([^:]*):(.*)$/);
          return type5 === "number" ? Number(unit) : unit;
        }),
        value
      });
    });
  }
  toJSON() {
    const json = {};
    this.map(({
      key,
      value
    }) => {
      json[key.join(".")] = value;
      return null;
    });
    return json;
  }
};
var NameMap_default = NameMap;

// node_modules/@rc-component/form/es/hooks/useNotifyWatch.js
var macroTask = (fn) => {
  const channel = new MessageChannel();
  channel.port1.onmessage = fn;
  channel.port2.postMessage(null);
};
var WatcherCenter = class {
  namePathList = [];
  taskId = 0;
  watcherList = /* @__PURE__ */ new Set();
  form;
  constructor(form) {
    this.form = form;
  }
  register(callback) {
    this.watcherList.add(callback);
    return () => {
      this.watcherList.delete(callback);
    };
  }
  notify(namePath) {
    namePath.forEach((path) => {
      if (this.namePathList.every((exist) => !matchNamePath(exist, path))) {
        this.namePathList.push(path);
      }
    });
    this.doBatch();
  }
  doBatch() {
    this.taskId += 1;
    const currentId = this.taskId;
    macroTask(() => {
      if (currentId === this.taskId && this.watcherList.size) {
        const formInst = this.form.getForm();
        const values = formInst.getFieldsValue();
        const allValues = formInst.getFieldsValue(true);
        this.watcherList.forEach((callback) => {
          callback(values, allValues, this.namePathList);
        });
        this.namePathList = [];
      }
    });
  }
};

// node_modules/@rc-component/form/es/hooks/useForm.js
var FormStore = class {
  formHooked = false;
  forceRootUpdate;
  subscribable = true;
  store = {};
  fieldEntities = [];
  initialValues = {};
  callbacks = {};
  validateMessages = null;
  preserve = null;
  lastValidatePromise = null;
  watcherCenter = new WatcherCenter(this);
  constructor(forceRootUpdate) {
    this.forceRootUpdate = forceRootUpdate;
  }
  getForm = () => ({
    getFieldValue: this.getFieldValue,
    getFieldsValue: this.getFieldsValue,
    getFieldError: this.getFieldError,
    getFieldWarning: this.getFieldWarning,
    getFieldsError: this.getFieldsError,
    isFieldsTouched: this.isFieldsTouched,
    isFieldTouched: this.isFieldTouched,
    isFieldValidating: this.isFieldValidating,
    isFieldsValidating: this.isFieldsValidating,
    resetFields: this.resetFields,
    setFields: this.setFields,
    setFieldValue: this.setFieldValue,
    setFieldsValue: this.setFieldsValue,
    validateFields: this.validateFields,
    submit: this.submit,
    _init: true,
    getInternalHooks: this.getInternalHooks
  });
  // ======================== Internal Hooks ========================
  getInternalHooks = (key) => {
    if (key === HOOK_MARK) {
      this.formHooked = true;
      return {
        dispatch: this.dispatch,
        initEntityValue: this.initEntityValue,
        registerField: this.registerField,
        useSubscribe: this.useSubscribe,
        setInitialValues: this.setInitialValues,
        destroyForm: this.destroyForm,
        setCallbacks: this.setCallbacks,
        setValidateMessages: this.setValidateMessages,
        getFields: this.getFields,
        setPreserve: this.setPreserve,
        getInitialValue: this.getInitialValue,
        registerWatch: this.registerWatch
      };
    }
    warning_default(false, "`getInternalHooks` is internal usage. Should not call directly.");
    return null;
  };
  useSubscribe = (subscribable) => {
    this.subscribable = subscribable;
  };
  /**
   * Record prev Form unmount fieldEntities which config preserve false.
   * This need to be refill with initialValues instead of store value.
   */
  prevWithoutPreserves = null;
  /**
   * First time `setInitialValues` should update store with initial value
   */
  setInitialValues = (initialValues, init) => {
    this.initialValues = initialValues || {};
    if (init) {
      let nextStore = merge(initialValues, this.store);
      this.prevWithoutPreserves?.map(({
        key: namePath
      }) => {
        nextStore = set(nextStore, namePath, get(initialValues, namePath));
      });
      this.prevWithoutPreserves = null;
      this.updateStore(nextStore);
    }
  };
  destroyForm = (clearOnDestroy) => {
    if (clearOnDestroy) {
      this.updateStore({});
    } else {
      const prevWithoutPreserves = new NameMap_default();
      this.getFieldEntities(true).forEach((entity) => {
        if (!this.isMergedPreserve(entity.isPreserve())) {
          prevWithoutPreserves.set(entity.getNamePath(), true);
        }
      });
      this.prevWithoutPreserves = prevWithoutPreserves;
    }
  };
  getInitialValue = (namePath) => {
    const initValue = get(this.initialValues, namePath);
    return namePath.length ? merge(initValue) : initValue;
  };
  setCallbacks = (callbacks) => {
    this.callbacks = callbacks;
  };
  setValidateMessages = (validateMessages) => {
    this.validateMessages = validateMessages;
  };
  setPreserve = (preserve) => {
    this.preserve = preserve;
  };
  // ============================= Watch ============================
  registerWatch = (callback) => {
    return this.watcherCenter.register(callback);
  };
  notifyWatch = (namePath = []) => {
    this.watcherCenter.notify(namePath);
  };
  // ========================== Dev Warning =========================
  timeoutId = null;
  warningUnhooked = () => {
    if (!this.timeoutId && typeof window !== "undefined") {
      this.timeoutId = setTimeout(() => {
        this.timeoutId = null;
        if (!this.formHooked) {
          warning_default(false, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
        }
      });
    }
  };
  // ============================ Store =============================
  updateStore = (nextStore) => {
    this.store = nextStore;
  };
  // ============================ Fields ============================
  /**
   * Get registered field entities.
   * @param pure Only return field which has a `name`. Default: false
   */
  getFieldEntities = (pure = false) => {
    if (!pure) {
      return this.fieldEntities;
    }
    return this.fieldEntities.filter((field) => field.getNamePath().length);
  };
  /**
   * Get a map of registered field entities with their name path as the key.
   * @param pure Only include fields which have a `name`. Default: false
   * @returns A NameMap containing field entities indexed by their name paths
   */
  getFieldsMap = (pure = false) => {
    const cache = new NameMap_default();
    this.getFieldEntities(pure).forEach((field) => {
      const namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  };
  /**
   * Get field entities based on a list of name paths.
   * @param nameList - Array of name paths to search for. If not provided, returns all field entities with names.
   * @param includesSubNamePath - Whether to include fields that have the given name path as a prefix.
   */
  getFieldEntitiesForNamePathList = (nameList, includesSubNamePath = false) => {
    if (!nameList) {
      return this.getFieldEntities(true);
    }
    const cache = this.getFieldsMap(true);
    if (!includesSubNamePath) {
      return nameList.map((name) => {
        const namePath = getNamePath(name);
        return cache.get(namePath) || {
          INVALIDATE_NAME_PATH: getNamePath(name)
        };
      });
    }
    return nameList.flatMap((name) => {
      const namePath = getNamePath(name);
      const fields = cache.getAsPrefix(namePath);
      if (fields.length) {
        return fields;
      }
      return [{
        INVALIDATE_NAME_PATH: namePath
      }];
    });
  };
  getFieldsValue = (nameList, filterFunc) => {
    this.warningUnhooked();
    let mergedNameList;
    let mergedFilterFunc;
    if (nameList === true || Array.isArray(nameList)) {
      mergedNameList = nameList;
      mergedFilterFunc = filterFunc;
    } else if (nameList && typeof nameList === "object") {
      mergedFilterFunc = nameList.filter;
    }
    if (mergedNameList === true && !mergedFilterFunc) {
      return this.store;
    }
    const fieldEntities = this.getFieldEntitiesForNamePathList(Array.isArray(mergedNameList) ? mergedNameList : null, true);
    const filteredNameList = [];
    const listNamePaths = [];
    fieldEntities.forEach((entity) => {
      const namePath = entity.INVALIDATE_NAME_PATH || entity.getNamePath();
      if (entity.isList?.()) {
        listNamePaths.push(namePath);
        return;
      }
      if (!mergedFilterFunc) {
        filteredNameList.push(namePath);
      } else {
        const meta = "getMeta" in entity ? entity.getMeta() : null;
        if (mergedFilterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    let mergedValues = cloneByNamePathList(this.store, filteredNameList.map(getNamePath));
    listNamePaths.forEach((namePath) => {
      if (!get(mergedValues, namePath)) {
        mergedValues = set(mergedValues, namePath, []);
      }
    });
    return mergedValues;
  };
  getFieldValue = (name) => {
    this.warningUnhooked();
    const namePath = getNamePath(name);
    return get(this.store, namePath);
  };
  getFieldsError = (nameList) => {
    this.warningUnhooked();
    const fieldEntities = this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map((entity, index) => {
      if (entity && !entity.INVALIDATE_NAME_PATH) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  };
  getFieldError = (name) => {
    this.warningUnhooked();
    const namePath = getNamePath(name);
    const fieldError = this.getFieldsError([namePath])[0];
    return fieldError.errors;
  };
  getFieldWarning = (name) => {
    this.warningUnhooked();
    const namePath = getNamePath(name);
    const fieldError = this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  };
  isFieldsTouched = (...args) => {
    this.warningUnhooked();
    const [arg0, arg1] = args;
    let namePathList;
    let isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }
    const fieldEntities = this.getFieldEntities(true);
    const isFieldTouched = (field) => field.isFieldTouched();
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every((entity) => isFieldTouched(entity) || entity.isList()) : fieldEntities.some(isFieldTouched);
    }
    const map = new NameMap_default();
    namePathList.forEach((shortNamePath) => {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach((field) => {
      const fieldNamePath = field.getNamePath();
      namePathList.forEach((shortNamePath) => {
        if (shortNamePath.every((nameUnit, i) => fieldNamePath[i] === nameUnit)) {
          map.update(shortNamePath, (list) => [...list, field]);
        }
      });
    });
    const isNamePathListTouched = (entities) => entities.some(isFieldTouched);
    const namePathListEntities = map.map(({
      value
    }) => value);
    return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
  };
  isFieldTouched = (name) => {
    this.warningUnhooked();
    return this.isFieldsTouched([name]);
  };
  isFieldsValidating = (nameList) => {
    this.warningUnhooked();
    const fieldEntities = this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some((testField) => testField.isFieldValidating());
    }
    const namePathList = nameList.map(getNamePath);
    return fieldEntities.some((testField) => {
      const fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };
  isFieldValidating = (name) => {
    this.warningUnhooked();
    return this.isFieldsValidating([name]);
  };
  /**
   * Reset Field with field `initialValue` prop.
   * Can pass `entities` or `namePathList` or just nothing.
   */
  resetWithFieldInitialValue = (info = {}) => {
    const cache = new NameMap_default();
    const fieldEntities = this.getFieldEntities(true);
    fieldEntities.forEach((field) => {
      const {
        initialValue
      } = field.props;
      const namePath = field.getNamePath();
      if (initialValue !== void 0) {
        const records = cache.get(namePath) || /* @__PURE__ */ new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });
    const resetWithFields = (entities) => {
      entities.forEach((field) => {
        const {
          initialValue
        } = field.props;
        if (initialValue !== void 0) {
          const namePath = field.getNamePath();
          const formInitialValue = this.getInitialValue(namePath);
          if (formInitialValue !== void 0) {
            warning_default(false, `Form already set 'initialValues' with path '${namePath.join(".")}'. Field can not overwrite it.`);
          } else {
            const records = cache.get(namePath);
            if (records && records.size > 1) {
              warning_default(false, `Multiple Field with path '${namePath.join(".")}' set 'initialValue'. Can not decide which one to pick.`);
            } else if (records) {
              const originValue = this.getFieldValue(namePath);
              const isListField = field.isListField();
              if (!isListField && (!info.skipExist || originValue === void 0)) {
                this.updateStore(set(this.store, namePath, [...records][0].value));
              }
            }
          }
        }
      });
    };
    let requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach((namePath) => {
        const records = cache.get(namePath);
        if (records) {
          requiredFieldEntities.push(...[...records].map((r) => r.entity));
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  };
  resetFields = (nameList) => {
    this.warningUnhooked();
    const prevStore = this.store;
    if (!nameList) {
      this.updateStore(merge(this.initialValues));
      this.resetWithFieldInitialValue();
      this.notifyObservers(prevStore, null, {
        type: "reset"
      });
      this.notifyWatch();
      return;
    }
    const namePathList = nameList.map(getNamePath);
    namePathList.forEach((namePath) => {
      const initialValue = this.getInitialValue(namePath);
      this.updateStore(set(this.store, namePath, initialValue));
    });
    this.resetWithFieldInitialValue({
      namePathList
    });
    this.notifyObservers(prevStore, namePathList, {
      type: "reset"
    });
    this.notifyWatch(namePathList);
  };
  setFields = (fields) => {
    this.warningUnhooked();
    const prevStore = this.store;
    const namePathList = [];
    fields.forEach((fieldData) => {
      const {
        name,
        ...data
      } = fieldData;
      const namePath = getNamePath(name);
      namePathList.push(namePath);
      if ("value" in data) {
        this.updateStore(set(this.store, namePath, data.value));
      }
      this.notifyObservers(prevStore, [namePath], {
        type: "setField",
        data: fieldData
      });
    });
    this.notifyWatch(namePathList);
  };
  getFields = () => {
    const entities = this.getFieldEntities(true);
    const fields = entities.map((field) => {
      const namePath = field.getNamePath();
      const meta = field.getMeta();
      const fieldData = {
        ...meta,
        name: namePath,
        value: this.getFieldValue(namePath)
      };
      Object.defineProperty(fieldData, "originRCField", {
        value: true
      });
      return fieldData;
    });
    return fields;
  };
  // =========================== Observer ===========================
  /**
   * This only trigger when a field is on constructor to avoid we get initialValue too late
   */
  initEntityValue = (entity) => {
    const {
      initialValue
    } = entity.props;
    if (initialValue !== void 0) {
      const namePath = entity.getNamePath();
      const prevValue = get(this.store, namePath);
      if (prevValue === void 0) {
        this.updateStore(set(this.store, namePath, initialValue));
      }
    }
  };
  isMergedPreserve = (fieldPreserve) => {
    const mergedPreserve = fieldPreserve !== void 0 ? fieldPreserve : this.preserve;
    return mergedPreserve ?? true;
  };
  registerField = (entity) => {
    this.fieldEntities.push(entity);
    const namePath = entity.getNamePath();
    this.notifyWatch([namePath]);
    if (entity.props.initialValue !== void 0) {
      const prevStore = this.store;
      this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return (isListField, preserve, subNamePath = []) => {
      this.fieldEntities = this.fieldEntities.filter((item) => item !== entity);
      if (!this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        const defaultValue = isListField ? void 0 : this.getInitialValue(namePath);
        if (namePath.length && this.getFieldValue(namePath) !== defaultValue && this.fieldEntities.every((field) => (
          // Only reset when no namePath exist
          !matchNamePath(field.getNamePath(), namePath)
        ))) {
          const prevStore = this.store;
          this.updateStore(set(prevStore, namePath, defaultValue, true));
          this.notifyObservers(prevStore, [namePath], {
            type: "remove"
          });
          this.triggerDependenciesUpdate(prevStore, namePath);
        }
      }
      this.notifyWatch([namePath]);
    };
  };
  dispatch = (action) => {
    switch (action.type) {
      case "updateValue": {
        const {
          namePath,
          value
        } = action;
        this.updateValue(namePath, value);
        break;
      }
      case "validateField": {
        const {
          namePath,
          triggerName
        } = action;
        this.validateFields([namePath], {
          triggerName
        });
        break;
      }
      default:
    }
  };
  notifyObservers = (prevStore, namePathList, info) => {
    if (this.subscribable) {
      const mergedInfo = {
        ...info,
        store: this.getFieldsValue(true)
      };
      this.getFieldEntities().forEach(({
        onStoreChange
      }) => {
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      this.forceRootUpdate();
    }
  };
  /**
   * Notify dependencies children with parent update
   * We need delay to trigger validate in case Field is under render props
   */
  triggerDependenciesUpdate = (prevStore, namePath) => {
    const childrenFields = this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      this.validateFields(childrenFields);
    }
    this.notifyObservers(prevStore, childrenFields, {
      type: "dependenciesUpdate",
      relatedFields: [namePath, ...childrenFields]
    });
    return childrenFields;
  };
  updateValue = (name, value) => {
    const namePath = getNamePath(name);
    const prevStore = this.store;
    this.updateStore(set(this.store, namePath, value));
    this.notifyObservers(prevStore, [namePath], {
      type: "valueUpdate",
      source: "internal"
    });
    this.notifyWatch([namePath]);
    const childrenFields = this.triggerDependenciesUpdate(prevStore, namePath);
    const {
      onValuesChange
    } = this.callbacks;
    if (onValuesChange) {
      const fieldEntity = this.getFieldsMap(true).get(namePath);
      const changedValues = cloneByNamePathList(this.store, [namePath]);
      const allValues = this.getFieldsValue();
      const mergedAllValues = mergeWith([allValues, changedValues], {
        // When value is array, it means trigger by Form.List which should replace directly
        prepareArray: (current) => fieldEntity?.isList() ? [] : [...current || []]
      });
      onValuesChange(changedValues, mergedAllValues);
    }
    this.triggerOnFieldsChange([namePath, ...childrenFields]);
  };
  // Let all child Field get update.
  setFieldsValue = (store) => {
    this.warningUnhooked();
    const prevStore = this.store;
    if (store) {
      const nextStore = merge(this.store, store);
      this.updateStore(nextStore);
    }
    this.notifyObservers(prevStore, null, {
      type: "valueUpdate",
      source: "external"
    });
    this.notifyWatch();
  };
  setFieldValue = (name, value) => {
    this.setFields([{
      name,
      value,
      errors: [],
      warnings: [],
      touched: true
    }]);
  };
  getDependencyChildrenFields = (rootNamePath) => {
    const children = /* @__PURE__ */ new Set();
    const childrenFields = [];
    const dependencies2fields = new NameMap_default();
    this.getFieldEntities().forEach((field) => {
      const {
        dependencies
      } = field.props;
      (dependencies || []).forEach((dependency) => {
        const dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, (fields = /* @__PURE__ */ new Set()) => {
          fields.add(field);
          return fields;
        });
      });
    });
    const fillChildren = (namePath) => {
      const fields = dependencies2fields.get(namePath) || /* @__PURE__ */ new Set();
      fields.forEach((field) => {
        if (!children.has(field)) {
          children.add(field);
          const fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  };
  triggerOnFieldsChange = (namePathList, filedErrors) => {
    const {
      onFieldsChange
    } = this.callbacks;
    if (onFieldsChange) {
      const fields = this.getFields();
      if (filedErrors) {
        const cache = new NameMap_default();
        filedErrors.forEach(({
          name,
          errors
        }) => {
          cache.set(name, errors);
        });
        fields.forEach((field) => {
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      const changedFields = fields.filter(({
        name: fieldName
      }) => containsNamePath(namePathList, fieldName));
      if (changedFields.length) {
        onFieldsChange(changedFields, fields);
      }
    }
  };
  // =========================== Validate ===========================
  validateFields = (arg1, arg2) => {
    this.warningUnhooked();
    let nameList;
    let options;
    if (Array.isArray(arg1) || typeof arg1 === "string" || typeof arg2 === "string") {
      nameList = arg1;
      options = arg2;
    } else {
      options = arg1;
    }
    const provideNameList = !!nameList;
    const namePathList = provideNameList ? nameList.map(getNamePath) : [];
    const finalValueNamePathList = [...namePathList];
    const promiseList = [];
    const TMP_SPLIT = String(Date.now());
    const validateNamePathList = /* @__PURE__ */ new Set();
    const {
      recursive,
      dirty
    } = options || {};
    this.getFieldEntities(true).forEach((field) => {
      const fieldNamePath = field.getNamePath();
      if (!provideNameList) {
        if (
          // If is field, pass directly
          !field.isList() || // If is list, do not add if already exist sub field in the namePathList
          !namePathList.some((name) => matchNamePath(name, fieldNamePath, true))
        ) {
          finalValueNamePathList.push(fieldNamePath);
        }
        namePathList.push(fieldNamePath);
      }
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }
      if (dirty && !field.isFieldDirty()) {
        return;
      }
      validateNamePathList.add(fieldNamePath.join(TMP_SPLIT));
      if (!provideNameList || containsNamePath(namePathList, fieldNamePath, recursive)) {
        const promise = field.validateRules({
          validateMessages: {
            ...defaultValidateMessages,
            ...this.validateMessages
          },
          ...options
        });
        promiseList.push(promise.then(() => ({
          name: fieldNamePath,
          errors: [],
          warnings: []
        })).catch((ruleErrors) => {
          const mergedErrors = [];
          const mergedWarnings = [];
          ruleErrors.forEach?.(({
            rule: {
              warningOnly
            },
            errors
          }) => {
            if (warningOnly) {
              mergedWarnings.push(...errors);
            } else {
              mergedErrors.push(...errors);
            }
          });
          if (mergedErrors.length) {
            return Promise.reject({
              name: fieldNamePath,
              errors: mergedErrors,
              warnings: mergedWarnings
            });
          }
          return {
            name: fieldNamePath,
            errors: mergedErrors,
            warnings: mergedWarnings
          };
        }));
      }
    });
    const summaryPromise = allPromiseFinish(promiseList);
    this.lastValidatePromise = summaryPromise;
    summaryPromise.catch((results) => results).then((results) => {
      const resultNamePathList = results.map(({
        name
      }) => name);
      this.notifyObservers(this.store, resultNamePathList, {
        type: "validateFinish"
      });
      this.triggerOnFieldsChange(resultNamePathList, results);
    });
    const returnPromise = summaryPromise.then(() => {
      if (this.lastValidatePromise === summaryPromise) {
        return Promise.resolve(this.getFieldsValue(finalValueNamePathList));
      }
      return Promise.reject([]);
    }).catch((results) => {
      const errorList = results.filter((result) => result && result.errors.length);
      const errorMessage = errorList[0]?.errors?.[0];
      return Promise.reject({
        message: errorMessage,
        values: this.getFieldsValue(namePathList),
        errorFields: errorList,
        outOfDate: this.lastValidatePromise !== summaryPromise
      });
    });
    returnPromise.catch((e) => e);
    const triggerNamePathList = namePathList.filter((namePath) => validateNamePathList.has(namePath.join(TMP_SPLIT)));
    this.triggerOnFieldsChange(triggerNamePathList);
    return returnPromise;
  };
  // ============================ Submit ============================
  submit = () => {
    this.warningUnhooked();
    this.validateFields().then((values) => {
      const {
        onFinish
      } = this.callbacks;
      if (onFinish) {
        try {
          onFinish(values);
        } catch (err) {
          console.error(err);
        }
      }
    }).catch((e) => {
      const {
        onFinishFailed
      } = this.callbacks;
      if (onFinishFailed) {
        onFinishFailed(e);
      }
    });
  };
};
function useForm(form) {
  const formRef = React14.useRef(null);
  const [, forceUpdate] = React14.useState({});
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      const forceReRender = () => {
        forceUpdate({});
      };
      const formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
var useForm_default = useForm;

// node_modules/@rc-component/form/es/Form.js
var React16 = __toESM(require_react());

// node_modules/@rc-component/form/es/FormContext.js
var React15 = __toESM(require_react());
var FormContext = React15.createContext({
  triggerFormChange: () => {
  },
  triggerFormFinish: () => {
  },
  registerForm: () => {
  },
  unregisterForm: () => {
  }
});
var FormProvider = ({
  validateMessages,
  onFormChange,
  onFormFinish,
  children
}) => {
  const formContext = React15.useContext(FormContext);
  const formsRef = React15.useRef({});
  return React15.createElement(FormContext.Provider, {
    value: {
      ...formContext,
      validateMessages: {
        ...formContext.validateMessages,
        ...validateMessages
      },
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: (name, changedFields) => {
        if (onFormChange) {
          onFormChange(name, {
            changedFields,
            forms: formsRef.current
          });
        }
        formContext.triggerFormChange(name, changedFields);
      },
      triggerFormFinish: (name, values) => {
        if (onFormFinish) {
          onFormFinish(name, {
            values,
            forms: formsRef.current
          });
        }
        formContext.triggerFormFinish(name, values);
      },
      registerForm: (name, form) => {
        if (name) {
          formsRef.current = {
            ...formsRef.current,
            [name]: form
          };
        }
        formContext.registerForm(name, form);
      },
      unregisterForm: (name) => {
        const newForms = {
          ...formsRef.current
        };
        delete newForms[name];
        formsRef.current = newForms;
        formContext.unregisterForm(name);
      }
    }
  }, children);
};
var FormContext_default = FormContext;

// node_modules/@rc-component/form/es/Form.js
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
var Form = ({
  name,
  initialValues,
  fields,
  form,
  preserve,
  children,
  component: Component2 = "form",
  validateMessages,
  validateTrigger = "onChange",
  onValuesChange,
  onFieldsChange,
  onFinish,
  onFinishFailed,
  clearOnDestroy,
  ...restProps
}, ref) => {
  const nativeElementRef = React16.useRef(null);
  const formContext = React16.useContext(FormContext_default);
  const [formInstance] = useForm_default(form);
  const {
    useSubscribe,
    setInitialValues,
    setCallbacks,
    setValidateMessages,
    setPreserve,
    destroyForm
  } = formInstance.getInternalHooks(HOOK_MARK);
  React16.useImperativeHandle(ref, () => ({
    ...formInstance,
    nativeElement: nativeElementRef.current
  }));
  React16.useEffect(() => {
    formContext.registerForm(name, formInstance);
    return () => {
      formContext.unregisterForm(name);
    };
  }, [formContext, formInstance, name]);
  setValidateMessages({
    ...formContext.validateMessages,
    ...validateMessages
  });
  setCallbacks({
    onValuesChange,
    onFieldsChange: (changedFields, ...rest) => {
      formContext.triggerFormChange(name, changedFields);
      if (onFieldsChange) {
        onFieldsChange(changedFields, ...rest);
      }
    },
    onFinish: (values) => {
      formContext.triggerFormFinish(name, values);
      if (onFinish) {
        onFinish(values);
      }
    },
    onFinishFailed
  });
  setPreserve(preserve);
  const mountRef = React16.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  React16.useEffect(
    () => () => destroyForm(clearOnDestroy),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  let childrenNode;
  const childrenRenderProps = typeof children === "function";
  if (childrenRenderProps) {
    const values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } else {
    childrenNode = children;
  }
  useSubscribe(!childrenRenderProps);
  const prevFieldsRef = React16.useRef(null);
  React16.useEffect(() => {
    if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
      formInstance.setFields(fields || []);
    }
    prevFieldsRef.current = fields;
  }, [fields, formInstance]);
  const formContextValue = React16.useMemo(() => ({
    ...formInstance,
    validateTrigger
  }), [formInstance, validateTrigger]);
  const wrapperNode = React16.createElement(ListContext_default.Provider, {
    value: null
  }, React16.createElement(FieldContext_default.Provider, {
    value: formContextValue
  }, childrenNode));
  if (Component2 === false) {
    return wrapperNode;
  }
  return React16.createElement(Component2, _extends2({}, restProps, {
    ref: nativeElementRef,
    onSubmit: (event) => {
      event.preventDefault();
      event.stopPropagation();
      formInstance.submit();
    },
    onReset: (event) => {
      event.preventDefault();
      formInstance.resetFields();
      restProps.onReset?.(event);
    }
  }), wrapperNode);
};
var Form_default = Form;

// node_modules/@rc-component/form/es/hooks/useWatch.js
var import_react10 = __toESM(require_react());
function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch {
    return Math.random();
  }
}
function useWatch(...args) {
  const [dependencies, _form = {}] = args;
  const options = isFormInstance(_form) ? {
    form: _form
  } : _form;
  const form = options.form;
  const [value, setValue] = (0, import_react10.useState)(() => typeof dependencies === "function" ? dependencies({}) : void 0);
  const valueStr = (0, import_react10.useMemo)(() => stringify(value), [value]);
  const valueStrRef = (0, import_react10.useRef)(valueStr);
  valueStrRef.current = valueStr;
  const fieldContext = (0, import_react10.useContext)(FieldContext_default);
  const formInstance = form || fieldContext;
  const isValidForm = formInstance && formInstance._init;
  if (true) {
    warning_default(args.length === 2 ? form ? isValidForm : true : isValidForm, "useWatch requires a form instance since it can not auto detect from context.");
  }
  const {
    getFieldsValue,
    getInternalHooks
  } = formInstance;
  const {
    registerWatch
  } = getInternalHooks(HOOK_MARK);
  const triggerUpdate = useEvent_default((values, allValues) => {
    const watchValue = options.preserve ? allValues ?? getFieldsValue(true) : values ?? getFieldsValue();
    const nextValue = typeof dependencies === "function" ? dependencies(watchValue) : get(watchValue, getNamePath(dependencies));
    if (stringify(value) !== stringify(nextValue)) {
      setValue(nextValue);
    }
  });
  const flattenDeps = typeof dependencies === "function" ? dependencies : JSON.stringify(dependencies);
  (0, import_react10.useEffect)(() => {
    if (!isValidForm) {
      return;
    }
    triggerUpdate();
  }, [isValidForm, flattenDeps]);
  (0, import_react10.useEffect)(() => {
    if (!isValidForm) {
      return;
    }
    const cancelRegister = registerWatch((values, allValues) => {
      triggerUpdate(values, allValues);
    });
    return cancelRegister;
  }, [isValidForm]);
  return value;
}
var useWatch_default = useWatch;

// node_modules/@rc-component/form/es/index.js
var InternalForm = React17.forwardRef(Form_default);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = Field_default;
RefForm.List = List_default;
RefForm.useForm = useForm_default;
RefForm.useWatch = useWatch_default;
var es_default2 = RefForm;

// node_modules/antd/es/form/context.js
var FormContext2 = React18.createContext({
  labelAlign: "right",
  layout: "horizontal",
  itemRef: () => {
  }
});
var NoStyleItemContext = React18.createContext(null);
var FormProvider2 = (props) => {
  const providerProps = omit(props, ["prefixCls"]);
  return React18.createElement(FormProvider, {
    ...providerProps
  });
};
var FormItemPrefixContext = React18.createContext({
  prefixCls: ""
});
var FormItemInputContext = React18.createContext({});
if (true) {
  FormItemInputContext.displayName = "FormItemInputContext";
}
var NoFormStyle = ({
  children,
  status,
  override
}) => {
  const formItemInputContext = React18.useContext(FormItemInputContext);
  const newFormItemInputContext = React18.useMemo(() => {
    const newContext = {
      ...formItemInputContext
    };
    if (override) {
      delete newContext.isFormItemInput;
    }
    if (status) {
      delete newContext.status;
      delete newContext.hasFeedback;
      delete newContext.feedbackIcon;
    }
    return newContext;
  }, [status, override, formItemInputContext]);
  return React18.createElement(FormItemInputContext.Provider, {
    value: newFormItemInputContext
  }, children);
};
var VariantContext = React18.createContext(void 0);

// node_modules/antd/es/form/hooks/useVariants.js
var useVariant = (component, variant, legacyBordered) => {
  const {
    variant: configVariant,
    [component]: componentConfig
  } = React19.useContext(ConfigContext);
  const ctxVariant = React19.useContext(VariantContext);
  const configComponentVariant = componentConfig?.variant;
  let mergedVariant;
  if (typeof variant !== "undefined") {
    mergedVariant = variant;
  } else if (legacyBordered === false) {
    mergedVariant = "borderless";
  } else {
    mergedVariant = ctxVariant ?? configComponentVariant ?? configVariant ?? "outlined";
  }
  const enableVariantCls = Variants.includes(mergedVariant);
  return [mergedVariant, enableVariantCls];
};
var useVariants_default = useVariant;

// node_modules/antd/es/config-provider/hooks/useCSSVarCls.js
var useCSSVarCls = (prefixCls) => `${prefixCls}-css-var`;
var useCSSVarCls_default = useCSSVarCls;

// node_modules/antd/es/_util/motion.js
var getCollapsedHeight = () => ({
  height: 0,
  opacity: 0
});
var getRealHeight = (node) => {
  const {
    scrollHeight
  } = node;
  return {
    height: scrollHeight,
    opacity: 1
  };
};
var getCurrentHeight = (node) => ({
  height: node ? node.offsetHeight : 0
});
var skipOpacityTransition = (_, event) => event?.deadline === true || event.propertyName === "height";
var initCollapseMotion = (rootCls = defaultPrefixCls) => ({
  motionName: `${rootCls}-motion-collapse`,
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
});
var getTransitionName = (rootPrefixCls, motion, transitionName) => {
  if (transitionName !== void 0) {
    return transitionName;
  }
  return `${rootPrefixCls}-${motion}`;
};
var motion_default = initCollapseMotion;

// node_modules/@rc-component/util/es/KeyCode.js
var KeyCode = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function isTextModifyingKeyEvent(e) {
    const {
      keyCode
    } = e;
    if (e.altKey && !e.ctrlKey || e.metaKey || // Function keys don't generate text
    keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
      return false;
    }
    switch (keyCode) {
      case KeyCode.ALT:
      case KeyCode.CAPS_LOCK:
      case KeyCode.CONTEXT_MENU:
      case KeyCode.CTRL:
      case KeyCode.DOWN:
      case KeyCode.END:
      case KeyCode.ESC:
      case KeyCode.HOME:
      case KeyCode.INSERT:
      case KeyCode.LEFT:
      case KeyCode.MAC_FF_META:
      case KeyCode.META:
      case KeyCode.NUMLOCK:
      case KeyCode.NUM_CENTER:
      case KeyCode.PAGE_DOWN:
      case KeyCode.PAGE_UP:
      case KeyCode.PAUSE:
      case KeyCode.PRINT_SCREEN:
      case KeyCode.RIGHT:
      case KeyCode.SHIFT:
      case KeyCode.UP:
      case KeyCode.WIN_KEY:
      case KeyCode.WIN_KEY_RIGHT:
        return false;
      default:
        return true;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function isCharacterKey(keyCode) {
    if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
      return true;
    }
    if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
      return true;
    }
    if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
      return true;
    }
    if (window.navigator.userAgent.indexOf("WebKit") !== -1 && keyCode === 0) {
      return true;
    }
    switch (keyCode) {
      case KeyCode.SPACE:
      case KeyCode.QUESTION_MARK:
      case KeyCode.NUM_PLUS:
      case KeyCode.NUM_MINUS:
      case KeyCode.NUM_PERIOD:
      case KeyCode.NUM_DIVISION:
      case KeyCode.SEMICOLON:
      case KeyCode.DASH:
      case KeyCode.EQUALS:
      case KeyCode.COMMA:
      case KeyCode.PERIOD:
      case KeyCode.SLASH:
      case KeyCode.APOSTROPHE:
      case KeyCode.SINGLE_QUOTE:
      case KeyCode.OPEN_SQUARE_BRACKET:
      case KeyCode.BACKSLASH:
      case KeyCode.CLOSE_SQUARE_BRACKET:
        return true;
      default:
        return false;
    }
  },
  isEditableTarget: function isEditableTarget(e) {
    const target = e.target;
    if (!(target instanceof HTMLElement)) {
      return false;
    }
    const tagName = target.tagName;
    if (tagName === "INPUT" || tagName === "TEXTAREA" || tagName === "SELECT" || target.isContentEditable) {
      return true;
    }
    return false;
  }
};
var KeyCode_default = KeyCode;

// node_modules/antd/es/style/motion/motion.js
var initMotionCommon = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
var initMotionCommonLeave = (duration) => ({
  animationDuration: duration,
  animationFillMode: "both"
});
var initMotion = (motionCls, inKeyframes, outKeyframes, duration, sameLevel = false) => {
  const sameLevelPrefix = sameLevel ? "&" : "";
  return {
    [`
      ${sameLevelPrefix}${motionCls}-enter,
      ${sameLevelPrefix}${motionCls}-appear
    `]: {
      ...initMotionCommon(duration),
      animationPlayState: "paused"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      ...initMotionCommonLeave(duration),
      animationPlayState: "paused"
    },
    [`
      ${sameLevelPrefix}${motionCls}-enter${motionCls}-enter-active,
      ${sameLevelPrefix}${motionCls}-appear${motionCls}-appear-active
    `]: {
      animationName: inKeyframes,
      animationPlayState: "running"
    },
    [`${sameLevelPrefix}${motionCls}-leave${motionCls}-leave-active`]: {
      animationName: outKeyframes,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
};

// node_modules/antd/es/style/motion/fade.js
var fadeIn = new Keyframes_default("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
var fadeOut = new Keyframes_default("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
});
var initFadeMotion = (token, sameLevel = false) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-fade`;
  const sameLevelPrefix = sameLevel ? "&" : "";
  return [initMotion(motionCls, fadeIn, fadeOut, token.motionDurationMid, sameLevel), {
    [`
        ${sameLevelPrefix}${motionCls}-enter,
        ${sameLevelPrefix}${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${sameLevelPrefix}${motionCls}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
};

// node_modules/antd/es/style/motion/zoom.js
var zoomIn = new Keyframes_default("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
var zoomOut = new Keyframes_default("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
});
var zoomBigIn = new Keyframes_default("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
});
var zoomBigOut = new Keyframes_default("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
});
var zoomUpIn = new Keyframes_default("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
});
var zoomUpOut = new Keyframes_default("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
});
var zoomLeftIn = new Keyframes_default("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
});
var zoomLeftOut = new Keyframes_default("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
});
var zoomRightIn = new Keyframes_default("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
});
var zoomRightOut = new Keyframes_default("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
});
var zoomDownIn = new Keyframes_default("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
});
var zoomDownOut = new Keyframes_default("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
});
var zoomMotion = {
  zoom: {
    inKeyframes: zoomIn,
    outKeyframes: zoomOut
  },
  "zoom-big": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-big-fast": {
    inKeyframes: zoomBigIn,
    outKeyframes: zoomBigOut
  },
  "zoom-left": {
    inKeyframes: zoomLeftIn,
    outKeyframes: zoomLeftOut
  },
  "zoom-right": {
    inKeyframes: zoomRightIn,
    outKeyframes: zoomRightOut
  },
  "zoom-up": {
    inKeyframes: zoomUpIn,
    outKeyframes: zoomUpOut
  },
  "zoom-down": {
    inKeyframes: zoomDownIn,
    outKeyframes: zoomDownOut
  }
};
var initZoomMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = zoomMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, motionName === "zoom-big-fast" ? token.motionDurationFast : token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

// node_modules/antd/es/style/motion/collapse.js
var genCollapseMotion = (token) => ({
  [token.componentCls]: {
    // For common/openAnimation
    [`${token.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
      }
    },
    [`${token.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${token.motionDurationMid} ${token.motionEaseInOut},
        opacity ${token.motionDurationMid} ${token.motionEaseInOut} !important`
    }
  }
});
var collapse_default = genCollapseMotion;

// node_modules/antd/es/style/motion/move.js
var moveDownIn = new Keyframes_default("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveDownOut = new Keyframes_default("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveLeftIn = new Keyframes_default("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveLeftOut = new Keyframes_default("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveRightIn = new Keyframes_default("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveRightOut = new Keyframes_default("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveUpIn = new Keyframes_default("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
});
var moveUpOut = new Keyframes_default("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
});
var moveMotion = {
  "move-up": {
    inKeyframes: moveUpIn,
    outKeyframes: moveUpOut
  },
  "move-down": {
    inKeyframes: moveDownIn,
    outKeyframes: moveDownOut
  },
  "move-left": {
    inKeyframes: moveLeftIn,
    outKeyframes: moveLeftOut
  },
  "move-right": {
    inKeyframes: moveRightIn,
    outKeyframes: moveRightOut
  }
};
var initMoveMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = moveMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
        ${motionCls}-enter,
        ${motionCls}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: token.motionEaseOutCirc
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInOutCirc
    }
  }];
};

// node_modules/antd/es/style/motion/slide.js
var slideUpIn = new Keyframes_default("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
var slideUpOut = new Keyframes_default("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
var slideDownIn = new Keyframes_default("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
});
var slideDownOut = new Keyframes_default("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
});
var slideLeftIn = new Keyframes_default("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
});
var slideLeftOut = new Keyframes_default("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
});
var slideRightIn = new Keyframes_default("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
});
var slideRightOut = new Keyframes_default("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
});
var slideMotion = {
  "slide-up": {
    inKeyframes: slideUpIn,
    outKeyframes: slideUpOut
  },
  "slide-down": {
    inKeyframes: slideDownIn,
    outKeyframes: slideDownOut
  },
  "slide-left": {
    inKeyframes: slideLeftIn,
    outKeyframes: slideLeftOut
  },
  "slide-right": {
    inKeyframes: slideRightIn,
    outKeyframes: slideRightOut
  }
};
var initSlideMotion = (token, motionName) => {
  const {
    antCls
  } = token;
  const motionCls = `${antCls}-${motionName}`;
  const {
    inKeyframes,
    outKeyframes
  } = slideMotion[motionName];
  return [initMotion(motionCls, inKeyframes, outKeyframes, token.motionDurationMid), {
    [`
      ${motionCls}-enter,
      ${motionCls}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: token.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${motionCls}-leave`]: {
      animationTimingFunction: token.motionEaseInQuint
    }
  }];
};

// node_modules/@rc-component/util/es/Dom/focus.js
var import_react11 = __toESM(require_react());
function focusable(node, includePositive = false) {
  if (isVisible_default(node)) {
    const nodeName = node.nodeName.toLowerCase();
    const isFocusableElement = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(nodeName) || // Editable element
      node.isContentEditable || // Anchor with href element
      nodeName === "a" && !!node.getAttribute("href")
    );
    const tabIndexAttr = node.getAttribute("tabindex");
    const tabIndexNum = Number(tabIndexAttr);
    let tabIndex = null;
    if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
      tabIndex = tabIndexNum;
    } else if (isFocusableElement && tabIndex === null) {
      tabIndex = 0;
    }
    if (isFocusableElement && node.disabled) {
      tabIndex = null;
    }
    return tabIndex !== null && (tabIndex >= 0 || includePositive && tabIndex < 0);
  }
  return false;
}
function getFocusNodeList(node, includePositive = false) {
  const res = [...node.querySelectorAll("*")].filter((child) => {
    return focusable(child, includePositive);
  });
  if (focusable(node, includePositive)) {
    res.unshift(node);
  }
  return res;
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option);
  const {
    cursor
  } = option || {};
  if (cursor && (element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) {
    const len = element.value.length;
    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0);
        break;
      case "end":
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
var lastFocusElement = null;
var focusElements = [];
function getLastElement() {
  return focusElements[focusElements.length - 1];
}
function hasFocus(element) {
  const {
    activeElement
  } = document;
  return element === activeElement || element.contains(activeElement);
}
function syncFocus() {
  const lastElement = getLastElement();
  const {
    activeElement
  } = document;
  if (lastElement && !hasFocus(lastElement)) {
    const focusableList = getFocusNodeList(lastElement);
    const matchElement = focusableList.includes(lastFocusElement) ? lastFocusElement : focusableList[0];
    matchElement?.focus();
  } else {
    lastFocusElement = activeElement;
  }
}
function onWindowKeyDown(e) {
  if (e.key === "Tab") {
    const {
      activeElement
    } = document;
    const lastElement = getLastElement();
    const focusableList = getFocusNodeList(lastElement);
    const last = focusableList[focusableList.length - 1];
    if (e.shiftKey && activeElement === focusableList[0]) {
      lastFocusElement = last;
    } else if (!e.shiftKey && activeElement === last) {
      lastFocusElement = focusableList[0];
    }
  }
}
function lockFocus(element) {
  if (element) {
    focusElements = focusElements.filter((ele) => ele !== element);
    focusElements.push(element);
    window.addEventListener("focusin", syncFocus);
    window.addEventListener("keydown", onWindowKeyDown, true);
    syncFocus();
  }
  return () => {
    lastFocusElement = null;
    focusElements = focusElements.filter((ele) => ele !== element);
    if (focusElements.length === 0) {
      window.removeEventListener("focusin", syncFocus);
      window.removeEventListener("keydown", onWindowKeyDown, true);
    }
  };
}
function useLockFocus(lock, getElement) {
  (0, import_react11.useEffect)(() => {
    if (lock) {
      const element = getElement();
      if (element) {
        return lockFocus(element);
      }
    }
  }, [lock]);
}

export {
  pickAttrs,
  extendsObject_default,
  isNonNullable_default,
  pickClosable,
  computeClosable,
  useClosable,
  useForceUpdate,
  useMergedMask,
  mergeClassNames,
  mergeStyles,
  resolveStyleOrClass,
  useMergeSemantic,
  useMultipleSelect,
  useOrientation,
  usePatchElement,
  useProxyImperativeHandle,
  useSyncState,
  zindexContext_default,
  CONTAINER_MAX_OFFSET,
  useZIndex,
  useCSSVarCls_default,
  KeyCode_default,
  getTransitionName,
  motion_default,
  useSize_default,
  collapse_default,
  initFadeMotion,
  initMoveMotion,
  slideUpIn,
  slideUpOut,
  slideDownIn,
  slideDownOut,
  initSlideMotion,
  zoomIn,
  initZoomMotion,
  getFocusNodeList,
  triggerFocus,
  useLockFocus,
  FieldContext_default,
  ListContext_default,
  Field_default,
  List_default,
  useForm_default,
  useWatch_default,
  es_default2 as es_default,
  FormContext2 as FormContext,
  NoStyleItemContext,
  FormProvider2 as FormProvider,
  FormItemPrefixContext,
  FormItemInputContext,
  NoFormStyle,
  VariantContext,
  useVariants_default
};
//# sourceMappingURL=chunk-7YRFXPLL.js.map
