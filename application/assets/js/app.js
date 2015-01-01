//iniatlizing ace code editor
var editor = ace.edit("editor");
editor.setTheme("ace/theme/textmate");
editor.getSession().setMode("ace/mode/javascript");
editor.resize(true);


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


function Player(x, y, width, height, context, image){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.context = context;
    this.image = image;
}

Player.prototype.loadImage = function(src, load){
    this.image = new Image();
    this.image.onload = load;
    this.image.src = src;
};

function Tile(isPlayer, isRoad, x, y, width, height, context){
    this.playerTile = isPlayer;
    this.roadTile = isRoad;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.roadColor = "rgba(45,216,129,1)";
    this.sideColor = "rgba(221,213,190,1)";
    this.context = context;
}

Tile.prototype.drawHexagon = function(){
    if(this.roadTile){
        this.context.fillStyle = this.roadColor;    
    }else{
        this.context.fillStyle = this.sideColor;
    }
    this.context.beginPath();
    //this.context.fillStyle = this.color;
    this.context.moveTo(this.x,this.y);
    this.context.lineTo(this.x+this.width/2,this.y-this.height/4);
    this.context.lineTo(this.x+this.width,this.y);
    this.context.lineTo(this.x+this.width,this.y+this.height/2);
    this.context.lineTo(this.x+this.width/2,this.y+3*this.height/4);
    this.context.lineTo(this.x,this.y+this.height/2);
    this.context.lineTo(this.x,this.y);
    this.context.stroke();
    this.context.fill();
    this.context.closePath();
    
};

Tile.prototype.emptyHexagon = function(){
    
};

Tile.prototype.emptySquare = function(){
    this.context.clearRect(this.x, this.y, this.width, this.height);
};
    
function Draw(level) {

    var mainCanvas = document.getElementById("canvas");  
    var context = mainCanvas.getContext("2d");
    
    var initX=mainCanvas.width/2, initY=mainCanvas.height/2;
    var gX=initX, gY=initY;
    var x, y, w=50, h=50;
    
    var mapTiles = [];
    
    //left Cluster
    
    //middle
    x=gX, y=gY;
    
    mapTiles.push(new Tile(false, true, x, y, w, h, context));
    
    //bottom right
    x=gX+w/2, y=gY+3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //bottom left
    x=gX-w/2, y=gY+3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //middle right
    x=gX+w, y=gY;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //middle left
    x=gX-w, y=gY;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //top right
    x=gX+w/2, y=gY-3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //top left
    x=gX-w/2, y=gY-3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //right Cluster
    gX = initX+3*w;
    
    //middle
    x=gX, y=gY;
    
    mapTiles.push(new Tile(false, true, x, y, w, h, context));
    
    //bottom right
    x=gX+w/2, y=gY+3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //bottom left
    x=gX-w/2, y=gY+3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //middle right
    x=gX+w, y=gY;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //middle left
    x=gX-w, y=gY;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //top right
    x=gX+w/2, y=gY-3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //top left
    x=gX-w/2, y=gY-3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //third Cluster
    gY = initY+3*h/4;
    gX = initX+3*w/2;
    
    //middle
    x=gX, y=gY;
    
    mapTiles.push(new Tile(false, true, x, y, w, h, context));
    
    //bottom right
    x=gX+w/2, y=gY+3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //bottom left
    x=gX-w/2, y=gY+3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //middle right
    x=gX+w, y=gY;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //middle left
    x=gX-w, y=gY;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //top right
    x=gX+w/2, y=gY-3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //top left
    x=gX-w/2, y=gY-3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    
    //third Cluster
    gY = initY-3*h/4;
    gX = initX+3*w/2;
    
    //middle
    x=gX, y=gY;
    
    mapTiles.push(new Tile(false, true, x, y, w, h, context));
    
    //bottom right
    x=gX+w/2, y=gY+3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //bottom left
    x=gX-w/2, y=gY+3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //middle right
    x=gX+w, y=gY;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //middle left
    x=gX-w, y=gY;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //top right
    x=gX+w/2, y=gY-3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));
    
    //top left
    x=gX-w/2, y=gY-3*h/4;
    
    mapTiles.push(new Tile(false, false, x, y, w, h, context));

    
    for(var i=0 ; i<mapTiles.length ; i++){
        mapTiles[i].drawHexagon();
    }
    
   /* if(level == 0)
    {
        var mapTile = [
        
            {number:0, x:50, y:200, context:''},
            {number:0, x:105, y:200, context:''},
            {number:0, x:105, y:255, context:''},
            {number:0, x:160, y:255, context:''},
            {number:0, x:215, y:255, context:''},
            {number:0, x:215, y:310, context:''},

        ];
        
        for(var i = 0; i < mapTile.length; i++)
        {
            mapTile[i].number = i+1;
            mapTile[i].context = mainCanvas.getContext("2d");
            mapTile[i].context.fillStyle = "#2DD881";
            mapTile[i].context.fillRect(mapTile[i].x, mapTile[i].y,50,50);
            mapTile[i].context.fillStyle = "#FFFFFF";
            mapTile[i].context.font = "15px Arial";
            mapTile[i].context.fillText(mapTile[i].number, mapTile[i].x+20, mapTile[i].y+30);
        }
            
        
    }*/
}