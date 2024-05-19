const handleBtn = () => {
  const idInput = document.getElementById("userId");
  const id = idInput.value;
  const idValue = document.getElementById("userValue");
  const value = idValue.value;

  id && value && localStorage.setItem(id, value);

  idInput.value = "";
  idValue.value = "";
};
