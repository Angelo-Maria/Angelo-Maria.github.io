function pickImage(){
    fig_botswana = ["VictoriaFalls3ok.jpg",
        "OkavangoDelta.jpg",
        "ChobeNationalPark.jpg",
        "OkavangoDeltaAnimali.jpg"]
    fig_madagascar = ["NosyBeSpiaggia.jpg",
        "NosyBe2.jpg",
        "NosyAntsoha.jpg"]    
    let random_b = Math.floor(Math.random() * fig_botswana.length);
    let random_b2;
        do {
            random_b2 = Math.floor(Math.random() * fig_botswana.length);
        } while (random_b2 === random_b);    
    let random_m = Math.floor(Math.random() * fig_madagascar.length);
    let random_m2;
        do {
            random_m2 = Math.floor(Math.random() * fig_madagascar.length);
        } while (random_m2 === random_m);              
    // console.log(random_b);
    // console.log(random_b2);
    let randomImg_b  = "figures/" + fig_botswana[random_b]
    let randomImg_b2 = "figures/" + fig_botswana[random_b2]
    let randomImg_m  = "figures/" + fig_madagascar[random_m]
    let randomImg_m2 = "figures/" + fig_madagascar[random_m2]
    // randomImg_b = "images/" + options[Math.floor(Math.random() * options.length)];
    // let randomImg_m = fig_madagascar[Math.floor(Math.random() * fig_madagascar.length)];
    // console.log(randomImg_b)
    // console.log(randomImg_b[0]) //sbagliato
    // console.log(typeof(randomImg_b[0])) //
    // console.log(randomImg_b[1]) //vuoto
    img = document.getElementById('Botswana1')
    img.setAttribute("src",randomImg_b)
    img = document.getElementById('Botswana2')
    img.setAttribute("src",randomImg_b2)
    img = document.getElementById('Madagascar1')
    img.setAttribute("src",randomImg_m)
    img = document.getElementById('Madagascar2')
    img.setAttribute("src",randomImg_m2)
    // console.log(randomImg_m)
    // console.log(randomImg_b)
}    