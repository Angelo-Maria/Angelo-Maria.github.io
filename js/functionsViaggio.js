function pasteDate() {
    const d = new Date();
    document.getElementById('data_aggiornamento').innerHTML = d.toUTCString();
}

function upDate(picFocus){
    //passo l'elemento <img>
    console.log(picFocus.alt);
    console.log(picFocus.src);
    console.log(picFocus.style);
    picFocus.style.opacity = "0.5";
    //picFocus.innerHTML = "Hover over an image belo.";
    //picFocus.style.innerHTML = "Hover over an image belo.";
    //document.getElementById("imageinfo").style.opacity = "0.5";
    //document.getElementById("imageinfo").textContent = `${picFocus.alt}`;
  
}
  
function unDo(picFocus){
    picFocus.style.opacity = "1";
    // document.getElementsByClassName("imageinfo").style.opacity = "1";
     /* In this function you should 
    1) Update the url for the background image of the div with the id = "image" 
    back to the orginal-image.  You can use the css code to see what that original URL was
    */
    // document.getElementById("image").style.backgroundImage = `url('')`;
    // document.getElementById("image").style.backgroundColor = "#8e68ff";
    /*
    2) Change the text  of the div with the id = "image" 
    back to the original text.  You can use the html code to see what that original text was
    */
    // document.getElementById("image").innerHTML = "Hover over an image below to display here.";
    //document.getElementById("image").textContent = "Hover over an image below to display here.";
  
}
//document.getElementsByTagName('p')

function pickImage(){
    fig_botswana = ["VictoriaFalls3ok.jpg",
        "OkavangoDelta.jpg",
        "ChobeNationalPark.jpg"]
    // fig_madagascar = ["figures/NosyBe.jpg",
    //         "figures/NosyBe2.jpg",
    //         "figures/NosyAntsoha.jpg"]    
    let random_b = Math.floor(Math.random() * fig_botswana.length);
    let random_b2;
        do {
            random_b2 = Math.floor(Math.random() * fig_botswana.length);
        } while (random_b2 === random_b);        
    // console.log(random_b);
    // console.log(random_b2);
    let randomImg_b = "figures/" + fig_botswana[random_b]
    let randomImg_b2 = "figures/" + fig_botswana[random_b2]
    // randomImg_b = "images/" + options[Math.floor(Math.random() * options.length)];
    // let randomImg_m = fig_madagascar[Math.floor(Math.random() * fig_madagascar.length)];
    // console.log(randomImg_b)
    // console.log(randomImg_b[0]) //sbagliato
    // console.log(typeof(randomImg_b[0])) //
    // console.log(randomImg_b[1]) //vuoto
    img = document.getElementById('Botswana1')
    img.setAttribute("src",randomImg_b)
    img = document.querySelector('Botswana2')
    img.setAttribute("src",randomImg_b2)
    }    