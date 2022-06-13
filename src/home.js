
function imageSlider () {
    const imageContainer = document.createElement('div')
    const textContainer = document.createElement('div')
    const exploreMenuContainer = document.createElement('div')
    const description = document.createElement('h1')
    const description2 = document.createElement('p')
    const checkMenuBtn = document.createElement('button')


    imageContainer.classList.add('image-container')
    textContainer.classList.add('text-container')
    exploreMenuContainer.classList.add('explore-menu-container')

    description.innerText = 'Authentic Fillipino Food'
    checkMenuBtn.innerText = 'Explore Menu'
    description2.innerText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, cupiditate iure. Eveniet esse aliquam corporis!'

    textContainer.append(description, description2)
    exploreMenuContainer.append(checkMenuBtn)
    imageContainer.append(textContainer, exploreMenuContainer)

    return imageContainer
}

function homeDiv () {
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('box')
    homeDiv.classList.add('homeDiv')
    // homeDiv.classList.add('active')

    homeDiv.append(imageSlider())


    return homeDiv
}

function appendHome () {
    const contentContainer = document.querySelector('.contentContainer')
    contentContainer.appendChild(homeDiv())
    
}

export default appendHome