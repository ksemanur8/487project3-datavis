let table;

$(document).ready( function () {
    table = $('#table-container').DataTable( {
        ajax: {
            url: "/data/states_receive_full.json",
            dataSrc: ""
        },
        columns: [
            {type: "date",
            data: "Time Period Label"},
            {data: "State"},
            {data: "Percent Value"},
            {data: "Confidence Interval"}
        ], 
        pageLength: 10
    });
});

$("#fullreceived-btn").click(function() {
    if($("#fullneed-btn").hasClass("active") && !$("#fullreceived-btn").hasClass("active")) {
        $("#fullneed-btn").removeClass("active");
        $("#fullreceived-btn").addClass("active");
        table.destroy();
        renderTable("/data/states_receive_full.json");
    }
})

$("#fullneed-btn").click(function() {
    if($("#fullreceived-btn").hasClass("active") && !$("#fullneed-btn").hasClass("active")) {
        $("#fullneed-btn").addClass("active");
        $("#fullreceived-btn").removeClass("active");
        table.destroy();
        renderTable("/data/states_need_full.json");
    }
})

function renderTable(dataset) {
    table = $('#table-container').DataTable( {
        ajax: {
            url: dataset,
            dataSrc: ""
        },
        columns: [
            {data: "Time Period Label"},
            {data: "State"},
            {data: "Percent Value"},
            {data: "Confidence Interval"}
        ], 
        pageLength: 20

    });
}