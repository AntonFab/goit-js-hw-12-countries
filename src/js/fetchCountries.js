// const f = fetch('https://restcountries.eu/rest/v2/name/ukraine')

// f.then(response => {
//     return response.json()
// }).then(country => {
//     console.log(country)
//     const markUp = countryCard(f)
//     console.log(markUp)
// }).catch(error => {
//     console.log(error)
// })

// const BASE_URL = 'https://restcountries.eu/rest/v2/name'

// function fetchCountry(country) {
//     return fetch(`${BASE_URL}/${country}`)
//         .then(response => {
//             return response.json();
//         })
// };
// export default { fetchCountry };


const BASE_URL = 'https://restcountries.eu/rest/v2/name'

function fetchCountry(countryName) {
  return fetch(`${BASE_URL}/${countryName}`).then(response => {
    return response.json()
})
}

export default { fetchCountry };