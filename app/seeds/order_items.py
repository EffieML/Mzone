from app.models import db, Order_Item, environment, SCHEMA


def seed_order_items():
    # user2 orders------------------------------------------------------------------
    # order id 1, oi id 1
    order_item_001 = Order_Item(
        order_id=1,
        product_id=1,
        quantity=1
    )

    # user3 orders------------------------------------------------------------------
    # order id 2, oi id 2
    order_item_002 = Order_Item(
        order_id=2,
        product_id=1,
        quantity=1
    )
    # order id 2, oi id 3
    order_item_003 = Order_Item(
        order_id=2,
        product_id=3,
        quantity=1
    )

    db.session.add(order_item_001)
    db.session.add(order_item_002)
    db.session.add(order_item_003)

    db.session.commit()


def undo_order_items():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.order_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM order_items")

    db.session.commit()
