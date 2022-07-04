window.addEventListener("load", function(event) {
    let sute = Math.floor((Math.random() * 4) + 1);
    let number= Math.floor((Math.random() * 12) + 0);
    var excuse_element = document.getElementById('number');
    var pinta_after_e = document.getElementById('pinta_after');
    var pinta_before_e = document.getElementById('pinta_before');
    var element;
    console.log(sute);
    //$("p").before("<p>Hello world!</p>");
    switch(sute){
        case 1:
            element='&spades;';
            break;
        case 2:
            element = '&clubs;';
            break;
        case 3:
            element = '&hearts;';
            break;
        case 4:
            element = '&diams;';
            break;
    }
    //number.before(element);
    if(element=='&spades;' || element == '&diams;'){
        document.getElementById('pinta_after').style.color = "red";
        document.getElementById('pinta_before').style.color = "red";
    }

    pinta_after_e.innerHTML = element;
    excuse_element.innerHTML = number;
    pinta_before_e.innerHTML = element;

}); 