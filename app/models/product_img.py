from .db import db, environment, SCHEMA, add_prefix_for_prod


class Product_Img(db.Model):
    __tablename__ = 'product_imgs'

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    url = db.Column(db.String, nullable=False)

    # user = db.relationship('User', back_populates='cart_item')
    # product = db.relationship('Product', back_populates='cart_item')

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'url': self.url,
        }

    def __repr__(self):
        return f'<Cart model: id={self.id}, product_id={self.product_id}, url={self.url}>'
