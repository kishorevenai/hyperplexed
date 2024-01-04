const name = document.querySelector('.name')




const random = "ABCDEFGHIJKLMNOPQUSTUVWXYZ"

const randomGenerate = () => {
    return parseInt(Math.random() * 10)
}

const singleLetter = (className) => {
    const letter = document.getElementsByClassName(className)
    const splitArray = letter[0].innerText.split("")
    
    splitArray.forEach(item => {
        const span = document.createElement('span')
        span.className = "single-word"
        span.innerText=item
        letter[0].appendChild(span)
    })

    console.log(letter)

    // span.innerText=
}
singleLetter("name")


const spans = document.querySelectorAll('.single-word')
spans.forEach(items => {
    console.log("=========>",items)
    items.innerText = random[randomGenerate()]    
})






