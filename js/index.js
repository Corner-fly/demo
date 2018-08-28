$(function(){
	//页面加载完成之后执行
	pageInit();
	$.ajax({
		//url:'data/JSONData.json',
		url:'https://corner-fly.github.io/demo/data/JSONData.json',
                dataType: "json",
                async: false,
                cache: false,
		success:function(data){
			console.log(data);
		}
	})
});
function pageInit(){
	//创建jqGrid组件
	jQuery("#list2").jqGrid(
			{
				height: $(window).height() - 300,// 	表格高度，可以是数字，像素值或者百分比
				autowidth: true,//如果为ture时，则当表格在首次被创建时会根据父元素比例重新调整表格宽度。如果父元素宽度改变，为了使表格宽度能够自动调整则需要实现函数：setGridWidth;，默认值false
				//url : 'data/JSONData.json',//组件创建完成之后请求数据的url
				url : 'https://corner-fly.github.io/demo/data/JSONData.json',//组件创建完成之后请求数据的url
				datatype : "json",//请求数据返回的类型。可选json,xml,txt
				colNames : [ 'Inv No', 'Date', 'Client', 'Amount', 'Tax','Total', 'Notes' ],//jqGrid的列显示名字
				colModel : [ 
							//常用到的属性：name 列显示的名称；index 传到服务器端用来排序用的列名称；width 列宽度；align 对齐方式；sortable 是否可以排序
							//jqGrid每一列的配置信息。包括名字，索引，宽度,对齐方式.....
				             {name : 'id',index : 'id',width : 55}, 
				             {name : 'invdate',index : 'invdate',width : 90}, 
				             {name : 'name',index : 'name asc, invdate',width : 100}, 
				             {name : 'amount',index : 'amount',width : 80,align : "right"}, 
				             {name : 'tax',index : 'tax',width : 80,align : "right"}, 
				             {name : 'total',index : 'total',width : 80,align : "right",fixed: true}, 
				             //fixed: true控制列宽是否可调整
				             {name : 'note',index : 'note',width : 150,sortable : false} ,
				             //格式化数据
//		                      {
//		                      	label: '市场', name: '', width: 100, align: 'center' ,
//			                    	formatter: function (cellvalue, options, rowObject) {
//			                    		var cellvalue2=''+parseInt(2*Math.random());
//		                              switch (cellvalue2) {
//		                                  case "0": return '天津'+cellvalue2
//		                                  	break;
//		                                  case "1": return '沈阳'+cellvalue2
//		                                  	break;
//		                                  default:
//		                                      return '北京';
//		                              }
//		                          }
//		                      },
				           ],
				recordpos: 'left',//定义了记录信息的位置： left, center, right
				rownumbers: false,//如果为ture则会在表格左边新增一列，显示行顺序号，从1开始递增。此列名为'rn'.
				multiselect: true,//定义是否可以多选
				rowNum : 10,//一页显示多少条
				rowList : [ 10, 20, 30 ],//可供用户选择一页显示多少条
				pager : '#pager2',//表格页脚的占位符(一般是div)的id
				sortname : 'id',//初始化的时候排序的字段
				sortorder : "desc",//排序方式,可选desc,asc
				mtype : "post",//向后台请求数据的ajax的类型。可选post,get
				viewrecords : true,
				caption : "JSON Example"//表格的标题名字
			});
	/*创建jqGrid的操作按钮容器*/
	/*可以控制界面上增删改查的按钮是否显示*/
	jQuery("#list2").jqGrid('navGrid', '#pager2', {edit : false,add : false,del : false});
}

//表格重绘,可视区域变化时，jqgrid表格重绘
    $(window).resize(function () { gridList(); });
    //首列加序号
    $(function () { jQuery("#gridList").jqGrid('setLabel', 0, '序号', 'labelstyle'); })
    
