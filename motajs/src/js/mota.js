/** GB2312(simplified)
 * jquery�������̬����javascript
 * todo �ҵ����õĿ�������˷���
 */
jQuery.includePlugin = {
  include: function (file) {
    var files = typeof file == "string" ? [file] : file; //array files
    for(var i = 0; i < files.length; i++) {
      var name = files[i].replace(/^\s|\s$/g, "");
      var att = name.split('.');
      var ext = att[att.length - 1].toLowerCase();
      var isCSS = ext == "css";
      var tag = isCSS ? "link" : "script"
        , attr = isCSS ? " type='text/css' rel='stylesheet' " : " language='javascript' type='text/javascript' "
        , link = (isCSS ? "href" : "src") + "='" + name + "'";
      if($(tag + "[" + link + "]").length == 0) { //.
        document.write("<" + tag + attr + link + "></" + tag + ">");
      }
    }
  }
};

//����ʹ�õ���JS�ļ�
$.includePlugin.include(['js/StringBuffer.js', 'js/commons.js', 'js/Constants.js'
  , 'js/Location.js', 'js/BaseGoods.js', 'js/GuaiWu.js', 'js/NPC.js', 'js/PlayerObj.js', 'js/Map.js', 'js/DaMen.js'
  , 'js/AddPropertyGoods.js', 'js/BaseViewGoods.js'
  , 'js/SpeakDialogWin.js', 'js/FightDialogWin.js', 'js/ViewGuaiWin.js', 'js/GouMaiWin.js', 'js/debug.js'
]);
//todo*********************************���峣��
//��ͼ���ӵĿ����߶�
var GRID_WIDTH = 32
  , GRID_HEIGHT = 32;
var LU_ID = 509;
var IMAGE_PATH = "images/";
//Gameʱ��10����=��ʵʱ�䣨��λ�����룩
var YOUXI_SHIJIAN_10_MIAO_ZHENSHI_SHIJIAN = 0; //.200;

//todo*********************************ȫ�ֱ���
//������Ʒ
var goodsArray = new Array();
//�����ͼ
var maps = new Array();
//������ҡ���ǰ��ͼ
var player, currentMap; //.
//����Ի������
var speakWin, fightWin, viewGuaiWin, goumaiWin;
//�����������Կ����
var addPropertyWin = $('<div/>');

//todo*********************************ȫ�ֺ���
function init() {
  //��ʼ��HTML��Ϣ
  initHtmlContent();
  //������Ҷ���
  player = new PlayerObj();
  //��ʼ����Ʒ��Ϣ
  initFillGoods(goodsArray);
  //��ʼ����ͼ
  initMap(maps, goodsArray);
  //��ʼ���Ի���
  speakWin = new SpeakDialogWin(player), fightWin = new FightDialogWin(player)
    , viewGuaiWin = new ViewGuaiWin(player), goumaiWin = new GouMaiWin(player);
  //��ʼ����ǰ��ʾ�ĵ�ͼ
  currentMap = maps[0];
  currentMap.mapView(player, 0);
  //��������Ϣ���Ի���ս�������Կ����Ϣ
  $("#gameFrame").append(player.pagePlayer).
  append(speakWin.pageContainer).append(fightWin.pageContainer).
  append(viewGuaiWin.pageContainer).append(goumaiWin.pageContainer).
  css('display', 'block');
  //ע����Ҽ����¼�
  $(document).bind("keydown", keyDownInDocument);
  $(document).bind("mousedown", keyDownInDocument);
  //���õ��ԣ�Ĭ��Ϊfalse  ���Կ��԰������Ϣ�͹�����Ϣ�ŵ��ڴ��У����Ե������ӡ�����������Ժ͹����������жϴ������
  debugMOTA_init();
  debugMOTA(false); //.
}

function simulateKeyEvent(target, keyCode) {
  if(!target) {
    alert("Target is not exist");
  }
  //
  var customEvent = null;
  var a = typeof document.createEvent;

  if(typeof document.createEvent == "function") {
    try {

      //firefox
      customEvent = document.createEvent("KeyEvents");
      customEvent.initKeyEvent("keypress", true, true, window, false
        , false, false, false, keyCode, keyCode); //.       

    } catch(ex) {

      document.write("Shit happends. This example is only demonstrating event simulation in firefox and IE.");
    }
    target.dispatchEvent(customEvent);

  } else if(document.createEventObject) { //IE

    customEvent = document.createEventObject();

    customEvent.bubbles = true;
    customEvent.cancelable = true;
    customEvent.view = window;
    customEvent.ctrlKey = false;
    customEvent.altKey = false;
    customEvent.shiftKey = false;
    customEvent.metaKey = false;
    customEvent.keyCode = keyCode;

    target.fireEvent("onkeypress", customEvent);

  } else {
    document.write("This example is only demonstrating event simulation in firefox and IE.");
  }
}

