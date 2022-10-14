function setup () {
    video = createCapture(VIDEO) ;
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
}

function setup () {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);

}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
    }
}

function modalLoaded() {
    console.log('PoseNet Is Initialized!');
}

function draw() {
    background('#969A97');
}