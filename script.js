let out = document.querySelector("#out");
// out.contentDocument.body.innerHTML = '<h1>helllo</h1>'
// out.contentDocument.head.innerHTML = '<style>h1{color:red}</style>'
// out.contentWindow.eval('let a=10; let b=20; alert(a+b)')

let allInput = document.querySelectorAll(".left-part textarea");
let htmlCode,
  cssCode,
  jsCode = "";

allInput.forEach((el, idx) => {
  el.addEventListener("keyup", () => {
    if (idx === 0) {
      htmlCode = el.value;
    }
    if (idx === 1) {
      cssCode = el.value;
    }
    if (idx === 2) {
      jsCode = el.value;
    }
    out.contentDocument.body.innerHTML = htmlCode;
    out.contentDocument.head.innerHTML = `<style>${cssCode}</style>`;
    out.contentWindow.eval(jsCode)
  });
});
