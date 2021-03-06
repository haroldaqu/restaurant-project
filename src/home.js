function createCalendar () {
    const inputcalendar = document.createElement('div')
    inputcalendar.innerText = new Date()
    inputcalendar.classList.add('input-calendar')

    return inputcalendar
}

function imageSlider () {
    const menu = document.querySelector('.menuDiv')

    const imageContainer = document.createElement('div')
    const textContainer = document.createElement('div')
    const reserveContainer =  document.createElement('div')
    const exploreMenuContainer = document.createElement('div')
    const description = document.createElement('h1')
    const description2 = document.createElement('p')
    const checkMenuBtn = document.createElement('button')


    imageContainer.classList.add('image-container')
    textContainer.classList.add('text-container')
    exploreMenuContainer.classList.add('explore-menu-container')

    description.innerText = 'Authentic Philippino Food'
    checkMenuBtn.innerText = 'Reserve Now'
    description2.innerText = 'See a glimpse of philippino culture through cuisine'

    textContainer.append(description, description2)
    exploreMenuContainer.append(checkMenuBtn)
    imageContainer.append(textContainer, exploreMenuContainer)

   reserveContainer.append(createCalendar())

    checkMenuBtn.addEventListener('click', () => reserveContainer.classList.toggle('hide'))

    return imageContainer
}

function homeDiv () {
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('box')
    homeDiv.classList.add('homeDiv')
    homeDiv.classList.add('active')

    homeDiv.append(imageSlider())


    return homeDiv
}

function appendHome () {
    const contentContainer = document.querySelector('.contentContainer')
    contentContainer.appendChild(homeDiv())
    
}

export default appendHome