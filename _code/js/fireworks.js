$(
function(){
      $(document).click(function(event){          /*1.����DIV�����뵽body����          *2.�������ʼλ�ã�TOPΪ��Ļ�ĸ߶ȣ�leftΪ�����ʱ������pageXֵ��          */         //����DIV
	  var $div = $("<div/>");          var eLeft = event.pageX;
	  var etop = 	  event.pageY;          var cHeight = document.documentElement.clientHeight;          //�趨��ɫ����С�������ʼ����λ��          
	  $div.css({"width":4,"height":15,"background-color":"red","top":cHeight,"left":eLeft});          //���뵽ҳ���body����ȥ;
	  $("body").append($div);          //��Ҫ���ֹ�����          
	  $("body").css("overflow","hidden");          //��DIV�����ƶ�,�����ƶ������λ�ú�ɾ�����DIVԪ�أ�֮��ִ���̻�Ч��;          
	  $div.animate({"top":etop},700,function(){              //�Ƴ�DIV             
	  $(this).remove();              /*�̻�Ч��              *1.�̻��Ǻܶ��DIV����              *2.ÿ���̻�����ɫ��һ��              *3.�̻���λ��Ҳ��һ��              *4.�̻�ɢ������һ��              *5.�̻�����׹�о�              */             //��ѭ���콨�ܶ��DIV������ʾ�̻�
	  for(i=0;i<20;i++){                  $("body").append($("<div class='yh'></div>"));              }              /*�̻�����ɫ������ģ���������16���Ʊ�ʾɫֵ����������������16����;              *16���Ƶ����ֵffffff,ת����ʮ����16777215;              *Math.random()*16777215��ʽ���Եõ�0-16777215֮���������Ϊ��С��������Ҫ�õ�ȡ��;              *Math.ceil(Math.random()*16777215)����һ������ɫֵ��Χ�ڵģ������ʮ����ֵ;              *Math.random()*9+1��ʽ���Եõ�1-10֮��������Դ�����              *.toString(16)�������ǰѵõ���ʮ���ƣ�ת����16���ƣ�Ҳ�����������ɫֵ��;              */
	  var sjColor = ""             function changColor(){                  sjColor = Math.ceil(Math.random()*16777215).toString(16)//;                  //������������������ɫֵ������6λ���Ľ�����Ҫ���룬�ֲ��ı���ֵ������Ҫ���������ǰ�����;            
      while(sjColor.length<6){                      sjColor = "0"+sjColor;                  }              }                             //�����̻�DIV����ɫ��λ�á�ɢ����׹��              
	  $(".yh").css({"width":3,"height":3,"top":etop,"left":eLeft});              /*�̻�ɢ��Ҫ�������              *Math.random()*20-20����Ҫ��20������Ϊ�̻��Ǵ����ĵ������ɢ���ģ�              *��С�����ʱ0-10 = -10,��������ʱ20-10=10;���Ծ�������10֮��              */
	  $(".yh").each(function(index, element) {                  var $this = $(this);                  changColor()                  var yhX = Math.random()*400-200;                  var yhY = Math.random()*600-300;                  $this.                  css({"background-color":"#"+sjColor,"width":3,"height":3}).                  animate({"top":etop-yhY,"left":eLeft-yhX},500);//ɢ��                 
	  for(i=0;i<30;i++){                      //�ж������ʱ���ұ��̻���������̻�                      
	  if(yhX<0){                          downPw($this,"+");//����׹                      
	  }else{                          downPw($this,"-");//����׹
	  }                  }                                    //��׹Ч������ͬʱ�ı��̻�Ԫ�ص�X��Y�����������߸о���Ȼ����ɶ�����ɾ������̻�Ԫ��                  
	  function downPw(odiv,f){                      odiv.animate({"top":"+=30","left":f+"=4"},50,function(){                                  setTimeout(function(){odiv.remove()},2000);
	  })                  }              });
	  });
	  })
	  })