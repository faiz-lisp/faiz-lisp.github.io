//�������
function PlayerObj() {
  this.property = new Array();
  this.property['dengji'] = 0;
  this.property['shengming'] = 1500;
  this.property['gongjiMin'] = 10;
  this.property['gongjiMax'] = 15;
  this.property['fangyu'] = 10;
  this.property['jinbi'] = 0;//.
  this.property['jingyan'] = 0;
  this.property['sudu'] = 100;
  this.property['huangyaoshi'] = 1;  //��Կ������
  this.property['lanyaoshi'] = 1;    //��Կ������
  this.property['hongyaoshi'] = 1;   //��Կ������
  this.property['floor'] = 0;
  //��������
  this.property['shiqi'] = getRandomInt(0, 20);
  this.property['xingyun'] = getRandomInt(0, 20);
  this.property['fuyuan'] = getRandomInt(0, 20);

  this.visitMaxFloor = 0;

  this.pagePlayer = $("<div/>").addClass("player");

  this.imageUp = IMAGE_PATH + "player_1.jpg";
  this.imageDown = IMAGE_PATH + "player_2.jpg";
  this.imageLeft = IMAGE_PATH + "player_3.jpg";
  this.imageRight = IMAGE_PATH + "player_4.jpg";
  //����
  this.isMoveing = true;
  this.isSpeaking = false;
  this.isFighting = false;
  this.isViewGuai = false;
  this.isGouMai = false;

  //��Ʒ         
  this.goods = new Array();
  this.goods['shizijia'] = 0;
  this.goods['viewGuaiBook'] = 0;
  this.goods['chutou'] = 0;
  this.goods['feixingqi'] = 0;
  this.goods['damowang'] = 0;
  
  //�Ի����ڶ���
  this.dialogObject = null;
}

//����ҳ����Ϣ
PlayerObj.prototype.updatePageInfo = function() {
  $('#dengji span').text(this.property['dengji']);
  $('#shengming span').text(this.property['shengming']);
  $('#gongji span').text(this.property['gongjiMin'] + " - " + this.property['gongjiMax']);
  $('#fangyu span').text(this.property['fangyu']);
  $('#sudu span').text(this.property['sudu']);
  $('#jinbi span').text(this.property['jinbi']);
  $('#jingyan span').text(this.property['jingyan']);
  $('#huangKey span').text(this.property['huangyaoshi']);
  $('#lanKey span').text(this.property['lanyaoshi']);
  $('#hongKey span').text(this.property['hongyaoshi']);
  $('#floor span').text(this.property['floor']);
  $('#shiqi span').text(this.property['shiqi']);
  $('#xingyun span').text(this.property['xingyun']);
  $('#fuyuan span').text(this.property['fuyuan']);
};
//��������ƶ� �� 0 �� 1
PlayerObj.prototype.moveUpDown = function(p_up_down, p_can_move) {
  var tmpLocation = new Location(this.location.x, this.location.y);
  var moveFlag;
  if (p_up_down == 0) {
    this.pagePlayer.css("background-image", "url('" + this.imageUp + "')");
    moveFlag = -1;
  } else {
    this.pagePlayer.css("background-image", "url('" + this.imageDown + "')");
    moveFlag = 1;
  }
  tmpLocation.y = tmpLocation.y + moveFlag;
  if (p_can_move(tmpLocation)) {
    this.location = tmpLocation;
    this.pagePlayer.css('top', this.location.y * GRID_HEIGHT);
  }
};
//��������ƶ� 0 �� 1 ��
PlayerObj.prototype.moveLeftRight = function(p_left_right, p_can_move) {
  var tmpLocation = new Location(this.location.x, this.location.y);
  var moveFlag;
  if (p_left_right == 0) {
    this.pagePlayer.css("background-image", "url('" + this.imageLeft + "')");
    moveFlag = -1;
  } else {
    this.pagePlayer.css("background-image", "url('" + this.imageRight + "')");
    moveFlag = 1;
  }
  tmpLocation.x = tmpLocation.x + moveFlag;
  if (p_can_move(tmpLocation)) {
    this.location = tmpLocation;
    this.pagePlayer.css('left', this.location.x * GRID_WIDTH);
  }
};