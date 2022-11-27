from .db import db, environment, SCHEMA, add_prefix_for_prod


class Order(db.Model):
    __tablename__ = 'orders'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    # updated_at = db.Column(db.DateTime, nullable=False)

    # relation section ----------------------------------------------
    user_o = db.relationship(
        "User", back_populates="orders_u")
    order_items_o = db.relationship(
        "Order_Item", back_populates="order_oi", cascade="all, delete")

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'createdAt': self.created_at,
            # 'updatedAt': self.updated_at,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'createdAt': self.created_at,
            # 'updatedAt': self.updated_at,
            'user': self.user_o.to_dict_no_additions(),
            'orderItems': [orderitem.to_dict_no_additions() for orderitem in self.order_items_o]
        }

    def __repr__(self):
        return f'<Order model: id={self.id}, user_id={self.user_id}, created_at={self.created_at}>'
