from .db import db, environment, SCHEMA, add_prefix_for_prod


class Favorite(db.Model):
    __tablename__ = 'favorites'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('products.id')), nullable=False)

    # relation section ----------------------------------------------
    user_f = db.relationship(
        "User", back_populates="favorites_u")
    product_f = db.relationship(
        "Product", back_populates="favorites_p")

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'user': self.user_f.to_dict_no_additions(),
            'product': self.product_f.to_dict_product_images(),
        }

    def __repr__(self):
        return f'<Favorite model: id={self.id}, user_id={self.user_id}, product_id={self.product_id}>'
