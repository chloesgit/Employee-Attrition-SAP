sap.ui.define([
		"employeesdashboard/model/GroupSortState",
		"sap/ui/model/json/JSONModel"
	], function (GroupSortState, JSONModel) {
	"use strict";

	QUnit.module("GroupSortState - grouping and sorting", {
		beforeEach: function () {
			this.oModel = new JSONModel({});
			// System under test
			this.oGroupSortState = new GroupSortState(this.oModel, function() {});
		}
	});

	QUnit.test("Should always return a sorter when sorting", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.sort("Attrition").length, 1, "The sorting by Attrition returned a sorter");
		assert.strictEqual(this.oGroupSortState.sort("GivenName").length, 1, "The sorting by GivenName returned a sorter");
	});

	QUnit.test("Should return a grouper when grouping", function (assert) {
		// Act + Assert
		assert.strictEqual(this.oGroupSortState.group("Attrition").length, 1, "The group by Attrition returned a sorter");
		assert.strictEqual(this.oGroupSortState.group("None").length, 0, "The sorting by None returned no sorter");
	});


	QUnit.test("Should set the sorting to Attrition if the user groupes by Attrition", function (assert) {
		// Act + Assert
		this.oGroupSortState.group("Attrition");
		assert.strictEqual(this.oModel.getProperty("/sortBy"), "Attrition", "The sorting is the same as the grouping");
	});

	QUnit.test("Should set the grouping to None if the user sorts by GivenName and there was a grouping before", function (assert) {
		// Arrange
		this.oModel.setProperty("/groupBy", "Attrition");

		this.oGroupSortState.sort("GivenName");

		// Assert
		assert.strictEqual(this.oModel.getProperty("/groupBy"), "None", "The grouping got reset");
	});
});