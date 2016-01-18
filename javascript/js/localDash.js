function getLocalGPS(){

var getgps =DeviceGetGPS();

obj=JSON.parse(getgps);

var tmpStr=" ";

	for(var key in obj){

	 tmpStr+="<li>"+key+":"+obj[key]+"</li>";

	}

$('#info').append("<tr><td>GPS</td><td><ol>"+tmpStr+"</ol></td></tr>");


}

function getToday(){

var getToday =DeviceGetToday();

$('#info').append("<tr><td>Date</td><td>"+getToday+"</td></tr>");

}

function getDeviceSoftwareInfo(){

var deviceSoftwareInfo =DeviceGetSoftwareInfo();

$('#info').append("<tr><td>Device-Software</td><td>"+deviceSoftwareInfo+"</td></tr>");

}

function getDeviceHardwareInfo(){

var deviceHardwareInfo =DeviceGetHardwareInfo();


obj=JSON.parse(deviceHardwareInfo);

var tmpStr=" ";

	for(var key in obj){
	
		 tmpStr+="<li>"+key+":"+obj[key]+"</li>";

	}


$('#info').append("<tr><td>Device-Hardware</td><td><ol>"+tmpStr+"</ol></td></tr>");


}

function getWIFI(){

var wifi =DeviceGetSsid();

obj=JSON.parse(wifi);

var tmpStr=" ";

	for(var key in obj){

	 tmpStr+="<li>"+key+":"+obj[key]+"</li>";

	}


$('#info').append("<tr><td>WIFI</td><td><ol>"+tmpStr+"</ol></td></tr>");

}

function getAccelerometer(){

var acc =DeviceGetAccelerometer();

obj=JSON.parse(acc);

var tmpStr=" ";

	for(var key in obj){

	 tmpStr+="<li>"+key+":"+obj[key]+"</li>";

	}


$('#info').append("<tr><td>Accelerometer</td><td><ol>"+tmpStr+"</ol></td></tr>");

}

function getGero(){

var gero =DeviceGetGero();

obj=JSON.parse(gero);

var tmpStr=" ";

	for(var key in obj){

	 tmpStr+="<li>"+key+":"+obj[key]+"</li>";

	}


$('#info').append("<tr><td>Gero</td><td><ol>"+tmpStr+"</ol></td></tr>");

}

/*
function getHTTPlog(){

var Log = DeviceGetLog();

$('#log').append(Log);


}


/*
var tmpStr;

for(var key in deviceHardwareInfo){
	
	if(deviceHardwareInfo.hasOwnProperty(key)){
	 tmpStr="<li>"+key+deviceHardwareInfo[key]+"</li>";
	}
}

$('#info').append("<tr><td>Device-Hardware</td><td><ol>"+tmpStr+"</ol></td></tr>");



$(document).ready(function(){
	var videoFilePath = DeviceGetVideo();

	$('#video video').append('<source src="'+videoFilePath+'" type="video/mp4">');
document.getElementById("GPS")alert('Hello world!');	var getgps =DeviceGetGPS();
	
	$('#demo').append(getgps);


<script>
function getLocalGPS(){
	
var getgps =DeviceGetGPS();
	
	$('#demo').append(getgps);

}

function DeviceGetGPS()
{
    return DeviceInterface.getGPS();
}

		
</script>

<button id="GPS" type="button" onclick="getLocalGPS()">Click Me!</button>


});*/



