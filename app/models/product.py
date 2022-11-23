from .db import db, environment, SCHEMA, add_prefix_for_prod


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

    # relation section ----------------------------------------------
    user_p = db.relationship(
        "User", back_populates="products_u")
    carts_p = db.relationship(
        "Cart", back_populates="product_c", cascade="all, delete")
    order_items_p = db.relationship(
        "Order_Item", back_populates="product_oi", cascade="all, delete")
    product_imgs_p = db.relationship(
        "Product_Img", back_populates="product_pi", cascade="all, delete")
    reviews_p = db.relationship(
        "Review", back_populates="product_r", cascade="all, delete")
    favorites_p = db.relationship(
        "Favorite", back_populates="product_f", cascade="all, delete")

    def to_dict_no_additions(self):
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

    def to_dict_product_images(self):
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
            "images": [image.to_dict_no_additions() for image in self.product_imgs_p],
        }

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
            "user": self.user_p.to_dict_no_additions(),
            "carts": [cart.to_dict_no_additions() for cart in self.carts_p],
            "orderItems": [orderitem.to_dict_no_additions() for orderitem in self.order_items_p],
            "images": [image.to_dict_no_additions() for image in self.product_imgs_p],
            "reviews": [review.to_dict_no_additions() for review in self.reviews_p],
            "favorites": [favorite.to_dict_no_additions() for favorite in self.favorites_p],
        }

    def __repr__(self):
        return f"<Product model:  id={self.id}, seller_id={self.seller_id}, name={self.name}, price={self.price}, quantity={self.quantity}>"
