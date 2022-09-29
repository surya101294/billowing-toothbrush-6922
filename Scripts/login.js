let form=document.querySelector("form")
form.addEventListener("submit",loginfun)

let loginArr=JSON.parse(localStorage.getItem("Data")) ||[]

function loginfun(event){
    event.preventDefault()
    let obj={
        mail:form.input.value,
        gmail: form.blue.value,
        fb:form.dblue.value,
    }
    loginArr.push(obj)
    localStorage.setItem("Data" , JSON.stringify(loginArr))
    console.log(loginArr)

}