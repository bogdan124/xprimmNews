function clickBuildTemplate(sendObject){
  

 var store= `<mjml>
  <mj-body>
    <!-- Your MJML body here -->
    <mj-section>
    <mj-column>
     <mj-image src="http://www.1asig.ro/pictures/bannere/xprimm-news.jpg"/>
    </mj-column>
    <mj-column>
     <mj-text>
      <b>Insurance Newsletter, No. 522, 29 October, 2020<br>
        <br>
        </b><font size="1"> <b><a href="http://www.xprimm.com/XPRIMM-News-registration-156.htm" target="_blank">Click
        here to subscribe!</a></b><br>
        <b><a href="http://insurance.1asig.ro/unsubscribe.php?email=<!-- tmpl_var subscriber.email -->" target="_blank">Click
        here to unsubscribe!<br>
        </a></b></font>
        </mj-text>
    </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-text>
        <font color="#FFFFFF">www.xprimm.com</font>
        <hr align="center" color="#666666" noshade="" size="1">
        <b><center><font size="1" align="center"><a href="#top_news">TOP NEWS</a> - <a href="#c_reports">CURRENT REPORTS</a> - <a href="#statistics">STATISTIC UPDATES</a></font></b>
        <hr align="center" color="#666666" noshade="" size="1"></center>
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
      <mj-column>
        <mj-text id="Topnews">
        <span class="meniu"><br><mj-image  src="http://www.1asig.ro/pictures/xprimm/sageata_rosie_dreapta.jpg" /></span>
        <font color="#294F84">TOP NEWS</font> <br/>`;

        var add=store;
            for(i=0;i<sendObject.top_news.length;i++){
                add= add+"<p><b>"+sendObject.top_news[i].titlu+"</b><br/>"+sendObject.top_news[i].lead+"</p><img src='http://www.xprimm.md/pictures/bannere/flag_en.jpg' alt='' width='20' height='14' border='0' align='absmiddle'><a href='http://www.xprimm.com/T%C3%BCrk-Reas%C3%BCrans-A-%C5%9E-celebrates-its-1st-anniversary-articol-2,143,11-16072.htm' target='_blank'>More</a>";
                console.log(1,add);
            }


        add=add+ `
        </mj-text>
      </mj-column>
      <mj-column>
        <mj-text id="interview"><hr align="center" color="#666666" noshade="" size="1"><span class="meniu"><a name="statistics" id="statistics"></a><img name="" src="http://www.1asig.ro/pictures/xprimm/sageata_rosie_dreapta.jpg" width="11" height="8" alt=""></span>
        <font color="#294F84"> INTERVIEW</font><br/>`;
      
        for(i=0;i<sendObject.interviu.length;i++){
            add= add+"<p><b>"+sendObject.interviu[i].titlu+"</b><br/>"+sendObject.interviu[i].lead+"</p>";
        }

      add=add+   `
        </mj-text>
        <mj-text id="statisctic"><hr align="center" color="#666666" noshade="" size="1"><span class="meniu"><a name="statistics" id="statistics"></a><img name="" src="http://www.1asig.ro/pictures/xprimm/sageata_rosie_dreapta.jpg" width="11" height="8" alt=""></span>
        <font color="#294F84"> STATISTICS</font><br/>`;
        for(i=0;i<sendObject.stats.length;i++){
          add= add+"<p><b>"+sendObject.stats[i].titlu+"</b><br/>"+sendObject.stats[i].lead+"</p>";
      }

       add=add+`
        </mj-text>
        <mj-text id="on the move"><hr align="center" color="#666666" noshade="" size="1"><span class="meniu"><a name="statistics" id="statistics"></a><img name="" src="http://www.1asig.ro/pictures/xprimm/sageata_rosie_dreapta.jpg" width="11" height="8" alt=""></span>
        <font color="#294F84"> ON THE MOVE</font><br/>
        `;
        for(i=0;i<sendObject.ont_the_move.length;i++){
          add= add+"<p><b>"+sendObject.ont_the_move[i].titlu+"</b><br/>"+sendObject.ont_the_move[i].lead+"</p>";
      }

       add=add+`
        </mj-text>
        <mj-text id="events"><hr align="center" color="#666666" noshade="" size="1"><span class="meniu"><a name="statistics" id="statistics"></a><img name="" src="http://www.1asig.ro/pictures/xprimm/sageata_rosie_dreapta.jpg" width="11" height="8" alt=""></span>
        <font color="#294F84"> EVENTS</font><br/>
        `;
        for(i=0;i<sendObject.evenimente.length;i++){
          add= add+"<p><b>"+sendObject.evenimente[i].titlu+"</b><br/>"+sendObject.evenimente[i].lead+"</p>";
      }

       add=add+`
        </mj-text>
      </mj-column>
    </mj-section>
    <mj-section>
    <mj-text>
    <hr align="center" color="#666666" noshade="" size="1">
    </mj-text>
    <mj-image href="http://www.xprimm.com/index.php" src="http://xprimm.com/pictures/xprimm/xprimmcom_h100.png"/>
    </mj-section>
  </mj-body>
</mjml>
`;
store=add;
console.log(store);
return store;
}