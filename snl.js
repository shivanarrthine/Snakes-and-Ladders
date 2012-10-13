// JS for my snake and ladders game

var playerBox1 = 0;
var playerBox2 = 0;
var playerBox3 = 0;
var x = 1;

function rolling(){
	if (x === 0){ alert("Wait, it's not your turn yet"); }
	else if (x === 1){
	document.playerOne.button.value = "Rolling Dice...";
	setTimeout("rolldice1()",2000); }
	playSound('RollDice.mp3');
	document.getElementById('chipRed').style.backgroundColor = 'transparent';
	document.getElementById('chipRed').style.border = "0";
	}


function rolldice1(){

	var num1 = Math.floor (Math.random ( ) * 6 + 1);
	var num2 = Math.floor (Math.random ( ) * 6 + 1);
	var total = num1 + num2;
	var newBox;
	clearPrevious(playerBox1);
	//document.playerOne.statement1.value = "You rolled " +num1+ " on the first dice, and " +num2+ " on the second dice. That would be " +total+ " steps forward";
	playerBox1 += total;
	moveChipRed(playerBox1);
	newBox = checkPosition1(playerBox1);
	playerBox1 = newBox;
	changeImage1(num1,num2);
	//var clearchip = "b" +playerBox1;
	//document.getElementById('clearchip').style.backgroundColor = 'transparent';
	setTimeout("moveChipRed(playerBox1)",1000);
	if (playerBox1 >= 100) { alert("YOU WON!!"); playSound('applause.mp3'); location.reload(true); }
	document.playerOne.location1.value = "You are now at " +playerBox1+ "!"; 
	x = 0;
	document.playerOne.button.value = "Computer's Turn";
	document.computer.button2.value = "Rolling Dice...";
	playSound('RollDice.mp3');
	setTimeout("rolldice2()",2000);
	document.getElementById('chipBlue').style.backgroundColor = 'transparent';
	document.getElementById('chipBlue').style.border = "0";
	}


function rolldice2(){

	var num1 = Math.floor (Math.random ( ) * 6 + 1);
	var num2 = Math.floor (Math.random ( ) * 6 + 1);
	var total = num1 + num2;
	clearPrevious(playerBox2);
	//document.computer.statement2.value = "Computer rolled " +num1+ " on the first dice, and " +num2+ " on the second dice. That would be " +total+ " steps forward";
	playerBox2 += total;
	moveChipBlue(playerBox2);	
	newBox = checkPosition2(playerBox2);
	playerBox2 = newBox;
	changeImage2(num1,num2);
	setTimeout("moveChipBlue(playerBox2)",1000);
	if (playerBox2 >= 100) { alert("COMPUTER WON!!"); playSound('applause.mp3'); location.reload(true); }
	document.computer.location2.value = "Computer is now at " +playerBox2+ "!";
	document.computer.button2.value = "Computer";
	document.playerOne.button.value = "Your Turn";
	x = 1;
	}

function checkPosition1(a){

	if (a === 4) {
		document.playerOne.position1.value = "You landed at 4.\nYay! A ladder!";
		clearPrevious(a);
		a = 14;
		
		}
	else if (a === 9) {
		document.playerOne.position1.value = "You landed at 9.\nYay! A ladder!";
		clearPrevious(a);
		a = 31;
		
		}
	else if (a === 17) {
		document.playerOne.position1.value = "You landed at 17.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 7;
		
		}
	else if (a === 28) {
		document.playerOne.position1.value = "You landed at 28.\nYay! A ladder!";
		clearPrevious(a);
		a = 84;
		
		}
	else if (a === 21) {
		document.playerOne.position1.value = "You landed at 21.\nYay! A ladder!";
		clearPrevious(a);
		a = 42;
		
		}
	else if (a === 51) {
		document.playerOne.position1.value = "You landed at 51.\nYay! A ladder!";
		clearPrevious(a);
		a = 67;
		
		}
	else if (a === 54) {
		document.playerOne.position1.value = "You landed at 54.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 34;
		
		}
	else if (a === 62) {
		document.playerOne.position1.value = "You landed at 62.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 19;
		
		}
	else if (a === 64) {
		document.playerOne.position1.value = "You landed at 64.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 60;
		
		}
	else if (a === 71) {
		document.playerOne.position1.value = "You landed at 71.\nYay! A ladder!";
		clearPrevious(a);
		a = 91;
		
		}
	else if (a === 80) {
		document.playerOne.position1.value = "You landed at 80.\nYay! A ladder!";
		clearPrevious(a);
		a = 100;
		
		}
	else if (a === 87) {
		document.playerOne.position1.value = "You landed at 87.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 24;
		
		}
	else if (a === 93) {
		document.playerOne.position1.value = "You landed at 93.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 73;
		
		}
	else if (a === 95) {
		document.playerOne.position1.value = "You landed at 95.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 75;
		
		}
	else if (a === 98) {
		document.playerOne.position1.value = "You landed at 98.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 79;
		
		}
	else {
		document.playerOne.position1.value = " ";
		}
	
	return a;

}

