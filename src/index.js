import countryCard from './temp/country-card.hbs'
import countriesList from './temp/countries-list.hbs'
import API from './js/fetchCountries.js';

import debounce from 'lodash.debounce';
import { info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';


const refs = {
    cardContainer: document.querySelector('.js-countries-container'),
    searchForm: document.querySelector('.js-search-input')
}

refs.searchForm.addEventListener('input', debounce(onSearch, 500))


function onSearch(e) {
    const searchQuery = refs.searchForm.value;
    API.fetchCountry(searchQuery).then(renderCountry).catch(error => {
    console.log(error)
    })
}

function resetSearch() {
    refs.cardContainer.innerHTML = '';
}

function onFetchErrorManyMatches() {
    error({
        title: 'Too many matches found',
        text: 'Please enter more specific query',
        delay: 2000,
        width: '500px',
    });
}

function onFetchErrorNoResults() {
    info({
        title: 'Invalid name of country entered',
        text: 'Please enter correct query',
        delay: 2000,
        width: '500px',
    });
}

function onSearchReset() {
    refs.cardContainer.innerHTML = ''
}

function renderCountry(country) {    
    const countryMarkup = countryCard(country)
    const countryList = countriesList(country)

    if (country.length > 10) {
        onFetchErrorManyMatches();
    } else if (country.length < 10 && country.length > 1) {
        refs.cardContainer.innerHTML = countryList
    } else if (country.length === 1) {
        refs.cardContainer.innerHTML = countryMarkup;
    } else {
        onFetchErrorNoResults()
        onSearchReset()
    }
}