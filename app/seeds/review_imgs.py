from app.models import db, Review_Img, environment, SCHEMA


def seed_review_imgs():
    # mzone device------------------------------------------------------------------
    # review id 1 echo dot----------------------
    # img id 1
    review001_img001 = Review_Img(
        review_id=1,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/review_imgs/1/1.jpg',
    )

    # review id 2 echo show kid----------------------
    # img id 2
    review002_img001 = Review_Img(
        review_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/review_imgs/2/1.jpg',
    )

    # img id 3
    review002_img002 = Review_Img(
        review_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/review_imgs/2/2.jpg',
    )

    # review id 4 coffee table----------------------
    # img id 4
    review004_img001 = Review_Img(
        review_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/review_imgs/4/1.jpg',
    )
    # img id 5
    review004_img002 = Review_Img(
        review_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/review_imgs/4/2.jpg',
    )

    db.session.add(review001_img001)
    db.session.add(review002_img001)
    db.session.add(review002_img002)
    db.session.add(review004_img001)
    db.session.add(review004_img002)

    db.session.commit()


def undo_review_imgs():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.review_imgs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM review_imgs")

    db.session.commit()
