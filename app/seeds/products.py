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
        quantity=20,
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
        quantity=20,
    )

    product_011 = Product(
        seller_id=2,
        name='COZAYH Home Nolan Beige Linen Fabric 4Pc Double Chaise Sectional Sofa with Pillows and Interchangeable Legs',
        category='Mzone Home',
        price=1118.99,
        brand='Cozayh',
        about='Double Chaise; 16.5-19.5" Seat Height; 23" Seat Depth; 21" Arm Height; 17.3" Seat Back Height. Includes 2 chaise and 2 armless chairs.',
        detail="The Nolan Collection has all the important features you want ? comfort, style, quality! This beautiful modular sofa sectional with double chaise will fit into any living room and impress your guests! The sectional has the short legs attached but can be changed to the taller legs that are included for a higher seating. The comfortable linen fabric with four matching accent pillows will light up your living room with the trendiest of looks. Perfect for small space living for your apartment, condo, loft, office, and bedroom. You can welcome multiple guests where everyone will be able to enjoy entertainment together.",
        dimension='23"D x 45"W x 21"H',
        weight=226,
        quantity=20,
    )

    product_012 = Product(
        seller_id=2,
        name='COZAYH Home Office Computer Desk Corner Desk with 3 Drawers and 2 Shelves, 55 Inch Large L-Shaped Study Writing Table with Storage Cabinet - Walnut and White',
        category='Mzone Home',
        price=279.99,
        brand='Cozayh',
        about='This L-shaped computer desk offers adequate working space. The wide desktop can hold many office supplies, such as monitors, table lamp, books, files, etc.',
        detail="Cozayh computer corner desk comes with a side cabinet as legs and spacious tabletop, it is convenient to make things within reach. This home office computer desk is made of sturdy MDF board and metal legs, which has strong bearing capacity to hold all the items.",
        dimension='23.6"D x 29.5"W x 55.1"H',
        weight=110,
        quantity=20,
    )

    product_013 = Product(
        seller_id=3,
        name='SUNSET 5 Piece Dining Table Set, Dining Chairs Set of 4, Modern Kitchen Table Set Top with Slate Stone, Metal Base & Legs, Dining Room Table and Leather Chairs (Brown,1 Table with 4 Chairs)',
        category='Mzone Home',
        price=695.99,
        brand='Sunset',
        about='Perfect Size can comfortably seat up to 4-6 people, Just the right size to save space, You can enjoy a warm meal time with your family up close.',
        detail="Pure modern style dining chairs with slate dining tables, perfectly integrated into various scenes according to your needs, can be used as dining table sets and desk chair sets. Perfect Size can comfortably seat up to 4-6 people, Just the right size to save space, You can enjoy a warm meal time with your family up close.",
        dimension='55"D x 31"W x 30"H',
        weight=103,
        quantity=20,
    )
    product_014 = Product(
        seller_id=3,
        name='SUNSET Trading Newport Slipcovered Sofas, Large 94" Wide Stationary, Performance Fabric White',
        category='Mzone Home',
        price=2944.74,
        brand='Sunset',
        about='Luxury seat and back cushions are 1.8 density foam jacketed with a feather blend then wrapped in feather proof ticking to provide medium firm seating - Double-stitched pillows, loose back and seat cushions have same fabric on both sides and can be flipped to minimize wear.',
        detail="Sunset Trading Newport slipcovered T-cushion sofa is designed for maximum comfort and durability. From your country family room to a seaside beach house, every living space can be updated in style with this 2 over 2 couch featuring contemporary rounded recessed wedge arms for a designer look. The extra room provided by this deep seating long sofa allows four people to snuggle comfortably, while single users have more space to spread out and relax using the gentle sloping curve of the padded shelter arms as headrests. Are your pets napping, kids playing and family hanging out eating and sipping on your living room furniture? You will love that this lounge sofa is completely covered with removeable slipcovers which feature spill and stain repellent technology to keep the fabric looking clean, just wipe up spills with a paper towel. Comfy feather foam cushions are the same on both sides to flip and minimize wear and the two throw pillows can be used anywhere. Your search for ideas to update your home can end here when you pair with matching chair and a half, ottoman, and slipcovered dining chair.",
        dimension='45"D x 94"W x 36"H',
        weight=156,
        quantity=20,
    )
    product_015 = Product(
        seller_id=3,
        name='SUNSET Adept Mid-Century Modern Velvet Upholstered Tufted Accent Bench in Ivory',
        category='Mzone Home',
        price=403.99,
        brand='Sunset',
        about='LUXURIOUS STYLE - Inspired by mid-century, modern, and contemporary styles, Adept embodies graceful intrigue with a tufted design and flared armrests, making it a trendy update to a home or apartment.',
        detail="Embolden your living room décor with Adept Performance Velvet Accent Bench. Featuring a blend of chic, contemporary, and mid-century modern design, Adept's broad profile, generous tufting, stain-resistant performance velvet polyester upholstery, and subtle metal accents imbue rich detail and chic sophistication. Kick back and enjoy the plush comfort of the Adept bench while reading your favorite book or lounging with friends and family. Resting atop a splayed black birchwood frame with gold metal end caps, Adept is a striking addition to the home or apartment. Bench Weight Capacity: 440 lbs.",
        dimension='73"D x 21"W x 17"H',
        weight=38,
        quantity=20,
    )
    product_016 = Product(
        seller_id=3,
        name='SUNSET Children CoComelon Chair Desk with Storage Bin - Greenguard Gold Certified, Blue',
        category='Mzone Home',
        price=46.74,
        brand='Sunset',
        about='FOR COCOMELONFANS: This fun chair desk features colorful graphics of CoComelon characters; Ideal for homeschooling or remote learning.',
        detail="This CoComelon Chair Desk with Storage Bin by Delta Children offers kids the perfect spot for snack time, crafts, playtime or homework. This smart and sturdy chair with colorful graphics of CoComelon characters also features a built-in cup holder to hold markers, plus a fabric storage bin underneath for additional art supplies or toys. Perfectly sized, this durable chair and desk combo has a large work surface and low height that makes it easy for preschool kids and toddlers to get in and out on their own. About CoComelon: Join JJ, his family and friends in the animated world of CoComelon! Whether at preschool with his friends, at home with YoYo and TomTom, or on adventures with his animal friends, JJ invites kids and parents to watch and sing along together! CoComelon: Where kids can be happy and smart!",
        dimension='23.23"D x 20.47"W x 22.83"H',
        weight=50,
        quantity=20,
    )

    # mzone computer ----------------------------------------------------------------------------------------------------
    product_017 = Product(
        seller_id=4,
        name='Logitech MX Master 3S - Wireless Performance Mouse with Ultra-fast Scrolling, Ergo, 8K DPI, Track on Glass, Quiet Clicks, USB-C, Bluetooth, Windows, Linux, Chrome - Graphite',
        category='Mzone Computer',
        price=99.99,
        brand='Logitech',
        about='Ergonomic design: Work comfortably with a precision mouse featuring a silhouette crafted for a more natural wrist posture and optimally placed thumb controls.',
        detail="Logitech MX Master 3S Performance Wireless Mouse Introducing Logitech MX Master 3S - an iconic mouse remastered. Now with Quiet Clicks(2) and 8K DPI any-surface tracking for more feel and performance than ever before. Product details: Weight: 4.97 oz (141 g) Dimensions: 2 x 3.3 x 4.9 in (51 x 84.3 x 124.9 mm) Compatible with Windows, macOS, Linux, Chrome OS, iPadOS, Android operating systems (8) Rechargeable Li-Po (500 mAh) battery Sensor technology: Darkfield high precision Buttons: 7 buttons (Left/Right-click, Back/Forward, App-Switch, Wheel mode-shift, Middle click), Scroll Wheel, Thumbwheel, Gesture button Wireless operating distance: 33 ft (10 m) (9) Footnotes: (1) 4 mm minimum glass thickness (2) Compared to MX Master 3, MX Master 3S has 90 percent less Sound Power Level left and right click, measured at 1m (3) Compared to regular Logitech mouse without an electromagnetic scroll wheel (4) Compared to Logitech Master 2S mouse with Logitech Options installed and Smooth scrolling enabled (5) Requires Logi Options+ software, available for Windows and macOS (6) Not compatible with Logitech Unifying technology (7) Battery life may vary based on user and computing conditions. (8) Device basic functions will be supported without software for operating systems other than Windows and macOS (9) Wireless range may vary depending on operating environment and computer setup",
        dimension='6.7"D x 5.5"W x 2.3"H',
        weight=0.36,
        quantity=50,
    )
    product_018 = Product(
        seller_id=4,
        name='Logitech MX Ergo Wireless Trackball Mouse - Adjustable Ergonomic Design (Bluetooth or USB), Graphite & K350 2.4Ghz Wireless Keyboard',
        category='Mzone Computer',
        price=137.85,
        brand='Logitech',
        about='Ergonomic sculpted design - unique adjustable hinge allows you to customize the trackball angle from 0 to 20 degrees for a more natural, comfortable hand position, and reduced muscle strain.',
        detail="Logitech MX Ergo Wireless Trackball Mouse - Adjustable Ergonomic Design, control and Move Text/Images/Files Between 2 Windows and Apple Mac Computers (Bluetooth or USB), Rechargeable, Graphite. Mx Ergo is a new standard of comfort and precision. Logitech most advanced trackball for trackball enthusiasts and consumers searching for alternatives to mice and touchpads. Delivers less 20% muscular strain compared to a regular mouse. Mx Ergo features a unique adjustable hinge for personalized comfort and the latest tracking, scrolling and power management technology. Logitech Flow enables effortless multi-computer control. System Requirements: Required: Available USB portWindows 10 or later Windows 8 Windows 7macOS X 10.12 or later|Required: Bluetooth Windows 8 or latermacOSX 10.12 or late",
        dimension='Keyboard: 18.9"D x 2.9"W x 9.9"H; Mouse: 6.7"D x 5.5"W x 2.3"H',
        weight=3.96,
        quantity=50,
    )
    product_019 = Product(
        seller_id=4,
        name='Logitech G735 Wireless Gaming Headset, Customizable LIGHTSYNC RGB Lighting, Bluetooth, 3.5 MM Aux Compatible with PC, Mobile Devices, Detachable Mic - White Mist',
        category='Mzone Computer',
        price=193.91,
        brand='Logitech',
        about='Unmatched Fit: Wireless gaming headset with intentional design to fit all gamers inclusive of people with smaller head sizes and those who wear glasses or small earrings.',
        detail="Play your way with G735 Wireless Gaming Headset from The Aurora Collection from Logitech G. Logitech Gaming Headset intentionally designed to maximize comfort for all players inclusive of smaller headsizes. Play, stream, or listen comfortably all-day, this computer headset features an adjustable headband, breathable materials, and cushy, rotatable cups. This headset is even designed with glasses and small earrings in mind, so no more pinched ears. Long-lasting, this gaming wireless headset allows you to take your gaming to go (and bring the fun with you) with up to 16+ hrs of wireless playtime (at 50% volume with lighting on, 56 hrs at 50% volume with lighting off) and multi-platform connectivity. Use Logitech LIGHTSPEED wireless or Bluetooth to connect to your PC, Mac, or mobile device for PC gaming and gaming across platforms. Change up your game on pretty much every platform and operating system, including Windows, macOS, and Chrome OS. Tune out the world with this gamer headset that has immersive sound quality, passive noise-cancellation, and cross-device audio mixing.",
        dimension='9.7"D x 9.2"W x 2.7"H',
        weight=0.72,
        quantity=50,
    )
    product_020 = Product(
        seller_id=4,
        name='Logitech HD Pro Webcam C920, Widescreen Video Calling and Recording, 1080p Camera, Desktop or Laptop Webcam (Discontinued by manufacturer)',
        category='Mzone Computer',
        price=62.95,
        brand='Logitech',
        about='Full HD 1080p video calling (upto 1920 x 1080 pixels) with the latest version of Skype for Windows; Webcam with 5 foot cable. Video compression, Built in dual stereo mics with automatic noise reduction; Automatic low light correction, Tripod ready universal clip fits laptops, LCD or monitors.',
        detail="With the Logitech HD Pro Webcam C920, you'll be seen in more clarity and detail than ever before with Full HD 1080p video calling—the highest quality available. Enjoy vibrant, true to life video clips that capture the smallest details. No time to talk? Send the people you care about a Full HD video clip. Faster, smoother, and compatible with more computers, H.264 encoding takes the pressure of compressing off your computer so you can enjoy quick uploads. Whatever your network, connect with everyone you care about through Full HD 1080p on Skype, and fluid HD 720p on FaceTime for Mac. You can also make high quality video calls with Google Hangouts and nearly all other video calling clients. Two mics with automatic noise reduction allow friends, family, and clients to hear the real you.",
        dimension='3.7"D x 1.7"W x 2.8"H',
        weight=0.25,
        quantity=50,
    )
    product_021 = Product(
        seller_id=4,
        name='Logitech Crayon Digital Pencil for iPad (iPads with USB-C Ports) Featuring Apple Pencil Technology, No Lag Pixel-Precision, and Dynamic Smart Tip with Fast USB-C Charge - Silver',
        category='Mzone Computer',
        price=62.95,
        brand='Logitech',
        about='Compatibility: For iPad models with iOS 12.2, including iPad Pro 12.9 Inch (Gen. 3-6), iPad Pro 11 inch (Gen. 1-4), iPad (Gen. 6-10), iPad Air (Gen. 3-4), and iPad Mini (Gen. 5).',
        detail="ADD FLAIR TO YOUR FLOW ON iPAD: Logitech Crayon is a versatile digital stylus pencil for iPad Pro 12.9-inch (3rd gen), iPad Pro 11-inch, iPad Air (3rd & 4th gen), iPad mini (5th gen), and iPad (6th, 7th, 8th, 9th & 10th gen) that lets you use hundreds of Apple Pencil supported apps in dynamic new ways. Product Details: Height: 6.5 in (163 mm) Width: 0.5 in (12 mm) Depth: 0.3 in (8 mm) Weight: 0.7 oz (20 g) Protection: 4 ft (1.2 m) drop protection Power and Connectivity: Lithium battery Up to 7 hrs of active writing time on a full charge On/off slide button Charge via USB-C cable Battery life indicator: 3 green lights if battery > 66% 2 green lights if battery > 33% 1 green light if battery is > 15% Red blinking light if battery <15 percent LED blinks red if battery life <5 percent LED lights blink when charging 3 LED lights blink continuously until charged to 33 percent From 33 percent charge, 1 LED is solid green, 2 LED blink continuously until charged to 66 percent From 66 percent charge, 2 LEDs are solid green, 1 LED blinks continuously until charged to 100% 3 solid green LED lights once charged to 100%",
        dimension='6.42"D x 0.47"W x 0.31"H',
        weight=0.18,
        quantity=50,
    )
    product_022 = Product(
        seller_id=5,
        name='Dell S2722QC 27-inch 4K USB-C Monitor - UHD (3840 x 2160) Display, 60Hz Refresh Rate, 8MS Grey-to-Grey Response Time (Normal Mode), Built-in Dual 3W Speakers, 1.07 Billion Colors - Platinum Silver',
        category='Mzone Computer',
        price=385.00,
        brand='Dell',
        about='A SUPERIOR SCREEN: High functionality meets superb style with a three-sided ultrathin bezel design that allows you to see more with less distraction on this 27-inch 4k monitor.',
        detail="The Dell S2722QC usb-c monitor is designed with an elegant 27-inch screen boasting outstanding visuals. This 27-inch 4k monitor has integrated dual 3W speakers so you can listen to whatever you want without having to purchase speakers. The In-Plane Switching (IPS) technology together with 99 percent sRGB color coverage lets you see extraordinary colors across a wide viewing angle. The AMD FreeSync technology features up to 60Hz refresh rate so you can enjoy a smooth, tear-free experience. The ComfortView feature reduces harmful blue light emissions so you can stay online longer without getting eye fatigue. Charging and connecting your storage devices, mobile phones and other peripherals just got easier with a conveniently placed, quick-access USB 3.2 Gen 1 Type-A port.",
        dimension='6.88"D x 24.08"W x 20.08"H',
        weight=15.15,
        quantity=50,
    )
    product_023 = Product(
        seller_id=5,
        name='LG UltraFine UHD 27-Inch Computer Monitor 27UN850-W, IPS with VESA DisplayHDR 400, AMD FreeSync, and USB-C, White',
        category='Mzone Computer',
        price=388.00,
        brand='LG',
        about='With VESA DisplayHDR 400 high dynamic range compatibility, this monitor brings work and virtual worlds to life, backed by 400 nits of brightness, elevating textures, elements, character movements, and natural light and shadow.',
        detail="Upgrade to an LG UltraFine IPS 4K screen, delivering ultra HD resolution with supremely accurate colors, even when viewed off-angle. The 27-inch display offers versatility of USB Type C connectivity (60 Watt power delivery) plus the benefits of HDCP 2.2 compatibility, so it will seamlessly display 4K content from a variety of sources. Experience smooth gameplay with AMD FreeSync (used with supported video cards), virtually eliminating screen tearing and stuttering that occur as a result of the difference between a graphics card's frame rate and monitor's refresh rate. Dynamic Action Sync reduces input lag and elevates your gameplay, allowing you to respond to your opponents quickly. Keep visibility even in dark scenes—LG's Black Stabilizer senses dark scenes and helps make it brighter so that you can find the enemies hiding and waiting to attack your player in the dark. *Software download required to enable OnScreen Control. For download details, visit LGUSA.com/OnScreenControlSupport.",
        dimension='8.2"D x 27.2"W x 19.4"H',
        weight=13.5,
        quantity=50,
    )
    product_024 = Product(
        seller_id=5,
        name='Simple Houseware Desk Monitor Stand Riser with Adjustable Organizer Tray, Maple',
        category='Mzone Computer',
        price=34.87,
        brand='Simple Houseware',
        about='Monitor Riser / Stand with a sliding drawer for printer, computer, laptop, notebook.',
        detail="The monitor stand can help elevate your monitor to a comfortable height for a better viewing angle and position. This elevation helps you to achieve the perfect eye-level viewing position in order to get rid of neck / back pain due to incorrect viewing angles.",
        dimension='20.5"D x 11"W x 6"H',
        weight=9.22,
        quantity=50,
    )

    # mzone pets ----------------------------------------------------------------------------------------------------
    product_025 = Product(
        seller_id=6,
        name='PETHOME Cat Scratching Post, Three Modes Cat Scratcher, Cat Scratch Furniture Protector, Vertical /Horizontal /Side Table, Replaceable Sisal Scratch Pad for Indoor Cats - Yellow',
        category='Mzone Pets',
        price=50.99,
        brand='PetHome',
        about='Towards a Home for Both Human & Pets - With a creative 2-in-1 design, MAKE SURE cat scratcher gives your cat total freedom of scratching, be placed on the floor to protect the furniture. Or it can easily be turned into a practical side table and become a piece of furniture for you. Discover more tricks with a simple flip of 90.',
        detail="Three flexible usages: vertical, end table and floor, which meet with different preferences for cats and their owners.If cats prefer to sharpen claws upright, the first model would be the best option. The second and third are more friendly to the cats enjoying scratching from a horizontal angle. Particularly, after switching 90 degree with the buckle, it can be shifted into a dual-usage end table to display things on the top.",
        dimension='17.6"D x 14.5"W x 21.5"H',
        weight=5.07,
        quantity=50,
    )
    product_026 = Product(
        seller_id=6,
        name='PETHOME Cat Ball Track Toy by 7 Ruby Road- 100% Natural Sustainable Wood Interactive Cat Toy - Interactive Indoor Cats Toy for When You are Away - Self Play Interactive Cat Toy for Indoor Cats Toy Ball Track',
        category='Mzone Pets',
        price=26.99,
        brand='PetHome',
        about='Made Tough to Handle the Rough - built from double-layered sustainable wood and 10.8 inch diameter, this self play cat toy is substantial enough to deal with multiple cats or kittens playing ball together.',
        detail="Our cat tower game is designed for years of use and the roughest of kitties. With its anti topple design, anti slip pads, smooth edges and protective top bar to prevent kitty's head from getting stuck LETTY is cat or kitten entertainment at its safest! 7 Ruby Road cat toy roller is made with chamfered edges so not to harm kittens, and the balls roll easier without burring, making a pleasant sound as they roll around their tracks.",
        dimension='10.75"D x 10.75"W x 4.5"H',
        weight=2.36,
        quantity=50,
    )
    product_027 = Product(
        seller_id=6,
        name='PETHOME Dog Winter Jacket,Dog Cold Weather Coats Paded Dog Vest Warm Zip Up Dog Windproof Apparel Pet Fleece Lined Outfit for Small Medium Large Dogs with Harness Cozy Dog Clothes with Fur Collar',
        category='Mzone Pets',
        price=27.99,
        brand='PetHome',
        about='Pethome dog coat with harness is just the right amount of coverage to keep your active dog warm without overheating. The dog jacket thick lined fabric can prevent your pup from getting wet on a foggy day, even little raining or snow this material still can well keep your pup avoid from soggy.This dog puffer jack is water resistant, windproof and snow proof. You can wear FUAMEY dog snow jack for your pet in cold winter.',
        detail="The cold weather dog jackets thick and soft furry collar, dog winter vest silky smooth and soft touch, fluffy and warm feeling, The dog jackets humanized turtleneck design can protect the dog's ears and head in cold weather. There are elastic straps on the double sides of the coat, much more effectively prevent wind and snow.dog jackets for large dogs or dog coats for small dogs,there is always a dog winter jacket for your pet. The reflective strips on both sides of the FUAMEY pet warm jacket help you quickly find your dog's movements at night or in the snow,various colors pet clothing colors are suitable for dogs of all skin tones.The dog dance jacket with leopard print is suitable for female or male dogs, and dog jackets for winter can also make your pet a shining star on Halloween or Christmas.",
        dimension='9.41"D x 7.52"W x 2.09"H',
        weight=0.28,
        quantity=50,
    )
    product_028 = Product(
        seller_id=6,
        name='PETHOME Dog Bed & Cat Bed, Anti-Anxiety Donut Dog Cuddler Bed, Warming Cozy Soft Dog Round Bed, Fluffy Faux Fur Plush Dog Cat Cushion bed for Small Medium Dogs and Cats',
        category='Mzone Pets',
        price=21.99,
        brand='PetHome',
        about='The pet calming dog bed is made of durable luxurious faux fur. The interior is filled with super-soft environmentally friendly PP cotton. It has always provided soft support for the pet, which relieves the pet muscle and joint pain.',
        detail="PETHOME calming dog bed has been committed to providing every customer with a dog bed with high-quality materials and well-made work. The anti-anxiety bed is easy to transport and carry. The shape of the donut keeps your pet in love and warmth and full of security. The calming dog bed is filled with high-quality PP cotton, and the surrounding bulges perfectly support the pet's neck and relieve the soreness of the pet's muscles and spine.",
        dimension='16.9"D x 5.9"W x 5.7"H',
        weight=2.38,
        quantity=50,
    )
    product_029 = Product(
        seller_id=6,
        name='PETHOME Adjustable Pet Harness Collar and Leash Set Step in for Small Dogs Puppy and Cats Outdoor Training and Running, Soft Mesh Padded Reflective Vest Harness',
        category='Mzone Pets',
        price=19.99,
        brand='PetHome',
        about="Pack of 3: For one package, you will receive 3 items, they are one harness, one collar, and a leash. It means you don't need to spend extra time to look through other collars or leashes, but you get all of these items at the same time with less money! So this is a very cost-effective suit!wer.",
        detail="For one package, you will receive 3 items, they are one harness, one collar, and a leash. It means you don't need to spend extra time to look through other collars or leashes, but you get all of these items at the same time with less money! So this is a very cost-effective suit!wer. The harness is adopted with soft breathable mesh, which ensures its warmth and breathability, so even if your pets are going out and running wildly, it will not be too stuffy. Even in the summer, your puppy still will feel cooling! The collar is with bell, the leash is equipped with a 360 degree rotation metal hook, the harness is adopted with quick-release buckles and double D-rings which is very heavy duty, all of these advantages will let you be full of confidence to send this gift to your puppy or friends.",
        dimension='6.9"D x 5.8"W x 1.5"H',
        weight=0.42,
        quantity=50,
    )

    product_030 = Product(
        seller_id=7,
        name='MINIPET 6PCS Small Parrot Chew Toys, Sola Balls Parrot Chewing Foraging Toys Colorful Bird Foot Balls for Cockatiels Conures Cockatoos Parakeets Love Birds Small Parrot Cage Bite Toys',
        category='Mzone Pets',
        price=9.99,
        brand='Minipet',
        about="Valuable Entertainment: 2 sola balls are made from the roots of Sola plants, which are light and soft to suit for parrots to chew and beak. And 4 colorful balls are made of paper rope, which is strong and durable making easily attract the attention of parrots to play",
        detail="2 sola balls are made from the roots of Sola plants, which are light and soft to suit for parrots to chew and beak. And 4 colorful balls are made of paper rope, which is strong and durable making easily attract the attention of parrots to play. Our birds ball toys are designed with soft wood to encourage birds' habit that instinctively tear up branches and peck holes in trees to forage, thus bringing them fun and preventing depression. Small parrot toys will not only attract the interest of pets, but also help keep their teeth in order. The teeth of parrots grow throughout their lives, so it is very important for them to chew food to maintain the best size.",
        dimension='1"D x 1"W x 0.5"H',
        weight=0.23,
        quantity=50,
    )
    product_031 = Product(
        seller_id=7,
        name='MINIPET Chinchilla Wooden Platform Set, Chinchilla Cage Platform with Feeding Bowl, Small Animals Cage Accessories for Chinchilla Squirrel Gerbil Suger Glider Hamsters (3Pcs of Small Platform)',
        category='Mzone Pets',
        price=16.95,
        brand='Minipet',
        about="The chinchilla platform is made of high quality birch board and the feeding bowl is made of food grade 304 stainless steel, it is environmentally friendly, durable, and easy to clean. which is very breathable & healthy for rodents, which is totally safe for your little pet.",
        detail="The chinchilla platform is made of high quality birch board and the feeding bowl is made of food grade 304 stainless steel, it is environmentally friendly, durable, and easy to clean. which is very breathable & healthy for rodents, which is totally safe for your little pet. Constructed by the tongue and groove method and fixed with blunt head screws, the structure is fastened and not easy to fall off, and each corner is polished smoothly. Install easily without glue or nails to avoid the pet injuries. brings reliable & enjoyable living to keep your furry friend's well-being, chewable & durable toys for your pets. The unique shape of the platform provides excellent foot exercise, ideal for your pet friend to play and climb on. Can eliminate boredom and improve activity levels.",
        dimension='8.07"D x 7.48"W x 2.17"H',
        weight=1.1,
        quantity=50,
    )
    product_032 = Product(
        seller_id=7,
        name='MINIPET Wooden Ladder Bridge, Hamster Mouse Rat Rodents Toy, Small Animal Chew Toy',
        category='Mzone Pets',
        price=6.99,
        brand='Minipet',
        about="Cute bridge is made from natural wood sticks held together with two flexible metal wires.",
        detail="Cute bridge is made from natural wood sticks held together with two flexible metal wires. Easily bends to fit a variety of shapes and sizes to reach elevated areas; encourages exploration and exercise. Can also be curled into a domed shelter your furry friend will use as a warm, cozy nest. 8.4 x 3.9-inch bridge is recommended for hamsters, mice, chinchillas, rats, sugar gliders and similar-sized small pets.",
        dimension='8.2"D x 4"W x 0.9"H',
        weight=0.45,
        quantity=50,
    )

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
    db.session.add(product_011)
    db.session.add(product_012)
    db.session.add(product_013)
    db.session.add(product_014)
    db.session.add(product_015)
    db.session.add(product_016)
    db.session.add(product_017)
    db.session.add(product_018)
    db.session.add(product_019)
    db.session.add(product_020)
    db.session.add(product_021)
    db.session.add(product_022)
    db.session.add(product_023)
    db.session.add(product_024)
    db.session.add(product_025)
    db.session.add(product_026)
    db.session.add(product_027)
    db.session.add(product_028)
    db.session.add(product_029)
    db.session.add(product_030)
    db.session.add(product_031)
    db.session.add(product_032)

    db.session.commit()


def undo_products():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM products")

    db.session.commit()
