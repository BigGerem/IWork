let body = document.querySelector('body');
let content = document.querySelector('#content');
let userField = document.querySelector('#userField');
let userName = document.querySelector('#userName');
let divUserWins = document.querySelector('#divUserWins');
let userWins = document.querySelector('#userWins');
let divUserNumber = document.querySelector('#divUserNumber');
let userNumber = document.querySelector('#userNumber');
let computerField = document.querySelector('#computerField');
let computerName = document.querySelector('#computerName');
let divComputerWins = document.querySelector('#divComputerWins');
let computerWins = document.querySelector('#computerWins');
let divComputerNumber = document.querySelector('#divComputerNumber');
let computerNumber = document.querySelector('#computerNumber');
let divOptions = document.querySelector('#divOptions');
let partyResult = document.querySelector('#partyResult');
let btnGenerate = document.querySelector('#btnGenerate');
let btnReturn = document.querySelector('#btnReturn');
let user = prompt("Please enter your name", "User");
while((user==null) ||(user=="")){
	user = prompt("You haven`t entered your name. Please enter your name again", "User");
}
var wWidth = window.innerWidth;
console.log(wWidth);
if (wWidth >= 480) {
	body.setAttribute('style', 'width: 100%; height: 99%; margin: 0;');
	content.setAttribute('style', 'display: flex; width: 80%; height:85%; margin: 0 auto; align-items: center; justify-content: space-between;');
	userField.setAttribute('style', 'width: 33%; display: flex; align-items: center; flex-direction: column; margin: 0;');
	divOptions.setAttribute('style', 'width: 33%; display: flex; align-items: center; flex-direction: column; margin: 0;');
	computerField.setAttribute('style', 'width: 33%; display: flex; align-items: center; flex-direction: column; margin: 0;');
	userName.setAttribute('style', 'margin: 0 auto; font-size: 50px; font-family: Calibri; font-weight: 600;');
	computerName.setAttribute('style', 'margin: 0 auto; font-size: 50px; font-family: Calibri; font-weight: 600;');
	divUserWins.setAttribute('style', 'display: flex; width: 80%; background: #45b3d1; height: 60px; border-radius: 10px; align-items: center; justify-content: center;');
	divComputerWins.setAttribute('style', 'display: flex; width: 80%; background: #45b3d1; height: 60px; border-radius: 10px; align-items: center; justify-content: center;');
	userWins.setAttribute('style', 'margin: 0; font-size: 30px; font-family: Calibri; font-weight: 600;');
	computerWins.setAttribute('style', 'margin: 0; font-size: 30px; font-family: Calibri; font-weight: 600;');
	divComputerNumber.setAttribute('style', 'margin: 30px 0; display: flex; width: 150px; background: yellow; height: 150px; border-radius: 100px; align-items: center; justify-content: center;');
	divUserNumber.setAttribute('style', 'margin: 30px 0; display: flex; width: 150px; background: yellow; height: 150px; border-radius: 100px; border: black 5px ; align-items: center; justify-content: center;');
	computerNumber.setAttribute('style', 'margin: 0; font-size: 55px; font-family: Calibri; font-weight: 600;');
	userNumber.setAttribute('style', 'margin: 0; font-size: 55px; font-family: Calibri; font-weight: 600;');
	partyResult.setAttribute('style', 'margin-top: 50px; font-size: 22px; font-family: Calibri; font-weight: 600;');
	btnGenerate.setAttribute('style', 'margin: 30px; font-size: 30px; font-family: Calibri; font-weight: 600; border-radius: 10px; padding: 10px 50px; background: #00ff40; border: none;');
	btnReturn.setAttribute('style', 'margin: 0; font-size: 30px; font-family: Calibri; font-weight: 600; border-radius: 10px; padding: 10px 40px; background: #00ff40; border: none;');
	}
