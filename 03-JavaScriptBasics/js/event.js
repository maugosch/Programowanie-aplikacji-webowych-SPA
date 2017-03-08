var click = 0;
function clicked() {
    "use strict";
    
    
    document.getElementById('message').innerHTML = "You clicked the button " + click + " times";
    click += 1;
}

