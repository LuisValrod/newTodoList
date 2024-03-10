if(localStorage.theme === 'dark' || (!('theme' in localStorage) && window, matchMedia('(prefers-color-scheme: dark)').matches)){
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
//Whenever the user choses light mode
//   localStorage.theme = 'light'
  
//Whenever the user choses dark mode
//   localStorage.theme = 'dark'
  
//Whenever the user choses to respect the OS preferences
//   localStorage.removeItem('theme')