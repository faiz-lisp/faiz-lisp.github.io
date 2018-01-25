function escape(input) {
    // warm up
    // script should be executed without user interaction
    return '<input type="text" value="' + input + '">';
}


function binToHex(b){//charToHex
    var str = b;//prompt("请输入你想转化成十六进制编码的字符串", "");
    var ar=[]
				,x
				,y;		
    for (var i = 0; i < str.length; i++) {
        var i8= str.charCodeAt(i);//+
				if(1)
				{
					x=(i8>>4).toString(16);
					y=(i8%16).toString(16);
					ar.push(x);	
					ar.push(y);	
				}
        ///ar.push(i8);				
    }
    str=ar.join("");//"\\x"
    ///str="\\x"+str;//
    //alert(str);
    return str;
}

function charToBin(c){
    var str = c;//
    var ar=[]
				,x
				,y;		
    for (var i = 0; i < str.length; i++) {
        var i8= str.charCodeAt(i);//+
				for(var j=0;j<8;j++)
				{
					x=((i8>>(7-j))%2).toString(16);					
					ar.push(x);
				}
    }
    str=ar.join("");//"\\x"
    return str;
}

function charToBinSp(c){ //0,1 -> -,|
    var str = c;//
    var ar=[]
				,x
				,y;		
    for (var i = 0; i < str.length; i++) {
        var i8= str.charCodeAt(i);//+
				for(var j=0;j<8;j++)
				{
					x=((i8>>(7-j))%2);//.toString(16);										
					if(x){ar.push('X');}else{ar.push(' ');}
				}
    }
    str=ar.join("");//"\\x"
    return str;
}

function setCopy(_sTxt){
	try{
		if(window.clipboardData) {
				window.clipboardData.setData("Text", _sTxt);
		} else if(window.netscape) {
				netscape.security.PrivilegeManager.enablePrivilege('UniversalXPConnect');
				var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);
				if(!clip) return;
				var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);
				if(!trans) return;
				trans.addDataFlavor('text/unicode');
				var str = new Object();
				var len = new Object();
				var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);
				var copytext = _sTxt;
				str.data = copytext;
				trans.setTransferData("text/unicode", str, copytext.length*2);
				var clipid = Components.interfaces.nsIClipboard;
				if (!clip) return false;
				clip.setData(trans, null, clipid.kGlobalClipboard);
		}
	}catch(e){}
}

function get(s) { //?
	return document.querySelector(s)
}
function getinner(s) {
	return document.querySelector(s).innerHTML
}
function echol(v) {
	 var arr = [], len = arguments.length;
	 for (var i = 0; i < len; ++i) {
	 	arr[i] = arguments[i];
	 } echo(arr.join(''),'<br>')
}
function echo(){
	var res='';
	for (var i = 0, len=arguments.length; i < len; ++i) {
	  res+= (''+arguments[i]).replace('\n','<br>');
	} document.write(res)
}
// function echo() {
	// for (var i = 0, len=arguments.length; i < len; ++i) {
      // //get('#title').innerHTML += ('' + arguments[i]).replace('\n','<br>');
	  // getinner('#title') += ('' + arguments[i]).replace('\n','<br>');
	// }
// }
function f1(){
	setTimeout(function () { // f1的任务代码
    echo('st')
    f1.trigger('done'); //?
  }, 1000);
}

function f2(){
		echo('ed')
}

f1.on('done', f2);
