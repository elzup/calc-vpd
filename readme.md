# calc-vpd

[![Build Status](https://travis-ci.org/elzup/calc-vpd.svg?branch=master)](https://travis-ci.org/elzup/calc-vpd)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

> VPD (Vapor Pressure Deficit) function

水蒸気圧 = 6.1078＊10 ^ ((7.5 _ 気温 / (気温 + 237.3)))
飽和水蒸気量 = 217 _ 水蒸気圧 / (気温 + 273.15)
飽差 = (100 - 相対湿度) \* 飽和水蒸気量 / 100

参考: http://bigbearfarm.blog.fc2.com/blog-entry-306.html

## Install

```
$ npm install calc-vpd
```

## Usage

```js
const calcVpd = require('calc-vpd')

calcVpd({ tmp: 29.2, hmd: 76.5 })
//=> {
//     "swv": 29.080252344,
//     "vp": 40.518038231,
//     "vpd": 6.833859301,
//   }
```

## API

### `calcVpd(input)`

#### input

Type: `{ tmp: number, hmd: number }`

tmp: 気温
hmd: 湿度

#### output

Type: `{ swv: number, vp: number, vpd number }`<br>

vp: 水蒸気圧,
swv: 飽和水蒸気量,
vpd: 飽差

## License

MIT © [elzup](https://elzup.com)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars3.githubusercontent.com/u/2284908?v=4" width="100px;"/><br /><sub><b>elzup</b></sub>](https://elzup.com)<br />[💻](https://github.com/elzup/calc-vpd/commits?author=elzup "Code") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
