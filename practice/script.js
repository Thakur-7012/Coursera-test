// console.log(document.getElementById("title"));

// console.log(document instanceof HTMLDocument);

document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name.txt", 
            function (request) {
              var name = request.responseText;

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);
// document.addEventListener("DOMContentLoaded",
// 	function(event){
// 		document.querySelector("button")
// 				.addEventListener("click",function(){
// 					$ajaxUtils.sendRsequest("/name.txt",
// 							function(request){
// 								var name=request.responseText;
// 								document.querySelector("#content")
// 										.innerHTML="<h2>Hello "+name +"!";
// 							});
// 				});
// 		function sayhello (event){

// 			console.log(event);
// 			this.textContent ="Done.";
// 			var name =
// 			   document
// 			   		.getElementById("name")
// 			   		.value;
// 			var message="<h2>Hello " +name +"!</h2>";
// 			// 
// 			document
// 				.getElementById("content")
// 				.innerHTML =message;	

// 			if(name==="Rishi"){
// 				var title =document
// 							.querySelector("#title")
// 							.textContent;
// 				title = "I Love You ";
// 				document
// 					.querySelector("#title")
// 					.textContent=title;

// 			}
// 		}
// 		document
// 			.querySelector("button")
// 			.addEventListener("click",sayhello);
// 		document
// 			.querySelector("body")
// 			.addEventListener("mousemove",
// 				function(event){
// 					if (event.shiftKey === true) {
// 						console.log("x :"+event.clientX);
// 						console.log("y :"+event.clientY);
// 					}
// 				}
				
// 			)
// });

// document
// // 	.querySelector("button")
// // 	.onclick =sayhello ;
