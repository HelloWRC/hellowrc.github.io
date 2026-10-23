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
