# AI Maker Waitlist

一个现代化的等待列表网站，使用 Next.js 14 和 PostgreSQL 构建。

## 功能特性

- 🎨 现代化的响应式设计
- 📧 邮箱注册等待列表
- 🗄️ PostgreSQL 数据库存储
- ⚡ 实时表单验证
- 🔒 重复邮箱检测
- 📱 移动端友好

## 技术栈

- **前端**: Next.js 14, React, TypeScript, Tailwind CSS
- **后端**: Next.js API Routes
- **数据库**: PostgreSQL
- **ORM**: Prisma

## 快速开始

### 1. 克隆项目

```bash
git clone <your-repo-url>
cd aimaker-waitlist
```

### 2. 安装依赖

```bash
npm install
```

### 3. 环境配置

创建 `.env` 文件并添加以下配置：

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/aimaker_waitlist"

# Next.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

### 4. 数据库设置

#### 本地 PostgreSQL 设置

1. 安装 PostgreSQL
2. 创建数据库：
   ```sql
   CREATE DATABASE aimaker_waitlist;
   ```
3. 更新 `.env` 文件中的数据库连接字符串

#### 使用 Prisma

```bash
# 生成 Prisma 客户端
npx prisma generate

# 运行数据库迁移
npx prisma migrate dev --name init

# 查看数据库（可选）
npx prisma studio
```

### 5. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

## 项目结构

```
src/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts          # 等待列表 API
│   ├── globals.css               # 全局样式
│   ├── layout.tsx                # 根布局
│   └── page.tsx                  # 首页
├── components/
│   └── WaitlistForm.tsx          # 等待列表表单组件
└── lib/
    └── prisma.ts                 # Prisma 客户端配置

prisma/
└── schema.prisma                 # 数据库模型定义
```

## API 端点

### POST /api/waitlist

注册新的等待列表用户。

**请求体:**
```json
{
  "email": "user@example.com"
}
```

**响应:**
```json
{
  "message": "成功加入等待列表！",
  "id": "clx1234567890"
}
```

## 部署

### Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 设置环境变量：
   - `DATABASE_URL`: PostgreSQL 连接字符串
   - `NEXTAUTH_SECRET`: 随机密钥
3. 部署

### 数据库迁移

```bash
# 生产环境迁移
npx prisma migrate deploy
```

## 开发

```bash
# 代码检查
npm run lint

# 构建
npm run build

# 启动生产服务器
npm start
```

## 许可证

MIT License
