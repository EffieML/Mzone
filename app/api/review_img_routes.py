from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import Review_Img, db
# from app.api.auth_routes import validation_errors_to_error_messages
# from app.forms import ReviewForm, ReviewImgForm

review_img_routes = Blueprint('reviewimgs', __name__)


@review_img_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review_img(id):
    """
    Delete a review img by id
    """
    reviewimg = Review_Img.query.get(id)
    if reviewimg:
        db.session.delete(reviewimg)
        db.session.commit()
        return {'message': "Successfully deleted"}
    else:
        return {'message': "Review image could not be found"}, 404
