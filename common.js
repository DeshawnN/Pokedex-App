var CommonJS = {};

// formats the inputted text 
CommonJS.formatText = function(text) {
	if (text.indexOf("-") > -1) {
		text = text.replace(/-/g, " ");
		text = text.split(" ");
		text = text.map(function(val) {
			return val.slice(0,1).toUpperCase() + val.slice(1);
		});
		text = text.join(" ");
	} else {
		text = text.slice(0,1).toUpperCase() + text.slice(1);
	}
	return text;
};

CommonJS.sort = function(arr, key) {
	arr.sort(function(a, b) {
		return a[key] - b[key];
	});
};

CommonJS.displayButton = function(page, direction, id) {
	if (page === "show") {
		if (direction === "right") {
			if (id < 721) {
				return '<a class="ui right floated blue button" href="/pokemon/' + (id + 1) + '">Next</a>'
			}
		} else {
			if (id > 1 && id < 10000) {
				return '<a class="ui left floated blue button" href="/pokemon/' + (id - 1) + '">Prev</a>'
			}
		}
	}

}

module.exports = CommonJS;