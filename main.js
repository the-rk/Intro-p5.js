function preload(){

}
function setup(){
    canvas = createCanvas(500,350);
    canvas.position(410,300);
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw(){
    image(video,0,0,500,350);
    tint(tint_color);
}
function take_snapshot(){
    save("intro-to-p5.jpg");
}
function apply(){
    tint_color = document.getElementById("in").value;
}