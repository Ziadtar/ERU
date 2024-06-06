let wel =  document.querySelector(".wel");
let vision =  document.querySelector(".vision");
let mission =  document.querySelector(".mission");
let programs =  document.querySelector(".programs");
let AD =  document.querySelector(".AD");
let showimg = document.querySelector('.show-img')
let pathT = document.querySelector('.pathText')
let pathP = document.querySelector('.pathParagragh')
    const obj1 = {
    name:"welcome",
    imgPath:"./img/tab-dean-management.jpg",
    text:"The Faculty of Management, Economics and Business Technology, is one of the faculties of the Egyptian Russian University. The Ministerial approval to start the study from the start of the academic year 2018/2019 offers undergraduate students with a wide range of majors, minors and elective courses in the fields of business Administration, Accounting, Economics, Political Science, professional technology and computers. The faculty aims at providing unique programs of high quality education; serving as a starting point for potential career development. The faculty programs provide the faculty graduates with the needs of a highly competitive labor market."
    }
    const obj2 = {
        name:"Our Vision",
        imgPath:"./img/tab-vision-management.jpg",
        text:"To be a distinguished higher education institution locally, regionally, and globally, providing values and effectively involved in the research & development to shape the future of business and society."
    }
    const obj3 = {
        name:"Our Mission",
        imgPath:"./img/tab-mission-management.jpg",
        text:"The faculty's Mission is to serve society by delivering high quality academic and vocational education. The faculty contributes in the qualification of the human capital and entrepreneurs who will be future ready and socially responsible through putting together rigorous curriculum and advanced academic programs. To involve students and faculty in innovative education and research projects linked with industry, academic and research institutions in Egypt and abroad. The faculty intends to invest in the future of Egypt through providing it with specialists and professionals equipped with knowledge and know-how."
    }
    const obj4 = {
        name:"Offered Programs and Awarded Degrees",
        imgPath:"./img/tab-mangement-programs.jpg",
        text:"The faculty currently, consists of the following departments:Business Administration Department.Accounting Department.Economics Department.Political Science Department.Advanced Computing.Business Professional Information Technology.Each department is in charge of teaching programs connected with its field of specialization."
    }
    const obj5 = {
        name:"The faculty offers the following four academic degrees:",
        imgPath:"./img/tab-academic-management.jpg",
        text:"Bachelor of Science in Business Administration (B. Sc. in BA):With Concentrations:Management Marketing Human resource management FinanceBachelor of Science in Accounting (B. Sc. in ACC)Bachelor of Science in Economics (B. Sc. in ECO).Bachelor of Science in Political Science (B. Sc. in POL).Bachelor of Advanced Computing.Bachelor of Business Professional Information Technology."
    }
    pathT.textContent = obj1.name;
    showimg.src = obj1.imgPath;
    pathP.textContent= obj1.text
    wel.onclick = function () {
        pathT.textContent = obj1.name;
        showimg.src = obj1.imgPath;
        pathP.textContent= obj1.text;
    } 
    vision.onclick = function () {
        pathT.textContent = obj2.name;
        showimg.src = obj2.imgPath;
        pathP.textContent= obj2.text;
    } 
    mission.onclick = function () {
        pathT.textContent = obj3.name;
        showimg.src = obj3.imgPath;
        pathP.textContent= obj3.text;
    } 
    programs.onclick = function () {
        pathT.textContent = obj4.name;
        showimg.src = obj4.imgPath;
        pathP.textContent= obj4.text;
    } 
    AD.onclick = function () {
        pathT.textContent = obj5.name;
        showimg.src = obj5.imgPath;
        pathP.textContent= obj5.text;
    } 
    console.log(pathP.textContent)
    