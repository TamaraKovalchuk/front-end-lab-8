window.onhashchange = replaceDOM
function replaceDOM() {
	var parent = document.getElementById('root');
	var childNodes = parent.childNodes;
	var oldNode;
	for (var i=0; i < childNodes.length; i++)
	{
		if (childNodes[i].nodeType === Node.ELEMENT_NODE)
		{
			oldNode = childNodes[i];
			break;
		}
	
	}
		if (!oldNode) {
			parent.appendChild(createThumbnailsPage(tanks));
			return;
		}
	if (location.hash === '')
	{
		parent.replaceChild(createThumbnailsPage(tanks), oldNode);
	}
	else{
		for (var i = 0; i < tanks.length; i++) {
			if ('#'+tanks[i].model===location.hash) {
			parent.replaceChild(creatTankDetailsPage(tanks[i]), oldNode);
				return;
			}
		}
		}
	}
replaceDOM();

function createThumbnailsPage(tanksData) {
	var thumbnails = document.createElement("div");
	thumbnails.setAttribute("class", "thumbnails");

	var title = document.createElement("h1");
	title.innerHTML = 'Most popular tanks';
	var tankPreview = document.createElement("div");
	tankPreview.setAttribute("class", "tank_preview");
	thumbnails.appendChild(title);
	thumbnails.appendChild(tankPreview);

	for (var i = 0; i < tanksData.length; i++) {
		tankPreview.innerHTML += 
		'<a href="#'+tanksData[i].model+'" title="Click to details">'+
		  	'<div class="hover">'+ 
  				'<div class="model">'+ 
  					'<img src="'+tanksData[i].preview+'">'+
  				'</div>'+ 
  				'<div class="info">'+ 
  					'<img src="'+tanksData[i].country_image+'" title="'+tanksData[i].country+'">'+ 
  					'<div class="level">'+tanksData[i].level+'</div>'+
  					'<div  class="name" title="'+tanksData[i].model+'">'+tanksData[i].model+'</div>'+
  				'</div>'+ 
  			'</div>'+ 
  		'</a>';
	}

	return thumbnails;
}

function creatTankDetailsPage(tankData) {
	var tankDetails = document.createElement("div");
	tankDetails.setAttribute("class", "tank-details");

	var infoTanks = document.createElement("div");
	infoTanks.setAttribute("class", "info_tanks");
	infoTanks.innerHTML = '<img src=" '+tankData.country_image+'" title="'+tankData.country+'">' +
		'<div class="name1">'+tankData.model+'</div>'+	
		'<div class="level1">(level '+tankData.level+')</div>';
	
	var modelDetais = document.createElement("div");
	modelDetais.setAttribute("class", "model_detais");
	
	var modelInFullSize = document.createElement("div");
	modelInFullSize.setAttribute("class", "model_in_full_size");
	modelInFullSize.innerHTML = '<h2>Previev</h2>' +
				'<img src="'+tankData.preview+'">'+
				'<a href="#"><h5>Back to list view</h5></a>';
	
	var infoDetais = document.createElement("div");
	infoDetais.setAttribute("class", "info_detais");
	var title = document.createElement("h2");
	title.innerHTML = 'Characteristic';
	var table = document.createElement("table");
	for (var prop in tankData.details) {

		table.innerHTML += '<tr>'+
            		'<td>'+prop.replace(/_/g , " ")+'</td>'+
            		'<td>'+tankData.details[prop]+'</td>'+
        			'</tr>';
	}

	tankDetails.appendChild(infoTanks);
	tankDetails.appendChild(modelDetais);
	modelDetais.appendChild(modelInFullSize);
	modelDetais.appendChild(infoDetais);
	infoDetais.appendChild(title);
	infoDetais.appendChild(table);
	return tankDetails;
}