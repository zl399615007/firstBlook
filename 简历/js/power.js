var myChart = echarts.init(document.getElementById('power'));
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['原生javaScript','CSS3','HTML5','JQuery','其他']
    },
    series: [
        {
            name:'个人技能',
            type:'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:30, name:'原生javaScript'},
                {value:20, name:'CSS3'},
                {value:20, name:'HTML5'},
                {value:20, name:'JQuery'},
                {value:10, name:'其他'}
            ]
        }
    ]
};
myChart.setOption(option);