import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import type { ComponentRendererProps } from "../../types/editor";

/**
 * 组件级「暂未实现」占位渲染器工厂。
 *
 * 用于功能建设中的组件（如 CAD 图纸、三维地球、热力地图）：
 * 组件仍可从组件面板拖入画布，但内容区展示统一的专业提示，
 * 而不是空转加载或报错。原渲染器代码保留在各自文件中，
 * 功能完成后在注册处改回原 renderer 即可。
 */
export function makePlaceholderRenderer(title: string) {
  function FeatureNotImplementedRenderer({ width, height }: ComponentRendererProps) {
    return (
      <Box
        sx={{
          width: width ?? "100%",
          height: height ?? "100%",
          minHeight: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.75,
          border: "1px dashed",
          borderColor: "divider",
          borderRadius: 1.5,
          bgcolor: "action.hover",
          px: 2,
          textAlign: "center",
        }}
      >
        <ConstructionRoundedIcon sx={{ fontSize: 28, color: "text.secondary" }} />
        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "text.secondary" }}>
          {title}
        </Typography>
        <Typography variant="caption" color="text.disabled">
          功能建设中 · 暂未开放
        </Typography>
        <Typography variant="caption" color="text.disabled" sx={{ fontSize: "0.65rem" }}>
          Under development — coming soon
        </Typography>
      </Box>
    );
  }
  FeatureNotImplementedRenderer.displayName = `Placeholder(${title})`;
  return FeatureNotImplementedRenderer;
}

/** 具名占位组件（供注册处 lazy 加载，与正常渲染器同一加载模式） */
export const CadMapPlaceholder = makePlaceholderRenderer("CAD 图纸");
export const GlobePlaceholder = makePlaceholderRenderer("三维地球");
export const HeatmapPlaceholder = makePlaceholderRenderer("热力地图");
