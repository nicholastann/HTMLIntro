var basearr = new Array();
var it = 1;
var startIndex = 0;
var previous = 0;
var x = 1;
var output = window.location.href.split('');
var autoclick = false;

if (output.length == 59) arrsize = Number(output[58]);
else if (output.length == 60) arrsize = Number(output[58])*10 + Number(output[59]);
else if (output.length == 61) arrsize = Number(output[58])*100 +Number(output[59])*10 + Number(output[60]);
else if (output.length == 62) arrsize = 1000;
else arrsize = 500;

var n = arrsize;
var endIndex = arrsize;

function resize() {
    arrsize = document.getElementById("sizey").value;
    n = arrsize;
    window.location.href = "i6.html" + "?" + arrsize;
}

function firststep() {
    for (var i = 1; i<arrsize+1;i++) {
        basearr[i-1] = i;
        document.getElementById("mystruct").innerHTML += '<div class="visualcol" id="' + i + '"</div>';
        document.getElementById(i).style.width = (100/arrsize)+"%";
    }
    disp();
}

//randomizes positions of elements in the array
function scramble() {
    n = arrsize;
    it = 1;
    startIndex = 0;
    previous = 0;
    x = 1;
    endIndex = arrsize;
    for (var i = 1; i<arrsize+1; i++) { //we'll do arrsize randomly generated swaps to basearr as a shuffle
       var r1 = Math.floor(Math.random() * arrsize); //random pos 1
       var r2 = Math.floor(Math.random() * arrsize); //random pos 2
       var r3 = Math.floor(Math.random() * arrsize); //random pos 3
       var r4 = Math.floor(Math.random() * arrsize); //random pos 4
       var temp = basearr[r1];
       basearr[r1] = basearr[r2];
       basearr[r2] = temp;
       temp = basearr[r3];
       basearr[r3] = basearr[r4];
       basearr[r4] = temp;
    }
    disp();
}

//renders the array onto the screen
function disp() { 
    for (var i = 1; i<arrsize+1; i++) {
        document.getElementById(i).style.height = (basearr[i-1]/(arrsize/100))+"%";
        document.getElementById(i).style.backgroundColor = "hsl(" + (330 * basearr[i-1] / arrsize) + ",80%,50%)";
    }
}


function bubblesorty() {
    if (n == 1) {
        n = arrsize;
        return;
    } 
    for (var i=0; i<n-1; i++) {
        if (basearr[i] > basearr[i+1]) { 
            temp = basearr[i];
            basearr[i] = basearr[i+1];
            basearr[i+1] = temp;
            disp();
        }
    }
    n--;
    setTimout(waity(), 25000); 
}




function selectionsorty() {
    if ( startIndex >= arrsize-1 ) {
        startIndex = 0;
        return;
    }
    var minIndex = startIndex;
    for ( var index = startIndex + 1; index < arrsize; index++ ) {
        if (basearr[index] < basearr[minIndex]) minIndex = index;
    }
    var temp = basearr[startIndex];
    basearr[startIndex] = basearr[minIndex];
    basearr[minIndex] = temp;
    disp();

    startIndex++;
    setTimout(waity(), 25000); 
}


function insertionsorty() {
    var value = basearr[it];
	var j = it;

	while (j > 0 && basearr[j - 1] > value) {
        basearr[j] = basearr[j - 1];
		j--;
	}
    basearr[j] = value;
    disp();

	if (it + 1 <= n) {
        it++;
        setTimout(waity(), 25000); 
    }
    else {
        n = arrsize;
        return;
    }
}

function bogosorty() {
    var sorted = true;
        for (var i = 0; i<arrsize; i++) {
            if (basearr[i] != i+1) {
                sorted = false;
                break;
            }
        }
        if (sorted) return;
        var r1 = Math.floor(Math.random() * arrsize); //random pos 1
        var r2 = Math.floor(Math.random() * arrsize); //ranodm pos 2
        var temp = basearr[r1];
        basearr[r1] = basearr[r2];
        basearr[r2] = temp;
        disp();
        setTimout(waity(), 25000);
}

