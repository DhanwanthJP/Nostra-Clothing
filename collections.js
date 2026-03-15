import {products} from "./products.js";

var product_container=document.querySelector(".product-container")
products.forEach((product)=>{
    var createItem = document.createElement("div")
    createItem.classList.add("product")
    createItem.innerHTML=` <div class="products-s1"><img src="${product.src}"></div>
                <div class="products-s2"><h1>${product.name}</h1>
                <p>₹${product.price}</p></div>
                <tags style="visibility:hidden;">${product.tags}</tags>`

    product_container.append(createItem)
})

var filterList =[]
var tags = document.getElementsByName("tags")
console.log(tags)

tags.forEach((tag)=>{
    tag.addEventListener("change",(e)=>{

        if(e.target.checked)
        {
        filterList.push(e.target.value)
        console.log(filterList)
        update()
        
        }
        else{
            filterList = filterList.filter(item => item !== e.target.value);
            update()
        }            
    })
})

// Search Functionality
var search = document.getElementById("search");
var productList = product_container.querySelectorAll("div");

console.log(productList);

search.addEventListener("keyup", function () {
  var enteredValue = event.target.value.toUpperCase();

  for (var count = 0; count < productList.length; count++) {
    var productName = productList[count].querySelector("h1").textContent.toUpperCase();
    if (productName.indexOf(enteredValue) < 0) {
      productList[count].style.display = "none";
    } else {
      productList[count].style.display = "block";
    }
  }
});

function update()
{
    var productList = document.querySelectorAll(".product")
    for(var i=0;i<productList.length;i++){
        var check = false
        var product=productList[i]
        console.log(product)
        var temp=product.querySelector("tags").innerHTML
       
        console.log("elemen"+temp)
        

        const tempFilterArray = temp.split(',');
        
        console.log("tempfilterarray"+tempFilterArray)
        console.log("filterlist"+filterList)
       
            filterList.forEach((j)=>{
                tempFilterArray.forEach((i)=>{
                if(j==i)
                {
                    check=true
                }
            })
        })


        if(!check && filterList.length>0)
        {
            product.style.display="none"
        }
        else{
            product.style.display="block"
        }

        
    };


}