from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    firstname = db.Column(db.String(50), nullable=False)
    lastname = db.Column(db.String(50), nullable=False)
    username = db.Column(db.String(50), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    # created_at = db.Column(db.DateTime, nullable=False)
    # updated_at = db.Column(db.DateTime, nullable=False)


# relation section ----------------------------------------------
    addresses_u = db.relationship(
        "Address", back_populates="user_a", cascade="all, delete")
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
            'firstname': self.firstname,
            'lastname': self.lastname,
            'username': self.username,
            'email': self.email,
            # 'createdAt': self.created_at,
            # 'updatedAt': self.updated_at,
        }

    def to_dict_products(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'username': self.username,
            'email': self.email,
            # 'createdAt': self.created_at,
            # 'updatedAt': self.updated_at,
            'products': [product.to_dict_product_images() for product in self.products_u],
        }

    def to_dict_addresses(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'username': self.username,
            'email': self.email,
            # 'createdAt': self.created_at,
            # 'updatedAt': self.updated_at,
            'addresses': [address.to_dict_no_additions() for address in self.addresses_u],
        }

    def to_dict(self):
        return {
            'id': self.id,
            'firstname': self.firstname,
            'lastname': self.lastname,
            'username': self.username,
            'email': self.email,
            # 'createdAt': self.created_at,
            # 'updatedAt': self.updated_at,
            'addresses': [address.to_dict_no_additions() for address in self.addresses_u],
            'products': [product.to_dict_no_additions() for product in self.products_u],
            'carts': [cart.to_dict_no_additions() for cart in self.carts_u],
            'orders': [order.to_dict_no_additions() for order in self.orders_u],
            "reviews": [review.to_dict_no_additions() for review in self.reviews_u],
            "favorites": [favorite.to_dict_no_additions() for favorite in self.favorites_u],
        }

    def __repr__(self):
        return f'<User model: id={self.id}, firstname={self.firstname}, lastname={self.lastname}, username={self.username}, email={self.email}>'
