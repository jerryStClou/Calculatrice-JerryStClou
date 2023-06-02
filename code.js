nombre1 = document.querySelector("#nombre1");
nombre2 = document.querySelector("#nombre2");
egale = document.querySelector("#egale");
reponse = document.querySelector(".reponse");
boutonCalcul = document.querySelector("#boutonCalcul");
let a;
let nbr1;
let nbr2;

egale.addEventListener("click",function(){
nbr1 = Number(nombre1.value);
nbr2 = Number(nombre2.value);

a = boutonCalcul.value;
switch (a) {
    case '+':
      console.log(nbr1+nbr2);
      reponse.innerHTML = `<p>${nbr1+nbr2}</p>`;
      break;
    case '-':
          console.log(nbr1-nbr2);
          reponse.innerHTML = `<p>${nbr1-nbr2}</p>`;
             break;
     case '/':
          console.log(nbr1/nbr2);
          reponse.innerHTML = `<p>${nbr1/nbr2}</p>`;
                break;
    case '*':
           console.log(nbr1*nbr2);
           reponse.innerHTML = `<p>${nbr1*nbr2}</p>`;
                 break;

    default:
       console.log("il y'a une erreur");
   }
});




    

