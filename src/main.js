function getBirthday() {
    let year = 2000;    // Two thousand
    let month = 8;      // September
    let date = 20;      // Twentieth
    return new Date(year, month, date);
}

function calculateAge(birthday) {
    let today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();

    if (today.getMonth() < birthday.getMonth() || 
        (today.getMonth() == birthday.getMonth() && today.getDate() > birthday.getDate())) {
        age--;
    }

    return age;
}

let birthday = getBirthday();
let age = calculateAge(birthday);

console.log(`Kainari is ${age} years old.`);