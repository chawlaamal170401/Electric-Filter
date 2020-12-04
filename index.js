for(var i=0; i<32; i++){
    $(".plus"+i).css("color","orange");
    $(".plus"+i).css("position","relative");
    $(".plusb"+i).css("color","orange");
    $(".plusb"+i).css("position","absolute");
}

for(var i =1; i<=10; i++){
    $(".charge"+i).css("color","red");
    $(".charge"+i).css("position","absolute");
    $(".chargeb"+i).css("color","lightblue");
    $(".chargeb"+i).css("position","absolute");
}

$(".electrode").click(function(){
    $(".plus").show(2000);
    $(".plusb").show(2000);
    $(".arrow1").show(5000);
    $(".clean").show(5000);
    for(var i=0; i<32; i++){
        $(".plus"+i).show(2000);
        $(".plusb"+i).show(2000);
    }
    for(var i=1; i<=10; i++){
        $(".charge"+i).hide(2000);
        $(".chargeb"+i).show(5000);
        $(".arrow").hide(1000);
        $(".clean1").hide(1000);
        $(".charge").hide(1000);
    }
    for(var i=1; i<4; i++){
        $(".plusc"+i).show(2000);
    }
});
$(window).bind("load", function(){
    $(".plus").hide();
    $(".plusb").hide();
    $(".arrow1").hide();
    $(".clean").hide();
    for(var i=0; i<32; i++){
        $(".plus"+i).hide();
        $(".plusb"+i).hide();
    }
    for(var i=1; i<=10; i++){
        $(".chargeb"+i).hide();
    }

    for(var i=1; i<4; i++){
        $(".plusc"+i).hide();
    }
});