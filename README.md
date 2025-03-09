<div align="center">
    <img src="https://vuejs.org/logo.svg" height="300" />
 <img src="https://assets.rspack.dev/rsbuild/rsbuild-logo.svg" height="300" />
</div>

# vue3-jsx-demo

本项目展示了如何在Vue 3中使用JSX/TSX进行开发，集成了Rsbuild作为构建工具。

## 项目结构
- `bunchee-vue-jsx`: 包含Vue 3 JSX/TSX组件的库。
- `rsbuild-vue3`: 使用Rsbuild构建的Vue 3项目。

## 前置要求
- Node.js (版本 >= 18.x)
- pnpm (版本 >= 9.x)

## 安装依赖
在项目根目录下运行以下命令来安装所有依赖：

```bash
pnpm install
```

## 运行项目

使用`just`命令来启动开发服务器

```bash
just dev
```

## 构建项目

要构建生产版本的应用，请在rsbuild-vue3目录下运行：

```bash
pnpm build
```

## 贡献

如果你想为这个项目做出贡献，请遵循以下步骤：

1. Fork这个仓库。
2. 创建一个新的分支 (git checkout -b feature/your-feature)。
3. 提交你的更改 (git commit -am 'Add some feature')。
4. 推送至分支 (git push origin feature/your-feature)。
5. 创建一个新的Pull Request。