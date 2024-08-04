const changeTheme = ()=>{
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if(currentTheme === 'dark'){
        document.documentElement.setAttribute('data-theme', 'light');
        document.querySelector('.bi-moon-fill').classList.remove('bi-moon-fill');
        document.querySelector('.bi').classList.add('bi-sun-fill');

    }else{
        document.documentElement.setAttribute('data-theme', 'dark');
        document.querySelector('.bi-sun-fill').classList.remove('bi-sun-fill');
        document.querySelector('.bi').classList.add('bi-moon-fill');
    }
}

export {changeTheme}