function ct() {
  var target;
  if(player.dialogObject.id > 300) {
    target = document.getElementByClass("speakDialogInner");
  } else {
    target = document.getElementById("fightOK");
  }
  target.onkeypress = function (event) {
    var event = (event) ? event : window.event;
    //if(event.keyCode == 32){ alert('"spc" pressed'); }
  };
  //
  simulateKeyEvent(target, 32);
}

function lf() {
  player.moveLeftRight(0, playerCanMove);
}

function rt() {
  player.moveLeftRight(1, playerCanMove);
}

function up() {
  player.moveUpDown(0, playerCanMove);
}

function dn() {
  player.moveUpDown(1, playerCanMove);
}
/*
window.requestAnimFrame = (function(){    //.reduce cpu occupy
	return window.requestAnimationFrame ||    
			window.webkitRequestAnimationFrame ||    
			window.mozRequestAnimationFrame ||    
			window.oRequestAnimationFrame ||    
			window.msRequestAnimationFrame ||    
			function(callback) {    
				window.setTimeout(callback, 1000 / 60);    
			};    
})();*/

function keyDownInDocument() {
  var keyCode = event.keyCode; //.
  if(player.isMoveing) { //����ƶ�(default status)
    if(keyCode == 37) player.moveLeftRight(0, playerCanMove);
    else if(keyCode == 38) player.moveUpDown(0, playerCanMove);
    else if(keyCode == 39) player.moveLeftRight(1, playerCanMove);
    else if(keyCode == 40) player.moveUpDown(1, playerCanMove);
    //else if (keyCode >8) alert(keyCode);		
    else if(keyCode == 84) {
      player.property['jinbi'] += 10000;
      $('#jinbi span').text(player.property['jinbi']);
    } //alert(player.property['jinbi']);}//T
    else if(keyCode == 68) {
      isDebug = 0;
      isDebug = !isDebug;
      $("#motaDebugTd").css("display", (isDebug ? "block" : "none")); //.D
    }
  }

  if(player.isSpeaking) { //��ҶԻ�
    if(keyCode > 8 || event.button >= 0) {
      if(player.dialogObject.id == 601 || player.dialogObject.id == 602 || player.dialogObject.id == 606) { //�������顢�ݿˡ�����
        if(player.dialogObject.isSpeakEnd()) {
          //��һ��˵����������Ҫ��NPC��action���³�1
          if(player.dialogObject.action == 0) {
            //����actionǰ��Ҫ�жϴ˶��¼��Ľ����Ƿ��Ѿ�����
            player.dialogObject.geiyuJiangLi(player);
            if(player.dialogObject.id == 601) { //����
            } else if(player.dialogObject.id == 602) { //�ݿ�
              //�ݿ˵Ľ����ǰ�2���ͨ����
              maps[2].datas[6][1] = goodsArray[LU_ID].clone();
            } else if(player.dialogObject.id == 606) { //����
              //������ͨ��19¥��ͨ��
              maps[18].changeMapContent(new Location(10, 10), goodsArray[507].clone());
            }
            player.dialogObject.action = 1;
          } else if(player.dialogObject.action == 1) {
            if(player.goods[player.dialogObject.speakArray[player.dialogObject.action].xuyaowupin] > 0) {
              player.dialogObject.geiyuJiangLi(player);
              player.goods[player.dialogObject.speakArray[player.dialogObject.action].xuyaowupin]--;
              if(player.dialogObject.id == 601) {

              } else if(player.dialogObject.id == 602) {
                //�ݿ˵Ľ����ǰ�18�㹫����ͨ����
                maps[18].datas[7][5] = goodsArray[306].clone();
              } else if(player.dialogObject.id == 606) { //����
                //Game����
                finishDongHua(null);
              }
            }
          }
          speakWin.close();
        } else {
          speakWin.show(player.dialogObject.getSpeakMsg());
        }
      } else if(player.dialogObject.id == 301 || player.dialogObject.id == 302 || player.dialogObject.id == 303 || //Կ��
        player.dialogObject.id == 304 || player.dialogObject.id == 305 || player.dialogObject.id == 306 || //����
        player.dialogObject.id == 307 || player.dialogObject.id == 308 || player.dialogObject.id == 312 || //��ʯ
        player.dialogObject.id == 309 || player.dialogObject.id == 310 || player.dialogObject.id == 323 || player.dialogObject.id == 324 || //Ѫƿ��ʥˮ
        player.dialogObject.id == 313 || player.dialogObject.id == 315 || player.dialogObject.id == 320 || //����
        player.dialogObject.id == 321 || player.dialogObject.id == 325 || player.dialogObject.id == 326 || //����
        player.dialogObject.id == 314 || player.dialogObject.id == 316 || player.dialogObject.id == 318 || //�ƽ��䡢�Ŵ���ҡ�ʥĸʮ�ּ�
        player.dialogObject.id == 319 || player.dialogObject.id == 322 || //��Ӱѥ����ͷ
        player.dialogObject.id == 311 || player.dialogObject.id == 317 || //����鿴�顢������
        player.dialogObject.id == 603 || player.dialogObject.id == 604 ||
        player.dialogObject.id == 655 || player.dialogObject.id == 656 //����������
      ) {
        player.updatePageInfo();
        speakWin.close();
      } else if(player.dialogObject.id <= 300) { //�������ܴ�Ĺ���
        speakWin.close();
      } else if(player.dialogObject.id == 605 || player.dialogObject.id == 650 || player.dialogObject.id == 651 ||
        player.dialogObject.id == 652 || player.dialogObject.id == 653 || player.dialogObject.id == 654) { //�����̵�
        player.isGouMai = true;
        speakWin.close();
        player.isMoveing = false;
        return false;
      }
    }
  }

  if(player.isFighting) { //��Ҵ���
    if((keyCode > 8 || event.button >= 0) && $("#fightOK").css('display') == 'block') { //== 32
      if(player.dialogObject.id == 32) {
        player.goods["damowang"]++;
      }
      player.updatePageInfo();
      fightWin.close();
    }
  }

  if(player.isGouMai) {
    if(keyCode == 49 || keyCode == 50 || keyCode == 51 || keyCode == 52) {
      var ret;
      if(keyCode == 49) { //���ּ�1
        ret = goumaiWin.click1(player.dialogObject.id);
      } else if(keyCode == 50) { //���ּ�2
        ret = goumaiWin.click2(player.dialogObject.id);
      } else if(keyCode == 51) { //���ּ�3
        ret = goumaiWin.click3(player.dialogObject.id);
      } else if(keyCode == 52) {
        ret = goumaiWin.click4(player.dialogObject.id);
      }
      if(ret.addPropertyFlag) {
        addPlayerProperty(player, speakWin, ret.addPropertyObj, ret.conditionObj);
        player.updatePageInfo();
      } else {
        return false;
      }
    } else if(keyCode == 32) {
      goumaiWin.close();
    }
  }

  if(player.goods['viewGuaiBook'] > 0) { //�鿴����
    if(!player.isSpeaking && !player.isFighting && !player.isGouMai) { //l�� look��˼
      if(keyCode == 76 && !player.isViewGuai) {
        viewGuaiWin.show(currentMap);
      } else {
        if(player.isViewGuai && (keyCode == 76 || keyCode == 32)) {
          viewGuaiWin.close();
        }
      }
    }
  }
  //����г����û��˵����û�ڴ��̣�û��������û�ڲ鿴������Է���
  if(!player.isSpeaking && !player.isFighting && !player.isGouMai && !player.isViewGuai && player.goods['feixingqi'] > 0) {
    if(keyCode == 87) { //��W�������Ϸ���
      if(player.visitMaxFloor > currentMap.floor) {
        player.isMoveing = false;
        currentMap = maps[currentMap.floor + 1];
        currentMap.mapView(player, 0);
      }
    } else if(keyCode == 83) { //��S�����·���
      if(currentMap.floor > 0) {
        player.isMoveing = false;
        currentMap = maps[currentMap.floor - 1];
        currentMap.mapView(player, 0);
      }
    }
  }
  return true;
}

