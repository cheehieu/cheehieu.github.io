var dateFormat=function(){
	var a=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g;
	var b=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
	var c=/[^-+\dA-Z]/g;
	var d=function(a,b){
		a=String(a);
		b=b||2;
		while(a.length<b)
			a="0"+a;
		return a};
		return function(e,f,g){
			var h=dateFormat;
			if(arguments.length==1&&Object.prototype.toString.call(e)=="[object String]"&&!/\d/.test(e)){
				f=e;
				e=undefined}
			e=e?new Date(e):new Date;
			if(isNaN(e))throw SyntaxError("invalid date");
			f=String(h.masks[f]||f||h.masks["default"]);
			if(f.slice(0,4)=="UTC:"){
				f=f.slice(4);
				g=true}
			var i=g?"getUTC":"get";
			var j=e[i+"Date"]();
			var k=e[i+"Day"]();
			var l=e[i+"Month"]();
			var m=e[i+"FullYear"]();
			var n=e[i+"Hours"]();
			var o=e[i+"Minutes"]();
			var p=e[i+"Seconds"]();
			var q=e[i+"Milliseconds"]();
			var r=g?0:e.getTimezoneOffset();
			var s={d:j,dd:d(j),ddd:h.i18n.dayNames[k],dddd:h.i18n.dayNames[k+7],m:l+1,mm:d(l+1),mmm:h.i18n.monthNames[l],mmmm:h.i18n.monthNames[l+12],yy:String(m).slice(2),yyyy:m,h:n%12||12,hh:d(n%12||12),H:n,HH:d(n),M:o,MM:d(o),s:p,ss:d(p),l:d(q,3),L:d(q>99?Math.round(q/10):q),t:n<12?"a":"p",tt:n<12?"am":"pm",T:n<12?"A":"P",TT:n<12?"AM":"PM",Z:g?"UTC":(String(e).match(b)||[""]).pop().replace(c,""),o:(r>0?"-":"+")+d(Math.floor(Math.abs(r)/60)*100+Math.abs(r)%60,4),S:["th","st","nd","rd"][j%10>3?0:(j%100-j%10!=10)*j%10]};
			return f.replace(a,function(a){return a in s?s[a]:a.slice(1,a.length-1)})
		}
	}();
				
	dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};
	dateFormat.i18n={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"]};
	if(typeof global_displayWidget=="undefined"){var global_displayWidget=0}

	displayWidget=function(){
		var a=new Date;
		var b=dateFormat(a,"mm/dd/yyyy");
		var c="Today is "+dateFormat(a,"mmmm dd, yyyy.");
		if(typeof width=="number"&&typeof height=="number"){
			if(width<280)width=280;
			if(height<100)height=100;
		}
		else{width=300;height=250}
		var d=new XMLHttpRequest;
		var e=null;
		var f=new Array;
		d.open("GET","http://www.checkiday.com/api.php?d="+b,true);
		d.onreadystatechange=function(){
			if(d.readyState===4){
				if(d.status===200){
					e=d.responseText;
					e=e.replace('["',"");
					e=e.replace('"]',"");
					f=e.split('","');
					e="";
					for(var a=0;a<f.length;a++)
						e+='<p>Today is <a href="http://checkiday.com/">'+f[a]+"</a>!</p>";
					document.getElementById("Checkiday_List").innerHTML=e;
					document.getElementById("Checkiday_Date").innerHTML=c;
				}
			}
		};
		d.send(null);
		if(!global_displayWidget){
			global_displayWidget=1;
			var g='.Checkiday{text-shadow:none;font-size:15px;font-family:"Helvetica","Arial",sans-serif;}#Checkiday{overflow:hidden;position:relative;display:block;padding:0px;width:'+width+"px;height:"+(height-20)+"px;margin:0;background:#ff9797;background:-moz-linear-gradient(top,#ff9797 0,#ff2f2f 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0%,#ff9797),color-stop(100%,#ff2f2f));background:-webkit-linear-gradient(top,#ff9797 0,#ff2f2f 100%);background:-o-linear-gradient(top,#ff9797 0,#ff2f2f 100%);background:-ms-linear-gradient(top,#ff9797 0,#ff2f2f 100%);background:linear-gradient(top,#ff9797 0,#ff2f2f 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff9797',endColorstr='#ff2f2f',GradientType=0);}#Checkiday_Date{font-size:18px;font-weight:bold;text-align:center;display:block;width:100%;height:18px;padding-top:5px;padding-bottom:3px;border-bottom:1px solid rgba(0, 0, 0, 0.35);}#Checkiday_List{height:"+(height-73)+"px;position:relative;overflow:auto;padding:5px;padding-top:2px;border-top:1px solid rgba(255, 255, 255, 0.35);}#Checkiday_List > p {margin:0;margin-left:20px;text-indent:-20px;}#Checkiday_Footer{text-align:center;display:block;width:100%;height:20px;background-color:rgba(255, 255, 255, 0.35);position:absolute;bottom:0;}";
			var h=document.createElement("style");
			h.type="text/css";
			h.innerHTML=g;
			document.body.appendChild(h);
			var i='<div id="Checkiday_Date" class="Checkiday"></div><div id="Checkiday_List" class="Checkiday"></div>';
			document.getElementById("Checkiday").innerHTML=i;
			if(document.getElementById("Checkiday_Footer")==null){
				var j=document.createElement("div");
				j.innerHTML='<div id="Checkiday_Footer" class="Checkiday">Be happy!</div>';
				document.getElementById("Checkiday").appendChild(j.firstChild);
			}
		}
	};
	setTimeout("displayWidget()",1)