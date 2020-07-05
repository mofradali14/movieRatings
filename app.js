let ID = 0;
let movies = [];

$('form').on('submit', function(e) {
	e.preventDefault();
	let title = $('#title').val();
	let rating = $('#rating').val();
	console.log(title, rating);
	$(`<li><b><em> ${title}</em></b> has a rating of <b>${rating}/10</b></li>`)
		.prepend('<button id="remove">Remove</button>')
		.appendTo('.movies');
	$('#title').val('');
	$('#rating').val('');
});

$('ul').on('click', '#remove', function() {
	$('#remove').parent().remove();
});

// class Movies {
// 	constructor(ID, title, rating) {
// 		this.ID = ID;
// 		this.title = title;
// 		this.rating = rating;
// 		this.data = {};
//     }
//     insertMovie() {

//     }
// 	sort() {}
// }
