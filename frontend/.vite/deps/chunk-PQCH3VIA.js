import {
  Title_default
} from "./chunk-6U3OJLB7.js";
import {
  Link_default
} from "./chunk-I5Q6JJMT.js";
import {
  Base_default,
  Typography_default
} from "./chunk-L4SS7JHA.js";
import {
  devUseWarning,
  omit
} from "./chunk-LABRJ26G.js";
import {
  __toESM,
  require_react
} from "./chunk-G4V7ITBN.js";

// node_modules/antd/es/typography/Paragraph.js
var React = __toESM(require_react());
var Paragraph = React.forwardRef((props, ref) => {
  const {
    children,
    ...restProps
  } = props;
  return React.createElement(Base_default, {
    ref,
    ...restProps,
    component: "div"
  }, children);
});
var Paragraph_default = Paragraph;

// node_modules/antd/es/typography/Text.js
var React2 = __toESM(require_react());
var Text = (props, ref) => {
  const {
    ellipsis,
    children,
    ...restProps
  } = props;
  const mergedEllipsis = React2.useMemo(() => {
    if (ellipsis && typeof ellipsis === "object") {
      return omit(ellipsis, ["expandable", "rows"]);
    }
    return ellipsis;
  }, [ellipsis]);
  if (true) {
    const warning = devUseWarning("Typography.Text");
    true ? warning(typeof ellipsis !== "object" || !ellipsis || !("expandable" in ellipsis) && !("rows" in ellipsis), "usage", "`ellipsis` do not support `expandable` or `rows` props.") : void 0;
  }
  return React2.createElement(Base_default, {
    ref,
    ...restProps,
    ellipsis: mergedEllipsis,
    component: "span"
  }, children);
};
var Text_default = React2.forwardRef(Text);

// node_modules/antd/es/typography/index.js
var Typography = Typography_default;
Typography.Text = Text_default;
Typography.Link = Link_default;
Typography.Title = Title_default;
Typography.Paragraph = Paragraph_default;
var typography_default = Typography;

export {
  typography_default
};
//# sourceMappingURL=chunk-PQCH3VIA.js.map
