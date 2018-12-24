# Brief Tpl

The JSX alternative template for declarative JavaScript frameworks, **no compilation is necessary**.

## Usage

From CDN:

```html
<script src="https://unpkg.com/brieftpl/dist/brieftpl.min.js"></script>
```

With NPM:

```bash
npm install brief-tpl
```

## Example

### Basic

```js
const {div, span, button} = brieftpl.tags;

document.body.innerHTML = div({id: 'main'})`
  ${span`Hello, world!`}
  ${button({onclick: e => alert('hi!')})`Click Me`}
`;
```

### Work with [preact](https://github.com/developit/preact)

```js
const {h, render} = preact;
const {adapter, tags} = brieftpl;
adapter.createElement = h;

const {div, span, button} = tags;

render(div({id: 'foo'})`
  ${span`Hello, world!`}
  ${button({onClick: e => alert('hi!')})`Click Me`}
`, document.body);
```

### Work with [react](https://github.com/facebook/react)

```js
const {adapter, tags} = brieftpl;
adapter.createElement = React.createElement;

const h1 = tags.h1;

ReactDOM.render(
  h1`Hello, world!`,
  document.body
);
```

### Work with [omi](https://github.com/Tencent/omi)

```js
const {WeElement, h, render, define} = Omi;
const {adapter, tags, tagged} = brieftpl;
adapter.createElement = h;

const {button} = tags;

define('like-button', class extends WeElement {
  install() {
    this.data = {liked: false};
  }

  render() {
    if(this.data.liked) {
      return 'You liked this.';
    }
    return button({
      onClick: () => {
        this.data.liked = true;
        this.update();
      },
    })`
      Like
    `;
  }
});

const LikeButton = tagged('like-button');

render(LikeButton``, 'body');
```
