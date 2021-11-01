let minitable;

$( document ).ready(function() {
    minitable = $("#featured-table").DataTable( {
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
});

$("#age-btn").click(function() {
    if($("#gender-btn").hasClass("active") || $("#race-btn").hasClass("active")) {
        $("#gender-btn").removeClass("active");
        $("#race-btn").removeClass("active");
        $("#age-btn").addClass("active");
        minitable.destroy();
        renderMiniTable("age");
    }
})

$("#gender-btn").click(function() {
    if($("#age-btn").hasClass("active") || $("#race-btn").hasClass("active")) {
        $("#age-btn").removeClass("active");
        $("#race-btn").removeClass("active");
        $("#gender-btn").addClass("active");
        minitable.destroy();
        renderMiniTable("gender");
    }
})

$("#race-btn").click(function() {
    if($("#age-btn").hasClass("active") || $("#gender-btn").hasClass("active")) {
        $("#age-btn").removeClass("active");
        $("#gender-btn").removeClass("active");
        $("#race-btn").addClass("active");
        minitable.destroy();
        renderMiniTable("race");
    }
})

function renderMiniTable(type) {
    if(type == "age") {
        minitable = $("#featured-table").DataTable( {
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
    } else if(type == "gender") {
        minitable = $("#featured-table").DataTable( {
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
    } else if(type == "race") {
        minitable = $("#featured-table").DataTable( {
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
    }
}