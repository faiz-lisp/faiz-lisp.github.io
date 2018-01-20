/**
 * ����������Ʒ
 * @param p_id        ��ƷID
 * @param p_name      ��Ʒ����
 * @param p_image_id  ��ӦͼƬ��id
 * @param p_add_property_array
 *        p_add_property_array ���е�Ԫ��{property:'��������',min:'��Сֵ',max:'���ֵ',des:'����'}
 * @param p_gain_goods_des      ��ø���Ʒʱ��������Ϣ
 * @param p_condition_obj       ��ø���Ʒ��Ҫ����������
 *        p_condition_obj{property:��Ҫ����Ǹ�����,value:��Ҫ��ҵ�����ֵ,des:���û�дﵽ�������ʱ��ʾ��Ϣ}
 */
function AddPropertyGoods(p_id, p_name, p_image_id, p_add_property_array, p_gain_goods_des, p_condition_obj) {
  this.id = p_id;
  this.name = p_name;
  this.imageId = p_image_id;
  this.addPropertyArray = p_add_property_array;
  this.gainGoodsDes = p_gain_goods_des;
  this.conditionObj = p_condition_obj;
  this.image = IMAGE_PATH + p_image_id + ".jpg";
}

/** Download by http://www.codefans.net
 * ��¡����
 */
AddPropertyGoods.prototype.clone = function() {
  return new AddPropertyGoods(this.id, this.name, this.imageId, this.addPropertyArray, this.gainGoodsDes, this.conditionObj);
};