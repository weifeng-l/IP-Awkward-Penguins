init()

function init() {
    var url = "https://api.covid19api.com/summary"

    var data = ''

    $.get(url, function (data) {
        console.log(data.Global)

        data = `

        <td>${data.Global.TotalConfirmed}</td>
        <td>${data.Global.TotalDeaths}</td>
        <td>${data.Global.TotalRecovered}</td>
        
        `

        $("#data-all").html(data)
    })
}


function refreshData() {
    clearData()
    init()
}
function clearData() {
    $("#data-all").empty()
}


var input = document.querySelector('.input_text');
var recover = document.querySelector('.recover');
var country = document.querySelector('.country');
var cases = document.querySelector('.cases');
var death = document.querySelector('.death');
var button = document.querySelector('.submit')

var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d4f2a7bbb632ebff6eb2a18470ddfb0701612834567");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

button.addEventListener('click', function (name) {
    fetch("https://disease.sh/v3/covid-19/countries/" + input.value + "", requestOptions)
        .then(response => response.json())
        .then(result => {
            var countryValue = result.country;
            var casesValue = result.cases;
            var deathValue = result.deaths;
            var recoverValue = result.recovered;

            country.innerHTML = countryValue;
            cases.innerHTML = casesValue;
            death.innerHTML = deathValue;
            recover.innerHTML = recoverValue;
        })

        .catch(error => console.log('error', error));

});