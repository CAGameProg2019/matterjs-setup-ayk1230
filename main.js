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
        wireframes:true
    },
    element: document.body,
    engine: engine
});

Engine.run(engine);
Render.run(render);

function box(x, y) {
    return Bodies.rectangle(x, y, 50, 50, {
        density: 0.002,
        friction: .4,
        render: {
            fillStyle: 'green',
            strokeStyle: 'black',
            lineWidth: 5
        }
    });
}

let ball=Bodies.circle(200, 10, 40);
let boxes= Composites.stack(400,350, 5, 2, 0, 0, box);
World.add(engine.world, [ball, box]);
