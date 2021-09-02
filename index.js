const {
	NetworkInformation,
	NetworkConnectivityLevel
} = require('@nodert-win10-rs4/windows.networking.connectivity');

async function checkInternet() {
	try {
        checkInternet.connection = NetworkInformation.getInternetConnectionProfile();
		return !!(checkInternet.connection && checkInternet.connection.getNetworkConnectivityLevel && checkInternet.connection.getNetworkConnectivityLevel() === NetworkConnectivityLevel.internetAccess);

	} catch (e) {
		console.error(e);
		return false;
	}
}

module.exports = checkInternet;
