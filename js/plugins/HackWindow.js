function Window_Hacking() {
    this.initialize.apply(this, arguments);
}

Window_Hacking.prototype = Object.create(Window_Base.prototype);
Window_Hacking.prototype.constructor = Window_Hacking;

Window_Hacking.prototype.initialize = function (x, y) {
    var width = this.windowWidth();
    var height = this.windowHeight();
    Window_Base.prototype.initialize.call(this, x, y, width, height);
    this.refresh();
};

Window_Hacking.prototype.windowWidth = function () {
    return 700;
};

Window_Hacking.prototype.windowHeight = function () {
    return 700;
};

Window_Hacking.prototype.refresh = function () {
    var x = this.textPadding();
    var width = this.contents.width - this.textPadding() * 2;
    this.contents.clear();
    this.drawText(this.text(), x,0, width, false)
};

Window_Hacking.prototype.text = function () {
    return "Let us hack a door!";
}


Window_Hacking.prototype.open = function () {
    this.refresh();
    Window_Base.prototype.open.call(this);
};