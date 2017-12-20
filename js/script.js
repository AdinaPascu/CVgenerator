var noLinkedIn = document.getElementById("noLinkedIn");
IN.Event.on(IN, "auth", getProfileData);  
    function getProfileData() { 
        IN.API.Profile("me").fields("first-name", "last-name", "headline", "location",
         "industry", "positions", "specialties", "picture-urls::(original)","summary", 
         "public-profile-url", "email-address").result(displayProfileData).error(onError);
        noLinkedIn.style.display = "none";
    }
    function displayProfileData(data){
        document.getElementById("name").innerHTML = data.values[0].firstName + " " + 
        data.values[0].lastName;
        document.getElementById("jobAppliedFor").innerHTML = data.values[0].headline;
        var myImage = new Image();
            myImage.src = data.values[0].pictureUrls.values[0];
                if (myImage.width <= myImage.height){
                    preview.style.maxWidth = "200px";
                    preview.style.height = "auto";
                } else {
                    preview.style.maxHeight = "200px";
                    preview.style.weight = "auto";
                }
        document.getElementById("mypic").setAttribute("src", myImage.src);
        document.getElementById("contactEmailInfo").innerHTML = data.values[0].emailAddress;

         
    }
    function onError(error) {
        console.log(error);
    }


noLinkedIn.addEventListener("click", function(){
    noLinkedIn.style.display = "none";
    document.getElementsByClassName("IN-widget")[0].style.display = "none";
});

var MyAdd = {
        language: 0,
        communicationsSkill: 0,
        jobRelatedSkill: 0,
        otherSkill: 0,
        education: 0,
        experience: 0,
        award: 0,
        personalProject: 0,
        range: 0,
    }

document.getElementById("main").addEventListener("click", function(e){
    //select period for education and work experience
    if (e.target.className.startsWith("select")){
        selectPeriod(e);
    } else if(e.target.id == "contactAddressIcon"){
    //select contact address
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var long = position.coords.longitude;
            var root = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
                fetch(
                 root + lat + ',' + long + '&key=AIzaSyBAcmAOF-u06eaf_3jKV5m7IHElYVjUWrg', {
                 method: 'GET'
                }).then(function(response){
                return response.json();
                }).then(function(jsonResp) {
                    var street = jsonResp.results[0].address_components[1].long_name;
                    var city = jsonResp.results[0].address_components[2].long_name;
                    var county = jsonResp.results[0].address_components[4].long_name;
                    var country = jsonResp.results[0].address_components[5].long_name;
                    var address = street + ', ' + city + ', ' + county + ', ' + country;
                    document.getElementById("contactAddressInfo").innerHTML = address;
                });
            });
        }
    } else if (e.target.id.startsWith("profileGender")){
    //select gender
        var female = document.getElementById("profileGenderFemale");
        var male = document.getElementById("profileGenderMale");
        if (e.target.id == "profileGenderFemale"){
            male.style.display = "none";
        } else {
            female.style.display = "none";
        }
    } else if (e.target.className.startsWith("no")){
    //delete div
        var parent = document.getElementById(e.target.parentNode.parentNode.id);
        parent.style.display = "none";
    //add div
    } else if (e.target.className.startsWith("add")){
        console.log(e);
        var parentId = e.target.parentNode.parentNode.id;
        var parent = document.getElementById(parentId);
        if (e.target.parentNode.parentNode.className.endsWith("skill")){
            var firstParentId = e.target.parentNode.parentNode.parentNode.childNodes[1].id;
            console.log(firstParentId);
        } else {
            var firstParentId = e.target.parentNode.parentNode.parentNode.childNodes[3].id;
        }
        var newParent = parent.cloneNode(true);
        MyAdd[firstParentId]++;
        newParent.id = firstParentId + MyAdd[firstParentId];
        if(firstParentId == "language"){
            var firstRangeId = e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].id;
            MyAdd[firstRangeId]++;
            newParent.childNodes[3].id = firstRangeId + MyAdd[firstRangeId];
            }
        parent.parentNode.appendChild(newParent);


    }

});
























// Facebook callback, after LinkedIn call


// window.fbAsyncInit = function() {
//           FB.init({
//             appId      : '1388924547901610',
//             cookie     : true,
//             xfbml      : true,
//             version    : 'v2.11'
//           });
            
          
//           FB.getLoginStatus(function(response) {
//               statusChangeCallback(response);
//           }); 
            
//         };
//         function checkLoginState() {
//               FB.getLoginStatus(function(response) {
//                 statusChangeCallback(response);
//               });
//         }
//         (function(d, s, id){
//            var js, fjs = d.getElementsByTagName(s)[0];
//            if (d.getElementById(id)) {return;}
//            js = d.createElement(s); js.id = id;
//            js.src = "https://connect.facebook.net/en_US/sdk.js";
//            fjs.parentNode.insertBefore(js, fjs);
//          }(document, 'script', 'facebook-jssdk'));

//         function statusChangeCallback(response){
//           if(response.status === 'connected'){
//             console.log('logged in');
//             document.getElementById("fbBtn").style.display = "none";
//             testAPI();
//           } else {
//           }
//         }

//         function testAPI(){
//           FB.api('/me?fields=education,work', function(response){
//             if(response && !response.error){
//                 console.log(response);
//                 var education = document.getElementById("education");
//                 var school = education.getElementsByClassName("educationDetails");
//                 console.log(education);
//                 console.log(school[0].childNodes[3].childNodes[1].innerHTML);
//                 for(var i = 0; i<response.education.length; i++){
//                     if (i == 0){
//                         school[0].childNodes[3].childNodes[1].innerHTML = response.education[i].school.name;
//                     }
//                 }

//             }
//           })
//         }