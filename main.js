let Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Events = Matter.Events,
    Constraint = Matter.Constraint,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

let engine = Engine.create();
let world = engine.world;

let render = Render.create({
    options: {
        width: 800,
        height: 600,
        wireframes:false
    },
    element: document.body,
    engine: engine
});

Engine.run(engine);
Render.run(render);

function box(x, y) {
    return Bodies.rectangle(x, y, 50, 50, {
        isStatic: true,
        density: 0.002,
        friction: .4,
        render: {
            fillStyle: 'green',
            strokeStyle: 'black',
            lineWidth: 5
        }
    });
}

function makeframe(x, y) {
    return Bodies.rectangle(x, y, 50, 50, {
        isStatic: true,
        density: 0.002,
        friction: .4,
        render: {
            fillStyle: 'gray',
            strokeStyle: 'black',
            lineWidth: 5
        }
    });
}

let ball=Bodies.circle(600, 10, 40);
let boxes= Composites.stack(550,350, 8, 2, 0, 0, box);
let tri = Bodies.polygon(650,20,3,50);
let frameBot = Composites.stack(0,500, 8, 1, 0, 0, makeframe);
let frameLeft = Composites.stack(-2,97, 1, 8, 0, 0, makeframe);
let square = Bodies.rectangle(650,10,30,30);
let bigSqu = Bodies.rectangle(400,10,60,30);
let car=Composites.car(200, 0, 100, 30, 40);
let trap = Bodies.trapezoid(250,100,400,50,.9);
World.add(engine.world, [ball, boxes, tri, frameBot, frameLeft, square, car, trap, bigSqu]);




let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;
