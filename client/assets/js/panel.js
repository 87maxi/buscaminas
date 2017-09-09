
$.getJSON("http://localhost:5000/panel",  function( data  ){ draf_panel(data)   }).done(
  function(s){  
    console.log('success')
})




function draf_panel (panel ){  
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
    
    console.log(panel)
}

/**
user events
*/

$(".cell").click(function(){  
    panel.forEach(
         function(e){
          if (e.idx == this.dataset.idx ){
            alert(e.mine)
          } 
    }, this)
})

