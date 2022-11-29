from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, DecimalField, IntegerField
from wtforms.validators import DataRequired, Length, NumberRange, ValidationError


# def url_verify(form, field):
#     url = field.data
#     if url and not url.lower().endswith(('.png', '.jpg', '.jpeg', '.tiff', '.gif')):
#         raise ValidationError(
#             'Image  has invalid image url. Image urls must end with .jpg, .jpeg, .png, .gif, .tiff.')

CATEGORY_CHOICES = ["Mzone Devices", "Mzone Home"]


class ProductForm(FlaskForm):
    name = StringField('name', validators=[DataRequired('Name is required.'), Length(
        min=1, max=255, message='Name should be between 1 to 255 characters.')])
    category = SelectField('category', validators=[DataRequired(
        'Category is required.')], choices=CATEGORY_CHOICES)
    price = DecimalField('price', validators=[DataRequired('Price is required.'), NumberRange(
        min=0.01, max=9999.99, message='Price should be between $0.01 to $9,999.99.')])
    brand = StringField('brand', validators=[DataRequired('Brand is required.'), Length(
        min=1, max=255, message='Brand should be between 1 to 255 characters.')])
    about = StringField('about', validators=[DataRequired('About is required.'), Length(
        min=1, max=2000, message='About should be between 1 to 2000 characters.')])
    detail = StringField('detail', validators=[DataRequired('Detail is required.'), Length(
        min=1, max=2000, message='Detail should be between 1 to 2000 characters.')])
    dimension = StringField('dimension', validators=[DataRequired('Dimension is required.'), Length(
        min=1, max=100, message='Dimension should be between 1 to 100 characters.')])
    weight = DecimalField('weight', validators=[DataRequired('Weight is required.'), NumberRange(
        min=0.01, max=500, message='Weight should be between 0.01 to 500 pounds.')])
    quantity = IntegerField('quantity', validators=[DataRequired('Quantity is required.'), NumberRange(
        min=1, max=9999, message='Quantity should be between 1 to 9999.')])

    img = StringField('img', validators=[DataRequired(
        'One product image is required.')])
    img2 = StringField('img2')
    img3 = StringField('img3')
    img4 = StringField('img4')
    img5 = StringField('img5')
