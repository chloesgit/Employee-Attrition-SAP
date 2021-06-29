jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"attrition/test/integration/NavigationJourneyPhone",
		"attrition/test/integration/NotFoundJourneyPhone",
		"attrition/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});