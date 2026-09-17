// Mermaid 初始化（UMD 单文件版）
// UMD 默认 startOnLoad=true 会在 DOMContentLoaded 时自动渲染；
// 这里只做配置微调与兜底，避免对已渲染节点重复 run 产生异常。
(function () {
  function renderAll() {
    if (!window.mermaid) return;
    var nodes = document.querySelectorAll(".mermaid");
    if (!nodes.length) return;
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].querySelector("svg")) return; // UMD 已完成自动渲染
    }
    try {
      window.mermaid
        .initialize({
          startOnLoad: false,
          theme: "default",
          securityLevel: "loose",
          fontFamily: '-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
          flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
          timeline: { disableMulticolor: false }
        });
      Promise.resolve(window.mermaid.run({ querySelector: ".mermaid" })).catch(
        function (err) { console.warn("mermaid render failed:", err); }
      );
    } catch (err) {
      console.warn("mermaid init failed:", err);
    }
  }

  if (document.readyState !== "loading") renderAll();
  else document.addEventListener("DOMContentLoaded", renderAll);
})();
