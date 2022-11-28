from .db import db, environment, SCHEMA, add_prefix_for_prod


class Product_Img(db.Model):
    __tablename__ = 'product_imgs'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('products.id')), nullable=False)
    url = db.Column(db.String, nullable=False)
    # preview = db.Column(db.Boolean, default=False)

# relation section ----------------------------------------------
    product_pi = db.relationship(
        "Product", back_populates="product_imgs_p")

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'url': self.url,
            # 'preview': self.preview,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'productId': self.product_id,
            'url': self.url,
            # 'preview': self.preview,
            'product': self.product_pi.to_dict_no_additions(),
        }

    def __repr__(self):
        return f'<Product Image model: id={self.id}, product_id={self.product_id}, url={self.url}>'
