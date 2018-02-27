class MemoryTest{

    
    constructor(hackingWindow, numOfCards){
        this._memoryCardsFront = [];
        this._memoryCardsBack = [];
        this._availableCards = [];
        this._hackingWindow = hackingWindow;
        this._clickCount = 0;
        this._numAlt = -1;
        this._won = false;
        this._found = 0;

        for(var i = 1; i < 9; i++){
            var png = ImageManager.loadPicture('0'+i);
            this._availableCards.push(png);
        }
    
        this.shuffle(this._availableCards);
    }

   fillArray(numOfCards){
        for(var i = 0; i < numOfCards; i++){
            var buttonFront = this.insertPic('0' + (i+1), i);
            this._memoryCardsFront.push(buttonFront);
            this._hackingWindow.addChild(buttonFront)
            this._memoryCardsFront[i].visible = false;

            var buttonBack = this.insertPic('0' + (i+1) + '_blanc', i);
            this._memoryCardsBack.push(buttonBack);
            this._hackingWindow.addChild(buttonBack);
            this._memoryCardsBack[i].setClickHandler(this.onMouseClick.bind(this,i));
        }
        this.shuffle(this._memoryCardsFront);
   }

   insertPic(bmpName, i){
        if(bmpName.length > 2)
            var bitmap = ImageManager.loadPicture(bmpName);
        else
            var bitmap = this._availableCards[i%3];
        
        var buttonWidth = 200;
        var buttonHeight = 200;
        var x;
        var y;
        if(i >= 3){
            x = ((i%3)* buttonWidth) + ((i%3) * 25) + 25;
            y = 225;
        }else{
            x = (i * buttonWidth) + (i * 25) + 25;
            y = 0;
        }

        var button = new Sprite_Button();
        button.bitmap = bitmap; 
        button.x = x;
        button.y = y;

        return button;
   }

   onMouseClick(num){
        this._clickCount++;
        
        console.log("geklickt "+num);

        if(this._clickCount == 2){
            for(var i = 0; i<6; i++){
                this._memoryCardsFront[i].visible = false;
            }
            this._clickCount = 0;
        }
        this._memoryCardsFront[num].visible = true;

        if(this._numAlt%3 == num%3){
            this._found++;
            this._memoryCardsFront[this._numAlt].setFound(true);
            this._memoryCardsFront[num].setFound(true);
            console.log("gleiche gefunden!");
        }

        if(this._found == 3)
            this._won = true;

        this._numAlt = num;
 
        for(var i = 0; i < 6; i++){
            if(this._memoryCardsFront[i].getFound()){
                console.log("paarchen!");
                this._memoryCardsFront[i].visible = true;
            }
        }
   }

   shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
    }

}