import './style.css'

const mainDiv = document.querySelector('#maindiv')


const header = document.createElement('header')
header.className = 'headerdiv'
header.innerText = 'banana talk'

const contentSection = document.createElement('section')
const inputTextArea = document.createElement('textarea')
inputTextArea.className = 'inputarea'
inputTextArea.placeholder = 'Type your text here...'
const outputTextArea = document.createElement('div')
outputTextArea.className = 'outputarea'
outputTextArea.innerText = 'Press the button for translation.'
const translateBtn = document.createElement('button')
translateBtn.className = 'btn'
translateBtn.innerText = 'Translate'

mainDiv.appendChild(header)
contentSection.appendChild(inputTextArea)
contentSection.appendChild(translateBtn)
contentSection.appendChild(outputTextArea)
mainDiv.appendChild(contentSection)

translateBtn.addEventListener('click',(e) => {
    e.preventDefault()
    fetch(`https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${inputTextArea.value}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            outputTextArea.innerText = data.contents.translated
        })
        .catch(e => {
            console.log(e)
        })
})