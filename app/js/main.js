$(function () {
  const tabs = document.querySelector('.tabs');
  const tabButton = document.querySelectorAll('.tabs__btn');
  const contents = document.querySelectorAll('.tabs__page');

  tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
      tabButton.forEach(btn => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");

      contents.forEach(content => {
        content.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  }


//adding focus for Safari
  document.addEventListener('click', event => {
    if (event.target.matches('button')) {
      event.target.focus()
    }
  })

})