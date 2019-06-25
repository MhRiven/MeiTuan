var srr = [{
				"src": "img/shangpinliebiao/12.jpg",
				"name": "旺顺阁鱼头泡饼(长阳半岛)",
				"xing": "img/cainixihuan/xing.png",
				"pingjia": "一般 3.5分 0人评价 ",
				"place": "朝阳区建国路93号新世界百货1层",
				"price":"¥95.0",
				"map":"查看地图"
			},
			{
				"src": "img/shangpinliebiao/2.png",
				"name": "烧烤吧",
				"xing": "img/cainixihuan/xing.png",
				"pingjia": "一般 3.5分 0人评价 ",
				"place": "朝阳区老君堂中路90号附近",
				"price":"¥85.0",
				"map":"查看地图"
			},
			{
				"src": "img/shangpinliebiao/16.png",
				"name": "网吧台球电竞一体",
				"xing": "img/cainixihuan/xing.png",
				"pingjia": "一般 3.5分 0人评价 ",
				"place": "海淀区民族大学西路东150米",
				"price":"¥25.0",
				"map":"查看地图"
			},
			{
				"src": "img/shangpinliebiao/17.png",
				"name": "赛特购物中心店",
				"xing": "img/cainixihuan/xing.png",
				"pingjia": "一般 3.5分 0人评价 ",
				"place": "朝阳区建国门外大街22号赛特购物中心",
				"price":"¥55.0",
				"map":"查看地图"
			},
			{
				"src": "img/shangpinliebiao/18.png",
				"name": "3D主题体验馆",
				"xing": "img/cainixihuan/xing.png",
				"pingjia": "一般 3.5分 0人评价 ",
				"place": "丰台区丰台路28号",
				"price":"¥75.0",
				"map":"查看地图"
			},
			{
				"src": "img/shangpinliebiao/19.png",
				"name": "新世界百货彩旋店",
				"xing": "img/cainixihuan/xing.png",
				"pingjia": "一般 3.5分 0人评价 ",
				"place": "朝阳区朝阳大望路建国路辅路",
				"price":"¥35.0",
				"map":"查看地图"
			},
			{
				"src": "img/shangpinliebiao/15.jpg",
				"name": "G-SHOCK手表专营店",
				"xing": "img/cainixihuan/xing.png",
				"pingjia": "一般 3.5分 0人评价 ",
				"place": "顺义区新顺南大街18号新世界百货",
				"price":"¥599.0",
				"map":"查看地图"
			},
			{
				"src": "img/shangpinliebiao/8.jpg",
				"name": "家乐福购物广场",
				"xing": "img/cainixihuan/xing.png",
				"pingjia": "一般 3.5分 0人评价 ",
				"place": "东城区崇文门外大街3-5号家乐福",
				"price":"¥9.9",
				"map":"查看地图"
			}]


var srrc = [{
				"srcc": "img/shangpinliebiao/7.jpg",
				"namec": "旺顺阁鱼头泡饼",
				"srcx": "img/shangpinliebiao/xing.png",
				"pingjiac": "134个评价 ",
				"placec": "长阳镇",
				"pricec":"¥95.0",
				"qi":"起"
			},
			{
				"srcc": "img/shangpinliebiao/1.jpg",
				"namec": "金真子纸上烤肉",
				"srcx": "img/shangpinliebiao/xing.png",
				"pingjiac": "11961个评价 ",
				"placec": "双桥",
				"pricec":"¥59.9",
				"qi":"起"
			},
			{
				"srcc": "img/shangpinliebiao/4.jpg",
				"namec": "犟骨头排骨饭",
				"srcx": "img/shangpinliebiao/xing.png",
				"pingjiac": "324个评价 ",
				"placec": "回龙观",
				"pricec":"¥21.0",
				"qi":"起"
			},
			{
				"srcc": "img/shangpinliebiao/10.jpg",
				"namec": "比亚森",
				"srcx": "img/shangpinliebiao/xing.png",
				"pingjiac": "41149个评价 ",
				"placec": "顺义城区",
				"pricec":"¥59.6",
				"qi":"起"
			},
			{
				"srcc": "img/shangpinliebiao/3.jpg",
				"namec": "胖哥俩肉蟹煲",
				"srcx": "img/shangpinliebiao/xing.png",
				"pingjiac": "270个评价 ",
				"placec": "西单",
				"pricec":"¥126",
				"qi":"起"
			},
			{
				"srcc": "img/shangpinliebiao/6.jpg",
				"namec": "老诚一锅",
				"srcx": "img/shangpinliebiao/xing.png",
				"pingjiac": "219个评价 ",
				"placec": "菜市口/陶然亭",
				"pricec":"¥59.6",
				"qi":"起"
			},
			{
				"srcc": "img/shangpinliebiao/5.jpg",
				"namec": "金滏山自助烤肉",
				"srcx": "img/shangpinliebiao/xing.png",
				"pingjiac": "18022个评价 ",
				"placec": "劲松",
				"pricec":"¥55.0",
				"qi":"起"
			}]

				//吸顶,回到顶部
			var oHeader = document.getElementById('tonglan');
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
			
			var oBox = document.getElementById('gBox');
			var str = '';
			
			for(var j = 0;j<srr.length;j++){
			str += `<div class="goods">
				<img src="${srr[j].src}" class="gPic"/>
				<p class="gName">${srr[j].name}</p>
				<img src="${srr[j].xing}" class="xing"/>
				<p class="pingjia">${srr[j].pingjia}</p>
				<span class="place">${srr[j].place}</span>
				<span class="price">${srr[j].price}</span>
				<span class="map">${srr[j].map}</span>
			</div>` ;
//				console.log(strm)
				oBox.innerHTML = str;
			}
//				console.log(oBoxm);


			var oBoxc = document.getElementById('gBoxc');
			var strc = '';
			
			for(var k = 0;k<srrc.length;k++){
			strc += `<div class="goodsc">
				<img src="${srrc[k].srcc}" class="gPicc"/>
				<p class="gNamec">${srrc[k].namec}</p>
				<img src="${srrc[k].srcx}" class="xingc"/>
				<p class="pingjiac">${srrc[k].pingjiac}</p>
				<span class="placec">${srrc[k].placec}</span>
				<span class="pricec">${srrc[k].pricec}</span>
				<span class="qi">${srrc[k].qi}</span>		
			</div>` ;
//				console.log(str)
				oBoxc.innerHTML = strc;
			}
//				console.log(oBox);

}