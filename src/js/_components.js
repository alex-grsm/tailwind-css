import { burger } from './functions/burger';

document.addEventListener('DOMContentLoaded', () => {

  /** DARK MODE */
  const modeBtn = document.querySelector('#mode');

  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  modeBtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('dark');

    if (document.querySelector('html').classList.contains('dark')) {
      localStorage.theme = 'dark';
    } else {
      localStorage.theme = 'light';
    }
  });

});
