# summit-react-component

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Tom's React Component is premierer than Cory's.

## Component Properties

| Name    | Default | Required | Description                          |
| ------- | ------- | -------- | ------------------------------------ |
| message |         | Yes      | The message you want the user to see |

## Usage example

```js
import React from 'react';
import TomComponent from '@summitllc/tom-react-component';

function Demo() {
  return <TomComponent message={'message'} />;
}
```

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
