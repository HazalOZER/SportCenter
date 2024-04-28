
let yogaBtn = document.querySelector("#yoga");
let groupBtn = document.querySelector("#group");
let soloBtn = document.querySelector("#solo");
let strerchingBtn = document.querySelector("#strerching");
let title = document.querySelector("#classesHeader1");
let title2 = document.querySelector("#classesHeader2");
let image = document.querySelector("#classesImg");
let header = document.querySelector("#header");
let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let triangle = document.querySelector(".triangle");

window.addEventListener("scroll", (e) => {
    let scroll = window.scrollY;
    if (scroll > 50) {
        header.style.backgroundColor = "#355592";
    } else if (scroll <= 50) {
        header.style.backgroundColor = "transparent";
    }
});

yogaBtn.addEventListener("click", ()=>{
    image.src="./images/yoga.jpg";
    title.innerHTML = "Why are your Yoga ?";
    title2.innerHTML = "When comes Yoga Your Time";
    yogaBtn.style.backgroundColor = "rgb(243, 157, 10)"; 
    groupBtn.style.backgroundColor = "rgb(50, 84, 147)";
    soloBtn.style.backgroundColor = "rgb(50, 84, 147)";
    strerchingBtn.style.backgroundColor = "rgb(50, 84, 147)";

});


groupBtn.addEventListener("click", ()=> {
    image.src="./images/group.webp";
    title.innerHTML = "Why are your Group ?";
    title2.innerHTML = "When comes Group Your Time";
    groupBtn.style.backgroundColor = "rgb(243, 157, 10)";
    yogaBtn.style.backgroundColor = "rgb(50, 84, 147)";
    soloBtn.style.backgroundColor = "rgb(50, 84, 147)";
    strerchingBtn.style.backgroundColor = "rgb(50, 84, 147)";
});

soloBtn.addEventListener("click", ()=> {
    image.src="./images/solo.jpg";
    title.innerHTML = "Why are your Solo ?";
    title2.innerHTML = "When comes Solo Your Time";
    soloBtn.style.backgroundColor = "rgb(243, 157, 10)";
    groupBtn.style.backgroundColor = "rgb(50, 84, 147)";
    yogaBtn.style.backgroundColor = "rgb(50, 84, 147)";
    strerchingBtn.style.backgroundColor = "rgb(50, 84, 147)";
});

strerchingBtn.addEventListener("click", ()=> {
    image.src="./images/stret.webp";
    title.innerHTML = "Why are your Strerching ?";
    title2.innerHTML = "When comes Strerching Your Time";
    strerchingBtn.style.backgroundColor = "rgb(243, 157, 10)";
    groupBtn.style.backgroundColor = "rgb(50, 84, 147)";
    soloBtn.style.backgroundColor = "rgb(50, 84, 147)";
    yogaBtn.style.backgroundColor = "rgb(50, 84, 147)";
});





weight.addEventListener("input", (e) => {
    let heightMeter = parseFloat(height.value) / 100;
    let bmiValue = parseFloat(weight.value) / (heightMeter * heightMeter);

    if (bmiValue > 35) {
        triangle.style.left = "570px";
        console.log(bmiValue);
    } else if (bmiValue < 12) {
        triangle.style.left = "100px";
        console.log(bmiValue);
    } else if (bmiValue > 18.5 && bmiValue < 25) {
        triangle.style.left = `${bmiValue * 1.6}%`;
        console.log(bmiValue);
    } else if (bmiValue >= 25 && bmiValue < 30) {
        triangle.style.left = `${bmiValue * 1.78}%`;
        console.log(bmiValue);
    } else if (bmiValue >= 30 && bmiValue < 35) {
        triangle.style.left = `${bmiValue * 1.96}%`;
        console.log(bmiValue);
    }
});

const navbar = document.querySelector("#h-nav");
const hmbgrBtn = document.querySelector(".hmbgr");

let lastClickedId = "";

hmbgrBtn.addEventListener("click", () => {
   navbar.classList.toggle("d-none");
});

// window.addEventListener("resize", (e) => {
//     let width = e.target.innerWidth;
//     if (width > 577) {
//         navbar.style.transform = "translateY(0%)";
//     }
// });