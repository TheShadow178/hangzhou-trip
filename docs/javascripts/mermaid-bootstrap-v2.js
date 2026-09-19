// Mermaid 渲染引导 v2（UMD 单文件版，紧随 mermaid.min.js 之后执行）
// 关键：startOnLoad:false 关闭 UMD 自带的 DOMContentLoaded 自动渲染，
// 改为本脚本在同一事件里显式 run 一次，避免「自动渲染 + 手动 run」竞争
// 导致部分图变成空白容器或 Syntax error 占位。
(function () {
  if (!window.mermaid) return;

  window.mermaid.initialize({
    startOnLoad: false,
    theme: "default",
    securityLevel: "loose",
    fontFamily: '-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
    flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
    timeline: { disableMulticolor: false }
  });

  function renderAll() {
    // fence_code_format 输出 <pre class="mermaid"><code>…，直接取 .mermaid 节点
    var nodes = Array.prototype.slice.call(
      document.querySelectorAll(".mermaid:not([data-mermaid-done])")
    );
    if (!nodes.length) return;
    nodes.forEach(function (n) { n.setAttribute("data-mermaid-done", "1"); });
    // run 接受节点数组，单张图解析失败不会阻断其余图
    try {
      var p = window.mermaid.run({ nodes: nodes });
      if (p && typeof p.catch === "function") {
        p.catch(function (err) {
          console.error("[mermaid] 渲染失败：", err);
        });
      }
    } catch (err) {
      console.error("[mermaid] 渲染异常：", err);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderAll);
  } else {
    renderAll();
  }
})();
