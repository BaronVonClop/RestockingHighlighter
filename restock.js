var storeChoice = "1";
var assembleArray = [];
var greenArray = [];
var yellowArray = [];
var redArray = [];
var blankArray =[];
var rightCarrat = ">";

function assembleScript(){
    $("#codetext").val("")
    //Take the user's input and apply it to the arrays, one for each color.
    greenArray = $('#greenBox').val().split("\n").filter(Boolean);
    yellowArray = $('#yellowBox').val().split("\n").filter(Boolean);
    redArray = $('#redBox').val().split("\n").filter(Boolean);
    blankArray = $('#blankBox').val().split("\n").filter(Boolean);
    parsedArray = [];
    //Delete junk entries from the copy/paste.
    removeJunk(greenArray); removeJunk(yellowArray); removeJunk(redArray); removeJunk(blankArray);

    //Create the script.
    //Is there a better way to do this? I am sure there is.
    //Do I know what it is?
    //Fuck no.
    assembleArray.push("// ==UserScript==");
    assembleArray.push("// @name         Restocking Profit Highlighter (" + storeChoice + ")");
    assembleArray.push("// @namespace    http://neopets.lipomancer.com/");
    assembleArray.push("// @version      1.0");
    assembleArray.push("// @description  Automatically highlights profitable items in Neopets stores.");
    assembleArray.push("// @author       MediaTriggerWords, modified by Lipomancer");
    assembleArray.push("// @match        http://www.neopets.com/objects.phtml?obj_type=" + storeChoice + "&type=shop");
    assembleArray.push("// ==/UserScript==");
    assembleArray.push("");
    assembleArray.push("(function() {");
    assembleArray.push("");
    assembleArray.push("    var patterns = [], classes = [];");
    assembleArray.push("    addGlobalStyle('span.red { background-color: #000000; color: #ff1a00; } ' +");
    assembleArray.push("           'span.yellow { background-color: #000000; color: #fdff00;} ' +");
    assembleArray.push("           'span.green { background-color: #000000; color: #23ea11;} ' +");
    assembleArray.push("           'span.blank { background-color: #ffffff; color: #ffffff} ' );");
    assembleArray.push("    defwords([");
    //Fare thee well
    scriptArrayAssembly(blankArray);
    assembleArray.push("        ], \"blank\");");
    assembleArray.push("    defwords([");
    //For it's Arkansas killin' time
    scriptArrayAssembly(redArray);
    assembleArray.push("                ], \"red\");");
    assembleArray.push("    defwords([");
    //And this time of year
    scriptArrayAssembly(yellowArray);
    assembleArray.push("         ], \"yellow\");");
    assembleArray.push("    defwords([");
    //Is a favorite of mine
    scriptArrayAssembly(greenArray);
    assembleArray.push("         ], \"green\");");
    assembleArray.push("    function defwords(words, which_class) {");
    assembleArray.push("    for (var i = 0; i < words.length; i++) {");
    assembleArray.push("        var w = words[i].replace(/^=/, \"\");");
    assembleArray.push("        patterns.push(new RegExp(\"([^a-zA-Z])(\" + w + \")([^a-zA-Z])\",");
    assembleArray.push("        words[i].match(/^=/) ? \"g\" : \"gi\"));");
    assembleArray.push("        classes.push(which_class);");
    assembleArray.push("    }}");
    assembleArray.push("    function quoteHTML(s) {");
    assembleArray.push("    s = s.replace(/&/g, \"&amp;\");");
    assembleArray.push("    s = s.replace(/</g, \"&lt;\");");
    assembleArray.push("    s = s.replace(/>/g, \"&gt;\");");
    assembleArray.push("    return s;");
    assembleArray.push("    }");
    assembleArray.push("    function addGlobalStyle(css) {");
    assembleArray.push("    var head, style;");
    assembleArray.push("    head = document.getElementsByTagName('head')[0];");
    assembleArray.push("    if (!head) {");
    assembleArray.push("        return;");
    assembleArray.push("    }");
    assembleArray.push("    style = document.createElement('style');");
    assembleArray.push("    style.type = 'text/css';");
    assembleArray.push("    style.innerHTML = css;");
    assembleArray.push("    head.appendChild(style);");
    assembleArray.push("    }");
    assembleArray.push("    var curpat;");
    assembleArray.push("    var changes;");
    assembleArray.push("    function repmatch(matched, before, word, after) {");
    assembleArray.push("    changes++;");
    assembleArray.push("    return before + '<span class=\"' + classes[curpat] +' " + "\"" + rightCarrat + "' + word + '</span" + rightCarrat + "' + after;");
    assembleArray.push("    }");
    assembleArray.push("    function highlight(s) {");
    assembleArray.push("    s = \" \" + s;");
    assembleArray.push("    for (curpat = 0; curpat < patterns.length; curpat++) {");
    assembleArray.push("        s = s.replace(patterns[curpat],");
    assembleArray.push("            repmatch);");
    assembleArray.push("    }");
    assembleArray.push("    return s.substring(1);");
    assembleArray.push("    }");
    assembleArray.push("    if (document.contentType &&");
    assembleArray.push("        (!(document.contentType.match(/html/i)))) {");
    assembleArray.push("        return;");
    assembleArray.push("    }");
    assembleArray.push("    var textnodes = document.evaluate(\"//body//text()\", document, null,");
    assembleArray.push("        XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);");
    assembleArray.push("    for (var i = 0; i < textnodes.snapshotLength; i++) {");
    assembleArray.push("    var node = textnodes.snapshotItem(i);");
    assembleArray.push("    if (node.parentNode.tagName != \"STYLE\" &&");
    assembleArray.push("        node.parentNode.tagName != \"TEXTAREA\" &&");
    assembleArray.push("        node.parentNode.tagName != \"SCRIPT\") {");
    assembleArray.push("        if (!(node.data.match(/^\\s*$/))) {");
    assembleArray.push("        var s = \" \" + node.data + \" \";");
    assembleArray.push("        changes = 0;");
    assembleArray.push("        var d = highlight(quoteHTML(s));");
    assembleArray.push("        if (changes > 0) {");
    assembleArray.push("            var rep = document.createElement(\"span\");");
    assembleArray.push("            rep.innerHTML = d.substring(1, d.length - 1);");
    assembleArray.push("            node.parentNode.replaceChild(rep, node);");
    assembleArray.push("        }");
    assembleArray.push("        }");
    assembleArray.push("    }");
    assembleArray.push("    }");
    assembleArray.push("})();");

    //Debug -- sends every line to the console.
    for (var i = 0; i < assembleArray.length; i++) {
        console.log(assembleArray[i]);
    }

    $("#codetext").val(assembleArray.join("\n"))
}

function removeJunk(array){
    //Remove junk from user input.
    var i = 0;
    while (i < array.length) {
        //Search every line. If it is a price or whitespace, delete it, leaving only item names. Otherwise, keep.
        if(array[i].search("NP") !== -1 || array[i].search("  ") !== -1){
            array.splice(i, 1);
        } else {
            array[i] = array[i].trim();
            i++;
        }
    }
    //Sort by length, so that smaller items don't override larger items on display.
    array.sort(function(a,b){
       return b.length - a.length;
    });
    return array;
}

function scriptArrayAssembly(array){
    var i = 0;
    while (i < array.length){
        if(i + 1 !== array.length) {
            assembleArray.push("        \"" + array[i] + "\",");
            i++
        } else{
            assembleArray.push("        \"" + array[i] + "\"");
            i++
        }
    }
}

function faqToggle(){
    if($("#faqdiv").is(":visible")){
        $("#faqdiv").fadeOut();
    } else {
        $("#faqdiv").fadeIn();
    }
}