import './style.css'
import { header } from './Header'
import { contentSection } from './MainSection'

const mainDiv = document.querySelector('#maindiv')
mainDiv.appendChild(header)
mainDiv.appendChild(contentSection)


function isInputEmpty(input) {
    return (input.length < 1) ? false : true
}
//fake api used to avoid unwanted calls
function getUrl(input) {
    return `https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=${input}`
}

function showTranslation(output) {
    document.querySelector('.outputarea').innerText = output
}

function translateText(e) {
    e.preventDefault()
    const input = document.querySelector('.inputarea').value
    if( !isInputEmpty(input) ) {
        window.alert('Enter something')
    } else {
        fetch(getUrl(input))
            .then(response => {
                return response.json()
            })
            .then(data => {
                showTranslation(data.contents.translated)
            })
            .catch(e => {
                console.log(e)
            })
    }
}

document.querySelector('.btn').addEventListener('click', translateText)