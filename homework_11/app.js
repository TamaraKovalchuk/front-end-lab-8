var rootNode = document.getElementById("root");

var master = document.createElement("ul");
rootNode.appendChild(master);

function createTree(el, parent) {
  for (var i = 0; i < el.length; i++) {
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var p = document.createElement("p");
    var img = document.createElement("i");
    img.className = "material-icons";

    if (el[i].folder) {
      img.innerHTML = "folder";
    } else {
      img.innerHTML = "insert_drive_file";
      p.className = "file";
    }

    var span = document.createElement("span");
    span.innerHTML = el[i].title;
    p.appendChild(img);
    p.appendChild(span);
    li.appendChild(p);
    parent.appendChild(li);
    p.addEventListener("click", toggle);

    if (el[i].children) {
      li.appendChild(ul);
      if (el[i].folder) {
        img.innerHTML = "folder";
      } else {
        img.innerHTML = "insert_drive_file";
      }

      ul.style.display = "none";
      createTree(el[i].children, ul);
    } else if (el[i].folder && !el[i].children) {
      parent.appendChild(ul);

      var liEmpty = document.createElement("li");
      liEmpty.innerHTML = "Folder is empty";
      li.appendChild(liEmpty);
      liEmpty.style.display = "none";
    }
  }
}
function toggle(e) {
  if (this.nextElementSibling.style.display === "none") {
    this.nextElementSibling.style.display = "block";
    this.children[0].innerHTML = "folder_open";
  } else {
    this.nextElementSibling.style.display = "none";
    this.children[0].innerHTML = "folder";
  }
}

createTree(structure, master);

rootNode.appendChild(master);