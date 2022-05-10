# 基于 iview4.7.0 定制开发

级联组件添加修改滚动条样式、添加 transferDom 参数

checkbox 修复 ie 上的 bug

date-picker 组件修改滚动条、添加 transferDom 参数

form 添加规则变更时，清除所有验证状态

input 修复搜索图标和清除密码不能并存的 bug

menu 组件修改箭头图标方向，on-menu-item-select 时不修改 currentActiveName 的值

修复 page 可输入字符串的问题，添加跳转按钮(TODO)，page 只有一页时默认隐藏！

select 修改滚动条，on-select 在 nextTick 执行

tree 添加 empty 组件，on-check-change 多返回一个末节点，添加 loading 参数

Message 组件修复 type 错误

table 修改 loading 样式、添加滚动条、cell 默认开启 ellipsis；

table 添加 current、pageSize 字段，行 type 为 index 时，根据传入的 current、pageSize 自动计算 index；

table 的 cell 添加 title；将 head 中的’#‘修改为’‘；

<!-- table 列默认 align 改为 center； -->

table 添加 enableIndeterminate 字段，type 为 selection 自动启用，可用.selectedRowList.sync 获取当前选中的行

table 添加滚到底部 bottom 事件（scrollBottom）

table 内容为空时，添加 ivu-table-empty 类;带 page 组件为 empty 时，添加 ivu-table-empty-with-page 类

button 添加 ivu-btn-inner 类

table cell 添加 valueMap 用于映射
