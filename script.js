let crypto = document.getElementById('crypto-top')
let api = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature";

 
    fetch(api)
    .then(response => response.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`   
        document.getElementById('author').innerHTML = `
        Author : ${data.user.name}
        `    
        // document.body = data
    })
 
    .catch(err=> {
        document.body.style.backgroundImage=`url(https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDI1MDI0MTE&ixlib=rb-1.2.1&q=85)`
    })
    

    
    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    
    .then(response=>
        {
            
        if (!response.ok)
        {
            throw Error("Wrong")
        }
        return response.json()
    
    })

    .then(data=> {
        
        document.getElementById('crypto-top').innerHTML = 
        `
        <img  src=${data.image.small} />
        <span>${data.name}</span>
        `
        
        

        document.getElementById("crypto").innerHTML += `
        <p>  directly Price : ${data.market_data.current_price.usd}</p>
         <p>high Price  24h : ${data.market_data.high_24h.usd}</p>
        <p> low Price 24h : ${data.market_data.low_24h.usd}</p>`
        
       

   
        
    
        
    })



    .catch(err=>console.log(err))




function getDate() {
    const date = new Date()
    document.getElementById('time').textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
    setInterval(getDate, 1000)


}
getDate()


