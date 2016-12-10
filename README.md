# React Testing with enzyme

https://drive.google.com/open?id=0B-XfxQ2vrfngOE9zcS04WHdoOHM

Setup a React Scripts app

```
npm init -y
npm i react react-dom react-scripts -S
npm i json -g
json -I -f package.com -e 'this.scripts = {"start": "react-scripts start", "test": "react-scripts test"}'
mkdir public src
touch public/index.html src/index.js
```

```
npm install --save-dev enzyme react-addons-test-utils
```

Create `public/index.html`

```
<!doctype html>
<html>
<head>
  <title>React Test Demo</title>
  <link rel="stylesheet" href="https://unpkg.com/tachyons@4.5.6" />
</head>
<body class="pa4 bg-yellow">
  <div id="root"></div>
</body>
</html>
```

Create `src/index.js`

```
import React from 'react'
import ReactDOM from 'react-dom'

const App = require('./app')

ReactDOM.render(<App />, document.getElementById('root'))

```

## Test Example

src/app.js

```
const React = require('react')

const App = React.createClass({
  render() {
    return (
      <h2>Welcome to React</h2>
    )
  }
})

module.exports = App
```

src/app.test.js

```
import React from 'react'
import { shallow } from 'enzyme'
import App from './app'

it('renders welcome message', () => {
  const wrapper = shallow(<App />)
  const welcome = <h2>Welcome to React</h2>
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true)
})
```
