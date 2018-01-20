/**
 * �����ʾ����
 * @param p_msg             ��Ҫ��ʾ���������溬��{0}��{1}
 * @param p_tipword_array   ÿ��{0}��{1}ʵ���滻�����ݣ��Ǹ�����
 * @param p_tipword_color   ÿ��{0}��{1}��������ɫ
 * @param p_tip_word_size   ÿ��{0}��{1}�����ִ�С
 */
function getTipWordMsg(p_msg, p_tipword_array, p_tipword_color, p_tip_word_size) {
  var beginPosition = p_msg.indexOf("{");
  var endPosition = p_msg.indexOf("}");
  var tmpStr = p_msg;
  var ret = "";
  if (beginPosition >= 0 && endPosition >= 0) {
    var i = 0;
    while (beginPosition >= 0 && endPosition >= 0) {
      ret += tmpStr.substring(0, beginPosition);
      ret += "<span style='color:" + (p_tipword_color ? p_tipword_color : "black") +
              ";font-size:" + (p_tip_word_size ? p_tip_word_size : "9pt") + ";'>" + p_tipword_array[i] + "</span>";
      tmpStr = tmpStr.substring(endPosition + 1, tmpStr.length);
      beginPosition = tmpStr.indexOf("{");
      endPosition = tmpStr.indexOf("}");
      i++;
    }
    ret += tmpStr;
  } else {
    ret = p_msg;
  }
  return ret;
}

/**
 * ���һ�������������������>=min   <=max
 * @param p_min ��С��
 * @param p_max �����
 */
function getRandomInt(p_min, p_max) {
  return parseInt(Math.random() * (p_max - p_min + 1) + p_min);
}

/**
 * ���㹥������ĵ�Ѫ��
 * @param p_player_att      ��ҹ���
 * @param p_player_def      ��ҷ���
 * @param p_player_speed    ����ٶ�
 * @param p_guai_att        ���﹥��
 * @param p_guai_def        �������
 * @param p_guai_speed      �����ٶ�
 * @param p_guai_life       ��������
 * @return ����{left:��Ѫ��,time:����ʱ��,attNum:��������}
 */
function computeFightLossLife(p_player_att, p_player_def, p_player_speed, p_guai_att, p_guai_def, p_guai_speed, p_guai_life) {
  var playerAttPer = p_player_att - p_guai_def;
  if (playerAttPer <= 0)playerAttPer = 1;
  var playerKillGuaiNum = Math.ceil(p_guai_life / playerAttPer);
  var playerKillGuaiTime = playerKillGuaiNum * p_player_speed;
  var guaiAttNum = Math.floor(playerKillGuaiTime / p_guai_speed);
  var guaiAttPer = p_guai_att - p_player_def;
  if (guaiAttPer <= 0) guaiAttPer = 1;
  var playerLossLife = guaiAttPer * guaiAttNum;
  return {life:playerLossLife,time:playerKillGuaiTime,attNum:playerKillGuaiNum};
}

/**
 * ����������Է���
 * @param p_player ��Ҷ���
 * @param p_speak_dialog �Ի���
 * @param p_add_property_obj ���������Բ���
 *          des:��Ʒ���������ڵ����ĶԻ�����Ҫʹ�����顾property_array�����滻��Ԫ����{0}��{1}�������ȱ�ʾ
 *          property_array: ��������
 *              property:��������
 *              min:����ֵ��С
 *              max:����ֵ���
 *              am:add���Լ� minus�����Լ�
 *              mmin:����Ǽ��Ļ���������Сֵ
 * @param p_condition_obj ��Ҫ����������
 *          property����Ҫ�����������
 *          value:��Ҫ������Ե�ֵ
 *          des:�����Ҳ�������������ʾ������
 */
function addPlayerProperty(p_player, p_speak_dialog, p_add_property_obj, p_condition_obj) {
  if (p_condition_obj) {
    if (p_player.property[p_condition_obj.property] >= p_condition_obj.value) {
      p_player.property[p_condition_obj.property] -= p_condition_obj.value;
      __addPlayerProperty(p_player, p_speak_dialog, p_add_property_obj);
      return true;
    } else {
      if (p_speak_dialog && $.trim(p_condition_obj.des) != "") {
        p_speak_dialog.show(p_condition_obj.des);
      }
      return false;
    }
  } else {
    __addPlayerProperty(p_player, p_speak_dialog, p_add_property_obj);
    return true;
  }
}

/**
 * ˽�з�����������������е�˽�з���
 * @param p_player              ��Ҷ���
 * @param p_speak_dialog        �Ի������
 * @param p_add_property_obj    �������Զ���   = addPlayerProperty�����е� p_add_property_obj����
 */
function __addPlayerProperty(p_player, p_speak_dialog, p_add_property_obj) {
  if (p_add_property_obj) {
    var tmpDesArray = new Array();
    for (var i = 0; i < p_add_property_obj.property_array.length; i++) {
      var tmpPropertyObj = p_add_property_obj.property_array[i];
      var tmpValue = getRandomInt(tmpPropertyObj.min, tmpPropertyObj.max);
      if (tmpPropertyObj.am == "add") {
        p_player.property[tmpPropertyObj.property] += tmpValue;
      } else {
        p_player.property[tmpPropertyObj.property] -= tmpValue;
        if (p_player.property[tmpPropertyObj.property] < tmpPropertyObj.mmin)
          p_player.property[tmpPropertyObj.property] = tmpPropertyObj.mmin;
      }
      tmpDesArray.push(tmpValue);
    }
    if (p_speak_dialog && $.trim(p_add_property_obj.des) != "") {
      p_speak_dialog.show(getTipWordMsg(p_add_property_obj.des, tmpDesArray, "red", "11pt"));
    }
  }
}

/**
 * Game����ʱ�Ķ���
 * @param p_guai ������Ϣ���������ȫ�أ�û�й�����Ϣ p_guai=null
 */
function finishDongHua(p_guai) {
  $(document).unbind("keydown", keyDownInDocument);
	$(document).unbind("mousedown", keyDownInDocument);
  var finishDiv = $("<div/>").addClass("finishInnerDiv").css("display", "none");
  var authInfo = $("<div/>").addClass("finishInnerDiv").css("display", "none").
          attr("innerHTML", "���ߣ��Ž��<br>Game�ز��������磡<br>Game���ݸ���ԭmota�޸ģ�");
  var restartdiv = $("<div/>").addClass("finishReStartDiv").css("display", "none").text("���¿�ʼ").click(function() {
    window.location = "index.html";//.mota
  }).hover(
          function () {
            $(this).addClass("finishReStartHover");
          },
          function () {
            $(this).removeClass("finishReStartHover");
          }
          );
  $("#gameFrame").css("background", "url('" + IMAGE_PATH + "506.jpg') repeat").attr("innerHTML", "").append(finishDiv).append(authInfo).append(restartdiv);
  if (p_guai) {
    finishDiv.attr("innerHTML", "�㲻�ұ�" + p_guai.name + "ɱ���������޷��ȳ���<br>�����Ժ������ȼ޸����ռ�ħ��������һƬ���ң�")
  } else {
    finishDiv.attr("innerHTML", "������Ĳ�иŬ�������ڰѹ�����mota�оȳ���<br>�����Ժ����޸�����ʿ�����ǹ����Ҹ������")
  }
  finishDiv.fadeIn(1000, function() {
    authInfo.slideDown(1000, function() {
      restartdiv.show(1000);
    });
  });
}