// Mermaid 初始化（UMD 单文件版，兼容 Material 站内 XHR 导航）
(function () {
  function renderAll() {
    if (!window.mermaid) return;
    try {
      window.mermaid.run({ querySelector: ".mermaid" });
    } catch (err) {
      console.warn("mermaid render failed:", err);
    }
  }

  window.addEventListener("DOMContentLoaded", function () {
    if (!window.mermaid) return;
    window.mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      securityLevel: "loose",
      fontFamily: '-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
      flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
      timeline: { disableMulticolor: false }
    });
    renderAll();
    if (typeof document$ !== "undefined") {
      document$.subscribe(renderAll);
    }
  });
})();
