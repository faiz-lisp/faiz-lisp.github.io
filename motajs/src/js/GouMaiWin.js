//���ù�����ڼ۸���������Ϣ��Ϊ����ʾ��ʵ��һ��
var JINBI_CHUJI_JINBI = 50,JINBI_CHUJI_SHENGMING_MIN = 800,JINBI_CHUJI_SHENGMING_MAX = 1200,
        JINBI_CHUJI_GONGJI_MIN_MIN = 4,JINBI_CHUJI_GONGJI_MIN_MAX = 6,JINBI_CHUJI_GONGJI_MAX_MIN = 6,JINBI_CHUJI_GONGJI_MAX_MAX = 9,
        JINBI_CHUJI_FANGYU_MIN = 4,JINBI_CHUJI_FANGYU_MAX = 6;
var JINBI_GAOJI_JINBI = 225,JINBI_GAOJI_SHENGMING_MIN = 4000,JINBI_GAOJI_SHENGMING_MAX = 6000,
        JINBI_GAOJI_GONGJI_MIN_MIN = 20,JINBI_GAOJI_GONGJI_MIN_MAX = 30,JINBI_GAOJI_GONGJI_MAX_MIN = 30,JINBI_GAOJI_GONGJI_MAX_MAX = 45,
        JINBI_GAOJI_FANGYU_MIN = 20,JINBI_GAOJI_FANGYU_MAX = 30;
var JINGYAN_CHUJI_JINGYAN = 50,JINGYAN_CHUJI_SHENGJI_SHENGMING_MIN = 300,JINGYAN_CHUJI_SHENGJI_SHENGMING_MAX = 450,
        JINGYAN_CHUJI_SHENGJI_GONGJI_MIN_MIN = 2,JINGYAN_CHUJI_SHENGJI_GONGJI_MIN_MAX = 3,
        JINGYAN_CHUJI_SHENGJI_GONGJI_MAX_MIN = 3,JINGYAN_CHUJI_SHENGJI_GONGJI_MAX_MAX = 5,
        JINGYAN_CHUJI_SHENGJI_FANGYU_MIN = 2,JINGYAN_CHUJI_SHENGJI_FANGYU_MAX = 3,
        JINGYAN_CHUJI_GONGJI_MIN_MIN = 5,JINGYAN_CHUJI_GONGJI_MIN_MAX = 8,JINGYAN_CHUJI_GONGJI_MAX_MIN = 8,JINGYAN_CHUJI_GONGJI_MAX_MAX = 12,
        JINGYAN_CHUJI_FANGYU_MIN = 5,JINGYAN_CHUJI_FANGYU_MAX = 8;
var JINGYAN_GAOJI_JINGYAN = 225,JINGYAN_GAOJI_SHENGJI_SHENGMING_MIN = 1500,JINGYAN_GAOJI_SHENGJI_SHENGMING_MAX = 2250,
        JINGYAN_GAOJI_SHENGJI_GONGJI_MIN_MIN = 20,JINGYAN_GAOJI_SHENGJI_GONGJI_MIN_MAX = 15,
        JINGYAN_GAOJI_SHENGJI_GONGJI_MAX_MIN = 15,JINGYAN_GAOJI_SHENGJI_GONGJI_MAX_MAX = 23,
        JINGYAN_GAOJI_SHENGJI_FANGYU_MIN = 10,JINGYAN_GAOJI_SHENGJI_FANGYU_MAX = 15,
        JINGYAN_GAOJI_GONGJI_MIN_MIN = 25,JINGYAN_GAOJI_GONGJI_MIN_MAX = 38,JINGYAN_GAOJI_GONGJI_MAX_MIN = 38,JINGYAN_GAOJI_GONGJI_MAX_MAX = 55,
        JINGYAN_GAOJI_FANGYU_MIN = 25,JINGYAN_GAOJI_FANGYU_MAX = 38;
var GOUMAI_HUANG_YAOSHI = 30,GOUMAI_LAN_YAOSHI = 50,GOUMAI_HONG_YAOSHI = 100;
var SHOUCHU_HUANG_YAOSHI = 15,SHOUCHU_LAN_YAOSHI = 25,SHOUCHU_HONG_YAOSHI = 50;

