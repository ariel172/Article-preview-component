const share = document.querySelector(".share"); 
const social = document.querySelector(".social"); 

share.addEventListener("click", () => {
    social.classList.toggle("active"); /*ajouer la class active qui n'est pas là
                                        enleve et affiche l'élément*/
});
