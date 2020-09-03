const rotate = document.querySelector("#rotate");
const back = document.querySelector("#back");

rotate.addEventListener("click",(e)=>{
    e.preventDefault();

    fetch("/max")
    .then(res=>res.json())
    .then((result)=>{
        console.log(result)
    })
    .catch(err=>console.log(err));
})

back.addEventListener("click",(e)=>{
    e.preventDefault();

    fetch("/min")
    .then(res=>res.json())
    .then((result)=>{
        console.log(result)
    })
    .catch(err=>console.log(err));
})