var colors = ['#EA614A', '#20649B', '#008836', '#6B96CA', '#A38456', '#A87A93', '#D19C95']

var neuspesnostZeme = [
  ["Estonsko",43.4],
  ["Švédsko",33.6],
  ["Česko", 30.6],
  ["Izrael",25.9],
  ["Rakousko",23.6],
  ["Belgie (Vlámsko)",22.1],
  ["Nizozemsko",22],
  ["Francie",21.2],
  ["Norsko",21.2],
  ["Finsko",20.8],
  ["Austrálie",19.6],
  ["USA",16.6],
  ["Nový Zéland",16.1],
  ["Velká Británie",15.9],
  ["Dánsko",13.1]
]

var zeme = neuspesnostZeme.map(function(d) {
        return d[0];
    });

var rok0 = [[5.5],[5.2],[5.6],[5.0],[5.9],[5.4],[5.2],[6.3],[5.9],[5.8],[5.8],[5.2],[5.6],[5.4],[5.7],[5.7],[5.7]],
    rok1 = [[22.2],[21.8],[24.5],[24.6],[26.0],[28.8],[27.2],[28.2],[29.3],[30.3],[31.1],[32.0],[32.3],[35.0],[33.7],[34.0]],
    rok2 = [[7.3],[8.7],[8.8],[10.6],[10.2],[9.5],[9.1],[8.9],[9.2],[9.9],[9.7],[9.8],[10.4],[10.1],[11.0]],
    rok3 = [[3.7],[4.3],[4.9],[5.0],[4.5],[4.4],[4.4],[4.6],[4.5],[4.3],[4.5],[4.8],[4.8],[4.7]],
    rok4 = [[2.0],[2.4],[2.3],[2.4],[2.3],[2.4],[2.5],[2.6],[2.4],[2.6],[2.8],[2.7],[3.0]],
    rok5 = [[1.4],[1.3],[1.3],[1.1],[1.3],[1.3],[1.3],[1.2],[1.4],[1.3],[1.5],[1.7]],
    rok6 = [[1.4],[1.4],[1.1],[1],[0.9],[0.9],[1.1],[1.1],[1],[1],[0.9]]

var roky = [2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017]

var rok0UK = [[3.1],[3.0],[15.5],[2.8],[2.2],[3.3],[2.1],[4.0],[5.5],[2.8],[2.9],[3.6],[2.9],[0.0],[9.1],[1.8]],
    rok1UK = [[52.7],[52.1],[24.0],[37.6],[32.0],[31.2],[32.9],[25.8],[29.3],[19.2],[16.6],[21.6],[24.6],[26.7],[15.2],[12.6]],
    rok2UK = [[16.2],[4.8],[13.2],[6.9],[8.7],[8.8],[7.2],[9.3],[6.1],[10.9],[10.8],[11.3],[5.2],[3.3],[7.6],[7.2]],
    rok3UK = [[4.8],[3.2],[3.1],[3.8],[5.9],[4.4],[3.2],[5.1],[1.7],[7.2],[2.9],[3.6],[3.3],[0.0],[1.5],[5.4]],
    rok4UK = [[3.1],[1.8],[4.7],[6.2],[5.5],[3.7],[2.6],[2.5],[3.9],[3.7],[8.6],[1.4],[5.0],[6.7],[1.5],[6.6]]

var fakultyUK = ["FHS","MFF","FaF","HTF","FTVS","celá UK","PřF","PedF","ETF","FSV","KTF","1.LF","FF","LF HK","2.LF","3.LF"]