function checkPosition2(a){

	if (a === 4) {
		document.computer.position2.value = "Computer landed at 4.\nYay! A ladder!";
		clearPrevious(a);
		a = 14;
		
		}
	else if (a === 9) {
		document.computer.position2.value = "Computer landed at 9.\nYay! A ladder!";
		clearPrevious(a);
		a = 31;
		
		}
	else if (a === 17) {
		document.computer.position2.value = "Computer landed at 17.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 7;
		
		}
	else if (a === 28) {
		document.computer.position2.value = "Computer landed at 28.\nYay! A ladder!";
		clearPrevious(a);
		a = 84;
		
		}
	else if (a === 21) {
		document.computer.position2.value = "Computer landed at 21.\nYay! A ladder!";
		clearPrevious(a);
		a = 42;
		
		}
	else if (a === 51) {
		document.computer.position2.value = "Computer landed at 51.\nYay! A ladder!";
		clearPrevious(a);
		a = 67;
		
		}
	else if (a === 54) {
		document.computer.position2.value = "Computer landed at 54.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 34;
		
		}
	else if (a === 62) {
		document.computer.position2.value = "Computer landed at 62.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 19;
		
		}
	else if (a === 64) {
		document.computer.position2.value = "Computer landed at 64.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 60;
		
		}
	else if (a === 71) {
		document.computer.position2.value = "Computer landed at 71.\nYay! A ladder!";
		clearPrevious(a);
		a = 91;
		
		}
	else if (a === 80) {
		document.computer.position2.value = "Computer landed at 80.\nYay! A ladder!";
		clearPrevious(a);
		a = 100;
		
		}
	else if (a === 87) {
		document.computer.position2.value = "Computer landed at 87.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 24;
		
		}
	else if (a === 93) {
		document.computer.position2.value = "Computer landed at 93.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 73;
		
		}
	else if (a === 95) {
		document.computer.position2.value = "Computer landed at 95.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 75;
		
		}
	else if (a === 98) {
		document.computer.position2.value = "Computer landed at 98.\nOh No! It's a Snake!";
		clearPrevious(a);
		a = 79;
		
		}
	else {
		document.computer.position2.value = " ";
		}
	
	return a;

}


