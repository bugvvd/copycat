// console.log("hello react-mini");
const container = document.getElementById("container");
console.log(container, container.innerHTML);

/* case 1 */
container.innerHTML = "new";
console.log(container, container.innerHTML);

/* case 2 */
// let timeout = 5;
setTimeout(() => {
  container.innerHTML = "new";
  // interval <= 6: text text while interval > 6: text new text
  console.log(container, container.innerHTML);
}, timeout);