var rok0TF = [[19.0],[8.9],[4.5],[7.4],[9.5],[10.8],[5.8],[2.5],[2.4],[2.7],[8.2],[10.0],[3.2],[3.3],[2.0],[5.4],[8.1],[4.8],[6.2],[5.5],[2.7],[4.8],[4.5],[7.4],[4.4],[2.9],[6.3],[3.3],[5.6],[2.4],[4.8],[8.6],[3.8],[19.1],[5.6],[9.8],[2.1],[10.4],[3.2],[5.4],[3.0],[2.0],[0.0],[2.0]],
    rok1TF = [[48.1],[60.1],[73.3],[67.8],[58.3],[49.9],[55.6],[67.0],[47.7],[44.2],[51.0],[50.3],[65.0],[52.1],[59.1],[57.3],[54.6],[51.1],[49.9],[51.2],[47.5],[50.0],[49.5],[47.8],[42.7],[56.5],[35.0],[32.2],[35.8],[42.7],[36.9],[19.9],[33.3],[16.6],[33.1],[33.2],[34.0],[33.2],[36.2],[32.1],[18.8],[13.3],[16.3],[8.9]],
    rok2TF = [[17.7],[7.5],[6.2],[7.9],[12.6],[12.3],[14.5],[8.5],[22.9],[20.1],[7.8],[8.5],[6.5],[16.6],[7.9],[4.6],[7.4],[12.0],[11.1],[10.2],[16.0],[10.2],[8.8],[10.2],[6.0],[4.3],[11.5],[19.2],[10.5],[11.0],[10.2],[11.6],[16.7],[13.1],[11.4],[9.5],[14.2],[10.1],[9.8],[6.7],[13.8],[10.1],[4.1],[2.0]],
    rok3TF = [[4.4],[7.8],[2.2],[2.4],[4.6],[8.7],[2.7],[1.5],[2.6],[4.6],[6.3],[4.5],[1.1],[2.3],[3.9],[4.4],[3.7],[3.8],[4.4],[2.4],[2.3],[2.3],[3.6],[1.6],[6.5],[1.9],[6.8],[7.2],[4.6],[4.0],[5.3],[9.8],[4.3],[4.9],[4.5],[3.6],[3.8],[0.9],[2.8],[6.4],[6.5],[3.5],[4.1],[2.0]],
    rok4TF = [[1.1],[3.4],[1.2],[1.3],[0.6],[0.5],[2.2],[1.0],[1.1],[4.6],[2.9],[2.6],[0.0],[1.3],[2.5],[3.5],[1.4],[2.3],[1.0],[1.4],[1.3],[1.6],[1.7],[0.8],[7.0],[0.5],[4.8],[1.4],[5.9],[2.2],[2.7],[9.9],[1.5],[4.4],[3.4],[1.2],[1.1],[0.2],[2.8],[2.6],[4.0],[2.0],[6.1],[2.0]];

var fakultyTF = ["TF ČZU","FVTM UJEP","FJFI ČVUT","FS TUL","FT UTB","FS ZČU","DFJP UPa","FTOP VŠCHT","FD ČVUT","FEI UPa","FAV ZČU","FAI UTB","FCH VUT","FIT ČVUT","FMIM TUL","FT TUL","FMMI VŠB-TUO","FE ZČU","FBI VŠB-TUO","FCHT VŠCHT","FAST VŠB-TUO","FPBT ČVUT","HGF VŠB-TUO","VŠPJ","FEI VŠB-TUO","FCHI ČVUT","FI MU","FS ČVUT","FCHT UPa","FIM UHK","FEL ČVUT","VŠTE","FS VŠB-TUO","FBMI ČVUT","FEKT VUT","FIS VŠE","FSv ČVUT","FLKŘ UTB","FS VUT","FSI VUT","FIT VUT","FA ČVUT","FUA TUL","FA VUT"]

var rok0PF = [[4.9],[4.9],[6.4],[5.5],[4.0],[3.8],[8.4],[4.5],[2.1],[1.2]],
    rok1PF = [[31.9],[32.5],[24.6],[24.4],[25.8],[23.3],[17.9],[15.6],[17.6],[11.5]],
    rok2PF = [[9.7],[9.1],[12.0],[6.9],[9.3],[7.9],[7.8],[11.4],[7.3],[3.6]],
    rok3PF = [[8.1],[9.2],[5.1],[7.1],[5.1],[5.3],[5.8],[5.0],[4.8],[1.4]],
    rok4PF = [[6.1],[2.2],[4.9],[4.7],[2.5],[3.1],[1.6],[3.9],[4.1],[1.8]];

