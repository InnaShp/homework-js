const form = document.querySelector('fieldset');
const button = document.querySelector('.btn');
const outBlock = document.querySelector('.out');
const fullName = form.elements.fio;
const phoneNumber = form.elements.phone;
const birthDate = form.elements.birthday;
const email = form.elements.email;

button.addEventListener('click', () => {
  outBlock.innerHTML = `<ul>
                      <li>ПІБ: ${fullName.value}</li>                                                 
                      <li>Номер телефону: ${phoneNumber.value}</li>
                      <li>Дата народження: ${birthDate.value}</li>
                      <li>Електронна пошта: ${email.value}</li>
                  </ul>`
});