function mergesorty() {
    if (previous == 0) {
        for (var i = 0; i<arrsize; i+=2) {
            if (basearr[i] > basearr[i+1]) {
                temp = basearr[i];
                basearr[i] = basearr[i+1];
                basearr[i+1] = temp;
            }
        }
        previous++;
    }
    else if (previous == 1) {
        for (var z = 0; z<(arrsize/4); z++) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3-i; j++) {  
                    if (basearr[(z*4)+j] > basearr[(z*4)+j+1]) {
                        var temp = basearr[(z*4)+j];
                        basearr[(z*4)+j] = basearr[(z*4)+j+1];
                        basearr[(z*4)+j+1] = temp;
                    }
                }
            } 
        }
        previous++;
    }
    else if (previous == 2) {
        for (var z = 0; z<arrsize/10; z++) {
            for (var i = 0; i < 9; i++) {
                for (var j = 0; j < 9-i; j++) {  
                    if (basearr[(z*10)+j] > basearr[(z*10)+j+1]) {
                        var temp = basearr[(z*10)+j];
                        basearr[(z*10)+j] = basearr[(z*10)+j+1];
                        basearr[(z*10)+j+1] = temp;
                    }
                }
            } 
        }
        previous++;
    }
    else if (previous == 3) {
        for (var z = 0; z<arrsize/25; z++) {
            for (var i = 0; i < 24; i++) {
                for (var j = 0; j < 24-i; j++) {  
                    if (basearr[(z*25)+j] > basearr[(z*25)+j+1]) {
                        var temp = basearr[(z*25)+j];
                        basearr[(z*25)+j] = basearr[(z*25)+j+1];
                        basearr[(z*25)+j+1] = temp;
                    }
                }
            } 
        }
        previous++;
    }
    else if (previous == 4) {
        for (var z = 0; z<(arrsize/50); z++) {
            for (var i = 0; i < 49; i++) {
                for (var j = 0; j < 49-i; j++) {  
                    if (basearr[(z*50)+j] > basearr[(z*50)+j+1]) {
                        var temp = basearr[(z*50)+j];
                        basearr[(z*50)+j] = basearr[(z*50)+j+1];
                        basearr[(z*50)+j+1] = temp;
                    }
                }
            } 
        }
        previous++;
    }
    else if (previous == 5) {
        for (var z = 0; z<(arrsize/125); z++) {
            for (var i = 0; i < 124; i++) {
                for (var j = 0; j < 124-i; j++) {  
                    if (basearr[(z*125)+j] > basearr[(z*125)+j+1]) {
                        var temp = basearr[(z*125)+j];
                        basearr[(z*125)+j] = basearr[(z*125)+j+1];
                        basearr[(z*125)+j+1] = temp;
                    }
                }
            } 
        }
        previous++;
    }
    else if (previous == 6) {
        for (var z = 0; z<2; z++) {
            for (var i = 0; i < (arrsize/2); i++) {
                for (var j = 0; j < (arrsize/2)-i; j++) {  
                    if (basearr[(z*250)+j] > basearr[(z*250)+j+1]) {
                        var temp = basearr[(z*250)+j];
                        basearr[(z*250)+j] = basearr[(z*250)+j+1];
                        basearr[(z*250)+j+1] = temp;
                    }
                }
            } 
        }
        previous++;
    }
    else if (previous == 7) {
        for (var i = 0; i < arrsize-1; i++) {
            for (var j = 0; j < arrsize-1-i; j++) {  
                if (basearr[j] > basearr[j+1]) {
                    var temp = basearr[j];
                    basearr[j] = basearr[j+1];
                    basearr[j+1] = temp;
                }
            }
        } 
        previous++;
    }
    else {
        previous = 0;
        return;
    }
    disp();
    setTimout(waity(), 25000);
}

