from app.models import db, Review, environment, SCHEMA
from datetime import datetime


def seed_reviews():
    # user2 product1 reviews------------------------------------------------------------------
    # review id 1
    review_001 = Review(
        user_id=2,
        product_id=1,
        stars=5,
        title='An excellent replacement for a gen 1 echo',
        review="I purchased the gen 5 echo dot with the clock display to replace an echo whos power supply died. The sound quality is comparable to the older, and taller echo. When setting a timer, the display becomes a countdown timer which means I no longer have to ask Alexa: How much time is left on the timer? So far it's been a seamless transition.",
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    # user3 product1 reviews------------------------------------------------------------------
    # review id 2
    review_002 = Review(
        user_id=3,
        product_id=1,
        stars=4,
        title='Wonderful addition to the house',
        review='I have been debating on adding Alexa to my house just due to some reluctance based on security issues. However, once I did some research and discovered the changes made to the 5th Gen Echo and Alexa framework, I made the final jump and I am so glad I did. The one draw back I am having is the training and some voice recognition aspects, but these are small things that I am having to learn and teach Alexa.',
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    # user3 product3 reviews------------------------------------------------------------------
    # review id 3
    review_003 = Review(
        user_id=3,
        product_id=3,
        stars=5,
        title='Great looking unique coffee and side table',
        review='We love this coffee and side table because they look so good! They were very easy to put together. Some of the legs were stored in the inside of the large table so that was a little confusing but easily figured out. The smaller table can be configured to be right next to the coffee table as another optional look or separated like we did!',
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    db.session.add(review_001)
    db.session.add(review_002)
    db.session.add(review_003)

    db.session.commit()


def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM reviews")

    db.session.commit()
