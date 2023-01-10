from app.models import db, Product, environment, SCHEMA
from datetime import datetime


def seed_products():
    # mzone device ----------------------------------------------------------------------------------------------------
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

    product_003 = Product(
        seller_id=1,
        name='All-New Echo Auto (2nd Gen, 2022 release) | Add Alexa to your car',
        category='Mzone Devices',
        price=54.99,
        brand='Mzone',
        about="HANDS-FREE ALEXA ACCESSORY - Slim design that's easy to place in your car and 5-mic built-in so Alexa can hear you over music, A/C, or road noise. Includes a fast car charger to charge your phone on the go.",
        detail="Echo Auto is a hands-free Alexa car accessory that helps you make the most of your drive. Just ask Alexa to play music, make calls, set reminders, and more. Featuring a slim design that's easy to place in your car, 5-mics that can hear you over music, A/C, or road noise, and a phone fast car charger to charge your phone on the go.",
        dimension='Mic: 2.05"W x 0.91"H x 0.6"D  Speaker: 2.24"W x 1.38"H x 0.55"D',
        weight=0.13,
        quantity=100,
    )

    product_004 = Product(
        seller_id=1,
        name='Echo Show 5 (2nd Gen) Kids | Designed for kids, with parental controls | Chameleon',
        category='Mzone Devices',
        price=44.99,
        brand='Mzone',
        about="Make their room the coolest in the house - Kids can ask Alexa to play videos, help with homework, and make video calls to approved contacts - all wrapped in a bright chameleon design.",
        detail="Make your kid's room the coolest in the house (check out that chameleon design). Kids can ask Alexa to play videos and music, help them with homework, and even make video calls to parent-approved friends and family. The included 1-year Amazon Kids+ subscription unlocks a world of kid-friendly content that's both fun and educational.",
        dimension='5.8"W x 3.4"H x 2.9"D',
        weight=0.90,
        quantity=100,
    )

    product_005 = Product(
        seller_id=1,
        name='Amazon Fire HD 10 tablet, 10.1", 1080p Full HD, 32 GB, latest model (2021 release), Black',
        category='Mzone Devices',
        price=149.99,
        brand='Mzone',
        about="Enjoy your favorite apps like Netflix, Facebook, Hulu, Instagram, TikTok, and more through Amazon's Appstore (Google Play not supported. Subscription for some apps required).",
        detail="Great for on-the-go Enjoy up to 12 hours of reading, browsing the web over wifi, watching videos, and listening to music from anywhere. Power back up via the USB-C (2.0) port. Amazon engineers Fire tablets to hold up against everyday life. As measured in tumble tests, Fire HD 10 is 1.7x more durable than the latest iPad 10.2. Screen made with strengthened aluminosilicate glass.",
        dimension='9.7"W x 6.5"H x 0.4"D',
        weight=1,
        quantity=100,
    )

    product_006 = Product(
        seller_id=1,
        name='Amazon Halo View fitness tracker, with color display for at-a-glance access to heart rate, activity, and sleep tracking - Active Black - Medium/Large',
        category='Mzone Devices',
        price=49.99,
        brand='Mzone',
        about="More than just counting steps — Access key Halo health metrics like heart rate, Activity points, Sleep score, and on-demand blood oxygen levels on the Halo View color touch display.",
        detail="Build a healthier lifestyle, right from your wrist. Starting a new health and wellness journey is easier when you have a great partner. Your Halo View (and your Halo membership) will be there with you every step of the way.",
        dimension='band size 130-195mm',
        weight=0.11,
        quantity=100,
    )

    product_007 = Product(
        seller_id=1,
        name='All-new Amazon Fire HD 8 Kids tablet, 8" HD display, ages 3-7, with age-appropriate curated content and easy-to-use Parent Dashboard, 32 GB, (2022 release), Disney Mickey Mouse',
        category='Mzone Devices',
        price=159.99,
        brand='Mzone',
        about='All-new Amazon Fire HD 8 Kids tablet, 8" HD display, ages 3-7, with age-appropriate curated content and easy-to-use Parent Dashboard, 32 GB, (2022 release), Disney Mickey Mouse',
        detail='Learn. Play. Create. All their faves, always ad-free Amazon Kids+ is an all-in-one subscription offering access to thousands of books, Audible books, movies, TV shows, music stations, apps, and games for kids ages 3-7.',
        dimension='6.4"W x 7.9"H x 1.1"D',
        weight=0.94,
        quantity=100,
    )

    product_008 = Product(
        seller_id=1,
        name='Amazon Smart Soap Dispenser, automatic 12-oz dispenser with 20-second timer, Works with Alexa',
        category='Mzone Devices',
        price=34.99,
        brand='Mzone',
        about="Make handwashing count - The automatic dispenser's 20-second timer lights up as you lather, guiding you to wash for the CDC-recommended minimum amount of time.",
        detail='Make handwashing count. Introducing Amazon Smart Soap Dispenser, an automatic dispenser that does the counting for you. After your soap dispenses, the 20-second LED timer ticks down—guiding you to scrub for the CDC-recommended minimum amount of time.',
        dimension='3.65"W x 6.1"H x 3.97"D',
        weight=0.72,
        quantity=100,
    )

    # mzone home ----------------------------------------------------------------------------------------------------
    product_009 = Product(
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
    )

    product_010 = Product(
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
    )

    # product_011 = Product(
    #     seller_id=2,
    #     name='COZAYH Modern TV Stand Entertainment Cabinet, Console with a Natural Wood Finish and Matte Accents with Storage Doors for Living Media Room, Length: 47" x Width: 16" x Height: 22", Oak/Black',
    #     category='Mzone Home',
    #     price=178.19,
    #     brand='Cozayh',
    #     about='Mina is a unique and modern TV stand with its rattan details of texture on its cabinet doors that gives this entertainment console a sleek boho-chic design.',
    #     detail="The Mina TV stand, or entertainment cabinet, offers hidden storage as well as beauty and warmth. Mina's open shelving makes room for your stereo, or gaming system, with conveniently located cable management to run cords in the back of the unit. The cabinet doors feature adjustable shelves so you can create just the right amount of space that best suits your needs. The rattan details on the front doors, give this media console table a unique boho-chic design.",
    #     dimension='47"D x 16"W x 22"H',
    #     weight=57,
    #     quantity=10,
    # )

    db.session.add(product_001)
    db.session.add(product_002)
    db.session.add(product_003)
    db.session.add(product_004)
    db.session.add(product_005)
    db.session.add(product_006)
    db.session.add(product_007)
    db.session.add(product_008)
    db.session.add(product_009)
    db.session.add(product_010)

    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