function quicksorty() {
    var z = 0;
    if (previous == 0) {
        while (z < arrsize) {
            var r = Math.floor(Math.random() * arrsize/50) + 1; //1,2,3 random 2
            for (var i = 0; i < r-1; i++) {
                for (var j = 0; j < r-i-1; j++) {
                    if (basearr[z+j] > basearr[z+j+1]) {
                        var temp = basearr[z+j];
                        basearr[z+j] = basearr[z+j+1];
                        basearr[z+j+1] = temp;
                    }
                }
            }
            z+= r;
        }
        previous++;
    }
    else if (previous == 1) {
        while (z < arrsize) {
            var r = Math.floor(Math.random() * arrsize/25) + arrsize/50; //3-20 random 20
            for (var i = 0; i < r-1; i++) {
                for (var j = 0; j < r-i-1; j++) {  
                    if (basearr[z+j] > basearr[z+j+1]) {
                        var temp = basearr[z+j];
                        basearr[z+j] = basearr[z+j+1];
                        basearr[z+j+1] = temp;
                    }
                }
            }
            z+= r;
        }
        previous++;
    }
    else if (previous == 2) {
        while (z < arrsize) {
            var r = Math.floor(Math.random() * arrsize/10) + arrsize/25; //20-50 random 50
            for (var i = 0; i < r-1; i++) {
                for (var j = 0; j < r-i-1; j++) {  
                    if (basearr[z+j] > basearr[z+j+1]) {
                        var temp = basearr[z+j];
                        basearr[z+j] = basearr[z+j+1];
                        basearr[z+j+1] = temp;
                    }
                }
            }
            z+= r;
        }
        previous++;
    }
    else if (previous == 3) {
        while (z < arrsize) {
            var r = Math.floor(Math.random() * arrsize/4) + arrsize/10; //50-125 random 125
            for (var i = 0; i < r-1; i++) {
                for (var j = 0; j < r-i-1; j++) {  
                    if (basearr[z+j] > basearr[z+j+1]) {
                        var temp = basearr[z+j];
                        basearr[z+j] = basearr[z+j+1];
                        basearr[z+j+1] = temp;
                    }
                }
            }
            z+= r;
        }
        previous++;
    }
    else if (previous == 4) {
        while (z < arrsize) {
            var r = Math.floor(Math.random() * arrsize/2) + arrsize/4; //125-250 random 50
            for (var i = 0; i < r-1; i++) {
                for (var j = 0; j < r-i-1; j++) {  
                    if (basearr[z+j] > basearr[z+j+1]) {
                        var temp = basearr[z+j];
                        basearr[z+j] = basearr[z+j+1];
                        basearr[z+j+1] = temp;
                    }
                }
            }
            z+= r;
        }
        previous++;
    }
    else if (previous == 5) {
        for (var i = 0; i < arrsize-1; i++) {
            for (var j = 0; j < arrsize-1-i; j++) {  
                if (basearr[j] > basearr[j+1]) {
                    var temp = basearr[j];
                    basearr[j] = basearr[j+1];
                    basearr[j+1] = temp;
                }
            }
        } 
        previous++;
    }
    else return;

    disp();
    setTimeout(waity(), 25000);
}

function cocktailsorty() {
    if (x == basearr) return; //base case
    //high to low
    for (var i = x; i < n; i++) { 
        if (basearr[i] > basearr[i+1]) { 
            temp = basearr[i];
            basearr[i] = basearr[i+1];
            basearr[i+1] = temp; 
        } 
    }
    //low to high
    for (var i = n; i >= x-1; i--) { 
        if (basearr[i] > basearr[i+1]) { 
            temp = basearr[i];
            basearr[i] = basearr[i+1];
            basearr[i+1] = temp; 
            disp();
        } 
    } 
    n--; //end
    x++; //start 
}

function doubleselectionsorty() {
    if (startIndex >= arrsize-1) return;
    
    var minIndex = startIndex;
    var maxIndex = endIndex;

    for ( var index = startIndex + 1; index < endIndex; index++ ) {
        if (basearr[index] < basearr[minIndex]) minIndex = index;
    }
    for (var index = endIndex; index > startIndex; index--) {
        if (basearr[index] > basearr[maxIndex]) maxIndex = index;
    }
    var temp = basearr[startIndex];
    basearr[startIndex] = basearr[minIndex];
    basearr[minIndex] = temp;
    temp = basearr[endIndex];
    basearr[endIndex] = basearr[maxIndex];
    basearr[maxIndex] = temp;
    disp();

    startIndex++;
    endIndex--;
    setTimout(waity(), 25000); 
}

