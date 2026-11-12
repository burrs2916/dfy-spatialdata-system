# dfy-spatialdata-system

空间数据可视化桌面应用。Tauri 2 + React + Three.js。

## 功能

- CAD 图纸：DXF/DWG 解析与高性能渲染
- 3D 场景：Three.js 交互式场景编辑
- 地图：MapLibre GL 多地图源
- 数据库：SQLite、DuckDB、PostgreSQL、MySQL、MongoDB
- 实时数据：MQTT 接入
- 跨平台：macOS / Linux / Windows

## 技术栈

前端 React 18 + TypeScript + Vite 6 + Three.js + MUI + Zustand；
后端 Tauri 2 (Rust) + SQLite / DuckDB（内置）+ acadrust（CAD 解析）。

## 开发

```bash
pnpm install          # 安装依赖
pnpm tauri dev        # 开发模式
pnpm build            # 前端构建（tsc + vite build）
pnpm tauri build      # 打包桌面应用
```

## License

见 [LICENSE](./LICENSE)。
