import {
  Base_default
} from "./chunk-L4SS7JHA.js";
import {
  devUseWarning
} from "./chunk-LABRJ26G.js";
import {
  __toESM,
  require_react
} from "./chunk-G4V7ITBN.js";

// node_modules/antd/es/typography/Link.js
var React = __toESM(require_react());
var Link = React.forwardRef((props, ref) => {
  const {
    ellipsis,
    rel,
    children,
    // @ts-expect-error: https://github.com/ant-design/ant-design/issues/26622
    navigate: _navigate,
    ...restProps
  } = props;
  if (true) {
    const warning = devUseWarning("Typography.Link");
    true ? warning(typeof ellipsis !== "object", "usage", "`ellipsis` only supports boolean value.") : void 0;
  }
  const mergedProps = {
    ...restProps,
    rel: rel === void 0 && restProps.target === "_blank" ? "noopener noreferrer" : rel
  };
  return React.createElement(Base_default, {
    ...mergedProps,
    ref,
    ellipsis: !!ellipsis,
    component: "a"
  }, children);
});
var Link_default = Link;

export {
  Link_default
};
//# sourceMappingURL=chunk-I5Q6JJMT.js.map
