##axios源码目录结构
```
# 📁 lib
# |——  📁 adapters                           // axios主要使用的请求方法
# |——  |——  📃 http.js                       // axios中node端使用的请求函数
# |——  |——  📃 xhr.js                        // axios中浏览器端使用的请求函数
# |——  📁 cancel
# |——  |——  📃 Cancel.js                     // 定义了，取消请求返回的信息结构
# |——  |——  📃 CancelToken.js                // 定义了用于取消请求的主要方法
# |——  |——  📃 isCancel.js                   // 判断是否是取消请求的信息
# |——  📁 core
# |——  |——  📃 Axios.js                      // Axios类
# |——  |——  📃 buildFullPath.js
# |——  |——  📃 dispatchRequest.js            // 发起请求的地方 
# |——  |——  📃 InterceptorManager.js         // InterceptorManager类，拦截器类
# |——  |——  📃 mergeConfig.js                // 合并配置项
# |——  |——  📃 settle.js                     // 根据请求状态，处理Promise
# |——  |——  📃 createError.js                // 生成指定的error
# |——  |——  📃 enhanceError.js               // 指定error对象的toJSON方法
# |——  |——  📃 transformData.js              // 使用default.js中transformRequest和transformResponse对响应以及请求进行格式化
# |——  📁 helpers
# |——  |——  📃 bind.js                       // 工具函数
# |——  |——  📃 parseHeaders.js               // 将getAllResponseHeaders返回的header信息转化为对象
# |——  |——  📃 buildURL.js                   // 将params参数
# |——  |——  📃 cookies.js                    // 封装了读取，写入，删除cookies的方法
# |——  |——  📃 isURLSameOrigin.js            // 检测当前的url与请求的url是否同源
# |——  |——  📃 normalizeHeaderName.js        // 对对象属性名的进行格式化，删除，新建符合大小写规范的属性
# |——  |——  📃 combineURLs.js                // 组合baseurl
# |——  |——  📃 isAbsoluteURL.js              // 判断是否为绝对路径（指的://或//开头的为绝对路径）
# |——  |——  📃 isValidXss.js                 // 
# |——  |——  📃 spread.js                     // 
# |——  📃 axios.js                           // 
# |——  📃 defaults.js                        // axios中默认配置
# |——  📃 utils.js                           // 一些工具方法
# |——  |——  ⏹ isFormData                    // 判断是否是formData对象
# |——  |——  ⏹ isStandardBrowserEnv          // 判断当前环境是否为标准浏览器环境
# |——  |——  ⏹ isUndefined                   // 判断是否为undefined
# |——  |——  ⏹ merge                         // 合并对象
# |——  |——  ⏹ isURLSearchParams             // 判断是否为URLSearchParams对象
