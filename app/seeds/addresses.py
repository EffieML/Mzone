from app.models import db, Address, environment, SCHEMA


def seed_addresses():
    # user1 addresses------------------------------------------------------------------
    # address id 1 ----------------------
    address_001 = Address(
        user_id=1,
        street='410 Terry Ave N',
        city='Seattle',
        state='Washington',
        zip='98109',
        country='United State',
    )

    # user2 addresses------------------------------------------------------------------
    # address id 2 ----------------------
    address_002 = Address(
        user_id=2,
        street='6550 Comanche Trail',
        city='Austin',
        state='Texas',
        zip='78732',
        country='United State',
    )

    # user3 addresses------------------------------------------------------------------
    # address id 3 ----------------------
    address_003 = Address(
        user_id=3,
        street='4501 Woodway Dr',
        city='Houston',
        state='Texas',
        zip='77024',
        country='United State',
    )

    db.session.add(address_001)
    db.session.add(address_002)
    db.session.add(address_003)

    db.session.commit()


def undo_addresses():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.addresses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM addresses")

    db.session.commit()
