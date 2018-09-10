const {
	NetworkInformation,
	NetworkConnectivityLevel
} = require('@nodert-win10/windows.networking.connectivity');

async function checkInternet() {
	try {
		let connection = NetworkInformation.getInternetConnectionProfile();
		let status = (connection != null && connection.getNetworkConnectivityLevel() === NetworkConnectivityLevel.internetAccess);
		return status;
	} catch (e) {
		console.error(e);
		return false;
	}
}

module.exports = checkInternet;
