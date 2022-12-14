from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError


def url_verify(form, field):
    img = field.data
    # print('----------------img', img)

    if img and not img.lower().endswith(('.png', '.jpg', '.jpeg', '.gif', '.pdf')):
        raise ValidationError(
            'Image has invalid image type. Image must end with .jpg, .jpeg, .png, .gif, .tiff.')


class ReviewForm(FlaskForm):
    stars = IntegerField('rating', validators=[DataRequired('Rating is required.'), NumberRange(
        min=1, max=5, message='Rating should be between 1 to 5.')])
    title = StringField('title', validators=[DataRequired('Title is required.'), Length(
        min=1, max=255, message='Title should be between 1 to 255 characters.')])
    review = StringField('review', validators=[DataRequired('Review content is required.'), Length(
        min=1, max=2000, message='Review should be between 1 to 2000 characters.')])

    img = StringField('img')
    img2 = StringField('img2')
    img3 = StringField('img3')
    img4 = StringField('img4')
    img5 = StringField('img5')
