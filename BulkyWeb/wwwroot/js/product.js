
$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": { url:'/admin/product/getall'},
        "columns": [
        { data: 'title', "widht": "25%" },
        { data: 'isbn', "widht": "15%" },
        { data: 'listPrice', "widht": "10%" },
        { data: 'author', "widht": "20%" },
        { data: 'category.name', "widht": "15%" }
    ]
    });
}