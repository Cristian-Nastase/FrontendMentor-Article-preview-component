const shareButton = document.getElementById("share-button");

const authorDiv = document.getElementById("author");
const popUpDiv = document.getElementById("pop-up");

shareButton.addEventListener("click", buttonClicked);

function buttonClicked(event)
{
    popUpDiv.classList.toggle("hidden");
    popUpDiv.classList.toggle("animation");

    shareButton.classList.toggle("inverted-colors");
    
    event.stopPropagation();
}