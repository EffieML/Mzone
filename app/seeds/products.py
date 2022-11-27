from app.models import db, Product, environment, SCHEMA
from datetime import datetime


def seed_products():
    # mzone device
    product_001 = Product(
        seller_id=1,
        name='All-New Echo Dot (5th Gen, 2022 release) with clock | Smart speaker with clock and Alexa | Cloud Blue',
        category='Mzone Devices',
        price=59.99,
        brand='Mzone',
        about='OUR BEST SOUNDING ECHO DOT YET - Enjoy an improved audio experience compared to any previous Echo Dot with Alexa for clearer vocals, deeper bass and vibrant sound in any room.',
        detail='Our most popular smart speaker features a sleek design and an improved LED display that shows the time, weather, song titles, and more. Enjoy enhanced audio for vibrant sound anywhere in your home, stay on track with help from Alexa, and control compatible smart home devices with your motion.',
        dimension='3.9"W x 3.9"D x 3.5"H',
        weight=0.67,
        quantity=100,
        # created_at=datetime.now(),
        # updated_at=datetime.now(),
    )

    product_002 = Product(
        seller_id=1,
        name='Echo Show 15, Full HD 15.6" smart display for family organization with Alexa',
        category='Mzone Devices',
        price=249.99,
        brand='Mzone',
        about='Alexa can show you even more - With a 15.6” Full HD (1080p) smart display and 5 MP camera, family organization and entertainment will look brilliant.',
        detail='Reimagine how your family stays organized and entertained with a personalized smart display that helps keep everyone on track and in sync. You can mount it on a wall or display it with a compatible stand (sold separately).',
        dimension='15.8"W x 9.9"H x 1.4"D',
        weight=4.88,
        quantity=100,
        # created_at=datetime.now(),
        # updated_at=datetime.now(),
    )

    # mzone home
    product_003 = Product(
        seller_id=2,
        name='COZAYH 2-Piece Modern Farmhouse Living Room Coffee Table Set, Nesting Table Round Natural Finish with Handcrafted Wood Ring Motif',
        category='Mzone Home',
        price=249.99,
        brand='Cozayh',
        about='dd warmth and classic rustic charm to your bedroom or living room with this distressed cylindrical table set. All pieces make matching colors easy with their neutral and natural wood finish while natural wood grain and knot variations may apply.',
        detail="Built on values of craftmanship, family, and affordable styles, COZAYH has served hundreds of millions of families in Europe, North America and Asia over the course of history since 1979. Ranging in style from Traditional to Modern and Contemporary, our products are designed in-house for style & quality you won't find anywhere else.",
        dimension='31.5"D x 31.5"W x 14.2"H',
        weight=33.51,
        quantity=10,
        # created_at=datetime.now(),
        # updated_at=datetime.now(),
    )

    product_004 = Product(
        seller_id=2,
        name='COZAYH Modern TV Stand Entertainment Cabinet, Console with a Natural Wood Finish and Matte Accents with Storage Doors for Living Media Room, Length: 47" x Width: 16" x Height: 22", Oak/Black',
        category='Mzone Home',
        price=178.19,
        brand='Cozayh',
        about='Mina is a unique and modern TV stand with its rattan details of texture on its cabinet doors that gives this entertainment console a sleek boho-chic design.',
        detail="The Mina TV stand, or entertainment cabinet, offers hidden storage as well as beauty and warmth. Mina's open shelving makes room for your stereo, or gaming system, with conveniently located cable management to run cords in the back of the unit. The cabinet doors feature adjustable shelves so you can create just the right amount of space that best suits your needs. The rattan details on the front doors, give this media console table a unique boho-chic design.",
        dimension='47"D x 16"W x 22"H',
        weight=57,
        quantity=10,
        # created_at=datetime.now(),
        # updated_at=datetime.now(),
    )

    db.session.add(product_001)
    db.session.add(product_002)
    db.session.add(product_003)
    db.session.add(product_004)

    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
