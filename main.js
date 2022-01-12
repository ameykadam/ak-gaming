camera=document.getElementById("camera");
Webcam.attach('#camera');
Webcam.set({
    width:300,
    height:350,
    image_format:'png',
    png_quality:90
   
});

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5.version",ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MXWjKXvtR/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function check() {
   img=document.getElementById("capture_image") ;
   classifier.classify(img, gotResult);

}



 
  function gotResult(error, results){
  if(error)
  {
      console.log(error);
    }
    else
  {
    console.log(results);
    document.getElementById("result_object_image").innerHTML=results[0].label;
    document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
  }}