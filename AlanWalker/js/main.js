document.addEventListener("DOMContentLoaded", function() { startplayer(); startplayer2(); startplayer3(); startplayer4(); startplayer5(); startplayer6(); }, false);
var player;
var player2;
var player3;
var player4;
var player5;
var player6;
function startplayer() 
{
 player = document.getElementById('music_player');
 player.controls = false;
}
function startplayer2() 
{
 player2 = document.getElementById('music_player2');
 player2.controls = false;
}
function startplayer3() 
{
 player3 = document.getElementById('music_player3');
 player3.controls = false;
}
function startplayer4() 
{
 player4 = document.getElementById('music_player4');
 player4.controls = false;
}
function startplayer5() 
{
 player5 = document.getElementById('music_player5');
 player5.controls = false;
}
function startplayer6() 
{
 player6 = document.getElementById('music_player6');
 player6.controls = false;
}
function play_aud() 
{
 player.play();
} 
function pause_aud() 
{
 player.pause();
}
function play_aud2() 
{
 player2.play();
} 
function pause_aud2() 
{
 player2.pause();
}
function play_aud3() 
{
 player3.play();
} 
function pause_aud3() 
{
 player3.pause();
}
function play_aud4() 
{
 player4.play();
} 
function pause_aud4() 
{
 player4.pause();
}
function play_aud5() 
{
 player5.play();
} 
function pause_aud5() 
{
 player5.pause();
}
function play_aud6() 
{
 player6.play();
} 
function pause_aud6() 
{
 player6.pause();
}


