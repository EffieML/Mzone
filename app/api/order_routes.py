from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Cart, Product, Order, Order_Item, db
from datetime import datetime
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import CartForm

order_routes = Blueprint('orders', __name__)


@order_routes.route('', methods=['GET'])
@login_required
def get_all_orders():
    """
    Read/Get all orders for current user
    """
    orders = Order.query.filter(Order.user_id == current_user.id).all()
    return {'orders': [order.to_dict() for order in orders]}


@order_routes.route('/<int:order_id>', methods=['GET'])
def get_one_order(order_id):
    """
    get one order by id
    """
    order = Order.query.get(order_id)
    print("order-----------------", order)
    return order.to_dict()
    # if order:
    #     print("order-----------------", order.to_dict())
    #     return order.to_dict()
    # else:
    #     return {'order id': order_id, 'message': 'product not found'}, 404


@order_routes.route('', methods=['POST'])
@login_required
def checkout_create_order():
    """
    Creates a new order
    """
    new_order = Order(
        user_id=current_user.id,
    )
    print('python new order', new_order)
    db.session.add(new_order)
    db.session.commit()

    # add all cart items as order items
    cart_items = Cart.query.filter(Cart.user_id == current_user.id)
    print("cart item", cart_items)
    for item in cart_items:
        order_item = Order_Item(
            order_id=new_order.id,
            product_id=item.product_id,
            quantity=item.quantity
        )
        db.session.add(order_item)
    db.session.commit()

    return new_order.to_dict()


@order_routes.route('/orderitems/<int:id>', methods=['PUT'])
@login_required
def edit_order_items(id):
    """
    Edit order item quantity
    """
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        order_item = Order_Item.query.get(id)
        if order_item:
            order_item.quantity = form.data['quantity']
            db.session.commit()
            return order_item.to_dict()
        else:
            return {'message': "Order item could not be found"}, 404
    else:
        {'errors': validation_errors_to_error_messages(form.errors)}, 400


@order_routes.route('/orderitems/<int:id>', methods=['DELETE'])
@login_required
def delete_order_items(id):
    """
    Delete order item
    """
    order_item = Order_Item.query.get(id)
    if order_item:
        db.session.delete(order_item)
        db.session.commit()
        return {'message': "Item successfully removed"}
    else:
        return {'message': "Item could not be found"}, 404


@order_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_order(id):
    """
    Delete whole order
    """
    order = Order.query.get(id)
    if order:
        db.session.delete(order)
        db.session.commit()
        return {'message': "Order successfully deleted"}
    else:
        return {'message': "Order could not be found"}, 404
