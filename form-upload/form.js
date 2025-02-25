document.addEventListener('DOMContentLoaded', function () {
    const uploadForm = document.getElementById('uploadForm');
    const fileTable = document.getElementById('fileTable').querySelector('tbody');
    const xhrArray = []; // Масив для зберігання XMLHttpRequest-об'єктів
    const sendButton = document.getElementById('sendButton');

    uploadForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const files = uploadForm.querySelector('input[type="file"]').files;

        if (files.length === 0) {
            alert('Виберіть файли для завантаження.');
            return;
        }

        Array.from(files).forEach((file) => {
            const newRow = fileTable.insertRow();
            const nameCell = newRow.insertCell(0);
            const sizeCell = newRow.insertCell(1);
            const progressCell = newRow.insertCell(2);
            const percentageCell = newRow.insertCell(3);
            const cancelCell = newRow.insertCell(4);

            nameCell.textContent = file.name;
            sizeCell.textContent = (file.size / (1024 * 1024)).toFixed(2) + ' MB';

            const progressBar = document.createElement('progress');
            progressBar.max = 100;
            progressBar.value = 0;
            progressCell.appendChild(progressBar);

            const percentageSpan = document.createElement('span');
            percentageCell.appendChild(percentageSpan);

            const cancelButton = document.createElement('button');
            cancelButton.textContent = 'Відмінити';
            cancelCell.appendChild(cancelButton);

            // Скасування завантаження
            cancelButton.addEventListener('click', () => {
                const index = Array.from(fileTable.rows).indexOf(newRow);

                if (index !== -1) {
                    const xhr = xhrArray[index];
                    if (xhr && xhr.readyState !== 4) {
                        xhr.abort();
                    }
                    fileTable.deleteRow(index);
                }
            });

            const xhr = new XMLHttpRequest();
            xhrArray.push(xhr);

            xhr.open('POST', 'uploads.php', true);

            xhr.upload.onprogress = function (e) {
                if (e.lengthComputable) {
                    const percentComplete = (e.loaded / e.total) * 100;
                    progressBar.value = percentComplete;
                    percentageSpan.textContent = `${percentComplete.toFixed(2)}%`;
                }
            };

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    console.log(xhr.status)
                }
            };

            const formData = new FormData();
            formData.append('file', file);
            xhr.send(formData);
        });

        sendButton.style.display = 'block';
    });

    // sendButton.addEventListener('click', function () {});
});