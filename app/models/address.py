from .db import db, environment, SCHEMA, add_prefix_for_prod


class Address(db.Model):
    __tablename__ = 'addresses'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod('users.id')), nullable=False)
    street = db.Column(db.String(255), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zip = db.Column(db.String(10), nullable=False)
    country = db.Column(db.String(50), nullable=False)

    # relation section ----------------------------------------------
    user_a = db.relationship(
        "User", back_populates="addresses_u")

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'street': self.street,
            'city': self.city,
            'state': self.state,
            'zip': self.zip,
            'country': self.country,
        }

    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.user_id,
            'street': self.street,
            'city': self.city,
            'state': self.state,
            'zip': self.zip,
            'country': self.country,
            'user': self.user_a.to_dict_no_additions(),
        }

    def __repr__(self):
        return f'<Address model: id={self.id}, user_id={self.user_id}, street={self.street}, city={self.city}, state={self.state}, zip={self.zip}>'
