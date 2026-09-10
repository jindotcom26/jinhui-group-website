#!/bin/bash
# 双击我，在本机浏览器预览网站（不影响线上）
cd "$(dirname "$0")" || exit 1

PORT=8899
echo "================================"
echo "  金滙官网 · 本地预览"
echo "================================"
echo ""
echo "预览地址： http://localhost:${PORT}"
echo "改完文件后，浏览器刷新一下就能看到最新效果。"
echo "看完了，在这个黑窗口里按 Control + C 关掉预览。"
echo ""

sleep 1
open "http://localhost:${PORT}"
python3 -m http.server "$PORT"
