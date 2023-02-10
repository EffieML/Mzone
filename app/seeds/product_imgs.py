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
    # # img id 6
    # product001_img006 = Product_Img(
    #     product_id=1,
    #     url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/1_echodot5/6.jpg',
    # )
    # # img id 7
    # product001_img007 = Product_Img(
    #     product_id=1,
    #     url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/1_echodot5/7.jpg',
    # )

    # product id 2 echo show----------------------
    # img id 6
    product002_img001 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/1.jpg',
    )
    # img id 7
    product002_img002 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/2.jpg',
    )
    # img id 8
    product002_img003 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/3.jpg',
    )
    # img id 9
    product002_img004 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/4.jpg',
    )
    # img id 10
    product002_img005 = Product_Img(
        product_id=2,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/2_echoshow15/5.jpg',
    )

    # product id 3 echo auto----------------------
    # img id 11
    product003_img001 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/1.jpg',
    )
    # img id 12
    product003_img002 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/2.jpg',
    )
    # img id 13
    product003_img003 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/3.jpg',
    )
    # img id 14
    product003_img004 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/4.jpg',
    )
    # img id 15
    product003_img005 = Product_Img(
        product_id=3,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/3_echoauto/5.jpg',
    )


# product id 4 echo show kids----------------------
    # img id 16
    product004_img001 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/1.jpg',
    )
    # img id 17
    product004_img002 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/2.jpg',
    )
    # img id 18
    product004_img003 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/3.jpg',
    )
    # img id 19
    product004_img004 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/4.jpg',
    )
    # img id 20
    product004_img005 = Product_Img(
        product_id=4,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/4_echoshowkids/5.jpg',
    )

