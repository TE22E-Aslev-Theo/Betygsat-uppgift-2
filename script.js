let egg = 0;
let salad = 0;
let flesk = 0;
let majs = 0;
let margarin = 0;
let appelsin = 0;
function uppdatekassa(){
    document.getElementById("totalcost").textContent = 'Total: ' + ((egg * 19.9) + 
    (appelsin *20.9)+ 
    (majs*20.5)+ 
    (flesk*49.9)+ 
    (salad* 10.5)+ 
    (margarin*25.5)).toFixed(2)
}
function uppdateantal() {
    document.getElementById("antalägg").textContent = 'Antal ägg: ' + egg + 'kg'
    document.getElementById("antalappelsiner").textContent = 'Antal appelsiner: ' + appelsin + 'kg'
    document.getElementById("antalmajs").textContent = 'Antal majs: ' + majs
    document.getElementById("antalfläsk").textContent = 'Antal fläsk: ' + flesk
    document.getElementById("antalsalad").textContent = 'Antal salad: ' + salad
    document.getElementById("antalbakmargarin").textContent = 'Antal bakmargarin: ' + margarin + 'kg'
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
    uppdateantal()   
}
legtillappelsin = () => {
    let v = document.getElementById("appelsin").textContent;
    appelsin += Number(v);
    uppdatekassa()
    uppdateantal() 
}
legtillmajs = () => {
    let v = document.getElementById("majs").textContent;
    majs += Number(v);
    uppdatekassa()
    uppdateantal() 
}
legtillflesk = () => {
    let v = document.getElementById("fläsk").textContent;
    flesk += Number(v);
    uppdatekassa()
    uppdateantal() 
}
legtillsalad = () => {
    let v = document.getElementById("salad").textContent;
    salad += Number(v);
    uppdatekassa()
    uppdateantal() 
}
legtillbm = () => {
    let v = document.getElementById("bakmargarin").textContent;
    margarin += Number(v);
    uppdatekassa()
    uppdateantal() 
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
remove = () => {
    egg = 0;
    salad = 0;
    flesk = 0;
    majs = 0;
    margarin = 0;
    appelsin = 0;
    uppdatekassa()
    uppdateantal()
}