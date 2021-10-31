// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.

Highcharts.mapChart('map-container', {
    chart: {
        map: 'countries/us/us-all',
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

    colors: ['#7785ac'],

    series: [{
        data: [{
            "code": "AL",
            "name": "Alabama",
            "value": 26.9
        }, {
            "code": "AK",
            "name": "Alaska",
            "value": 22.2
        }, {
            "code": "AZ",
            "name": "Arizona",
            "value": 22.9
        }, {
            "code": "AR",
            "name": "Arkansas",
            "value": 28.4
        }, {
            "code": "CA",
            "name": "California",
            "value": 21.0
        }, {
            "code": "CO",
            "name": "Colorado",
            "value": 26.2
        }, {
            "code": "CT",
            "name": "Connecticut",
            "value": 25.6
        }, {
            "code": "DE",
            "name": "Delaware",
            "value": 24.4
        }, {
            "code": "DC",
            "name": "District of Columbia",
            "value": 27.9
        }, {
            "code": "FL",
            "name": "Florida",
            "value": 22.0
        }, {
            "code": "GA",
            "name": "Georgia",
            "value": 24.2
        }, {
            "code": "HI",
            "name": "Hawaii",
            "value": 16.8
        }, {
            "code": "ID",
            "name": "Idaho",
            "value": 26.8
        }, {
            "code": "IL",
            "name": "Illinois",
            "value": 24.5
        }, {
            "code": "IN",
            "name": "Indiana",
            "value": 27.6
        }, {
            "code": "IA",
            "name": "Iowa",
            "value": 27.4
        }, {
            "code": "KS",
            "name": "Kansas",
            "value": 26.4
        }, {
            "code": "KY",
            "name": "Kentucky",
            "value": 29.1
        }, {
            "code": "LA",
            "name": "Louisiana",
            "value": 28.0
        }, {
            "code": "ME",
            "name": "Maine",
            "value": 29.1
        }, {
            "code": "MD",
            "name": "Maryland",
            "value": 24.5
        }, {
            "code": "MA",
            "name": "Massachusetts",
            "value": 28.5
        }, {
            "code": "MI",
            "name": "Michigan",
            "value": 26.1
        }, {
            "code": "MN",
            "name": "Minnesota",
            "value": 26.9
        }, {
            "code": "MS",
            "name": "Mississippi",
            "value": 25.2
        }, {
            "code": "MO",
            "name": "Missouri",
            "value": 27.1
        }, {
            "code": "MT",
            "name": "Montana",
            "value": 25.3
        }, {
            "code": "NE",
            "name": "Nebraska",
            "value": 25.5
        }, {
            "code": "NV",
            "name": "Nevada",
            "value": 20.4
        }, {
            "code": "NH",
            "name": "New Hampshire",
            "value": 27.3
        }, {
            "code": "NJ",
            "name": "New Jersey",
            "value": 21.8
        }, {
            "code": "NM",
            "name": "New Mexico",
            "value": 24.5
        }, {
            "code": "NY",
            "name": "New York",
            "value": 22.8
        }, {
            "code": "NC",
            "name": "North Carolina",
            "value": 26.4
        }, {
            "code": "ND",
            "name": "North Dakota",
            "value": 24.4
        }, {
            "code": "OH",
            "name": "Ohio",
            "value": 26.3
        }, {
            "code": "OK",
            "name": "Oklahoma",
            "value": 27.7
        }, {
            "code": "OR",
            "name": "Oregon",
            "value": 28.2
        }, {
            "code": "PA",
            "name": "Pennsylvania",
            "value": 27.2
        }, {
            "code": "RI",
            "name": "Rhode Island",
            "value": 29.4
        }, {
            "code": "SC",
            "name": "South Carolina",
            "value": 25.7
        }, {
            "code": "SD",
            "name": "South Dakota",
            "value": 23.6
        }, {
            "code": "TN",
            "name": "Tennessee",
            "value": 26.3
        }, {
            "code": "TX",
            "name": "Texas",
            "value": 21.7
        }, {
            "code": "UT",
            "name": "Utah",
            "value": 29.3
        }, {
            "code": "VT",
            "name": "Vermont",
            "value": 29.5
        }, {
            "code": "VA",
            "name": "Virginia",
            "value": 24.2
        }, {
            "code": "WA",
            "name": "Washington",
            "value": 26.1
        }, {
            "code": "WV",
            "name": "West Virginia",
            "value": 29.6
        }, {
            "code": "WI",
            "name": "Wisconsin",
            "value": 25.1
        }, {
            "code": "WY",
            "name": "Wyoming",
            "value": 23.6
        }],        
        joinBy: ['postal-code', 'code'],
        name: 'Average Percentage of People Who Took Prescription Medication for Mental Health And/Or Received Counseling or Therapy',
        states: {
            hover: {
                color: '#CAC4CE'
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
