function addButton() {
    var raw = document.getElementById('raw-url');
    if (raw){
        var a = document.createElement('a');
        a.setAttribute("href", "https://rawgit.com"+raw.getAttribute('href').replace('raw/', ''));
        a.className = "btn btn-sm";
        a.appendChild(document.createTextNode("RawGit"));
        raw.parentNode.insertBefore(a, raw.nextSibling);
    }
}

var oldLocation = location.href;
setInterval(function() {
    if(location.href != oldLocation) {
        addButton();
        oldLocation = location.href
    }
}, 1000);

addButton();