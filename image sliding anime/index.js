const track = document.getElementById('image-track');
const check = document.getElementsByClassName('check')
const te = document.querySelector('.te')
const images = document.querySelectorAll('.image')

console.log(track.dataset)
console.log("=>>>>>>>>>>>>>>",images[0].clientWidth)

setInterval(() => {
    images.forEach(item => {
        item.style.height = "56vmin"
    })
},1)

window.onmousedown = e => {        
    track.dataset.mouseUpEt = e.clientX    
    console.log(track.dataset)
}

window.onmousemove = e => {
    if(track.dataset.mouseUpEt === "0") return;    

    const mouseDelta = parseFloat(track.dataset.mouseUpEt) - e.clientX
    const maxDelta = window.innerWidth / 2

    const percentage = (mouseDelta/maxDelta) * -100  
    const nextPercentage = parseFloat(track.dataset.prevPercentage) + percentage
    track.dataset.recordPercentage = nextPercentage

    te.innerHTML = `${nextPercentage} ${percentage}`

    if(nextPercentage > 0 || nextPercentage < -100) {
        return
    }
    


    track.style.transform = `translate(${nextPercentage}%, -50%)`  
    
    images.forEach(item => {        
        item.style.objectPosition = `${percentage + 30}% 50%`
    })
}

window.onmouseup = () => {
    track.dataset.mouseUpEt = "0"
    track.dataset.prevPercentage = track.dataset.recordPercentage
}