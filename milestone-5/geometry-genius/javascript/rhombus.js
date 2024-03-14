const rhombusBtn = document.getElementById("rhombusBtn");
const rhombusDiagonal1 = document.getElementById("rhombus-diagonal1");
const rhombusDiagonal2 = document.getElementById("rhombus-diagonal2");
const rhombusArea= document.getElementById("rhombus-area");

rhombusBtn.addEventListener("click", () => {
  const rhombusDiagonal1Text = rhombusDiagonal1.value;
  const rhombusDiagonal2Text = rhombusDiagonal2.value;

  const diagonal1 = parseFloat(rhombusDiagonal1Text);
  const diagonal2 = parseFloat(rhombusDiagonal2Text);

  

  const area = 0.5 * diagonal1 * diagonal2;
  rhombusArea.innerText = area;

  rhombusDiagonal1.value = "";
  rhombusDiagonal2.value = "";
});
