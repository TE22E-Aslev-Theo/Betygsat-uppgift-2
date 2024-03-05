
egg = 0;
salad = 0;
flesk = 0;
majs = 0;
margarin = 0;
appelsin = 0;

function uppdatekassa(){
    document.getElementById("totalcost").textContent = 'Total: ' + ((egg * 19.9) + 
    (appelsin *20.9)+ 
    (majs*20.5)+ 
    (flesk*49.9)+ 
    (salad* 10.5)+ 
    (margarin*25.5)).toFixed(2)
}

kassadrop = () => {
    let v = document.getElementById("dropdownkassa")
    v.style.display === "none" ? 
    (v.style.display = "block", iskassadroped = false):
    (v.style.display = "none", iskassadroped = true);
    uppdatekassa()
}

//lägg till funktioner 
legtillegg = () => {
    let v = document.getElementById("egg").textContent;
    egg += Number(v);
    uppdatekassa()
}
legtillappelsin = () => {
    let v = document.getElementById("appelsin").textContent;
    appelsin += Number(v);
    uppdatekassa()
}
legtillmajs = () => {
    let v = document.getElementById("majs").textContent;
    majs += Number(v);
    uppdatekassa()
}
legtillflesk = () => {
    let v = document.getElementById("fläsk").textContent;
    flesk += Number(v);
    uppdatekassa()
}
legtillsalad = () => {
    let v = document.getElementById("salad").textContent;
    salad += Number(v);
    uppdatekassa()
}
legtillbm = () => {
    let v = document.getElementById("bakmargarin").textContent;
    margarin += Number(v);
    uppdatekassa()
}

//öka eller förminska funktioner

meregg = () =>{
    document.getElementById("egg").textContent = 
    Number(document.getElementById("egg").textContent)+1;
}
mindreegg = () =>{
    document.getElementById("egg").textContent = 
    Number(document.getElementById("egg").textContent)-1;
}
merappelsin = () =>{
    document.getElementById("appelsin").textContent = 
    Number(document.getElementById("appelsin").textContent)+1;
}
mindreappelsin = () =>{
    document.getElementById("appelsin").textContent = 
    Number(document.getElementById("appelsin").textContent)-1;
}
mermajs = () =>{
    document.getElementById("majs").textContent = 
    Number(document.getElementById("majs").textContent)+1;
}
mindremajs = () =>{
    document.getElementById("majs").textContent = 
    Number(document.getElementById("majs").textContent)-1;
}
merflesk = () =>{
    document.getElementById("fläsk").textContent = 
    Number(document.getElementById("fläsk").textContent)+1;
}
mindreflesk = () =>{
    document.getElementById("fläsk").textContent = 
    Number(document.getElementById("fläsk").textContent)-1;
}
mersalad = () =>{
    document.getElementById("salad").textContent = 
    Number(document.getElementById("salad").textContent) + 1;
}
mindresalad = () =>{
    document.getElementById("salad").textContent = 
    Number(document.getElementById("salad").textContent) - 1;
}
mermargarin = () =>{
    document.getElementById("bakmargarin").textContent = 
    Number(document.getElementById("bakmargarin").textContent) + 1;
}
mindremargarin = () =>{
    document.getElementById("bakmargarin").textContent = 
    Number(document.getElementById("bakmargarin").textContent) - 1;
} 