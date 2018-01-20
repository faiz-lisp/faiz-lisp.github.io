/**
 * ս���� Download by http://www.codefans.net
 * @param p_player ��Ҷ���
 */
function FightDialogWin(p_player) {
  this.player = p_player;
  this.pageContainer = $('<div/>');
  var fightLeftDiv = $('<div class="duizhanInfoWin"></div>');
  fightLeftDiv.append($('<img id="fightImage" src="' + IMAGE_PATH + 'player_2.jpg" style="margin-top:10px;"/>')).
          append('<div id="fightTimer" class="fightTimer"/>');
  $('<ul style="list-style:none;margin-left:4px;text-align:left;"/>').
          append($('<li>������<span id="fightShengming"></span></li>')).
          append($('<li>������<span id="fightGongji"></span></li>')).
          append($('<li>������<span id="fightFangyu"></span></li>')).
          append($('<li>�ٶȣ�<span id="fightSudu"></span></li>')).
          appendTo(fightLeftDiv);
  var fightMiddleDiv = $('<div id="fightingWindow" class="duizhanContentWin" ></div>');
  var fightRightDiv = $('<div class="duizhanInfoWin"></div>');
  fightRightDiv.append($('<img id="fightGImage" style="margin-top:10px;"/>')).
          append('<div class="closeFightInfo" id="fightOK">�����ո������</div>');
  $('<ul style="list-style:none;margin-left:4px;text-align:left;"/>').
          append($('<li>������<span id="fightGShengming"></span></li>')).
          append($('<li>������<span id="fightGGongji"></span></li>')).
          append($('<li>������<span id="fightGFangyu"></span></li>')).
          append($('<li>�ٶȣ�<span id="fightGSudu"></span></li>')).
          appendTo(fightRightDiv);
  this.pageContainer.append(fightLeftDiv).append(fightMiddleDiv).append(fightRightDiv).
          addClass('fightWinCss').css('display', 'none');
}

/**
 * ��ʾս������
 * @param p_guaiwu �������
 */
