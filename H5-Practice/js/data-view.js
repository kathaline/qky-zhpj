
var gradeChart = echarts.init(document.getElementById('gradecp'));
var option = {
    color:[ '#81d0d7','#f29365',],
    legend: {
        data:['加分','减分'],
        align: 'right',
        right: '2%',
        top:0,
    },
    xAxis: [
        {
            type: 'category',
            data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级', '初一', '初二', '初三', '高一', '高二', '高三', ],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel:{
                interval:0,//横轴信息全部显示
                rotate:30,//度角倾斜显示
            }
        }
    ],
    yAxis:[
        {
            name: '单位：分数',
        },
    ],
    grid: {
        right: '5%',
        bottom: '25px',
        left: '2%',
        top: '35px',
        containLabel: true
    },
    series: [
        {
            name:'加分',
            type:'bar',
            barWidth:'20%',
            data:[97,109,124,134,157,135,154,156,142,135,122,102]
        },
        {
            name:'减分',
            type:'bar',
            barWidth:'20%',
            data:[17,89,64,34,57,35,54,56,42,35,42,42]
        },
    ]
};
gradeChart.setOption(option);

var dailyChart = echarts.init(document.getElementById('daily'));
var  xData = ["2019-03-01", "2019-03-02", "2019-03-03", "2019-03-04", "2019-03-05", "2019-03-06", "2019-03-07", "2019-03-08", "2019-03-09", "2019-03-10", "2019-03-11", "2019-03-12", "2019-03-13", "2019-03-14", "2019-03-15", "2019-03-16", "2019-03-17", "2019-03-18", "2019-03-19", "2019-03-20"];
var yData1 = [12, 5, 12, 46, 22, 24, 15, 5, 54, 18, 24, 18, 31, 25, 27, 14, 15, 21, 20, 17];
var yData2 = [13, 7, 10, 38, 17, 28, 22, 12, 28, 19, 14, 19, 19, 31, 22, 11, 14, 19, 22, 16];
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    legend: {
        top:0,
        x: 'right',
        y: '40px',
        textStyle: {
            color: '#666',
            fontSize: 13,
        },
        icon: 'circle',
        data: ['加分','减分',]
    },
    grid: {
        right: '5%',
        bottom: '25px',
        left: '5%',
        top: '40px',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        data: xData,
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
        axisTick: {
            show: false,
        },
        axisLabel: {
            show: true,
            textStyle: {
                color: "#666",
                fontSize: 10,
            },
            interval:2,
            rotate:15
        },
    }],
    yAxis: [{
        type: 'value',
        name: '分数',
        nameTextStyle: {
            color: '#666'
        },
        position: 'left',
        axisLine: {
            lineStyle: {
                color: '#666'
            }
        },
        splitLine: {
            lineStyle: {
                color: "#eee",
            }

        },
        axisLabel: {
            color: '#666',
            fontSize: 12,
        }
    }, ],
    series: [{
        name: '减分',
        type: 'line',
        yAxisIndex: 0,
        symbolSize: 12,
        itemStyle: {
            normal: {
                color: '#eb3a04',
            }
        },
        data: yData1
    },
        {
            name: '加分',
            type: 'line',
            yAxisIndex: 0,
            symbolSize: 12,
            itemStyle: {
                normal: {
                    color: '#45cc98',
                }
            },
            data: yData2
        }
    ]
};
dailyChart.setOption(option);

var plusesChart = echarts.init(document.getElementById('pluses'));
var mydata =  [
    {value:335, name:"一级指标"},
    {value:310, name:"要不要投降",},
    {value:234, name:"2019-2020第二学期指标",},
    {value:154, name:"追梦的蚂蚁",},
    {value:335, name:"2020第一学期",},
     ];
option = {
    color:["#afa3f5","#5bd7a1","#25cadd","#3bafff","#f1bb4c",],
    legend: {
        data:mydata,
        top: '10',
        selectedMode: false,
        itemWidth:10,
        itemHeight:10,
        itemGap:2,
        borderRadius: 2,
        textStyle: {
            color: ['#777']
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
        {
            name: '加分前五项',
            type: 'pie',
            radius: ['20%', '50%'],
            center: ['50%', '55%'],
            data:mydata,
        },


    ],
};
plusesChart.setOption(option);

//$('#subtraction').css({'height':'260px','width':'100%',})
var subtractionChart = echarts.init(document.getElementById('subtraction'));
var mydata =  [
    {value:335, name:"一级指标"},
    {value:310, name:"要不要投降",},
    {value:234, name:"2019-2020第二学期指标",},
    {value:154, name:"追梦的蚂蚁",},
    {value:335, name:"2020第一学期",},
];
option = {
    color:["#c27afc","#40ca8e","#17daf7","#0f79f7","#f1964c",],
    legend: {
        data:mydata,
        top: '10',
        selectedMode: false,
        itemWidth:10,
        itemHeight:10,
        itemGap:2,
        borderRadius: 2,
        textStyle: {
            color: ['#777']
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
        {
            name: '加分前五项',
            type: 'pie',
            radius: ['20%', '50%'],
            center: ['50%', '55%'],
            data:mydata,
        },


    ],
};
subtractionChart.setOption(option);