function moveChipRed(b){

	if(b===2){
	document.getElementById('b2').style.backgroundColor = "#f00";
	}
	else if(b===3){
	document.getElementById('b3').style.backgroundColor = "#f00";
	}
	else if(b===4){
	document.getElementById('b4').style.backgroundColor = "#f00";
	}
	else if(b===5){
	document.getElementById('b5').style.backgroundColor = "#f00";
	}
	else if(b===6){
	document.getElementById('b6').style.backgroundColor = "#f00";
	}
	else if(b===7){
	document.getElementById('b7').style.backgroundColor = "#f00";
	}
	else if(b===8){
	document.getElementById('b8').style.backgroundColor = "#f00";
	}
	else if(b===9){
	document.getElementById('b9').style.backgroundColor = "#f00";
	}
	else if(b===10){
	document.getElementById('b10').style.backgroundColor = "#f00";
	}
	else if(b===20){
	document.getElementById('b20').style.backgroundColor = "#f00";
	}
	else if(b===19){
	document.getElementById('b19').style.backgroundColor = "#f00";
	}
	else if(b===18){
	document.getElementById('b18').style.backgroundColor = "#f00";
	}
	else if(b===17){
	document.getElementById('b17').style.backgroundColor = "#f00";
	}
	else if(b===16){
	document.getElementById('b16').style.backgroundColor = "#f00";
	}
	else if(b===15){
	document.getElementById('b15').style.backgroundColor = "#f00";
	}
	else if(b===14){
	document.getElementById('b14').style.backgroundColor = "#f00";
	}
	else if(b===13){
	document.getElementById('b13').style.backgroundColor = "#f00";
	}
	else if(b===12){
	document.getElementById('b12').style.backgroundColor = "#f00";
	}
	else if(b===11){
	document.getElementById('b11').style.backgroundColor = "#f00";
	}
	else if(b===21){
	document.getElementById('b21').style.backgroundColor = "#f00";
	}
	else if(b===22){
	document.getElementById('b22').style.backgroundColor = "#f00";
	}
	else if(b===23){
	document.getElementById('b23').style.backgroundColor = "#f00";
	}
	else if(b===24){
	document.getElementById('b24').style.backgroundColor = "#f00";
	}
	else if(b===25){
	document.getElementById('b25').style.backgroundColor = "#f00";
	}
	else if(b===26){
	document.getElementById('b26').style.backgroundColor = "#f00";
	}
	else if(b===27){
	document.getElementById('b27').style.backgroundColor = "#f00";
	}
	else if(b===28){
	document.getElementById('b28').style.backgroundColor = "#f00";
	}
	else if(b===29){
	document.getElementById('b29').style.backgroundColor = "#f00";
	}
	else if(b===30){
	document.getElementById('b30').style.backgroundColor = "#f00";
	}
	else if(b===40){
	document.getElementById('b40').style.backgroundColor = "#f00";
	}
	else if(b===39){
	document.getElementById('b39').style.backgroundColor = "#f00";
	}
	else if(b===38){
	document.getElementById('b38').style.backgroundColor = "#f00";
	}
	else if(b===37){
	document.getElementById('b37').style.backgroundColor = "#f00";
	}
	else if(b===36){
	document.getElementById('b36').style.backgroundColor = "#f00";
	}
	else if(b===35){
	document.getElementById('b35').style.backgroundColor = "#f00";
	}
	else if(b===34){
	document.getElementById('b34').style.backgroundColor = "#f00";
	}
	else if(b===33){
	document.getElementById('b33').style.backgroundColor = "#f00";
	}
	else if(b===32){
	document.getElementById('b32').style.backgroundColor = "#f00";
	}
	else if(b===31){
	document.getElementById('b31').style.backgroundColor = "#f00";
	}
	else if(b===41){
	document.getElementById('b41').style.backgroundColor = "#f00";
	}
	else if(b===42){
	document.getElementById('b42').style.backgroundColor = "#f00";
	}
	else if(b===43){
	document.getElementById('b43').style.backgroundColor = "#f00";
	}
	else if(b===44){
	document.getElementById('b44').style.backgroundColor = "#f00";
	}
	else if(b===45){
	document.getElementById('b45').style.backgroundColor = "#f00";
	}
	else if(b===46){
	document.getElementById('b46').style.backgroundColor = "#f00";
	}
	else if(b===47){
	document.getElementById('b47').style.backgroundColor = "#f00";
	}
	else if(b===48){
	document.getElementById('b48').style.backgroundColor = "#f00";
	}
	else if(b===49){
	document.getElementById('b41').style.backgroundColor = "#f00";
	}
	else if(b===50){
	document.getElementById('b50').style.backgroundColor = "#f00";
	}
	else if(b===60){
	document.getElementById('b60').style.backgroundColor = "#f00";
	}
	else if(b===59){
	document.getElementById('b59').style.backgroundColor = "#f00";
	}
	else if(b===58){
	document.getElementById('b58').style.backgroundColor = "#f00";
	}
	else if(b===57){
	document.getElementById('b57').style.backgroundColor = "#f00";
	}
	else if(b===56){
	document.getElementById('b56').style.backgroundColor = "#f00";
	}
	else if(b===55){
	document.getElementById('b55').style.backgroundColor = "#f00";
	}
	else if(b===54){
	document.getElementById('b54').style.backgroundColor = "#f00";
	}
	else if(b===53){
	document.getElementById('b53').style.backgroundColor = "#f00";
	}
	else if(b===52){
	document.getElementById('b52').style.backgroundColor = "#f00";
	}
	else if(b===51){
	document.getElementById('b51').style.backgroundColor = "#f00";
	}	
	else if(b===61){
	document.getElementById('b61').style.backgroundColor = "#f00";
	}
	else if(b===62){
	document.getElementById('b62').style.backgroundColor = "#f00";
	}
	else if(b===63){
	document.getElementById('b63').style.backgroundColor = "#f00";
	}
	else if(b===64){
	document.getElementById('b64').style.backgroundColor = "#f00";
	}
	else if(b===65){
	document.getElementById('b65').style.backgroundColor = "#f00";
	}
	else if(b===66){
	document.getElementById('b66').style.backgroundColor = "#f00";
	}
	else if(b===67){
	document.getElementById('b67').style.backgroundColor = "#f00";
	}
	else if(b===68){
	document.getElementById('b68').style.backgroundColor = "#f00";
	}
	else if(b===69){
	document.getElementById('b69').style.backgroundColor = "#f00";
	}
	else if(b===70){
	document.getElementById('b70').style.backgroundColor = "#f00";
	}
	else if(b===80){
	document.getElementById('b80').style.backgroundColor = "#f00";
	}
	else if(b===79){
	document.getElementById('b79').style.backgroundColor = "#f00";
	}
	else if(b===78){
	document.getElementById('b78').style.backgroundColor = "#f00";
	}
	else if(b===77){
	document.getElementById('b77').style.backgroundColor = "#f00";;
	}
	else if(b===76){
	document.getElementById('b76').style.backgroundColor = "#f00";
	}
	else if(b===75){
	document.getElementById('b75').style.backgroundColor = "#f00";
	}
	else if(b===74){
	document.getElementById('b74').style.backgroundColor = "#f00";
	}
	else if(b===73){
	document.getElementById('b73').style.backgroundColor = "#f00";
	}
	else if(b===72){
	document.getElementById('b72').style.backgroundColor = "#f00";
	}
	else if(b===71){
	document.getElementById('b71').style.backgroundColor = "#f00";
	}
	else if(b===81){
	document.getElementById('b81').style.backgroundColor = "#f00";
	}
	else if(b===82){
	document.getElementById('b82').style.backgroundColor = "#f00";
	}
	else if(b===83){
	document.getElementById('b83').style.backgroundColor = "#f00";
	}
	else if(b===84){
	document.getElementById('b84').style.backgroundColor = "#f00";
	}
	else if(b===85){
	document.getElementById('b85').style.backgroundColor = "#f00";
	}
	else if(b===86){
	document.getElementById('b86').style.backgroundColor = "#f00";
	}
	else if(b===87){
	document.getElementById('b87').style.backgroundColor = "#f00";
	}
	else if(b===88){
	document.getElementById('b88').style.backgroundColor = "#f00";
	}
	else if(b===89){
	document.getElementById('b89').style.backgroundColor = "#f00";
	}
	else if(b===90){
	document.getElementById('b90').style.backgroundColor = "#f00";
	}
	else if(b===100){
	document.getElementById('b100').style.backgroundColor = "#f00";
	}
	else if(b===99){
	document.getElementById('b99').style.backgroundColor = "#f00";
	}
	else if(b===98){
	document.getElementById('b98').style.backgroundColor = "#f00";
	}
	else if(b===97){
	document.getElementById('b97').style.backgroundColor = "#f00";
	}
	else if(b===96){
	document.getElementById('b96').style.backgroundColor = "#f00";
	}
	else if(b===95){
	document.getElementById('b95').style.backgroundColor = "#f00";
	}
	else if(b===94){
	document.getElementById('b94').style.backgroundColor = "#f00";
	}
	else if(b===93){
	document.getElementById('b93').style.backgroundColor = "#f00";
	}
	else if(b===92){
	document.getElementById('b92').style.backgroundColor = "#f00";
	}
	else if(b===91){
	document.getElementById('b91').style.backgroundColor = "#f00";
	}

return b;
		
}

