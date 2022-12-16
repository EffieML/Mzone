from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError


class ProductImgForm(FlaskForm):
    img = StringField('img', validators=[DataRequired(
        'Product image is required.')])
