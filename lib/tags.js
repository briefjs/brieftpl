import taged from './tpl';
import adapter from './adapter';
var tagNames = ('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot').split(',');
var selfColsingTag = {
  area: 1,
  base: 1,
  br: 1,
  col: 1,
  embed: 1,
  hr: 1,
  img: 1,
  input: 1,
  link: 1,
  meta: 1,
  param: 1,
  source: 1,
  track: 1,
  wbr: 1,
  menuitem: 1
};
var tags = {};

adapter.createElement = function (nodeName, attributes) {
  if (selfColsingTag[nodeName]) {
    return "<".concat(nodeName).concat(adapter.parseAttributes(attributes), ">");
  }

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return "<".concat(nodeName).concat(adapter.parseAttributes(attributes), ">").concat(children.join(''), "</").concat(nodeName, ">");
};

tagNames.forEach(function (name) {
  tags[name] = taged(name);
});
export default tags;