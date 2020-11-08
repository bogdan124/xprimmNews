
function createRequestServer(listNews,news_to_add){
   
   return $.ajax({
      url: "../api/selectLastNews.php?news_number="+news_to_add+"&compare_num=121", 
      type:"POST",
      data:{"news":listNews},
      success: function(result){
        
        result=JSON.parse(result);
        //console.log( result);
        globalNews=result;
        
        for(i=0;i<result.length;i++){
         var data=JSON.stringify(result[i]);
         
          $(".add_news").append(`<li class="content_news__ ui-state-default" id="articol_`+result[i].ID_articol+`">
          <div class="row">
            <div class="col-md-2">
            <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>
            <img class="imagine_news" src="`+result[i].imagine_lead+`"/>
            </div>
            <div class="col-md-10">
            <p class="content_news"><b>`+result[i].titlu+`</b></br></p>
            <a  id="add_`+result[i].ID_articol+`" onclick="addNewsObject('#add_`+result[i].ID_articol+`','`+result[i].ID_articol+`')" class="ui primary button move-left-button" >ADD</a>
            <a  class="ui red button">Remove</a>
            </div>
          
          </div>
          </li>`);
        }
        /*  <p class="content_news"><b>`+result[i].titlu+`</b></br>
              `+result[i].lead+`
            </p>*/
       
       }
       
    });

    
  }