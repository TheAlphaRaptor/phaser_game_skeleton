var Menu = function () {
  this.text = null;
};
module.exports = Menu;

Menu.prototype = {
//var button;
//var background;

  create: function () {

   // var x = this.game.width / 2;
   // var y = this.game.height / 2;

    var style = { font: "65px Arial", fill: "#ffffff", align: "center" };
    background = this.game.add.tileSprite(0, 0, 800, 600, 'background');
    button = this.game.add.button(200,50,"shave",  function() {

    }, this, 0,1,2 )
    this.input.onDown.add(this.onDown, this);
  },

  update: function () {
  },

  onDown: function () {
    this.game.state.start(playerState.currentLevel);
  }
};