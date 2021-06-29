jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 employees_names in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"attrition/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"attrition/test/integration/pages/App",
	"attrition/test/integration/pages/Browser",
	"attrition/test/integration/pages/Master",
	"attrition/test/integration/pages/Detail",
	"attrition/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "attrition.view."
	});

	sap.ui.require([
		"attrition/test/integration/MasterJourney",
		"attrition/test/integration/NavigationJourney",
		"attrition/test/integration/NotFoundJourney",
		"attrition/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});