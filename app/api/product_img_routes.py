from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Product_Img, db
# from app.api.auth_routes import validation_errors_to_error_messages
# from app.forms import ProductForm, ProductImgForm

product_img_routes = Blueprint('productimgs', __name__)


@product_img_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_product_img(id):
    """
    Delete a product img by id
    """
    productimg = Product_Img.query.get(id)
    if productimg:
        db.session.delete(productimg)
        db.session.commit()
        return {'message': "Successfully deleted"}
    else:
        return {'message': "Product image could not be found"}, 404
