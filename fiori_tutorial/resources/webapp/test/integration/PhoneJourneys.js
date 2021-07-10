jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"dashboard/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"dashboard/test/integration/pages/App",
	"dashboard/test/integration/pages/Browser",
	"dashboard/test/integration/pages/Master",
	"dashboard/test/integration/pages/Detail",
	"dashboard/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "dashboard.view."
	});

	sap.ui.require([
		"dashboard/test/integration/NavigationJourneyPhone",
		"dashboard/test/integration/NotFoundJourneyPhone",
		"dashboard/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});