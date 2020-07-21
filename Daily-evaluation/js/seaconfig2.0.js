seajs.config({

  // 别名配置
  alias: {
	  /***库引用***/
	'jq':'jq/1.11.1/jquery',
    'bs': 'bootstrap/3.3.0/js/bootstrap.min',//引用bootstrap前端框架

	/***所有项目默认模块***/
    'nav': 'common_default/nav_add2.0',//引用整体头部
	'app': 'common_default/appcenter',//引用应用中心的js模块
	'news': 'common_default/newscenter',//引用消息中心的js模块
	'aset':'common_default/account_settings',//引用账户设置的js模块
	
	/**模块或者组件模块**/
	'rach':'common_cadr/radio_checkbox1.2',
	'dw':'common_cadr/dropdown_havevalue',
	'steps':'common_cadr/steps',
	'upfile':'common_cadr/file',
	
	'jq10':'common_cadr/bootstrap-select/jquery-1.10.2.min',
	'bsel':'common_cadr/bootstrap-select/bootstrap-select',

	/****插件***/
	'ci':'plug-in/cropit-master/jquery.cropit',
	'ec':'plug-in/echarts/echarts.common.min',//数据视图插件ec
	'sw':'plug-in/swiper/3.4.1/js/swiper.min',//3.4轮播插件
	'sw2':'plug-in/swiper/2.0/idangerous.swiper.min',//2.0轮播插件	
	'datep':'plug-in/DatePicker/WdatePicker',//
	'fvalid':'plug-in/formvalid/formValidation',//
	'valid':'plug-in/formvalid/validator',//
	'tree':'plug-in/treelist/tree-list',//
	'data_v':'common_cadr/data_view',
	'data_v_s':'common_cadr/data_view-stu',
	'slide':'plug-in/slide/jquery.SuperSlide.2.1.1',
  },

  // 路径配置
  paths: {
	/****数据路径***/ 
	'datas':'define',//默认数据存放路径
	
	/****模块js路径***/
	'com_c':'./js/common_cadr',//公用模块js存放路径
	'com_d':'./js/common_default',//公用模块js存放路径
	
	/****项目模块js路径***/
	
	
  },

  // 变量配置
  vars: {
    'locale': 'zh-cn'
  }
});
