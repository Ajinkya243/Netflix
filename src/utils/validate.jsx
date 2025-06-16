export const checkValidData=(email,password)=>{
const isEmailValid=/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/.test(email);
const isPasswordValid=password.length>8
if(!isEmailValid) return "Email is not valid";
if(!isPasswordValid) return "Password length should be greater than 8";

return null
}

