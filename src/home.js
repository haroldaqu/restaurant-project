function header () {
    const headerText = document.createElement('div')
    headerText.innerText = 'Authentic Philippino Food'
    headerText.classList.add('headerText')
   
    return headerText
}
function para () {
    const paraText = document.createElement('div')
    paraText.innerText = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque quam hic maiores voluptas nobis voluptates distinctio aliquid et. Temporibus, rerum pariatur cum nobis recusandae iste!'
    paraText.classList.add('paraText')

    return paraText
}



function homeDiv () {
    // const contentContainer = document.querySelector('.contentContainer')
    const homeDiv = document.createElement('div')
    homeDiv.classList.add('box')
    homeDiv.classList.add('homeDiv')
    homeDiv.classList.add('active')
    // homeDiv.innerText = 'Home'
    // contentContainer.append(homeDiv)
    homeDiv.appendChild(header())
    homeDiv.appendChild(para())
    return homeDiv
}

function appendHome () {
    const contentContainer = document.querySelector('.contentContainer')
    contentContainer.appendChild(homeDiv())
    
}

export default appendHome