# product id 5 fire tablet 10----------------------
    # img id 21
    product005_img001 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/2.jpg',
    )
    # img id 22
    product005_img002 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/3.jpg',
    )
    # img id 23
    product005_img003 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/4.jpg',
    )
    # img id 24
    product005_img004 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/5.jpg',
    )
    # img id 25
    product005_img005 = Product_Img(
        product_id=5,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/5_firetablet10/1.jpg',
    )

    # product id 6 halo fitness ----------------------
    # img id 26
    product006_img001 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/1.jpg',
    )
    # img id 27
    product006_img002 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/2.jpg',
    )
    # img id 28
    product006_img003 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/3.jpg',
    )
    # img id 29
    product006_img004 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/4.jpg',
    )
    # img id 30
    product006_img005 = Product_Img(
        product_id=6,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/6_halofitness/5.jpg',
    )

    # product id 7 fire tablet kid----------------------
    # img id 31
    product007_img001 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/1.jpg',
    )
    # img id 32
    product007_img002 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/2.jpg',
    )
    # img id 33
    product007_img003 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/3.jpg',
    )
    # img id 34
    product007_img004 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/4.jpg',
    )
    # img id 35
    product007_img005 = Product_Img(
        product_id=7,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/7_firetabletkid/5.jpg',
    )

    # product id 8 soap dispenser----------------------
    # img id 36
    product008_img001 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/1.jpg',
    )
    # img id 37
    product008_img002 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/2.jpg',
    )
    # img id 38
    product008_img003 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/3.jpg',
    )
    # img id 39
    product008_img004 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/4.jpg',
    )
    # img id 40
    product008_img005 = Product_Img(
        product_id=8,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/1_mzone_device/8_soapdispenser/5.jpg',
    )

    # mzone home------------------------------------------------------------------
    # product id 9 coffee table----------------------
    # img id 41
    product009_img001 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/1.jpg',
    )
    # img id 42
    product009_img002 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/2.jpg',
    )
    # img id 43
    product009_img003 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/3.jpg',
    )
    # img id 44
    product009_img004 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/4.jpg',
    )
    # img id 45
    product009_img005 = Product_Img(
        product_id=9,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_coffetable/5.jpg',
    )

    # product id 10 TV stand----------------------
    # img id 46
    product010_img001 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/1.jpg',
    )
    # img id 47
    product010_img002 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/2.jpg',
    )
    # img id 48
    product010_img003 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/3.jpg',
    )
    # img id 49
    product010_img004 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/4.jpg',
    )
    # img id 50
    product010_img005 = Product_Img(
        product_id=10,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_tvstand/5.jpg',
    )

    # product id 11 sofa----------------------
    # img id 51
    product011_img001 = Product_Img(
        product_id=11,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_sofa/1.jpg',
    )
    # img id 52
    product011_img002 = Product_Img(
        product_id=11,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_sofa/2.jpg',
    )
    # img id 53
    product011_img003 = Product_Img(
        product_id=11,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_sofa/3.jpg',
    )
    # img id 54
    product011_img004 = Product_Img(
        product_id=11,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_sofa/4.jpg',
    )
    # img id 55
    product011_img005 = Product_Img(
        product_id=11,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/3_sofa/5.jpg',
    )

    # product id 12 computer desk----------------------
    # img id 56
    product012_img001 = Product_Img(
        product_id=12,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_computer_desk/1.jpg',
    )
    # img id 57
    product012_img002 = Product_Img(
        product_id=12,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_computer_desk/2.jpg',
    )
    # img id 58
    product012_img003 = Product_Img(
        product_id=12,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_computer_desk/3.jpg',
    )
    # img id 59
    product012_img004 = Product_Img(
        product_id=12,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_computer_desk/4.jpg',
    )
    # img id 60
    product012_img005 = Product_Img(
        product_id=12,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/4_computer_desk/5.jpg',
    )

    # product id 13 dinning table----------------------
    # img id 61
    product013_img001 = Product_Img(
        product_id=13,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/5_dinning_table/1.jpg',
    )
    # img id 62
    product013_img002 = Product_Img(
        product_id=13,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/5_dinning_table/2.jpg',
    )
    # img id 63
    product013_img003 = Product_Img(
        product_id=13,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/5_dinning_table/3.jpg',
    )
    # img id 64
    product013_img004 = Product_Img(
        product_id=13,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/5_dinning_table/4.jpg',
    )
    # img id 65
    product013_img005 = Product_Img(
        product_id=13,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/5_dinning_table/5.jpg',
    )

    # product id 14 sofa----------------------
    # img id 66
    product014_img001 = Product_Img(
        product_id=14,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/6_white_sofa/1.jpg',
    )
    # img id 67
    product014_img002 = Product_Img(
        product_id=14,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/6_white_sofa/2.jpg',
    )
    # img id 68
    product014_img003 = Product_Img(
        product_id=14,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/6_white_sofa/3.jpg',
    )
    # img id 69
    product014_img004 = Product_Img(
        product_id=14,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/6_white_sofa/4.jpg',
    )
    # img id 70
    product014_img005 = Product_Img(
        product_id=14,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/6_white_sofa/5.jpg',
    )

    # product id 15 bench----------------------
    # img id 71
    product015_img001 = Product_Img(
        product_id=15,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/7_white_bench/1.jpg',
    )
    # img id 72
    product015_img002 = Product_Img(
        product_id=15,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/7_white_bench/2.jpg',
    )
    # img id 73
    product015_img003 = Product_Img(
        product_id=15,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/7_white_bench/3.jpg',
    )
    # img id 74
    product015_img004 = Product_Img(
        product_id=15,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/7_white_bench/4.jpg',
    )

    # product id 16 kid chair----------------------
    # img id 75
    product016_img001 = Product_Img(
        product_id=16,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/8_kid_chair/1.jpg',
    )
    # img id 76
    product016_img002 = Product_Img(
        product_id=16,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/8_kid_chair/2.jpg',
    )
    # img id 77
    product016_img003 = Product_Img(
        product_id=16,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/8_kid_chair/3.jpg',
    )
    # img id 78
    product016_img004 = Product_Img(
        product_id=16,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/8_kid_chair/4.jpg',
    )
    # img id 79
    product016_img005 = Product_Img(
        product_id=16,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/2_mzone_home/8_kid_chair/5.jpg',
    )

    # mzone computer------------------------------------------------------------------
    # product id 17 mouse----------------------
    # img id 80
    product017_img001 = Product_Img(
        product_id=17,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/1_mouse/5.jpg',
    )
    # img id 81
    product017_img002 = Product_Img(
        product_id=17,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/1_mouse/4.jpg',
    )
    # img id 82
    product017_img003 = Product_Img(
        product_id=17,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/1_mouse/2.jpg',
    )
    # img id 83
    product017_img004 = Product_Img(
        product_id=17,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/1_mouse/3.jpg',
    )
    # img id 84
    product017_img005 = Product_Img(
        product_id=17,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/1_mouse/1.jpg',
    )

    # product id 18 keyboard ----------------------
    # img id 85
    product018_img001 = Product_Img(
        product_id=18,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/2_keyboard/1.jpg',
    )
    # img id 86
    product018_img002 = Product_Img(
        product_id=18,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/2_keyboard/2.jpg',
    )
    # img id 87
    product018_img003 = Product_Img(
        product_id=18,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/2_keyboard/3.jpg',
    )
    # img id 88
    product018_img004 = Product_Img(
        product_id=18,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/2_keyboard/4.jpg',
    )
    # img id 89
    product018_img005 = Product_Img(
        product_id=18,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/2_keyboard/5.jpg',
    )

    # product id 19 earphone ----------------------
    # img id 90
    product019_img001 = Product_Img(
        product_id=19,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/6_earphone/5.jpg',
    )
    # img id 91
    product019_img002 = Product_Img(
        product_id=19,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/6_earphone/4.jpg',
    )
    # img id 92
    product019_img003 = Product_Img(
        product_id=19,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/6_earphone/3.jpg',
    )
    # img id 93
    product019_img004 = Product_Img(
        product_id=19,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/6_earphone/1.jpg',
    )
    # img id 94
    product019_img005 = Product_Img(
        product_id=19,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/6_earphone/2.jpg',
    )

    # product id 20 camera ----------------------
    # img id 95
    product020_img001 = Product_Img(
        product_id=20,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/5_camera/2.jpg',
    )
    # img id 96
    product020_img002 = Product_Img(
        product_id=20,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/5_camera/3.jpg',
    )
    # img id 97
    product020_img003 = Product_Img(
        product_id=20,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/5_camera/4.jpg',
    )
    # img id 98
    product020_img004 = Product_Img(
        product_id=20,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/5_camera/1.jpg',
    )
    # img id 99
    product020_img005 = Product_Img(
        product_id=20,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/5_camera/5.jpg',
    )

    # product id 21 pen ----------------------
    # img id 100
    product021_img001 = Product_Img(
        product_id=21,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/7_pen/1.jpg',
    )
    # img id 101
    product021_img002 = Product_Img(
        product_id=21,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/7_pen/2.jpg',
    )
    # img id 102
    product021_img003 = Product_Img(
        product_id=21,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/7_pen/3.jpg',
    )
    # img id 103
    product021_img004 = Product_Img(
        product_id=21,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/7_pen/4.jpg',
    )
    # img id 104
    product021_img005 = Product_Img(
        product_id=21,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/7_pen/5.jpg',
    )

    # product id 22 dell screen ----------------------
    # img id 105
    product022_img001 = Product_Img(
        product_id=22,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/3_dell_screen/1.jpg',
    )
    # img id 106
    product022_img002 = Product_Img(
        product_id=22,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/3_dell_screen/2.jpg',
    )
    # img id 107
    product022_img003 = Product_Img(
        product_id=22,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/3_dell_screen/3.jpg',
    )
    # img id 108
    product022_img004 = Product_Img(
        product_id=22,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/3_dell_screen/4.jpg',
    )
    # img id 109
    product022_img005 = Product_Img(
        product_id=22,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/3_dell_screen/5.jpg',
    )

    # product id 23 LG screen ----------------------
    # img id 110
    product023_img001 = Product_Img(
        product_id=23,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/4_LG_screen/1.jpg',
    )
    # img id 111
    product023_img002 = Product_Img(
        product_id=23,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/4_LG_screen/2.jpg',
    )
    # img id 112
    product023_img003 = Product_Img(
        product_id=23,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/4_LG_screen/3.jpg',
    )
    # img id 113
    product023_img004 = Product_Img(
        product_id=23,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/4_LG_screen/4.jpg',
    )
    # img id 114
    product023_img005 = Product_Img(
        product_id=23,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/4_LG_screen/5.jpg',
    )

    # product id 24 stand ----------------------
    # img id 115
    product024_img001 = Product_Img(
        product_id=24,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/8_stand/1.jpg',
    )
    # img id 116
    product024_img002 = Product_Img(
        product_id=24,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/8_stand/2.jpg',
    )
    # img id 117
    product024_img003 = Product_Img(
        product_id=24,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/8_stand/3.jpg',
    )
    # img id 118
    product024_img004 = Product_Img(
        product_id=24,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/8_stand/4.jpg',
    )
    # img id 119
    product024_img005 = Product_Img(
        product_id=24,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/3_computer/8_stand/5.jpg',
    )

    # mzone pets------------------------------------------------------------------
    # product id 25 cat scratch ----------------------
    # img id 120
    product025_img001 = Product_Img(
        product_id=25,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/1_cat_scratch/1.jpg',
    )
    # img id 121
    product025_img002 = Product_Img(
        product_id=25,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/1_cat_scratch/2.jpg',
    )
    # img id 122
    product025_img003 = Product_Img(
        product_id=25,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/1_cat_scratch/3.jpg',
    )
    # img id 123
    product025_img004 = Product_Img(
        product_id=25,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/1_cat_scratch/4.jpg',
    )
    # img id 124
    product025_img005 = Product_Img(
        product_id=25,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/1_cat_scratch/5.jpg',
    )

    # product id 26 cat toy ----------------------
    # img id 125
    product026_img001 = Product_Img(
        product_id=26,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/2_cat_toy/1.jpg',
    )
    # img id 126
    product026_img002 = Product_Img(
        product_id=26,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/2_cat_toy/2.jpg',
    )
    # img id 127
    product026_img003 = Product_Img(
        product_id=26,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/2_cat_toy/3.jpg',
    )
    # img id 128
    product026_img004 = Product_Img(
        product_id=26,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/2_cat_toy/4.jpg',
    )
    # img id 129
    product026_img005 = Product_Img(
        product_id=26,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/2_cat_toy/5.jpg',
    )

    # product id 27 dog clothes ----------------------
    # img id 130
    product027_img001 = Product_Img(
        product_id=27,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/3_dog_clothes/1.jpg',
    )
    # img id 131
    product027_img002 = Product_Img(
        product_id=27,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/3_dog_clothes/2.jpg',
    )
    # img id 132
    product027_img003 = Product_Img(
        product_id=27,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/3_dog_clothes/3.jpg',
    )
    # img id 133
    product027_img004 = Product_Img(
        product_id=27,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/3_dog_clothes/4.jpg',
    )
    # img id 134
    product027_img005 = Product_Img(
        product_id=27,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/3_dog_clothes/5.jpg',
    )

    # product id 28 dog bed ----------------------
    # img id 135
    product028_img001 = Product_Img(
        product_id=28,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/4_dog_bed/1.jpg',
    )
    # img id 136
    product028_img002 = Product_Img(
        product_id=28,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/4_dog_bed/2.jpg',
    )
    # img id 137
    product028_img003 = Product_Img(
        product_id=28,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/4_dog_bed/3.jpg',
    )
    # img id 138
    product028_img004 = Product_Img(
        product_id=28,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/4_dog_bed/4.jpg',
    )
    # img id 139
    product028_img005 = Product_Img(
        product_id=28,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/4_dog_bed/5.jpg',
    )

    # product id 29 dog collar ----------------------
    # img id 140
    product029_img001 = Product_Img(
        product_id=29,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/5_dog_collar/1.jpg',
    )
    # img id 141
    product029_img002 = Product_Img(
        product_id=29,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/5_dog_collar/2.jpg',
    )
    # img id 142
    product029_img003 = Product_Img(
        product_id=29,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/5_dog_collar/3.jpg',
    )
    # img id 143
    product029_img004 = Product_Img(
        product_id=29,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/5_dog_collar/4.jpg',
    )
    # img id 144
    product029_img005 = Product_Img(
        product_id=29,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/5_dog_collar/5.jpg',
    )

    # product id 30 bird toys----------------------
    # img id 145
    product030_img001 = Product_Img(
        product_id=30,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/6_birds_toy/1.jpg',
    )
    # img id 146
    product030_img002 = Product_Img(
        product_id=30,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/6_birds_toy/2.jpg',
    )
    # img id 147
    product030_img003 = Product_Img(
        product_id=30,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/6_birds_toy/3.jpg',
    )
    # img id 148
    product030_img004 = Product_Img(
        product_id=30,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/6_birds_toy/4.jpg',
    )
    # img id 149
    product030_img005 = Product_Img(
        product_id=30,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/6_birds_toy/5.jpg',
    )

    # product id 31 chinchilla toys----------------------
    # img id 150
    product031_img001 = Product_Img(
        product_id=31,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/7_chinchilla_toy/1.jpg',
    )
    # img id 151
    product031_img002 = Product_Img(
        product_id=31,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/7_chinchilla_toy/2.jpg',
    )
    # img id 152
    product031_img003 = Product_Img(
        product_id=31,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/7_chinchilla_toy/3.jpg',
    )
    # img id 153
    product031_img004 = Product_Img(
        product_id=31,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/7_chinchilla_toy/4.jpg',
    )
    # img id 154
    product031_img005 = Product_Img(
        product_id=31,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/7_chinchilla_toy/5.jpg',
    )

    # product id 32 hamster toys----------------------
    # img id 155
    product032_img001 = Product_Img(
        product_id=32,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/8_mouse_toy/1.jpg',
    )
    # img id 156
    product032_img002 = Product_Img(
        product_id=32,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/8_mouse_toy/2.jpg',
    )
    # img id 157
    product032_img003 = Product_Img(
        product_id=32,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/8_mouse_toy/3.jpg',
    )
    # img id 158
    product032_img004 = Product_Img(
        product_id=32,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/8_mouse_toy/4.jpg',
    )
    # img id 159
    product032_img005 = Product_Img(
        product_id=32,
        url='https://mingprojectawsbucket.s3.amazonaws.com/seed/product_imgs/4_pet_supplies/8_mouse_toy/5.jpg',
    )

    db.session.add(product001_img001)
    db.session.add(product001_img002)
    db.session.add(product001_img003)
    db.session.add(product001_img004)
    db.session.add(product001_img005)

    db.session.add(product002_img001)
    db.session.add(product002_img002)
    db.session.add(product002_img003)
    db.session.add(product002_img004)
    db.session.add(product002_img005)

    db.session.add(product003_img001)
    db.session.add(product003_img002)
    db.session.add(product003_img003)
    db.session.add(product003_img004)
    db.session.add(product003_img005)

    db.session.add(product004_img001)
    db.session.add(product004_img002)
    db.session.add(product004_img003)
    db.session.add(product004_img004)
    db.session.add(product004_img005)

    db.session.add(product005_img001)
    db.session.add(product005_img002)
    db.session.add(product005_img003)
    db.session.add(product005_img004)
    db.session.add(product005_img005)

    db.session.add(product006_img001)
    db.session.add(product006_img002)
    db.session.add(product006_img003)
    db.session.add(product006_img004)
    db.session.add(product006_img005)

    db.session.add(product007_img001)
    db.session.add(product007_img002)
    db.session.add(product007_img003)
    db.session.add(product007_img004)
    db.session.add(product007_img005)

    db.session.add(product008_img001)
    db.session.add(product008_img002)
    db.session.add(product008_img003)
    db.session.add(product008_img004)
    db.session.add(product008_img005)

    db.session.add(product009_img001)
    db.session.add(product009_img002)
    db.session.add(product009_img003)
    db.session.add(product009_img004)
    db.session.add(product009_img005)

    db.session.add(product010_img001)
    db.session.add(product010_img002)
    db.session.add(product010_img003)
    db.session.add(product010_img004)
    db.session.add(product010_img005)

    db.session.add(product011_img001)
    db.session.add(product011_img002)
    db.session.add(product011_img003)
    db.session.add(product011_img004)
    db.session.add(product011_img005)

    db.session.add(product012_img001)
    db.session.add(product012_img002)
    db.session.add(product012_img003)
    db.session.add(product012_img004)
    db.session.add(product012_img005)

    db.session.add(product013_img001)
    db.session.add(product013_img002)
    db.session.add(product013_img003)
    db.session.add(product013_img004)
    db.session.add(product013_img005)

    db.session.add(product014_img001)
    db.session.add(product014_img002)
    db.session.add(product014_img003)
    db.session.add(product014_img004)
    db.session.add(product014_img005)

    db.session.add(product015_img001)
    db.session.add(product015_img002)
    db.session.add(product015_img003)
    db.session.add(product015_img004)

    db.session.add(product016_img001)
    db.session.add(product016_img002)
    db.session.add(product016_img003)
    db.session.add(product016_img004)
    db.session.add(product016_img005)

    db.session.add(product017_img001)
    db.session.add(product017_img002)
    db.session.add(product017_img003)
    db.session.add(product017_img004)
    db.session.add(product017_img005)

    db.session.add(product018_img001)
    db.session.add(product018_img002)
    db.session.add(product018_img003)
    db.session.add(product018_img004)
    db.session.add(product018_img005)

    db.session.add(product019_img001)
    db.session.add(product019_img002)
    db.session.add(product019_img003)
    db.session.add(product019_img004)
    db.session.add(product019_img005)

    db.session.add(product020_img001)
    db.session.add(product020_img002)
    db.session.add(product020_img003)
    db.session.add(product020_img004)
    db.session.add(product020_img005)

    db.session.add(product021_img001)
    db.session.add(product021_img002)
    db.session.add(product021_img003)
    db.session.add(product021_img004)
    db.session.add(product021_img005)

    db.session.add(product022_img001)
    db.session.add(product022_img002)
    db.session.add(product022_img003)
    db.session.add(product022_img004)
    db.session.add(product022_img005)

    db.session.add(product023_img001)
    db.session.add(product023_img002)
    db.session.add(product023_img003)
    db.session.add(product023_img004)
    db.session.add(product023_img005)

    db.session.add(product024_img001)
    db.session.add(product024_img002)
    db.session.add(product024_img003)
    db.session.add(product024_img004)
    db.session.add(product024_img005)

    db.session.add(product025_img001)
    db.session.add(product025_img002)
    db.session.add(product025_img003)
    db.session.add(product025_img004)
    db.session.add(product025_img005)

    db.session.add(product026_img001)
    db.session.add(product026_img002)
    db.session.add(product026_img003)
    db.session.add(product026_img004)
    db.session.add(product026_img005)

    db.session.add(product027_img001)
    db.session.add(product027_img002)
    db.session.add(product027_img003)
    db.session.add(product027_img004)
    db.session.add(product027_img005)

    db.session.add(product028_img001)
    db.session.add(product028_img002)
    db.session.add(product028_img003)
    db.session.add(product028_img004)
    db.session.add(product028_img005)

    db.session.add(product029_img001)
    db.session.add(product029_img002)
    db.session.add(product029_img003)
    db.session.add(product029_img004)
    db.session.add(product029_img005)

    db.session.add(product030_img001)
    db.session.add(product030_img002)
    db.session.add(product030_img003)
    db.session.add(product030_img004)
    db.session.add(product030_img005)

    db.session.add(product031_img001)
    db.session.add(product031_img002)
    db.session.add(product031_img003)
    db.session.add(product031_img004)
    db.session.add(product031_img005)

    db.session.add(product032_img001)
    db.session.add(product032_img002)
    db.session.add(product032_img003)
    db.session.add(product032_img004)
    db.session.add(product032_img005)

    db.session.commit()


def undo_product_imgs():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.product_imgs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM product_imgs")

    db.session.commit()
