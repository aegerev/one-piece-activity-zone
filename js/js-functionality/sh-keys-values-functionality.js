function displayInfo(item) {
	const words = item.split(", ").map((item) => item.split(": "));
	for(let i = 0; i < words.length; i++) {
		for(let j = 0; j < words[i].length; j++)
			if(j % 2 !== 0) {
				words[i][j] = `<span class="paragraph">${words[i][j]}</span>`;
			}
	}
	return `<p>${words.map((item) => item.join(": ")).join(", ")}</p>`
}

document.addEventListener('DOMContentLoaded', () => {
	const objectInfoContainer = document.getElementById('objectInfo');
	const infoText = typeof getObjectInformation === "undefined" ? "<p class=\"paragraph\">The function 'getObjectInformation' is not defined yet.</p>" : (typeof person === 'undefined' ? "<p class=\"paragraph\">The object 'person' is not defined yet.</p>" : getObjectInformation(person).map(info => displayInfo(info)).join(''));
	objectInfoContainer.innerHTML = infoText;
});