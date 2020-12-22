
 
 function deslike(){
    var contadorloopdeslike = 0
    document.querySelectorAll('._8A5w5').forEach((item, index)=>{
            setTimeout(()=>{
                if(item.innerText == 'Seguindo')
                {
                    if(contadorloopdeslike>=5){
                        return console.log('parando')
                    }else{
                        item.click();
                        document.querySelectorAll('.-Cab_').forEach((item,index)=>{
                            if(item.innerText == 'Deixar de seguir'){
                                item.click()
                                contadorloopdeslike ++
                                console.log('deixou de seguir: ' + contadorloopdeslike)
                            }
                        })
                    } 
            }
            }, index*5000)
    })

}

console.log('foi')
const interval = setInterval(()=>{
    const button_Like = document.querySelector(".RnEpo")
    if(button_Like)
    {
        const localDeslike = document.querySelector("._1XyCr")
        console.log(button_Like)
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "Derixar Seguir 5 Pessoas Auto"
        button.classList.add("BotButton")

        button.addEventListener("click",()=>{
            button.innerHTML = "Like Rodando"
            button.classList.add("BotButton")
            console.log('INICIANDO BOT')
            deslike() 
        })

        localDeslike.appendChild(button)
    }
   
    
})

