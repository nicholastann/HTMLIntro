var submittedTurn = false;
var gameover = false;
var turn = true;
(function(){
		// Save a reference to the root
		var root = this;
		
		// Pre-configure a standard chessboard layout
		var set_board = {
			// Black pieces
			7: "BQ",  40: "BQ", 60: "BQ",  97: "BQ",
			//White pieces
			4: "WQ",  31: "WQ", 61: "WQ", 94: "WQ"
		}
		
		
		
		
		// A simple lookup object for piece labels
		// FullName, White ASCII, Black ASCII
		var fullpieces = {
			"Q": ["Queen", "&#9812;", "&#9818;"],
			"P": ["Pawn", "&#9672;", "&#9672;"],
		}
		
		
		
		// Create a global variable to access the ChessBoard library at anytime
		var ChessBoard = root.ChessBoard = function(positions) {
			
			// If any positions are passed to the board use them for the setup.
			// Otherwise load the board with a standard setup. This allows for saving and starting of games
			this.positions = positions || $.extend(true, {}, set_board);
			
			var chessboard = this;
			chessboard.fullpieces = fullpieces;
			
			// Resets the board to a configured ready to play board
			this.resetBoard = function(){
				delete chessboard.positions;
				chessboard.positions = $.extend(true, {}, set_board);
			}

					
			
			
			this.setsubmittedTurn = function(old_position, new_position, fposition) {
				submittedTurn = true;
				resumeplay(old_position, new_position, fposition, true, chessboard);
			}

			
			
			//begins game logic. continues until gameover true. rest of logic is in resumeplay broken bc wait for input by user
			this.game = function(old_position, new_position, fposition, newgame) {
				if (newgame) {
					alert("Game Of Amazons!");
					alert("White moves first, and the players alternate moves thereafter");
					alert("First, one moves any of one's amazons into an empty square in a straight line exactly as a queen moves in chess; it may not cross or enter a square occupied by an amazon of either color or an arrow");
					alert("Second, after moving, the amazon shoots an arrow from its landing square to another, using the same movement rules");
					alert("The square where the arrow lands is removed from use.");
					alert("The last player to be able to make a move wins");
				}
				else {
					if (gameover == false) {
						submittedTurn = false;
						resumeplay(old_position, new_position, fposition, false, chessboard);
					}
				}
			}
		};
}).call(this);








//returns TRUE if old position has queen and new is a straight line away and no elements obstruct path
validmove = function(nold_position, nnew_position) {
	travel = nold_position;
	decnew = nnew_position;

    //travel will keep track as we follow path to determine if its unobsructed
	//check old_position if color corresponding to turn 
	if (document.getElementById(decnew).innerHTML == "<a>♔</a>") return false;
	if (document.getElementById(decnew).innerHTML == "<a>♚</a>") return false;
	if (document.getElementById(decnew).innerHTML == "<a>◈</a>") return false; //return false if newposition already has object in it

	if (turn) { //check correct source
		if (document.getElementById(travel).innerHTML != "<a>♔</a>") return false;
	}
	else {
		if (document.getElementById(travel).innerHTML != "<a>♚</a>") return false;
	}

	if (Math.ceil(travel / 10) == Math.ceil(decnew / 10) ) { //up down
		var steps = decnew - travel;
		if (steps > 0) {
			for(var i = 0; i<steps; i++) {
				travel++;
					if (document.getElementById(travel).innerHTML == "<a>♔</a>") return false;
					if (document.getElementById(travel).innerHTML == "<a>♚</a>") return false;
					if (document.getElementById(travel).innerHTML == "<a>◈</a>") return false;
			}
		}
		else {
			for (var i = 0; i < (steps*-1); i++) {
				travel--;
					if (document.getElementById(travel).innerHTML == "<a>♔</a>") return false;
					if (document.getElementById(travel).innerHTML == "<a>♚</a>") return false;
					if (document.getElementById(travel).innerHTML == "<a>◈</a>") return false;
			}
		}
	}
	else if (travel % 10 == decnew % 10) { //left right
		var steps = Math.floor(decnew / 10) - Math.floor(travel / 10);
		if (steps > 0) {
			for(var i = 0; i<steps; i++) {
				travel+=10;
				if (document.getElementById(travel).innerHTML == "<a>♔</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>♚</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>◈</a>") return false;
			}
		}
		else {
			for (var i = 0; i < (steps*-1); i++) {
				travel-=10;
				if (document.getElementById(travel).innerHTML == "<a>♔</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>♚</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>◈</a>") return false;
			}
		}
	}
	
	else if (travel % 11 == decnew % 11) { //upright/downleft
		var steps = Math.floor(decnew / 11) - Math.floor(travel / 11);
		if (steps > 0) {
			for(var i = 0; i<steps; i++) {
				travel+=11;
				if (document.getElementById(travel).innerHTML == "<a>♔</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>♚</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>◈</a>") return false;
			}
		}
		else {
			for (var i = 0; i < (steps*-1); i++) {
				travel = travel - 11;
				if (document.getElementById(travel).innerHTML == "<a>♔</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>♚</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>◈</a>") return false;
			}
		}
	}
	
	else if (travel % 9 == decnew % 9) { //downright upleft
		var steps = Math.floor(decnew / 9) - Math.floor(travel / 9);
		if (steps > 0) {
			for(var i = 0; i<steps; i++) {
				travel+=9;
				if (document.getElementById(travel).innerHTML == "<a>♔</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>♚</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>◈</a>") return false;
			}
		}
		else {
			for (var i = 0; i < (steps*-1); i++) {
				travel-=9;
				if (document.getElementById(travel).innerHTML == "<a>♔</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>♚</a>") return false;
				if (document.getElementById(travel).innerHTML == "<a>◈</a>") return false;
			}
		}
	}
	else {
		alert("not a straight line");
		return false;
	}
	return true;
}









