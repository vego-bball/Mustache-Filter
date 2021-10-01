mouthX = 0;
mouthY = 0;

function preload()
{
    mustache_face = loadImage('https://i.postimg.cc/YSWGyqpp/Mustache.png')
}

function setup()
{
    canvas = createCanvas(340, 360);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('Posenet is Initialized');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        mouthX = results[0].pose.nose.x+5;
        mouthY = results[0].pose.nose.y+25;
    }
}

function draw()
{
    image(video, 0, 0, 340, 360);
    image(mustache_face, mouthX, mouthY, 30, 30)
}

function take_snapshot()
{
    save("mustache.png");
}