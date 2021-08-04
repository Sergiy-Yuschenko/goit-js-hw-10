import './css/styles.css';

import Notiflix from "notiflix";

import countryCard from './templates/country-card.hbs';
import countrysListItem from './templates/countrys-list-item.hbs';


const DEBOUNCE_DELAY = 300;

const countryName = 'swaz';

const dataCountrys = null;


//Винести в окремий файл

function fetchCountries(country) {
    return fetch(`https://restcountries.eu/rest/v2/name/${country}?fields=name;capital;population;flag;languages`).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
        return response.json();
  });
}

const fetchCountriesHandler = (country, resultHandler) => fetchCountries(country).then((countries) => resultHandler(countries))
    .catch((error) => resultHandler(error));


fetchCountries(countryName).then((countries) => console.log(countries))
    .catch((error) => console.log(error));

const resultHandler = (result) => {
    console.log(result.length);
    if (result === "Error: 404") {
        Notiflix.Notify.Failure('Oops, there is no country with that name');
    } else if (result.length > 10) {
        Notiflix.Notify.Info('Too many matches found. Please enter a more specific name.');
    } else if (result.length = 1) {
        let languagesList = null;
        if (result[0].languages.length === 1) {
            languagesList = result[0].languages[0].name;
        } else {
            for (let i = 0; i === result.languages.length - 1; i += 1) {
                if (i === 0) {
                    languagesList = result.languages[0].name;
                }
                languagesList = lenguagesList +`, ${result.languages[i].name}`
            }
        }
        const countryCardData = {
            name: data.name,
            flag: data.flag,
            capital: data.capital,
            population: data.population,
            languages: languagesList
        }
        console.log(countryCardData);
    } else {
        const countriesListData = (name) => {
            result.map((data) => {
                const countryListData = {
                    name: data.name,
                    flag: data.flag
                }
                console.log(countryCardData);
            })
        }
    }   
} 


fetchCountriesHandler(countryName, resultHandler);



//Розмітка

const searchBoxEl = document.querySelector('#search-box');

const countryListEl = document.querySelector('#country-list');

const countryInfoEl = document.querySelector('country-info');


// function rendercountriesListEl(countryData) {
//     fgh
// }

let countyData = fetchCountries(countryName);

console.log(countyData);

const countriesListData = (name) => {
    fetchCountries(name).map((data) => {
        return {
            name: data.name,
            flag: data.flag
        }
    })
}



    // ?fields=name;capital;population;flag;languages