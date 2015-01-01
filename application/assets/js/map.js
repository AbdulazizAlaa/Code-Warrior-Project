function Map(w, h, context){
    this.tiles = [];
    this.tileWidth = w;
    this.tileHeight = h;
    this.context = context;
    this.numTiles = 0;
}


Map.prototype.isDuplicate = function(x, y){
    for(var i=0 ; i<this.tiles.length ; i++){
        if(this.tiles[i].x === x && this.tiles[i].y === y)
            return true;
    }
    return false;
}

Map.prototype.makeCluster = function(gX, gY){    
    
    var x, y;
    var w=this.tileWidth, h=this.tileHeight;
   
    //middle
    x=gX, y=gY;
    
    if(!this.isDuplicate(x, y)){
        this.tiles.push(new Tile(this.numTiles, false, false, x, y, w, h, this.context));
        this.numTiles++;
    }
    //bottom right
    x=gX+w/2, y=gY+3*h/4;
    
    if(!this.isDuplicate(x, y)){
        this.tiles.push(new Tile(this.numTiles, false, false, x, y, w, h, this.context));
        this.numTiles++;
    }
    
    //bottom left
    x=gX-w/2, y=gY+3*h/4;
    
    if(!this.isDuplicate(x, y)){
        this.tiles.push(new Tile(this.numTiles, false, false, x, y, w, h, this.context));
        this.numTiles++;
    }
    
    //middle right
    x=gX+w, y=gY;
    
    if(!this.isDuplicate(x, y)){
        this.tiles.push(new Tile(this.numTiles, false, false, x, y, w, h, this.context));
        this.numTiles++;
    }
    
    //middle left
    x=gX-w, y=gY;
    
    if(!this.isDuplicate(x, y)){
        this.tiles.push(new Tile(this.numTiles, false, false, x, y, w, h, this.context));
        this.numTiles++;
    }
    
    //top right
    x=gX+w/2, y=gY-3*h/4;
    
    if(!this.isDuplicate(x, y)){
        this.tiles.push(new Tile(this.numTiles, false, false, x, y, w, h, this.context));
        this.numTiles++;
    }
    
    //top left
    x=gX-w/2, y=gY-3*h/4;
    
    if(!this.isDuplicate(x, y)){
        this.tiles.push(new Tile(this.numTiles, false, false, x, y, w, h, this.context));
        this.numTiles++;
    }
};