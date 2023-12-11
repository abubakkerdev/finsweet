let mainItem = document.querySelectorAll(".question__faq-item");

let mainItemArr = Array.from(mainItem);

console.log("mainItem", mainItem);
console.log("mainItem", mainItemArr);

mainItemArr.map((el) => {
  el.addEventListener("click", () => {
    el.lastElementChild.classList.toggle("active-icon");
    el.children[1].lastElementChild.classList.toggle("active-desc");
    console.log(el.children[1].lastElementChild);
  });
});
