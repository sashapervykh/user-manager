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

// node_modules/antd/es/typography/Title.js
var React = __toESM(require_react());
var TITLE_ELE_LIST = [1, 2, 3, 4, 5];
var Title = React.forwardRef((props, ref) => {
  const {
    level = 1,
    children,
    ...restProps
  } = props;
  if (true) {
    const warning = devUseWarning("Typography.Title");
    true ? warning(TITLE_ELE_LIST.includes(level), "usage", "Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version.") : void 0;
  }
  const component = TITLE_ELE_LIST.includes(level) ? `h${level}` : `h1`;
  return React.createElement(Base_default, {
    ref,
    ...restProps,
    component
  }, children);
});
var Title_default = Title;

export {
  Title_default
};
//# sourceMappingURL=chunk-6U3OJLB7.js.map
