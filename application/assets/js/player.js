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