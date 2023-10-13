const body = document.body;

if (localStorage.getItem('darkmode') === 'true') {
   body.classList.add('darkmode');
}

function switchTheme() {
   document.querySelectorAll('body, header, main, footer, #switcher').forEach(function(el) {
      if(!el.className.match('switch-duration'))  {
         el.classList.add('switch-duration');
      }
   });
   const isDark = localStorage.getItem('darkmode') === 'true';
   localStorage.setItem('darkmode', !isDark);
   body.classList.toggle('darkmode');
}

document.querySelector('#switcher').addEventListener('click', switchTheme);