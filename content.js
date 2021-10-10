var stNumb = ['st1', 'st8', 'st10', 'st13', 'st14', 'st7', 'st4', 'st11'];
const classSymbol = "3PTN";
var data = [];
var tempTeacher = "";
var tempNumber = "";
var temp = "";

// add class temp to every needed element
for(j=0; j<stNumb.length; j++){
    for(i=0; i<$(`.${stNumb[j]}`).length; i++) $(`.${stNumb[j]}:eq(${i})`).addClass("temp");
}

$('.temp').each(function(){
    var classList = $(this).attr("class");
    var classArr = classList.split(/\s+/);

    if(classArr.includes("st1")) {
        tempTeacher = $(this).text();
        if(!tempTeacher.includes("2021")) temp = $(".st0").text();
    }
    else if($(this).text().replace(/\s/g, '').substring(0, classSymbol.length) == classSymbol){
        data.push(`<br><br><b>${tempTeacher}</b>`);
        data.push(`<br>${tempNumber} | ${$(this).text()}`);
    }
    
    var tempData = $(this).text().replace(/\s/g, '');        // /\s/g   - all whitespaces 
    if(tempData.match(/^\d+$/)) tempNumber = $(this).text(); // /^\d+$/ - entire String has only digits 
});

// delete duplicates (teachers)
data = [...new Set(data)];

if(data.length>0) {
    data[0] = data[0].substring(8, data[0].length);
    document.write(`<strong>${temp}</strong><br><br>${data.join("")}`);
}else document.write(`<h1>Brak zastępstw</h1>`);

document.body.style.fontFamily = "Arial";
document.close();