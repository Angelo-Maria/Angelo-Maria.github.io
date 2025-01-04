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

// Imposta la data di destinazione
    const targetDate = new Date("2025-05-24T16:00:00").getTime();
    const interval = setInterval(() => {
        const now = new Date().getTime(); // Ottieni la data e l'ora attuali
        const timeLeft = targetDate - now; // Calcola il tempo rimanente
        // Calcola giorni, ore, minuti e secondi:
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        // Mostra il risultato nel div con id="countdown"
        document.getElementById("countdown").innerHTML = 
        `${days} giorni, ${hours} ore, ${minutes} minuti, ${seconds} secondi`;
        // Se il countdown è finito
        if (timeLeft < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "Il countdown è terminato!";
        }
    }, 1000);   
   