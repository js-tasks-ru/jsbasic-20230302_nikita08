function toggleText() {
  // ваш код...
   let clickEl = document.querySelector(".toggle-text-button");
    let text = document.querySelector('#text');
 
    clickEL.addEventListener("click", handler);
 
    function handler() {
        text.hidden = !text.hidden;
    }
}
