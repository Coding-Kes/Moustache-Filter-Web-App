
 
 noseX = ""
 noseY = ""

function preload()
{
    Moustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw()
{
    image(video, 0, 0, 500, 500);

    image(Moustache, noseX, noseY, 100, 60);
}

function take_snapshot()
{
    save("Moustache.png");
}

function modelLoaded()
{
    console.log("PoseNet is initialized.");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        noseX = results[0].pose.nose.x -40;
        noseY =results[0].pose.nose.y;

        console.log("Nose X = "+ noseX);
        console.log("Nose Y = "+ noseY);
    }
}

