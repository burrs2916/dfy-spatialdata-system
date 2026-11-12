import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ConstructionRoundedIcon from "@mui/icons-material/ConstructionRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import { useNavigate } from "react-router-dom";

interface FeaturePlaceholderProps {
  /** 模块名称，例如「地图浏览」「图库管理」 */
  title: string;
  /** 可选补充说明，默认给出通用文案 */
  description?: string;
}

/**
 * 未实现 / 开发中功能的专业占位页。
 *
 * 菜单入口保留、路由可达，用户进入后看到统一的「功能建设中」提示，
 * 而不是空白页、报错或永远转圈的加载态。
 */
export default function FeaturePlaceholder({ title, description }: FeaturePlaceholderProps) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        width: "100%",
        px: 3,
      }}
    >
      <Box
        sx={{
          maxWidth: 560,
          width: "100%",
          textAlign: "center",
          py: 6,
          px: 4,
          border: "1px dashed",
          borderColor: "divider",
          borderRadius: 3,
          bgcolor: "background.paper",
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            bgcolor: "action.hover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mx: "auto",
            mb: 2.5,
          }}
        >
          <ConstructionRoundedIcon sx={{ fontSize: 34, color: "text.secondary" }} />
        </Box>

        <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500, mb: 2 }}>
          功能建设中 · 暂未开放
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.8, mb: 0.5 }}>
          {description ??
            "该模块正在开发与打磨中，暂未开放使用。我们将在后续版本中正式推出，届时会第一时间通知您。"}
        </Typography>
        <Typography variant="caption" color="text.disabled" sx={{ display: "block", mb: 3 }}>
          This feature is under development and will be available in a future release.
        </Typography>

        <Button
          variant="outlined"
          startIcon={<HomeRoundedIcon />}
          onClick={() => navigate("/")}
        >
          返回仪表盘
        </Button>
      </Box>
    </Box>
  );
}
