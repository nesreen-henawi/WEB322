window.onload = function() {
    document.getElementById('home_page_video').play();
    loadCities();
}

function loadCities() {
    var datalist = document.querySelector('.list_of_cities');
  
    for (var i = 0; i < cities.length; i++) {
      var option = createOption(cities[i]);
      datalist.appendChild(option);
    }
  }
  
  function createOption(city) {
    var option = document.createElement('option');
    option.value = city.city;
    return option;
  }