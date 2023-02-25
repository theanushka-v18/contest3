const addbtn = document.getElementById("addbtn");
let tbody = document.getElementById("tbody");

let tableData = [];
let id = 0;

function createSaveBtn(id, save, nameElement, rollElement, subjectElement, marksElement, markedByElement) {
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    save.appendChild(saveBtn);
    editId = id;

    let obj = {};
    nameElement.addEventListener("input", function() {
        obj.student_name = nameElement.value;
    })
    rollElement.addEventListener("input", function() {
        obj.student_roll = rollElement.value;
    })
    subjectElement.addEventListener("input", function() {
        obj.subject = subjectElement.value;
    })
    marksElement.addEventListener("input", function() {
        obj.marks = marksElement.value;
    })
    markedByElement.addEventListener("input", function() {
        obj.markedBy = markedByElement.value;
    })
    saveBtn.addEventListener("click", function() {

        nameElement.addEventListener("change", function() {
            obj.student_name = nameElement.value;
        })
        rollElement.addEventListener("change", function() {
            obj.student_roll = rollElement.value;
        })
        subjectElement.addEventListener("change", function() {
            obj.subject = subjectElement.value;
        })
        marksElement.addEventListener("change", function() {
            obj.marks = marksElement.value;
        })
        markedByElement.addEventListener("change", function() {
            obj.markedBy = markedByElement.value;
        })

        
        if (nameElement.value!="" && rollElement.value!="" && subjectElement.value!="" && marksElement.value!="" && markedByElement.value!="") {
            if(markedByElement.value.includes('@') && markedByElement.value.includes('.')) {
                tableData.reverse().push(obj);
                console.log(obj, tableData);
            } else {
                console.log("please enter valid email");
            }
        }
    });
    
}

function createRow() {
    let tr = document.createElement("tr");
    let idElement = document.createElement("td");
    id = id + 1;
    idElement.textContent = id;
    tr.appendChild(idElement);

    let studentName = document.createElement("td");
    let nameElement = document.createElement("input");
    nameElement.type = "text";
    studentName.appendChild(nameElement);
    tr.appendChild(studentName);

    let studentRoll = document.createElement("td");
    let rollElement = document.createElement("input");
    rollElement.type = "number";
    studentRoll.appendChild(rollElement);
    tr.appendChild(studentRoll);

    let subject = document.createElement("td");
    let subjectElement = document.createElement("input");
    subjectElement.type = "text";
    subject.appendChild(subjectElement);
    tr.appendChild(subject);

    let marks = document.createElement("td");
    let marksElement = document.createElement("input");
    marksElement.type = "number";
    marks.appendChild(marksElement);
    tr.appendChild(marks);

    let markedBy = document.createElement("td");
    let markedByElement = document.createElement("input");
    markedByElement.type = "email";
    markedBy.appendChild(markedByElement);
    tr.appendChild(markedBy);
    
    let save = document.createElement("td");
    tr.appendChild(save);


    createSaveBtn(id, save, nameElement, rollElement, subjectElement, marksElement, markedByElement);
    
    tbody.appendChild(tr);

}

addbtn.addEventListener("click", function() {
    createRow();
})
