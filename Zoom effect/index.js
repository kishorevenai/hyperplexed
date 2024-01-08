const scrollCard = document.querySelector('.scroll-card')


let count = 1
scrollCard.addEventListener("mouseover", (e) => {
    if(e.deltaY > 0) {
        count ++
    }
    else {
        count --;
    }
    console.log(count / 1000)

    count = count > 3 ? 3 : count
    count = count < 0 ? 0 : count

    scrollCard.style.scale = count
})
scrollCard.addEventListener("mouseleave", () => {    
})