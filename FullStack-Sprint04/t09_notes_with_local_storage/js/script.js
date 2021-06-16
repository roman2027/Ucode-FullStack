let notes = document.querySelector("#output"),
    text = document.querySelector("#input"),
    counter = 0;

function textInput() {
    if (text.value === "") {
        alert("It's empty. Try to input something in 'Text input'.");
    } 
    else {
        let setItemValue = escape(document.form.name.value);
        data = new Date();
        data.setMonth(data.getMonth() + 1);
        data = data.toUTCString();

        notes.value += " --> " + setItemValue + " " + "[" + data + "]" + "\n";
        document.setItem = `${counter}name =` + setItemValue + `;expires =` + data;
        counter++;
    }
}

function clearNodes() {
    let result = confirm("Are you sure?");
    if (result == true) {
        notes.value = "";
        text.value = "";
        let cook = document.setItem.split(";");
        for (let i = 0; i < cook.length; i++) {
            let setItem = cook[i];
            let pos = setItem.indexOf("=");
            let name = pos > -1 ? setItem.substr(0, pos) : setItem;
            document.setItem = name + "expires=" + data;
        }
    }
}