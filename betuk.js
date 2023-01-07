feladvany = [
    ["k__r", "magas", "éöű"],
    ["t__r", "mély", "aáoú"],
]

mgh = ["a","á","e","é","i","í","o","ó","ö","ő","u","ú","ü","ű"]
msh = ["b","c","cs","d","dz","dzs","f","g","gy","h","j","k","l","m","n","ny","p","r","s","sz","t","ty","v","z","zs"]

//itt lehet beállítani, hogy melyik betűkészletet akarjuk használni: igaz vagy hamis lehet az érték
var maganhangzo_kell = "igaz";
var massalhangzo_kell = "hamis";

document.getElementById("ujGomb").style.display = "none";
document.getElementById("ujra").style.display = "none";
document.getElementById("ellenorzes").style.display = "none";
document.getElementById("ellenorzesvege").style.display = "none";
document.getElementById("helpkeret").style.visibility = "hidden";
document.getElementById("alertbox").style.display = "none"; 

var alapszin_mgh = "moccasin";
var alapszin_msh = "tomato";
var kivalasztott_szin_mgh = "orange"
var kivalasztott_szin_msh = "yellow"

var maganhangzok_szama = mgh.length;
var massalhangzok_szama = msh.length;
var feladvany_szama = feladvany.length;

var tomb = kever(feladvany_szama);

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
        //ha az aktuális betűre kattintanak, akkor akítvvá teszi (piros)ő
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

    $('#ellenorzes').click(function() {
        for (let index = 0; index <maganhangzok_szama; index++) {
            //megvizsgálja, melyik betű van kiválasztva
            if (maganhangzok_osztaly[index].style.backgroundColor == kivalasztott_szin_mgh) {
                console.log(mgh[index]);
            }
            
        }

        for (let index = 0; index <massalhangzok_szama; index++) {
            //megvizsgálja, melyik betű van kiválasztva
            if (massalhangzok_osztaly[index].style.backgroundColor == kivalasztott_szin_msh) {
                console.log(msh[index]);
            }
            
        }
    });

    $("#indit").click(indit);

    function indit() {
        document.getElementById("feladvany").style.visibility = "visible";
        if (szamlalo < feladvany_szama) {
            document.getElementById( 'mondat' ).innerHTML = feladvany[tomb[szamlalo]][0];
            document.getElementById( 'almondat' ).innerHTML = feladvany[tomb[szamlalo]][1];
        }
        szamlalo += 1;

    }