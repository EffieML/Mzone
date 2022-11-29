from .db import db, environment, SCHEMA, add_prefix_for_prod


class Order_Item(db.Model):
    __tablename__ = 'order_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('orders.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('products.id')), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)

    # relation section ----------------------------------------------
    order_oi = db.relationship(
        "Order", back_populates="order_items_o")
    product_oi = db.relationship(
        "Product", back_populates="order_items_p")

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'orderId': self.order_id,
            'productId': self.product_id,
            'quantity': self.quantity,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'orderId': self.order_id,
            'productId': self.product_id,
            'quantity': self.quantity,
            'order': self.order_oi.to_dict_no_additions(),
            'product': self.product_oi.to_dict_product_images(),
        }

    def __repr__(self):
        return f'<Order Item model: id={self.id}, order_id={self.order_id}, product_id={self.product_id}, quantity={self.quantity}>'
