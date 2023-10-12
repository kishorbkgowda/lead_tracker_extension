const save = document.querySelector(".save");
const del = document.querySelector(".del");
const tab = document.querySelector(".tab");
const input  = document.querySelector("input");
const ul = document.getElementById('lol');
let myleads =[];


let leads =  JSON.parse(localStorage.getItem("myleads"));
console.log(leads);
 
if(leads)
{
    myleads = leads;
    print(myleads);
}

    save.addEventListener("click" ,()=>
    {
        
        myleads.push(input.value);
        input.value = "";
        console.log("Button is Clicked");
        localStorage.setItem("myleads",JSON.stringify(myleads));
        print(myleads);
        console.log(localStorage.getItem("myleads"));
    })

    del.addEventListener("dblclick" , function()
    {
        console.log("double clicked");
        localStorage.clear();
        myleads = [];
        print(myleads);
        console.log("lol guy");
    })

    tab.addEventListener("click", function(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         
            myleads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myleads))
            print(myleads)
          
        })
      })
      



function print(myleads)
{ 
    ul.textContent = "";
    for (let index = 0; index < myleads.length; index++) 
    {
        ul.innerHTML += `<li><a target='_blank' href='${myleads[index]}'>${myleads[index]}</a></li>`;
    //   create element
    //   const li = document.createElement("li");
    //   set text content
    //   li.innerHTML ="<a href='https://www.google.com/'>"+myleads[index]+"</a>";
    //   append to unordered list
    //   ul.append(li); 
    }
}
