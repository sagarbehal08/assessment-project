var text = ["Hungry?", "Cooking gone wrong?", "Late night at office?","Movie marathon?","Late night?","Unexpected guests?"];
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1000);
function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

var index_location=document.getElementById("mainsearch");

function getlocation()
{
   if(navigator.geolocation)
   {

     // console.log(navigator.geolocation.getCurrentPosition(showPosition));
     navigator.geolocation.getCurrentPosition(showPosition);
   }
   else {
     alert("Browser Not Supporting");
   }

}
function showPosition(position)
{
  // alert("a");
   var url = "https://developers.zomato.com/api/v2.1/cities?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&apikey=3543d3e430f5a481ecd55147fdae5ddc"
  // alert("url");
  var url1 ="https://api.opencagedata.com/geocode/v1/json?q="+position.coords.latitude+"+"+position.coords.longitude+"&key=d878b010f5d34708bbdde615eafde265";
  console.log(url);
  console.log(url1);
  var xhr = new XMLHttpRequest();
  var xhr1 = new XMLHttpRequest();
  xhr.open('GET',url);
  xhr1.open('GET',url1);
  xhr.onreadystatechange=test;
  xhr1.onreadystatechange=test1;
    function test()
    {
      if(this.status===200 && this.readyState===4)
      {
        var res_data=JSON.parse(this.responseText);
        console.log(typeof res_data);
        console.log(res_data);
        var flag=res_data.location_suggestions[0].country_flag_url;
        var country_flag=document.getElementById("country_flag");
        country_flag.setAttribute('src',flag);
        // var city_name=res_data.location_suggestions[0].name;
        // var country_name=res_data.location_suggestions[0].country_name;
        // var state_name=res_data.location_suggestions[0].state_name;
        // index_location.value=city_name+", "+country_name;
        // findfood_location.innerHTML=city_name+", "+country_name;
      }
    }
    function test1()
    {
      if(this.status===200 && this.readyState===4)
      {
        var res_data=JSON.parse(this.responseText);
        console.log(typeof res_data);
        console.log(res_data);
        // var flag=res_data.location_suggestions[0].country_flag_url;
        // var country_flag=document.getElementById("country_flag");
        // country_flag.setAttribute('src',flag);
        // var city_name=res_data.location_suggestions[0].name;
        // var country_name=res_data.location_suggestions[0].country_name;
        var location=res_data.results[0].formatted;
        index_location.value=location;//city_name+", "+country_name;
        // findfood_location.innerHTML=city_name+", "+country_name;
      }
    }

  xhr.send();
  xhr1.send();


  }
