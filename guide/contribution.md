# Contribution

## Development

Clone 本仓库到本地并且安装依赖

::: code-group

```sh [npm]
npm install
```

```sh [yarn]
yarn install
```

```sh [pnpm]
pnpm install
```

:::

- 开发调试工具函数运行 `dev` 命令
- 编写工具函数文档运行 `docs:dev` 命令

## Contributing

### Existing functions

对于已存在的函数如果有更好的写法或优化，可进行讨论并修改

### New functions

准备开发新函数时，项目的根目录下存在 Template 目录，里面有 Docs Template、Function Template，请根据模板进行书写或者按照已有的钩子函数进行编码。

函数尽量编写测试用例和 Demo 演示，函数文档尽量书写简洁规范。

### About Test

针对测试用例的编写，函数尽量编写测试用例并且在文档中进行展示

## Other Attention

其他注意事项参考 [Create Function](./devFunction.md#attention) 内容
