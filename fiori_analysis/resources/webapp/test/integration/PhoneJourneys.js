jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"employeesdashboard/test/integration/NavigationJourneyPhone",
		"employeesdashboard/test/integration/NotFoundJourneyPhone",
		"employeesdashboard/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});