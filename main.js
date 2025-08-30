const fullimgbox = document.getElementById("fimgbox");
const fullimg = document.getElementById('fimg');


function openImg(img){
    fullimgbox.style.display = "flex";

    fullimg.src = img;

}
function closeFullimg(){
    fullimgbox.style.display = "none";
}
