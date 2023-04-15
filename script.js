document.getElementById("music").volume = 0;
function sendTextMsg() {
	cloud_textMsg = cloud_textMsg2;
	cloud_textMsg2 = cloud_textMsg3;
	cloud_textMsg3 = cloud_textMsg4;
	cloud_textMsg4 = cloud_textMsg5;
	cloud_textMsg5 = document.getElementById("textMsgInput").value;
}
function updateTextMsg() {
	document.getElementById("msg").innerHTML = cloud_textMsg;
	document.getElementById("msg2").innerHTML = cloud_textMsg2;
   	document.getElementById("msg3").innerHTML = cloud_textMsg3;
	document.getElementById("msg4").innerHTML = cloud_textMsg4;
	document.getElementById("msg5").innerHTML = cloud_textMsg5;
}
while (true) {
    updateTextMsg();
}
