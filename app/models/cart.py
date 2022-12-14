from .db import db, environment, SCHEMA, add_prefix_for_prod


class Cart(db.Model):
    __tablename__ = 'carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('products.id')), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    # relation section ----------------------------------------------
    user_c = db.relationship(
        "User", back_populates="carts_u")
    product_c = db.relationship(
        "Product", back_populates="carts_p")

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'quantity': self.quantity,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'quantity': self.quantity,
            'user': self.user_c.to_dict_no_additions(),
            'product': self.product_c.to_dict_product_images(),
        }

    def __repr__(self):
        return f'<Cart model: id={self.id}, user_id={self.user_id}, product_id={self.product_id}, quantity={self.quantity}>'
