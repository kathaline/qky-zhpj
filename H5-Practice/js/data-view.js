
var plusesChart = echarts.init(document.getElementById('pluses'));
var mydata =  [
    {value:335, name:"国家级"},
    {value:310, name:"要不要投降",},
    {value:234, name:"2019-2020第",},
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
            name: '活动级别占比',
            type: 'pie',
            radius: ['15%', '55%'],
            center: ['50%', '55%'],
            data:mydata,
        },


    ],
};
plusesChart.setOption(option);
