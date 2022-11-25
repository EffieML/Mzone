from app.models import db, Favorite, environment, SCHEMA


def seed_favorites():
    # user3 favorites------------------------------------------------------------------
    # favorite id 1
    favorite_001 = Favorite(
        user_id=3,
        product_id=2,
    )

    db.session.add(favorite_001)

    db.session.commit()


def undo_favorites():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.favorites RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM favorites")

    db.session.commit()
