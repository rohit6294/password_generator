
    function generatePassword() {
    const length = document.getElementById("length").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    let charset = "";
    if (useUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (useLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (useNumbers) charset += "0123456789";
    if (useSymbols) charset += "!@#$%^&*()_+";

    if (charset === "") {
        alert("Please select at least one option (uppercase, lowercase, numbers, or symbols).");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").innerText = password;
}

function copyPassword()
  {
    const tempElement = document.createElement("textarea");
    const generatedPassword = document.getElementById("password").innerText;
    if (generatedPassword=="") { 
        alert("No password generated!");
        return; 
    }
    tempElement.value = generatedPassword;
    document.body.appendChild(tempElement);

    tempElement.select();
    document.execCommand("copy");
    tempElement.remove();
    
    alert("Password copied to clipboard");
  }
