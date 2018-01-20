/**
 * ������� Download by http://www.codefans.net
 * @param p_id    ����id
 * @param p_name  ��������
 * @param p_image_id  ����ͼƬid
 * @param p_property_array ������������
 */
function GuaiWu(p_id, p_name, p_image_id, p_property_array) {
  this.id = p_id;
  this.name = p_name;
  this.imageId = p_image_id;
  this.image = IMAGE_PATH + p_image_id + ".jpg";
  this.paramPropertyArray= p_property_array;
  this.property = new Array();
  for(var i=0;i<p_property_array.length;i++){
    var tmpProperty=p_property_array[i];
    this.property[tmpProperty.name]=tmpProperty.value;
  }
}

/**
 * ��¡����
 */
GuaiWu.prototype.clone = function() {
  return new GuaiWu(this.id, this.name, this.imageId, this.paramPropertyArray);
};

