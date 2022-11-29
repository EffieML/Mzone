from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Product

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/products')
@login_required
def user_products():
    """
    get all products by user
    """
    return current_user.to_dict_products()
    # products = Product.query.filter(
    #     Product.seller_id == current_user.id).all()
    # if products:
    #     return {'products': [product.to_dict_product_images() for product in products]}
    # else:
    #     return {'User id': current_user.id, 'message': 'Current user has no product listing yet.'}, 404
