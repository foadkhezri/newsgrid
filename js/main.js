if (window.location.href == "http://127.0.0.1:5500/about.html") {
    document.getElementById("about").style.backgroundColor = "#b83b5e";
    document.getElementById("about").style.color = "#fff";
    document.getElementById("home").style.backgroundColor = "#eeeeee";
    document.getElementById("home").style.color = "#000";
}
else if (window.location.href == "http://127.0.0.1:5500/index.html") {
    document.getElementById("about").style.backgroundColor = "#eeeeee";
    document.getElementById("about").style.color = "#000";
    document.getElementById("home").style.backgroundColor = "#b83b5e";
    document.getElementById("home").style.color = "#fff";
}

else {
    document.getElementById("about").style.backgroundColor = "#eeeeee";
    document.getElementById("about").style.color = "#000";
    document.getElementById("home").style.backgroundColor = "#eeeeee";
    document.getElementById("home").style.color = "#000";
}