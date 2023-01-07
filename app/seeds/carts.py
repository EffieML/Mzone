from app.models import db, Cart, environment, SCHEMA


def seed_carts():
    # user2 carts------------------------------------------------------------------
    # product id 1 ----------------------
    # cart id 1
    cart_001 = Cart(
        user_id=2,
        product_id=1,
        quantity=1,
    )
    # product id 2 ----------------------
    # cart id 2
    cart_002 = Cart(
        user_id=2,
        product_id=2,
        quantity=1,
    )
    # user3 carts------------------------------------------------------------------
    # product id 3 ----------------------
    # cart id 3
    cart_003 = Cart(
        user_id=3,
        product_id=9,
        quantity=1,
    )

    db.session.add(cart_001)
    db.session.add(cart_002)
    db.session.add(cart_003)

    db.session.commit()


def undo_carts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM carts")

    db.session.commit()
