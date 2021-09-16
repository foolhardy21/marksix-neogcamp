function createInputArea() {
    let inputTextArea = document.createElement('textarea')
    inputTextArea.className = 'inputarea'
    inputTextArea.placeholder = 'Type your text here...'
    
    return inputTextArea
}
function createOutputArea() {
    let outputDiv = document.createElement('div')
    outputDiv.className = 'outputarea'
    outputDiv.innerText = 'Press the button for translation.'
    
    return outputDiv
}
function createButton() {
    let translateBtn = document.createElement('button')
    translateBtn.className = 'btn'
    translateBtn.innerText = 'translate'
    
    return translateBtn
}
function createContentSection() {
    let contentSection = document.createElement('section')
        
    contentSection.appendChild(createInputArea())
    contentSection.appendChild(createButton())
    contentSection.appendChild(createOutputArea())

    return contentSection
}

const contentSection = createContentSection()
export { contentSection }