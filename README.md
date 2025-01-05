# react-native-practice1
# react-native-practice1
{
	"Print Function": {
	  "prefix": "df",         // The prefix you want to type
	  "body": [
		"console.log($1)"  // The code to be inserted
	  ],
	  "description": "Insert print function" // Description shown in tooltip
	},
	"Create View Tag" : {
		"prefix" : "vv",
		"body": [
			"<View style={[styles.$1]}></View>"
		]
	},

	"styles." : {
		"prefix": "ss",
		"body" : [
			"styles.$1"
		]
	},
	"styles setup" : {
		"prefix": "st",
		"body" : [
			"style={[styles.$1]}"
		]
	},
	"Create Text Tag" : {
		"prefix": "tt",
		"body": [
			"<Text style={[styles.$1]}></Text>"
		]
	},
	"styles layout" : {
		"prefix": "ads",
		"body": [
			": {",
			"  $1",
			"}, "
		]
	},
	"add font layout" : {
		"prefix": "fonts",
		"body" : [
			"fontSize : $1,",
			"fontWeight : $2,",
			"color : $3",
		]
	}
  }
  