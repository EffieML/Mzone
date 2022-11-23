from .db import db, environment, SCHEMA, add_prefix_for_prod


class Cart(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    quantity = db.Column(db.Integer, nullable=False)

    # user = db.relationship('User', back_populates='cart_item')
    # product = db.relationship('Product', back_populates='cart_item')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'quantity': self.quantity,
        }

    def __repr__(self):
        return f'<Cart model: id={self.id}, user_id={self.user_id}, product_id={self.product_id}, quantity={self.quantity}>'
