const bm = editor.BlockManager;
bm.add("facebook-signin", {
    label: "Section",
    content:
    `<mj-section ></mj-section>`,
    attributes: {
      class: ""
    }
  });

  bm.add("googleplus-signin", {
    label: "Carousel",
    content:` <mj-section>
    <mj-column>
      <mj-carousel>
        <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/11/ecommerce-guide.jpg" />
        <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/3@1x.png" />
        <mj-carousel-image src="https://www.mailjet.com/wp-content/uploads/2016/09/1@1x.png" />
      </mj-carousel>
    </mj-column>
  </mj-section>`,
    attributes: {
      class: ""
    }
  });

  bm.add("table", {
    label: "Table",
    content:`  
    
<table>
<tr>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
</tr>
<tr>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
</tr>
<tr>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
</tr>
<tr>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
</tr>
<tr>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
</tr>
<tr>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
</tr>
<tr>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
  <td><mj-text>Insert text here
  </mj-text></td>
</tr>
</table>
`,
    attributes: {
      class: ""
    }
  });
