var srr = [{
				"src": "img/maoyandianying/dahuangfeng.jpg",
				"srcmax": "img/maoyandianying/imax3d.png",
				"shadow":"",
				"name": "大黄蜂",
				"inf": "9.1",
				"goupiao": "购 票 "
			},
			{
				"src": "img/maoyandianying/darenwu1.jpg",
				"srcmax": "img/maoyandianying/imax3d.png",
				"shadow":"",
				"name": "“大”人物",
				"inf": "9.2",
				"goupiao": "购 票 "
			},
			{
				"src": "img/maoyandianying/feichirensheng.jpg",
				"srcmax": "img/maoyandianying/imax3d.png",
				"shadow":"",
				"name": "飞驰人生",
				"inf": "",
				"goupiao": "购 票 "
			},
			{
				"src": "img/maoyandianying/xinxiju.jpg",
				"srcmax": "img/maoyandianying/imax3d.png",
				"shadow":"",
				"name": "新喜剧之王",
				"inf": "",
				"goupiao": "购 票 "
			},
			{
				"src": "img/maoyandianying/baishe.jpg",
				"srcmax": "img/maoyandianying/imax3d.png",
				"shadow":"",
				"name": "白蛇：缘起",
				"inf": "9.4",
				"goupiao": "购 票 "
			},
			{
				"src": "img/maoyandianying/fengkuangdewaixingren.jpg",
				"srcmax": "img/maoyandianying/imax3d.png",
				"shadow":"",
				"name": "疯狂的外星人",
				"inf": "",
				"goupiao": "购 票 "
			},
			{
				"src": "img/maoyandianying/laidian.jpg",
				"srcmax": "img/maoyandianying/imax3d.png",
				"shadow":"",
				"name": "来电狂响",
				"inf": "8.6",
				"goupiao": "购 票 "
			},
			{
				"src": "img/maoyandianying/mingyun.jpg",
				"srcmax": "img/maoyandianying/imax3d.png",
				"shadow":"",
				"name": "命运之夜",
				"inf": "8.4",
				"goupiao": "购 票 "
			}]


var srr1 = [{
				"src1": "img/maoyandianying/woxiangchidiao.jpg",
				"shadow1":"",
				"name1": "我想吃掉你的胰脏",
				"xiangkan": "56217人想看",
				"yugao": "预告片",
				"yushou": "预售",
				"shangyin":"1月18日上映"
			},
			{
				"src1": "img/maoyandianying/mishi.jpg",
				"shadow1":"",
				"name1": "密室逃生",
				"xiangkan": "20743人想看",
				"yugao": "预告片",
				"yushou": "预售",
				"shangyin":"1月18日上映"
			},
			{
				"src1": "img/maoyandianying/yitiaogou.jpg",
				"shadow1":"",
				"name1": "一条狗的回家路",
				"xiangkan": "20723人想看",
				"yugao": "预告片",
				"yushou": "预售",
				"shangyin":"1月18日上映"
			},
			{
				"src1": "img/maoyandianying/lueshi.jpg",
				"shadow1":"",
				"name1": "掠食城市",
				"xiangkan": "15865人想看",
				"yugao": "预告片",
				"yushou": "预售",
				"shangyin":"1月18日上映"
			},
			{
				"src1": "img/maoyandianying/jiahe.jpg",
				"shadow1":"",
				"name1": "家和万事惊",
				"xiangkan": "12042人想看",
				"yugao": "预告片",
				"yushou": "预售",
				"shangyin":"1月18日上映"
			},
			{
				"src1": "img/maoyandianying/aoteman.jpg",
				"shadow1":"",
				"name1": "钢铁飞龙之奥特曼",
				"xiangkan": "11054人想看",
				"yugao": "预告片",
				"yushou": "预售",
				"shangyin":"1月18日上映"
			},
			{
				"src1": "img/maoyandianying/chuangtangtu.jpg",
				"shadow1":"",
				"name1": "闯堂兔3囧囧时光机",
				"xiangkan": "7669人想看",
				"yugao": "预告片",
				"yushou": "预售",
				"shangyin":"1月18日上映"
			},
			{
				"src1": "img/maoyandianying/fengkuangdewaixingren.jpg",
				"shadow1":"",
				"name1": "疯狂的外星人",
				"xiangkan": "59217人想看",
				"yugao": "预告片",
				"yushou": "预售",
				"shangyin":"1月18日上映"
			}]

