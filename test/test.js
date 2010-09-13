$(document).ready(function(){

	test("$.xpath", function() {
		var xpath = $.xpath("//h1");
		ok(xpath.length == 1, "finds a single element");
		ok(xpath.is("h1"), "finds a header");
	});

	test("xpath of jquery objects", function() {
		expect(3);
		var xpath = $("#qunit-fixture").xpath(".//input");
		ok(xpath.length == 2, "finds two elements");
		xpath.each(function () {
			ok($(this).is("input"), "finds inputs");
		});
	});
	
	test("xpath of multiple elements", function() {
		expect(3);
		var xpath = $("#qunit-fixture input").xpath(".");
		ok(xpath.length == 2, "finds two elements");
		xpath.each(function () {
			ok($(this).is("input"), "finds inputs");
		});
	})
	
	test("README example", function() {
		ok($.xpath("//input[@id=//label[contains(., 'First Name')]/@for]").is('#first_name'), "finds an input by label");
	})
});
