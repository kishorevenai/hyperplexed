let h1 = document.getElementsByTagName('h1')

let random = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"


console.log(h1[0].dataset.value)

h1[0].addEventListener("mouseover", (e) => {
        let changer = 0
        const nameChange = setInterval(() => {
            let textArray = h1[0].innerText.split("")
            
            textArray =  textArray.map((alpha,index) => {
                if(index < changer) return h1[0].dataset.value[index]
                
                return random[Math.floor(Math.random() * 26)]
            }).join("")
            
            h1[0].innerText = textArray 
            
            if(changer > 12)  clearInterval(nameChange)
            changer++
        },30)
        
})

