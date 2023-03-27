const btn = document.querySelector(".btn");
const out = document.querySelector(".out");

btn.addEventListener("click", function () {
  const fio = document.querySelector("input[name=fio]").value;
  const phone = document.querySelector("input[name=phone]").value;
  const birthday = document.querySelector("input[name=birthday]").value;
  const email = document.querySelector("input[name=email]").value;

  out.innerText = `
      ПІБ: ${fio}
      Номер телефону: ${phone}
      Дата народження: ${birthday}
      Електронна пошта: ${email}
     `;
});
