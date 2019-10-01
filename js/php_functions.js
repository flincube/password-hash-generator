function phpfunctions_strlen(str){
    return str.length;
}

function phpfunctions_strpos(string, find){
    return string.indexOf(find);
}

function phpfunctions_sixCharRandom()
{
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 6; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function phpfunctions_substr(string, start, count){
    return string.substring(start, start + count);
}

function phpfunctions_ord(input){
    var r = input.charCodeAt(0);
    return r;
}