const main_text = document.querySelector(".main p");
const btn = document.querySelector(".change_mode");
const fontSizeIncr = document.querySelector(".text-size-btns .btn-pls");
const fontSizeDecr = document.querySelector(".text-size-btns .btn-mns");

// main_text.style.fontSize = '15px';


let fontSize;

//todo: проверить наличие fontSize в localStorage и если его нет, задать 12

if (localStorage.getItem('fontSize')) {
    fontSize = +localStorage.getItem('fontSize');
} else {
    fontSize = 12;
    localStorage.setItem('fontSize', fontSize);
}

main_text.style.fontSize = fontSize + 'px';

//todo: Меняем тему со светлой на темную и наоборот

btn.addEventListener("click", () => {
  main.classList.add("dark");
});

if (localStorage.getItem("mode") === "dark") {
  document.body.classList.add("dark");
};

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark");
  } else {
    localStorage.setItem("mode", "light");
  }
});

//todo: Изменение шрифта



fontSizeIncr.addEventListener('click', () => { 
    // let fontSize = parseInt(main_text.style.fontSize);
    fontSize += 1;
    localStorage.setItem('fontSize', fontSize);
    main_text.style.fontSize = `${fontSize}px`
});

fontSizeDecr.addEventListener('click', () => {
    // let fontSize = parseInt(main_text.style.fontSize);
    fontSize -= 1;
    localStorage.setItem('fontSize', fontSize);
    main_text.style.fontSize = `${fontSize}px`
});





