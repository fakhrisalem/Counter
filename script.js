function mycounter(){
			let counter=0;
			return function(){
				counter++;
				return counter;
			}
		}
		let add=mycounter();
		let result=add();
		function myFunction(){
			document.getElementById("demo").innerHTML=add();
		}