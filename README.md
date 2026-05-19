# CET-6 写作翻译词汇默写网站

这是一个本地静态网页应用，适合英语六级备考。初始界面提供阅读训练、翻译训练、写作训练、单词训练入口；当前已实现阅读训练、翻译训练和单词训练，写作训练显示待开发。

## 打开方式

### 方式一：直接打开

双击：

```text
D:\cet6-vocab-site\index.html
```

### 方式二：本地服务器打开（推荐）

在该目录运行：

```powershell
python -m http.server 5173
```

浏览器访问：

```text
http://localhost:5173
```

### 方式三：GitHub Pages 上线

1. 在 GitHub 新建仓库，例如：

```text
cet6-vocab-site
```

2. 上传项目根目录中的文件：

```text
index.html
style.css
app.js
README.md
.nojekyll
```

3. 进入仓库设置：

```text
Settings -> Pages
```

4. Source 选择：

```text
Deploy from a branch
```

5. Branch 选择：

```text
main
```

Folder 选择：

```text
/root
```

6. 保存后等待 1-3 分钟，访问 GitHub Pages 给出的地址：

```text
https://你的用户名.github.io/cet6-vocab-site/
```

## 已实现功能

- 护眼风 UI
- 初始训练选择界面
- 阅读训练：内置六级水平英文短文、中文翻译、重点表达、收藏、已读、掌握、阅读笔记和文章导入
- 翻译训练：题库、译文输入、参考译文、重点表达、收藏和掌握状态
- 翻译题库管理：新增、编辑、删除中文原文/例句、参考译文和重点表达
- 写作训练待开发占位页
- 内置 CET-6 写作/翻译高频名词和动词词库
- 中文释义 -> 英文默写
- 按词性、分类、状态控制考察范围
- 简化间隔复习记忆算法
- 自动错题库
- 手动添加单词
- 批量导入单词
- JSON 备份/恢复
- 本地保存学习记录

## 批量导入格式

每行一个：

```text
英文 | 中文 | 词性 | 分类 | 例句
```

示例：

```text
facilitate | 促进，使便利 | 动词 | 写作高频,发展类 | Technology can facilitate communication.
phenomenon | 现象 | 名词 | 写作高频,社会类 | This phenomenon deserves attention.
```

## 数据保存位置

数据保存在浏览器的 `localStorage` 中，不会上传服务器。
建议定期在「备份导入」页面导出 JSON 备份。
