/**
 * ������Ʒ����
 * @param p_id        ��ƷID
 * @param p_name      ��Ʒ����
 * @param p_image_id  ��ӦͼƬ��id
 */
function BaseGoods(p_id, p_name, p_image_id) {
  this.id = p_id;
  this.name = p_name;
  this.imageId = p_image_id;
  this.image = IMAGE_PATH + p_image_id + ".jpg";
}

/**
 * ��¡����
 */
BaseGoods.prototype.clone = function() {
  return new BaseGoods(this.id, this.name, this.imageId);
};