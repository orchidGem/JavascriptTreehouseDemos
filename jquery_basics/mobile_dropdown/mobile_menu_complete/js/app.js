// Problem: It looks gross in smaller browser widths and small devices
// Solution: Hide the text links and swap them out with a better layout

// Create a select element and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

// Cycle over menu links
$("#menu a").each(function() {
	var $link = $(this),
		$option = $("<option></option>");
		
	$option.text($link.text());
	$option.val($link.attr("href"));
	$select.append($option);
});