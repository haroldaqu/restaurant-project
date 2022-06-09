function contactItems (text) {
    const paraInfo = document.createElement('div')
    paraInfo.classList.add('paraInfo')
    paraInfo.innerText = text
    return paraInfo
}

function contactDiv () {
    const contactDiv = document.createElement('div')
    contactDiv.classList.add('box')
    // contactDiv.classList.add('active')
    contactDiv.classList.add('contactDiv')
    contactDiv.append(contactItems('Address:'))
    contactDiv.append(contactItems('1234 Los Angeles Ave, Los Angeles, CA 90065'))
    contactDiv.append(contactItems('Hours:'))
    contactDiv.append(contactItems('Mon - Sunday 8AM - 5PM'))
    return contactDiv
    
}

function appendContact () {
    const contentContainer = document.querySelector('.contentContainer')
    contentContainer.appendChild(contactDiv())
}


export default appendContact 