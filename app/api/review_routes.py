from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review, Review_Img, db
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)


@review_routes.route('')
@login_required
def get_user_reviews():
    """
    get user reviews
    """
    reviews = Review.query.filter(
        Review.user_id == current_user.id).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/products/<int:id>')
def get_product_reviews(id):
    """
    get product reviews
    """
    reviews = Review.query.filter(
        Review.product_id == id).all()
    return {'reviews': [review.to_dict() for review in reviews]}


@review_routes.route('/products/<int:id>', methods=['POST'])
@login_required
def create_review(id):
    """
    Creates a new review
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            user_id=current_user.id,
            product_id=id,
            stars=form.data['stars'],
            title=form.data['title'],
            review=form.data['review'],
        )
        db.session.add(review)
        db.session.commit()

        img = Review_Img(
            review_id=review.id,
            url=form.data['img'],
        )
        db.session.add(img)
        if form.data['img2']:
            img2 = Review_Img(
                review_id=review.id,
                url=form.data['img2'],
            )
            db.session.add(img2)
        if form.data['img3']:
            img3 = Review_Img(
                review_id=review.id,
                url=form.data['img3'],
            )
            db.session.add(img3)
        if form.data['img4']:
            img4 = Review_Img(
                review_id=review.id,
                url=form.data['img4'],
            )
            db.session.add(img4)
        if form.data['img5']:
            img5 = Review_Img(
                review_id=review.id,
                url=form.data['img5'],
            )
            db.session.add(img5)
        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_review(id):
    """
    Edit a review by id
    """
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review = Review.query.get(id)
        images = Review_Img.query.filter(Review_Img.review_id == id).all()
        # print(len(images))
        review.stars = form.data['stars']
        review.title = form.data['title']
        review.review = form.data['review']

        images[0].url = form.data['img']
        if len(images) >= 2:
            images[1].url = form.data['img2']
        if len(images) >= 3:
            images[2].url = form.data['img3']
        if len(images) >= 4:
            images[3].url = form.data['img4']
        if len(images) >= 5:
            images[4].url = form.data['img5']

        db.session.commit()
        return review.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    """
    Delete a review by id
    """
    review = Review.query.get(id)
    if review:
        db.session.delete(review)
        db.session.commit()
        return {'message': "Successfully deleted"}
    else:
        return {'message': "Review could not be found"}, 404
