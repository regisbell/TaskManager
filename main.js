var important = false;
var icon;


function togglePriority() {
    console.log("Clicked");

    if (important == true) {
        icon.removeClass("fas").addClass("far");
        important = false;
    } else {
        icon.removeClass("far").addClass("fas");
        important = true;
    }
}




function init() {
    console.log("Task Manager");
    icon = $("#iPriority");

    //hook events
    icon.click(togglePriority);
}


//load data







window.onload = init;