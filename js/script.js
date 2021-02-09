var settings = {
    "url": "https://disease.sh/v3/covid-19/countries/sg",
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Cookie": "__cfduid=d4f2a7bbb632ebff6eb2a18470ddfb0701612834567"
    },
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });