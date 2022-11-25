from .db import db, environment, SCHEMA, add_prefix_for_prod


class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('products.id')), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    title = db.Column(db.String(100), nullable=False)
    review = db.Column(db.String(2000), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    # relation section ----------------------------------------------
    user_r = db.relationship(
        "User", back_populates="reviews_u")
    product_r = db.relationship(
        "Product", back_populates="reviews_p")
    review_imgs_r = db.relationship(
        "Review_Img", back_populates="review_ri", cascade="all, delete")

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'stars': self.stars,
            'title': self.title,
            'review': self.review,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at
        }

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'productId': self.product_id,
            'stars': self.stars,
            'title': self.title,
            'review': self.review,
            'createdAt': self.created_at,
            'updatedAt': self.updated_at,
            'user': self.user_r.to_dict_no_additions(),
            'product': self.product_r.to_dict_product_images(),
            "images": [image.to_dict_no_additions() for image in self.review_imgs_r],
        }

    def __repr__(self):
        return f'<Favorite model: id={self.id}, user_id={self.user_id}, product_id={self.product_id}>'
