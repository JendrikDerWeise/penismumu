function Memory() {
    this.initialize.apply(this, arguments);
}
var _memoryCardsFront;
var _memoryCardsBack;
var _hackingWindow;

Memory.prototype.initialize = function (hackingWindow, numOfCards){
    this._memoryCardsFront = Array(numOfCards);
    this._memoryCardsBack = Array(numOfCards);
    this._hackingWindow = hackingWindow;
    this.fillArray(numOfCards);
};

Memory.prototype.fillArray = function(numOfCards){
    for(var i = 1; i<=numOfCards; i++){
        this._memoryCardsFront[i] = this.insertPic(i);
        this._memoryCardsBack[i] = this.insertPic(0);
        document.this._memoryCardsFront[i].addEventListener('mousedown', this.onMouseClick(this._memoryCardsFront[i]));
    }
};

Memory.prototype.insertPic = function(number){
    
    var bitmap = new Sprite(ImageManager.loadPicture("0"+number));
    this._hackingWindow.addChildToBack(bitmap);//it very important. it same add child, but your sprite display under window simply
    bitmap.setFrame(0,0,this.width,this.height);
    

    return bitmap;    
};

Memory.prototype.onMouseClick = function(object){
    object.visible = true;
};