function moveChipBlue(b){

	if(b===2){
	document.getElementById('b2').style.backgroundColor = "#00f";
	}
	else if(b===3){
	document.getElementById('b3').style.backgroundColor = "#00f";
	}
	else if(b===4){
	document.getElementById('b4').style.backgroundColor = "#00f";
	}
	else if(b===5){
	document.getElementById('b5').style.backgroundColor = "#00f";
	}
	else if(b===6){
	document.getElementById('b6').style.backgroundColor = "#00f";
	}
	else if(b===7){
	document.getElementById('b7').style.backgroundColor = "#00f";
	}
	else if(b===8){
	document.getElementById('b8').style.backgroundColor = "#00f";
	}
	else if(b===9){
	document.getElementById('b9').style.backgroundColor = "#00f";
	}
	else if(b===10){
	document.getElementById('b10').style.backgroundColor = "#00f";
	}
	else if(b===20){
	document.getElementById('b20').style.backgroundColor = "#00f";
	}
	else if(b===19){
	document.getElementById('b19').style.backgroundColor = "#00f";
	}
	else if(b===18){
	document.getElementById('b18').style.backgroundColor = "#00f";
	}
	else if(b===17){
	document.getElementById('b17').style.backgroundColor = "#00f";
	}
	else if(b===16){
	document.getElementById('b16').style.backgroundColor = "#00f";
	}
	else if(b===15){
	document.getElementById('b15').style.backgroundColor = "#00f";
	}
	else if(b===14){
	document.getElementById('b14').style.backgroundColor = "#00f";
	}
	else if(b===13){
	document.getElementById('b13').style.backgroundColor = "#00f";
	}
	else if(b===12){
	document.getElementById('b12').style.backgroundColor = "#00f";
	}
	else if(b===11){
	document.getElementById('b11').style.backgroundColor = "#00f";
	}
	else if(b===21){
	document.getElementById('b21').style.backgroundColor = "#00f";
	}
	else if(b===22){
	document.getElementById('b22').style.backgroundColor = "#00f";
	}
	else if(b===23){
	document.getElementById('b23').style.backgroundColor = "#00f";
	}
	else if(b===24){
	document.getElementById('b24').style.backgroundColor = "#00f";
	}
	else if(b===25){
	document.getElementById('b25').style.backgroundColor = "#00f";
	}
	else if(b===26){
	document.getElementById('b26').style.backgroundColor = "#00f";
	}
	else if(b===27){
	document.getElementById('b27').style.backgroundColor = "#00f";
	}
	else if(b===28){
	document.getElementById('b28').style.backgroundColor = "#00f";
	}
	else if(b===29){
	document.getElementById('b29').style.backgroundColor = "#00f";
	}
	else if(b===30){
	document.getElementById('b30').style.backgroundColor = "#00f";
	}
	else if(b===40){
	document.getElementById('b40').style.backgroundColor = "#00f";
	}
	else if(b===39){
	document.getElementById('b39').style.backgroundColor = "#00f";
	}
	else if(b===38){
	document.getElementById('b38').style.backgroundColor = "#00f";
	}
	else if(b===37){
	document.getElementById('b37').style.backgroundColor = "#00f";
	}
	else if(b===36){
	document.getElementById('b36').style.backgroundColor = "#00f";
	}
	else if(b===35){
	document.getElementById('b35').style.backgroundColor = "#00f";
	}
	else if(b===34){
	document.getElementById('b34').style.backgroundColor = "#00f";
	}
	else if(b===33){
	document.getElementById('b33').style.backgroundColor = "#00f";
	}
	else if(b===32){
	document.getElementById('b32').style.backgroundColor = "#00f";
	}
	else if(b===31){
	document.getElementById('b31').style.backgroundColor = "#00f";
	}
	else if(b===41){
	document.getElementById('b41').style.backgroundColor = "#00f";
	}
	else if(b===42){
	document.getElementById('b42').style.backgroundColor = "#00f";
	}
	else if(b===43){
	document.getElementById('b43').style.backgroundColor = "#00f";
	}
	else if(b===44){
	document.getElementById('b44').style.backgroundColor = "#00f";
	}
	else if(b===45){
	document.getElementById('b45').style.backgroundColor = "#00f";
	}
	else if(b===46){
	document.getElementById('b46').style.backgroundColor = "#00f";
	}
	else if(b===47){
	document.getElementById('b47').style.backgroundColor = "#00f";
	}
	else if(b===48){
	document.getElementById('b48').style.backgroundColor = "#00f";
	}
	else if(b===49){
	document.getElementById('b41').style.backgroundColor = "#00f";
	}
	else if(b===50){
	document.getElementById('b50').style.backgroundColor = "#00f";
	}
	else if(b===60){
	document.getElementById('b60').style.backgroundColor = "#00f";
	}
	else if(b===59){
	document.getElementById('b59').style.backgroundColor = "#00f";
	}
	else if(b===58){
	document.getElementById('b58').style.backgroundColor = "#00f";
	}
	else if(b===57){
	document.getElementById('b57').style.backgroundColor = "#00f";
	}
	else if(b===56){
	document.getElementById('b56').style.backgroundColor = "#00f";
	}
	else if(b===55){
	document.getElementById('b55').style.backgroundColor = "#00f";
	}
	else if(b===54){
	document.getElementById('b54').style.backgroundColor = "#00f";
	}
	else if(b===53){
	document.getElementById('b53').style.backgroundColor = "#00f";
	}
	else if(b===52){
	document.getElementById('b52').style.backgroundColor = "#00f";
	}
	else if(b===51){
	document.getElementById('b51').style.backgroundColor = "#00f";
	}	
	else if(b===61){
	document.getElementById('b61').style.backgroundColor = "#00f";
	}
	else if(b===62){
	document.getElementById('b62').style.backgroundColor = "#00f";
	}
	else if(b===63){
	document.getElementById('b63').style.backgroundColor = "#00f";
	}
	else if(b===64){
	document.getElementById('b64').style.backgroundColor = "#00f";
	}
	else if(b===65){
	document.getElementById('b65').style.backgroundColor = "#00f";
	}
	else if(b===66){
	document.getElementById('b66').style.backgroundColor = "#00f";
	}
	else if(b===67){
	document.getElementById('b67').style.backgroundColor = "#00f";
	}
	else if(b===68){
	document.getElementById('b68').style.backgroundColor = "#00f";
	}
	else if(b===69){
	document.getElementById('b69').style.backgroundColor = "#00f";
	}
	else if(b===70){
	document.getElementById('b70').style.backgroundColor = "#00f";
	}
	else if(b===80){
	document.getElementById('b80').style.backgroundColor = "#00f";
	}
	else if(b===79){
	document.getElementById('b79').style.backgroundColor = "#00f";
	}
	else if(b===78){
	document.getElementById('b78').style.backgroundColor = "#00f";
	}
	else if(b===77){
	document.getElementById('b77').style.backgroundColor = "#00f";;
	}
	else if(b===76){
	document.getElementById('b76').style.backgroundColor = "#00f";
	}
	else if(b===75){
	document.getElementById('b75').style.backgroundColor = "#00f";
	}
	else if(b===74){
	document.getElementById('b74').style.backgroundColor = "#00f";
	}
	else if(b===73){
	document.getElementById('b73').style.backgroundColor = "#00f";
	}
	else if(b===72){
	document.getElementById('b72').style.backgroundColor = "#00f";
	}
	else if(b===71){
	document.getElementById('b71').style.backgroundColor = "#00f";
	}
	else if(b===81){
	document.getElementById('b81').style.backgroundColor = "#00f";
	}
	else if(b===82){
	document.getElementById('b82').style.backgroundColor = "#00f";
	}
	else if(b===83){
	document.getElementById('b83').style.backgroundColor = "#00f";
	}
	else if(b===84){
	document.getElementById('b84').style.backgroundColor = "#00f";
	}
	else if(b===85){
	document.getElementById('b85').style.backgroundColor = "#00f";
	}
	else if(b===86){
	document.getElementById('b86').style.backgroundColor = "#00f";
	}
	else if(b===87){
	document.getElementById('b87').style.backgroundColor = "#00f";
	}
	else if(b===88){
	document.getElementById('b88').style.backgroundColor = "#00f";
	}
	else if(b===89){
	document.getElementById('b89').style.backgroundColor = "#00f";
	}
	else if(b===90){
	document.getElementById('b90').style.backgroundColor = "#00f";
	}
	else if(b===100){
	document.getElementById('b100').style.backgroundColor = "#00f";
	}
	else if(b===99){
	document.getElementById('b99').style.backgroundColor = "#00f";
	}
	else if(b===98){
	document.getElementById('b98').style.backgroundColor = "#00f";
	}
	else if(b===97){
	document.getElementById('b97').style.backgroundColor = "#00f";
	}
	else if(b===96){
	document.getElementById('b96').style.backgroundColor = "#00f";
	}
	else if(b===95){
	document.getElementById('b95').style.backgroundColor = "#00f";
	}
	else if(b===94){
	document.getElementById('b94').style.backgroundColor = "#00f";
	}
	else if(b===93){
	document.getElementById('b93').style.backgroundColor = "#00f";
	}
	else if(b===92){
	document.getElementById('b92').style.backgroundColor = "#00f";
	}
	else if(b===91){
	document.getElementById('b91').style.backgroundColor = "#00f";
	}
	

return b;
		
}

