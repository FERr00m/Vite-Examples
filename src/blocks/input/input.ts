import IMask from 'IMask';

export const inputsTypePhone = document.querySelectorAll<HTMLInputElement>(
  '.js-input_type_phone'
);

// function checkForNum(value: string): boolean {
//   return /[^0-9]/.test(value);
// }

inputsTypePhone?.forEach((input) => {
  IMask(input, {
    mask: '+{7}(000)000-00-00',
  });
});
// inputs?.forEach((input) => {
//   input.addEventListener('change', function () {
//     console.log(this.value);
//     if (checkForNum(this.value)) {
//       this.classList.add('input_has-error');
//     } else {
//       this.classList.remove('input_has-error');
//     }
//   });
// });
