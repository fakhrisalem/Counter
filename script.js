function mycounter(){
			
	let counter=0;
			
	return function(){
				counter++;
				return counter;
			}
		}
		
let add=mycounter();
		
function myFunction(){
			
	let result=add();
			document.getElementById("demo").innerHTML=result;
		}
