const form = document.querySelector('form');
// form k baar h aur w nhi lena hai kyunki form submit hoga tabhi values leni hai , agr event k bahar likh denge toh jese hi page load hoga weight and height ki values le li jayegi this usecase will give you empty values

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const h = parseInt(document.querySelector('#height').value);
  const w = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (isNaN(h) || h <= 0) {
    results.innerHTML = `Please give a valid height`;
  } else if (isNaN(w) || w <= 0) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (w / ((h * h) / 10000)).toFixed(2);

    results.innerHTML = `<span>${bmi}</span>`;
  }
});
