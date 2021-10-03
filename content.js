var stNumb = ['st1', 'st8', 'st10', 'st13', 'st14', 'st7', 'st4', 'st11'];
const klasa = "3 PTN";
var foundData = [];
var temp = "";
var temp2 = "";

for(j=0; j<stNumb.length; j++){
    for(i=0; i<$(`.${stNumb[j]}`).length; i++) $(`.${stNumb[j]}:eq(${i})`).addClass("temp");
}

$('.temp').each(function(){
    if($(this).text().search("2021") != -1) temp = $(this).text();
    else if($(this).text().substring(1, 6) == klasa){
        foundData.push(`<br><br><b>${temp}</b>`);
        foundData.push(`<br>${temp2} | ${$(this).text()}`);
    }
    
    temp2 = $(this).text()
});

for(i=0; i<foundData.length-2 && foundData.length>2; i++){
    if(foundData[i] == foundData[i+2]) foundData.splice(i+2, 1);
}

if(foundData.length>0) {
    foundData[0] = foundData[0].substring(8, foundData[0].length);
    document.write(foundData.join(""));
}else document.write(`<h1>Brak zastępstw</h1>`);

document.body.style.fontFamily = "Arial";
document.close();