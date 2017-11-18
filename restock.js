var storeChoice = "1";
var assembleArray = [];
var greenArray = [];
var yellowArray = [];
var redArray = [];
var blankArray =[];

function assembleScript(){
    //Take the user's input and apply it to the arrays, one for each color.
    greenArray = $('#greenBox').val().split("\n")
    yellowArray = $('#yellowBox').val().split("\n")
    redArray = $('#redBox').val().split("\n")
    blankArray = $('#blankBox').val().split("\n")
    var g = 0;
    //Remove junk from user input. If it isn't an item name, delete it.
    while (g < greenArray.length) {
        if(greenArray[g].search("NP") !== -1 || greenArray[g].search("  ") !== -1){
            console.log("Deleting: " + greenArray[g] + " from greenArray");
            greenArray.splice(g, 1);
        } else {
            g++;
        }
    }

    assembleArray.push("// ==UserScript==");
    assembleArray.push("// @name         Restocking Profit Highlighter (" + storeChoice + ")");
    assembleArray.push("// @namespace    http://neopets.lipomancer.com/")
    assembleArray.push("// @version      1.0");
    assembleArray.push("// @description  Automatically highlights profitable items in Neopets stores.");
    assembleArray.push("// @author       MediaTriggerWords, modified by Lipomancer");
    assembleArray.push("// @match        http://www.neopets.com/objects.phtml?obj_type=" + storeChoice + "&type=shop");
    assembleArray.push("// ==/UserScript==");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");
    assembleArray.push("");


    //Debug -- sends every line to the console.
    for (var i = 0; i < assembleArray.length; i++) {
        console.log(assembleArray[i]);
    }
}