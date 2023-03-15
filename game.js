let gameCtn=document.getElementById("gameContainer");gameCtn.innerHTML+='<h1>Tic Tac Toe</h1><div id="cellContainer"><div cellIndex="0" class="cell"></div><div cellIndex="1" class="cell"></div><div cellIndex="2" class="cell"></div><div cellIndex="3" class="cell"></div><div cellIndex="4" class="cell"></div><div cellIndex="5" class="cell"></div><div cellIndex="6" class="cell"></div><div cellIndex="7" class="cell"></div><div cellIndex="8" class="cell"></div></div><h2 id="statusText"></h2><button id="restartBtn">Restart</button>';var style=document.createElement("style");style.innerHTML=`
.cell {
    width: 75px;
    height: 75px;
    border: 2px solid;
    box-shadow: 0 0 0 2px;
    line-height: 75px;
    font-size: 50px;
    cursor: pointer;
}

#gameContainer {
    font-family: "Permanent Marker", cursive;
    text-align: center;
}

#cellContainer {
    display: grid;
    grid-template-columns: repeat(3, auto);
    width: 225px;
    margin: auto;
}
`,document.head.appendChild(style);const cells=document.querySelectorAll(".cell"),statusText=document.querySelector("#statusText"),restartBtn=document.querySelector("#restartBtn"),winConditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];let options=["","","","","","","","",""],currentPlayer="X",running=!1;function initializeGame(){cells.forEach(e=>e.addEventListener("click",cellClicked)),restartBtn.addEventListener("click",restartGame),statusText.innerHTML=`${currentPlayer}'s turn`,running=!0}function cellClicked(){let e=this.getAttribute("cellIndex");""==options[e]&&running&&(updateCell(this,e),checkWinner())}function updateCell(e,n){options[n]=currentPlayer,e.innerHTML=currentPlayer}function changePlayer(){currentPlayer="X"==currentPlayer?"O":"X",statusText.innerHTML=`${currentPlayer}'s turn`}function checkWinner(){let e=!1;for(let n=0;n<winConditions.length;n++){let t=winConditions[n],l=options[t[0]],i=options[t[1]],r=options[t[2]];if(""!=l&&""!=i&&""!=r&&l==i&&i==r){e=!0;break}}e?(statusText.innerHTML=`${currentPlayer} wins!`,running=!1):options.includes("")?changePlayer():(statusText.innerHTML="Draw!",running=!1)}function restartGame(){currentPlayer="X",options=["","","","","","","","",""],statusText.innerHTML=`${currentPlayer}'s turn`,cells.forEach(e=>e.innerHTML=""),running=!0}initializeGame();
