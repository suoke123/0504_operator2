$(function(){

    $("button").click(function(){

        var data1 = parseInt($("#data1").val());
        var data2 = parseInt($("#data2").val());
        var res = data1 % data2;
        $("#res").text(res);

    })

});
