document.addEventListener('DOMContentLoaded', function() {
    
    const dropArea = document.getElementById('dropArea');
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
    const form = document.getElementById('postItemForm');

    dropArea.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        showPreview(file);
    });

    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.style.backgroundColor = '#e0e0e0'; 
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.style.backgroundColor = '#f8f5f0'; 
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.style.backgroundColor = '#f8f5f0';
        const file = e.dataTransfer.files[0];
        showPreview(file);
    });

    function showPreview(file) {
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.src = e.target.result;
                imagePreview.style.display = 'block';
                dropArea.querySelector('i').style.display = 'none';
                dropArea.querySelector('p').style.display = 'none';
            }
            reader.readAsDataURL(file);
        }
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Item Posted Successfully! (Demo Only)');
    });

});