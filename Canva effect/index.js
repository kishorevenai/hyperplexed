const dot = document.querySelector('.dot')
const parentDot = document.querySelector('.parent_Dot')
console.log(dot);


document.addEventListener("mousemove", (e) => {

    // const colorPallets = ["rgb(0,187,249)","rgb(0,245,212)","rgb(252,254,255)"]

    const dot = document.createElement("div")
    dot.className = "dot"
    parentDot.appendChild(dot)
    console.log(e.clientX,e.clientY)
    dot.style.left = `${e.clientX}px`
    dot.style.top = `${e.clientY}px`
    dot.style.transform = `rotateX(${parseInt(Math.random() * 100)}deg)`
    dot.style.boxShadow =`0rem 0rem 10px 10px blue`

    const time = setTimeout(() => {
        parentDot.removeChild(dot)
    },1000)
    // clearTimeout(time)
})