const block = document.querySelector("table");
let arr =[];

const clickBlock = (e)=> {
    console.log(e);
    if(e.target.classList.contains("table-col")){
        if(arr.length>1){
            let arr1 = arr.shift();
            arr1.classList.remove("hero-col");
        }
        arr.push(e.target);
    }
    arr.forEach((el)=>{
        el.classList.add("hero-col")
    })
}

block.addEventListener("click",clickBlock)
// console.log(block)