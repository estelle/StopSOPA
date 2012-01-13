var stopsopa = {
	pagebody : document.getElementsByTagName('body')[0],
	sopaText : "Stop SOPA", // change to whatever you want
	date : new Date(),
	blackout : function(){
		stopsopa.pagebody.style.position = "absolute";
		stopsopa.pagebody.style.left = "-4000px";
		var div = document.createElement('div');
		div.setAttribute('style', 'position:absolute; left: 4200px; top: 50px; font-size: 100px; color: red; white-space: nowrap; font-family: arial, san-serif; font-weight: bold;');
		var text = document.createTextNode(stopsopa.sopaText);
		div.appendChild(text)
		stopsopa.pagebody.appendChild(div);	
	},
	
	actionDate: function(){
		if(stopsopa.date.getMonth()	== 0 && stopsopa.date.getDate()	== 18 && stopsopa.date.getYear() == 112){
			stopsopa.blackout();	
		} 
	}
}
stopsopa.actionDate();
