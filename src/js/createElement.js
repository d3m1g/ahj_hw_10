/* eslint-disable eol-last */
/* eslint-disable indent */
export default function createElement(tagName, options, ...children) {
 const node = Object.assign(document.createElement(tagName), options);
 node.append(...children);
 return node;
}