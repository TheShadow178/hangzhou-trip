import mermaid from "./vendor/mermaid/mermaid.esm.min.mjs";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  securityLevel: "loose",
  fontFamily: '-apple-system, "PingFang SC", "Microsoft YaHei", sans-serif',
  flowchart: { useMaxWidth: true, htmlLabels: true, curve: "basis" },
  timeline: { disableMulticolor: false }
});

// Material 以 XHR 方式做站内导航，每次页面切换后需要重新渲染图表
document$.subscribe(() => {
  mermaid.run({ querySelector: ".mermaid" });
});
