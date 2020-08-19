var dropdiv = document.getElementById("drop")
var dropenable = 0, sourceenable = 0, editmode = 1;

window.onload= () => {
    enableEdit();
}

enableEdit = () => {
    richText.document.designMode = 'On';
}
disableEdit = () => {
    richText.document.designMode = 'Off';
}

sourceToggle = () => {
    if(sourceenable === 1){
        richText.document.getElementsByTagName('body')[0].innerHTML = richText.document.getElementsByTagName('body')[0].textContent
        document.getElementById('sourceicon').classList.remove('on')
        document.getElementById('previewicon').classList.remove('disable')
        sourceenable = 0
    }else{
        richText.document.getElementsByTagName('body')[0].textContent = richText.document.getElementsByTagName('body')[0].innerHTML
        document.getElementById('sourceicon').classList.add('on')
        document.getElementById('previewicon').classList.add('disable')
        sourceenable = 1
    }
}
preview = () => {
    if(editmode === 0){
        enableEdit()
        document.getElementById('previewicon').classList.remove('on')
        document.getElementById('sourceicon').classList.remove('disable')
        editmode = 1
    }else{
        disableEdit()
        document.getElementById('previewicon').classList.add('on')
        document.getElementById('sourceicon').classList.add('disable')
        editmode = 0
    }
}

exec = (command) => {
    richText.document.execCommand(command, false, null);
}

execArg = (command, arg) => {
    richText.document.execCommand(command, false, arg);
}

dropdown = () => {
    if(dropenable === 0){
        dropenable = 1;
        dropdiv.classList.remove('hidden');
        document.getElementById('more').classList.add('dropped')
    }
    else if(dropenable ===1 ){
        dropenable = 0;
        dropdiv.classList.add('hidden');
        document.getElementById('more').classList.remove('dropped')
    }
}

bgcolor = (color) => {
    document.getElementById('iframe').setAttribute("style", `background-color: ${color};`)
}
