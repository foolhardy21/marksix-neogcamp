function createHeader() {
    let header = document.createElement('header')
    header.className = 'headerdiv'
    header.innerText = 'banana talk'

    return header
}
const header = createHeader()
export { header }
