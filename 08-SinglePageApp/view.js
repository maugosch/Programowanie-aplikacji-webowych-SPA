var view = {
		display: function (data) {
			// create new data view to be displayed
			var elem, text, i, wiersz, tbl, naglowek;
			this.clear();
            tbl = document.createElement("table");
            tbl.setAttribute('border', '1');
            
            naglowek = document.createElement("th");
            text = document.createTextNode("Code");
            naglowek.appendChild(text);
            tbl.appendChild(naglowek);
            
            naglowek = document.createElement("th");
            text = document.createTextNode("Name");
            naglowek.appendChild(text);
            tbl.appendChild(naglowek);
            
            naglowek = document.createElement("th");
            text = document.createTextNode("Rate");
            naglowek.appendChild(text);
            tbl.appendChild(naglowek);
            
			for (i = 0; i < data.length; i += 1) {
				elem = document.createElement("td");
                wiersz = document.createElement("tr");
                elem.appendChild()
				text = document.createTextNode(data[i].code + "/" + data[i].name + " " + data[i].rate);
                
				elem.appendChild(text);
                wiersz.appendChild(elem);
                tbl.appendChild(wiersz);
                
			}
            document.getElementById('dataview').appendChild(tbl);
		},
		clear: function () {
			// remove old data
			var dataView = document.getElementById('dataview');
			while (dataView.firstChild) {
				dataView.removeChild(dataView.firstChild);
			}
		},
		addCurrency: function () {
			var currency = {
					code: document.getElementById('code').value,
					rate: document.getElementById('rate').value,
					name: document.getElementById('name').value
                };
			controller.storeCurrency(currency);
		}
	};
