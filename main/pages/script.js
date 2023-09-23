console.log(document.querySelector('a').nextElementSibling);
console.log(document.querySelector('nav'));

let nav = document.querySelector('nav');
let homeNav = nav.children[0];
let projectNav = nav.children[1];

console.log(homeNav);
console.log(homeNav.classList);

// for (const item of homeNav.classList) {
    
//     if (homeNav.classList[0] === "selected") {
    
//         homeNav.innerHTML = "no place's like Home";
        
//     }
// }


