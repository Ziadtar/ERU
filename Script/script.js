 sliderImg = Array.from(document.querySelectorAll('.slider-img img'));
 sliderImgNum = sliderImg.length;
 currentSlide = 1;
var PaginationElement = document.createElement("ul");
PaginationElement.setAttribute("id","pagination-ul");
PaginationElement.setAttribute("class","bullets");
for(i = 1; i<=sliderImgNum ; i++ ){
var PaginationItem = document.createElement("li");
PaginationItem.setAttribute("data-index",i);
PaginationElement.appendChild(PaginationItem);
}
document.getElementById("indicators").appendChild(PaginationElement); 
var paginationCreatedUl = document.getElementById('pagination-ul');
var sliderItem =Array.from(document.querySelectorAll("#pagination-ul li"));
for(i=0; i<sliderItem.length; i++ ){
    sliderItem[i].onclick =function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        TheChecker();
    }
}
TheChecker();
function TheChecker(){
    removeAllClass();
    sliderImg[currentSlide -1].classList.add('active');
    paginationCreatedUl.children[currentSlide -1].classList.add('active');
}
 function removeAllClass(){
  sliderImg.forEach(function(img){
      img.classList.remove("active")
   })
   sliderItem.forEach(function(li){
      li.classList.remove("active")
   })
  }
