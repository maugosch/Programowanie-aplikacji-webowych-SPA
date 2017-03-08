function day() {
    "use strict";
    var today = new Date().toDateString();
    confirm(today); //jshint ignore:line
}

document.getElementById('button').onclick = day;
