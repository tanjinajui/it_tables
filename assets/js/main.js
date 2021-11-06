function create_tr(table_id) {
    let table_body = document.getElementById(table_id)
    console.log(table_body);
    let tr = document.createElement("tr")
    tr.classList.add("table-row")
    let td = document.createElement("td")
    let input = document.createElement("input")
    input.setAttribute("placeholder", "Please write your content")
    input.classList.add("label-in")
    td.appendChild(input)      
    tr.appendChild(td)
    // const td2 = document.createElement("td")
    // const div = document.createElement("div")
    // div.classList.add("checkbox-content")
    // let input2 = document.createElement("input")
    // input2.setAttribute("type", "checkbox")
    // input2.classList.add("checkbox")
    // const label = document.createElement("label")
    // label.classList.add("label")
    // // label.classList.add("label:after")
    // div.appendChild(input2)
    // div.appendChild(label)
    // td2.appendChild(div)
    // tr.appendChild(td2)
    // table_body.appendChild(tr)

    const td3 = document.createElement("td")
    const div2 = document.createElement("div2")
    div2.classList.add("checkbox-cont")
    let checkboxBtn = document.createElement("button");
    // checkboxBtn.setAttribute("type","button")
    checkboxBtn.classList.add("button")
    // let checkboxIcon = document.querySelector(".checkbox-icon");
    // checkboxBtn.classList.add("checkboxIcon");
    document.getElementById("checkbox-icon").classList.add("active");
    div2.appendChild(checkboxBtn)
    td3.appendChild(div2)
    tr.appendChild(td3)
    table_body.appendChild(tr)
    
}
// function checkboxBtn(){
//  console.log("yes")
// document.querySelector(".checkbox-icon").classList.add("active");
// }
//checkboxBtn js
const checkboxBtn = document.querySelectorAll(".checkbox-btn");
checkboxBtn.forEach((checkboxBtn) =>
checkboxBtn.addEventListener("click", (event) =>{
    console.log("yes");
    event= document.querySelector(".checkbox-icon").classList.add("active");
})
)
// let checkboxBtn = document.getElementsByClassName("checkbox-btn");
// for(let i = 0; i<= checkboxBtn.length-1; i++){
//     checkboxBtn[i].addEventListener("click",function(){
//     document.getElementById("checkbox-icon").classList.add("active");
    
//     }); 
// }