else{
	body.setAttribute('style', 'width: 100%; height: 98%; margin: 15px 0;');
	content.setAttribute('style', ' display: flex; width: 80%; height:100%; margin: 0 auto; flex-direction: column; ');
	userField.setAttribute('style', 'width: 100%;display: flex;flex-direction: column;height: 35%;margin: 0;');
	divOptions.setAttribute('style', 'width: 100%;display: flex;justify-content: center;flex-direction: column;height: 20%;margin: 80px 0;');
	computerField.setAttribute('style', 'width: 100%; display: flex; flex-direction: column; height: 35%; margin: 0;');
	userName.setAttribute('style', 'margin: 80px auto 30px;font-size: 100px;font-family: Calibri;font-weight: 600;');
	computerName.setAttribute('style', 'margin: 10px auto 30px;font-size: 100px;font-family: Calibri;font-weight: 600;');
	divUserWins.setAttribute('style', 'margin: 20px auto; display: flex;width: 60%;background: #45b3d1;height: 150px;border-radius: 30px;align-items: center;justify-content: center;');
	divComputerWins.setAttribute('style', 'margin: 20px auto;display: flex;width: 60%;background: #45b3d1;height: 150px;border-radius: 30px;align-items: center;justify-content: center;');
	userWins.setAttribute('style', 'margin: 0; font-size: 90px; font-family: Calibri; font-weight: 600;');
	computerWins.setAttribute('style', 'margin: 0; font-size: 90px; font-family: Calibri; font-weight: 600;');
	divComputerNumber.setAttribute('style', 'margin: 50px auto 10px;display: flex;width: 300px;background: yellow;height: 300px;border-radius: 200px;border: 5px solid black;align-items: center;justify-content: center;');
	divUserNumber.setAttribute('style', 'margin: 50px auto 10px;display: flex;width: 300px;background: yellow;height: 300px;border-radius: 200px;border: 5px solid black;align-items: center;justify-content: center;');
	computerNumber.setAttribute('style', 'margin: 0; font-size: 100px; font-family: Calibri; font-weight: 600;');
	userNumber.setAttribute('style', 'margin: 0; font-size: 100px; font-family: Calibri; font-weight: 600;');
	partyResult.setAttribute('style', 'margin: 30px auto; font-size: 60px; font-family: Calibri; font-weight: 600;');
	btnGenerate.setAttribute('style', 'margin: 30px auto; font-size: 60px; font-family: Calibri; font-weight: 600; border-radius: 30px; width: 60%; padding: 30px 40px; background: #00ff40; border: none;');
	btnReturn.setAttribute('style', 'margin: 30px auto; font-size: 60px; font-family: Calibri; font-weight: 600; border-radius: 30px; width: 60%; padding: 30px 30px; background: #00ff40; border: none;');
}
let section = document.querySelector('#aNumbers');
section.setAttribute('style', 'color: violet; font-weight: 600;');
divComputerNumber.style.border= '5px solid black';
divUserNumber.style.border= '5px solid black';
btnGenerate.setAttribute('type', 'button');
btnReturn.setAttribute('type', 'button');
btnGenerate.setAttribute ('value', 'Generate');
btnReturn.setAttribute ('value', 'New Game');
userName.innerHTML=user;
computerName.innerHTML="Computer";
var userCount;
var computerCount;
var userNumberNow;
var computerNumberNow;
NewGame();
btnGenerate.onclick = () => {
	if((computerCount<3)&&(userCount<3)){
		userNumberNow = Math.round(Math.random()*10);
		userNumber.innerHTML = userNumberNow;
		computerNumberNow = Math.round(Math.random()*10);
		computerNumber.innerHTML = computerNumberNow;
		if(userNumberNow<computerNumberNow){
			computerCount++;
			partyResult.innerHTML = "Computer receives one point";
		}
		if(userNumberNow>computerNumberNow){
			userCount++;
			partyResult.innerHTML = user + " receives one point";
		}
		if(userNumberNow==computerNumberNow){
			partyResult.innerHTML = "Draw";
		}
		userWins.innerHTML=userCount;
		computerWins.innerHTML=computerCount;
		
	}
	else{
		if(computerCount==3){
			gameResult = "Computer won. Do you want to play again?";
			if (confirm(gameResult)==true){
				NewGame();
			}
		}
		if(userCount==3){
			gameResult = user + " won. Do you want to play again?";
			if (confirm(gameResult)==true){
				NewGame();
			}
		}
	}
}
btnReturn.onclick = () => {
	NewGame();
}
function NewGame(){
	partyResult.innerHTML="New game started!";
	userCount=0;
	computerCount=0;
	userNumberNow = 0;
	computerNumberNow = 0;
	userWins.innerHTML=userCount;
	computerWins.innerHTML=computerCount;
	userNumber.innerHTML=userNumberNow;
	computerNumber.innerHTML=computerNumberNow;
}

