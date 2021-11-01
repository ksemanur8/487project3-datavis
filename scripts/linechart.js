$( document ).ready(function() {
    renderLineMap();
});

// Line rendering
function renderLineMap() {
        Highcharts.chart('line-container', {
            colors: ["#273469", "#9F3504"],

            title: '',
        
            xAxis: {
                categories: ["8/19/20 - 8/31/20", "9/2/20-9/14/20", "9/16/20-9/28/20", "9/30/20 - 10/12/20", "10/14/20 - 10/26/20", "10/28/20 - 11/9/20", "11/11/20 - 11/23/20", "11/25/20 - 12/7/20", "12/9/20 - 12/21/20", "1/6/21 - 1/18/21", "1/20/21 - 2/1/21", "2/3/21 - 2/15/21", "2/17/21 - 3/1/21", "3/3/21 - 3/15/21", "3/17/21 - 3/29/21", "4/14/21 - 4/26/21", "4/28/21 - 5/10/21", "5/12/21 - 5/24/21", "5/26/21 - 6/7/21", "6/9/21 - 6/21/21", "6/23/21 - 7/5/21", "7/21/21 - 8/2/21", "8/4/21 - 8/16/21", "8/18/21 - 8/30/21", "9/1/21 - 9/13/21", "9/15/21 - 9/27/21", "9/29/21 - 10/11/21"],
                accessibility: {
                    rangeDescription: 'Range: August 19, 2020 to October 11, 2021'
                }
            },

            yAxis: {
                title: {
                    text: 'Percent of population'
                }
            },
        
            legend: {
                enabled: true,
            },
        
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    
                }
            },
        
            series: [{
                name: "Received Counseling or Therapy, Last 4 Weeks",
                data: [8.7, 9.1, 9, 9, 10, 9.8, 9.9, 10.1, 10.2, 9.6, 9.8, 10.3, 10.3, 10.6, 10.1, 9.8, 10.2, 10, 10.1, 9.7, 10.8, 10.7, 10.1, 10.1, 10.3, 10.2, 10.5]
            },
            {
                name: "Needed Counseling or Therapy But Did Not Get It, Last 4 Weeks",
                data: [9.2, 9.7, 10.4, 9.7, 10.6, 11.2, 11.1, 12, 12.4, 11.4, 11.7, 11.5, 11.9, 11.7, 11.1, 9.9, 9.8, 10.1, 9.8, 9.8, 10.3, 11.4, 10.6, 11.2, 11.3, 11.6, 11]
            }],
            tooltip: {
                valueSuffix: "%"
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500
                    },
                }]
            }
        
        });
};


