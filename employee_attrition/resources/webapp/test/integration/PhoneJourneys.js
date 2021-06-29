jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"employeeattrition/test/integration/NavigationJourneyPhone",
		"employeeattrition/test/integration/NotFoundJourneyPhone",
		"employeeattrition/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});