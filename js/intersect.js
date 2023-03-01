$(document).ready(() => {
    //card container
    const cardContainer = document.querySelector(".card-container");
    //cards
    const cards = document.querySelectorAll('.card');
    // load new cards method
    function loadNewCards() {
        for (let i=0; i<5; i++){
            let randomNum = Math.floor(Math.random() * 200) + i;
            let url = "https://picsum.photos/1000?random=" + randomNum;
            const card = document.createElement("div")
            card.textContent = "Wow! A new card!"
            card.classList.add("card")
            card.classList.add("additional-card")
            card.style.backgroundImage = "url("+url+")";
            observer.observe(card)
            cardContainer.append(card)
        }
    }

    // cards observer
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting);
            });
        },
        {
            threshold: 0.9,

        }
    );

    //last card observer
    const lastCardObserver = new IntersectionObserver(entries => {
        const lastCard = entries[0]
        if (!lastCard.isIntersecting) return
        loadNewCards()
        lastCardObserver.unobserve(lastCard.target)
        lastCardObserver.observe(document.querySelector(".card:last-child"))
    }, {
        rootMargin: "50px"
    })

    //last card observe
    lastCardObserver.observe(document.querySelector(".card:last-child"))

    // start observing cards
    cards.forEach(card => {
        observer.observe(card);  
    })
});