# 图标使用指南

## 概述
项目已集成 **React Icons** 图标库，提供了丰富的图标选择和统一的管理方式。

## 当前集成的图标集
- **Feather Icons (Fi)** - 简洁现代的线性图标
- **Ant Design Icons (Ai)** - 企业级图标
- **BoxIcons (Bi)** - 多样化图标集

## 如何使用

### 1. 基本使用
```tsx
import { Icons } from '@/lib/icons';

// 在组件中使用
<Icons.Mail className="w-4 h-4" />
<Icons.Github className="w-5 h-5" />
```

### 2. 添加新图标
要添加新图标，请在 `src/lib/icons.tsx` 文件中：

1. 从 react-icons 导入新图标：
```tsx
import { 
  FiNewIcon, // 新的 Feather 图标
  AiOutlineNewIcon, // 新的 Ant Design 图标
  BiNewIcon // 新的 BoxIcons 图标
} from 'react-icons/fi'; // 或 ai, bi 等
```

2. 在 Icons 对象中添加映射：
```tsx
export const Icons = {
  // ... 现有图标
  NewIcon: FiNewIcon, // 添加新图标
};
```

### 3. 切换图标集
如果要更换某个图标为不同样式，只需修改映射：
```tsx
// 从 Feather 切换到 Ant Design
Mail: AiOutlineMail, // 原来是 FiMail
```

## 可用的图标集

### Feather Icons (推荐)
- 前缀：`Fi`
- 特点：简洁、现代、线性风格
- 示例：`FiMail`, `FiGithub`, `FiHome`

### Ant Design Icons
- 前缀：`Ai` (Outlined), `AiFill` (Filled)
- 特点：企业级、完整
- 示例：`AiOutlineMail`, `AiFillHeart`

### BoxIcons
- 前缀：`Bi` (Regular), `BiSolid` (Solid), `BiLogo` (Logos)
- 特点：多样化、包含品牌图标
- 示例：`BiMail`, `BiLogoGithub`

### 更多图标集
React Icons 还支持：
- Material Design (`Md`)
- Font Awesome (`Fa`)
- Heroicons (`Hi`)
- Tabler Icons (`Tb`)
- 等等...

## 查找图标
访问 [React Icons 官网](https://react-icons.github.io/react-icons/) 来搜索和预览所有可用图标。

## 当前项目中的图标映射

| 用途 | 图标名 | 实际组件 |
|------|--------|----------|
| 邮件 | `Icons.Mail` | `FiMail` |
| 下载 | `Icons.Download` | `FiDownload` |
| GitHub | `Icons.Github` | `FiGithub` |
| LinkedIn | `Icons.Linkedin` | `FiLinkedin` |
| 首页 | `Icons.Home` | `FiHome` |
| 用户 | `Icons.User` | `FiUser` |
| 工作 | `Icons.Briefcase` | `FiBriefcase` |
| 向下箭头 | `Icons.ChevronDown` | `FiChevronDown` |
| 外部链接 | `Icons.ExternalLink` | `FiExternalLink` |
| 网站 | `Icons.Globe` | `FiGlobe` |
| 图片 | `Icons.Image` | `FiImage` |
| 书籍 | `Icons.BookOpen` | `FiBookOpen` |
| 代码 | `Icons.Code` | `FiCode` |
| 设置 | `Icons.Settings` | `FiSettings` |
| 爱心 | `Icons.Heart` | `FiHeart` |
| 月亮 | `Icons.Moon` | `FiMoon` |
| 太阳 | `Icons.Sun` | `FiSun` |

## 优势
1. **统一管理** - 所有图标在一个文件中管理
2. **易于替换** - 只需修改映射即可更换图标样式
3. **类型安全** - TypeScript 支持
4. **包体积优化** - 只导入使用的图标
5. **样式一致** - 统一的 className 和尺寸规范
