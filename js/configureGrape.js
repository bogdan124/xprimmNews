
  CKEDITOR.dtd.$editable.a = 1;


  
  var lp = './img/';
  var plp = 'http://placehold.it/350x250/';
  var images = [
    plp+'78c5d6/fff/image1.jpg', plp+'459ba8/fff/image2.jpg', plp+'79c267/fff/image3.jpg',
    plp+'c5d647/fff/image4.jpg', plp+'f28c33/fff/image5.jpg', plp+'e868a2/fff/image6.jpg', plp+'cc4360/fff/image7.jpg',
    lp+'work-desk.jpg', lp+'phone-app.png', lp+'bg-gr-v.png'
  ];
  
  // Set up GrapesJS editor with the MJML plugin
  var editor = grapesjs.init({
    clearOnRender: true,
    height: '100%',
    avoidInlineStyle: false,
    storageManager: {id: 'gjs-mjml-'},
    //storageManager:{ autoload: 0 },
    assetManager: {
      assets: images,
      upload: 0,
      uploadText: 'Uploading is not available in this demo',
    },
    container : '#gjs',
    fromElement: true,
  
    plugins: ['grapesjs-mjml', 'gjs-plugin-ckeditor'],
    pluginsOpts: {
      'gjs-plugin-ckeditor': {
        position: 'center',
        options: {
          startupFocus: true,
          extraAllowedContent: '*(*);*{*}', // Allows any class and any inline style
          allowedContent: true, // Disable auto-formatting, class removing, etc.
          enterMode: CKEDITOR.ENTER_BR,
          extraPlugins: 'sharedspace,justify,colorbutton,panelbutton,font',
          toolbar: [
            { name: 'styles', items: ['Font', 'FontSize' ] },
            ['Bold', 'Italic', 'Underline', 'Strike'],
            {name: 'paragraph', items : [ 'NumberedList', 'BulletedList']},
            {name: 'links', items: ['Link', 'Unlink']},
            {name: 'colors', items: [ 'TextColor', 'BGColor' ]},
          ],
        }
      }
    },
  });
  
  var mdlClass = 'gjs-mdl-dialog-sm';
  var pnm = editor.Panels;
  var cmdm = editor.Commands;
  var md = editor.Modal;
  var storeItem=localStorage.getItem('data-to-send');
  editor.setComponents(storeItem);
  var newPanel = pnm.addPanel({
  id: 'myNewPanel',
 visible  : true,
 buttons: [
  {
    id: 'alert-button',
    className: 'btn-alert-button',
    label: 'News',
    command(editor) { alert('Hello World'); }
  }
],
});
  // Add info command
  var infoContainer = document.getElementById("info-panel");
  cmdm.add('open-info', {
    run(editor, sender) {
      sender.set('active', 0);
      var mdlDialog = document.querySelector('.gjs-mdl-dialog');
      mdlDialog.className += ' ' + mdlClass;
      infoContainer.style.display = 'block';
      md.setTitle('About this demo');
      md.setContent('');
      md.setContent(infoContainer);
      md.open();
      md.getModel().once('change:open', function() {
        mdlDialog.className = mdlDialog.className.replace(mdlClass, '');
      })
    }
  });
  pnm.addButton('options', {
    id: 'view-info',
    className: 'fa fa-question-circle',
    command: 'open-info',
    attributes: {
      'title': 'About',
      'data-tooltip-pos': 'bottom',
    },
  });
  
  
  // Simple warn notifier
  var origWarn = console.warn;//toastr
  origWarn.options = {
    closeButton: true,
    preventDuplicates: true,
    showDuration: 250,
    hideDuration: 150
  };
  //console.warn = function (msg) {
    //  origWarn.warning(msg);
    //origWarn(msg);
  //};
  
  // Beautify tooltips
  var titles = document.querySelectorAll('*[title]');
  for (var i = 0; i < titles.length; i++) {
    var el = titles[i];
    var title = el.getAttribute('title');
    title = title ? title.trim(): '';
    if(!title)
      break;
    el.setAttribute('data-tooltip', title);
    el.setAttribute('title', '');
  }
  
  
  editor.addComponents(` 

`);

  // Do stuff on load
  editor.on('load', function() {
    var $ = grapesjs.$;
  
    // Show logo with the version
   // var logoCont = document.querySelector('.gjs-logo-cont');
   // document.querySelector('.gjs-logo-version').innerHTML = 'v' + grapesjs.version;
   // var logoPanel = document.querySelector('.gjs-pn-commands');
  //  logoPanel.appendChild(logoCont);
  
    // Move Ad
    $('#gjs').append($('.ad-cont'));
  });
  


