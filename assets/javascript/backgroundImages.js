// pexels


var queryURL = "https://api.unsplash.com/users/kellysikkema/collections?client_id=c970dc76f602cc4e3a00b5108b19b36c937b43f31109a0709eaa0d2bd66f1b6f";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(imageResponse){
  for (var i = 0; i < imageResponse.length; i++) {
    var currentObj = imageResponse[i]["preview_photos"];
    for(var j = 0; j < currentObj.length; j++) {      
      arr.push(currentObj[j].urls.full)
    }
  }

  var backgroundImage = Math.floor(Math.random() * arr.length);

  $('body').css('background','url(' + arr[backgroundImage] + ') center');
  $('body').css('background-size', 'cover');

  $('body').css('background-repeat', 'no-repeat');  

}, 
function(errorObject) {
 

});