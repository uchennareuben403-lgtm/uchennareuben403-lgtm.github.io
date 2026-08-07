const password = document.getElementById("password");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");

const chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

generate.addEventListener("click", () => {
let newPassword = "";

for(let i = 0; i < 12; i++){
newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
}

password.value = newPassword;
});

copy.addEventListener("click", () => {
if(password.value === ""){
alert("Generate a password first!");
return;
}

navigator.clipboard.writeText(password.value);

alert("Password copied!");
});