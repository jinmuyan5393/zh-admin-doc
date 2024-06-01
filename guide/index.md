# Get Started

**<span style="color: var(--vp-c-brand); font-size: 16px;">@zhonghe/utils</span>** 是一个集成业务中常用的工具函数库。集成封装常用业务函数库，可以极大程度上的提高开发者的效率。


## Installation

<img src="https://img.shields.io/npm/v/@zhonghe/utils?style=plastic&logo=npm&label=@zhonghe/utils&link=https://www.npmjs.com/package/@zhonghe/utils" alt="@zhonghe/utils" style="margin-top: 10px" />

::: code-group

```sh [npm]
npm install @zhonghe/utils
```

```sh [yarn]
yarn add @zhonghe/utils
```

```sh [pnpm]
pnpm add @zhonghe/utils
```

:::

## Usage Example

### `@zhonghe/utils`

集成所有浏览器环境下的工具函数

```ts
import { generateUUID } from '@zhonghe/utils';

const uuid = generateUUID();
```

## Usage CDN

:::tip

这里使用了 [unpkg](https://unpkg.com/) ，但也可以使用其他提供包服务的 CDN，
例如 [jsdelivr](https://www.jsdelivr.com/) 或 [cdnjs](https://cdnjs.com/)，也可以下载此文件并自行提供服务。

:::

```js
// All non-Node module methods are injected into the zh global variable
<script src="https://unpkg.com/@zhonghe/utils@${version}/index.browser.js"></script>
<script type="text/javascript">
 console.log(zh)
</script>
```

## Technology Stack

- [tsup](https://github.com/egoist/tsup) 构建工具
- [vitest](https://github.com/vitest-dev/vitest) 测试工具
- [vitepress](https://github.com/vuejs/vitepress) 文档工具
- [vitepress-demo-preview](https://github.com/flingyp/vitepress-demo-preview) 组件预览工具
- [gulp](https://github.com/gulpjs/gulp) 流程构建工具
