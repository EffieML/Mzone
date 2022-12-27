from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def useremail_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def valid_email(form, field):
    email = field.data
    if '@' not in email:
        raise ValidationError("Invalid email address.")


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


# def valid_password(form, field):
#     password = field.data
#     if len(password) < 6:
#         raise ValidationError("Passwords must be at least 6 characters.")


class SignUpForm(FlaskForm):
    firstname = StringField(
        'firstname', validators=[DataRequired('First name is required.'), Length(max=50, message='First name cannot exceed 50 characters.')])
    lastname = StringField(
        'lastname', validators=[DataRequired('Last name is required.'), Length(max=50, message='Last name cannot exceed 50 characters.')])
    username = StringField(
        'username', validators=[DataRequired('User name is required.'), username_exists, Length(max=50, message='User name cannot exceed 50 characters.')])
    email = StringField(
        'email', validators=[DataRequired('Enter your email'), useremail_exists, valid_email, Length(max=255, message='Email cannot exceed 255 characters.')])
    password = StringField(
        'password', validators=[DataRequired('Enter your password'), Length(min=6, max=255, message='Password should be between 6 to 255 characters.')])
