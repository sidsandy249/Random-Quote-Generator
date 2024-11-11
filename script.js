const Quote = document.getElementById("quote");
const Author = document.getElementById("author");
const button = document.getElementById("btn");

const api_url = "https://api.api-ninjas.com/v1/quotes";

async function getquote(){
    const response = await fetch(api_url , {
        method: "GET",
        headers: {
            "X-Api-Key": "yLVBDAaanTwU33Jt8KwnHQ==1wACCXf687C0nqof"
        }
    });

    var data = await response.json();
    console.log(data);
     
    Quote.innerHTML = data[0].quote;
    Author.innerHTML = data[0].author;
    
}

getquote();

button.addEventListener("click" , getquote);


