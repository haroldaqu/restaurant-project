import appendHome from "./home"
import appendMenu from "./menu"
import appendContact  from "./contact"





function makeNavBar () {
    const content = document.getElementById('content')

    const navContainer = document.createElement('div')
    const buttonContainer = document.createElement('div')
    const logoContainer = document.createElement('div')
    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const contactBtn = document.createElement('button')
    const contentContainer = document.createElement('div')
    const hamburgerBtn = document.createElement('button')

    logoContainer.innerText = 'Phil\'s Cuisine'
    homeBtn.innerText = 'Home'
    menuBtn.innerText = 'Menu'
    contactBtn.innerText = 'Contact'
    hamburgerBtn.innerText = '☰'

    navContainer.classList.add('navContainer')
    buttonContainer.classList.add('buttonContainer', 'hide')
    logoContainer.classList.add('logoContainer')
    homeBtn.classList.add('home', 'nav-button')
    homeBtn.classList.add('active')
    menuBtn.classList.add('menu', 'nav-button')
    contactBtn.classList.add('contact', 'nav-button')
    contentContainer.classList.add('contentContainer')
    hamburgerBtn.classList.add('hamburger')

    
    content.append(navContainer)
    navContainer.append(logoContainer)
    navContainer.append(hamburgerBtn)
    navContainer.append(buttonContainer)
    buttonContainer.append(homeBtn)
    buttonContainer.append(menuBtn)
    buttonContainer.append(contactBtn)
    content.append(contentContainer)

    hamburgerBtn.addEventListener('click', () => buttonContainer.classList.toggle('hide'))

    
}

makeNavBar()
appendHome()
appendMenu()
appendContact()
 
function tabSwitch (e) {
    const activeTabs = document.querySelectorAll('.active')
    const home = document.querySelector('.homeDiv')
    const menu = document.querySelector('.menuDiv')
    const container = document.querySelector('.contactDiv')
    
    activeTabs.forEach(tab => {
        tab.className = tab.className.replace('active', '')
        
    })
    e.target.classList.add('active')

    if (e.target.classList.contains('home')) {
        home.classList.add('active')
    }
    else if (e.target.classList.contains('menu')) {
        menu.classList.add('active')
    }
    else {
        container.classList.add('active')
    }
   




}

const navButton = document.querySelectorAll('.nav-button')
navButton.forEach(button => button.addEventListener('click', tabSwitch))






