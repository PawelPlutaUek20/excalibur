import svgToEx from "svg-to-excalidraw";

(function run() {
  const convertBtn = document.getElementById("convert-btn");
  const contentEl = document.getElementById("content");
  const svgStrEl = document.getElementById("svg-str-textarea");

  if (!convertBtn || !contentEl || !svgStrEl) return;

  const heartSVG = `
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M 10,30
             A 20,20 0,0,1 50,30
             A 20,20 0,0,1 90,30
             Q 90,60 50,90
             Q 10,60 10,30 z"/>
  </svg>
  `;

  // setting default svg value
  svgStrEl.innerText = heartSVG;

  function convertSVGtoExcalidraw(svgString: string) {
    const { hasErrors, errors, content } = svgToEx.convert(svgString);

    // SVG parsing errors are propagated through.
    if (hasErrors) {
      console.error(errors);
    }

    if (contentEl) {
      contentEl.innerText = JSON.stringify(content);
    }
  }

  convertBtn?.addEventListener("click", () => {
    const svgString = (svgStrEl as HTMLTextAreaElement).value;
    convertSVGtoExcalidraw(svgString);
  });
})();
