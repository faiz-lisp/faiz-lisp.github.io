/**
 * ��ʾ��Ʒ����
 * @param p_id              ��ƷID
 * @param p_name            ��Ʒ����
 * @param p_image_id        ��ӦͼƬ��id
 * @param p_gain_goods_obj  �����Ʒ����
 *        p_gain_goods_obj {property����ҵ��Ǹ���Ʒ���ӣ�des�������Ʒʱ��������tipDes���滻��Ʒ������{0}��{1},���{0}��{1}������ʾ������֣��ı���ɫ�ʹ�С}
 */
function BaseViewGoods(p_id, p_name, p_image_id, p_gain_goods_obj) {
  this.id = p_id;
  this.name = p_name;
  this.imageId = p_image_id;
  this.image = IMAGE_PATH + p_image_id + ".jpg";
  this.gainGoodsObj = p_gain_goods_obj;
}

//��¡����
BaseViewGoods.prototype.clone = function() {
  return new BaseViewGoods(this.id, this.name, this.imageId, this.gainGoodsObj);
};