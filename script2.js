const walletbutton = document.querySelector(".walletbtn");
const close= document.querySelector(".closewallet");
const wallet = document.querySelector(".walletcnt");
walletbutton.addEventListener("click", ()=>{
    wallet.style.display="flex";
    })
    
    close.addEventListener("click",()=>{
    wallet.style.display="none";
    })   