
var accessToken = "92d261ccb8baa27e84f48a9c77306de752111a39";
var deviceID = "240028000447343138333038";
var url = "https://api.spark.io/v1/devices/" + deviceID + "/volts";
var url1 = "https://api.spark.io/v1/devices/" + deviceID + "/relaycontrol";

var g = new JustGage({
					 id: "gauge",
					value: 0.0,
			        min: 0.0,
					max: 3.3,
					title: "Volts",
					label: "volts",
					decimals: 2
					});

function toggleState(item, relayNumber){
	function setRelay(message){
		$.post(url1, {params: message, access_token: accessToken}, callback);
	}  
	function callback(data, status){
		if (data.return_value == 1) {
			if (item.className == "on") {
				item.className="off";
			}
			else {
				item.className="on";
			}
		}
		else
		{
			alert("Could not Connect to Photon");
		}
	}
   if(item.className == "on") {
	  setRelay(relayNumber + "0");
   } else {
	  setRelay(relayNumber + "1");
   }
}

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


getReading();

//hello
