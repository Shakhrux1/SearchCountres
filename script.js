let div = document.querySelector('#div'),
    aaa = document.querySelector('.aa');
div.addEventListener('click', () => {
    aaa.classList.toggle('aaa')
});

const search = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
};

const baruzer = (countries) => {
    let resalt = document.querySelector('#product-list');
    resalt.innerHTML = ''; 
    countries.forEach(country => {
        let divs = document.createElement('div');
        divs.className = 'divs';
        const imgs = document.createElement("img");
        imgs.src = country.flags.png;
        imgs.className = "imgs";
        const names = document.createElement('h1');
        names.innerHTML = country.name.common;
        const namess = document.createElement('h2');
        namess.innerHTML = country.languages ? Object.values(country.languages).join(", ") : "Tili yoq";
        const h6 = document.createElement('h3');
        h6.innerHTML = `Region: ${country.region}`;
        divs.appendChild(imgs);
        divs.appendChild(names);
        divs.appendChild(namess);
        divs.appendChild(h6);
        resalt.appendChild(divs);
    });
};

const regions = ['Europe', 'Asia', 'Africa', 'Antarctic', 'Oceania', 'Americas'];

const h2 = document.querySelector('#div h2'); 
const europe = async (region) => {
    const countries = await search(); 
    let filteredCountries = countries.filter(country => country.region.includes(region));
     baruzer(filteredCountries);
    aaa.classList.remove('aaa');
    
    h2.innerHTML = ''; 
    h2.innerHTML = region;
};




const inp = document.querySelector('.input');

inp.addEventListener('input', async (event) => {
    const searchValue = event.target.value.toLowerCase();
    let countries = await search();
    let filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchValue));
    baruzer(filteredCountries);
});

const hamma = async () => {
    let hammasi = await search();
    baruzer(hammasi);
};

hamma(); 


const ser = document.querySelector('.SER');
const toggleBtn = document.querySelector(".suns");
const p = document.querySelector('.sun p');


document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
        document.body.classList.add("dark");
        toggleBtn.src = "./mos.png";
        p.innerHTML = "DARK";
        ser.src = './aaaaa.png';
    } 
    toggleBtn.addEventListener("click", () => {
        const Dark = document.body.classList.toggle("dark");
        toggleBtn.src = Dark ? "./mos.png" : "./002-sun.png";
        ser.src = Dark ? './aaaaa.png' : './icons8-search-50.png';
        p.innerHTML = Dark ? "DARK" : "LIGHT";
        localStorage.setItem("theme", Dark ? "dark" : "light"); 
    });
});


