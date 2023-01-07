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
    )
    # img id 4
    product001_img004 = Product_Img(
        product_id=1,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/1_echodot5/4.jpg',
    )
    # img id 5
    product001_img005 = Product_Img(
        product_id=1,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/1_echodot5/5.jpg',
    )
    # img id 6
    product001_img006 = Product_Img(
        product_id=1,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/1_echodot5/6.jpg',
    )
    # img id 7
    product001_img007 = Product_Img(
        product_id=1,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/1_echodot5/7.jpg',
    )

    # product id 2 echo show----------------------
    # img id 8
    product002_img001 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/1.jpg',
    )
    # img id 9
    product002_img002 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/2.jpg',
    )
    # img id 10
    product002_img003 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/3.jpg',
    )
    # img id 11
    product002_img004 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/4.jpg',
    )
    # img id 12
    product002_img005 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/5.jpg',
    )
    # img id 13
    product002_img006 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/6.jpg',
    )
    # img id 14
    product002_img007 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/7.jpg',
    )

    # product id 3 echo auto----------------------
    # img id 15
    product003_img001 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/1.jpg',
    )
    # img id 16
    product003_img002 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/2.jpg',
    )
    # img id 17
    product003_img003 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/3.jpg',
    )
    # img id 18
    product003_img004 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/4.jpg',
    )
    # img id 19
    product003_img005 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/5.jpg',
    )
    # img id 20
    product003_img006 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/6.jpg',
    )
    # img id 21
    product003_img007 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/7.jpg',
    )


# product id 4 echo show kids----------------------
    # img id 22
    product004_img001 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/1.jpg',
    )
    # img id 23
    product004_img002 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/2.jpg',
    )
    # img id 24
    product004_img003 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/3.jpg',
    )
    # img id 25
    product004_img004 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/4.jpg',
    )
    # img id 26
    product004_img005 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/5.jpg',
    )
    # img id 27
    product004_img006 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/6.jpg',
    )
    # img id 28
    product004_img007 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/7.jpg',
    )

# product id 5 fire tablet 10----------------------
    # img id 29
    product005_img001 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/2.jpg',
    )
    # img id 30
    product005_img002 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/3.jpg',
    )
    # img id 31
    product005_img003 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/4.jpg',
    )
    # img id 32
    product005_img004 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/5.jpg',
    )
    # img id 33
    product005_img005 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/1.jpg',
    )
    # img id 34
    product005_img006 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/6.jpg',
    )
    # img id 35
    product005_img007 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/7.jpg',
    )

    # product id 6 halo fitness ----------------------
    # img id 36
    product006_img001 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/1.jpg',
    )
    # img id 37
    product006_img002 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/2.jpg',
    )
    # img id 38
    product006_img003 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/3.jpg',
    )
    # img id 39
    product006_img004 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/4.jpg',
    )
    # img id 40
    product006_img005 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/5.jpg',
    )
    # img id 41
    product006_img006 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/6.jpg',
    )

    # product id 7 fire tablet kid----------------------
    # img id 42
    product007_img001 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/1.jpg',
    )
    # img id 43
    product007_img002 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/2.jpg',
    )
    # img id 44
    product007_img003 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/3.jpg',
    )
    # img id 45
    product007_img004 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/4.jpg',
    )
    # img id 46
    product007_img005 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/5.jpg',
    )
    # img id 47
    product007_img006 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/6.jpg',
    )
    # img id 48
    product007_img007 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/7.jpg',
    )

    # product id 8 soap dispenser----------------------
    # img id 49
    product008_img001 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/1.jpg',
    )
    # img id 50
    product008_img002 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/2.jpg',
    )
    # img id 51
    product008_img003 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/3.jpg',
    )
    # img id 52
    product008_img004 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/4.jpg',
    )
    # img id 53
    product008_img005 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/5.jpg',
    )
    # img id 54
    product008_img006 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/6.jpg',
    )

    # mzone home------------------------------------------------------------------
    # product id 9 coffee table----------------------
    # img id 55
    product009_img001 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/1.jpg',
    )
    # img id 56
    product009_img002 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/2.jpg',
    )
    # img id 57
    product009_img003 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/3.jpg',
    )
    # img id 58
    product009_img004 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/4.jpg',
    )
    # img id 59
    product009_img005 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/5.jpg',
    )
    # img id 60
    product009_img006 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/6.jpg',
    )
    # img id 61
    product009_img007 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/7.jpg',
    )

    # product id 10 TV stand----------------------
    # img id 62
    product010_img001 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/1.jpg',
    )
    # img id 63
    product010_img002 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/2.jpg',
    )
    # img id 64
    product010_img003 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/3.jpg',
    )
    # img id 65
    product010_img004 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/4.jpg',
    )
    # img id 66
    product010_img005 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/5.jpg',
    )
    # img id 67
    product010_img006 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/6.jpg',
    )
    # img id 68
    product010_img007 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/7.jpg',
    )

    db.session.add(product001_img001)
    db.session.add(product001_img002)
    db.session.add(product001_img003)
    db.session.add(product001_img004)
    db.session.add(product001_img005)
    db.session.add(product001_img006)
    db.session.add(product001_img007)

    db.session.add(product002_img001)
    db.session.add(product002_img002)
    db.session.add(product002_img003)
    db.session.add(product002_img004)
    db.session.add(product002_img005)
    db.session.add(product002_img006)
    db.session.add(product002_img007)

    db.session.add(product003_img001)
    db.session.add(product003_img002)
    db.session.add(product003_img003)
    db.session.add(product003_img004)
    db.session.add(product003_img005)
    db.session.add(product003_img006)
    db.session.add(product003_img007)

    db.session.add(product004_img001)
    db.session.add(product004_img002)
    db.session.add(product004_img003)
    db.session.add(product004_img004)
    db.session.add(product004_img005)
    db.session.add(product004_img006)
    db.session.add(product004_img007)

    db.session.add(product005_img001)
    db.session.add(product005_img002)
    db.session.add(product005_img003)
    db.session.add(product005_img004)
    db.session.add(product005_img005)
    db.session.add(product005_img006)
    db.session.add(product005_img007)

    db.session.add(product006_img001)
    db.session.add(product006_img002)
    db.session.add(product006_img003)
    db.session.add(product006_img004)
    db.session.add(product006_img005)
    db.session.add(product006_img006)

    db.session.add(product007_img001)
    db.session.add(product007_img002)
    db.session.add(product007_img003)
    db.session.add(product007_img004)
    db.session.add(product007_img005)
    db.session.add(product007_img006)
    db.session.add(product007_img007)

    db.session.add(product008_img001)
    db.session.add(product008_img002)
    db.session.add(product008_img003)
    db.session.add(product008_img004)
    db.session.add(product008_img005)
    db.session.add(product008_img006)

    db.session.add(product009_img001)
    db.session.add(product009_img002)
    db.session.add(product009_img003)
    db.session.add(product009_img004)
    db.session.add(product009_img005)
    db.session.add(product009_img006)
    db.session.add(product009_img007)

    db.session.add(product010_img001)
    db.session.add(product010_img002)
    db.session.add(product010_img003)
    db.session.add(product010_img004)
    db.session.add(product010_img005)
    db.session.add(product010_img006)
    db.session.add(product010_img007)

    db.session.commit()


def undo_product_imgs():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_imgs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_imgs")

    db.session.commit()
