let turn = "x"
let title = document.querySelector(".title")
let span1 = document.getElementById("span1");
let span2 = document.getElementById('span2');
let squares= [];
let score1 = 0;
let score2 = 0;
let score = 0;
const main_color = 'rgba(255, 34, 86, 0.973)';

/*media quire*/
var x = window.matchMedia("(min-width: 600px)");

function end(num1 , num2 , num3)
{
    if(squares[num1]=="X")
    {
        /*if play with name or not (who winner !?)*/
        if(play1.value!='')
        {span1.innerHTML=play1.value}
        else
        {span1.innerHTML="X"}
        span1.style.color='white'
        span2.innerHTML='Winner '
        document.getElementById("score1").innerHTML=++score1;
    }
    else if(squares[num1]=="O")
    {
        /*if play with name or not (who winner !?)*/
        if(play2.value!='')
        {span1.innerHTML=play2.value}
        else
        {span1.innerHTML="O"}
        span1.style.color='white'
        span2.innerHTML='Winner '
        document.getElementById("score2").innerHTML=++score2;}
            /*color in win case*/
            title.style.background="#fa0"
            document.getElementById("item"+num1).style.background="#fa0"
            document.getElementById("item"+num2).style.background="#fa0"
            document.getElementById("item"+num3).style.background="#fa0"
                    //animation-----
                    animation()
            /*loding to play second round by (•)*/
            let loding = setInterval(()=>
                {span2.innerHTML+= "•"},375)
            /*clean the game and play second round*/
            setTimeout(()=>
                {
                    //stop loding
                    clearInterval(loding)
                    //clean to play
                    for (let g=1 ; g<=9 ; g++){
                    let square = document.getElementById("item"+g);
                    square.innerHTML="";
                    square.style.background=main_color;
                    square.style.color='white'
                                            }
                    span1.innerHTML="XO";    
                    span1.style.color='#fa0';
                    span2.innerHTML="GAME";  
                    title.style.background=main_color;
                },1500)
                //if i want to make x|player1 start every round
                // turn = "x"
}//end of end function
function winner()
{
    for(let i=1 ; i<=9 ; i++)
    {squares[i]=document.getElementById("item" +i).innerHTML;}
    if (squares[1] ==squares[2] && squares[2]==squares[3] && squares[1]!="")
    { end(1,2,3)}
    else if (squares[4] ==squares[5] && squares[5]==squares[6] && squares[4]!="")
    {  end(4,5,6)}
    else if (squares[7] ==squares[8] && squares[8]==squares[9] && squares[7]!="")
    { end(7,8,9) }
    else if (squares[1] ==squares[4] && squares[4]==squares[7] && squares[1]!="")
    {  end(1,4,7)}
    else if (squares[2] ==squares[5] && squares[5]==squares[8] && squares[2]!="")
    {  end(2,5,8)}
    else if (squares[3] ==squares[6] && squares[6]==squares[9] && squares[3]!="")
    {  end(3,6,9)}
    else if (squares[1] ==squares[5] && squares[5]==squares[9] && squares[1]!="")
    { end(1,5,9) }
    else if (squares[3] ==squares[5] && squares[5]==squares[7] && squares[3]!="")
    {  end(3,5,7)}
    else 
    {
        //------------------------------------------equalty case---------------------------------
        //cheack if every square is emty
        let o =0;
        for(let y=1 ; y<=9 ; y++){if(squares[y]!="")o++;}
            if (o==9)//all of squares != emty && no winner ----> (equalty)
            {
                span1.innerHTML='play';
                span2.innerHTML='again '
                span1.style.color='white'
                title.style.background="#fa0"
                document.getElementById("scoret").innerHTML=++score;
                /*loding to play second round by (•)*/
                let loding = setInterval(()=>
                    {span2.innerHTML+= "•"},250)
                /*clean the game and play second round*/
                setTimeout(()=>
                {
                    //stop loding
                    clearInterval(loding)
                    //clean to play
                    for (let g=1 ; g<=9 ; g++){
                    let square = document.getElementById("item"+g);
                    square.innerHTML="";
                    square.style.background=main_color;
                    square.style.color='white'
                                            }
                    span1.innerHTML="XO";    
                    span1.style.color='#fa0';
                    span2.innerHTML="GAME";  
                    title.style.background=main_color;
                },1000)
            }
    }
}
//======================================= main function to input X|O in square =================================================
function game(id)
{
    let element = document.getElementById(id)
    if (turn === "x" && element.innerHTML == "")
    {
        element.innerHTML = "X";
        turn = "o";
            /*if play with name or not (turn who !?)*/
        if(play2.value!='')
            {span1.innerHTML=play2.value}
        else
        {span1.innerHTML="O"}
        span2.innerHTML='turn'
    }
    else if(turn === "o" && element.innerHTML == "")
        {
            element.innerHTML = "O";
            element.style.color="rgb(34, 255, 167)"
            turn = "x";
            /*if play with name or not (turn who !?)*/
        if(play1.value!='')
            {span1.innerHTML=play1.value}
            else
            {span1.innerHTML="X"}
        span2.innerHTML='turn'
    }
    winner();
}
//======================================= player active =================================================
let play1 = document.getElementById("input1");
let play2 = document.getElementById("input2");
//----------replace input by player_name [by press save button]
function clic()
{
    if (play1.value !='' && play2.value !='')
    {
        const div1 = document.getElementById("divinput1");
        div1.innerHTML=play1.value;
        div1.style.fontSize='3vw'
        const div2= document.getElementById("divinput2");
        div2.innerHTML=play2.value;
        div2.style.fontSize='3vw'
    }
}
//----------foucas second input to write
function toatherplayer (event)
{
    if (play1.value !=''&& event.key === "Enter")
    {play2.focus();}
}
//----------replace input by player_name [by enter key]
function change(event)
{
    if (x.matches)//to hidden this function from mobile phone (@media quere)
        {
        if (play1.value !='' && play2.value !='' && event.key === "Enter")
            {
                const div1 = document.getElementById("divinput1");
                div1.innerHTML=play1.value;
                div1.style.fontSize='3vw'
                const div2= document.getElementById("divinput2");
                div2.innerHTML=play2.value;
                div2.style.fontSize='3vw'
            }
        }
}
/*hahaha btn--------------*/
const div__hahaha= document.getElementById('div__hahaha');

function open__hahaha(){
    div__hahaha.style.scale='1'
    
}
function close_div_hahaha(){
    div__hahaha.style.scale='0'
}
//----------------animation------------
function animation(){
    const count = 200,
    defaults = {
    origin: { y: 0.7 },
};

function fire(particleRatio, opts) {
confetti(
    Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio),
    })
);
}

fire(0.25, {
spread: 26,
startVelocity: 55,
});

fire(0.2, {
spread: 60,
});

fire(0.35, {
spread: 100,
decay: 0.91,
scalar: 0.8,
});

fire(0.1, {
spread: 120,
startVelocity: 25,
decay: 0.92,
scalar: 1.2,
});

fire(0.1, {
spread: 120,
startVelocity: 45,
});
}
