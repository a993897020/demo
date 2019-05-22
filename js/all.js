window.onload=function(){
			var Next=document.getElementsByClassName('Next');
			var img_li=document.getElementsByClassName('T_bg');
			for(var i=0;i<Next.length;i++){
				Next[i].index=i;
				
				Next[i].onmousedown=function(){
					for(var i=0;i<Next.length;i++){
						Next[i].id='';
						img_li[i].style.display='none'
						console.log(Next[i]);
						img_li[i].style.opacity=0;
					}
					this.id='active';
					img_li[this.index].style.display='block';
					console.log(this.index);
					startMove(img_li[this.index],{opacity:100})
				}
			}
			
			
			var C5_ul=document.getElementsByClassName('C5_ul')[0];
			var C5_li=C5_ul.getElementsByTagName('li');
			var C5_pp=document.getElementsByClassName('C5_pp');
			for(var i=0;i<C5_li.length;i++){
					C5_li[i].index=i;
				C5_li[i].onmousedown=function(){
					for(var i=0;i<C5_li.length;i++){
						C5_li[i].id='';
						C5_pp[i].id='';
					}
					C5_li[this.index].id='C5_btn';
					C5_pp[this.index].id='C5_p';
				}
			}
			
			
			var num1=0;
			var num2=0;
			var num3=0;
			//问题：计时器时间一致
			t1=setInterval(function(){
				num1++;
				var C5_l_num1=document.getElementById('C5_l_num1');
				C5_l_num1.innerText=num1*2;
				if(num1==425){
					clearInterval(t1);
					t1=null;
				}
			},3);
			t2=setInterval(function(){
				num2++;
				var C5_l_num2=document.getElementById('C5_l_num2');
				C5_l_num2.innerText=num2*10;
				if(num2==800){
					clearInterval(t2);
					t2=null;
				}		
			},1);
			t3=setInterval(function(){
				num3++;
				var C5_l_num3=document.getElementById('C5_l_num3');
				C5_l_num3.innerText=num3;
				if(num3==95){
					clearInterval(t3);
					t3=null;
				}
			},12);
			
			
			var C6_btn=document.getElementsByClassName('C6_btn')[0];
			var C6_btn_li=C6_btn.getElementsByTagName('li');
			var C6_img=document.getElementsByClassName('C6_img')[0];
			var C6_img_p=C6_img.getElementsByTagName('img');
			for(var i=0;i<C6_btn_li.length;i++){
				C6_btn_li[i].index=i;
				C6_btn_li[i].onmousedown=function(){
					for(var i=0;i<C6_btn_li.length;i++){
						C6_btn_li[i].id='';
						C6_img_p[this.index].style.opacity='block';
					}
					C6_img_p[this.index].style.display='none';
					C6_btn_li[this.index].id='C6_active';
				}
			}
			
			
		}