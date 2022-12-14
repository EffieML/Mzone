from app.models import db, Product_Img, environment, SCHEMA


def seed_product_imgs():
    # mzone device------------------------------------------------------------------
    # product id 1 echo dot----------------------
    # img id 1
    product001_img001 = Product_Img(
        product_id=1,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/1_echodot5/1.jpg',
        # preview=True,
    )
    # img id 2
    product001_img002 = Product_Img(
        product_id=1,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/1_echodot5/2.jpg',
        # preview=False,
    )
    # img id 3
    product001_img003 = Product_Img(
        product_id=1,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/1_echodot5/3.jpg',
        # preview=False,
    )

    # product id 2 echo show----------------------
    # img id 4
    product002_img001 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/1.jpg',
        # preview=True,
    )
    # img id 5
    product002_img002 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/2.jpg',
        # preview=False,
    )
    # img id 6
    product002_img003 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/3.jpg',
        # preview=False,
    )

    # mzone home------------------------------------------------------------------
    # product id 3 coffee table----------------------
    # img id 7
    product003_img001 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/1.jpg',
        # preview=True,
    )
    # img id 8
    product003_img002 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/2.jpg',
        # preview=False,
    )
    # img id 9
    product003_img003 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/3.jpg',
        # preview=False,
    )

    # product id 4 TV stand----------------------
    # img id 10
    product004_img001 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/1.jpg',
        # preview=True,
    )
    # img id 11
    product004_img002 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/2.jpg',
        # preview=False,
    )
    # img id 12
    product004_img003 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/3.jpg',
        # preview=False,
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
