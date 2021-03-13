const query = window.location.search;
const parameters = new URLSearchParams(query);

const dictionary = {
    "swordburst": "Swordburst2.lua",
    "404":"404Script.lua"
}

function readFromScript(script_name)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", `./scripts/${dictionary[script_name]}`, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                document.body = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

if (parameters.has('script')){
    var script_name = parameters.get("script");
    document.title = script_name;

    if (dictionary[script_name] !== undefined){
        readFromScript(script_name);
    }
}else{
    readFromScript("404")
}