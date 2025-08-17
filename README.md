<div align="center">
    <img src="https://vuejs.org/logo.svg" height="300" />
    <img src="https://assets.rspack.dev/rsbuild/rsbuild-logo.svg" height="300" />
</div>

# vue3-jsx-demo

本项目展示了如何在Vue 3中使用JSX/TSX进行开发，集成了Rsbuild作为构建工具，并采用pnpm workspace进行项目管理。项目包含一个可复用的Vue 3 JSX/TSX组件库和一个使用该库的示例应用。

## 项目结构
- `bunchee-vue-jsx`: 包含Vue 3 JSX/TSX组件的库，使用bunchee进行构建。
- `rsbuild-vue3`: 使用Rsbuild构建的Vue 3项目，展示如何使用组件库。

## 技术栈
- Vue 3 Composition API
- TypeScript / JSX/TSX
- Rsbuild (构建工具)
- Bunchee (组件库打包工具)
- pnpm Workspace (项目管理)
- Arco Design Vue (UI组件库)
- VueUse (工具函数库)

## 前置要求
- Node.js (版本 >= 24.x)
- pnpm (版本 >= 10.x)

## 安装依赖
在项目根目录下运行以下命令来安装所有依赖：

```bash
pnpm install
```

## 运行项目

在项目根目录下运行以下命令来启动开发服务器：

```bash
pnpm dev
```

此命令会同时构建组件库并启动示例应用的开发服务器。

## 构建项目

### 构建组件库
在项目根目录下运行以下命令来构建组件库：

```bash
pnpm --filter lib build
```

### 构建示例应用
在项目根目录下运行以下命令来构建示例应用：

```bash
pnpm --filter rsbuild-vue3 build
```

### 预览构建结果
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
export default {
  setup() {
    return () => {
        return (
            <Layout>
                <div>Hello, World!</div>
            </Layout>
        )
    }
  }
}
```

## 贡献

如果你想为这个项目做出贡献，请遵循以下步骤：

1. Fork这个仓库。
2. 创建一个新的分支 (git checkout -b feature/your-feature)。
3. 提交你的更改 (git commit -am 'Add some feature')。
4. 推送至分支 (git push origin feature/your-feature)。
5. 创建一个新的Pull Request。","new_str":