checkmoves = function () { //returns true if elements from all 8 directions surround every queen of a single color
	var myarr = new Array();
	var arrl = 0;
	for (var i = 1; i<101; i++) {
		if (turn) {
			if (document.getElementById(i).innerHTML == "<a>♔</a>") {
				myarr[arrl] = i;
				arrl++; 
			} 
		}
		else {
			if (document.getElementById(i).innerHTML == "<a>♚</a>") {
				myarr[arrl] = i;
				arrl++;
			}
		}
	}

	for (var j = 0; j<arrl; j++) {
		var hopethisworks = myarr[j];
		var allsides = 8;

		if (hopethisworks == 1 || hopethisworks == 11|| hopethisworks == 21 || hopethisworks == 31
		|| hopethisworks == 41 || hopethisworks == 51|| hopethisworks == 61 || hopethisworks == 71
		||hopethisworks == 81 || hopethisworks == 91) allsides--;
		else {
			if (document.getElementById(hopethisworks-1).innerHTML == "<a>♔</a>") allsides--;
			else if (document.getElementById(hopethisworks-1).innerHTML == "<a>♚</a>") allsides--;
			else if (document.getElementById(hopethisworks-1).innerHTML == "<a>◈</a>") allsides--;
		}

		if (hopethisworks == 10 || hopethisworks == 40 || hopethisworks == 70 || hopethisworks == 90
		|| hopethisworks == 20 || hopethisworks == 50|| hopethisworks == 80 || hopethisworks == 100
		||hopethisworks == 30 || hopethisworks == 60) allsides--;
		else {
			if (document.getElementById(hopethisworks+1).innerHTML == "<a>♔</a>") allsides--;
			else if (document.getElementById(hopethisworks+1).innerHTML == "<a>♚</a>") allsides--;
			else if (document.getElementById(hopethisworks+1).innerHTML == "<a>◈</a>") allsides--;
		}

		if (hopethisworks < 11) allsides--;
		else {
			if (document.getElementById(hopethisworks-10).innerHTML == "<a>♔</a>") allsides--;
			else if (document.getElementById(hopethisworks-10).innerHTML == "<a>♚</a>") allsides--;
			else if (document.getElementById(hopethisworks-10).innerHTML == "<a>◈</a>") allsides--;
		}

		if (hopethisworks < 12 || hopethisworks == 41 || hopethisworks == 71 || hopethisworks == 91
			|| hopethisworks == 21 || hopethisworks == 51|| hopethisworks == 81
			||hopethisworks == 31 || hopethisworks == 61) allsides--;
		else {
			if (document.getElementById(hopethisworks-11).innerHTML == "<a>♔</a>") allsides--;
			else if (document.getElementById(hopethisworks-11).innerHTML == "<a>♚</a>") allsides--;
			else if (document.getElementById(hopethisworks-11).innerHTML == "<a>◈</a>") allsides--;
		}

		if (hopethisworks == 20 || hopethisworks == 50 || hopethisworks == 70|| hopethisworks == 90 
		|| hopethisworks == 40|| hopethisworks == 80 || hopethisworks < 11 || hopethisworks == 100
		||hopethisworks == 30 || hopethisworks == 60) allsides--;
		else {
			if (document.getElementById(hopethisworks-9).innerHTML == "<a>♔</a>") allsides--;
			else if (document.getElementById(hopethisworks-9).innerHTML == "<a>♚</a>") allsides--;
			else if (document.getElementById(hopethisworks-9).innerHTML == "<a>◈</a>") allsides--;
		}

		if (hopethisworks > 90) allsides--;
		else {
			if (document.getElementById(hopethisworks+10).innerHTML == "<a>♔</a>") allsides--;
			else if (document.getElementById(hopethisworks+10).innerHTML == "<a>♚</a>") allsides--;
			else if (document.getElementById(hopethisworks+10).innerHTML == "<a>◈</a>") allsides--;
		}

		if (hopethisworks == 10 || hopethisworks == 40 || hopethisworks == 70 || hopethisworks > 89
			|| hopethisworks == 20 || hopethisworks == 50|| hopethisworks == 80
			||hopethisworks == 30 || hopethisworks == 60) allsides--;
		else {
			if (document.getElementById(hopethisworks+11).innerHTML == "<a>♔</a>") allsides--;
			else if (document.getElementById(hopethisworks+11).innerHTML == "<a>♚</a>") allsides--;
			else if (document.getElementById(hopethisworks+11).innerHTML == "<a>◈</a>") allsides--;
		}

		if (hopethisworks == 11 || hopethisworks == 41 || hopethisworks == 71 || hopethisworks > 90
			|| hopethisworks == 21 || hopethisworks == 51|| hopethisworks == 81 || hopethisworks == 1
			||hopethisworks == 31 || hopethisworks == 61) allsides--;
		else {
			if (document.getElementById(hopethisworks+9).innerHTML == "<a>♔</a>") allsides--;
			else if (document.getElementById(hopethisworks+9).innerHTML == "<a>♚</a>") allsides--;
			else if (document.getElementById(hopethisworks+9).innerHTML == "<a>◈</a>") allsides--;
		}

		if (allsides > 0) {
			return true;
		}
	}
	 return false;
}








