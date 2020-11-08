    
var globalNews;
$("#submitSelectNews").click(function(e){
  var word=$("#word").val();
  e.preventDefault();
  $(".add_news").html("");
  $.ajax({
    url: "../api/searchNewsletter.php?search="+word, 
    success: function(result){
        //console.log( result);
      result=JSON.parse(result);
     // console.log( result);
      globalNews=result;
      for(i=0;i<result.length;i++){
       var data=JSON.stringify(result[i]);
       
        $(".add_news").append(`<div class="content_news__ list-group-item">
        <div class="row">
          <div class="col-md-2">
          
          <img class="imagine_news" src="`+result[i].imagine_lead+`"/>
          </div>
          <div class="col-md-10">
          <p class="content_news"><b>`+result[i].titlu+`</b></br>
            `+result[i].lead+`
          </p>
          <a  id="add_`+result[i].ID_articol+`" onclick="addObjectCraft('#add_`+result[i].ID_articol+`','`+result[i].ID_articol+`')" class="ui primary button move-left-button" >ADD</a>
          
          </div>
        
        </div>
        </div>`);
      }
      
     }
     
  });
});

$("#open_modal").click(function(e){
    $('#modal_look').modal('show');
});

var sendToQueueNews=[];
function addObjectCraft(ID_NEWS,objectNews){
$(ID_NEWS).css("background-color","#f15454");
  console.log(objectNews,ID_NEWS);
  for(i =0;i<globalNews.length;i++){
    
    if(globalNews[i].ID_articol==objectNews){
        addListNews(globalNews[i]);
      sendToQueueNews.push(globalNews[i]);
      console.log(sendToQueueNews);

    }
  }
 
}

function addListNews(listAdd){
    console.log(listAdd);
    $("#appendData").append(`<div class="item" id="listAdd_`+listAdd.ID_articol+`">
                      
                      <div class="content">
                        <a class="header">`+listAdd.titlu+`</a>
                        <div class="description"> <a class="ui red button" onclick="removeArticol('#listAdd_`+listAdd.ID_articol+`',`+listAdd.ID_articol+`)">Remove</a></div>
                      </div>
                    </div>`);
}


function removeArticol(whatToDelete,ID_articol){
    $(whatToDelete).html("");
    for(i=0;i<sendToQueueNews.length;i++){
        if(sendToQueueNews[i].ID_articol==ID_articol &&  sendToQueueNews[i]!=undefined ){
            //delete sendToQueueNews[i];
            sendToQueueNews.splice(i);
            
            console.log(sendToQueueNews);
        }  
    }
}

    $("#open_modal").click(function(e){
  
  e.preventDefault();
  var username="6d12ff27-0474-4edf-87dc-daaed23249c3";
  var password="f6808b17-c354-46d0-941f-496e72092e59";
  console.log();
  globalNews=sendToQueueNews;
  var data=createTemplate(globalNews);
  localStorage.setItem('data-to-send', data);
  
 // console.log(data);
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
    for( i=0;i<objectToiterate.length;i++){
      if( objectToiterate[i]!=undefined){
          console.log(objectToiterate[i].titlu);
          
        if(objectToiterate.length==i && (objectToiterate.length)%2!=0){
          var content=`

        <mj-section background-color="#fff" padding-bottom="20px" id="ibsi3">
          <mj-column width='100%' vertical-align="bottom" id="ihlap">
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
          </mj-column>
        </mj-section>
          
        `;
        }else{
            if(i%2==0){
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
              
                
              `;
            }else if(i%2!=0){
              var content=`

            
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
              </mj-section>
              `;
            }
        }
         
      
        newsletter+=content;
      }
    }
    /* <mj-column vertical-align="bottom" id="ihlap">
            <mj-image src="https://louisem.com/wp-content/uploads/2017/07/facebook-link-thumbnail-2017.jpg" alt="Chesterk tank" border="none" width="209px" padding-left="0px" padding-right="0px" padding-bottom="20px" padding-top="30px" id="i4gfg"/>
            <mj-text font-weight="bold" color="#000" font-size="15px" padding-bottom="0" padding-top="0" __="1" id="i7r0x">
            `+objectToiterate[i+1].titlu+`
            </mj-text>
            <mj-text  color="#000" font-size="15px" padding-bottom="0px" padding-top="0" __="1" id="iphjc">
            `+objectToiterate[i+1].lead+`
            </mj-text>
            <mj-button background-color="#fa8739" color="#fff" padding="15px 30px" href="https://mjml.io" padding-top="0" id="ic5px">BUY NOW
            </mj-button>
          </mj-column>*/
  
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
