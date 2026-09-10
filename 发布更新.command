#!/bin/bash
# 双击我，把本地改动发布到 https://www.jinhui.group
cd "$(dirname "$0")" || exit 1

echo "================================"
echo "  金滙官网 · 发布更新"
echo "================================"
echo ""

if [ -z "$(git status --porcelain)" ]; then
  echo "没有任何改动，不需要发布。"
  echo ""
  read -n 1 -s -r -p "按任意键关闭..."
  exit 0
fi

echo "这次改了这些文件："
git status --short
echo ""

read -r -p "用一句话说明这次改了什么（直接回车用默认）: " MSG
if [ -z "$MSG" ]; then
  MSG="更新网站内容 $(date '+%Y-%m-%d %H:%M')"
fi

git add -A
git commit -m "$MSG" || { echo "提交失败"; read -n 1 -s -r -p "按任意键关闭..."; exit 1; }
git push origin main || { echo "推送失败，请检查网络或 GitHub 登录状态"; read -n 1 -s -r -p "按任意键关闭..."; exit 1; }

echo ""
echo "✅ 已发布！等 1～3 分钟后刷新 https://www.jinhui.group"
echo ""
read -n 1 -s -r -p "按任意键关闭..."