//gameplay logic. broken from game as workaround for wait for input
function resumeplay (old_position, new_position, fposition, resume, chessboard) { 
	document.getElementById("Turn").innerHTML = "White Turn: " + turn;
	if (!resume) {
			if (turn) alert("awaiting white player input...");
			else alert("awaiting dark player input...");
			setTimeout(waity(old_position, new_position, fposition), 25000); //waits for button submit press
	}
	else {
		nold_position = convertToNum(old_position);
		nnew_position = convertToNum(new_position);
		nfposition = convertToNum(fposition);

		//check turn check if valid queen move, add queen to stop delete from old spot, else alert
		if (validmove(nold_position, nnew_position)) { //queen move valid?
			if (turn) {
				document.getElementById(nnew_position).innerHTML = "<a>♔</a>"; //temp change queen pos so fire works
				document.getElementById(nold_position).innerHTML = "";
			}
			else {
				document.getElementById(nnew_position).innerHTML = "<a>♚</a>";
				document.getElementById(nold_position).innerHTML = "";
			}
		}
		else {
			submittedTurn = false; //try input again
			alert("queen move incorrect. awaiting new input....");
			setTimeout(waity(), 25000); //waits for button submit press
		}

		if (validmove(nnew_position, nfposition)) { //arrow fire valid?
			document.getElementById(nfposition).innerHTML = "<a>◈</a>";
	
			if (turn) turn = false;
			else turn = true;
			if (checkmoves() == false) {
				gameover = true; 
				if (turn) alert("black power!");
				else alert("white power!");
			}
			else {
				chessboard.game(old_position, new_position, fposition, false);
			}
		}
		else  {
			if (turn) { //redo queenmove
				document.getElementById(nold_position).innerHTML = "<a>♔</a>";
				document.getElementById(nnew_position).innerHTML = "";
			}
			else {
				document.getElementById(nold_position).innerHTML = "<a>♚</a>";
				document.getElementById(nnew_position).innerHTML = "";
			}
			submittedTurn = false;
			alert("fire incorrect. awaiting new input....");
			setTimeout(waity(), 25000); //waits for button submit press
		}
	}
}


//delays until user presses submit
function waity() {
	if (submittedTurn == false) setTimeout(waity(), 2500);
}



//convert user inputted position into a number
function convertToNum(convin) { 
	var convnum = 0;
	var arr = convin.split("");

	if (arr[0].toUpperCase() == "B") convnum += 10;
	else if (arr[0].toUpperCase() == "C") convnum += 20;
	else if (arr[0].toUpperCase() == "D") convnum += 30;
	else if (arr[0].toUpperCase() == "E") convnum += 40;
	else if (arr[0].toUpperCase() == "F") convnum += 50;
	else if (arr[0].toUpperCase() == "G") convnum += 60;
	else if (arr[0].toUpperCase() == "H") convnum += 70;
	else if (arr[0].toUpperCase() == "I") convnum += 80;
	else if (arr[0].toUpperCase() == "J") convnum += 90;

	if (arr.length != 2) convnum+= 10;	
	else convnum+= Number(arr[1]);
	return convnum;
}