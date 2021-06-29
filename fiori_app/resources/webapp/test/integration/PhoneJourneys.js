jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"employeefiori/test/integration/NavigationJourneyPhone",
		"employeefiori/test/integration/NotFoundJourneyPhone",
		"employeefiori/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});