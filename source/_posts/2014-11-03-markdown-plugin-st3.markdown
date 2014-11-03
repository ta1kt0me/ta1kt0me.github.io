---
layout: post
title: "Sublime Text3にMarkdown環境を作る"
date: 2014-11-03 19:23:45 +0900
comments: true
categories: [sublimetext3]
---

Sublime Text 3にMarkdownのPluginを入れてみました。  

<!-- more -->

# Package 

導入したPackageは次の通り。  
使いながら減らしていくかも。

## [Markdown Extended](https://sublime.wbond.net/packages/Markdown%20Extended)

## [MarkdownCodeBlockWrapper](https://sublime.wbond.net/packages/MarkdownCodeBlockWrapper)

## [MarkdownEditing](https://sublime.wbond.net/packages/MarkdownEditing)

## [MarkdownTOC](https://sublime.wbond.net/packages/MarkdownTOC)

## [OmniMarkupPreviewer](https://sublime.wbond.net/packages/OmniMarkupPreviewer)

## [Table Editor](https://sublime.wbond.net/packages/Table%20Editor)

# Preference

Markdownのみに適用したい設定の仕方。  
SyntaxをMarkdownに設定した状態で、Command Paletteから`Prefrences: Alignment File Settings Syntax Specific User`を選択。  

```json
{
    "enable_table_editor": true,
    "extensions":
    [
        "mdown",
        "txt",
        "md",
        "markdown"
    ],
    "tab_size": 4,
    "translate_tabs_to_spaces": true,
    "trim_trailing_white_space_on_save": false
}
```

# Key-Binding

`markdown`と`md`といったMarkdownの拡張子(syntax)の時のみキーバインドを設定する。

```json
[
    // Shift+enterで末尾に'  \n'を入れる
  { "keys": ["shift+enter"], "command": "insert_snippet", "args": { "contents": "  \n" }, "context": [{ "key": "selector", "operator": "equal", "operand": "text.html.markdown, text.html.md" }]},
    // alt+lで'[title](http://)'を挿入する
  { "keys": [ "alt+l" ], "command": "insert_snippet", "args": { "contents": "[title](http://)"}, "context": [{ "key": "selector", "operator": "equal", "operand": "text.html.markdown, text.html.md" }]}
]
```

