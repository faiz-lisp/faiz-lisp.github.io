/**
 * ���Ŷ��� Download by http://www.codefans.net
 * @param p_id          ��ƷID
 * @param p_name        ��Ʒ����
 * @param p_image_id    ��ӦͼƬ��id
 * @param p_condition_property_name  ��Ҫ����Ǹ����ԣ�����Ĭ��1
 * @param p_success_des  ������Է��ϴ��ſ�����������������
 * @param p_failed_des   ������Բ����ϴ��ſ�����������������
 */
function DaMen(p_id, p_name, p_image_id, p_condition_property_name, p_success_des, p_failed_des) {
  this.id = p_id;
  this.name = p_name;
  this.imageId = p_image_id;
  this.conditionPropertyName = p_condition_property_name;
  this.successDes = p_success_des;
  this.failedDes = p_failed_des;
  this.image = IMAGE_PATH + p_image_id + ".jpg";
}

//��¡����
DaMen.prototype.clone = function() {
  return new DaMen(this.id, this.name, this.imageId, this.conditionPropertyName, this.successDes, this.failedDes);
};