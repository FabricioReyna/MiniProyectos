const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");
const getNewQuote = async () =>
{
    //api Para las citas
    var url="https://type.fit/api/quotes";
    //Los datos para el api
    const response =await fetch(url);
    console.log(typeof response);
    const allQuotes = await response.json();
    //Generados a un numero random entre 0 y el largo de las citas en array
    const indx = Math.floor(Math.random()*allQuotes.length);
    
    const quote=allQuotes[indx].text;

    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }
    //funcion de pantalla dinamica de la cita al autor
    text.innerHTML=quote;
    author.innerHTML= "~ "+auth;

    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;

}
getNewQuote();
