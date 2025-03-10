function makeid(l) {
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < l; i++) {  // Fixed `:` to `;`
        result += char.charAt(Math.floor(Math.random() * char.length)); // Fixed `Math`
    }
    return result;
}

// Do not change the code below.
const l = parseInt(prompt("Enter a number."), 10); // Convert input to an integer
alert(makeid(l));
