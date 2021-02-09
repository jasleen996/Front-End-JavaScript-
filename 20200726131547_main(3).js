let studentDetails = [];

function saveStudentDetails() {
  let name = document.getElementById("name").value;
  let country = document.getElementById("country").value;
  let age = document.getElementById("age").value;
  let obj = { name, country, age };
  studentDetails.push(obj);
  console.log(studentDetails);

  addRow();
}

function deleteDetails(index) {
  let arr = studentDetails;
  arr.splice(index, 1);
  addRow();
}

function editDetails(index) {
  addRow();
  let nameTd = document.getElementById(`nameTd${index}`);
  let countryTd = document.getElementById(`countryTd${index}`);
  let ageTd = document.getElementById(`ageTd${index}`);
  nameTd.innerHTML = `<input id="name${index}" class="detail-inp" value=${studentDetails[index].name} />`;
  countryTd.innerHTML = `<input id="country${index}" class="detail-inp" value=${studentDetails[index].country} />`;
  ageTd.innerHTML = `<input id="age${index}" class="detail-inp" value=${studentDetails[index].age} />`;
}

function saveDetails(index) {
  let name = document.getElementById(`name${index}`).value;
  let country = document.getElementById(`country${index}`).value;
  let age = document.getElementById(`age${index}`).value;

  let arr = studentDetails;
  arr[index].name = name;
  arr[index].country = country;
  arr[index].age = age;
  addRow();
}

function addRow() {
  let ele = "";
  let table = document.getElementById("student-table");
  table.innerHTML = "";
  ele += `<tr>
      <th class="cols">Name</th>
      <th class="cols">Country</th>
      <th class="cols">Age</th>
      <th class="cols"></th>
    </tr>`;
  for (let i = 0; i < studentDetails.length; i++) {
    ele += `<tr>
      <td id="nameTd${i}" class="row-cols">${studentDetails[i].name}</td>
      <td id="countryTd${i}" class="row-cols">${studentDetails[i].country}</td>
      <td id="ageTd${i}" class="row-cols">${studentDetails[i].age}</td>
      <td class="row-cols">
        <button onclick="editDetails(${i})" class="btn">Edit</button>
        <button onclick="saveDetails(${i})" class="btn">Save</button>
        <button onclick="deleteDetails(${i})" class="btn">Delete</button>
      </td>
    </tr>`;
  }
  ele += `<tr>
      <td class="row-cols"><input id="name" class="detail-inp" /></td>
      <td class="row-cols"><input id="country" class="detail-inp" /></td>
      <td class="row-cols">
        <input id="age" type="number" class="detail-inp" />
      </td>
      <td class="row-cols">
        <button onclick="saveStudentDetails()" id="addRow" class="btn">
          Add Row
        </button>
      </td>
    </tr>`;
  table.innerHTML = ele;
}
