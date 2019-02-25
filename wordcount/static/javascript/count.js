var fulltext = document.getElementById('checktext').value;
function check_empty(){
    if (fulltext.length == 0){
        alert("IT'S EMPTY! PLEASE WRITE");
        return false;
    }
    else
        return true;
}