function gravitysorty() {
        //Set up abacus
        grid = new Array(new Array());
        var levelcount = new Array();
        for(var i = 0; i < arrsize; i++) {
            levelcount[i] = 0;
            for(var j = 0; j < arrsize; j++) {
                grid[j][i] = 0;
            }
        }
        //Drop the beads
        for (var i=0; i<arrsize; i++) {
            var num = anArr;
            for (var j = 0; num > 0; j++, num--) {
                grid[levelcount[j]++][j] = 1;
            }
        }
        //Count the beads
        for(var i = 0; i < arrsize; i++) {
            var putt = 0;
            for(var j = 0; j < arrsize && grid[arrsize - 1 - i][j] == 1; j++) {
                putt++;
            }
            basearr[i] = putt;
        }

    disp();
    setTimout(waity(), 25000); 
}


function bogosort() {
    bogosorty();
}

function insertionsort() {
    insertionsorty();
}

function bubblesort() {
    bubblesorty();
}

function selectionsort(){
    selectionsorty();
}

function mergesort() {
    mergesorty();
}

function quicksort() {
    quicksorty();
}

function cocktailsort() {
    setInterval(cocktailsorty(), 2500);
}

function doubleselectionsort() {
    doubleselectionsorty();
}

function gravitysort() {
    gravitysorty();
}

function waity() {
    setTimeout(waity(), 2500);
}























var myCanvas = document.createElement("canvas");
myCanvas.width = 900;
myCanvas.height = 540;
document.body.appendChild(myCanvas);
var ctx = myCanvas.getContext("2d");

function fractal(pax, pay, mag, max) {
    var magnificationFactor = mag;
    var panX = pax;
    var panY = pay;
    for(var x=0; x < myCanvas.width; x++) {
       for(var y=0; y < myCanvas.height; y++) {
            var belongsToSet = inset(x/magnificationFactor - panX, y/magnificationFactor - panY, max);
            if(belongsToSet == 0) {
                ctx.fillStyle = '#000';
                ctx.fillRect(x,y, 1,1); // Draw a black pixel
            } 
            else {
                var hue = belongsToSet*20;
                ctx.fillStyle = 'hsl(' + hue + ', 100%, 50%)';
                ctx.fillRect(x,y, 1,1); // Draw a colored pixel
            }
       } 
    }
    newpax = pax - (225/mag);
    newpay = pay - (135/mag);
    newmag = mag + 800;
    newmax = max + 10;
    document.getElementById("butt").innerHTML = '<button class="btn btn--pill btn--green" id="fresh" onclick="fractal(' + newpax + ',' + newpay + ',' + newmag + ',' + newmax + ')"> Zoom</button>'
}

function inset(x,y, max) {
    var realComponentOfResult = x;
    var imaginaryComponentOfResult = y;
    var maxIterations = max;
    for(var i = 0; i < maxIterations; i++) {
         var tempRealComponent = realComponentOfResult * realComponentOfResult - imaginaryComponentOfResult * imaginaryComponentOfResult + x;
         var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult + y;
         realComponentOfResult = tempRealComponent;
         imaginaryComponentOfResult = tempImaginaryComponent;

         if(realComponentOfResult * imaginaryComponentOfResult > 5) return (i/maxIterations * 100);
    }
    return 0;  
}          


function drawtrees() {
    myCanvas.width = 1800;
    myCanvas.height = 1080; 
    draw(200,980,210,0,80,0);
    draw(350,1025,210,0,80,0);

    draw(925,1020,210,0,80,0);
    draw(1100,1080,210,0,80,0);
    draw(1300,1130,210,0,80,0);

    draw(525,1075,210,0,80,0);
    draw(700,1100,210,0,80,0);
}

