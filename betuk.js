feladvany = [
    ["k__r", "magas hangrendű", "éöű", "mgh"],
    ["t__r", "mély hangrendű", "aáoú", "mgh"],
]

mgh = ["a","á","e","é","i","í","o","ó","ö","ő","u","ú","ü","ű"]
msh = ["b","c","cs","d","dz","dzs","f","g","gy","h","j","k","l","m","n","ny","p","r","s","sz","t","ty","v","z","zs"]

//itt lehet beállítani, hogy melyik betűkészletet akarjuk használni: igaz vagy hamis lehet az érték
//CSAK AZ EGYIK LEHET IGAZ
var maganhangzo_kell = "igaz";
var massalhangzo_kell = "hamis";

document.getElementById("ujGomb").style.display = "none";
document.getElementById("ujra").style.visibility = "hidden";
document.getElementById("ellenorzes").style.display = "block";
document.getElementById("ellenorzesvege").style.display = "none";
document.getElementById("helpkeret").style.visibility = "hidden";
document.getElementById("alertbox").style.display = "none"; 
document.getElementById("ellenorzes").style.visibility = "hidden";
document.getElementById("maganhangzo").style.visibility = "hidden";



var alapszin_mgh = "moccasin";
var alapszin_msh = "tomato";
var kivalasztott_szin_mgh = "orange"
var kivalasztott_szin_msh = "yellow"

var maganhangzok_szama = mgh.length;
var massalhangzok_szama = msh.length;
var feladvany_szama = feladvany.length;

var jo_valasz = 0;

var tomb = kever(feladvany_szama);
console.log(feladvany[tomb[0]])

const jatekos_valasza = [];

//az indit eljárásban ezzel számoljuk a megoldott (elindított) feladványok sorszámát
var szamlalo = 0;

document.getElementById("feladvany").style.visibility = "hidden";



if (maganhangzo_kell == "igaz") {
    /* annyi div elem létrehozása egyeni azonosítóval (id), amennyi mgh van*/
    for (let index = 0; index <maganhangzok_szama; index++) {

        var block_to_insertdoboz2 ;
        var container_blockdoboz2 ;
        
        // div elem beszúrása
        block_to_insertdoboz2 = document.createElement( 'div' );     
        container_blockdoboz2 = document.getElementById( 'maganhangzo' );
        container_blockdoboz2.appendChild( block_to_insertdoboz2 );
        block_to_insertdoboz2.setAttribute('id','mgh'  + (index + 1));
        block_to_insertdoboz2.setAttribute('class', 'doboz2');
        /* betű elhelyezése az elemben */
        block_to_insertdoboz2.innerHTML = mgh[index];
    }

    var maganhangzok_osztaly = document.getElementsByClassName("doboz2");

    //minden betűnek alapszín beállítva
    for (let index = 0; index < maganhangzok_szama; index++) {
        maganhangzok_osztaly[index].style.backgroundColor = alapszin_mgh;  
    }
    
}

