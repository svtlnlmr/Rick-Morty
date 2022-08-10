fetch('https://rickandmortyapi.com/api/character/')
    .then((res) => res.json())
    .then((data) => createCard(data));

function createCard({ results }) {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
        <div class="container"></div>
            <div class="card">${setHeroesInfo(results)}</div>
`
    );
}

function setHeroesInfo(results) {
    return results.map(
        (hero) =>`
        <h1>${hero.name}</h1>
        <p>${hero.species} -- ${hero.status}</p>
        <p>${hero.location.name}</p>
        <img src="${hero.image}" width="" height="" alt="">
        `
    );
}