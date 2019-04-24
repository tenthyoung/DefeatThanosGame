var targetNum = 0;
var heroPowerArray = [];
var heroes = new Object();
var wins = 0;
fillHeroPower();


$(document).ready(function() {    
    newTargetNum();
    assignPower();

    heroClick();

    $('#replayButton').click(function() {
        replay();
        $('#replayButton').hide();
    });
});


//gives each hero a random attack power with a random number between 1,000 and 12,000
function fillHeroPower() {
    for (var i = 0; i < 4 ; i++) {
        heroPowerArray.push( 1 + Math.floor(Math.random() * 12) );
    }
}

//assigns attack power to each hero
function assignPower() {
    heroes.ironman = heroPowerArray[0];
    heroes.captainAmerica = heroPowerArray[1];
    heroes.spiderman = heroPowerArray[2];
    heroes.hulk = heroPowerArray[3];
}

function newTargetNum() {
    //create a target power
    targetNum = (19 + Math.floor(Math.random() * 102));
    $('#gauntletPower').text(targetNum);
}

function destroyStone () {
    wins++;
    $('#wins').text(wins);
}

function heroClick () {
    $('#ironman').click(function() {
        targetNum = targetNum - heroes.ironman;
        $('#gauntletPower').text(targetNum);
        $('#minusPower').text('-' + heroes.ironman);
        checkIfZero();
    });
    $('#captainAmerica').click(function() {
        targetNum = targetNum - heroes.captainAmerica;
        $('#gauntletPower').text(targetNum);
        $('#minusPower').text('-' + heroes.captainAmerica);
        checkIfZero();
    });
    $('#spiderman').click(function() {
        targetNum = targetNum - heroes.spiderman;
        $('#gauntletPower').text(targetNum);
        $('#minusPower').text('-' + heroes.spiderman);
        checkIfZero();
    });
    $('#hulk').click(function() {
        targetNum = targetNum - heroes.hulk;
        $('#gauntletPower').text(targetNum);
        $('#minusPower').text('-' + heroes.hulk);
        checkIfZero();
    });
}

function newLevel() {
    heroPowerArray = [];
    fillHeroPower();
    assignPower();
    newTargetNum();    
}

function youWin () {
    wins++;
    $('#wins').text(wins + '/5');

    if (wins === 5) {
        $('h1').text('You Defeated Thanos!');
        heroPowerArray = [0,0,0,0];
        assignPower();
        $('#replayButton').show();  
    } else {
        newLevel();
    }
}

function youLose () {
    wins = 0;
    $('#wins').text(wins + '/5');
    $('h1').text('You Lose!');
    heroPowerArray = [0,0,0,0];
    assignPower();
    $('#replayButton').show();  
}

function checkIfZero () {
    if ( targetNum == 0 ) {
        youWin();
    } 
    
    if ( targetNum < 0 ) {
        youLose();
    }
}

function replay() {
    $('h1').text('Defeat Thanos');
    wins = 0;
    $('#wins').text(wins + '/5');
    heroPowerArray = [];
    fillHeroPower();
    assignPower();
    newTargetNum();
}


