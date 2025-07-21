let destination = prompt();
let price = parseFloat(prompt());
let nights = parseInt(prompt());
let familyPreference = Boolean(parseInt(prompt()));
let packageFamkilyFriendly = Boolean(parseInt(prompt()));

if (destination === "Hawaii" || destination === "Bahamas"){
    if(price < 2000 && nights >= 4){
        if (familyPreference === packageFamkilyFriendly){
            console.log("Package is suitable")
        } else {
            console.log("Package is not suitable.")
        }
    } else {
        console.log("Package is not suitable.")
    }
} else {
    console.log("Package is not suitable.")
}
