    /*global object for all content*/

function appendData(item){

    var content=$("#content_append_data");
    if(item==0){
        $.ajax({
            url: "../templates/menus/craft_your_newsletter.html",
            cache: false,
            dataType: "html",
            success: function(data) {
                content.html(data);
            }
        });

       // content.load("../templates/menus/craft_your_newsletter.html");
    }else if(item==1){
        content.load("../templates/menus/interviu.html");
    }else if(item==2){
        content.load("../templates/menus/top_news.html");
    }else if(item==3){
        content.load("../templates/menus/on_the_move.html");
    }else if(item==4){
        content.load("../templates/menus/coronavirus.html");
    }else if(item==5){
        content.load("../templates/menus/statistici.html");
    }else if(item==6){
        content.load("../templates/menus/market_trnds.html");
    }else if(item==7){
        content.load("../templates/menus/evenimente.html");
    }else if(item==8){
       
        content.load("../templates/menus/builder.html");
    }


}



