const TagsData = [
		{
			tag:'all',
			bgColor:'lightblue',
			fontColor:'white'
		},
		{
			tag:'javascript',
			bgColor:'yellow',
			fontColor:'black'
		},
		{
			tag:'django',
			bgColor:'green',
			fontColor:'white'
		},
		{
			tag:'gatsby',
			bgColor:'purple',
			fontColor:'white'
		},
		{
			tag:'pug',
			bgColor:'brown',
			fontColor:'white'
		},
		{
			tag:'html',
			bgColor:'lightblue',
			fontColor:'white'
		}
] 


// I have used module.exports instead of  export default cause the gatsby-node.js can't import the data exported using export default 
// as the gatsby-node.js is a node file
module.exports = TagsData