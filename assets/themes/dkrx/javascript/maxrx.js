jQuery(function($) {
	var default_instructions = "Enter the amount of reps and weight you've completed";
	var rep_coefficients = {
	  1	: 1.00,
	  2	: 0.943,
	  3	: 0.906,
	  4	: 0.881,
	  5	: 0.856,
	  6	: 0.831,
	  7	: 0.807,
	  8	: 0.786,
	  9	: 0.765,
	  10 : 0.744,
	  11 : 0.723,
	  12 : 0.703,
	  13 : 0.688,
	  14 : 0.675,
	  15 : 0.662,
	  16 : 0.650,
	  17 : 0.638,
	  18 : 0.627,
	  19 : 0.616,
	  20 : 0.606	
	};
	
	// *** Event Handlers
	$("#input").on("input", "input", function() {
		var intRegex = /^\d+$/;
		var noZeroIntRegex = /^[1-9]\d*$/;
		var reps = $("#reps").val();
		var weight = $("#weight").val();
		if (reps && weight) {
		 	if (noZeroIntRegex.test(reps) && noZeroIntRegex.test(weight) && reps < 21) {
				$("#instructions").hide();
				var max = Math.round(weight / rep_coefficients[reps]);
				$("#max").text(max);
				$("#max_box").show();
				rows = repsByWeight(max);
				$("#reps_by_weight").html("<table><tr><th>Reps</th><th>Weight</th><th>%1RM</th>" + rows.join("") + "</table>");
				$("#reps_by_weight").slideDown("slow");
				$("#g_plus_one").show("slow");
			} else if (intRegex.test(reps) && (reps < 1 || reps > 20)) {
				showInstructions("Reps must be between 1 and 20");
			} else if (intRegex.test(weight) && weight < 1) {
				showInstructions("Weight must be greater than 0");
			} else {
				showInstructions("Inputs must be numbers");
			}
		} else {
			showInstructions(default_instructions);
		}
	});
	
	function showInstructions(html) {
		$("#max_box").hide();
		$("#reps_by_weight").hide();
		$("#instructions").html(html);
		$("#instructions").show();
		$("#g_plus_one").hide();
	}
	
	function repsByWeight(max) {
		var schemes = [3,5,8,10,12,15,20];
		
	  var result = $.map(schemes, function(reps) {
			p_max = rep_coefficients[reps];
			return "<tr>" + 
								"<td>x"+ reps + "</td>" +
								"<td>"+ Math.round(p_max*max) + "</td>" +
								"<td>"+ Math.round(p_max*100) + "%</td>" + 
							"<tr>";
		});
		return result; 
	}
	
	// *** Initialize *** 
	showInstructions(default_instructions);
});
