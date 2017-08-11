var cryButton = document.getElementById("cry-button") || null;

if (cryButton && cryButton !== null) {
	var id = cryButton.getAttribute("data-cry");
	cryButton.addEventListener("click", function(e) {
		e.stopPropagation();
		if (!sound.playing()) {
			playCry(id);
		}
	});

	var sound = new Howl({
		src: ["/sounds/cries/" + id + ".ogg"],
		volume: 0.1,
	});
	function playCry() {
		sound.play();
	}
}





