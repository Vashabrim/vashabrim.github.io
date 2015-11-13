// Draw enemy and player objects
Object.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//Reset player
Object.prototype.reset = function() {
    player.x = 200;
    player.y = 400;
}
// Enemies our player must avoid
var Enemy = function(x,y) {
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random() *200) + 100);
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x <=550) {
        this.x += this.speed * dt;
    }else{
            this.x = -2;
        }
    if (player.x >= this.x - 20 && player.x <= this.x + 20){
        if (player.y >= this.y -20 && player.y <= this.x +20){
            this.reset();
        }
    }
}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

//Create Player
var Player = function(){
    this.sprite = 'images/char-horn-girl.png';
    this.x = 200;
    this.y = 400;
}
//Set movement
Player.prototype.update = function(){
    if (this.ctlKey === 'left' && this.x > 0) {
        this.x = this.x - 50;
    }else if(this.ctlKey === 'right' && this.x != 400){
        this.x = this.x + 50;
    }else if (this.ctlKey === 'up') {
        this.y = this.y - 50;
    }else if (this.ctlKey === 'down' && this.y != 400) {
        this.y - this.y + 50;
    }
    this.ctlKey = null;

    if (this.y < 25) {
        this.reset();
    }
}

Player.prototype.handleInput = function(p){
    this.ctlKey = p;
}
//create enemies
var allEnemies = [];
(function setEnemies(){
    allEnemies.push(new Enemy(-2, 60));
    allEnemies.push(new Enemy(-2, 100));
    allEnemies.push(new Enemy(-2, 150));
    allEnemies.push(new Enemy(-2, 220));
}());

var player = new Player();

document.addEventListener('keyup', function(p) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[p.keyCode]);
});
