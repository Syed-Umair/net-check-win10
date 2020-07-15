const {
	NetworkInformation,
	NetworkConnectivityLevel
} = require('@nodert-win10-rs4/windows.networking.connectivity');

async function checkInternet() {
	try {
        if (!checkInternet.connection) {
            checkInternet.connection = NetworkInformation.getInternetConnectionProfile();
        }
		let status = (checkInternet.connection && checkInternet.connection.getNetworkConnectivityLevel && checkInternet.connection.getNetworkConnectivityLevel() === NetworkConnectivityLevel.internetAccess);
		return status;
	} catch (e) {
		console.error(e);
		return false;
	}
}

module.exports = checkInternet;
