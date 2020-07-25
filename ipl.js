document.addEventListener('DOMContentLoaded', function() {
    var myChart = Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ["Sunrisers Hyderabad", "Royal Challengers Bangalore", "Mumbai Indians",
                "Rising Pune Supergiant", "Gujarat Lions"
            ]
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data:  [11652, 23436, 24521, 4533, 4862]
        }]
    });
});

function total_runs() {
    /*fetch("http://0.0.0.0:8000/data.json").then(resp => resp.json())
        .then(function(data) {
            const teams = []
            for (let item in data.ipl[0]) {
                teams.push([item, data.ipl[0][item]])
            }
            /*Object.keys(data.ipl[0]).forEach(item => {
                team_name.push(item);
            })
            Object.values(data.ipl[0]).forEach(item => {
                team_score.push(item);
            })
            console.log(team_score);
            console.log(team_name);
            console.log(teams);
        });*/
    document.addEventListener('DOMContentLoaded', function() {
        var teams = []
        fetch("http://0.0.0.0:8000/data.json").then(resp => resp.json())
            .then(function(data) {
                for (let item in data.ipl[0]) {
                    teams.push([item, data.ipl[0][item]])
                }
                /*Object.keys(data.ipl[0]).forEach(item => {
                    team_name.push(item);
                })
                Object.values(data.ipl[0]).forEach(item => {
                    team_score.push(item);
                })
                console.log(team_score);
                console.log(team_name);*/
                console.log(teams);
            });
        Highcharts.chart('containerss', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total Runs'
            },
            xAxis: {
                type: 'category'
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Runs Scored'
                }
            },
            series: [{
                name: 'Scores',
                data: teams
            }]
        })
    });
}

total_runs()