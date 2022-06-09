function makeMenu (src, text) {
    const menuItem = document.createElement('div')
    const menuImage = document.createElement('img')
    const menuTitle = document.createElement('h1')

    menuItem.append(menuTitle)
    menuItem.append(menuImage)

    menuItem.classList.add('menuItem')
    menuImage.classList.add('menuImage')
    menuTitle.classList.add('menuTitle')

    menuImage.setAttribute('src', src)
    menuTitle.innerText = text
    return menuItem
}


function menuDiv () {
    // const contentContainer = document.querySelector('.contentContainer')
    const menuDiv = document.createElement('div')
    menuDiv.classList.add('box')
    menuDiv.classList.add('menuDiv')
    // menuDiv.classList.add('active')
    // menuDiv.innerText =  'Menu'
    // contentContainer.append(menuDiv)

    menuDiv.append(makeMenu('./img/Tapa.jpg', 'Tapa'))
    menuDiv.append(makeMenu('./img/fried fish.jpg', 'Fried Fish'))
    menuDiv.append(makeMenu('./img/mongo.jpg', 'Mongo'))
    menuDiv.append(makeMenu('./img/Sopas.jpg', 'Sopas'))
    menuDiv.append(makeMenu('./img/tokwang baboy.jpg', 'Tokwang Baboy'))
    menuDiv.append(makeMenu('./img/Tapa.jpg', 'Tapa'))
    return menuDiv
}

function appendMenu () {
    const contentContainer = document.querySelector('.contentContainer')
    contentContainer.appendChild(menuDiv())
}


export default appendMenu