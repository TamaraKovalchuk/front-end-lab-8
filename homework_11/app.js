var rootNode = document.getElementById("root");

function treeView(rootEl, structure, show) {
	if (Array.isArray(structure)) {
		var ul = document.createElement("ul");

		if (!show) {
			ul.style.display = "none";
		}
		rootEl.appendChild(ul);

		for (var i = 0; i < structure.length; i++) {
			var li = document.createElement("li");
			ul.appendChild(li);
			var div = document.createElement("div");
			div.setAttribute("class", "context");
			li.appendChild(div);

			if (structure[i].folder) {
				div.addEventListener("click", switchView);
				addImg(div, "folder", "folder");
				addText(div, structure[i].title);

				if (structure[i].children) {
					treeView(li, structure[i].children, false);
				} else {
					var empty = document.createElement("div");
					empty.setAttribute("class", "empty");
					li.appendChild(empty);
					empty.innerHTML = "Folder is empty";
					empty.style.display = "none";
				}
			} else {
				addImg(div, "insert_drive_file", "file");
				addText(div, structure[i].title);
			}
		}
	}
}

function addImg(parentNode, imgId, className) {
	var img = document.createElement("i");
	img.setAttribute("class", "material-icons " + className);
	img.innerHTML = imgId;
	parentNode.appendChild(img);
}

function addText(parentNode, content) {
	var text = document.createElement("span");
	text.innerHTML = content;
	parentNode.appendChild(text);
}

function switchView(event) {
	var cld = this.nextSibling;
	if (cld.style.display === "none") {
		cld.style.display = "block";
		this.childNodes[0].innerHTML = "folder_open";
	} else {
		cld.style.display = "none";
		this.childNodes[0].innerHTML = "folder";
	}
}

var div = document.createElement("div");
treeView(div, structure, true);

rootNode.appendChild(div);
