function setData() {
    let expiresDate = new Date();
    expiresDate.setHours(expiresDate.getHours() + 1);
    let input = document.getElementById("date").value;
    let dateNow = new Date()
    let inputDate = new Date(input)
    let age = dateNow.getFullYear() - inputDate.getFullYear()
    document.cookie =  `age=${age}; expires=${expiresDate.toUTCString()}; path=/`
}
document.getElementById("date").addEventListener("input", setData)
document.getElementById("clear").onclick = () => {
    document.cookie = "date=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
    document.getElementById("date").value = "";
}
if (getCookie("age")) {
    alert(getCookie("age"))
}
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}