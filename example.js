// Write your code here
let Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Composites = Matter.Composites;
let engine = Engine.create();
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

let ball=Bodies.circle(200, 10, 40);
let ball2=Bodies.circle(500, 10, 40);
let square = Bodies.rectangle(340,10,30,30);
let floor=Bodies.trapezoid(340,300,500,100,.9,{isStatic: true});
let underfloor = Bodies.polygon(100,430,3,50);
let rect =Bodies.rectangle(200,200,100,40);
let rect2 =Bodies.rectangle(500,200,100,40,{isStatic: true});
let myCar=Composites.car(390, 0, 100, 30, 40);
let myCradle=Composites.newtonsCradle(600, 100, 7, 10, 160);
World.add(engine.world, [ball,ball2,square,underfloor,floor,rect,rect2,myCar,myCradle]);

let world = engine.world;
let Mouse= Matter.Mouse;
let MouseConstraint=Matter.MouseConstraint;
let mouse = Mouse.create(render.canvas);
let mouseConstraint = MouseConstraint.create(engine, {mouse: mouse});
World.add(world, mouseConstraint);
render.mouse = mouse;
