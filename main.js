function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/HiOsqcBmL/.json',modelready);
    }
    
    function modelready(){
    classifier.classify(got_results);
    
    }
    
    function got_results(error, results){
        if (error) { console.error(error); 
        } else { console.log(results); random_number_r = Math.floor(Math.random() * 255) + 1;
             random_number_g = Math.floor(Math.random() * 255) + 1;
              random_number_b = Math.floor(Math.random() * 255) + 1;
    
    document.getElementById("result_label").innerHTML = "I can hear-" + results[0].label;
    document.getElementById("result_accuracy").innerHTML = "Accuracy-" + (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+ ","+ random_number_g+ "," + random_number_b+")";
    document.getElementById("result_accuracy").style.color = "rgb("+random_number_r+ ","+ random_number_g+ "," + random_number_b+")";
    
    
    img1= document.getElementById("lion.png");
    img2= document.getElementById("dog.png");
    img3= document.getElementById("cat.png");
    img4= document.getElementById("cow.png");

    if (results[0].label== "Roar"){
        img1.src= "lion.gif";
        img2.src = "dog.png";
        img3.src = "cat.png";
        img4.src = "cow.png";
        
        }
        
        else if (results[0].label== "Bark"){
        img1.src= "lion.png";
        img2.src = "dog.gif";
        img3.src = "cat.png";
        img4.src = "cow.png";
            
            }
        
        else if (results[0].label== "Meow"){
            img1.src= "lion.png";
            img2.src = "dog.png";
            img3.src = "cat.gif";
            img4.src = "cow.png";
            }
        
            else {
                img1.src= "lion.png";
                img2.src = "dog.png";
                img3.src = "cat.png";
                img4.src = "cow.gif";
                
                }
            }
        }
        
        
        
    
    