function playerCanMove(p_location) {
  if(p_location.x < 0 || p_location.x > currentMap.columns || p_location.y < 0 || p_location.y > currentMap.rows) return false;
  var tmpObj = currentMap.getLocationObj(p_location);
  //��·������ͨ��
  if(tmpObj.id == LU_ID) {
    return true;
  } else if(tmpObj.id == 510) { //��·�ţ���������ʧ
    currentMap.changeMapContent(p_location, goodsArray[LU_ID]);
    return true;
  } else if(tmpObj.id <= 300) { //����
    player.dialogObject = tmpObj;
    //��ҵ���󹥻������ܴ�ܵ��˵���С��������ʾ�޷�����
    var ret = computeFightLossLife(player.property['gongjiMax'], player.property['fangyu'], player.property['sudu'], tmpObj.property['gongjiMin'], tmpObj.property['fangyu'], tmpObj.property['sudu'], tmpObj.property['shengming']);
    if(ret.life > player.property['shengming']) {
      speakWin.show(getTipWordMsg("�����ڻ��޷���{0}���п��⣬��ץ��ʱ����������", [tmpObj.name], "red", "11pt"));
      return false;
    } else {
      fightWin.show(tmpObj);
      currentMap.changeMapContent(p_location, goodsArray[LU_ID]);
      return true;
    }
  } else if(tmpObj.id == 304 || tmpObj.id == 305 || tmpObj.id == 306) { //������ͬ��ɫԿ�׵���
    player.dialogObject = tmpObj;
    if(addPlayerProperty(player, speakWin, {
        des: tmpObj.successDes
        , property_array: new Array()
      }, {
        property: tmpObj.conditionPropertyName
        , value: 1
        , des: tmpObj.failedDes
      })) {
      currentMap.changeMapContent(p_location, goodsArray[LU_ID]);
      return true;
    }
  } else if(tmpObj.id == 301 || tmpObj.id == 302 || tmpObj.id == 303 || //Կ��
    tmpObj.id == 307 || tmpObj.id == 308 || tmpObj.id == 312 || //��ʯ
    tmpObj.id == 309 || tmpObj.id == 310 || tmpObj.id == 323 || //Ѫƿ
    tmpObj.id == 313 || tmpObj.id == 315 || tmpObj.id == 320 || //���� 
    tmpObj.id == 321 || tmpObj.id == 325 || tmpObj.id == 326 || //����
    tmpObj.id == 314 || tmpObj.id == 316 || tmpObj.id == 319 || //�ƽ��䡢�Ŵ���ҡ���Ӱѥ
    tmpObj.id == 603 || tmpObj.id == 604 || tmpObj.id == 655 || tmpObj.id == 656 //2�����ˡ�15������
  ) {
    player.dialogObject = tmpObj;
    if(addPlayerProperty(player, speakWin, {
        des: tmpObj.gainGoodsDes
        , property_array: tmpObj.addPropertyArray
      }, tmpObj.conditionObj)) {
      currentMap.changeMapContent(p_location, goodsArray[LU_ID]);
      return true;
    }
    return false;
  } else if(tmpObj.id == 324) { //ʥˮ
    player.dialogObject = tmpObj;
    player.property['shengming'] *= 2; //.*= 2
    currentMap.changeMapContent(p_location, goodsArray[LU_ID]);
    speakWin.show(getTipWordMsg(tmpObj.gainGoodsDes, [tmpObj.name], "red", "11pt"));
    return true;
  } else if(tmpObj.id == 311 || tmpObj.id == 317 || tmpObj.id == 318 || tmpObj.id == 322) { //�鿴����֮�顢��������ʥĸʮ�ּܡ���ͷ
    player.goods[tmpObj.gainGoodsObj.property]++;
    currentMap.changeMapContent(p_location, goodsArray[LU_ID]);
    player.dialogObject = tmpObj;
    speakWin.show(getTipWordMsg(tmpObj.gainGoodsObj.des, tmpObj.gainGoodsObj.tipDes, "red", "11pt"));
    return true;
  } else if(tmpObj.id == 605 || tmpObj.id == 650 || tmpObj.id == 651 || tmpObj.id == 652 ||
    tmpObj.id == 653 || tmpObj.id == 654) { //����Ի�
    player.dialogObject = tmpObj;
    goumaiWin.show(tmpObj.id);
    return false;
  } else if(tmpObj.id == 601 || tmpObj.id == 602 || tmpObj.id == 606) { //���顢�ݿˡ�����
    player.dialogObject = tmpObj;
    if(tmpObj.action == 0) {
      speakWin.show(tmpObj.getSpeakMsg());
      return false;
    } else if(tmpObj.action == 1) {
      if(player.goods[tmpObj.speakArray[tmpObj.action].xuyaowupin] > 0) {
        currentMap.changeMapContent(p_location, goodsArray[LU_ID]);
        tmpObj.visitNum = 1;
        speakWin.show(tmpObj.getSpeakMsg());
        return true;
      } else {
        speakWin.show(tmpObj.getSpeakMsg());
        return false;
      }
    }
  } else if(tmpObj.id == 507 || tmpObj.id == 508) { //��¥����¥
    player.isMoveing = false;
    var tmpFloor, tmpPlayerPosition;
    if(tmpObj.id == 507) {
      tmpFloor = currentMap.floor + 1;
      tmpPlayerPosition = 0;
      if(currentMap.floor + 1 >= player.visitMaxFloor) {
        player.visitMaxFloor = currentMap.floor + 1;
      }
    } else if(tmpObj.id == 508) {
      tmpFloor = currentMap.floor - 1;
      tmpPlayerPosition = 1;
    }
    currentMap = maps[tmpFloor];
    currentMap.mapView(player, tmpPlayerPosition);
    return false;
  }
  return false;
}

$(document).ready(function () {
  $("#beginGameBtn").click(function () {
    init();
  });
});