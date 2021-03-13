const query = window.location.search;
const parameters = new URLSearchParams(query);

const dictionary = {
    "swordburst": "Swordburst2.lua",
    "404":"404Script.lua"
}

function readFromScript(script_name)
{
    var rawFile = new XMLHttpRequest();
    rawFile.addEventListener("load", () => {
        document.body.innerHTML = rawFile.responseText;
    })
    rawFile.open("GET", `${window.location.origin}/scripts/${dictionary[script_name]}`);
    rawFile.send();
}

if (parameters.has('script')){
    var script_name = parameters.get("script").toLowerCase();
    document.title = script_name;

    if (dictionary[script_name] !== undefined){
        readFromScript(script_name);
    }else{
        readFromScript("404")
    }
}else{
    document.title = "fucking idiot";
    readFromScript("404")
}