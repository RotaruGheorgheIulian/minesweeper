function populateDropdown(id, min, max, selectedValue) {
  const select = document.getElementById(id);
  for (let i = min; i <= max; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    if (i === selectedValue) option.selected = true;
    select.appendChild(option);
  }
}

populateDropdown('rows', 5, 20, 8);
populateDropdown('cols', 5, 20, 8);
