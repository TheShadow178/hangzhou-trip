// 天地图（国家地理信息公共服务平台）浏览器端 key 配置
// 申请地址：https://console.tianditu.gov.cn/  （免费，需实名，约 5 分钟）
//
// 控制台「我的应用 → 设置」必做：
//   域名白名单添加：theshadow178.github.io、localhost、127.0.0.1
//   （地图瓦片走 Referer 白名单鉴权，白名单外的网站无法使用此 key）
//
// tk：应用密钥（地图瓦片必带）
// sk：安全密钥（仅搜索/地理编码等服务 API 的后端代理场景需要；本页只加载瓦片，留空即可）
// 两者都会出现在网页源码中——浏览器端 key 本就如此，安全靠上面的域名白名单保证。
window.TIANDITU_KEY = "525d55bca3595829e657a168066a1e86";
window.TIANDITU_SK  = "c7150e584ce10cdf412fde64b9d36513";
