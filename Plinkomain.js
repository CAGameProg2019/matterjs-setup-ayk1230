let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
let engine;

var world;
var particles = [];
var plinkos = [];
var col = 5;
var row = 5;

Engine.run(engine);

function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world
    newParticle();
    var spacing = canvas.width / col;
    for (var i = 0; i < row; i ++){
        for (var j = 0; j < col; j ++){
            var pli = new Plinko(i*spacing, j*spacing, 5);
            plinkos.push(p);
        }
    }

}

function newParticle(){
    var part = new Particle(300,50,10);
    particles.push(p);
}

function draw(){
    if(frameCount % 60 == 0){
        newParticle();
    }
    background(51);
    Engine.run(engine);
    for(var i = 0; i<particles.length; i++){
        particles[i].show();
    }


}
