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
        country='United States',
    )

    # user2 addresses------------------------------------------------------------------
    # address id 2 ----------------------
    address_002 = Address(
        user_id=2,
        street='6550 Comanche Trail',
        city='Austin',
        state='Texas',
        zip='78732',
        country='United States',
    )

    # user3 addresses------------------------------------------------------------------
    # address id 3 ----------------------
    address_003 = Address(
        user_id=3,
        street='4501 Woodway Dr',
        city='Houston',
        state='Texas',
        zip='77024',
        country='United States',
    )

    # user4 addresses------------------------------------------------------------------
    # address id 4 ----------------------
    address_004 = Address(
        user_id=4,
        street='554 9th Ave',
        city='San Francisco',
        state='California',
        zip='94118',
        country='United States',
    )

    # user5 addresses------------------------------------------------------------------
    # address id 5 ----------------------
    address_005 = Address(
        user_id=5,
        street='1807 SE 43rd Ave',
        city='Portland',
        state='Oregon',
        zip='97215',
        country='United States',
    )

    # user6 addresses------------------------------------------------------------------
    # address id 6 ----------------------
    address_006 = Address(
        user_id=6,
        street='5940 S Green St',
        city='Chicago',
        state='Illinois',
        zip='60621',
        country='United States',
    )

    # user7 addresses------------------------------------------------------------------
    # address id 7 ----------------------
    address_007 = Address(
        user_id=7,
        street='442 S Harvard Ave',
        city='Tulsa',
        state='Oklahoma',
        zip='74112',
        country='United States',
    )

    db.session.add(address_001)
    db.session.add(address_002)
    db.session.add(address_003)
    db.session.add(address_004)
    db.session.add(address_005)
    db.session.add(address_006)
    db.session.add(address_007)

    db.session.commit()


def undo_addresses():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.addresses RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM addresses")

    db.session.commit()
