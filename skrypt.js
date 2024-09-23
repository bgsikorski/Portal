function oblicz(){
    let liczba = document.getElementById("liczba").value;
    let newsletter = document.getElementById("newsletter").checked;
    let cena;
    if (liczba > 50){
        cena = liczba * 1;
    }
    else {
        cena = liczba * 2;
    }
    if (newsletter == true){
        cena = cena - (liczba * 0.2);
    }
    document.getElementById("wynik").innerHTML = "<b>Koszt ogłoszeń: " + cena + " PLN</b>";
}