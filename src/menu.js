function makeMenu (src, text, ingridients) {
    const menuItem = document.createElement('div')
    const menuImage = document.createElement('img')
    const menuTitle = document.createElement('h1')
    const ingridientsSection = document.createElement('p')

    // ingridientsContainer.append(ingridientsTitle, ingridientsSection)
    menuItem.append(menuTitle, menuImage, ingridientsSection)


    menuItem.classList.add('menuItem')
    menuImage.classList.add('menuImage')
    menuTitle.classList.add('menuTitle')



    menuImage.setAttribute('src', src)
    menuTitle.innerText = text
    ingridientsSection.innerText = ingridients

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

    menuDiv.append(makeMenu('./img/Tapa.jpg', 'Longanisa', 'Sweet sauage served with salted egg, assorted vegetables, and rice'))
    menuDiv.append(makeMenu('./img/palabok.jpg', 'Palabok', 'Shrimp noodles with palabok sauce, boiled egg, and fried pork skin' ))
    menuDiv.append(makeMenu('./img/mongo.jpg', 'Mongo', 'Mung bean stew with ground pork and assorted vegetables served with fried pork skin'))
    menuDiv.append(makeMenu('./img/Sopas.jpg', 'Tinola', 'Pork soup with assorted vegetables served with rice'))
    menuDiv.append(makeMenu('./img/tokwang baboy.jpg', 'Tokwang Baboy', 'Fried tofu with fried pork and assorted vegetables'))
    menuDiv.append(makeMenu('./img/pork-giniling.jpg', 'Giniling', 'Ground pork stew with assorted vegetables served with rice'))
    return menuDiv
}

function appendMenu () {
    const contentContainer = document.querySelector('.contentContainer')
    contentContainer.appendChild(menuDiv())
}


export default appendMenu