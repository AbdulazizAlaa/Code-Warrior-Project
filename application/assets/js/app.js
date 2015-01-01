
$(document).ready(function(){
    
    
    var compileButton = $("#submit");
    
    compileButton.click(function(e){
        var code = editor.getValue();
        var url = "http://localhost:85/codewarrior/parser/compile?code_text="+code;
        
        $.getJSON(url, function(e){
            
            alert("Success Your request reached the server");
            
        });
        
    });
    Draw(0);
    
    
    
    //Ripple Effect
    $(".ripple-effect").click(function(e){
        var rippler = $(this);

        // create .ink element if it doesn't exist
        if(rippler.find(".ink").length == 0) {
            rippler.append("<span class='ink'></span>");
        }

        var ink = rippler.find(".ink");

        // prevent quick double clicks
        ink.removeClass("animate");

        // set .ink diametr
        if(!ink.height() && !ink.width())
        {
            var d = Math.max(rippler.outerWidth(), rippler.outerHeight());
            ink.css({height: d, width: d});
        }

        // get click coordinates
        var x = e.pageX - rippler.offset().left - ink.width()/2;
        var y = e.pageY - rippler.offset().top - ink.height()/2;

        // set .ink position and add class .animate
        ink.css({
          top: y+'px',
          left:x+'px'
        }).addClass("animate");
        console.log("ripple");
    });
});


    
function Draw(level) {

    var mainCanvas = document.getElementById("canvas");  
    var context = mainCanvas.getContext("2d");
    
    var initX=mainCanvas.width/2-50, initY=mainCanvas.height/2;
    var gX, gY;
    var x, y, w=50, h=50;
    
    var map = new Map(w, h, context);

    //middle left
    gX=initX;
    gY=initY;
    
    map.makeCluster(gX, gY);
    
    //bottom left
    gX=initX-w/2;
    gY=initY+9*h/4;
    
    map.makeCluster(gX, gY);
    
    //bottom right
    gX=initX+2*w+w/2;
    gY=initY+9*h/4;
    
    map.makeCluster(gX, gY);

    //middle right
    gX = initX+3*w;
    gY=initY;
    
    map.makeCluster(gX, gY);

    //bottom middle
    gY = initY+3*h/4;
    gX = initX+3*w/2;
    
    map.makeCluster(gX, gY);

    //upper middle
    gY = initY-3*h/4;
    gX = initX+3*w/2;
    
    map.makeCluster(gX, gY);
    
    
    map.tiles[9].roadTile = true;
    map.tiles[7].roadTile = true;
    map.tiles[12].roadTile = true;
    map.tiles[1].roadTile = true;
    map.tiles[28].roadTile = true;
    map.tiles[23].roadTile = true;
    map.tiles[21].roadTile = true;
    map.tiles[26].roadTile = true;
    
    
    for(var i=0 ; i<map.tiles.length ; i++){
        map.tiles[i].drawHexagon();
    }
    //for(var i=0 ; i<map.tiles.length ; i++){
        //map.tiles[i].drawNumber();
    //}
}