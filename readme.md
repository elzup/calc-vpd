# calc-vpd

![Node CI](https://github.com/elzup/calc-vpd/workflows/Node%20CI/badge.svg)

> VPD (Vapor Pressure Deficit / 飽差) function

気温と相対湿度から水蒸気圧・飽和水蒸気量・飽差を計算します。

- 水蒸気圧 vp = 6.1078 \* 10 ^ (7.5 \* 気温 / (気温 + 237.3))
- 飽和水蒸気量 swv = 217 \* vp / (気温 + 273.15)
- 飽差 vpd = (100 - 相対湿度) \* swv / 100

参考: http://bigbearfarm.blog.fc2.com/blog-entry-306.html

## Install

```sh
npm install calc-vpd
# or: pnpm add calc-vpd
```

ESM / CommonJS / 型定義に対応。

## Usage

```ts
// ESM / TypeScript
import { calcVpd } from 'calc-vpd'

calcVpd({ tmp: 29.2, hmd: 76.5 })
//=> { vp: 40.518038231, swv: 29.080252344, vpd: 6.833859301 }
```

```js
// CommonJS
const { calcVpd } = require('calc-vpd')
```

## API

### `calcVpd(input)`

#### input

Type: `{ tmp: number; hmd: number }`

- `tmp`: 気温 (℃)
- `hmd`: 相対湿度 (%)

`tmp` / `hmd` が number でない場合は `TypeError` を投げます。

#### returns

Type: `{ vp: number; swv: number; vpd: number }`

- `vp`: 水蒸気圧
- `swv`: 飽和水蒸気量
- `vpd`: 飽差 (Vapor Pressure Deficit)


## License

MIT © [elzup](https://elzup.com)
