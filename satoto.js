//min~maxまでの整数乱数を作る関数
function rand(min,max)
{
  return Math.floor(Math.random()*(max-min+1))+min;

}

let cards = [
  "さ","し","す","せ","そ","た","ち","つ","て","と",
  "さ","し","す","せ","そ","た","ち","つ","て","と",
];

//シャッフル
for (let i = cards.length-1 ; i>0; i--)
{
  let r = rand(0,i);
  let tmp = cards[i];
  cards[i] = cards[r];
  cards[r] = tmp;
}

let field = document.getElementById("field");

for (let i=0 ; i<cards.length ; i++)
{
  let elm = document.createElement("div");

  elm.className = "card";
  elm.innerHTML = ""; //cards[i];
  elm.index = i;
  elm.onclick = click;
  field.appendChild(elm);
}

let first  = null;
let second = null;
let timer  = null;

let count = 0;
let mekuri = 0;
let clock = document.getElementById("clock");
let timer2 = setInterval( function (){
  clock.innerText = "じかん:" + (++count);
} , 1000 );


//クリックされた時の処理
function click(e)
{
  if(timer)
  {
    clearTimeout(timer);
    judge ();
  }
  let elm = e.target;

  //elm.style.visibility = "hidden";
  //let i = elm.index;
  let theCard=cards[elm.index];
  elm.innerHTML = theCard;
  console.log('playing', theCard +'.mp3');
  let audio = new Audio(theCard+'.mp3');
  audio.play();

    if( !first )
    {
      first = elm;
    }
    else if ( first.index == elm.index )
    {
      return;
    }
    else
    {
      second = elm;
      timer = setTimeout( judge , 700 );
    }
}

//ジャッジ
function judge()
{
 if( first.innerHTML == second.innerHTML)
 {
 first.style.visibility = "hidden";
 second.style.visibility = "hidden";
 mekuri += 2;
 if( mekuri == cards.length ) clearInterval(timer2)
 }
 else
 {
 first.innerHTML = "";
 second.innerHTML = "";
 }
 first  = null;
 second = null;
 timer  = null;
}

function func1() {
      document.location.reload();
    }
