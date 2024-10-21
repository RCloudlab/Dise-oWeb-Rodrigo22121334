const divDom = document.getElementById("conta")
const nameDom = document.getElementById("name")
const statusDom = document.getElementById("status")
const locationDom = document.getElementById("location")
const firstSeenInDom = document.getElementById("firstSeenIn")
const logoDom = document.getElementById("logo")


const fetchApiData = async () => {
    const rdm = Math.floor(Math.random() * 300)
    const data = await fetch(`https://rickandmortyapi.com/api/character/`+rdm)
    const json = await data.json()
    const character = json

    logoDom.src = character.image
    nameDom.textContent = character.name
    statusDom.textContent = character.status
    locationDom.textContent = character.location.name
    firstSeenInDom.textContent = character.origin.name

    for (let i = 2; i < 8; i++) {
        const ram = Math.floor(Math.random() * 300)
        const data = await fetch(`https://rickandmortyapi.com/api/character/${ram}`)
        const json = await data.json()
        const character = json

        const cloneDiv = divDom.cloneNode(true)

        const logoDom = cloneDiv.querySelector("#logo");
        const nameDom = cloneDiv.querySelector("#name");
        const statusDom = cloneDiv.querySelector("#status");
        const locationDom = cloneDiv.querySelector("#location");
        const firstSeenInDom = cloneDiv.querySelector("#firstSeenIn");

        logoDom.src = character.image
        nameDom.textContent = character.name
        statusDom.textContent = character.status
        locationDom.textContent = character.location.name
        firstSeenInDom.textContent = character.origin.name

        document.body.appendChild(cloneDiv);
    }

}


fetchApiData()