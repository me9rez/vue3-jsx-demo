<div align="center">
    <img src="https://vuejs.org/logo.svg" height="100" />
    <img src="https://assets.rspack.dev/rsbuild/rsbuild-logo.svg" height="100" />
</div>

# Vue3 JSX/TSX 开发示例

本项目展示了如何在Vue 3中使用JSX/TSX进行开发，集成了Rsbuild作为构建工具，并采用pnpm workspace进行项目管理。项目包含一个可复用的Vue 3 JSX/TSX组件库和一个使用该库的示例应用。

## 项目特点
- 🚀 使用Vue 3 Composition API和JSX/TSX语法开发
- 🔧 集成Rsbuild构建工具，提供极速开发体验
- 📦 使用Bunchee打包组件库，支持Tree Shaking
- 📋 采用pnpm Workspace管理多包项目
- 🎨 集成Arco Design Vue UI组件库
- 🛠️ 使用VueUse工具函数库提升开发效率

## 项目结构
```
vue3-jsx-demo/
├── bunchee-vue-jsx/      # Vue 3 JSX/TSX组件库
│   ├── src/              # 组件源代码
│   ├── package.json      # 库配置文件
│   └── tsconfig.json     # TypeScript配置
├── rsbuild-vue3/         # 使用Rsbuild构建的Vue 3示例应用
│   ├── src/              # 应用源代码
│   ├── rsbuild.config.ts # Rsbuild配置文件
│   └── package.json      # 应用配置文件
├── pnpm-workspace.yaml   # pnpm工作区配置
└── README.md             # 项目说明文档
```

## 技术栈
<div align="center" style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin: 20px 0;">
  <img src="https://img.shields.io/badge/Vue%203-42b883.svg?style=for-the-badge&logo=vuedotjs" alt="Vue 3" />
  <img src="https://img.shields.io/badge/TypeScript-3178c6.svg?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/JSX/TSX-61DAFB.svg?style=for-the-badge&logo=react" alt="JSX/TSX" />
  <img src="https://img.shields.io/badge/Rsbuild-FF4D4F.svg?style=for-the-badge" alt="Rsbuild" />
  <img src="https://img.shields.io/badge/Bunchee-8A2BE2.svg?style=for-the-badge" alt="Bunchee" />
  <img src="https://img.shields.io/badge/pnpm-F69220.svg?style=for-the-badge&logo=pnpm" alt="pnpm" />
  <img src="https://img.shields.io/badge/Arco%20Design-165DFF.svg?style=for-the-badge" alt="Arco Design" />
  <img src="https://img.shields.io/badge/VueUse-42b883.svg?style=for-the-badge" alt="VueUse" />
</div>

## 前置要求
- Node.js (版本 >= 24.x)
- pnpm (版本 >= 10.x)

## 快速开始

### 安装依赖
在项目根目录下运行以下命令来安装所有依赖：

```bash
pnpm install
```

### 运行项目
在项目根目录下运行以下命令来启动开发服务器：

```bash
pnpm dev
```

此命令会同时构建组件库并启动示例应用的开发服务器。成功启动后，会在控制台显示访问地址，通常为 `http://localhost:8080`。

### 构建项目

#### 构建组件库
在项目根目录下运行以下命令来构建组件库：

```bash
pnpm --filter lib build
```

构建完成后，组件库会输出到 `bunchee-vue-jsx/dist` 目录。

#### 构建示例应用
在项目根目录下运行以下命令来构建示例应用：

```bash
pnpm --filter rsbuild-vue3 build
```

构建完成后，示例应用会输出到 `rsbuild-vue3/dist` 目录。

#### 预览构建结果
构建完成后，可以使用以下命令预览示例应用：

```bash
pnpm --filter rsbuild-vue3 preview
```

## 使用示例

### 组件库使用示例

```tsx
// 导入组件
import { Layout } from 'lib'

// 在Vue组件中使用
const App = () => {
  return (
    <Layout>
      <div>Hello, World!</div>
    </Layout>
  );
};

export default App;
```

## 常见问题

### 1. 为什么选择JSX/TSX而不是SFC？
JSX/TSX提供了更灵活的JavaScript表达能力，特别是对于复杂的组件逻辑和条件渲染。对于习惯了React开发的开发者来说，JSX/TSX也是更自然的选择。

### 2. 如何添加新的组件到组件库？
1. 在 `bunchee-vue-jsx/src` 目录下创建新的组件文件
2. 在 `bunchee-vue-jsx/src/index.tsx` 中导出新组件
3. 运行 `pnpm --filter lib build` 重新构建组件库

### 3. 如何在示例应用中使用组件库的最新更改？
在开发过程中，可以使用 `pnpm dev` 命令，它会实时监听组件库的更改并自动更新示例应用。

## 贡献

如果你想为这个项目做出贡献，请遵循以下步骤：

1. Fork这个仓库到你的GitHub账户
2. 克隆你fork的仓库到本地
3. 创建一个新的分支 (`git checkout -b feature/your-feature`)
4. 提交你的更改 (`git commit -am 'Add some feature'`)
5. 推送至你的分支 (`git push origin feature/your-feature`)
6. 从你的分支向原仓库创建一个新的Pull Request

我们欢迎所有形式的贡献，包括但不限于代码改进、文档优化、bug报告等。

## 许可证
本项目使用MIT许可证，详情请查看 [LICENSE](LICENSE) 文件。