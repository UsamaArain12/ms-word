function formatDoc(cmd, value = null){
    if(value){
        document.execCommand(cmd, false, value);
    }else{
        document.execCommand(cmd);
    }
}

const showCode = document.getElementById('show-code');
let active = false;
showCode.addEventListener('click' , function(){
    showCode.dataset.active = !active;
    active = !active
    if(active){
    content.textcontent = content.innerHTML;

    }else{
        content.innerHTML = content.textcontent;  
    }

})


const filename = document.getElementById('filename');
function fileHandle(value){
if(value === 'new'){
    content.innerHTML = '';
    filename.value = 'untitled';
}else if(value === 'txt') {
  const blob = new Blob([content.innertext])
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a');
  link.href = url;
  link.download = `$(filename.value).txt`;
  link.click();
}else if(value === 'pdf') {
    html2pdf(content).save(filename.value);
}

}