from app.models import db, Order, environment, SCHEMA
from datetime import datetime


def seed_orders():
    # user2 orders------------------------------------------------------------------
    # order id 1
    order_001 = Order(
        user_id=2,
        created_at=datetime.now(),
        # updated_at=datetime.now(),
    )

    # user3 orders------------------------------------------------------------------
    # order id 2
    order_002 = Order(
        user_id=3,
        created_at=datetime.now(),
        # updated_at=datetime.now(),
    )

    db.session.add(order_001)
    db.session.add(order_002)

    db.session.commit()


def undo_orders():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.orders RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM orders")

    db.session.commit()
