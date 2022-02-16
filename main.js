function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});//gives access to the microphone//
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/JJAfrAu5N/model.json', modelready)
}
function modelready(){
    classifier.classify(gotresult)
}
function gotresult(error,result){
    if(error){
        console.log(error)
    }
    else{console.log("Got result");
        console.log(result)}
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;
    document.getElementById("audio").innerHTML="I can hear : "+result[0].label
    document.getElementById("accuracy").innerHTML="Accuracy : "+(result[0].confidence*100).toFixed(2)+"%"
    document.getElementById("audio").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("accuracy").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    img1=document.getElementById("alien1")
    console.log(img1)
    img2=document.getElementById("alien2")
    console.log(img2)
    img3=document.getElementById("alien3")
    console.log(img3)
    img4=document.getElementById("alien4")
    console.log(img4)
    if(result[0].label=="Background Noise"){
        img1.src="aliens-01.gif"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
    }
    else if(result[0].label=="Clap"){
        img1.src="aliens-01.png"
        img2.src="aliens-02.gif"
        img3.src="aliens-03.png"
        img4.src="aliens-04.png"
    }
    else if(result[0].label=="Bell"){
        img1.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.gif"
        img4.src="aliens-04.png"
    }
    else{
        img1.src="aliens-01.png"
        img2.src="aliens-02.png"
        img3.src="aliens-03.png"
        img4.src="aliens-04.gif"
    }
}