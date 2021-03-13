const query = window.location.search;
const parameters = new URLSearchParams(query);

function readFromScript(script_name)
{
    document.title = script_name;
    var rawFile = new XMLHttpRequest();
    rawFile.onloadend = () => {
        if (rawFile.status == 200){
            document.body.innerHTML = rawFile.responseText.replace(/(?:\r\n|\r|\n)/g, '<br>');
        }else{
            readFromScript("404Script");
        }
    }
    rawFile.open("GET", `${window.location.origin}/scripts/${script_name}.lua`);
    rawFile.send();
}

if (parameters.has('script')){
    var script_name = parameters.get("script");

    readFromScript(script_name);
}else{
    readFromScript("404Script")
}