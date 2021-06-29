jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 employees in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"employeeattrition/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"employeeattrition/test/integration/pages/App",
	"employeeattrition/test/integration/pages/Browser",
	"employeeattrition/test/integration/pages/Master",
	"employeeattrition/test/integration/pages/Detail",
	"employeeattrition/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "employeeattrition.view."
	});

	sap.ui.require([
		"employeeattrition/test/integration/MasterJourney",
		"employeeattrition/test/integration/NavigationJourney",
		"employeeattrition/test/integration/NotFoundJourney",
		"employeeattrition/test/integration/BusyJourney",
		"employeeattrition/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});