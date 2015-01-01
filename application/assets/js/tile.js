function Tile(num, isPlayer, isRoad, x, y, width, height, context){
    this.number = num;
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

Tile.prototype.drawNumber = function(){
    this.context.fillStyle = "#FFFFFF";
    this.context.font = "15px Arial";
    this.context.fillText(this.number, this.x+20, this.y+30);
};


Tile.prototype.drawHexagon = function(){
    if(this.roadTile){
        this.context.fillStyle = this.roadColor;    
    }else{
        this.context.fillStyle = this.sideColor;
    }
    this.context.beginPath();
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