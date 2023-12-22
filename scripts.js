let score1 = 0;
let score2 = 0;


function rollTheDice()
{
    
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage1 = "d" +randomNumber1 + ".png";
    let randomImageSource1 = "images/" + randomDiceImage1;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);


    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let randomDiceImage2 = "d"+randomNumber2 + ".png";
    let randomImageSource2 = "images/" + randomDiceImage2;
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2 );

    
    if(score1 == 10)
    {
        score1 = 0;
        score2 = 0;
        document.getElementById('msg').innerHTML = " Congratulations !! Player 1 Won The Game !";
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
        
    }
    else if(score2 == 10)
    {
        score1 = 0;
        score2 = 0;
        document.getElementById('msg').innerHTML = " Congratulations !! Player 2 Won The Game";
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
        
    }
    else if(randomNumber1 > randomNumber2)
    {
        document.getElementById('msg').innerHTML = "Player 1 got 1 point !";
        score1++;
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
    }
    else if(randomNumber2 > randomNumber1) 
    {
        document.getElementById('msg').innerHTML = "Player 2 got 1 point ! ";
        score2++;
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
    }
   
    else
    {
        document.getElementById('msg').innerHTML = " Draw ";
        document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
    
    }
}


function reset()
{
    score1 = 0;
    score2 = 0;
    document.getElementById('scores').innerHTML = score1 + " : " + score2 ;
    document.getElementById('msg').innerHTML = "Start Playing"

    let randomDiceImage1 = "d6.png"
    let randomImageSource1 = "images/" + randomDiceImage1;
    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource1);

    let randomDiceImage2 = "d6.png"
    let randomImageSource2 = "images/" + randomDiceImage2;
    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageSource2 );

}