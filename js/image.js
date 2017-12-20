	var hidePic = document.getElementById("hidePic");
	var pic = document.getElementById("pic");
	var preview = document.getElementById("mypic");
	var picDiv = document.getElementById("picCrop");

	var changeEvent = document.getElementById("file");
	changeEvent.addEventListener("change", function(){
		
		var file = document.querySelector("input[type=file]").files[0];
		var reader = new FileReader();

		reader.addEventListener("load", function(){
			preview.src = reader.result;
			preview.style.maxWidth = "400px";
			preview.style.maxHeight = "auto";
		}, false);

		if (file){
			reader.readAsDataURL(file);
		}
	});

	var uploadPic = document.getElementById("upload");
	var rotate = document.getElementById("rotate");
	uploadPic.style.visibility = "hidden";
	hidePic.style.visibility = "hidden";
	rotate.style.visibility = "hidden";
			

	pic.addEventListener("mouseover", function(){
		uploadPic.style.visibility = "visible";
		hidePic.style.visibility = "visible";
		rotate.style.visibility = "visible";
				
	});

	pic.addEventListener("mouseout", function(){
		uploadPic.style.visibility = "hidden";
		hidePic.style.visibility = "hidden";
		rotate.style.visibility = "hidden";
				
	});

	var MyPic = {}
	MyPic.degree = 0;
	picDiv.style.transform = "rotate(" + MyPic.degree + "deg)";
	rotate.addEventListener("click", function(){
				MyPic.degree = MyPic.degree + 90;
				console.log(MyPic.degree);
				picDiv.style.transform = "rotate(" + MyPic.degree + "deg)";
			});

MyPic.moving = false;

preview.addEventListener("click", function(e){
	MyPic.moving = !MyPic.moving;
	if (MyPic.moving){
		MyPic.picWidth = e.target.width;
	 	MyPic.picHeight = e.target.height;
	 	MyPic.picDivWidth = 200;
	 	MyPic.picDivHeight = 200;
	 	MyPic.excessWidth = MyPic.picWidth - MyPic.picDivWidth;
	 	MyPic.excessHeight = MyPic.picHeight - MyPic.picDivHeight;
	 	MyPic.picDivPositionLeft = e.target.offsetParent.offsetLeft;
	 	MyPic.picDivPositionTop = e.target.offsetParent.offsetTop;
	  addEventListener("mousemove", move);
	} else {
		removeEventListener("mousemove", move);
	}
});

  function move(e) {
    	MyPic.mouseoffLeftPage = e.pageX;
 		MyPic.mouseoffTopPage = e.pageY;
 		MyPic.mouseoffLeftPx = MyPic.mouseoffLeftPage - MyPic.picDivPositionLeft;
 		MyPic.mouseoffTopPx = MyPic.mouseoffTopPage - MyPic.picDivPositionTop;
 		MyPic.mouseoffLeftPercent = MyPic.mouseoffLeftPx/MyPic.picDivWidth;
 		MyPic.mouseoffTopPercent = MyPic.mouseoffTopPx/MyPic.picDivHeight;
 		MyPic.setnewWidth = -(MyPic.mouseoffLeftPercent * MyPic.excessWidth);
 		MyPic.setnewHeight = -(MyPic.mouseoffTopPercent * MyPic.excessHeight);
 		preview.style.transform = "translate(" + MyPic.setnewWidth + "px ," + MyPic.setnewHeight + "px)"; 
  }; 

// MyPic.moving = false;

// preview.addEventListener("click", function(event){
// 	MyPic.moving = !MyPic.moving;
// 	if (MyPic.moving){
// 		MyPic.x = event.offsetX;
// 		MyPic.y = event.offsetY;
// 		MyPic.scheduled = false; 
// 		var lastEvent;
// 	  addEventListener("mousemove", move);
// 	} else {
// 		removeEventListener("mousemove", move);
// 	}
// });

// function displayCoords(event) {
// 	var x = event.offsetX;
// 	var y = event.offsetY;
// 	console.log(y, x);
// 	var top = y - MyPic.y;
// 	var left = x - MyPic.x;
// 	preview.style.top = top + "px";
// 	preview.style.left = left + "px";
// 	console.log(top, left);
    
//   }

//   function move(event) {
//     lastEvent = event;
//     if (!MyPic.scheduled) {
//       MyPic.scheduled = true;
//       setTimeout(function() {
//         MyPic.scheduled = false;
//         displayCoords(lastEvent);
//       }, 300);
//     }
//   };


		hidePic.addEventListener("click", function(){
			pic.style.visibility = "hidden";
		});
