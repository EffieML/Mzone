from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    user_name = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    street = db.Column(db.String(255), nullable=True)
    city = db.Column(db.String(50), nullable=True)
    state = db.Column(db.String(50), nullable=True)
    zip = db.Column(db.String(10), nullable=True)
    country = db.Column(db.String(50), nullable=True)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)


# relation section ----------------------------------------------
    products_u = db.relationship(
        "Product", back_populates="user_p", cascade="all, delete")
    carts_u = db.relationship(
        "Cart", back_populates="user_c", cascade="all, delete")
    orders_u = db.relationship(
        "Order", back_populates="user_o", cascade="all, delete")
    reviews_u = db.relationship(
        "Review", back_populates="user_r", cascade="all, delete")
    favorites_u = db.relationship(
        "Favorite", back_populates="user_f", cascade="all, delete")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'userName': self.user_name,
            'email': self.email,
            'street': self.street,
            'city': self.city,
            'state': self.state,
            'zip': self.zip,
            'country': self.country,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'firstName': self.first_name,
            'lastName': self.last_name,
            'userName': self.user_name,
            'email': self.email,
            'street': self.street,
            'city': self.city,
            'state': self.state,
            'zip': self.zip,
            'country': self.country,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
            'products': [product.to_dict_no_additions() for product in self.products_u],
            'carts': [cart.to_dict_no_additions() for cart in self.carts_u],
            'orders': [order.to_dict_no_additions() for order in self.orders_u],
            "reviews": [review.to_dict_no_additions() for review in self.reviews_u],
            "favorites": [favorite.to_dict_no_additions() for favorite in self.favorites_u],
        }

    def __repr__(self):
        return f'<User model: id={self.id}, first_name={self.first_name}, last_name={self.last_name}, user_name={self.user_name}, email={self.email}, street={self.street}, city={self.city}, state={self.state}, zip={self.zip}>'
