const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getdata (cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=fe25dcf271d24341b17181200240102&q=${cityName}&aqi=yes`);

    return await promise.json()
}


button.addEventListener("click", async () => {
    const value = input.value;
   const result = await getdata(value);
//    console.log(result);
cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`

cityTime.innerText = result.location.localtime;
cityTemp.innerText = result.current.temp_c;

})

// button.addEventListener("click", () => {
//     console.log(input.value);
// })


// http://api.weatherapi.com/v1/current.json?key=fe25dcf271d24341b17181200240102&q=London&aqi=yes