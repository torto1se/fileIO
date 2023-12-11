function handleImageSelect(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imageData = e.target.result;
            document.getElementById('selectedImage').src = imageData;
            alert('Изображение загружено!');
        };
        reader.readAsDataURL(file);
    }
}

function handleTextFileRead(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let contents = e.target.result;
            alert('Содержимое файла:\n' + contents);
            alert('Размер файла: ' + file.size + ' байт');
        };
        reader.readAsText(file);
    }
}

function handleTextFileSave() {
    let blob = new Blob(["Привет"], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "savedFile.txt");
}

document.getElementById('fileInputImage').addEventListener('change', handleImageSelect);
document.getElementById('fileInputText').addEventListener('change', handleTextFileRead);
document.getElementById('saveTextFile').addEventListener('click', handleTextFileSave);
