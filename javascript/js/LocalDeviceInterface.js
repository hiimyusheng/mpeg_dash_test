/*
public class JsInterface{

	public JsInterface(){

	}

	@JavascriptInterface
	public String DeviceGetGPS(){
		 return DeviceInterface.getGPS();
	}
}
*/

function DeviceGetVideo()
{
    // return video file path, e.g. 'source/mov_bbb.mp4';
    //return DeviceInterface.getVideo();
    return 'source/mov_bbb.mp4';
}

function DeviceGetGPS()
{
    return DeviceInterface.getGPS();
}

function DeviceGetToday()
{
    return DeviceInterface.getToday();
}

function DeviceGetSoftwareInfo() 
{
    return DeviceInterface.getDeviceSoftwareInfo();
}

function DeviceGetHardwareInfo() 
{
    return DeviceInterface.getDeviceHardwareInfo();
}

function DeviceGetGero()
{
    return DeviceInterface.getGero();
}
function DeviceGetAccelerometer()
{
    return DeviceInterface.getAccelerometer();
}
function DeviceGetSsid()
{
    return DeviceInterface.getCurrentSsid();
}
/*
function DeviceGetLog()
{
    return DeviceInterface.getHTTPlog();
}
*/


// Return 1 = wifi , 2 = 3g , 0 = disconnection
function DeviceGetNetWorkStatus()
{
	return DeviceInterface.getNetWorkStatus();
}

// Return ModifyTime or "false"
function DeviceInsert(obj)
{
	return DeviceInterface.dbInsert(obj);
}

// Return JsonObj or "false"
function DeviceQuery(whereObj)
{
	return DeviceInterface.dbQuery(whereObj);
}

// Return "true" or "false"
function DeviceDelete(whereObj)
{
	return DeviceInterface.dbDelete(whereObj);
}



// Return ModifyTime or "false"
function DeviceUpdate(obj,whereObj)
{
	return DeviceInterface.dbUpdate(obj,whereObj)
}



// Return ModifyTime or "false"
function DeviceUpdate(obj)
{
	return DeviceInterface.dbUpdate(obj);
}

// No Return
function DeviceBrowser(obj)
{
	DeviceInterface.newBrowser(obj);	
}

// No Return
function DeviceCallQRCode()
{
	DeviceInterface.callQR();
}

function DeviceGetQRCode()
{
//	url = DeviceInterface.getQRCode();
//	alert(url);
	return DeviceInterface.getQRCode();
}

function DeviceGetContacts()
{
	return DeviceInterface.getContacts();
}

function DeviceSetCompareURL(url)
{
    try {
        DeviceInterface.setCompareURL(url);
    } catch(e) {
        console.error(e);
    }
}

function DeviceSetRedirectURL(url)
{
    try {
        DeviceInterface.setRedirectURL(url);
    } catch(e) {
        console.error(e);
    }
}

function DeviceGetLocation()
{
    var location;
    try {
        location = DeviceInterface.getLocation();
    } catch(e) {
        console.log(e);
    }
    return location;
}

//**************************************************************//

// *****   Device Call JS Begin ..  **** //
function setNetWorkConf()
{
	var status = DeviceGetNetWorkStatus();
	console.debug('setNetWorkConf:' + status + ' [' + (typeof status) + ']');
	switch(status) {
        case 0:
			$(document).trigger('offline');
			break;
		case 1:
		case 2:
			$(document).trigger('online');
			break;
		default:
			break;
	}
}

function middleQRCode()
{
    try {
        var text = DeviceGetQRCode();
        if (window.garden.device.qrcode.event) {
            window.garden.device.qrcode.event(text);
        }
        console.debug('middleQRCode text:' + text);
    } catch(e) {
        alert(e);
    }
}

// **** Device Call JS End .. **** //

