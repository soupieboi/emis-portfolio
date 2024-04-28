document.addEventListener("DOMContentLoaded", function (){
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".dropdown-menu");

// Spotify web playback SDK quickstart
var client_id = 'CLIENT_ID';
var redirect_uri = 'http://localhost:3000/callback';

var app = express();

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  var scope = 'user-read-private user-read-email';

  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});


// Mount an EventListener to the DOM that waits for a click on the burger
    burger.addEventListener("click", () => {
        // Toggle the class on the burger element on a click Event
        burger.classList.toggle("active");

        // showMenu is a type boolean variable ( True or false ) which you can see when you hover over it
        // showMenu is True if the element has a class called "show" 
        const showMenu = menu.classList.contains("show");
        
        // Based on the value of showMenu it will toggle the classes on the menu for animations
        // The setTimeout() Function is used to well.. set a timeout :P, otherwise the visibility would be toggled before the animation has finished.
        if (showMenu){
            menu.classList.remove('slide-in')
            setTimeout(() => menu.classList.remove("show"), 300);

        } else {
            menu.classList.add("show")
            setTimeout(() => menu.classList.add('slide-in'), 10)
        };
    });
    
function updateDateTime() {
    var now = new Date();
    var dateTimeString = now.toLocaleString();
    document.getElementById('datetime').innerHTML = dateTimeString;
}
setInterval(updateDateTime, 1000);
updateDateTime();

});

function thankMessage() {
    alert("Thank you for submitting the form!");
    return true; // Allow form submission
}