import appendHome from "./home"
import appendMenu from "./menu"
import appendContact  from "./contact"





function makeNavBar () {
    const content = document.getElementById('content')

// Create elements
    const navContainer = document.createElement('div')
    const buttonContainer = document.createElement('div')
    const logoContainer = document.createElement('div')
    const homeBtn = document.createElement('button')
    const menuBtn = document.createElement('button')
    const contactBtn = document.createElement('button')
    const contentContainer = document.createElement('div')

    logoContainer.innerText = 'Phil\'s Cuisine'
    homeBtn.innerText = 'Home'
    menuBtn.innerText = 'Menu'
    contactBtn.innerText = 'Contact'

    navContainer.classList.add('navContainer')
    buttonContainer.classList.add('buttonContainer')
    logoContainer.classList.add('logoContainer')
    homeBtn.classList.add('home')
    homeBtn.classList.add('active')
    menuBtn.classList.add('menu')
    contactBtn.classList.add('contact')
    contentContainer.classList.add('contentContainer')
    
    content.append(navContainer)
    navContainer.append(logoContainer)
    navContainer.append(buttonContainer)
    buttonContainer.append(homeBtn)
    buttonContainer.append(menuBtn)
    buttonContainer.append(contactBtn)
    content.append(contentContainer)

    
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

const button = document.querySelectorAll('button')
button.forEach(button => button.addEventListener('click', tabSwitch))


// homeBtn.addEventListener('click', tabSwitch)
// menuBtn.addEventListener('click', tabSwitch)
// contactBtn.addEventListener('click', tabSwitch)




