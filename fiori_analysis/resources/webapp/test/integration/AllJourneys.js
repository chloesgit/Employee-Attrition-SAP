jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 employeesanalysis in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"employeesdashboard/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"employeesdashboard/test/integration/pages/App",
	"employeesdashboard/test/integration/pages/Browser",
	"employeesdashboard/test/integration/pages/Master",
	"employeesdashboard/test/integration/pages/Detail",
	"employeesdashboard/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "employeesdashboard.view."
	});

	sap.ui.require([
		"employeesdashboard/test/integration/MasterJourney",
		"employeesdashboard/test/integration/NavigationJourney",
		"employeesdashboard/test/integration/NotFoundJourney",
		"employeesdashboard/test/integration/BusyJourney",
		"employeesdashboard/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});