from .db import db, environment, SCHEMA, add_prefix_for_prod


class Review_Img(db.Model):
    __tablename__ = 'review_imgs'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('reviews.id')), nullable=False)
    url = db.Column(db.String, nullable=False)
    preview = db.Column(db.Boolean, default=False)

# relation section ----------------------------------------------
    review_ri = db.relationship(
        "Review", back_populates="review_imgs_r")

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'reviewId': self.review_id,
            'url': self.url,
            'preview': self.preview,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'reviewId': self.review_id,
            'url': self.url,
            'preview': self.preview,
            'review': self.review_ri.to_dict_no_additions(),
        }

    def __repr__(self):
        return f'<Review Image model: id={self.id}, review_id={self.review_id}, url={self.url}, preview={self.preview}>'
