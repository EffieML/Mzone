from app.models import db, Product_Img, environment, SCHEMA


def seed_product_imgs():
    # mzone device------------------------------------------------------------------
    # product id 1 echo dot----------------------
    # img id 1
    product001_img001 = Product_Img(
        product_id=1,
        url='https://m.media-amazon.com/images/I/61s30lrLDSL._AC_SY300_SX300_.jpg',
        preview=True,
    )
    # img id 2
    product001_img002 = Product_Img(
        product_id=1,
        url='https://m.media-amazon.com/images/I/71XqKlSdUCL._AC_SX679_.jpg',
        preview=False,
    )
    # img id 3
    product001_img003 = Product_Img(
        product_id=1,
        url='https://m.media-amazon.com/images/I/61hvnjBzxlL._AC_SX679_.jpg',
        preview=False,
    )

    # product id 2 echo show----------------------
    # img id 4
    product002_img001 = Product_Img(
        product_id=2,
        url='https://m.media-amazon.com/images/I/71MBZDz967L._AC_SY300_SX300_.jpg',
        preview=True,
    )
    # img id 5
    product002_img002 = Product_Img(
        product_id=2,
        url='https://m.media-amazon.com/images/I/813UdoM4Y2L._AC_SX679_.jpg',
        preview=False,
    )
    # img id 6
    product002_img003 = Product_Img(
        product_id=2,
        url='https://m.media-amazon.com/images/I/71FPX1G52qL._AC_SX679_.jpg',
        preview=False,
    )

    # mzone home------------------------------------------------------------------
    # product id 3 coffee table----------------------
    # img id 7
    product003_img001 = Product_Img(
        product_id=3,
        url='https://m.media-amazon.com/images/I/91RNXNIf2gS.__AC_SX300_SY300_QL70_FMwebp_.jpg',
        preview=True,
    )
    # img id 8
    product003_img002 = Product_Img(
        product_id=3,
        url='https://m.media-amazon.com/images/I/91cdU0eSSIS._AC_SX679_.jpg',
        preview=False,
    )
    # img id 9
    product003_img003 = Product_Img(
        product_id=3,
        url='https://m.media-amazon.com/images/I/51m-ogeM6ZL._AC_SX679_.jpg',
        preview=False,
    )

    # product id 4 TV stand----------------------
    # img id 10
    product004_img001 = Product_Img(
        product_id=4,
        url='https://m.media-amazon.com/images/I/81nmQ0KRsgL._AC_SX679_.jpg',
        preview=True,
    )
    # img id 11
    product004_img002 = Product_Img(
        product_id=4,
        url='https://m.media-amazon.com/images/I/91rGIa-dVfL._AC_SX679_.jpg',
        preview=False,
    )
    # img id 12
    product004_img003 = Product_Img(
        product_id=4,
        url='https://m.media-amazon.com/images/I/71kWY0ER4DL._AC_SX679_.jpg',
        preview=False,
    )

    db.session.add(product001_img001)
    db.session.add(product001_img002)
    db.session.add(product001_img003)
    db.session.add(product002_img001)
    db.session.add(product002_img002)
    db.session.add(product002_img003)
    db.session.add(product003_img001)
    db.session.add(product003_img002)
    db.session.add(product003_img003)
    db.session.add(product004_img001)
    db.session.add(product004_img002)
    db.session.add(product004_img003)

    db.session.commit()


def undo_product_imgs():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_imgs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_imgs")

    db.session.commit()
