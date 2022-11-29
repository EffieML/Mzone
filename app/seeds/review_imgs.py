from app.models import db, Review_Img, environment, SCHEMA


def seed_review_imgs():
    # mzone device------------------------------------------------------------------
    # review id 1 echo dot----------------------
    # img id 1
    review001_img001 = Review_Img(
        review_id=1,
        url='https://m.media-amazon.com/images/I/71ZW8IW3kDL._CR0,559,961,961_UX175.jpg',
    )

    # review id 3 coffee table----------------------
    # img id 2
    review003_img001 = Review_Img(
        review_id=3,
        url='https://m.media-amazon.com/images/I/714ojQBNDEL._SL1600_.jpg',
    )
    # img id 3
    review003_img002 = Review_Img(
        review_id=3,
        url='https://m.media-amazon.com/images/I/71oPMZR+aIL._SL1600_.jpg',
    )

    db.session.add(review001_img001)
    db.session.add(review003_img001)
    db.session.add(review003_img002)

    db.session.commit()


def undo_review_imgs():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.review_imgs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM review_imgs")

    db.session.commit()
