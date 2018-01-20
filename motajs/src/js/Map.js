//�����ͼ����ͼƬ����
//Ϊ�˸������ʾ��ͼ��Ԥ�ȶ���һ��ͼƬ���飬��ÿ��¥���л�ʱ����ͼƬ��src����ָ��
var __map_grid_images = new Array();

/**
 * �����ͼ
 * @param p_floor      ��ͼ¥��
 * @param p_goods_id   ��ͼ�ڵ���Ʒ���顾��ͼ��������Ʒ��id ��һ����ά���顿
 * @param p_location_up    ��ͼ����¥λ��
 * @param p_location_down  ��ͼ����¥λ��
 * @param p_all_goods_array  ������Ʒ��һ������
 */
function Map(p_floor, p_goods_id, p_location_up, p_location_down, p_all_goods_array) {
  this.floor = p_floor;
  this.datas = p_goods_id;
  this.up = p_location_up;
  this.down = p_location_down;
  this.rows = p_goods_id.length - 1;
  this.columns = p_goods_id[0].length - 1;
  for (var i = 0; i < this.datas.length; i++) {
    for (var j = 0; j < this.datas[i].length; j++) {
      this.datas[i][j] = p_all_goods_array[this.datas[i][j]].clone();
    }
  }
}

/**
 * ���ĳһλ���ϵĵ�ͼ����
 * @param p_location   λ�ö���
 */
Map.prototype.getLocationObj = function(p_location) {
  return this.datas[p_location.y][p_location.x];
};

/**
 * ��ʾ��ͼ
 * @param p_player   ��Ҷ���
 * @param p_up_down  0 ��¥¥�� 1 ��¥¥��
 */
Map.prototype.mapView = function(p_player, p_up_down) {
  //��ӵ�ͼ��img��Ϣ
  for (var i = 0; i < this.datas.length; i++) {
    if (!(__map_grid_images[i] instanceof Array)) {
      __map_grid_images[i] = new Array();
    }
    for (var j = 0; j < this.datas[i].length; j++) {
      var tmpImageObj = __map_grid_images[i][j];
      if (tmpImageObj == undefined) {
        tmpImageObj = $('<img src="' + this.datas[i][j].image + '" class="gameGrid"/>');
        __map_grid_images[i][j] = tmpImageObj;
        $('#gameFrame').append(tmpImageObj);
      } else {
        tmpImageObj.attr('src', this.datas[i][j].image);
      }
    }
  }
  //�������λ����Ϣ
  var tmpLocation;
  if (p_up_down == 0) {
    tmpLocation = this.up;
    p_player.pagePlayer.css("background-image", "url('" + p_player.imageDown + "')");
  } else {
    tmpLocation = this.down;
    p_player.pagePlayer.css("background-image", "url('" + p_player.imageUp + "')");
  }
  p_player.pagePlayer.css('left', tmpLocation.x * GRID_WIDTH).css('top', tmpLocation.y * GRID_HEIGHT);
  p_player.location = tmpLocation;
  p_player.property['floor'] = this.floor;
  p_player.isMoveing = true;
  p_player.updatePageInfo();
};
/**
 * �ı��ͼ����
 * @param p_location λ��
 * @param p_wupin    ��Ʒ����
 */
Map.prototype.changeMapContent = function(p_location, p_wupin) {
  this.datas[p_location.y][p_location.x] = p_wupin.clone();
  __map_grid_images[p_location.y][p_location.x].attr('src', p_wupin.image);
};
