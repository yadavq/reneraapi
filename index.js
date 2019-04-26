button = document.getElementById("btn");

button.addEventListener("click", function(){
	console.log("data");
	var request = new XMLHttpRequest();
	request.open('GET','http://www.renerahomes.com/landlord_all.php');
	request.onload = function(){
	var landlordData = JSON.parse(request.responseText);
	show(landlordData);
	console.log("data");
	};
	request.send();
});

function landlordInfo(information){
		return `
		<div class = "landlordName">
		<img class="landlord-photo" src="photo.jpg">
			<h3 class="landlord-information">${information.name}</h3>
			<h5 class="landlord-sides">Location: ${information.location}</h5>
			<h5 class="landlord-sides">Address: ${information.address}</h5>
			<h5 class="landlord-sides">Type: ${information.type}<span>    ||    Preferances: ${information.preferance}</span></h5>
			<h5 class="landlord-sides">Number Of Rooms: ${information.rooms}</h5>
			<h3 class="landlord-price">Rs.${information.minprice}-${information.maxprice}</h3>
		</div>
	`
	}
	
	function show(data){
	document.getElementById("landlord").innerHTML = `
	<h1 class = "landlord-title">Renera Homes Landlords</h1>
	<p class = "footer">${data.length} results</p>
	<p>${data.map(landlordInfo).join('')}</p>

	`;
}

