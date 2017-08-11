var express 	 = require("express"),
		app 			 = express(),
		bodyParser = require("body-parser"),
		CommonJS 	 = require("./common"),
		howler 		 = require("howler");

require("dotenv").config();

var indexRoutes = require("./routes/index"),
		pokemonRoutes = require("./routes/pokemon");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

// locals
app.locals.CommonJS = CommonJS;

app.use("/", indexRoutes);
app.use("/pokemon", pokemonRoutes);

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("App running at http://" + process.env.IP + ":" + process.env.PORT);
});