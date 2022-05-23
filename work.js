const  wrapper = document.querySelector(".sliderwrapper")
const menuitem = document.querySelectorAll(".menuitem")

const product =[
    {
        Id: 1,
        title: "Air Force",
        price: 4999,
        colors:[
            {
                code:"black",
                img:"./images/air.png",
            },
            {
                code:"darkblue",
                img: "./images/air2.png"
            },
        ],
    },
    {
        Id: 2,
        title: "Air Jordan",
        price: 6999,
        colors:[
            {
                code:"lightgray",
                img:"./images/jordan.png",
            },
            {
                code:"darkblue",
                img: "./images/jordan2.png"
            },
        ],
    },
    {
        Id: 3,
        title: "Blazer",
        price: 3999,
        colors:[
            {
                code:"lightgray",
                img:"./images/blazer.png",
            },
            {
                code:"green",
                img: "./images/blazer2.png"
            },
        ],
    },
    {
        Id: 4,
        title: "Crater",
        price: 2999,
        colors:[
            {
                code:"black",
                img:"./images/crater.png",
            },
            {
                code:"ligthgray",
                img: "./images/crater2.png"
            },
        ],
    },
    {
        Id: 5,
        title: "Hippie",
        price: 3999,
        colors:[
            {
                code:"gray",
                img:"./images/hippie.png",
            },
            {
                code:"black",
                img: "./images/hippie2.png"
            },
        ],
    },
];

let chosenProduct = product[0]
const currentProductImage=document.querySelector(".productimage")
const currentProductTitle=document.querySelector(".producttitle")
const currentProductPrice=document.querySelector(".productprice")
const currentProductColors=document.querySelectorAll(".color")
const currentProductSizes=document.querySelectorAll(".size")


menuitem.forEach((item,index)=> {
    item.addEventListener("click",()=>{
        
        //for chancing current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        
        //for changing the choosen product
        chosenProduct = product[index]
        
        //for changing text of current product
        currentProductTitle.textContent= chosenProduct.title
        
        currentProductPrice.textContent= "Rs." + chosenProduct.price + "/-"
        currentProductImage.src= chosenProduct.colors[0].img
        

        //assigning new colors
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;

        })

    });
});

currentProductColors.forEach((color,index) => {
    color.addEventListener("click", () =>{
        currentProductImage.src = chosenProduct.colors[index].img;
    })
})
currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productbutton = document.querySelector(".productbutton");
const cartcontainer = document.querySelector(".cartcontainer");
const payment = document.querySelector(".payment");
const cartcount = document.querySelector(".cartcount");
const close = document.querySelector(".close");
const goback = document.querySelector(".goback");
const loginportal = document.querySelector(".loginportal");
const login = document.querySelector(".login");
const loginclose = document.querySelector(".loginclose");
const signupportal = document.querySelector(".signupportal");
const signup = document.querySelector(".signup");
const signupclose = document.querySelector(".signupclose");

productbutton.addEventListener("click",()=>{
    payment.style.display = "flex";
});

close.addEventListener("click",()=>{
    payment.style.display = "none";
});


cartcount.addEventListener("click",()=>{
    cartcontainer.style.display = "flex";
});

goback.addEventListener("click",()=>{
    cartcontainer.style.display = "none";
});

login.addEventListener("click",()=>{
    loginportal.style.display = "flex";
});
loginclose.addEventListener("click",()=>{
    loginportal.style.display = "none";
});

signup.addEventListener("click",()=>{
    signupportal.style.display = "flex";
});
signupclose.addEventListener("click",()=>{
    signupportal.style.display = "none";
});