var fakultyPF = ["TUL","ZČU","MU","UJEP","UK","JČU","OUO","UPOL","UHK","UJAK"];

var programy = [[61.4], [67.9], [84.3], [34.1]]



$(function () {

Highcharts.chart('mezinarodni', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Studijní neúspěšnost bakalářů, Česko × OECD'
    },
    subtitle: {
        text: 'srovnání studentů, kteří nastoupili 2013, letos by standardní dobu studia překročili o 2 roky'
    },
    xAxis: {
        categories: zeme
    },
    yAxis: {
        min: 0,
        title: {
            text: 'studijní neúspěšnost Bc. studia'
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} %</b><br/>',
        crosshairs: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: 'Zdroj: MŠMT'
    },
    legend: {
        enabled: false
    },
    series: [{
        name: 'bakaláře nedokončilo',
        data: [
            neuspesnostZeme[0],
            neuspesnostZeme[1],
            {y: neuspesnostZeme[2][1], color: colors[1]},
            neuspesnostZeme[3],
            neuspesnostZeme[4],
            neuspesnostZeme[5],
            neuspesnostZeme[6],
            neuspesnostZeme[7],
            neuspesnostZeme[8],
            neuspesnostZeme[9],
            neuspesnostZeme[10],
            neuspesnostZeme[11],
            neuspesnostZeme[12],
            neuspesnostZeme[13],
            neuspesnostZeme[14]
        ],
        color: colors[0]
    }]
});

Highcharts.chart('casovarada', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Studijní neúspěšnost bakalářů, časová řada'
    },
    subtitle: {
        text: 'srovnání neúspěšně ukončených studií podle ročníku nástupu'
    },
    xAxis: {
        categories: roky
    },
    yAxis: {
        min: 0,
        title: {
            text: 'studijní neúspěšnost Bc. studia'
        },
        labels: {
            format: '{value} %'
        },
        reversedStacks: false
    },
    tooltip: {
        formatter: function () {
            var s = 'Začátek studia: <b>' + this.x + '</b>',
                celkem = 0;

            $.each(this.points, function () {
                s += '<br/><span style="color:' + this.color +'">' + this.series.name + '</span> neuspělo <strong>' +
                    this.y + ' %</strong>';
                celkem += this.y;
            });

            s += '<br/>Dosud neúspěšně ukončilo studium <b>' + Math.round(celkem*10)/10 + '%</b>';

            return s;
        },
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: 'Zdroj: MŠMT'
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: '0. rok',
        data: rok0,
        color: colors[0]
    }, {
        name: '1. rok',
        data: rok1,
        color: colors[1]
    }, {
        name: '2. rok',
        data: rok2,
        color: colors[2]
    }, {
        name: '3. rok',
        data: rok3,
        color: colors[3]
    }, {
        name: '4. rok',
        data: rok4,
        color: colors[4]
    }, {
        name: '5. rok',
        data: rok5,
        color: colors[5]
    }, {
        name: '6. rok a později',
        data: rok6,
        color: colors[6]
    }]
});

Highcharts.chart('uk', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Studijní neúspěšnost bakalářů, Univerzita Karlova'
    },
    subtitle: {
        text: 'srovnání neúspěšně ukončených studií podle fakulty, rok nástupu 2013'
    },
    xAxis: {
        categories: fakultyUK
    },
    yAxis: {
        min: 0,
        title: {
            text: 'studijní neúspěšnost Bc. studia'
        },
        labels: {
            format: '{value} %'
        },
        reversedStacks: false
    },
    tooltip: {
        formatter: function () {
            var s = 'Fakulta: <b>' + this.x + '</b>',
                celkem = 0;

            $.each(this.points, function () {
                s += '<br/><span style="color:' + this.color +'">' + this.series.name + '</span> neuspělo <strong>' +
                    this.y + ' %</strong>';
                celkem += this.y;
            });

            s += '<br/>Dosud neúspěšně ukončilo studium <b>' + Math.round(celkem*10)/10 + '%</b>';

            return s;
        },
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: 'Zdroj: MŠMT'
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: '0. rok',
        data: rok0UK,
        color: colors[0]
    }, {
        name: '1. rok',
        data: rok1UK,
        color: colors[1]
    }, {
        name: '2. rok',
        data: rok2UK,
        color: colors[2]
    }, {
        name: '3. rok',
        data: rok3UK,
        color: colors[3]
    }, {
        name: '4. rok',
        data: rok4UK,
        color: colors[4]
    }]
});