function changeImage1(a,b){
	var dice = new Array("http://i922.photobucket.com/albums/ad67/dollar_notes/dice-one.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-two.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-three.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-four.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-five.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-six.png");
	
	if (a === 1) document.getElementById('firstdice1').src = dice[0]; 
	if (a === 2) document.getElementById('firstdice1').src = dice[1];
	if (a === 3) document.getElementById('firstdice1').src = dice[2];
	if (a === 4) document.getElementById('firstdice1').src = dice[3];
	if (a === 5) document.getElementById('firstdice1').src = dice[4];
	if (a === 6) document.getElementById('firstdice1').src = dice[5];

	if (b === 1) document.getElementById('seconddice1').src = dice[0]; 
	if (b === 2) document.getElementById('seconddice1').src = dice[1];
	if (b === 3) document.getElementById('seconddice1').src = dice[2];
	if (b === 4) document.getElementById('seconddice1').src = dice[3];
	if (b === 5) document.getElementById('seconddice1').src = dice[4];
	if (b === 6) document.getElementById('seconddice1').src = dice[5];

	return a, b;

	}

function changeImage2(a,b){
		var dice = new Array("http://i922.photobucket.com/albums/ad67/dollar_notes/dice-one.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-two.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-three.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-four.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-five.png",
			"http://i922.photobucket.com/albums/ad67/dollar_notes/dice-six.png");

	if (a === 1) document.getElementById('firstdice2').src = dice[0]; 
	if (a === 2) document.getElementById('firstdice2').src = dice[1];
	if (a === 3) document.getElementById('firstdice2').src = dice[2];
	if (a === 4) document.getElementById('firstdice2').src = dice[3];
	if (a === 5) document.getElementById('firstdice2').src = dice[4];
	if (a === 6) document.getElementById('firstdice2').src = dice[5];

	if (b === 1) document.getElementById('seconddice2').src = dice[0]; 
	if (b === 2) document.getElementById('seconddice2').src = dice[1];
	if (b === 3) document.getElementById('seconddice2').src = dice[2];
	if (b === 4) document.getElementById('seconddice2').src = dice[3];
	if (b === 5) document.getElementById('seconddice2').src = dice[4];
	if (b === 6) document.getElementById('seconddice2').src = dice[5];

	return a, b;

	}

