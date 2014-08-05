$(document).ready(function() {
    $(".ryu").mouseenter(function() {
        console.log("mouse entered .ryu div");
        $(".ryu-still").hide();
        $(".ryu-ready").show();
        $(".ryu-cool").hide();
    })

    .mouseleave(function() {
        console.log("mouse left");
        $(".ryu-still").show();
        $(".ryu-ready").hide();
        $(".ryu-cool").hide();
    })

    .mousedown(function() {
        console.log("mousedown");
        playHadouken();
        $(".ryu-ready").hide();
        $(".ryu-throwing").show();
        $(".ryu-cool").hide();
        $(".hadouken").finish().show()
        .animate(
            {"left":"900px"},500,
            function() {
            $(this).hide();
            $(this).css("left", "540px");
        })
        //play sound
        //animate fireball to right
    })

    .mouseup(function() {
        console.log("mouseup");
        $(".ryu-throwing").hide();
        $(".ryu-ready").show();
        $(".ryu-cool").hide();
        //ryu goes back to ready
    })
   
    .keydown(function() {
        var x = jQuery.Event("keydown");
        x.which = 88; // # Some key code value
        $("input").trigger(x);
        alert("key is down");
        $(".ryu-ready").hide();
        $(".ryu-still").hide();
        $(".ryu-cool").show();
    });    

    //be cool at the end
    //hide ready and still poses when x is pressed 
    //show cool pose when x is pressed images/ryu-cool.gif
    //when x is released, go back to still pose
    
    //test
    $("input").keydown(function() {
        $("input").css("background-color","grey");
        // IF keydown = 88 show ryucool
        //alert("text is in");
        //if (input == "88") {
        $(".ryu-ready").hide();
        $(".ryu-still").hide();
        $(".ryu-cool").show();
        // };
    });

    function playHadouken() {
        $("#hadouken-sound")[0].volume = 0.5;
        $("#hadouken-sound")[0].load();
        $("#hadouken-sound")[0].play();
    };

});
