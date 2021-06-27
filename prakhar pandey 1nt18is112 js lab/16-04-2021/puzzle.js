var gameArea;
var gameBlock;
var lines = [];
var score;

restartGame=()=>{
document.getElementById("myfilter").style.display = "none";
document.getElementById("myrestartbutton").style.display = "none";
gameArea.stop();
gameArea.clear();
gameArea = {};
gameBlock = {};
lines = [];
score = {};
document.getElementById("canvascontainer").innerHTML = "";
startGame()
}

startGame=()=> {
    gameArea = new gamearea();
    gameBlock = new component(30, 30, "red", 10, 75);
    score = new component("18px", "Consolas", "yellow", 220, 25, "text");
    gameArea.start();
}

function gamearea() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 320;
    this.canvas.height = 180;    
    document.getElementById("canvascontainer").appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
    this.pause = false;
    this.frameNo = 0;
    this.start = function() {
        this.interval = setInterval(updateGameArea, 20);
    }
    this.stop = function() {
        clearInterval(this.interval);
        this.pause = true;
    }
    this.clear = function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {

    this.type = type;
    if (type == "text") {
        this.text = color;
    }
    this.score = 0;    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = gameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
            crash = false;
        }
        return crash;
    }
}

function updateGameArea() {
    var x, y, min, max, height, gap;
    for (i = 0; i < lines.length; i += 1) {
        if (gameBlock.crashWith(lines[i])) {
            gameArea.stop();
            document.getElementById("myfilter").style.display = "block";
            document.getElementById("myrestartbutton").style.display = "block";
            return;
        } 
    }
    if (gameArea.pause == false) {
        gameArea.clear();
        gameArea.frameNo += 1;
        score.score +=1;        
        if (gameArea.frameNo == 1 || everyinterval(150)) {
            x = gameArea.canvas.width;
            y = gameArea.canvas.height - 100;
            min = 20;
            max = 100;
            height = Math.floor(Math.random()*(max-min+1)+min);
            min = 50;
            max = 100;
            gap = Math.floor(Math.random()*(max-min+1)+min);
            lines.push(new component(10, height, "green", x, 0));
            lines.push(new component(10, x - height - gap, "green", x, height + gap));
        }
        for (i = 0; i < lines.length; i += 1) {
            lines[i].x += -1;
            lines[i].update();
        }
        score.text="SCORE: " + score.score;        
        score.update();
        gameBlock.x += gameBlock.speedX;
        gameBlock.y += gameBlock.speedY;    
        gameBlock.update();
    }
}

function everyinterval(n) {
    if ((gameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
}

function moveup(e) {
    gameBlock.speedY = -1; 
}

function movedown() {
    gameBlock.speedY = 1; 
}

function moveleft() {
    gameBlock.speedX = -1; 
}

function moveright() {
    gameBlock.speedX = 1; 
}

function clearmove(e) {
    gameBlock.speedX = 0; 
    gameBlock.speedY = 0; 
}
startGame();