function draw(startX, startY, len, angle, branchWidth, iteration) {
    ctx.beginPath();
    ctx.save();

    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(0,0,0,0.2)";
    ctx.strokeStyle = "rgba(40,20,10)";
    ctx.fillStyle = "rgba(40,20,10)";
    ctx.lineWidth = branchWidth;
    ctx.translate(startX, startY);
    ctx.rotate(angle * Math.PI/180);
    ctx.moveTo(0, 0);
    if(angle > 0)   ctx.bezierCurveTo(10,  -len/2,  1, -len/2, 0, -len);
    else            ctx.bezierCurveTo(-10, -len/2, -1, -len/2, 0, -len);
    ctx.stroke();
    ctx.fill();
    
    if(len < 10) {
        ctx.beginPath();
        ctx.arc(0, -len, 10, 0, Math.PI/2);
        ctx.fillStyle = "green"; 
        ctx.fill();
        ctx.restore();
        return;
    }

    draw(0, -len, len*0.8, angle+10 + (Math.floor(Math.random() * 10)-5)*.5, branchWidth*0.7, iteration+1);
    draw(0, -len, len*0.8, angle-10 + (Math.floor(Math.random() * 10)-5)*.5, branchWidth*0.7, iteration+1);
    
    ctx.restore();
}









function primes() {
    for (var x = 3; x<100000; x++) {
        var isprime = true;
        for (var i = 2; i<= x/2; i++) {
            if (x % i == 0) isprime = false;
        }
        if (isprime) document.writeln(x+",");
    }
}


























$(function() {
  $(document).bind('ready scroll', function() {
	   	var docScroll = $(document).scrollTop();
		  if (docScroll >= 100 & $('html').height() > 768) {
			  if (!$('body').hasClass('sticky')) {
				  $('body').addClass('sticky');
  			}
	  	} else {
		  	$('body').removeClass('sticky');
		  	$('.site-nav').removeAttr('style');
	  	}
    });
  
  $('.site-nav a').click(function(e){
    if(!$(this).hasClass('search-trigger'))
    {
      $('.site-nav a.active').removeClass('active');
      $(this).addClass('active');
    }
    $(this).blur()
    e.preventDefault();
  });
});

var sn = 1;

function delRow(Row) {
    var elem = document.getElementById(Row);
    elem.parentNode.removeChild(elem);
}

function onDeviceReady() {
    var db = window.openDatabase("mydatabase", "1.0", "Contracts", 200000);
    console.log(db);
    db.transaction(populateDB, errorCB, successCB);
}

function populateDB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS CONTRACT (Title UNIQUE, SerialNumber INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, CompanyName, ContactName, ContactAddr, Start, End, Email, Notes)');
}
//called to display all information from DB
function queryDB(tx) {
    tx.executeSql('SELECT * FROM CONTRACT', [], querySuccess, errorCB);
}

//called ti display certain information from DB
function searchQueryDB(tx) {
    tx.executeSql("SELECT * FROM CONTRACT where SerialNumber like ('%" + document.getElementById("Search").value + "%') OR Title like ('%" + document.getElementById("Search").value + "%') OR CompanyName like ('%" + document.getElementById("Search").value + "%')", [], querySuccess, errorCB);
}

function goSearch() {
    var db = window.openDatabase("Database", "1.0", "ContractDB", 200000);
    db.transaction(searchQueryDB, errorCB);
}

//callback for queryDb and searchQueryDB where they return the trasaction as tx and the results of the query as results
function querySuccess(tx, results) {
    //set headers for table
    var tblText = '<table id="Table1"><tr><th>Serial Num</th> <th>Title</th> <th>Company</th></tr>';
    var len = results.rows.length;
    //add row and onclick for each result from query
    for (var i = 0; i < len; i++) {
        var tmpArgs = results.rows.item(i).SerialNumber;
        tblText += '<tr onclick="openContract(' + tmpArgs + ');"><td>' + results.rows.item(i).SerialNumber + '</td><td>'
            + results.rows.item(i).Title + '</td><td>' + results.rows.item(i).CompanyName + '</td></tr>';
    }
    tblText += "</table>";
    document.getElementById("tblDiv").innerHTML = tblText;
}

