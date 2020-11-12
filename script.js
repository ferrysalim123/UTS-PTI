
var index;
var userDataArray = [];

function init() {
	document.getElementById('table').getElementsByTagName('tbody')[0].innerHTML = "";
	if (localStorage.userdata){
		userDataArray = JSON.parse(localStorage.userdata);
		for (var i = 0; i < userDataArray.length; i++) {
			var NIM = userDataArray[i].NIM;
			var nama = userDataArray[i].nama;
			var alamat = userDataArray[i].alamat;
			prepareTableCell(i, NIM, nama, alamat);
			console.log(i);
        }
    }
}

function onFormSubmit() {
	if (selectedIndex === -1) {
		if (document.getElementById("NIM").value.length == 0 || document.getElementById("nama").value == 0 || document.getElementById("alamat").value == 0) {
			openUnablemodal();
		}
		else {
			var NIM = document.getElementById("NIM").value;
			var nama = document.getElementById("nama").value;
			var alamat = document.getElementById("alamat").value;

			var userObj = { NIM: NIM, nama: nama, alamat: alamat };
			if (selectedIndex === -1) {
				userDataArray.push(userObj);
			}

			localStorage.userdata = JSON.stringify(userDataArray);
			init();
			openAddmodal();

			document.getElementById("NIM").value = "";
			document.getElementById("nama").value = "";
			document.getElementById("alamat").value = "";
		}
	} else {
		var NIM = document.getElementById("editNIM").value;
		var nama = document.getElementById("editnama").value;
		var alamat = document.getElementById("editalamat").value;
		var userObj = { NIM: NIM, nama: nama, alamat: alamat };
		console.log(selectedIndex);
		userDataArray.splice(selectedIndex, 1, userObj);

		localStorage.userdata = JSON.stringify(userDataArray);
		init();	
		openUpdatemodal();
    }
	
	
}

function prepareTableCell(index,NIM,nama,alamat) {
	var table = document.getElementById('tableRows');
	var row = table.insertRow(index);
	var NIMCell = row.insertCell(0);
	var namaCell = row.insertCell(1);
	var alamatCell = row.insertCell(2);
	var ButtonCell = row.insertCell(3);

	NIMCell.innerHTML =  '<hr>' + NIM ;
	namaCell.innerHTML = '<hr>' + nama;
	alamatCell.innerHTML = '<hr>' +alamat;
	ButtonCell.innerHTML = '<hr><td><button id="edit-btn" class="button-edit" onclick="openmodal(' + index + ')" style="width:80px; background-color:limegreen; border-radius: 5px 5px 5px 5px;">Edit</button></td><td><button id="delete-btn" class="button-delete" onclick="deleteTableRow(' + index +')" style="width:80px; background-color:red; margin-left:10px; color:white; border-radius: 5px 5px 5px 5px;">Delete</button></td>';
	ButtonCell.colSpan = 2;
}

function deleteTableRow(index) {
	userDataArray.splice(index, 1);
	localStorage.userdata = JSON.stringify(userDataArray);
	init();
	openDeletemodal();
}

var selectedIndex = -1;

var modal = document.getElementById("modal");
var editbtn = document.getElementById("edit-btn");
var closebtn = document.getElementById("close-btn")[0];
window.addEventListener('click', outsideClickmodal);

function openmodal(index) {
	selectedIndex = index;
	modal.style.display = 'block';
	var userObj = userDataArray[index];
	document.getElementById("editNIM").value = userObj.NIM;
	document.getElementById("editnama").value = userObj.nama;
	document.getElementById("editalamat").value = userObj.alamat;
}

function closemodal() {
	selectedIndex = -1;
	modal.style.display = 'none';
}

function outsideClickmodal(e) {
	if (e.target == modal) {
		modal.style.display = 'none';
		selectedIndex = -1;
    }
}

var Addmodal = document.getElementById("Addmodal");
window.addEventListener('click', outsideClickAddmodal);

function openAddmodal() {
	Addmodal.style.display = 'block';
}

function closeAddmodal() {
	Addmodal.style.display = 'none';
}

function outsideClickAddmodal(e) {
	if (e.target == Addmodal) {
		Addmodal.style.display = 'none';
	}
}

var Unablemodal = document.getElementById("Unablemodal");
window.addEventListener('click', outsideClickUnablemodal);

function openUnablemodal() {
	Unablemodal.style.display = 'block';
}

function closeUnablemodal() {
	Unablemodal.style.display = 'none';
}

function outsideClickUnablemodal(e) {
	if (e.target == Unablemodal) {
		Unablemodal.style.display = 'none';
	}
}

var Deletemodal = document.getElementById("Deletemodal");
window.addEventListener('click', outsideClickDeletemodal);

function openDeletemodal() {
	Deletemodal.style.display = 'block';
}

function closeDeletemodal() {
	Deletemodal.style.display = 'none';
}

function outsideClickDeletemodal(e) {
	if (e.target == Deletemodal) {
		Deletemodal.style.display = 'none';
	}
}

var Updatemodal = document.getElementById("Updatemodal");
window.addEventListener('click', outsideClickUpdatemodal);


function openUpdatemodal() {
	Updatemodal.style.display = 'block';
}

function closeUpdatemodal() {
	Updatemodal.style.display = 'none';
}

function outsideClickUpdatemodal(e) {
	if (e.target == Updatemodal) {
		Updatemodal.style.display = 'none';
	}
}
