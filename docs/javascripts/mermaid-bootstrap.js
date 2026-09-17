// Mermaid 配置（UMD 单文件版，紧随 mermaid.min.js 之后执行）
// UMD 默认在 DOMContentLoaded 时自动渲染；这里在其自动渲染之前同步完成配置，
// 不手动调用 run，避免并发重复渲染产生 Promise 异常。
(function () {
  if (!window.mermaid) return;
  window.mermaid.initialize({
    startOnLoad: true,
    theme: "default",
    securityLevel: "loose",
    fontFamily: '-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
    timeline: { disableMulticolor: false }
  });
})();
