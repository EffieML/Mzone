from app.models import db, User, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    mzone = User(
        first_name='Mzone',
        last_name='Ecommerce',
        user_name='Mzone',
        email='mzone@aa.io',
        hashed_password='password')
    james = User(
        first_name='James',
        last_name='Nathan',
        user_name='James',
        email='james@aa.io',
        hashed_password='password',
        street='6550 Comanche Trail',
        city='Austin',
        state='Texas',
        zip='78732',
        country='United State')
    marnie = User(
        first_name='Marnie',
        last_name='Jones',
        user_name='Marnie',
        email='marnie@aa.io',
        hashed_password='password',
        street='4501 Woodway Dr',
        city='Houston',
        state='Texas',
        zip='77024',
        country='United State')

    db.session.add(mzone)
    db.session.add(james)
    db.session.add(marnie)
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
