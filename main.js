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
let boxes= Composites.stack(550,100, 8, 2, 0, 0, box);
let tri = Bodies.polygon(400,470,3,50, {isStatic: true});
Matter.Body.rotate(tri,-.5);
let frameBot = Composites.stack(0,500, 16, 1, 0, 0, makeframe);
let frameLeft = Composites.stack(-2,50, 1, 9, 0, 0, makeframe);
let frameTop = Composites.stack(0,0, 10, 1, 0, 0, makeframe);
let square = Bodies.rectangle(650,10,30,30);
let bar = Bodies.rectangle(400,400,500,20);
let circle = Bodies.circle(450, 300, 10);
let bigSqu = Bodies.rectangle(400,40,60,30);
let car=Composites.car(200, 30, 100, 30, 40);
let trap = Bodies.trapezoid(250,100,400,10,2);
World.add(engine.world, [ball, boxes, tri, frameBot,circle, frameLeft, square, bar, car, bigSqu, frameTop]);




let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;