function errorCB(err) {
    console.log(err);
    alert("Error processing SQL: " + err.code);
}

function successCB() {
    document.getElementById("Search").innerHTML = "";
    var db = window.openDatabase("Database", "1.0", "ContractDB", 200000);
    //console.log(db);
    db.transaction(queryDB, errorCB);
}

function NewContract()  {
    document.getElementById("NewContractPopup").style.display = "block";
    var db = window.openDatabase("Database", "1.0", "ContractDB", 200000);
    db.transaction(insertDB, errorCB, successCB);
    document.getElementById("NewContractPopup").style.display = "none";
}

function insertDB(tx) {
    tx.executeSql('INSERT INTO CONTRACT (Title, CompanyName, ContactName, ContactAddr, Start, End, Email, Notes) VALUES ("' + document.getElementById("NewTitle").value
        + '","' + document.getElementById("NewComName").value + '","' + document.getElementById("NewConName").value + '","' + document.getElementById("NewConAddr").value +
        '","' + document.getElementById("NewStart").value + '","' + document.getElementById("NewEnd").value + '","' + document.getElementById("NewEmail").value +
        '","' + document.getElementById("NewNotes").value + '")');
}

function DeleteContract() {
    var db = window.openDatabase("Database", "1.0", "ContractDB", 200000);
    db.transaction(deleteRow, errorCB);
    document.getElementById("EditContractPopup").style.display = "none";
}

function deleteRow(tx) {
    tx.executeSql('DELETE FROM CONTRACT WHERE SerialNumber = ' + sn, [], successCB, errorCB);
}

//change html file when row is clicked in table, sedn serial number
function openContract(SerialNumber) {
    sn = SerialNumber;
    document.getElementById("EditContractPopup").style.display = "block";
    var db = window.openDatabase("Database", "1.0", "ContractDB", 200000);
    db.transaction(loadRow, errorCB);
}

function loadRow(tx) {
    console.log(sn);
    tx.executeSql('SELECT * FROM CONTRACT where SerialNumber = ' + sn, [], openRow, errorCB);
}

function openRow(tx, results) {

    document.getElementById("EditTitle").value = results.rows.item(0).Title;
    document.getElementById("EditSerial").value = results.rows.item(0).SerialNumber;
    document.getElementById("EditComName").value = results.rows.item(0).CompanyName;
    document.getElementById("EditConName").value = results.rows.item(0).ContactName
    document.getElementById("EditConAddr").value = results.rows.item(0).ContactAddr;
    document.getElementById("EditStart").value = results.rows.item(0).Start;
    document.getElementById("EditEnd").value = results.rows.item(0).End;
    document.getElementById("EditEmail").value = results.rows.item(0).Email;
    document.getElementById("EditNotes").value = results.rows.item(0).Notes;
}

function SaveContract() {
    if (document.getElementById("EditTitle").value == "") {
        document.getElementById("EditTitle").style.borderColor = "red";
        document.getElementById("EditTitle").setAttribute("placeholder", "Please Enter a Title");
    }
    else if (document.getElementById("EditComName").value == "") {
        document.getElementById("EditComName").style.borderColor = "red";
        document.getElementById("EditComName").setAttribute("placeholder", "Please Enter a Company Name");
    }
    else {
        var db = window.openDatabase("Database", "1.0", "ContractDB", 200000);
        db.transaction(editRow, errorCB);
        document.getElementById("EditContractPopup").style.display = "none";
    }
}

function editRow(tx) {
    tx.executeSql('UPDATE CONTRACT SET Title ="' + document.getElementById("EditTitle").value +
        '", CompanyName= "' + document.getElementById("EditComName").value + '", ContactName= "' + document.getElementById("EditConName").value + '", ContactAddr= "' + document.getElementById("EditConAddr").value +
        '", Start= "' + document.getElementById("EditStart").value + '", End= "' + document.getElementById("EditEnd").value + '", Email= "' + document.getElementById("EditEmail").value +
        '", Notes= "' + document.getElementById("EditNotes").value + '" WHERE SerialNumber = '
        + sn, [], successCB, errorCB);
}