/**
 * �����顢��ҶԻ���
 * @param p_player ��Ҷ���
 */
function GouMaiWin(p_player) {
  this.player = p_player;
  this.pageContainer = $('<div id="goumaiWinDivContainer"/>').addClass('goumaiDialogCss').css('display', 'none');
}

/**
 * ��ʾ�����
 * @param p_shop_id �̵�id��Ҳ���Ƕ����id
 * @param p_action ����ʾ��Ի������Ҫ��ӵ���Ϊ
 */
GouMaiWin.prototype.show = function(p_shop_id, p_action) {
  this.player.isMoveing = false;
  this.player.isGouMai = true;
  this.pageContainer.attr("innerHTML", "");
  var innerHtml = new StringBuffer();
  if (p_shop_id == 605) {
    innerHtml.append("<div class='goumaishangdianDSP'>��ӭ���������̵꣡</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>��ֻ������" + JINBI_CHUJI_JINBI + "����ҾͿ���ѡ���������ݣ�</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����" + JINBI_CHUJI_SHENGMING_MIN + "-" +
            JINBI_CHUJI_SHENGMING_MAX + "������<br>�������ּ�1��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>������С" + JINBI_CHUJI_GONGJI_MIN_MIN + "-" + JINBI_CHUJI_GONGJI_MIN_MAX +
            " ���" + JINBI_CHUJI_GONGJI_MAX_MIN + "-" + JINBI_CHUJI_GONGJI_MAX_MAX + "�㹥��<br>�������ּ�2��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����" + JINBI_CHUJI_FANGYU_MIN + "-" + JINBI_CHUJI_FANGYU_MAX + "�����<br>�������ּ�3��</div>");
  } else if (p_shop_id == 652) {
    innerHtml.append("<div class='goumaishangdianDSP'>��ӭ�����߼��̵꣡</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>��ֻ������" + JINBI_GAOJI_JINBI + "����ҾͿ���ѡ���������ݣ�</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����" + JINBI_GAOJI_SHENGMING_MIN + "-" +
            JINBI_GAOJI_SHENGMING_MAX + "������<br>�������ּ�1��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>������С" + JINBI_GAOJI_GONGJI_MIN_MIN + "-" + JINBI_GAOJI_GONGJI_MIN_MAX +
            " ���" + JINBI_GAOJI_GONGJI_MAX_MIN + "-" + JINBI_GAOJI_GONGJI_MAX_MAX + "�㹥��<br>�������ּ�2��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����" + JINBI_GAOJI_FANGYU_MIN + "-" + JINBI_GAOJI_FANGYU_MAX + "�����<br>�������ּ�3��</div>");
  } else if (p_shop_id == 650) {
    innerHtml.append("<div class='goumaishangdianDSP'>��ӭ�������������̵꣡</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>��ֻ������" + JINGYAN_CHUJI_JINGYAN + "�㾭��Ϳ���ѡ���������ݣ�</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����һ��<br>�������ּ�1��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>������С" + JINGYAN_CHUJI_GONGJI_MIN_MIN + "-" + JINGYAN_CHUJI_GONGJI_MIN_MAX +
            " ���" + JINGYAN_CHUJI_GONGJI_MAX_MIN + "-" + JINGYAN_CHUJI_GONGJI_MAX_MAX + "�㹥��<br>�������ּ�2��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����" + JINGYAN_CHUJI_FANGYU_MIN + "-" + JINGYAN_CHUJI_FANGYU_MAX + "�����<br>�������ּ�3��</div>");
  } else if (p_shop_id == 654) {
    innerHtml.append("<div class='goumaishangdianDSP'>��ӭ�����߼������̵꣡</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>��ֻ������" + JINGYAN_GAOJI_JINGYAN + "�㾭��Ϳ���ѡ���������ݣ�</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>�����弶<br>�������ּ�1��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>������С" + JINGYAN_GAOJI_GONGJI_MIN_MIN + "-" + JINGYAN_GAOJI_GONGJI_MIN_MAX +
            " ���" + JINGYAN_GAOJI_GONGJI_MAX_MIN + "-" + JINGYAN_GAOJI_GONGJI_MAX_MAX + "�㹥��<br>�������ּ�2��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����" + JINGYAN_GAOJI_FANGYU_MIN + "-" + JINGYAN_GAOJI_FANGYU_MAX + "�����<br>�������ּ�3��</div>");
  } else if (p_shop_id == 651) {
    innerHtml.append("<div class='goumaishangdianDSP'>��ӭ����Կ���̵꣡</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>��ֻ�����㹻�Ľ�ҾͿ���ѡ���������ݣ�</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����һ�ѻ�Կ��" + GOUMAI_HUANG_YAOSHI + "Ԫ<br>�������ּ�1��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����һ����Կ��" + GOUMAI_LAN_YAOSHI + "Ԫ<br>�������ּ�2��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>����һ�Ѻ�Կ��" + GOUMAI_HONG_YAOSHI + "Ԫ<br>�������ּ�3��</div>");
  } else if (p_shop_id == 653) {
    innerHtml.append("<div class='goumaishangdianDSP'>��ӭ����Կ���չ��̵꣡</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>�����ж����Կ�ף��Ϳ���������ѡ��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>�۳�һ�ѻ�Կ��" + SHOUCHU_HUANG_YAOSHI + "Ԫ<br>�������ּ�1��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>�۳�һ����Կ��" + SHOUCHU_LAN_YAOSHI + "Ԫ<br>�������ּ�2��</div>");
    innerHtml.append("<div class='goumaishangdianDSP'>�۳�һ�Ѻ�Կ��" + SHOUCHU_HONG_YAOSHI + "Ԫ<br>�������ּ�3��</div>");
  }
  innerHtml.append("<div class='goumaishangdianDSP'>�뿪�̵�<br>�����ո����</div>");
  this.pageContainer.attr("innerHTML", innerHtml.toString());
  this.pageContainer.css('display', 'block');
  if (p_action) {
    p_action();
  }
};

