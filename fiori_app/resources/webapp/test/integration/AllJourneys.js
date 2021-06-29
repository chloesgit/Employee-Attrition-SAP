jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 employees in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"employeefiori/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"employeefiori/test/integration/pages/App",
	"employeefiori/test/integration/pages/Browser",
	"employeefiori/test/integration/pages/Master",
	"employeefiori/test/integration/pages/Detail",
	"employeefiori/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "employeefiori.view."
	});

	sap.ui.require([
		"employeefiori/test/integration/MasterJourney",
		"employeefiori/test/integration/NavigationJourney",
		"employeefiori/test/integration/NotFoundJourney",
		"employeefiori/test/integration/BusyJourney",
		"employeefiori/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});