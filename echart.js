var option = [{
  title: {
    text: '堆叠区域图'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  }],
  yAxis: [{
    type: 'value'
  }],
  series: [{
      name: '邮件营销',
      type: 'line',
      stack: '总量',
      areaStyle: {
        normal: {}
      },
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: '联盟广告',
      type: 'line',
      stack: '总量',
      areaStyle: {
        normal: {}
      },
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: '视频广告',
      type: 'line',
      stack: '总量',
      areaStyle: {
        normal: {}
      },
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: '直接访问',
      type: 'line',
      stack: '总量',
      areaStyle: {
        normal: {}
      },
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: '搜索引擎',
      type: 'line',
      stack: '总量',
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      areaStyle: {
        normal: {}
      },
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
}, {
  title: {
    text: '世界人口总量',
    subtext: '数据来自网络'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['2011年', '2012年']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.01]
  },
  yAxis: {
    type: 'category',
    data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
  },
  series: [{
      name: '2011年',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230]
    },
    {
      name: '2012年',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807]
    }
  ]
}, {
  title: {
    text: '某站点用户访问来源',
    subtext: '纯属虚构',
    x: 'center'
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  },
  series: [{
    name: '访问来源',
    type: 'pie',
    radius: '55%',
    center: ['50%', '60%'],
    data: [{
        value: 335,
        name: '直接访问'
      },
      {
        value: 310,
        name: '邮件营销'
      },
      {
        value: 234,
        name: '联盟广告'
      },
      {
        value: 135,
        name: '视频广告'
      },
      {
        value: 1548,
        name: '搜索引擎'
      }
    ],
    itemStyle: {
      emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      }
    }
  }]
}, {
  title: {
    text: '基础雷达图'
  },
  tooltip: {},
  legend: {
    data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
  },
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [{
        name: '销售（sales）',
        max: 6500
      },
      {
        name: '管理（Administration）',
        max: 16000
      },
      {
        name: '信息技术（Information Techology）',
        max: 30000
      },
      {
        name: '客服（Customer Support）',
        max: 38000
      },
      {
        name: '研发（Development）',
        max: 52000
      },
      {
        name: '市场（Marketing）',
        max: 25000
      }
    ]
  },
  series: [{
    name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    // areaStyle: {normal: {}},
    data: [{
        value: [4300, 10000, 28000, 35000, 50000, 19000],
        name: '预算分配（Allocated Budget）'
      },
      {
        value: [5000, 14000, 28000, 31000, 42000, 21000],
        name: '实际开销（Actual Spending）'
      }
    ]
  }]
}, {
  title: {
    text: '漏斗图',
    subtext: '纯属虚构'
  },
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c}%"
  },
  toolbox: {
    feature: {
      dataView: {
        readOnly: false
      },
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: ['展现', '点击', '访问', '咨询', '订单']
  },
  calculable: true,
  series: [{
    name: '漏斗图',
    type: 'funnel',
    left: '10%',
    top: 60,
    //x2: 80,
    bottom: 60,
    width: '80%',
    // height: {totalHeight} - y - y2,
    min: 0,
    max: 100,
    minSize: '0%',
    maxSize: '100%',
    sort: 'descending',
    gap: 2,
    label: {
      normal: {
        show: true,
        position: 'inside'
      },
      emphasis: {
        textStyle: {
          fontSize: 20
        }
      }
    },
    labelLine: {
      normal: {
        length: 10,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      }
    },
    itemStyle: {
      normal: {
        borderColor: '#fff',
        borderWidth: 1
      }
    },
    data: [{
        value: 60,
        name: '访问'
      },
      {
        value: 40,
        name: '咨询'
      },
      {
        value: 20,
        name: '订单'
      },
      {
        value: 80,
        name: '点击'
      },
      {
        value: 100,
        name: '展现'
      }
    ]
  }]
}];