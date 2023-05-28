// Copyright (C) Amolgorithm


var tags = ["button", "a", "div", "input", "text-area", "img", "label"];
var allTagsInCanvasIds = [];
var currentNewElement;
var htmlCode = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='UTF-8' content='width=device-width, initial-scale=1.0'>\n</head>\n<body>\n<body>\n</html>";

function setupTagButtons() {
	
	for (var i = 0; i < tags.length; i++) {
		
		
		document.getElementById("the-creator-nav").innerHTML += "<hr><button onclick='var elmName = `" + tags[i] + "` + Math.floor(Math.random() * 1000); currentNewElement = elmName; var theElm = document.createElement(`" + tags[i] + "`); theElm.id = elmName; theElm.innerHTML = elmName; document.getElementById(`canvas-area`).appendChild(theElm); document.getElementById(`canvas-area`).appendChild(document.createElement(`br`)); addNewElementToElements(elmName);'>" + tags[i] + "</button><br>";
	}
	
	document.getElementById("the-creator-nav").innerHTML += "<hr>";
	document.getElementById("the-creator-nav").innerHTML += "<button onclick='openElements()' style='left: 0; background: rgb(40, 40, 40); position: fixed; bottom: 0; width: 20%;'>Elements</button>";
	
	document.getElementById("the-html-nav-inner").innerText = htmlCode;
	
	
}

setupTagButtons();



function searcher(input, ul) {
    var li = ul.getElementsByTagName("li");
    var filter = input.value.toUpperCase();
    var a = 0;
    
    for (var i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        var txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            a.style.backgroundColor = "rgb(40, 40, 40)";
        } else {
            li[i].style.display = "none";
        }
    }
}


function openNav() {
	document.getElementById("the-creator-nav").style.width = "25%";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.width = "70%";
}

function closeNav() {
  document.getElementById("the-creator-nav").style.width = "0";
  document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.width = "90%";
}


function openElements() {
	document.getElementById("the-element-nav").style.height = "104%";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.width = "70%";
}

function closeElements() {
	document.getElementById("the-element-nav").style.height = "0";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.width = "90%";
}


function openHTML() {
	document.getElementById("the-html-nav").style.width = "47%";
	document.getElementById("the-main").style.transition = "0.5s";
	document.getElementById("the-main").style.width = "47%";
}

function closeHTML() {
	document.getElementById("the-html-nav").style.width = "0";
	document.getElementById("the-main").style.width = "90%";
}

function openChoice(id) {
	
	document.getElementById("the-choice-nav-inner").innerHTML = "<button onclick='openStyle(`" + id + "`);'>Style</button><hr><button onclick='openAttributes(`" + id + "`);'>Attributes</button>";
	
	document.getElementById("the-choice-nav").style.height = "104%";
}


function closeChoice() {
	document.getElementById("the-choice-nav").style.height = "0";
}


function openStyle(id) {
	
	document.getElementById("the-style-nav-inner").innerHTML = "<ul id='search-list'></ul>";
	
	document.getElementById("the-style-nav-search").innerHTML = "<input type='text' id='search-input' onkeyup='searcher(document.getElementById(`search-input`), document.getElementById(`search-list`))' >";	
	
	for (var i = 0; i < (window.getComputedStyle(document.querySelector('#' + id))).length; i++) {
		document.getElementById("search-list").innerHTML += "<li><a>" + window.getComputedStyle(document.querySelector('#' + id))[i] + ": " + "<input type='text' id='input" + i + "' style='background-color: rgb(80, 80, 80); width: 30%; color: #fff; ' /><button id='change" + i + "' onclick='document.getElementById(`" + id + "`).style.cssText += `" + window.getComputedStyle(document.querySelector('#' + id))[i] + ":` + document.getElementById(`input" + i + "`).value; document.getElementById(`the-html-nav-inner`).innerText = `<!DOCTYPE html>\n<html>\n<head>\n<meta>\n</head>\n<body>\n` + document.getElementById(`canvas-area`).innerHTML + `\n</body>\n</html>`;'>Change</button><a></li>";
	}
	
	document.getElementById("the-style-nav").style.height = "104%";
}


