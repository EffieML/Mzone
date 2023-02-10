from app.models import db, User, environment, SCHEMA
from datetime import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    # mzone basic category
    mzone = User(
        firstname='Mzone',
        lastname='Ecommerce',
        username='Mzone',
        email='mzone@aa.io',
        password='password',
        # created_at=datetime.now(),
        # updated_at=datetime.now(),
    )
    # mzone home category
    robert = User(
        firstname='Robert',
        lastname='Smith',
        username='Robert',
        email='robert@aa.io',
        password='password',
    )
    oliver = User(
        firstname='Oliver',
        lastname='Hunter',
        username='Oliver',
        email='oliver@aa.io',
        password='password',
    )
    # computer category
    david = User(
        firstname='David',
        lastname='Brown',
        username='David',
        email='david@aa.io',
        password='password',
    )
    sarah = User(
        firstname='Sarah',
        lastname='Johnson',
        username='Sarah',
        email='sarah@aa.io',
        password='password',
    )
    # pets category
    marnie = User(
        firstname='Marnie',
        lastname='Jones',
        username='Marnie',
        email='marnie@aa.io',
        password='password',
        # created_at=datetime.now(),
        # updated_at=datetime.now(),
    )
    james = User(
        firstname='James',
        lastname='Nathan',
        username='James',
        email='james@aa.io',
        password='password',
        # created_at=datetime.now(),
        # updated_at=datetime.now(),
    )

    db.session.add(mzone)
    db.session.add(robert)
    db.session.add(oliver)
    db.session.add(david)
    db.session.add(sarah)
    db.session.add(marnie)
    db.session.add(james)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM users")

    db.session.commit()
