const btn = document.querySelector("#btn");
const bulb = document.querySelector("#bulb");

btn.addEventListener("click",clickBtn);

function clickBtn(e) {
    if(btn.textContent.includes("On")){
        bulb.src = "/bulb on-off/Images/onn bulbb.jpg"
        btn.textContent = "Turn Off"
    }else {
        bulb.src = "/bulb on-off/Images/off bulbb.jpg"
        btn.textContent = "Turn On"
    }
}
