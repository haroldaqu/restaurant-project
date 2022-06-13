function locationItems () {
    const locationContainer = document.createElement('div')
    const locationHeader = document.createElement('h1')
    const address = document.createElement('p')
    const phoneNum = document.createElement('p')
    const emailInfo = document.createElement('p')
    const hours = document.createElement('p')
    const fillOutForm = document.createElement('p')

    locationHeader.innerText = 'Contact Us'
    address.innerText = '1234 Los Angeles Ave, Los Angeles, CA 90065'
    phoneNum.innerText = '123-456-7890'
    emailInfo.innerText = 'PhilCuisine@restaurants.com'
    hours.innerText = 'Mon - Sunday 11AM - 9PM'
    fillOutForm.innerText = 'Please fill out the form below and we will be in touch shortly'

    locationContainer.classList.add('location-container')

    locationContainer.append(locationHeader, address, phoneNum, emailInfo, hours, fillOutForm)

    return locationContainer
}

function formItems () {
    const form = document.createElement('form')
    const nameInput = document.createElement('input')
    const emailInput = document.createElement('input')
    const textArea = document.createElement('textarea')
    const contactBtnContainer = document.createElement('div')
    const submitBtn = document.createElement('button')
    const resetBtn = document.createElement('button')

    nameInput.setAttribute('placeholder', 'Name')
    nameInput.setAttribute('type', 'text')
    emailInput.setAttribute('placeholder', 'Email')
    emailInput.setAttribute('type', 'email')
    textArea.setAttribute('placeholder', 'Message')
    textArea.setAttribute('cols', '30')
    textArea.setAttribute('rows', '10')
    submitBtn.innerText = 'Submit'
    submitBtn.setAttribute('type', 'submit')
    resetBtn.innerText = 'Reset'
    resetBtn.setAttribute('type', 'reset')

    contactBtnContainer.append(submitBtn, resetBtn)
    form.append(nameInput, emailInput, textArea, contactBtnContainer)

    return form
}

function contactDiv () {
    const contactDiv = document.createElement('div')
    contactDiv.classList.add('box')
    contactDiv.classList.add('active')
    contactDiv.classList.add('contactDiv')

    contactDiv.append(locationItems(), formItems())
    // contactDiv.classList.add('contactDiv')
    // contactDiv.append(contactItems('Address:'))
    // contactDiv.append(contactItems('1234 Los Angeles Ave, Los Angeles, CA 90065'))
    // contactDiv.append(contactItems('Hours:'))
    // contactDiv.append(contactItems('Mon - Sunday 8AM - 5PM'))
    return contactDiv
    
}

function appendContact () {
    const contentContainer = document.querySelector('.contentContainer')
    contentContainer.appendChild(contactDiv())
}


export default appendContact 