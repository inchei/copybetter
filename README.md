Copy Better
===========

扩展原生复制功能。

A google chrome extension to make copy better.

Extension functions
===================

本扩展包含以下功能：

* 选中文字自动复制;
* 选中文字时, shift+c复制选中部分的html源代码;
* 未选中文字时, ctrl+c以文本格式复制标题与链接, shift+c以html格式复制标题与链接;
* 保存最近N个拷贝的内容, 可以自由选择;

This extension has below functions:
* Copy selected text automatically;
* Press shift+c to copy html code of selected text;
* Press ctrl+c to copy title and url in text format, and shift+c to copy in html format;
* Store recent copy cache, you can select it from the menu;

Extension Settings
==================

1.选中文字时自动复制 | Copy selected text automatically

Check this option to automatically copy selected text.

Default: checked

2.复制标签标题和地址 (文本格式, Ctrl+c)	| Copy title and url (text format, Ctrl+c)

Use ctrl+c to copy title and url in text format, the format is defined here. 

Default: %TITLE%\n%URL%

3.复制标签标题和地址 (HTML格式, Shift+c) | Copy title and url (html format, Shift+c)

Use shift+c to copy title and url in html format, the format is defined here.

Default: <a href="%URL%" target="_blank">%TITLE%</a>
	
4.退出当前窗口时保存剪贴版中的缓存内容 | Store the copy cache when exit current window

Check this option to store copy cache when the window closed.

Default: checked

5.剪贴版中保存的缓存个数 | The maximum number of copy cache item

Defines the maximum number of copy cache item saved.

Default: 10

6.弹出窗口中仅显示复制缓存项内容的前n个字符 | Only display first n chars of copy cache item in the popup window

Only display first n chars of copy cache item in the popup window opened when click the toolbar button.

Default: 40