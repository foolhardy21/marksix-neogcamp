import './style.css'
import header from './Header'
import contentSection from './MainSection'

const mainDiv = document.querySelector('#maindiv')
mainDiv.appendChild(header)
mainDiv.appendChild(contentSection)


const isInputEmpty = input => input.length < 1 ? false : true

const getUrl = input => `https://api.funtranslations.com/translate/navi.json?text=${input}`

const showTranslation = output => {
    document.querySelector('.outputarea').innerText = output
}

const translateText = e => {
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