
$(".list-menu__ a").on("click", function() {
    $(".list-menu__ a").removeClass("active");
    $(this).addClass("active");
  });


  $('#menu-2').hide();
  $('#menu-3').hide();
function showContent(getNumber){
  if(getNumber==1){
    $('#menu-1').show();
    $('#menu-2').hide();
    $('#menu-3').hide();
  }else if(getNumber==2){
    $('#menu-1').hide();
    $('#menu-2').show();
    $('#menu-3').hide();
  }else if(getNumber==3){
    $('#menu-1').hide();
    $('#menu-2').hide();
    $('#menu-3').show();
  }else if(getNumber==4){
    
  }
}

var globalNews;
$("#submitSelectNews").click(function(e){
  var news_to_add=$("#news_to_add").val();
  e.preventDefault();
  $(".add_news").html("");
  $.ajax({
    url: "../api/selectLastNews.php?news_number="+news_to_add, 
    success: function(result){
      
      result=JSON.parse(result);
      console.log( result);
      globalNews=result;
      for(i=0;i<result.length;i++){
       var data=JSON.stringify(result[i]);
       
        $(".add_news").append(`<div class="content_news__">
        <div class="row">
          <div class="col-md-2">
          
          <img class="imagine_news" src="`+result[i].imagine_lead+`"/>
          </div>
          <div class="col-md-10">
          <p class="content_news"><b>`+result[i].titlu+`</b></br>
            `+result[i].lead+`
          </p>
          <a  id="add_`+result[i].ID_articol+`" onclick="addNewsObject('#add_`+result[i].ID_articol+`','`+result[i].ID_articol+`')" class="btn btn-primary move-left-button" >ADD</a>
          </div>
        
        </div>
        </div>`);
      }
      
     }
     
  });
});
$(".move-left-button").click(function(e){
 
  e.preventDefault();
 
});

var sendToQueueNews=[];
function addNewsObject(ID_NEWS,objectNews){
$(ID_NEWS).css("background-color","#f15454");
  console.log(objectNews,ID_NEWS);
  for(i =0;i<globalNews.length;i++){
    
    if(globalNews[i].ID_articol==objectNews){
      sendToQueueNews.push(globalNews[i]);
      console.log(sendToQueueNews);
    }
  }
 
}
$("#createTemplate-news").click(function(e){
  
  e.preventDefault();
  var username="6d12ff27-0474-4edf-87dc-daaed23249c3";
  var password="f6808b17-c354-46d0-941f-496e72092e59";
  var data=createTemplate(globalNews);
  console.log(data);
  $.ajax({
    url: "https://api.mjml.io/v1/render", 
    type:"POST",
    data:JSON.stringify({"mjml":data}),
    beforeSend: function (xhr) {
      xhr.setRequestHeader ("Authorization", "Basic " + btoa(username + ":" + password));
    },
    success: function(result){
      //console.log(result);
      $("#appened_data").html(result.html);
    }
     
  });


  

});


function createTemplate(objectToiterate){

  var newsletter="";

  var header=`<mjml>
  <mj-body background-color="#d6dde5" id="iozh">
    <mj-section background-color="#fa8739" padding-bottom="0px" padding-top="0" id="iy6i7">
      <mj-column width="200px" id="iewfh">
      </mj-column>
    </mj-section>
    
    `;
    newsletter=header;
    for( i=0;i<objectToiterate.length-1;i++){
      console.log(objectToiterate[i].titlu);
      var content=`

      <mj-section background-color="#fff" padding-bottom="20px" id="ibsi3">
        <mj-column vertical-align="bottom" id="ihlap">
          <mj-image src=  "https://louisem.com/wp-content/uploads/2017/07/facebook-link-thumbnail-2017.jpg" alt="Chesterk tank" border="none" width="209px" padding-left="0px" padding-right="0px" padding-bottom="20px" padding-top="30px" id="i4gfg"/>
          <mj-text font-weight="bold" color="#000" font-size="15px" padding-bottom="0" padding-top="0" __="1" id="i7r0x">
          `+objectToiterate[i].titlu+`
          </mj-text>
          <mj-text  color="#000" font-size="15px" padding-bottom="0px" padding-top="0" __="1" id="iphjc">
           `+objectToiterate[i].lead+`
          </mj-text>
          <mj-button background-color="#fa8739" color="#fff" padding="15px 30px" href="https://mjml.io" padding-top="0" id="ic5px">BUY NOW
          </mj-button>
        </mj-column>
        <mj-column vertical-align="bottom" id="ihlap">
        <mj-image src="https://louisem.com/wp-content/uploads/2017/07/facebook-link-thumbnail-2017.jpg" alt="Chesterk tank" border="none" width="209px" padding-left="0px" padding-right="0px" padding-bottom="20px" padding-top="30px" id="i4gfg"/>
        <mj-text font-weight="bold" color="#000" font-size="15px" padding-bottom="0" padding-top="0" __="1" id="i7r0x">
        `+objectToiterate[i+1].titlu+`
        </mj-text>
        <mj-text  color="#000" font-size="15px" padding-bottom="0px" padding-top="0" __="1" id="iphjc">
         `+objectToiterate[i+1].lead+`
        </mj-text>
        <mj-button background-color="#fa8739" color="#fff" padding="15px 30px" href="https://mjml.io" padding-top="0" id="ic5px">BUY NOW
        </mj-button>
      </mj-column>
        </mj-section>
    `;
    newsletter+=content;
    }
  
  
    var footer=`
    
    <mj-section background-color="#fa8739" padding-bottom="0px" padding-top="0" id="ihb2z">
    </mj-section>
    <mj-section background-color="#2f323b" padding-bottom="0px" padding-top="0" id="i6ows">
    </mj-section>
    <mj-section background-color="#fa8739" padding-bottom="0px" padding-top="0" id="iep7h">
    </mj-section>
    <mj-section background-color="#fa8739" padding-bottom="20px" padding-top="0" id="i98nk">
      <mj-column>
        <mj-text align="center" color="#fff" padding-bottom="0px" padding-top="0" id="i46rk">
          <p>
            <a href="https://mjml.io" style="text-decoration: none; color: inherit;">Privacy policy</a>
          </p>
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section padding-bottom="20px" padding-top="0px" id="it0j9">
    </mj-section>
  </mj-body>
  </mjml>`;
    
  newsletter=newsletter+footer;
    return newsletter;
}
  
  