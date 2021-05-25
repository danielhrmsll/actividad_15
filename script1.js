const url = "https://jsonplaceholder.typicode.com/photos";
const list = document.getElementById('display');
const getPhotos = async () => {
	const response = await fetch(url);
	const photos = await response.json();
	return photos;
}
getPhotos()
	.then(photos => {
		photos.map(photo => {
			let li = document.createElement('li');
			li.innerHTML = `<a href="detalle.html?id=${photo.id}">
						   ${photo.id}</a> – ${photo.title}`;
			list.appendChild(li);
		})
	})
	.catch(error => {
		document.getElementById('error').innerHTML = error.message;
		console.log(error);
	})
	.finally(() => {
		document.getElementById('load').innerHTML = "Imagenes";
		let carga = document.getElementById('load');
		gif.remove();
	})
