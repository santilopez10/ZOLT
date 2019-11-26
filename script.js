function toggleApp(id) {
    var kids = document.getElementById("app").children;
    for(var i = 0; i < kids.length; i++) {
        kids[i].classList.remove("active");
    }
    var newID;
    switch(id) {
        case "1": newID = 1;
        break;
        case "2": newID = 2;
        break;
        case "3": newID = 3;
        break;
        case "4": newID = 0;
        break;
    }

    kids[newID].classList.add("active");
}