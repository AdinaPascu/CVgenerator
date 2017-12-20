	function selectPeriod(e){	
		parentId = e.target.parentNode.parentNode.id;
		var parentElement = document.getElementById(parentId);
		var element = parentElement.getElementsByClassName(e.target.className);
		var periodWindow = document.createElement("div");
		periodWindow.id = "periodWindow";
		parentElement.appendChild(periodWindow);
		var monthWindow = document.createElement("div");
		monthWindow.id = "monthWindow";
		periodWindow.appendChild(monthWindow);
		var monthArrowUp = document.createElement("p");
		monthArrowUp.id = "monthArrowUp";
		monthArrowUp.innerHTML = '<i style="font-size:24px" class="fa">&#xf0d8;</i>';
		monthWindow.appendChild(monthArrowUp);
		var beforeSelectedMonth = document.createElement("p");
		monthWindow.appendChild(beforeSelectedMonth);
		var selectedMonth = document.createElement("p");
		monthWindow.appendChild(selectedMonth);
		var afterSelectedMonth = document.createElement("p");
		monthWindow.appendChild(afterSelectedMonth);
		var monthArrowDown = document.createElement("p");
		monthArrowDown.id = "monthArrowDown";
		monthArrowDown.innerHTML = '<i style="font-size:24px" class="fa">&#xf0d7;</i>';
		monthWindow.appendChild(monthArrowDown);


		var yearWindow = document.createElement("div");
		yearWindow.id = "yearWindow";
		periodWindow.appendChild(yearWindow);
		var yearArrowUp = document.createElement("p");
		yearArrowUp.id = "yearArrowUp";
		yearArrowUp.innerHTML = '<i style="font-size:24px" class="fa">&#xf0d8;</i>';
		yearWindow.appendChild(yearArrowUp);
		var beforeSelectedYear = document.createElement("p");
		yearWindow.appendChild(beforeSelectedYear);
		var selectedYear = document.createElement("p");
		yearWindow.appendChild(selectedYear);
		var afterSelectedYear = document.createElement("p");
		yearWindow.appendChild(afterSelectedYear);
		var yearArrowDown = document.createElement("p");
		yearArrowDown.id = "yearArrowDown";
		yearArrowDown.innerHTML = '<i style="font-size:24px" class="fa">&#xf0d7;</i>';
		yearWindow.appendChild(yearArrowDown);

		var button = document.createElement("button");
		button.innerHTML = "Ok"
		periodWindow.appendChild(button);

		
		var date = new Date();
		var month = date.getMonth();
		var monthBefore;
		var monthAfter;
			if (month == 0){
				monthBefore = 11;
				monthAfter = month + 1;
			} else if(month == 11){
				monthBefore = month - 1;
				monthAfter = 0;
			} else {
				monthBefore = month - 1;
				monthAfter = month + 1;
			}
		var year = date.getFullYear();
		var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August",
		"September", "Octomber", "November", "December"];
		beforeSelectedMonth.innerHTML = monthArr[monthBefore];
		selectedMonth.innerHTML = monthArr[month];
		afterSelectedMonth.innerHTML = monthArr[monthAfter];
		beforeSelectedYear.innerHTML = year-1;
		selectedYear.innerHTML = year;
		afterSelectedYear.innerHTML = year+1;


		periodWindow.addEventListener("click", function(e){
		if(e.target.parentNode.id == "monthArrowUp"){
			if(month == 0){
				month = 11
			} else {
				month--;
			}
			if (month == 0){
				monthBefore = 11;
				monthAfter = month + 1;
			} else if(month == 11){
				monthBefore = month - 1;
				monthAfter = 0;
			} else {
				monthBefore = month - 1;
				monthAfter = month + 1;
			}
			beforeSelectedMonth.innerHTML = monthArr[monthBefore];
			selectedMonth.innerHTML = monthArr[month];
			afterSelectedMonth.innerHTML = monthArr[monthAfter];

		} else if(e.target.parentNode.id == "monthArrowDown"){
			if(month == 11){
				month = 0
			} else {
				month++;
			}
			if (month == 0){
				monthBefore = 11;
				monthAfter = month + 1;
			} else if(month == 11){
				monthBefore = month - 1;
				monthAfter = 0;
			} else {
				monthBefore = month - 1;
				monthAfter = month + 1;
			}
			beforeSelectedMonth.innerHTML = monthArr[monthBefore];
			selectedMonth.innerHTML = monthArr[month];
			afterSelectedMonth.innerHTML = monthArr[monthAfter];

		} else if (e.target.parentNode.id == "yearArrowUp"){
			year--;
			beforeSelectedYear.innerHTML = year-1;
			selectedYear.innerHTML = year;
			afterSelectedYear.innerHTML = year+1;
		} else if (e.target.parentNode.id == "yearArrowDown"){
			year ++;
			beforeSelectedYear.innerHTML = year-1;
			selectedYear.innerHTML = year;
			afterSelectedYear.innerHTML = year+1;
		}


	});

	button.addEventListener("click", function(){
		element[0].innerHTML = selectedMonth.innerHTML + ' ' + selectedYear.innerHTML;
		periodWindow.parentElement.removeChild(periodWindow);

	});

}