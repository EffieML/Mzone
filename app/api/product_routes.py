from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Product, Product_Img, db
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import ProductForm


product_routes = Blueprint('products', __name__)


@product_routes.route('')
def get_all_products():
    """
    get all products
    """
    products = Product.query.all()
    return {'products': [product.to_dict_product_images() for product in products]}


@product_routes.route('/<int:id>')
def get_one_products(id):
    """
    get one product by id
    """
    product = Product.query.get(id)
    if product:
        return product.to_dict()
    else:
        return {'id': id, 'message': 'product not found'}, 404


@product_routes.route('/categories/<string:category>')
def get_category_products(category):
    """
    get all products by category
    """
    all_categories = {
        'mzone_devices': 'Mzone Devices',
        'mzone_home': 'Mzone Home',
    }
    if category in all_categories:
        products = Product.query.filter(
            Product.category == all_categories[category]).all()
        return {'products': [product.to_dict_product_images() for product in products]}
    else:
        return {'category': category, 'message': 'product category not found'}, 404


@product_routes.route('', methods=['POST'])
@login_required
def create_product():
    """
    Creates a new product
    """
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product = Product(
            seller_id=current_user.id,
            name=form.data['name'],
            category=form.data['category'],
            price=form.data['price'],
            brand=form.data['brand'],
            about=form.data['about'],
            detail=form.data['detail'],
            dimension=form.data['dimension'],
            weight=form.data['weight'],
            quantity=form.data['quantity'],
        )
        db.session.add(product)
        db.session.commit()

        img = Product_Img(
            product_id=product.id,
            url=form.data['img'],
        )
        db.session.add(img)

        if form.data['img2']:
            img2 = Product_Img(
                product_id=product.id,
                url=form.data['img2'],
            )
            db.session.add(img2)

        if form.data['img3']:
            img3 = Product_Img(
                product_id=product.id,
                url=form.data['img3'],
            )
            db.session.add(img3)

        if form.data['img4']:
            img4 = Product_Img(
                product_id=product.id,
                url=form.data['img4'],
            )
            db.session.add(img4)

        if form.data['img5']:
            img5 = Product_Img(
                product_id=product.id,
                url=form.data['img5'],
            )
            db.session.add(img5)

        db.session.commit()

        return product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@product_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_product():
    """
    Edit a product by id
    """
    form = ProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        product = Product.query.get(id)
        product.name = form.data['name'],
        product.category = form.data['category'],
        product.price = form.data['price'],
        product.brand = form.data['brand'],
        product.about = form.data['about'],
        product.detail = form.data['detail'],
        product.dimension = form.data['dimension'],
        product.weight = form.data['weight'],
        product.quantity = form.data['quantity'],

        db.session.commit()
        return product.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@product_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_product(id):
    """
    Delete a product by id
    """
    product = Product.query.get(id)
    if product:
        db.session.delete(product)
        db.session.commit()
        return {'message': "Successfully deleted"}
    else:
        return {'message': "Product couldn't be found"}, 404
