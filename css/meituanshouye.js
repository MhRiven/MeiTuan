var oPicBtn = document.getElementsByClassName('picBtn');
var oBigPic = document.getElementsByClassName('bigPic');
var oBefore = document.getElementById('before');
var oNext = document.getElementById('next');
		console.log(oPicBtn);
		slider()
		
		function slider(){
			
				inter ();
				
				var iNow = 0;
				var timer;
				
				for (var i = 0;i<oPicBtn.length;i++){
					console.log(i)
					bind(i)
				}
				
				function bind(index){
					oPicBtn[index].onclick = function(){
						clearInterval(timer);
						iNow = index;
						console.log('dianji'+index)
					changePic(index)
					inter()
				}
			}
			
			function changePic(index){
				for(var j = 0;j<oBigPic.length;j++){
				oBigPic[j].style.opacity = 0;
				if(j==index){
					oBigPic[index].style.opacity = 1;
				}
			}
		}
			
			//定时器
			function inter (){
		//						var iNow = 0;
				timer = setInterval(function(){
					iNow++;
					console.log('zidong'+iNow)
					if(iNow>=3){
						iNow=0
					}
					changePic(iNow)
				},2000)
			}
			
			//向前
			oBefore.onclick = function(){
				clearInterval(timer);
				iNow--;
				if(iNow<0){
					iNow = oBigPic.length-1;
				}
				console.log('前'+iNow);
				changePic(iNow);
				inter();
			}
			
			//向后
			oNext.onclick = function(){
				clearInterval(timer);
				iNow++;
				if(iNow>oBigPic.length-1){
					iNow = 0;
				}
				console.log('后'+iNow)
					changePic(iNow);
					inter();
				}
		}