FightDialogWin.prototype.show = function(p_guaiwu) {
  this.player.isFighting = true;
  this.player.isMoveing = false;
  //����ս����������ʾ
  $("#fightOK").css("display", "none");
  //���������Ϣ
  $('#fightShengming', this.pageContainer).text(this.player.property['shengming']);
  $('#fightGongji', this.pageContainer).text(this.player.property['gongjiMin'] + " - " + this.player.property['gongjiMax']);
  $('#fightFangyu', this.pageContainer).text(this.player.property['fangyu']);
  $('#fightSudu', this.pageContainer).text(this.player.property['sudu']);
  //���ù�����Ϣ
  $('#fightGImage', this.pageContainer).attr('src', p_guaiwu.image);
  $('#fightGShengming', this.pageContainer).text(p_guaiwu.property['shengming']);
  $('#fightGGongji', this.pageContainer).text(p_guaiwu.property['gongjiMin'] + " - " + p_guaiwu.property['gongjiMax']);
  $('#fightGFangyu', this.pageContainer).text(p_guaiwu.property['fangyu']);
  $('#fightGSudu', this.pageContainer).text(p_guaiwu.property['sudu']);
  //������̹���
  var pSM = this.player.property['shengming'],gSM = p_guaiwu.property['shengming'];
  var shijianmiao = 1;
  var gongjizhi,tmpSuiji,dspFlag,str = new StringBuffer();
  str.append("<br><div class='fightLineStyle' id='fightBeginDiv' miaotype='0'>�����<span class='fightGuaiDsp'>" + p_guaiwu.name + "</span>˵ȥ���ɣ�</div><br><br>");
  var huiheshuNum = 0;
  while (true) {
    if (shijianmiao % this.player.property['sudu'] == 0) {
      tmpSuiji = getRandomInt(0, 150);
      if (tmpSuiji <= 10 + this.player.property['shiqi']) {
        dspFlag = true;
        gongjizhi = this.player.property['gongjiMax'] - p_guaiwu.property['fangyu'];
      } else {
        dspFlag = false;
        gongjizhi = getRandomInt(this.player.property['gongjiMin'], this.player.property['gongjiMax']) - p_guaiwu.property['fangyu'];
      }
      if (gongjizhi <= 1)gongjizhi = 1;
      str.append("<div class='fightLineStyle' id='playPKguai" + shijianmiao + "' miaotype='" + shijianmiao + "'>��" + shijianmiao + "��&nbsp;�����<span class='fightGuaiDsp'>" + p_guaiwu.name + "</span>һ�£�");
      if (dspFlag) {
        str.append("<span class='fightShiQiDsp'>���ʿ�����ǣ�</span>")
      }
      //�����Ѷȣ����0-150֮��������
      tmpSuiji = getRandomInt(0, 150);
      if (tmpSuiji <= 10 + this.player.property['fuyuan'] && tmpSuiji > 5 + this.player.property['fuyuan']) {
        str.append("<span class='fightFenNuDsp'>��ͻȻ��ŭ��</span>��");
        gongjizhi *= 2;
      } else if (tmpSuiji <= 5 + this.player.property['fuyuan'] && tmpSuiji > 1 + this.player.property['fuyuan']) {
        str.append("<span class='fightFenNuJiDianDsp'>��ǳ���ŭ</span>��");
        gongjizhi *= 3;
      } else if (tmpSuiji <= 1 + this.player.property['fuyuan']) {
        str.append("<span class='fightRanShaoDsp'>���ŭ֮����</span>��");
        gongjizhi *= 5;
      }
      gSM -= gongjizhi;
      str.append("������<span class='fightTiXingDsp'>" + gongjizhi + "</span>Ѫ<br><br></div>");
      huiheshuNum++;
      if (gSM <= 0) break;
    }
    if (shijianmiao % p_guaiwu.property['sudu'] == 0) {
      gongjizhi = getRandomInt(p_guaiwu.property['gongjiMin'], p_guaiwu.property['gongjiMax']) - this.player.property['fangyu'];
      if (gongjizhi <= 1)gongjizhi = 1;
      str.append("<div  class='fightLineStyle' id='guaiPKplayer" + shijianmiao + "' miaotype='" + shijianmiao + "'>��" + shijianmiao + "��&nbsp;<span class='fightGuaiDsp'>" + p_guaiwu.name + "</span>������һ�£�");
      tmpSuiji = getRandomInt(0, 100);
      //������0-100���
      if (tmpSuiji <= 10 && tmpSuiji > 5) {
        str.append("<span class='fightFenNuDsp'>��ͻȻ��ŭ��</span>��");
        gongjizhi *= 2;
      } else if (tmpSuiji <= 5 && tmpSuiji > 1) {
        str.append("<span class='fightFenNuJiDianDsp'>���ǳ���ŭ</span>��");
        gongjizhi *= 3;
      } else if (tmpSuiji <= 1) {
        str.append("<span class='fightRanShaoDsp'>����ŭ֮����</span>��");
        gongjizhi *= 5;
      }
      pSM -= gongjizhi;
      str.append("������<span class='fightTiXingDsp'>" + gongjizhi + "</span>Ѫ<br><br></div>");
      if (pSM <= 0) break;
    }
    shijianmiao++;
  }
  if (pSM <= 0) {
//    str.append("<div class='fightLineStyle'>���Ѿ�û�������ˣ����ﻹʣ</div><span class='fightTiXingDsp'>" + (p_guaiwu.property['shengming'] - gSM) + "</span>Ѫ��");
//    $("#fightingWindow", this.pageContainer).attr('innerHTML', str);
//    this.pageContainer.css('display', 'block');
//    this.player.isFighting = false;
    //��ұ������������ʾ��������
    this.close(finishDongHua(p_guaiwu));
  } else {
    //ս��ʤ��
    var jingyan,jinbi;
    tmpSuiji = getRandomInt(0, 150);
    if (tmpSuiji <= 10 + this.player.property['xingyun']) {
      dspFlag = true;
      jingyan = p_guaiwu.property['jingyanMax'];
      jinbi = p_guaiwu.property['jinbiMax'];
    } else {
      dspFlag = false;
      jingyan = getRandomInt(p_guaiwu.property['jingyanMin'], p_guaiwu.property['jingyanMax']);
      jinbi = getRandomInt(p_guaiwu.property['jinbiMin'], p_guaiwu.property['jinbiMax']);
    }

    str.append("<div class='fightLineStyle' id='fightFinishDiv' miaotype='").append(shijianmiao).
            append("'>ս��ʤ��������ʧ��<span class='fightTiXingDsp'>").append(this.player.property['shengming'] - pSM).
            append("</span>Ѫ����������<span class='fightTiXingDsp'>").append(huiheshuNum).append("</span>�غϣ�");
    if (dspFlag) {
      str.append("<span class='fightTiXingDsp'>�����������</span>��");
    }
    str.append("������<span class='fightTiXingDsp'>" + jingyan +
            "</span>�����<span class='fightTiXingDsp'>" + jinbi +
            "</span>��ҡ�</div>");
    $("#fightingWindow", this.pageContainer).attr('innerHTML', str);
    this.pageContainer.css('display', 'block');
    $("#fightingWindow", this.pageContainer).attr("scrollTop", 0);
    this.player.property['shengming'] = pSM;
    this.player.property['jingyan'] += jingyan;
    this.player.property['jinbi'] += jinbi;//.
    __fightGuaiDongHua();
  }
};

//˽�б���  ս��ʱ���ʱ��
var __fight_timer_timer = 0;
//˽�к�����ս��������ÿ10����ˢ��һ��ս������
function __fightGuaiDongHua() {
  if ($("#fightFinishDiv", "#fightingWindow").css("display") == "block") {
    $("#fightOK").css("display", "block");
    __fight_timer_timer = 0;
  } else {
    $(".fightLineStyle", "#fightingWindow").each(function() {
      if (parseInt($(this).attr("miaotype")) <= __fight_timer_timer) {
        $(this).show().removeClass("fightLineStyle").css("display", "block");
        if (parseInt($("#fightingWindow", this.pageContainer).attr("scrollHeight")) >= parseInt($("#fightingWindow", this.pageContainer).css("height"))) {
          $("#fightingWindow", this.pageContainer).attr("scrollTop", parseInt($("#fightingWindow", this.pageContainer).attr("scrollHeight")));
        }
      }
    });
    __fight_timer_timer = __fight_timer_timer + 15;//.10 +fast -slow
    window.setTimeout("__fightGuaiDongHua()", YOUXI_SHIJIAN_10_MIAO_ZHENSHI_SHIJIAN);//.
  }
}
/**
 * �ر�ս����
 * @param p_action ս����رպ���Ҫִ�еķ�����û�пɸ�null
 */
FightDialogWin.prototype.close = function(p_action) {
  this.player.isFighting = false;
  this.player.isMoveing = true;
  this.pageContainer.css('display', 'none');
  if (p_action) {
    p_action();
  }
};