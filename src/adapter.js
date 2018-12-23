function parseAttributes(attrs) {
  const ret = Object.entries(attrs).map(([key, value]) => {
    if(typeof value === 'function') {
      const handler = `e_${Math.random().toString(36).slice(2)}`;
      window[handler] = value;
      return `${key}="${handler}()"`;
    }
    if(value && typeof value === 'object') {
      value = Object.entries(value).map(([key, value]) => `${key}:${value};`).join('');
    }
    return `${key}="${value}"`;
  }).join(' ');
  return ret !== '' ? ` ${ret}` : '';
}

function createElement(nodeName, attributes, ...children) {
  return `<${nodeName}${parseAttributes(attributes)}>${children.join('')}</${nodeName}>`;
}

const adapter = {parseAttributes, createElement};

export default adapter;