function closeStyle() {
	document.getElementById("the-style-nav").style.height = "0";
}


function openAttributes(id) {
	var theSelector = document.getElementById(id);	
	for (var i = 0; i < theSelector.attributes.length; i++) {
		document.getElementById("the-attr-nav-inner").innerHTML += theSelector.attributes[i].nodeName + ": <input id='attrInput" + i + "' style='background-color: rgb(80, 80, 80); width: 30%; color: #fff;' placeholder='" + theSelector.attributes[i].nodeValue + "' /><button id='attrChange" + i + "' onclick='document.getElementById(`" + id + "`).setAttribute(`" + theSelector.attributes[i].name + "`, document.getElementById(`attrInput" + i + "`).value); document.getElementById(`the-html-nav-inner`).innerText = `<!DOCTYPE html>\n<html>\n<head>\n<meta>\n</head>\n<body>\n` + document.getElementById(`canvas-area`).innerHTML + `\n</body>\n</html>`;'>Change</button><br>";
	}
	document.getElementById("the-attr-nav").style.height = "104%";
}




function closeAttributes() {
	document.getElementById("the-attr-nav").style.height = "0%";
}


function addUserElement() {
	var elmId = prompt("Add Element Id: ");
	
	document.getElementById("the-element-nav").innerHTML += "<button id = 'elmbtn" + elmId + "' class='element-buttons' onclick='openChoice(`" + elmId + "`);'>" + elmId + "</button><button style='width: 30px;' onclick='this.style.display = `none`; document.getElementById(`elmbtn" + elmId + "`).style.display = `none`;'>&times;</button><br><br>";
}



function addNewElementToElements(id) {
	htmlCode = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='UTF-8' content='width=device-width, initial-scale=1.0'>\n</head>\n<body>\n" + document.getElementById("canvas-area").innerHTML + "\n<body>\n</html>";
	
	document.getElementById("the-html-nav-inner").innerText = htmlCode;
	
	document.getElementById("the-element-nav").innerHTML += "<button class='element-buttons' id='elmbtn" + id + "' onclick='openChoice(`" + id + "`);'>" + id + "</button><button style='width: 30px;' onclick='this.style.display = `none`; document.getElementById(`elmbtn" + id + "`).style.display = `none`;'>&times;</button><br><br>";
}


function downloadFile() {
	var filename = prompt("Enter name for file", "untitled.html");	
	var element = document.createElement('a');
    element.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(document.getElementById("canvas-area").innerHTML));
    element.setAttribute('download', filename);
    
    element.click();
}

function openFile(e) {
	var file = e.target.files[0];
	if (!file) {
		return;
	}
	var reader = new FileReader();
	reader.onload = function(e) {
		var contents = e.target.result;
		document.getElementById("canvas-area").innerHTML = contents;
		document.getElementById("the-html-nav-inner").innerText = contents;
	};
	reader.readAsText(file);
	
}

document.getElementById('file-input').addEventListener('change', openFile, false);


function deleteFile() {
	var result = confirm("Are you sure you want to delete this file?");
	
	theResult = result ? true :
    false;
	
	if (theResult) { 
		document.getElementById("canvas-area").innerHTML = "";
		document.getElementById("the-element-nav").innerHTML = "";
		document.getElementById("the-element-nav").innerHTML += `<a href="javascript:void(0)" class="closebtn" onclick="closeElements()">&times;</a>`;
		document.getElementById("the-html-nav-inner").innerText = "<!DOCTYPE html>\n<html>\n<head>\n<meta charset='UTF-8' content='width=device-width, initial-scale=1.0'>\n</head>\n<body>\n<body>\n</html>";
	}
}


