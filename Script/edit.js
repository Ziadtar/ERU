pic =document.getElementById("pic")
inputFile=document.getElementById("input-file")
inputFile.onchange = function(){
    pic.src =URL.createObjectURL(inputFile.files[0])
}
const Btn2 = document.querySelector(".btn2");
const Btn = document.querySelector(".btn");
const profile = document.querySelector(".profile")
const form = document.getElementById("form")
Btn.onclick = function(){
    profile.classList.remove("profile")
    form.classList.remove("invisable")
    profile.classList.add("invisable")
    form.classList.add("form")
}
Btn2.onclick = function(){
    profile.classList.add("profile")
    form.classList.add("invisable")
    profile.classList.remove("invisable")
    form.classList.remove("form")
}