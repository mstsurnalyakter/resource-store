const triangleBtn = document.getElementById("triangleBtn");
const triangleBaseInput = document.getElementById("triangle-base");
const triangleHeightInput = document.getElementById("triangle-height");
const triangleArea = document.getElementById("triangle-area");

triangleBtn.addEventListener("click", () => {
  const triangleBaseText = triangleBaseInput.value;
  const triangleHeightText = triangleHeightInput.value;

  const base = parseFloat(triangleBaseText);
  const height = parseFloat(triangleHeightText);

  const area = 0.5 * base * height;
  triangleArea.innerText = area;
});
