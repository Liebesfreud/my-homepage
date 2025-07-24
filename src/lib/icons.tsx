// 图标配置文件 - 统一管理所有图标
// 可以轻松切换不同的图标集

// 从不同图标集导入图标
import { 
  FiMail, 
  FiDownload, 
  FiGithub, 
  FiLinkedin, 
  FiHome, 
  FiUser, 
  FiBriefcase, 
  FiChevronDown,
  FiExternalLink,
  FiGlobe,
  FiImage,
  FiBookOpen,
  FiCode,
  FiSettings,
  FiMenu,
  FiMoon,
  FiSun,
  FiHeart
} from 'react-icons/fi'; // Feather Icons

// 也可以从其他图标集导入
import { 
  AiOutlineMail, 
  AiOutlineDownload,
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineHome,
  AiOutlineUser
} from 'react-icons/ai'; // Ant Design Icons

import {
  BiEnvelope,
  BiDownload,
  BiLogoGithub,
  BiLogoLinkedin
} from 'react-icons/bi'; // BoxIcons

// 导出统一的图标映射
export const Icons = {
  // 邮件图标
  Mail: FiMail,
  
  // 下载图标
  Download: FiDownload,
  
  // 社交媒体图标
  Github: FiGithub,
  Linkedin: FiLinkedin,
  
  // 导航图标
  Home: FiHome,
  User: FiUser,
  Briefcase: FiBriefcase,
  Menu: FiMenu,
  
  // 方向图标
  ChevronDown: FiChevronDown,
  
  // 通用图标
  ExternalLink: FiExternalLink,
  Globe: FiGlobe,
  Image: FiImage,
  BookOpen: FiBookOpen,
  Code: FiCode,
  Settings: FiSettings,
  Heart: FiHeart,
  
  // 主题切换图标
  Moon: FiMoon,
  Sun: FiSun,
};

// 图标组件包装器，统一样式
interface IconProps {
  className?: string;
  size?: number;
}

export const IconWrapper = ({ children, className = "", size = 24 }: { children: React.ReactNode } & IconProps) => {
  return (
    <span className={`inline-flex items-center justify-center ${className}`} style={{ fontSize: size }}>
      {children}
    </span>
  );
};

// 使用示例：
// import { Icons } from '@/lib/icons';
// <Icons.Mail className="w-4 h-4" />
