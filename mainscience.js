const bigBang = document.getElementById('button1');
const bigBangDesc = document.getElementById('big-bang-desc');
bigBangDesc.style.display = 'none';
function click() {
    bigBangDesc.style.display = 'block';
    bigBang.style.display = 'none'; 
}
bigBang.addEventListener('click', click);