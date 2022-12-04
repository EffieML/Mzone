from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, NumberRange, ValidationError


class CartForm(FlaskForm):
    quantity = IntegerField('quantity', validators=[DataRequired('Quantity is required.'), NumberRange(
        min=1, max=100, message='Quantity should be between 1 to 100.')])
