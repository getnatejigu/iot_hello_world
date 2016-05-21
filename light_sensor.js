
var accessToken = "92d261ccb8baa27e84f48a9c77306de752111a39";
var deviceID = "240028000447343138333038";
var url = "https://api.spark.io/v1/devices/" + deviceID + "/volts";

function callback(data, status) {
	if(status == "success") {
		volts = parseFloat(data.result);
		volts = volts.toFixed(2);
		setTimeout(getReading, 10000);
		g.refresh(volts);
		
	} else {
		alert("There is a problem");
	}
}

function getReading() {
	$.get(url, {access_token: accessToken}, callback);
}


var g = new JustGage({
					 id: "gauge",
					value: 0.0,
			        min: 0.0,
					max: 3.3,
					title: "Volts",
					label: "volts",
					decimals: 2
					});
getReading();

//hello