var srr2 = [{
				"src2": "img/maoyandianying/qianren.jpg",
				"shadow2":"",
				"name2": "前任攻略",
				"inf2": "9.0"
			},
			{
				"src2": "img/maoyandianying/jixiansudi.png",
				"shadow2":"",
				"name2": "极限速递",
				"inf2": "9.2"
			},
			{
				"src2": "img/maoyandianying/ligui.jpg",
				"shadow2":"",
				"name2": "厉鬼将映",
				"inf2": "7.2"
			},
			{
				"src2": "img/maoyandianying/xialuote.jpg",
				"shadow2":"",
				"name2": "夏洛特烦恼",
				"inf2": "8.7"
			},
			{
				"src2": "img/maoyandianying/zhanlang.jpg",
				"shadow2":"",
				"name2": "战狼",
				"inf2": "9.5"
			},
			{
				"src2": "img/maoyandianying/tangrenjie.jpg",
				"shadow2":"",
				"name2": "唐人街探案",
				"inf2": "8.9"
			}]

				
			var oHeader = document.getElementById('xiding');
			var oTop = document.getElementById('huidaodingbu');
			document.onscroll = function(){
			var top = document.documentElement.scrollTop;
			console.log(top)
			if(top>200){
				oHeader.style.position = 'fixed';
			}else{ 
				oHeader.style.position = 'static';
			}
		}
			oTop.onclick = function(){
				document.documentElement.scrollTop = 0;
			}
				

			window.onload = function(){
			//01.准备商品详情样式布局
			//02.访问数据(数组)中每一个商品信息
			//03.用得到的数据	拼接样式模板	es6字符串模板
			
			var oBox = document.getElementById('film');
			var str = '';
			
			for(var i = 0;i<srr.length;i++){
			str += `<div class="film">
				<img src="${srr[i].src}" class="gPic"/>
				<img src="${srr[i].srcmax}" class="gImax"/>
				<div class="shadow">${srr[i].shadow}</div>
				<p class="gName">${srr[i].name}</p>
				<p class="gInf">${srr[i].inf}</p>
				<p class="goupiao">${srr[i].goupiao}</p>
			</div>` ;
//				console.log(strm)
				oBox.innerHTML = str;
			}
			
			var oBox1 = document.getElementById('film3');
			var str1 = '';
			
			for(var j = 0;j<srr.length;j++){
			str1 += `<div class="film3">
				<img src="${srr1[j].src1}" class="gPic1"/>
				<div class="shadow1">${srr1[j].shadow1}</div>
				<p class="gName1">${srr1[j].name1}</p>
				<p class="xiangkan">${srr1[j].xiangkan}</p>
				<div class="yugao">${srr1[j].yugao}</div>
				<div class="yushou">${srr1[j].yushou}</div>
				<div class="shangyin">${srr1[j].shangyin}</div>
			</div>` ;
//				console.log(strm)
				oBox1.innerHTML = str1;
			}
			
			var oBox2 = document.getElementById('film4');
			var str2 = '';
			
			for(var k = 0;k<srr2.length;k++){
			str2 += `<div class="film4">
				<img src="${srr2[k].src2}" class="gPic2"/>
				<div class="shadow2">${srr2[k].shadow2}</div>
				<p class="gName2">${srr2[k].name2}</p>
				<p class="gInf2">${srr2[k].inf2}</p>
			</div>` ;
//				console.log(strm)
				oBox2.innerHTML = str2;
			}
//				console.log(oBoxm);
}