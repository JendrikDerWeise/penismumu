class MemoryTest{

    
    constructor(hackingWindow, numOfCards){
        this._memoryCardsFront = [];
        this._memoryCardsBack = [];
        this._hackingWindow = hackingWindow;
        this._clickCount = 0;
    }

   fillArray(numOfCards){
        for(var i = 0; i < numOfCards; i++){
           /* var buttonFront = this.insertPic(i+1);
            this._memoryCardsFront.push(buttonFront);
            this._hackingWindow.addChild(buttonFront)
            this._memoryCardsFront[i].visible = false;*/

            var buttonBack = this.insertPic((i+1)+'_blanc');
            this._memoryCardsBack.push(buttonBack);
            this._hackingWindow.addChild(buttonBack);
            this._memoryCardsBack[i].setClickHandler(this.onMouseClick.bind(this,i));
            
        }
   }

   insertPic(i){
       console.log('0'+i);
        var bitmap = ImageManager.loadPicture('0'+i);
        
        var buttonWidth = 200;
        var buttonHeight = 200;
        var x = ((i-1) * buttonWidth) + 20;
        var w = buttonWidth * (i === 4 ? 2 : 1);

        var button = new Sprite_Button();
        button.bitmap = bitmap; 
        //button.setFrame(x*(-1),0,200,200);
        //button.setColdFrame(x*(-1), 0, w+200, buttonHeight);
        //button.setHotFrame(x*(-1), buttonHeight, w+200, buttonHeight);
        button.x = x;
        button.y = 0;

        //this._hackingWindow.addChildToBack(this._memoryCardsFront[i]);//it very important. it same add child, but your sprite display under window simply
       
       //this._memoryCardsFront[i].setColdFrame(x, 0, w, buttonHeight);
       //this._memoryCardsFront[i].setHotFrame(x, buttonHeight, w, buttonHeight);
       /*
        this._memoryCardsBack[i] = new Sprite_Button();
        this._memoryCardsBack[i].bitmap = bitmapBack;
        this._hackingWindow.addChildToBack(this._memoryCardsBack[i]);//it very important. it same add child, but your sprite display under window simply
        this._memoryCardsBack[i].setFrame(i*buttonWidth,0,200,200);
        //this._memoryCardsBack[i].setColdFrame((i)*(-200),0,buttonWidth,buttonHeight);
       //this._memoryCardsBack[i].setHotFrame((i)*(-200),0,buttonWidth,buttonHeight);
*/
        return button;
   }

   onMouseClick(num){
        //this._clickCount++;
        this._memoryCardsFront[num].visible = true;
        console.log("geklickt "+num);

        /*if(this._clickCount == 3){
            for(var i = 1; i<=3; i++){
                this._memoryCardsFront[i].visible = false;
            }
            this._clickCount = 0;
        }*/
   }

}