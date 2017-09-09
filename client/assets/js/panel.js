
/*
* Todo  Loader init endpoints 
*/

$.getJSON("http://localhost:5000/panel",  function( data  ){  
  draft_panel(data);
  user_events(data);
}).done(
  function(s){  
    console.log('success')
})


/*
*ToDO Obj to draft 
*/

function draft_panel (panel){  
    /*
    * render rows
    */
    idx_list = []
    panel.forEach(
      function(e){
        if (idx_list.indexOf(e.y) === -1){
          idx_list.push(e.y)
          $("#panel").append("<tr id='row_"+e.y+"'> </tr>")
      }
    })

    /*
    * render cols
    */
    panel.forEach(
      function(e){
        mine = e.mine ? "b" : "n"  
      $("#row_"+e.y).append('<td  class="cell col_'+e.x+'" data-idx="'+e.idx+'" >'+mine+'</td>')
    })
}



/**
ToDo Obj user events
*/

function user_events(panel){
  $(".cell").click(function(){  
      panel.forEach(
           function(e){
            if (e.idx == this.dataset.idx ){
               alert (e.mine)
            } 
      }, this)
  })
}