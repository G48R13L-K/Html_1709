function getUser(){
    const email = document.querySelector("#email")
    const emailLocal = localStorage.getItem("user")
    email.innerText = emailLocal
}
getUser()

function logout(){
    const logoutBtn = document.querySelector("button")
    logoutBtn.addEventListener("click",()=>{
        localStorage.removeItem("user")
        window.location.href = "/Login/"
    })
}
logout()