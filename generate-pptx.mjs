import PptxGenJS from "pptxgenjs";

// Usage: node generate-pptx.mjs '<JSON_ARRAY>' 'out/concept.pptx'
const slides = JSON.parse(process.argv[2]);
const outFile = process.argv[3] || "out/concept.pptx";
const pptx = new PptxGenJS();

slides.forEach((s) => {
  const slide = pptx.addSlide();
  slide.addText(s.title, { x: 0.5, y: 0.3, fontSize: 24, bold: true });
  if (s.imageUrl) slide.addImage({ x:0.5,y:1,w:8,h:4.5,data:s.imageUrl });
  slide.addText(s.copy, { x: 0.5, y: 6.8, fontSize: 18 });
});

pptx.writeFile({ fileName: outFile }).then(() => {
  console.log("Created:", outFile);
});