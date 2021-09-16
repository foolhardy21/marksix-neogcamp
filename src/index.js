import './style.css'

const mainDiv = document.querySelector('#maindiv')


const header = document.createElement('div')
header.className = 'headerdiv'
header.innerText = 'banana talk'

const inputTextArea = document.createElement('textarea')
const outputTextArea = document.createElement('textarea')
const translateBtn = document.createElement('button')
translateBtn.innerText = 'Translate'

mainDiv.appendChild(header)
mainDiv.appendChild(inputTextArea)
mainDiv.appendChild(translateBtn)
mainDiv.appendChild(outputTextArea)

translateBtn.addEventListener('click',(e) => {
    e.preventDefault()
    fetch(`https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${inputTextArea.value}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(e => {
            console.log(e)
        })
})