      const apikey="3865fd44a0b8dc9c86d1095ab895e4eb"

const   apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric"

   const searchbox=document.querySelector(".search input");

   const searchbtn= document.querySelector(".search button");

   const icon= document.querySelector(".weather-icon");



async function checkwhether (city) {
              const response= await fetch( apiurl+`&q=${city}`+`&appid=${apikey}`);
              var data = await response.json();
              console.log(data);

      document.querySelector(".city").innerHTML= data.name;
      document.querySelector(".temp").innerHTML= Math.round(data.main.temp ) +"°C";
      document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
      document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

      if(data.weather[0].main =="Clouds"){
            icon.src="images/clouds.png"
      }
       else if(data.weather[0].main =="Clear")
       { icon.src="images/clear.png"}
       else if(data.weather[0].main =="Drizzle")
        { icon.src="images/drizzle.png"}
       else if(data.weather[0].main =="Mist")
        { icon.src="images/mist.png"}
       else if(data.weather[0].main =="Rain")
        { icon.src="images/rain.png"}
       else if (data.weather[0].main =="Snow")
        { icon.src="images/snow.png"}

}



  searchbtn.addEventListener("click",()=>{
    checkwhether(searchbox.value);
  })































