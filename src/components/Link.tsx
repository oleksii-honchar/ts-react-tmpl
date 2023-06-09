import React, { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";

export function Link(
  props: InferProps<typeof Link.propTypes>
): ReactElement {
  // const href = `javascript:window.open('${props.href}', '_system')`;
  // const href = `javascript:document.location='googlechrome://navigate?url=${props.href}'`;
  return <a href={props.href} target="_blank">{props.children}</a>;
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  href: PropTypes.string.isRequired
};
