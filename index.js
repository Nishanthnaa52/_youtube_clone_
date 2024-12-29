console.log("JS file is running");

addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".Search-bore");
    const videoGrid = document.querySelector(".video-grid");
    let count = 0;

    const createVideoCard = () => {
        const videoCards = document.querySelectorAll(".video-box");

        if (count < videoCards.length) {
            const videoCard = document.createElement("div");
            videoCard.classList.add("video-box");
            videoCard.innerHTML = videoCards[count].innerHTML;
            count++; 
            return videoCard;
        } else {
            console.warn("No more cards to load.");
            return null;
        }
    };

    const loadCard = () => {
        const newCard = createVideoCard();
        if (newCard) {
            videoGrid.appendChild(newCard);
        }
    };

    window.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 10) {
            loadCard();
        }
    });


    // search bar listener and move to youtube search
    function search(query) {
         window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    }
    
    searchBar.addEventListener("keypress", (event) => {
        const query = searchBar.value.trim();
        if (query && event.key === "Enter") {
           search(query);
        }
    });

    const searchBtn = document.querySelector(".search-icon-button");
    searchBtn.addEventListener("click", () => {
        const query = searchBar.value.trim();
        if (query) {
            search(query);
        }
    });

});



