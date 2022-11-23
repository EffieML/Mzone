from .db import db, environment, SCHEMA, add_prefix_for_prod


class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # user = db.relationship('User', back_populates='cart_item')

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
        }

    def __repr__(self):
        return f'<Order model: id={self.id}, user_id={self.user_id}, created_at={self.created_at}, updated_at={self.updated_at}>'
