var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function start() {
document.getElementById("textbox").innerHTML = "";
Recognition.start();

}
Recognition.onresult = function run(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML = content;
   speak(); 
  
    if(Content =="take my selfie"){

    }
   console.log("taking my selfie in 5 seconds");
   speak();
}


function speak() {
    var synth =window.speechSynthesis;
    speak_data = ("Taking your selfie in 5 seconds").value;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
        

    },5000);

}
Webcam.set({
    width:360,height:250,image_format:'png',png_quality:90

});
camera = documnet.getElementById("camera");
function take_snapshot() {
    Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
    
    });


    }
    function save() {
   link = document.getElementById("link");
   image = document.getElementById("selfie_image").src 
   link.href = image;
   link.click();
   

    }

