# 部署指南

本项目支持多种部署方式，以下是一些常见的部署选项。

## Vercel 部署

1. 将项目推送到 GitHub
2. 在 [Vercel](https://vercel.com) 上导入项目
3. Vercel 会自动检测 Vite 项目并进行配置
4. 点击部署即可

## Netlify 部署

1. 将项目推送到 GitHub
2. 在 [Netlify](https://netlify.com) 上连接 GitHub 仓库
3. 配置构建设置：
   - 构建命令: `npm run build`
   - 发布目录: `dist`
4. 点击部署

## GitHub Pages 部署

1. 安装 gh-pages:
```bash
npm install --save-dev gh-pages
```

2. 在 package.json 中添加部署脚本:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

3. 配置 vite.config.ts:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... 其他配置
})
```

4. 部署:
```bash
npm run build
npm run deploy
```

## Docker 部署

创建 Dockerfile:
```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

构建和运行:
```bash
docker build -t personal-homepage .
docker run -p 80:80 personal-homepage
```

## 自定义服务器部署

1. 构建项目:
```bash
npm run build
```

2. 将 `dist` 文件夹内容上传到服务器

3. 配置 Nginx:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 环境变量

如果需要环境变量，创建 `.env` 文件：

```env
VITE_APP_TITLE=我的个人主页
VITE_API_URL=https://api.example.com
```

在代码中使用：
```typescript
const title = import.meta.env.VITE_APP_TITLE
```

## 性能优化建议

1. **启用 gzip 压缩**
2. **配置 CDN**
3. **设置适当的缓存头**
4. **优化图片资源**

## 监控和分析

推荐集成以下服务：

- **Google Analytics** - 网站分析
- **Sentry** - 错误监控
- **Lighthouse CI** - 性能监控