if (massalhangzo_kell == "igaz") {
    /* annyi div elem létrehozása egyeni azonosítóval (id), amennyi msh van*/
    for (let index = 0; index <massalhangzok_szama; index++) {

        var block_to_insertdoboz ;
        var container_blockdoboz ;
        
        // div elem beszúrása
        block_to_insertdoboz = document.createElement( 'div' );     
        container_blockdoboz = document.getElementById( 'massalhangzo' );
        container_blockdoboz.appendChild( block_to_insertdoboz );
        block_to_insertdoboz.setAttribute('id','msh'  + (index + 1));
        block_to_insertdoboz.setAttribute('class', 'doboz');
        /* betű elhelyezése az elemben */
        block_to_insertdoboz.innerHTML = msh[index];
    }

    var massalhangzok_osztaly = document.getElementsByClassName("doboz");


    for (let index = 0; index < massalhangzok_szama; index++) {
        massalhangzok_osztaly[index].style.backgroundColor = alapszin_msh;  
    }
}

  
    let $doboz2 = $('.doboz2');
    let $doboz = $('.doboz');

    /* A magánhangzó betűdobozokra kattintás */
    $doboz2.click(function(event){
        //ha az aktuális betűre kattintanak, akkor akítvvá teszi (piros)
        if (this.style.backgroundColor == alapszin_mgh) {
            this.style.backgroundColor = kivalasztott_szin_mgh;
        }
        else
        {
            this.style.backgroundColor = alapszin_mgh;  
        }
    });
    
    /* A mássalhangzó betűdobozokra kattintás */
    $doboz.click(function(event){
        //ha az aktuális betűre kattintanak, akkor akítvvá teszi (piros)ő
        if (this.style.backgroundColor == alapszin_msh) {
            this.style.backgroundColor = kivalasztott_szin_msh;
        }
        else
        {
            this.style.backgroundColor = alapszin_msh;  
        }
    });

    $("#indit").click(indit);

    function indit() {

                //minden betűnek alapszín beállítva
                if (maganhangzo_kell == "igaz") {
                    for (let index = 0; index < maganhangzok_szama; index++) {
                        maganhangzok_osztaly[index].style.backgroundColor = alapszin_mgh;  
                    }
                }
                
                if (massalhangzo_kell == "igaz") {
                    for (let index = 0; index < massalhangzok_szama; index++) {
                        massalhangzok_osztaly[index].style.backgroundColor = alapszin_msh;  
                    }
                }

                document.getElementById("feladvany").style.visibility = "visible";
                document.getElementById("indit").style.visibility = "hidden";
                document.getElementById("ertekeles").style.visibility = "hidden";
                document.getElementById("ellenorzes").style.visibility = "visible";
                document.getElementById("maganhangzo").style.visibility = "visible";

                if (szamlalo < feladvany_szama) {
                    document.getElementById( 'mondat' ).innerHTML = feladvany[tomb[szamlalo]][0];
                    document.getElementById( 'almondat' ).innerHTML = feladvany[tomb[szamlalo]][1];
                }
                szamlalo += 1;

}


    
    $('#ellenorzes').click(function() {
    //amíg van feladvány, addig dolgozik
    console.log("sz" + szamlalo)
    if (szamlalo < feladvany_szama) {
        var jo_valasz = 0;
        document.getElementById("ertekeles").style.visibility = "visible";
        document.getElementById("indit").style.visibility = "visible";
        document.getElementById("ellenorzes").style.visibility = "hidden";

        //akkor dolgozik, ha magánhangókkal játszunk
        if (maganhangzo_kell == "igaz") {
            //végignézi az összes képernyőre rajzolt magánhangzót
            for (let index = 0; index <maganhangzok_szama; index++) {
                //megvizsgálja, melyik betű van kiválasztva a szín alapján
                if (maganhangzok_osztaly[index].style.backgroundColor == kivalasztott_szin_mgh) {
                    //a kiválasztott betűket egy listába rakja, ez a játékos válasza
                    jatekos_valasza.push(mgh[index]);
                    //console.log(mgh[index]);
                } 
            }
            //beteszi egy listába a helyes válaszokat
            var elfogadott_valszok = feladvany[tomb[szamlalo - 1]][2];
            var elfogadott_valszok_szama = elfogadott_valszok.length;
            //végignézi a helyes válaszokat 
            for (let index = 0; index < elfogadott_valszok_szama; index++) {
                //ha a játékos válasza benne van az elfogadott (helyes) válaszokban
                if (jatekos_valasza.includes(elfogadott_valszok[index])) {
                    //végignézi az összes képernyőre rajzolt magánhangzót
                    for (let indexj = 0; indexj < maganhangzok_szama; indexj++) {
                        //ha a képernyőre rajzolt magánhangzó éppen az egyik helyes válasz
                        if (maganhangzok_osztaly[indexj].innerHTML == elfogadott_valszok[index]) {
                            //console.log("bent vok" +  maganhangzok_osztaly[indexj].innerHTML)
                            //zöldre festi azt a betűt
                            maganhangzok_osztaly[indexj].style.backgroundColor = "green";
                            jo_valasz += 1;
                        }                
                    }
                }
                
            }

            //végignézi az összes képernyőre rajzolt magánhangzót
            for (let indexj = 0; indexj < maganhangzok_szama; indexj++) {
                //ha ez egy kiválasztott betű
                if (maganhangzok_osztaly[indexj].style.backgroundColor == kivalasztott_szin_mgh) {
                    //akkor pirosra festi
                    maganhangzok_osztaly[indexj].style.backgroundColor = "red";
                }                
            }

            var szoveg1 = "A feladatnak " + elfogadott_valszok_szama + " helyes megoldása van. ";
            var hianyzik = elfogadott_valszok_szama - jo_valasz;
            console.log(hianyzik);
            if (hianyzik <= 0) {
                var szoveg2 = "Mindegyik meg lett jelölve";
            } else {
                var szoveg2 = hianyzik + " jó megoldás megjelölése hiányzik.";
            }

            document.getElementById("ertekeles").innerHTML = szoveg1 + szoveg2;
            //console.log("ennyi jó van: " + elfogadott_valszok_szama)
            //console.log("játékos: " + jatekos_valasza)
            //console.log(feladvany[tomb[szamlalo - 1]][2]);
    
        }

        //a magyarázatot lásd: a magánhangzós résznél
        if (massalhangzo_kell == "igaz") {
            for (let index = 0; index <massalhangzok_szama; index++) {
                //megvizsgálja, melyik betű van kiválasztva
                if (massalhangzok_osztaly[index].style.backgroundColor == kivalasztott_szin_msh) {
                    jatekos_valasza.push(msh[index]);
                    //console.log(msh[index]);
                }
                
            }

            var elfogadott_valszok = feladvany[tomb[szamlalo - 1]][2];
            var elfogadott_valszok_szama = elfogadott_valszok.length;

            for (let index = 0; index < elfogadott_valszok_szama; index++) {

                if (jatekos_valasza.includes(elfogadott_valszok[index])) {
                    for (let indexj = 0; indexj < massalhangzok_szama; indexj++) {
                        if (massalhangzok_osztaly[indexj].innerHTML == elfogadott_valszok[index]) {
                            massalhangzok_osztaly[indexj].style.backgroundColor = "green"
                            jo_valasz += 1;
                        }                
                    }
                }
                
            }

            for (let indexj = 0; indexj < massalhangzok_szama; indexj++) {
                if (massalhangzok_osztaly[indexj].style.backgroundColor == kivalasztott_szin_msh) {
                    massalhangzok_osztaly[indexj].style.backgroundColor = "red"
                }                
            }

            document.getElementById("ertekeles").innerHTML = "A feladatnak " + elfogadott_valszok_szama + " helyes megoldása van. " + (elfogadott_valszok_szama - jo_valasz) + " megoldás nem lett megjelölve."
            console.log("ennyi jó van: " + elfogadott_valszok_szama)
            console.log("játékos: " + jatekos_valasza)
            console.log(feladvany[tomb[szamlalo - 1]][2]);
        }
    } else {
        document.getElementById("ujra").style.visibility = "visible";
        document.getElementById("ellenorzes").style.visibility = "hidden";
    }
});

$('#ujra').click(function() {
    document.location.reload();
});