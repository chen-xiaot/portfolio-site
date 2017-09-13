window.onload=function(){
	document.getElementById('fname').onfocus=function(){
		if(this.value=="fname")
			this.value="";
	};
	document.getElementById('fname').onblur=function(){
		if(this.value.length==0)
			this.value="fname";
	}

	document.getElementById('lname').onfocus=function(){
		if(this.value=="lname")
			this.value="";
	};
	document.getElementById('lname').onblur=function(){
		if(this.value.length==0)
			this.value="lname";
	}
	document.getElementById('email').onfocus=function(){
		if(this.value=="x@x.x")
			this.value="";
	};
	document.getElementById('email').onblur=function(){
		if(this.value.length==0)
			this.value="x@x.x";
	}
	document.getElementById('tel').onfocus=function(){
		if(this.value=="1234567890")
			this.value="";
	};
	document.getElementById('tel').onblur=function(){
		if(this.value.length==0)
			this.value="1234567890";
	}



	document.getElementById('form').onsubmit=function(){
		var fname=this.fname.value;
		var lname=this.lname.value;
		var email=this.email.value;
		var tel=this.tel.value;
		if(fname=='fname'||lname=='lname'||email=='x@x.x'
			||(email.indexOf("@") == -1 || email.indexOf(".") == -1)
			||tel=='1234567890'||tel.length!=10){
			alert("please enter valid NAME, EMAIL and TEL");
			return false;
		}
	}

}

