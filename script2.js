const url = new URL(window.location.href);
const param = url.searchParams;
const id = param.get('id');
const detail = `https://jsonplaceholder.typicode.com/photos/${id}`;
fetch(detail)
.then(response => response.json())
.then(photo => {
	document.getElementById('back').innerHTML = "Back to index.";
	document.getElementById('title').innerHTML = photo.id + " – " + photo.title;
	document.getElementById('id').innerHTML = photo.thumbnailUrl;
	document.getElementById('image').src = photo.url;
})
