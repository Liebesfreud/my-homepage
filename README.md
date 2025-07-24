# 🌟 个人主页项目

一个基于现代 Web 技术栈构建的个人主页项目，采用 Microsoft Fluent Design 设计语言，提供优雅的用户体验和丰富的视觉效果。

## ✨ 特性

- 🎨 **现代设计系统** - 基于 Microsoft Fluent Design 设计语言
- 🌈 **点阵背景效果** - 点阵背景，支持明暗主题切换
- 📱 **响应式设计** - 完美适配桌面端、平板和移动设备
- ⚡ **高性能构建** - 基于 Vite 的快速开发和构建体验
- 🎭 **丰富组件库** - 集成 shadcn/ui 高质量 UI 组件
- 🔧 **TypeScript 支持** - 完整的类型安全保障
- 🎯 **模块化架构** - 组件化开发，易于维护和扩展

## 🛠️ 技术栈

### 核心框架
- **React 18** - 现代 React 框架，支持并发特性
- **TypeScript** - 提供完整的类型安全
- **Vite** - 极速的前端构建工具

### UI 组件与样式
- **shadcn/ui** - 基于 Radix UI 的高质量组件库
- **Tailwind CSS** - 原子化 CSS 框架
- **Lucide React** - 优雅的图标库
- **React Icons** - 丰富的图标集合

### 状态管理与路由
- **React Router DOM** - 客户端路由管理
- **TanStack Query** - 强大的数据获取和缓存
- **React Hook Form** - 高性能表单处理

### 主题与设计
- **Next Themes** - 主题切换支持
- **Class Variance Authority** - 样式变体管理
- **Tailwind Animate** - CSS 动画库

### 开发工具
- **ESLint** - 代码质量检查
- **TypeScript ESLint** - TypeScript 专用 ESLint 规则
- **PostCSS** - CSS 后处理器
- **Autoprefixer** - CSS 浏览器前缀自动添加

## 🚀 快速开始

### 环境要求

- Node.js 16+ 
- npm 或 yarn 或 pnpm

### 安装与运行

```bash
# 克隆项目
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 代码检查
npm run lint
```


## 📂 项目结构

```
src/
├── components/          # 可复用组件
│   ├── ui/             # 基础 UI 组件
│   ├── AuroraBackground.tsx    # 极光背景组件
│   ├── HeroSection.tsx         # 首页英雄区域
│   ├── Navigation.tsx          # 导航栏组件
│   ├── ScrollIndicator.tsx     # 滚动指示器
│   ├── ServicesGrid.tsx        # 服务网格组件
│   └── ThemeProvider.tsx       # 主题提供者
├── hooks/              # 自定义 React Hooks
├── lib/                # 工具函数和配置
├── pages/              # 页面组件
├── App.tsx             # 应用根组件
├── main.tsx            # 应用入口
└── index.css           # 全局样式
```

## 🎨 设计系统

### 颜色主题

项目采用 Microsoft Fluent Design 配色方案：

- **主色调**: Fluent Blue (`#0078d4`)
- **强调色**: 动态渐变色彩
- **背景色**: 自适应明暗主题
- **毛玻璃效果**: Acrylic 材质

### 组件设计

- **Acrylic Cards**: 毛玻璃卡片效果
- **Reveal Effects**: 鼠标悬停发光效果  
- **Fluent Buttons**: 流畅的按钮交互
- **Aurora Background**: 动态极光背景

## 🔧 自定义配置

### 个人信息配置

在 `src/pages/Index.tsx` 中修改个人信息：

```typescript
const profileData = {
  name: "你的姓名",
  title: "你的职位",
  description: "个人描述",
  avatar: "头像URL",
  socialLinks: {
    github: "GitHub链接",
    linkedin: "LinkedIn链接", 
    email: "邮箱地址"
  }
};
```

### 服务/项目配置

在 `src/components/ServicesGrid.tsx` 中修改项目列表：

```typescript
const defaultServices = [
  {
    id: '1',
    title: '项目标题',
    description: '项目描述',
    url: '项目链接',
    icon: '图标名称',
    category: '分类'
  }
  // ... 更多项目
];
```

### 主题定制

在 `src/index.css` 中自定义 CSS 变量：

```css
:root {
  --primary: 210 100% 50%;
  --background: 0 0% 99%;
  /* 更多主题变量 */
}
```

## 📱 响应式设计

项目采用移动优先的响应式设计：

- **移动端**: < 768px
- **平板端**: 768px - 1024px  
- **桌面端**: > 1024px

所有组件都经过精心设计，确保在不同设备上都有最佳体验。

## 🌐 浏览器兼容性

- Chrome 88+
- Firefox 78+
- Safari 14+
- Edge 88+

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支: `git checkout -b feature/AmazingFeature`
3. 提交更改: `git commit -m 'Add some AmazingFeature'`
4. 推送分支: `git push origin feature/AmazingFeature`
5. 创建 Pull Request

---

⭐ 如果这个项目对你有帮助，请给个 Star 支持一下！

## 本项目使用了哪些技术？

本项目基于以下技术构建：

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