/**
 * ����ʱѡ�����Ϊ
 * @param p_shop_id    �̵�id��Ҳ���Ƕ����id
 */
GouMaiWin.prototype.click1 = function(p_shop_id) {
  var tmpAddSuccessDes,tmpAddPropertyArray = new Array();
  var tmpConditionPropertyName,tmpConditionValue,tmpConditionDes;
  if (p_shop_id == 605) {
    tmpAddSuccessDes = "������{0}��������";
    tmpAddPropertyArray.push({property:"shengming",min:JINBI_CHUJI_SHENGMING_MIN,max:JINBI_CHUJI_SHENGMING_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jinbi',tmpConditionValue = JINBI_CHUJI_JINBI,tmpConditionDes = '���Ҳ����ˣ�';
  } else if (p_shop_id == 652) {
    tmpAddSuccessDes = "������{0}��������";
    tmpAddPropertyArray.push({property:"shengming",min:JINBI_GAOJI_SHENGMING_MIN,max:JINBI_GAOJI_SHENGMING_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jinbi',tmpConditionValue = JINBI_GAOJI_JINBI,tmpConditionDes = '���Ҳ����ˣ�';
  } else if (p_shop_id == 650) {
    tmpAddSuccessDes = "��������һ�����ȼ�����{0}����������{1}�㣬��������{2}-{3}�㣬��������{4}�㣡";
    tmpAddPropertyArray.push({property:"dengji",min:1,max:1,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:"shengming",min:JINGYAN_CHUJI_SHENGJI_SHENGMING_MIN,max:JINGYAN_CHUJI_SHENGJI_SHENGMING_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'gongjiMin',min:JINGYAN_CHUJI_SHENGJI_GONGJI_MIN_MIN,max:JINGYAN_CHUJI_SHENGJI_GONGJI_MIN_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'gongjiMax',min:JINGYAN_CHUJI_SHENGJI_GONGJI_MAX_MIN,max:JINGYAN_CHUJI_SHENGJI_GONGJI_MAX_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'fangyu',min:JINGYAN_CHUJI_SHENGJI_FANGYU_MIN,max:JINGYAN_CHUJI_SHENGJI_FANGYU_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jingyan',tmpConditionValue = JINGYAN_CHUJI_JINGYAN,tmpConditionDes = '�㾭�鲻���ˣ�';
  } else if (p_shop_id == 654) {
    tmpAddSuccessDes = "���������弶���ȼ�����{0}����������{1}�㣬��������{2}-{3}�㣬��������{4}�㣡";
    tmpAddPropertyArray.push({property:"dengji",min:5,max:5,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:"shengming",min:JINGYAN_GAOJI_SHENGJI_SHENGMING_MIN,max:JINGYAN_GAOJI_SHENGJI_SHENGMING_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'gongjiMin',min:JINGYAN_GAOJI_SHENGJI_GONGJI_MIN_MIN,max:JINGYAN_GAOJI_SHENGJI_GONGJI_MIN_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'gongjiMax',min:JINGYAN_GAOJI_SHENGJI_GONGJI_MAX_MIN,max:JINGYAN_GAOJI_SHENGJI_GONGJI_MAX_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'fangyu',min:JINGYAN_GAOJI_SHENGJI_FANGYU_MIN,max:JINGYAN_GAOJI_SHENGJI_FANGYU_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jingyan',tmpConditionValue = JINGYAN_GAOJI_JINGYAN,tmpConditionDes = '�㾭�鲻���ˣ�';
  } else if (p_shop_id == 651) {
    tmpAddSuccessDes = "�㹺����һ�ѻ�Կ�ף�";
    tmpAddPropertyArray.push({property:"huangyaoshi",min:1,max:1,am:"add",mmin:0});
    tmpConditionPropertyName = 'jinbi',tmpConditionValue = GOUMAI_HUANG_YAOSHI,tmpConditionDes = '���Ҳ����ˣ�';
  } else if (p_shop_id == 653) {
    tmpAddSuccessDes = "���۳���һ�ѻ�Կ�ף�";
    tmpAddPropertyArray.push({property:"jinbi",min:SHOUCHU_HUANG_YAOSHI,max:SHOUCHU_HUANG_YAOSHI,am:"add",mmin:0});
    tmpConditionPropertyName = 'huangyaoshi',tmpConditionValue = 1,tmpConditionDes = '���Կ��û���ˣ�';
  }
  return {
    addPropertyFlag:true,
    addPropertyObj:{
      des:tmpAddSuccessDes,
      property_array:tmpAddPropertyArray
    },
    conditionObj:{
      property:tmpConditionPropertyName,
      value:tmpConditionValue,
      des:tmpConditionDes
    }
  }
};

/**
 * ����ʱѡ�����Ϊ
 * @param p_shop_id    �̵�id��Ҳ���Ƕ����id
 */
GouMaiWin.prototype.click2 = function(p_shop_id) {
  var tmpAddSuccessDes,tmpAddPropertyArray = new Array();
  var tmpConditionPropertyName,tmpConditionValue,tmpConditionDes;
  if (p_shop_id == 605) {
    tmpAddSuccessDes = "������{0}-{1}�㹥����";
    tmpAddPropertyArray.push({property:'gongjiMin',min:JINBI_CHUJI_GONGJI_MIN_MIN,max:JINBI_CHUJI_GONGJI_MIN_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'gongjiMax',min:JINBI_CHUJI_GONGJI_MAX_MIN,max:JINBI_CHUJI_GONGJI_MAX_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jinbi',tmpConditionValue = JINBI_CHUJI_JINBI,tmpConditionDes = '���Ҳ����ˣ�';
  } else if (p_shop_id == 652) {
    tmpAddSuccessDes = "������{0}-{1}�㹥����";
    tmpAddPropertyArray.push({property:'gongjiMin',min:JINBI_GAOJI_GONGJI_MIN_MIN,max:JINBI_GAOJI_GONGJI_MIN_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'gongjiMax',min:JINBI_GAOJI_GONGJI_MAX_MIN,max:JINBI_GAOJI_GONGJI_MAX_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jinbi',tmpConditionValue = JINBI_GAOJI_JINBI,tmpConditionDes = '���Ҳ����ˣ�';
  } else if (p_shop_id == 650) {
    tmpAddSuccessDes = "������{0}-{1}�㹥����";
    tmpAddPropertyArray.push({property:'gongjiMin',min:JINGYAN_CHUJI_GONGJI_MIN_MIN,max:JINGYAN_CHUJI_GONGJI_MIN_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'gongjiMax',min:JINGYAN_CHUJI_GONGJI_MAX_MIN,max:JINGYAN_CHUJI_GONGJI_MAX_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jingyan',tmpConditionValue = JINGYAN_CHUJI_JINGYAN,tmpConditionDes = '�㾭�鲻���ˣ�';
  } else if (p_shop_id == 654) {
    tmpAddSuccessDes = "������{0}-{1}�㹥����";
    tmpAddPropertyArray.push({property:'gongjiMin',min:JINGYAN_GAOJI_GONGJI_MIN_MIN,max:JINGYAN_GAOJI_GONGJI_MIN_MAX,am:"add",mmin:0});
    tmpAddPropertyArray.push({property:'gongjiMax',min:JINGYAN_GAOJI_GONGJI_MAX_MIN,max:JINGYAN_GAOJI_GONGJI_MAX_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jingyan',tmpConditionValue = JINGYAN_GAOJI_JINGYAN,tmpConditionDes = '�㾭�鲻���ˣ�';
  } else if (p_shop_id == 651) {
    tmpAddSuccessDes = "�㹺����һ����Կ�ף�";
    tmpAddPropertyArray.push({property:"lanyaoshi",min:1,max:1,am:"add",mmin:0});
    tmpConditionPropertyName = 'jinbi',tmpConditionValue = GOUMAI_LAN_YAOSHI,tmpConditionDes = '���Ҳ����ˣ�';
  } else if (p_shop_id == 653) {
    tmpAddSuccessDes = "���۳���һ����Կ�ף�";
    tmpAddPropertyArray.push({property:"jinbi",min:SHOUCHU_LAN_YAOSHI,max:SHOUCHU_LAN_YAOSHI,am:"add",mmin:0});
    tmpConditionPropertyName = 'lanyaoshi',tmpConditionValue = 1,tmpConditionDes = '����Կ��û���ˣ�';
  }
  return {
    addPropertyFlag:true,
    addPropertyObj:{
      des:tmpAddSuccessDes,
      property_array:tmpAddPropertyArray
    },
    conditionObj:{
      property:tmpConditionPropertyName,
      value:tmpConditionValue,
      des:tmpConditionDes
    }
  }
};

/**
 * ����ʱѡ�����Ϊ
 * @param p_shop_id  �̵�id��Ҳ���Ƕ����id
 */
GouMaiWin.prototype.click3 = function(p_shop_id) {
  var tmpAddSuccessDes,tmpAddPropertyArray = new Array();
  var tmpConditionPropertyName,tmpConditionValue,tmpConditionDes;
  if (p_shop_id == 605) {
    tmpAddSuccessDes = "������{0}�������";
    tmpAddPropertyArray.push({property:'fangyu',min:JINBI_CHUJI_FANGYU_MIN,max:JINBI_CHUJI_FANGYU_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jinbi',tmpConditionValue = JINBI_CHUJI_JINBI,tmpConditionDes = '���Ҳ����ˣ�';
  } else if (p_shop_id == 652) {
    tmpAddSuccessDes = "������{0}�������";
    tmpAddPropertyArray.push({property:'fangyu',min:JINBI_GAOJI_FANGYU_MIN,max:JINBI_GAOJI_FANGYU_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jinbi',tmpConditionValue = JINBI_GAOJI_JINBI,tmpConditionDes = '���Ҳ����ˣ�';
  } else if (p_shop_id == 650) {
    tmpAddSuccessDes = "������{0}�������";
    tmpAddPropertyArray.push({property:'fangyu',min:JINGYAN_CHUJI_FANGYU_MIN,max:JINGYAN_CHUJI_FANGYU_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jingyan',tmpConditionValue = JINGYAN_CHUJI_JINGYAN,tmpConditionDes = '�㾭�鲻���ˣ�';
  } else if (p_shop_id == 654) {
    tmpAddSuccessDes = "������{0}�������";
    tmpAddPropertyArray.push({property:'fangyu',min:JINGYAN_GAOJI_FANGYU_MIN,max:JINGYAN_GAOJI_FANGYU_MAX,am:"add",mmin:0});
    tmpConditionPropertyName = 'jingyan',tmpConditionValue = JINGYAN_GAOJI_JINGYAN,tmpConditionDes = '�㾭�鲻���ˣ�';
  } else if (p_shop_id == 651) {
    tmpAddSuccessDes = "�㹺����һ�Ѻ�Կ�ף�";
    tmpAddPropertyArray.push({property:"hongyaoshi",min:1,max:1,am:"add",mmin:0});
    tmpConditionPropertyName = 'jinbi',tmpConditionValue = GOUMAI_HONG_YAOSHI,tmpConditionDes = '���Ҳ����ˣ�';
  } else if (p_shop_id == 653) {
    tmpAddSuccessDes = "���۳���һ�Ѻ�Կ�ף�";
    tmpAddPropertyArray.push({property:"jinbi",min:SHOUCHU_HONG_YAOSHI,max:SHOUCHU_HONG_YAOSHI,am:"add",mmin:0});
    tmpConditionPropertyName = 'hongyaoshi',tmpConditionValue = 1,tmpConditionDes = '���Կ��û���ˣ�';
  }
  return {
    addPropertyFlag:true,
    addPropertyObj:{
      des:tmpAddSuccessDes,
      property_array:tmpAddPropertyArray
    },
    conditionObj:{
      property:tmpConditionPropertyName,
      value:tmpConditionValue,
      des:tmpConditionDes
    }
  }
};

/**
 * ԭ���빺���ٶȣ�����ȡ��
 * ����ʱѡ�����Ϊ
 * @param p_shop_id �̵�id��Ҳ���Ƕ����id
 */
GouMaiWin.prototype.click4 = function(p_shop_id) {
  var tmpAddSuccessDes,tmpAddPropertyArray = new Array();
  var tmpConditionPropertyName,tmpConditionValue,tmpConditionDes;
  var tmpAddPropertyFlag = false;
  //����ʱû���ٶ�
//  if (p_shop_id == 652) {
//    tmpAddPropertyFlag = true;
//    tmpAddSuccessDes = "������{0}���ٶȣ�";
//    tmpAddPropertyArray.push({property:'sudu',min:JINBI_GAOJI_SUDU_MIN,max:JINBI_GAOJI_SUDU_MAX,am:"minus",mmin:10});
//    tmpConditionPropertyName = 'jinbi',tmpConditionValue = JINBI_GAOJI_JINBI,tmpConditionDes = '���Ҳ����ˣ�';
//  } else if(p_shop_id == 654){
//    tmpAddPropertyFlag = true;
//    tmpAddSuccessDes = "������{0}���ٶȣ�";
//    tmpAddPropertyArray.push({property:'sudu',min:JINGYAN_GAOJI_SUDU_MIN,max:JINGYAN_GAOJI_SUDU_MAX,am:"minus",mmin:10});
//    tmpConditionPropertyName = 'jingyan',tmpConditionValue = JINGYAN_GAOJI_JINGYAN,tmpConditionDes = '�㾭�鲻���ˣ�';
//  }
  return {
    addPropertyFlag:tmpAddPropertyFlag,
    addPropertyObj:{
      des:tmpAddSuccessDes,
      property_array:tmpAddPropertyArray
    },
    conditionObj:{
      property:tmpConditionPropertyName,
      value:tmpConditionValue,
      des:tmpConditionDes
    }
  }
};

/**
 * �رչ����
 * @param p_action �ڹر���Ի������Ҫ��ӵ���Ϊ
 */
GouMaiWin.prototype.close = function(p_action) {
  this.player.isMoveing = true;
  this.player.isGouMai = false;
  this.pageContainer.css('display', 'none');
  if (p_action) {
    p_action();
  }
};