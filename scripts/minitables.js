$( document ).ready(function() {
    $('#age-table').DataTable( {
        ajax: {
            url: "age-averages.json",
            dataSrc: ""
        },
        columns: [
            {data: "Indicator"},
            {type: "date",
            data: "Time Period Label"},
            {data: "Age Group"},
            {data: "Average Value"},
        ], 
        searching: false,
        paging: true,
        pageLength: 7
    });
    $('#gender-table').DataTable( {
        ajax: {
            url: "gender-averages.json",
            dataSrc: ""
        },
        columns: [
            {data: "Indicator"},
            {type: "date",
            data: "Time Period Label"},
            {data: "Gender"},
            {data: "Average Value"},
        ], 
        searching: false,
        paging: true,
        pageLength: 5
    });
    $('#race-table').DataTable( {
        ajax: {
            url: "race-averages.json",
            dataSrc: ""
        },
        columns: [
            {data: "Indicator"},
            {type: "date",
            data: "Time Period Label"},
            {data: "Race/Hispanic Ethnicity"},
            {data: "Average Value"},
        ], 
        searching: false,
        paging: true,
        pageLength: 5
    });
});