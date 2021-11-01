let table;
$( document ).ready(function() {
    renderReceivedMap();
    table = $('#table-container').DataTable( {
        ajax: {
            url: "/data/states_receive_full.json",
            dataSrc: ""
        },
        columns: [
            {data: "Indicator"},
            {type: "date",
            data: "Time Period Label"},
            {data: "State"},
            {data: "Percent Value"},
            {data: "Confidence Interval"}
        ], 
        pageLength: 10
    });
});

// Buttons
$("#received-btn-state").click(function() {
    if($("#notreceived-btn-state").hasClass("active") 
    && $("#table-headings").hasClass("table-warning")
    && !$("#received-btn-state").hasClass("active")
    && !$("#table-headings").hasClass("table-primary")) {
        $("#notreceived-btn-state").removeClass("active");
        $("#received-btn-state").addClass("active");
        $("#table-headings").addClass("table-primary");
        $("#table-headings").removeClass("table-warning");
        renderReceivedMap();
        table.destroy();
        renderTable("/data/states_receive_full.json");
    }
})

$("#notreceived-btn-state").click(function() {
    if($("#received-btn-state").hasClass("active") 
    && $("#table-headings").hasClass("table-primary") 
    && !$("#notreceived-btn-state").hasClass("active") 
    && !$("#table-headings").hasClass("table-warning")) {
        $("#notreceived-btn-state").addClass("active");
        $("#received-btn-state").removeClass("active");
        $("#table-headings").addClass("table-warning");
        $("#table-headings").removeClass("table-primary");
        renderNotReceivedMap();
        table.destroy();
        renderTable("/data/states_need_full.json");
    }
})

// Table rendering

function renderTable(dataset) {
    table = $('#table-container').DataTable( {
        ajax: {
            url: dataset,
            dataSrc: ""
        },
        columns: [
            {data: "Indicator"},
            {data: "Time Period Label"},
            {data: "State"},
            {data: "Percent Value"},
            {data: "Confidence Interval"}
        ], 
        pageLength: 10

    });
}

// Map rendering
function renderReceivedMap() {
    $.getJSON("../data/state_received.json", function(data) {
    Highcharts.mapChart('map-container', {
        chart: {
            map: 'countries/us/us-all'
        },

        title: {
            text: ''
        },

        subtitle: {
            text: 'Average percentages of people who received counseling or therapy in each state between August 19, 2020 and October 11, 2021'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        legend: {
            enabled: true
        },

        colorAxis: {
            min: 0,
            max: 15,
            minColor: '#C6D8FF',
            maxColor: '#273469'
        },

        series: [{
            data: data,        
            joinBy: ['postal-code', 'code'],
            name: 'Average % of people who <b>received counseling or therapy</b> ',
            states: {
                hover: {
                    color: '#CACACE'
                }
            },
            tooltip: {
                pointFormat: '{point.name}: {point.value}%'
            },
            dataLabels: {
                enabled: true,
                format: '{point.code}',
                style: {
                    fontSize: '11px',
                    fontWeight: '500',
                    color: 'contrast',
                    
                },
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            nullColor: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
    });
}

function renderNotReceivedMap() {
    $.getJSON("../data/state_needed.json", function(data) {
    Highcharts.mapChart('map-container', {
        chart: {
            map: 'countries/us/us-all',
        },

        title: {
            text: ''
        },

        subtitle: {
            text: 'Average percentages of people who needed counseling or therapy but did not get it in each state between August 19, 2020 and October 11, 2021'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        legend: {
            enabled: true
        },

        colorAxis: {
            min: 0,
            max: 15,
            minColor: '#FEE3D7',
            maxColor: '#9F3504'
        },

        series: [{
            data: data,        
            joinBy: ['postal-code', 'code'],
            borderColor: '#ffffff',
            name: 'Average % of people who <b>needed counseling or therapy but did not get it</b> ',
            states: {
                hover: {
                    color: '#FEF1EB'
                }
            },
            tooltip: {
                pointFormat: '{point.name}: {point.value}%'
            },
            dataLabels: {
                enabled: true,
                format: '{point.code}',
                style: {
                    fontSize: '11px',
                    fontWeight: '500',
                    color: 'contrast',
                    
                },
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
            color: 'silver',
            nullColor: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
    });
}

