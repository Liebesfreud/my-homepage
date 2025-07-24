# 贡献指南

感谢您对个人主页项目的关注！我们欢迎各种形式的贡献。

## 如何贡献

### 报告 Bug

如果您发现了 bug，请通过以下步骤报告：

1. 确保 bug 尚未被报告过
2. 创建一个新的 Issue
3. 详细描述问题，包括：
   - 操作系统和浏览器版本
   - 重现步骤
   - 期望的行为
   - 实际的行为
   - 截图（如果适用）

### 建议新功能

我们欢迎新功能建议：

1. 创建一个 Issue，标记为 "enhancement"
2. 详细描述功能需求
3. 解释为什么这个功能有用
4. 如果可能，提供设计草图或示例

### 代码贡献

#### 开发环境设置

```bash
# 1. Fork 项目
# 2. 克隆你的 fork
git clone https://github.com/YOUR_USERNAME/personal-homepage.git
cd personal-homepage

# 3. 安装依赖
npm install

# 4. 创建功能分支
git checkout -b feature/your-feature-name

# 5. 启动开发服务器
npm run dev
```

#### 代码规范

- 使用 TypeScript
- 遵循 ESLint 规则
- 使用有意义的提交信息
- 为新功能添加适当的注释
- 确保代码通过 lint 检查：`npm run lint`

#### 提交 Pull Request

1. 确保你的代码遵循项目的代码规范
2. 确保所有测试通过
3. 更新相关文档
4. 创建 Pull Request，详细描述你的更改

### 提交信息格式

使用清晰的提交信息：

```
feat: 添加新的主题切换功能
fix: 修复移动端导航栏显示问题
docs: 更新 README 文档
style: 优化代码格式
refactor: 重构组件结构
test: 添加单元测试
chore: 更新依赖包
```

## 开发指南

### 项目结构

```
src/
├── components/         # 可复用组件
│   ├── ui/            # 基础 UI 组件
│   └── ...
├── hooks/             # 自定义 Hooks
├── lib/               # 工具函数
├── pages/             # 页面组件
└── ...
```

### 添加新组件

1. 在 `src/components/` 目录下创建新组件
2. 使用 TypeScript 定义 props 接口
3. 添加适当的样式和动画
4. 确保组件是响应式的

### 样式指南

- 使用 Tailwind CSS 进行样式开发
- 遵循 Fluent Design 设计原则
- 确保支持明暗主题
- 优先使用已定义的设计 token

## 社区

- 🐛 报告 Bug: [Issues](https://github.com/example/personal-homepage/issues)
- 💡 功能建议: [Issues](https://github.com/example/personal-homepage/issues)
- 💬 讨论: [Discussions](https://github.com/example/personal-homepage/discussions)

## 许可证

通过贡献，您同意您的贡献将在 MIT 许可证下获得许可。
