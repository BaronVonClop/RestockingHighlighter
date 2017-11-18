var storeChoice = "1";
var assembleArray = [];
var greenArray = [];
var yellowArray = [];
var redArray = [];
var blankArray =[];

function assembleScript(){
    var greenText = $('#greenBox').val();

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