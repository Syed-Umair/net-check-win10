const {
	NetworkInformation,
	NetworkConnectivityLevel
} = require('@nodert-win10-au/windows.networking.connectivity');

async function checkInternet() {
	try {
        if (!checkInternet.connection) {
            console.warn('Building Ref...');
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