function playSound(soundfile) {
 document.getElementById("dummy").innerHTML=
 "<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
 }

function clearPrevious(b){

	if(b===2){
	document.getElementById('b2').style.backgroundColor = "transparent";
	}
	else if(b===3){
	document.getElementById('b3').style.backgroundColor = "transparent";
	}
	else if(b===4){
	document.getElementById('b4').style.backgroundColor = "transparent";
	}
	else if(b===5){
	document.getElementById('b5').style.backgroundColor = "transparent";
	}
	else if(b===6){
	document.getElementById('b6').style.backgroundColor = "transparent";
	}
	else if(b===7){
	document.getElementById('b7').style.backgroundColor = "transparent";
	}
	else if(b===8){
	document.getElementById('b8').style.backgroundColor = "transparent";
	}
	else if(b===9){
	document.getElementById('b9').style.backgroundColor = "transparent";
	}
	else if(b===10){
	document.getElementById('b10').style.backgroundColor = "transparent";
	}
	else if(b===20){
	document.getElementById('b20').style.backgroundColor = "transparent";
	}
	else if(b===19){
	document.getElementById('b19').style.backgroundColor = "transparent";
	}
	else if(b===18){
	document.getElementById('b18').style.backgroundColor = "transparent";
	}
	else if(b===17){
	document.getElementById('b17').style.backgroundColor = "transparent";
	}
	else if(b===16){
	document.getElementById('b16').style.backgroundColor = "transparent";
	}
	else if(b===15){
	document.getElementById('b15').style.backgroundColor = "transparent";
	}
	else if(b===14){
	document.getElementById('b14').style.backgroundColor = "transparent";
	}
	else if(b===13){
	document.getElementById('b13').style.backgroundColor = "transparent";
	}
	else if(b===12){
	document.getElementById('b12').style.backgroundColor = "transparent";
	}
	else if(b===11){
	document.getElementById('b11').style.backgroundColor = "transparent";
	}
	else if(b===21){
	document.getElementById('b21').style.backgroundColor = "transparent";
	}
	else if(b===22){
	document.getElementById('b22').style.backgroundColor = "transparent";
	}
	else if(b===23){
	document.getElementById('b23').style.backgroundColor = "transparent";
	}
	else if(b===24){
	document.getElementById('b24').style.backgroundColor = "transparent";
	}
	else if(b===25){
	document.getElementById('b25').style.backgroundColor = "transparent";
	}
	else if(b===26){
	document.getElementById('b26').style.backgroundColor = "transparent";
	}
	else if(b===27){
	document.getElementById('b27').style.backgroundColor = "transparent";
	}
	else if(b===28){
	document.getElementById('b28').style.backgroundColor = "transparent";
	}
	else if(b===29){
	document.getElementById('b29').style.backgroundColor = "transparent";
	}
	else if(b===30){
	document.getElementById('b30').style.backgroundColor = "transparent";
	}
	else if(b===40){
	document.getElementById('b40').style.backgroundColor = "transparent";
	}
	else if(b===39){
	document.getElementById('b39').style.backgroundColor = "transparent";
	}
	else if(b===38){
	document.getElementById('b38').style.backgroundColor = "transparent";
	}
	else if(b===37){
	document.getElementById('b37').style.backgroundColor = "transparent";
	}
	else if(b===36){
	document.getElementById('b36').style.backgroundColor = "transparent";
	}
	else if(b===35){
	document.getElementById('b35').style.backgroundColor = "transparent";
	}
	else if(b===34){
	document.getElementById('b34').style.backgroundColor = "transparent";
	}
	else if(b===33){
	document.getElementById('b33').style.backgroundColor = "transparent";
	}
	else if(b===32){
	document.getElementById('b32').style.backgroundColor = "transparent";
	}
	else if(b===31){
	document.getElementById('b31').style.backgroundColor = "transparent";
	}
	else if(b===41){
	document.getElementById('b41').style.backgroundColor = "transparent";
	}
	else if(b===42){
	document.getElementById('b42').style.backgroundColor = "transparent";
	}
	else if(b===43){
	document.getElementById('b43').style.backgroundColor = "transparent";
	}
	else if(b===44){
	document.getElementById('b44').style.backgroundColor = "transparent";
	}
	else if(b===45){
	document.getElementById('b45').style.backgroundColor = "transparent";
	}
	else if(b===46){
	document.getElementById('b46').style.backgroundColor = "transparent";
	}
	else if(b===47){
	document.getElementById('b47').style.backgroundColor = "transparent";
	}
	else if(b===48){
	document.getElementById('b48').style.backgroundColor = "transparent";
	}
	else if(b===49){
	document.getElementById('b41').style.backgroundColor = "transparent";
	}
	else if(b===50){
	document.getElementById('b50').style.backgroundColor = "transparent";
	}
	else if(b===60){
	document.getElementById('b60').style.backgroundColor = "transparent";
	}
	else if(b===59){
	document.getElementById('b59').style.backgroundColor = "transparent";
	}
	else if(b===58){
	document.getElementById('b58').style.backgroundColor = "transparent";
	}
	else if(b===57){
	document.getElementById('b57').style.backgroundColor = "transparent";
	}
	else if(b===56){
	document.getElementById('b56').style.backgroundColor = "transparent";
	}
	else if(b===55){
	document.getElementById('b55').style.backgroundColor = "transparent";
	}
	else if(b===54){
	document.getElementById('b54').style.backgroundColor = "transparent";
	}
	else if(b===53){
	document.getElementById('b53').style.backgroundColor = "transparent";
	}
	else if(b===52){
	document.getElementById('b52').style.backgroundColor = "transparent";
	}
	else if(b===51){
	document.getElementById('b51').style.backgroundColor = "transparent";
	}	
	else if(b===61){
	document.getElementById('b61').style.backgroundColor = "transparent";
	}
	else if(b===62){
	document.getElementById('b62').style.backgroundColor = "transparent";
	}
	else if(b===63){
	document.getElementById('b63').style.backgroundColor = "transparent";
	}
	else if(b===64){
	document.getElementById('b64').style.backgroundColor = "transparent";
	}
	else if(b===65){
	document.getElementById('b65').style.backgroundColor = "transparent";
	}
	else if(b===66){
	document.getElementById('b66').style.backgroundColor = "transparent";
	}
	else if(b===67){
	document.getElementById('b67').style.backgroundColor = "transparent";
	}
	else if(b===68){
	document.getElementById('b68').style.backgroundColor = "transparent";
	}
	else if(b===69){
	document.getElementById('b69').style.backgroundColor = "transparent";
	}
	else if(b===70){
	document.getElementById('b70').style.backgroundColor = "transparent";
	}
	else if(b===80){
	document.getElementById('b80').style.backgroundColor = "transparent";
	}
	else if(b===79){
	document.getElementById('b79').style.backgroundColor = "transparent";
	}
	else if(b===78){
	document.getElementById('b78').style.backgroundColor = "transparent";
	}
	else if(b===77){
	document.getElementById('b77').style.backgroundColor = "transparent";;
	}
	else if(b===76){
	document.getElementById('b76').style.backgroundColor = "transparent";
	}
	else if(b===75){
	document.getElementById('b75').style.backgroundColor = "transparent";
	}
	else if(b===74){
	document.getElementById('b74').style.backgroundColor = "transparent";
	}
	else if(b===73){
	document.getElementById('b73').style.backgroundColor = "transparent";
	}
	else if(b===72){
	document.getElementById('b72').style.backgroundColor = "transparent";
	}
	else if(b===71){
	document.getElementById('b71').style.backgroundColor = "transparent";
	}
	else if(b===81){
	document.getElementById('b81').style.backgroundColor = "transparent";
	}
	else if(b===82){
	document.getElementById('b82').style.backgroundColor = "transparent";
	}
	else if(b===83){
	document.getElementById('b83').style.backgroundColor = "transparent";
	}
	else if(b===84){
	document.getElementById('b84').style.backgroundColor = "transparent";
	}
	else if(b===85){
	document.getElementById('b85').style.backgroundColor = "transparent";
	}
	else if(b===86){
	document.getElementById('b86').style.backgroundColor = "transparent";
	}
	else if(b===87){
	document.getElementById('b87').style.backgroundColor = "transparent";
	}
	else if(b===88){
	document.getElementById('b88').style.backgroundColor = "transparent";
	}
	else if(b===89){
	document.getElementById('b89').style.backgroundColor = "transparent";
	}
	else if(b===90){
	document.getElementById('b90').style.backgroundColor = "transparent";
	}
	else if(b===100){
	document.getElementById('b100').style.backgroundColor = "transparent";
	}
	else if(b===99){
	document.getElementById('b99').style.backgroundColor = "transparent";
	}
	else if(b===98){
	document.getElementById('b98').style.backgroundColor = "transparent";
	}
	else if(b===97){
	document.getElementById('b97').style.backgroundColor = "transparent";
	}
	else if(b===96){
	document.getElementById('b96').style.backgroundColor = "transparent";
	}
	else if(b===95){
	document.getElementById('b95').style.backgroundColor = "transparent";
	}
	else if(b===94){
	document.getElementById('b94').style.backgroundColor = "transparent";
	}
	else if(b===93){
	document.getElementById('b93').style.backgroundColor = "transparent";
	}
	else if(b===92){
	document.getElementById('b92').style.backgroundColor = "transparent";
	}
	else if(b===91){
	document.getElementById('b91').style.backgroundColor = "transparent";
	}
	

return b;
		
}

