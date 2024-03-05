let hashmap = {}
hashmap['ägg'] = 0;
hashmap['salad'] = 0;
hashmap['flesk'] = 0;
hashmap['majs'] = 0;
hashmap['margarin'] = 0;
hashmap['appelsin'] = 0;

kassadrop = () => {
    let v = document.getElementById("dropdownkassa")
    v.style.display === "none" ? 
    (v.style.display = "block", iskassadroped = false):
    (v.style.display = "none", iskassadroped = true);
      
    document.getElementById("totalcost").textContent = 'Total: ' + ((hashmap['ägg'] * 19.9) + 
    (hashmap['appelsin']*20.9) + 
    (hashmap['majs']*20.5)+ 
    (hashmap['flesk']*49.9) + 
    (hashmap['salad']* 10.5)+ 
    (hashmap['margarin']*25.5))
}

legtillegg = () => {
    let v = document.getElementById("egg").textContent;
    hashmap['ägg'] += Number(v);
}
legtillappelsin = () => {
    let v = document.getElementById("appelsin").textContent;
    hashmap['appelsin'] += Number(v);
}
legtillegg = () => {
    let v = document.getElementById("egg").textContent;
    hashmap['ägg'] += Number(v);
}
legtillegg = () => {
    let v = document.getElementById("egg").textContent;
    hashmap['ägg'] += Number(v);
}
legtillegg = () => {
    let v = document.getElementById("egg").textContent;
    hashmap['ägg'] += Number(v);
}
legtillegg = () => {
    let v = document.getElementById("egg").textContent;
    hashmap['ägg'] += Number(v);
}



