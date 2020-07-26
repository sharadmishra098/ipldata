function total_runs() {
    document.addEventListener('DOMContentLoaded', function() {
        fetch("/js/data.json").then(resp => resp.json())
            .then(function(data) {
                var chart = Highcharts.chart('teams', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Total Runs by Teams'
                    },
                    xAxis: {
                        categories: Object.keys(data.ipl[0])
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Runs Scored'
                        }
                    },
                    series: [{
                        name: 'Scores',
                        data: Object.values(data.ipl[0])
                    }]
                })
            });

    });
}

total_runs()

function rcb_total() {
    document.addEventListener('DOMContentLoaded', function() {
        fetch("/js/data.json")
            .then(resp => resp.json())
            .then(data => {
                var myChart = Highcharts.chart('rcb', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'RCB top batsman'
                    },
                    xAxis: {
                        categories: Object.keys(data.ipl[1])
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Runs Scored'
                        }
                    },
                    series: [{
                        name: 'RCB Batsman',
                        data: Object.values(data.ipl[1])
                    }]
                });
            });


    })
}
rcb_total()

function umpire() {
    document.addEventListener('DOMContentLoaded', function() {
        fetch("/js/data.json")
            .then(resp => resp.json())
            .then(data => {
                var myChart = Highcharts.chart('umpire', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Foreign Umpires'
                    },
                    xAxis: {
                        categories: Object.keys(data.ipl[2])
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Number of Umpires'
                        }
                    },
                    series: [{
                        name: 'Country',
                        data: Object.values(data.ipl[2])
                    }]
                });
            });


    })
}
umpire()

function season() {
    document.addEventListener('DOMContentLoaded', function() {
        fetch("/js/data.json")
            .then(resp => resp.json())
            .then(data => {
                var teams = ['Gujarat Lions', 'Rising Pune Supergiant',
                    'Royal Challengers Bangalore',
                    'Kolkata Knight Riders', 'Delhi Daredevils',
                    'Sunrisers Hyderabad',
                    'Kings XI Punjab', 'Mumbai Indians', 'Chennai Super Kings',
                    'Rajasthan Royals', 'Deccan Chargers', 'Pune Warriors',
                    'Kochi Tuskers Kerala'
                ]
                var team_list = [];
                for (var year of Object.keys(data.ipl[3])) {
                    let score = [];
                    for (var team of teams) {
                        if (data.ipl[3][year].hasOwnProperty(team)) {
                            score.push(data.ipl[3][year][team]);
                        } else {
                            score.push(0)
                        }
                    }
                    team_list.push(score);
                }
                console.log(team_list);
                var myChart = Highcharts.chart('season', {
                    chart: {
                        type: 'column'
                    },
                    title: {
                        text: 'Games played by teams per season'
                    },
                    xAxis: {
                        categories: teams,
                        title: {
                            text: 'Teams'
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'Matches Played'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size:15px">{point.key}</span><table>',
                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                            '<td style="padding:0"><b>{point.y:.0f} matches</b></td></tr>',
                        footerFormat: '</table>',
                        shared: true,
                        useHTML: true
                    },
                    series: [{
                            name: '2008',
                            data: team_list[0]
                        },
                        {
                            name: '2009',
                            data: team_list[1]
                        },
                        {
                            name: '2010',
                            data: team_list[2]
                        },
                        {
                            name: '2011',
                            data: team_list[3]
                        },
                        {
                            name: '2012',
                            data: team_list[4]
                        },
                        {
                            name: '2013',
                            data: team_list[5]
                        },
                        {
                            name: '2014',
                            data: team_list[6]
                        },
                        {
                            name: '2015',
                            data: team_list[7]
                        },
                        {
                            name: '2016',
                            data: team_list[8]
                        },
                        {
                            name: '2017',
                            data: team_list[9]
                        }
                    ]
                });
                console.log(data.ipl[3]);
            });


    })
}
season()