Highcharts.chart('technicke', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Studijní neúspěšnost bakalářů, technické fakulty'
    },
    subtitle: {
        text: 'srovnání neúspěšně ukončených studií podle fakulty, rok nástupu 2013'
    },
    xAxis: {
        categories: fakultyTF
    },
    yAxis: {
        min: 0,
        title: {
            text: 'studijní neúspěšnost Bc. studia'
        },
        labels: {
            format: '{value} %'
        },
        reversedStacks: false
    },
    tooltip: {
        formatter: function () {
            var s = 'Fakulta: <b>' + this.x + '</b>',
                celkem = 0;

            $.each(this.points, function () {
                s += '<br/><span style="color:' + this.color +'">' + this.series.name + '</span> neuspělo <strong>' +
                    this.y + ' %</strong>';
                celkem += this.y;
            });

            s += '<br/>Dosud neúspěšně ukončilo studium <b>' + Math.round(celkem*10)/10 + '%</b>';

            return s;
        },
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: 'Zdroj: MŠMT'
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: '0. rok',
        data: rok0TF,
        color: colors[0]
    }, {
        name: '1. rok',
        data: rok1TF,
        color: colors[1]
    }, {
        name: '2. rok',
        data: rok2TF,
        color: colors[2]
    }, {
        name: '3. rok',
        data: rok3TF,
        color: colors[3]
    }, {
        name: '4. rok',
        data: rok4TF,
        color: colors[4]
    }]
});

Highcharts.chart('pedagogicke', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Studijní neúspěšnost bakalářů, pedagogické fakulty'
    },
    subtitle: {
        text: 'srovnání neúspěšně ukončených studií podle fakulty, rok nástupu 2013'
    },
    xAxis: {
        categories: fakultyPF
    },
    yAxis: {
        min: 0,
        title: {
            text: 'studijní neúspěšnost Bc. studia'
        },
        labels: {
            format: '{value} %'
        },
        reversedStacks: false
    },
    tooltip: {
        formatter: function () {
            var s = 'Fakulta: <b>' + this.x + '</b>',
                celkem = 0;

            $.each(this.points, function () {
                s += '<br/><span style="color:' + this.color +'">' + this.series.name + '</span> neuspělo <strong>' +
                    this.y + ' %</strong>';
                celkem += this.y;
            });

            s += '<br/>Dosud neúspěšně ukončilo studium <b>' + Math.round(celkem*10)/10 + '%</b>';

            return s;
        },
        shared: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: 'Zdroj: MŠMT'
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: '0. rok',
        data: rok0PF,
        color: colors[0]
    }, {
        name: '1. rok',
        data: rok1PF,
        color: colors[1]
    }, {
        name: '2. rok',
        data: rok2PF,
        color: colors[2]
    }, {
        name: '3. rok',
        data: rok3PF,
        color: colors[3]
    }, {
        name: '4. rok',
        data: rok4PF,
        color: colors[4]
    }]
});

Highcharts.chart('programy', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Studijní úspěšnost Bc. × Mgr. × PhD.'
    },
    subtitle: {
        text: 'srovnání úspěšně ukončených studií, rok nástupu 2010'
    },
    xAxis: {
        categories: ['Bc.', 'Mgr.', 'navazující Mgr.', 'PhD.']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'studijní úspěšnost'
        },
        labels: {
            format: '{value} %'
        }
    },
    tooltip: {
        pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} %</b><br/>',
        crosshairs: true
    },
    exporting: {
        enabled: false
    },
    credits: {
        href: '',
        text: 'Zdroj: MŠMT'
    },
    legend: {
        enabled: false
    },
    plotOptions: {},
    series: [{
        name: 'Studijní úspěšnost',
        data: programy,
        color: colors[2]
    }]
});

});