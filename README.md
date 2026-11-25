# HelloWRC.Dev

## Mermaid 图表

博客已启用 Mermaid。在 `src` 下的 Markdown 文章中使用 `mermaid` 代码块即可绘制图表：

````markdown
```mermaid
flowchart LR
    A[编写文章] --> B[构建博客]
    B --> C[发布页面]
```
````

支持流程图、时序图、类图等，语法参见 [Mermaid 文档](https://mermaid.js.org/intro/)。

本地预览运行 `pnpm docs:dev`，构建运行 `pnpm docs:build`。

## 部署到 Cloudflare Workers

在 Cloudflare 的 Workers Builds 中连接此仓库，使用以下设置：

| 设置项 | 值 |
| --- | --- |
| Worker 名称 | `hellowrc-blog`（与 `wrangler.jsonc` 一致） |
| 生产分支 | `master` |
| 根目录 | 仓库根目录 |
| 构建命令 | `pnpm docs:build` |
| 部署命令 | `npx wrangler@4 deploy` |

Wrangler 从 `src/.vuepress/dist` 发布静态文件。本地运行 `pnpm install --frozen-lockfile` 和 `pnpm docs:build` 后，可用 `npx wrangler@4 dev` 预览构建结果。
