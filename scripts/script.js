$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExp = new RegExp(searchField, "i");
	$.getJSON('data/info.json', function(data) {
		var content = '<ul class="searchresults">';
		$.each(data, function(key, val) {
			if((val.title.search(myExp) != -1) || 
					(val.storyline.search(myExp) != -1)) {
				content += '<li>';
				content += '<h2>' + val.title + '</h2>';
				content += '<img src="images/' + val.poster + '.jpg" alt="' + val.title 
					+ '" />';
				content += '<p>' + val.storyline + '</p>';
				content += '</li>';
			}
		});
		content += '</ul>';
		$('#results').html(content);
	}); //getJSON
});
