function getLinkedInInfo(){
        IN.Event.on(IN, "auth", getProfileData);  
    function getProfileData() { 
        IN.API.Profile("me").fields("first-name", "last-name", "headline", "location", "summary", "picture-url", "public-profile-url", "email-address").result(displayProfileData).error(onError);
        IN.API.Profile("me").fields("positions").result(displayPositionData).error(onError1);
    }
    function displayProfileData(data){
        console.log(data);
         
    }
    function displayPositionData(data){
        console.log(data);
        
    }
    function onError(error) {
        console.log(error);
    }
    function onError1(error) {
        console.log(error);
    }
    function logout(){
        IN.User.logout(removeProfileData);
    }
}
    
function getFacebookInfo(){	

      window.fbAsyncInit = function() {
          FB.init({
            appId      : '1388924547901610',
            cookie     : true,
            xfbml      : true,
            version    : 'v2.11'
          });
            
          
          FB.getLoginStatus(function(response) {
              statusChangeCallback(response);
          }); 
            
        };
    	function checkLoginState() {
    	      FB.getLoginStatus(function(response) {
    	        statusChangeCallback(response);
    	      });
        }
        (function(d, s, id){
           var js, fjs = d.getElementsByTagName(s)[0];
           if (d.getElementById(id)) {return;}
           js = d.createElement(s); js.id = id;
           js.src = "https://connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
         }(document, 'script', 'facebook-jssdk'));

        function statusChangeCallback(response){
          if(response.status === 'connected'){
            console.log('logged in');
            document.getElementById("fbBtn").style.display = "none";
            testAPI();
          } else {
            document.getElementById("profileButton").style.backgroundColor = "red";
          }
        }

        function testAPI(){
          FB.api('/me?fields=name,email,birthday,education,work', function(response){
            if(response && !response.error){
            	console.log(response);
            }
          })
        }

        
}
