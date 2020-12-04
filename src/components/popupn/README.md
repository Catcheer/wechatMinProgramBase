## popup 弹框

弹框组件, 提供基础样式及功能.

### 使用指南

-   通过 `show` 控制显示.
-   通过 `overlay` 控制是否有遮罩层
-   通过 `direction` 控制内容出来的方向
-   通过 `closeOnClickOverlay` 控制点击遮罩层是否关闭内容.
-	 提供 `<slot/>` 自定义内容

### API

| 参数    | 说明       | 类型     | 默认值       | 可选值                 | 效果 |
| ------ | ------    | ------ | ----------- | -------------------------- |  ------  |
| show    | 显示弹框    | Boolean  | `false` |                   |         |       |
| overlay |是否有遮罩层  | Boolean  | `true` |       |            |       |
| direction|内容显示的方向  | String  |`center`|`bottom`, `top`, `left`, `right`|    |
| closeOnClickOverlay|点击遮罩层是否关闭 | Boolean    |    `true`    |   |         |

### 例子
  参见 `/pages/_example/example`页面
