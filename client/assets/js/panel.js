

/*
*ToDO Obj draft 
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
      $("#row_"+e.y).append('<td  class="cell covered col_'+e.x+'" data-idx="'+e.idx+'" >'+mine+'</td>')
    })
}

function draft_timer(){
  $("#timer").html(Utils.timer())
}


/**
ToDo Obj events
*/

var EventUser = {};
		 
EventUser.click_panel = function (panel){

					$(".cell").click(function(){  
								Utils.panel.forEach(
									 function(e){
										if(e.idx == this.dataset.idx ){

											//if (e.mine){
														Utils.filter_cell(e, Utils.discover_cell)
										 //}

							//action = e.mine ? "game_over()" : cell_discover(panel,  e )
							} 
				}, this)

		})
}






/*
function game_over(){} *5


function set_flg(){} *4

function set_ask(){} *4
*/

/*
*Todo obj Utils
*/

var Utils = {};

Utils.timer = function () { 
         var time=new Date(); 
         var cro=time-start; 
         var cr=new Date(); 
         cr.setTime(cro); 
         var sg=cr.getSeconds(); 
         var mn=cr.getMinutes(); 
         return mn+" : "+sg; 
};


Utils.filter_cell = function (e, callback){
    var filter = [];
		this.panel.filter(
						function(obj){
								var  X = [e.x+1, e.x, e.x-1]; 
								var	 Y = [e.y+1, e.y, e.y-1];
								if (X.indexOf(obj.x) != -1 && Y.indexOf(obj.y) != -1){
									filter.push(obj)
								}
						}, e);
	
	    return callback ? callback(filter) : filter;
};

Utils.discover_cell = function(e){
		e.forEach(function(obj){
			elem = document.querySelector("[data-idx~='"+obj.idx+"']")	
			elem.classList.remove("covered")
	})
}




/*
* Todo Obj  Loader init endpoints 
*/

$.getJSON("http://localhost:5000/panel").done(function(data){
    
	  Utils.panel = data;
		draft_panel(data);
    //user_events(data);
	  EventUser.click_panel();
       
    //timer
    start=new Date();
    setInterval(draft_timer,1000);
    console.log('success')
})

