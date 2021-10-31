$( document ).ready(function() {
    renderReceivedMap();
});

// Map buttons
$("#received-btn-state").click(function() {
    if($("#notreceived-btn-state").hasClass("active") && !$("#received-btn-state").hasClass("active")) {
        $("#notreceived-btn-state").removeClass("active");
        $("#received-btn-state").addClass("active");
    }
    renderReceivedMap();
})

$("#notreceived-btn-state").click(function() {
    if($("#received-btn-state").hasClass("active") && !$("#notreceived-btn-state").hasClass("active")) {
        $("#notreceived-btn-state").addClass("active");
        $("#received-btn-state").removeClass("active");
    }
    renderNotReceivedMap();
})

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
            text: 'Average percentages of people who took prescription medication for mental health and/or received counseling or therapy in each state between August 19, 2020 and October 11, 2021'
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
            max: 30,
            minColor: '#C6D8FF',
            maxColor: '#273469'
        },

        series: [{
            data: data,        
            joinBy: ['postal-code', 'code'],
            name: 'Average % of people who <b>took prescription medication for mental health and/or received counseling or therapy</b> ',
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
            max: 30,
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
