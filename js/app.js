$(document).ready(function() {
    $(".ryu").mouseenter(function() {
        console.log("mouse entered .ryu div");
        $(".ryu-still").hide();
        $(".ryu-ready").show();
    })
    .mouseleave(function() {
        console.log("mouse left");
        $(".ryu-still").show();
        $(".ryu-ready").hide();
    })
    .mousedown(function() {
        console.log("mousedown");
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        $(".hadouken").finish().show()
        .animate(
            {"left":"900px"},500,
            function() {
            $(this).hide();
            $(this).css("left", "540px");
        }
    );
                 
        //play sound
        //animate fireball to right
        })
    .mouseup(function() {
        console.log("mouseup");
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
        //ryu goes back to ready
        });
});