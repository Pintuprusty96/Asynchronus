const colorfunction = function(){
    const hex = '0123456789ABCDEF';

    let color = '#';

    for(let i = 0; i<6; i++){
        color +=hex[Math.floor(Math.random() * hex.length)];

    }
    return color;

}
let bgcolor;
document.querySelector("#start").addEventListener('click',function(){
    const body= function(){
        document.querySelector("body").style.backgroundColor=colorfunction();
    }
    bgcolor = setInterval(body, 1000)
})

document.querySelector("#stop").addEventListener('click',function(){
    clearInterval(bgcolor)
})












// document.querySelector("#start").addEventListener("click", function(){
//             const randomcolor = function(){
//             const hex = "0123456789ABCDEF";
//             let color = "#";
//             for(let i = 0; i<6; i++){
//                 color+=hex[Math.floor(Math.random()* 16)]
//             }
//             return color;
//         }
//       const changebgcolor = function(){
//         document.body.style.backgroundColor = randomcolor();

//       }
//     const cl =  setInterval(changebgcolor,1000)
//     document.querySelector("#stop").addEventListener("click",function(){
//    clearInterval(cl) 
// })
// }) 





































// setTimeout
//     const pintu =function(){
//        para= document.querySelector("p").innerText = "Hello world"
        
//     }
//    const  pint=  setTimeout(pintu,3000);
//=======================================================================     

        // setInterval          // mini asignment

    // document.querySelector("#start").addEventListener("click",function(){
    //             // clearTimeout(pint)
    //             // console.log("stopped")               //
    //             const run = function(){                 //
    //                 console.log("Hey pintu")
    //             }
    //           const set =  setInterval(run,1000)
                
    //             document.querySelector("#stop").addEventListener("click",function(){
    //                 clearInterval(set,2000)
    //         })
    //     })
    


//================================================================================
