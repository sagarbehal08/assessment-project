var findfood_location=document.getElementById("locate_icon");
if(navigator.geolocation)
{

  // console.log(navigator.geolocation.getCurrentPosition(showPosition));
  navigator.geolocation.getCurrentPosition(showPosition);
}
else {
  alert("Browser Not Supporting");
}
function showPosition(position)
{
  var url1 ="https://api.opencagedata.com/geocode/v1/json?q="+position.coords.latitude+"+"+position.coords.longitude+"&key=d878b010f5d34708bbdde615eafde265";
  console.log(url1);
  var xhr1 = new XMLHttpRequest();
  xhr1.open('GET',url1);
  xhr1.onreadystatechange=test1;
  function test1()
    {
      if(this.status===200 && this.readyState===4)
      {
        var res_data=JSON.parse(this.responseText);
        console.log(typeof res_data);
        console.log(res_data);
        var road=res_data.results[0].components.road;
        findfood_location.innerHTML=road;
      }
    }
    xhr1.send();

    var url2 ="https://developers.zomato.com/api/v2.1/geocode?lat="+position.coords.latitude+"8&lon="+position.coords.longitude+"&apikey=3543d3e430f5a481ecd55147fdae5ddc";
    console.log(url2);
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET',url2);
    xhr2.onreadystatechange=test2;
    function test2()
      {
        if(this.status===200 && this.readyState===4)
        {
          var res_data=JSON.parse(this.responseText);
          console.log(typeof res_data);
          console.log(res_data);
         for(var i=0;i<res_data.nearby_restaurants.length;i++){
          var restaurant=document.createElement("div");
          restaurant.setAttribute("id","restaurant");
          console.log(restaurant);
          document.getElementById("main").appendChild(restaurant);
          console.log(main);

          //--------------------------------------------------------
          if(i%2==0){
           var imagediv=document.createElement("div");
          imagediv.setAttribute("id","imagediv");
          var image=document.createElement("img")
          image.setAttribute("id","rest1_image");
          image.setAttribute("src","https://d1ralsognjng37.cloudfront.net/3a3ade0b-8cf7-46f0-8248-7f8f22ccb016.jpeg");
          imagediv.appendChild(image);
          restaurant.appendChild(imagediv);
          console.log(main);
        }
        else if(i%3==0){
         var imagediv=document.createElement("div");
        imagediv.setAttribute("id","imagediv");
        var image=document.createElement("img")
        image.setAttribute("id","rest1_image");
        image.setAttribute("src","https://duyt4h9nfnj50.cloudfront.net/resized/1534160252557-w550-78.jpg");
        imagediv.appendChild(image);
        restaurant.appendChild(imagediv);
        console.log(main);
      }
        else {
          var imagediv=document.createElement("div");
         imagediv.setAttribute("id","imagediv");
         var image=document.createElement("img")
         image.setAttribute("id","rest1_image");
         image.setAttribute("src","https://d1ralsognjng37.cloudfront.net/12cb3aa0-4552-40e7-8fc2-f83e73325998.jpeg");
         imagediv.appendChild(image);
         restaurant.appendChild(imagediv);
         console.log(main);
        }
          //---------------------------------------------------
          var restro_name=document.createElement("div");
          restro_name.setAttribute("id","restro_name");

          console.log(main);
          var text=document.createElement("h4")
          text.textContent=res_data.nearby_restaurants[i].restaurant.name;
          restro_name.appendChild(text);
          restaurant.appendChild(restro_name);
          console.log(main);

          //--------------------------------------------------------

          var cousin=document.createElement("div");
          cousin.setAttribute("id","cousin");

          console.log(main);
          var cousin_text=document.createElement("p")
          cousin_text.setAttribute("id","cousin_text");
          var str=res_data.nearby_restaurants[i].restaurant.cuisines;
          cousin_text.textContent=str.replace(/,/gi," *");
          cousin.appendChild(cousin_text);
          restaurant.appendChild(cousin);
          console.log(main);

          //----------------------------------------------------------

          var timming_rate=document.createElement("div");
          timming_rate.setAttribute("id","timming_rate");

          console.log(main);
          var timming=document.createElement("p");
          timming.setAttribute("id","timming");
          timming.textContent="45-55 MINS";
          timming_rate.appendChild(timming);
          var rating=document.createElement("p")
          rating.setAttribute("id","rating");
          rating.textContent=res_data.nearby_restaurants[i].restaurant.user_rating.aggregate_rating+" ";
          timming_rate.appendChild(rating);
          var icon=document.createElement("i");
          icon.setAttribute("class","material-icons");
          icon.setAttribute("style","font-size:12px;");
          icon.textContent="start";
          rating.appendChild(icon);
          console.log(rating);
          restaurant.appendChild(timming_rate);
          console.log(main);

          }
        }
      }
    xhr2.send();

// function restro_search()
//     {
//     var url3 ="https://developers.zomato.com/api/v2.1/geocode?lat="+position.coords.latitude+"8&lon="+position.coords.longitude+"&apikey=3543d3e430f5a481ecd55147fdae5ddc";
//     console.log(url3);
//     var xhr3 = new XMLHttpRequest();
//     xhr3.open('GET',url3);
//     xhr2.onreadystatechange=test3;
//     function test3()
//       {
//         if(this.status===200 && this.readyState===4)
//         {
//           var res_data=JSON.parse(this.responseText);
//           console.log(typeof res_data);
//           console.log(res_data);
//         }
//       }
//     }
}
