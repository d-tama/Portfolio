function initLoading() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded-end');

  const body = document.querySelector('body');
  body.classList.remove('loading-scroll');
}

if (document.readyState === 'complete') {
  initLoading();
} else {
  window.addEventListener('load', initLoading);
}



document.getElementById("page-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
