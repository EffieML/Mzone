from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash


class Product(db.Model):
    __tablename__ = "products"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    seller_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(255), nullable=False)
    price = db.Column(db.Float, nullable=False)
    brand = db.Column(db.String(255), nullable=False)
    about = db.Column(db.String(1000), nullable=False)
    detail = db.Column(db.String(1000), nullable=False)
    dimension = db.Column(db.String(100), nullable=False)
    weight = db.Column(db.Float, nullable=False)
    asin = db.Column(db.String(100), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    def to_dict(self):

        return {
            "id": self.id,
            "sellerId": self.seller_id,
            "name": self.name,
            "category": self.category,
            "price": self.price,
            "brand": self.brand,
            "about": self.about,
            "detail": self.detail,
            "dimension": self.dimension,
            "weight": self.weight,
            "asin": self.asin,
            "quantity": self.quantity,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }

    def __repr__(self):
        return f"<Product model:  id={self.id}, seller_id={self.seller_id}, name={self.name}, price={self.price}, quantity={self.quantity}>"
