function Scene_Hacking() {
    this.initialize.apply(this, arguments);
}

Scene_Hacking.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Hacking.prototype.constructor = Scene_Hacking;

Scene_Hacking.prototype.initialize = function () {
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Hacking.prototype.create = function () {
    Scene_MenuBase.prototype.create.call(this);
    this._hackingWindow = new Window_Hacking(0, 0);
    this._hackingWindow.show();
    this.addWindow(this._hackingWindow);
};

Scene_Hacking.prototype.update = function () {
    if (Input.isTriggered("escape")) {
        SceneManager.goto(Scene_Map);
    }

    Scene_MenuBase.prototype.update.call(this);
};

(function () {
    Input.keyMapper[80] = "hackingMenu"; //p
    var _Scene_Map_updateScene = Scene_Map.prototype.updateScene;
    Scene_Map.prototype.updateScene = function () {
        _Scene_Map_updateScene.call(this);

        if (Input.isTriggered("hackingMenu")) {
            SceneManager.goto(Scene_Hacking);
        }
    }

})();