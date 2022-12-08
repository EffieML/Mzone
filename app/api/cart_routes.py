from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Cart, Product, db
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import CartForm

cart_routes = Blueprint('carts', __name__)


@cart_routes.route('', methods=['GET'])
@login_required
def get_all_cart_items():
    """
    Read/Get all items in cart
    """
    carts = Cart.query.filter(Cart.user_id == current_user.id).all()
    return {'carts': [cart.to_dict() for cart in carts]}


@cart_routes.route('/products/<int:id>', methods=['POST'])
@login_required
def add_cart_item(id):
    """
    Create/add item to cart
    """
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product_quantity = Product.query.get(id).quantity
        print(product_quantity)

        cart_item = Cart.query.filter(
            Cart.product_id == id,
            Cart.user_id == current_user.id
        ).first()
        #  can use first or one_or_none
        print(cart_item)

        if cart_item:
            if cart_item.quantity + form.data['quantity'] <= product_quantity:
                cart_item.quantity = cart_item.quantity + form.data['quantity']
            else:
                cart_item.quantity = product_quantity
            db.session.commit()
            return cart_item.to_dict()

        else:
            new_cart_item = Cart(
                user_id=current_user.id,
                product_id=id,
                quantity=form.data['quantity']
            )
            db.session.add(new_cart_item)
            db.session.commit()
            return new_cart_item.to_dict()
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@cart_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_cart_item(id):

    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        item = Cart.query.get(id)
        item.quantity = form.data['quantity']

        db.session.commit()
        return item.to_dict()
    else:
        {'errors': validation_errors_to_error_messages(form.errors)}, 400


@cart_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_cart_item(id):
    """
    Delete a cart item by cart item id
    """
    item = Cart.query.get(id)
    if item:
        db.session.delete(item)
        db.session.commit()
        return {'message': "Successfully removed"}
    else:
        return {'message': "Item could not be found"}, 404


@cart_routes.route('', methods=['DELETE'])
@login_required
def delete_cart():
    """
    Delete all items in cart - as user checkout have an order
    """
    cart_items = Cart.query.filter(Cart.user_id == current_user.id).all()
    if cart_items:
        for item in cart_items:
            db.session.delete(item)
        db.session.commit()
        return {'message': "Successfully removed, Shopping cart is empty"}
    else:
        return {'message': 'No Item in Shopping Cart'}, 404
