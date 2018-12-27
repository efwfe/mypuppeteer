# frame
- frameattached，附加到页面时触发，只能触发一次
- framenavigated 当提交导航栏到不同的url中触发
- framedetached 分离页面的时候触发，只能触发一次

```
获取ifame elements
const frame = page.frames().find(frame => frame.name() === 'myframe');
const text = await frame.$eval('.selector', element => element.textContent);
console.log(text);
  ```

# ExecutionContext
- js解析上下文，一个页面可能有多个执行上下文
- frame触发dom的时候创建默认执行上下文，通过frame.executionContext()方法返回上下文
- 内容脚本创建其他执行上下文

# JSHandle
- JSHandle表示页内JavaScript对象。可以使用page.evaluateHandle方法创建JSHandles
```
const windowHandle = await page.evaluateHandle(() => window);
```
- 除非处理了句柄，否则JSHandle会阻止引用的JavaScript对象被垃圾回收。 JSHandles在其原始帧被导航或父上下文被破坏时自动处理
- JSHandle实例可以在页面中用作参数。$ eval（），page.evaluate（）和page.evaluateHandle方法。

# ElementHandle
- ElementHandle表示页内DOM元素，page.$方法来创建ElementHandles。

# Request
不管啥时候发送一个请求，以下事件触发
- request 页面发出请求
- response 当相应被reqeust接受
- requestfinished 请求体下载完成，而且请求断开

  如果请求再某些非erquetfinished 地方失败，触发requestfaided 触发

# CDPSession
- CDPSession实例用于讨论原始Chrome Devtools协议
- 可以使用session.send方法调用协议
- 使用session.on 注册协议
