export const input = document.querySelector<HTMLInputElement>('.js-input');

function checkForNum(value: string): boolean {
  return /[^0-9]/.test(value);
}

input?.addEventListener('input', function () {
  console.log(this.value);
  if (checkForNum(this.value)) {
    this.classList.add('input_has-error');
  } else {
    this.classList.remove('input_has-error');
  }
});
