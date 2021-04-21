var count = 0 ;

function launchTable(x) {
   
    while (count < x){
        for (var columns = 0; columns < 3; columns++) {
            count++;

            if (count > x)
                break;

            if (count == 1 ){ //the first
                $(".lay3").append("<div class='tab' style='pointer-events: none';><div id='plus' ></div></div>");
                continue;
            }
            if ((count) % 3 != 0 ){

                
                $(".lay3").append("<div class='tab'></div>");

            }
            else {
                $(".lay3").append("<div class='tab'><div id='star'></div></div>");

            }
        }
    }
    if ( screen.width < 960){
        $(".tab").width(480);
        $(".tab").height(480);
    }
    else {
        $(".tab").width(320);
        $(".tab").height(320);
    }
    colorBoxes();
}

$(document).on('click', '.tab', function(){
    var plusExist = false;
        $(this).find("div[id^=plus]").each(function() {
        newBox();
        plusExist = true;
        return;
    });

    


    if( !plusExist )
    {
        if ($(this).attr('id') != 'Bun') {

            $(this).css("background-color", "white");
            $(this).attr('id', 'Bun');
        }
        else {
            $(this).removeAttr('id');
            $(this).css("background-color", randColor());
        }
    }

});

function newBox(){


    if ((count%3) != 0 ){

       
        $(".lay3").append("<div class='tab'></div>");

    }
    else {
       
        $(".lay3").append("<div class='tab'><div id='star'></div></div>");
    }

    count++;

    if ( screen.width > 960){
        $(".tab").width(320);
        $(".tab").height(320);
    }
    else {
        $(".tab").width(480);
        $(".tab").height(480);
    }
    colorBoxes();
}



function randColor(){
    //define color bank

    var myColors = [
        '#7F6C8D', '#83A5A6', '#64C3C7', '#BC3946', '#BD3737',
        '#ECF0F1', '#BDC3C7', '#ECF0F1', '#C0392B', '#E74C5E',
        '#D35400', '#E67E22', '#F39C12', '#F1C40A', '#22123f',
        '#2C3E50', '#34495E', '#8E44AD', '#9B70B6', '#2980B9',
        '#3498BD', '#27AA10', '#2EDD71', '#16DE85'
    ];
    var colors = myColors.slice(0);
    var color = Math.floor(Math.random() * colors.length);
    return colors[color];
}


function colorBoxes(){

    $('div.tab').each(function() {

        if ( $(this).css('backgroundColor').toString() == "rgba(0, 0, 0, 0)" ) {
            $(this).css('background-color', randColor());}

    });
}


$(document).ready(function() {
    var str = "Tamir";
    launchTable(str.length*2);
});