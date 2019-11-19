var ctboxs=document.getElementById('ct1');
var ctbox=ctboxs.getElementsByClassName('ctbox');
var title=ctboxs.getElementsByClassName('title');
var titleWidth=60;
var contentWidth=590;
for(var i=0;i<title.length;i++){
	title[i].index=i;
	title[i].onclick=function(){
		for(var i=0;i<ctbox.lenght;i++){
			if(i<=this.index){
				ctbox[i].style.left=i*titleWidth+'px';
			}else{
			ctbox[i].style.left=i*titleWidth+contentWidth+'px';
			}
		}
	}
 }
// 点击的序号记为N，则ctbox序号小于等于n得时候
// ctbox得left值计算公式为序号*titleWidth
// ctbox序号大于n得时候
// ctbox得left值计算公式为序号*titleWidth+contentWidth
// // 点击第0个标题 0 650 710 770
// 点击第1号标题 0 60 710 770
// 点击第2号标题 0 60 120 770
// 点击第3个标题 0 60 120 180