# Welcome to Mzone! (Flask React Project)

#### Mzone is inspired by Amazon, which is an ecommerce platform that sells many product lines. 
#### The purpose of this website is strictly for academic or research-related activities.

## [Mzone live link](https://aa-mzone.onrender.com)
## [Project Wiki](https://github.com/EffieML/Mzone/wiki)

## Languages, Frameworks, Platforms and Libraries
### Languages
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

### Backend and Database
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white) ![SQLAlchemy](https://img.shields.io/badge/SQLAlchemy-100000?style=for-the-badge&logo=sql&logoColor=BA1212&labelColor=AD0000&color=A90000) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)

### Hosting
![Render](https://img.shields.io/badge/Render-12100E?style=for-the-badge&logo=Render)


## Major Features
### Home Page
#### All Products Page
<img width="1378" alt="01_homepage" src="https://user-images.githubusercontent.com/103289506/219184160-87b4a232-a74c-4a46-a2ef-cd4cabae8a97.PNG">

#### Products by Category Page
<img width="1414" alt="02_categorypage" src="https://user-images.githubusercontent.com/103289506/219184988-8bedf3ee-ae0d-4b9c-b57c-99f6ff795d73.PNG">

#### Search
<img width="1414" alt="03_search_nav" src="https://user-images.githubusercontent.com/103289506/219185182-11c73a33-a146-4dfd-99d4-0206216f695f.PNG">

### Login and Signup 
#### Login by clicking on the 'sign in' button located on the top right . You can also sign up by following the Login button then clicking the 'Create account' link located at the bottom of the form.
#### After log in, you will be redirect to Mzone main page where you can explore all the listed products
<img width="1426" alt="04_login" src="https://user-images.githubusercontent.com/103289506/219185789-fc25bf73-64a8-4c10-a88d-028ae336df1c.PNG">
<img width="1426" alt="05_signup" src="https://user-images.githubusercontent.com/103289506/219185845-c287e484-fa7f-47a4-8374-9b5e7eff0534.PNG">

### Product Detail Page
#### On the product detail page, you can click the 'Add to Cart' button to add it to your shopping cart. You can also leave a review for this product which located at left of the bottom review section. For the reviews you wrote, you can use the 'edit' or 'delete' button next to your review to make additional changes. 
![06_oneprod](https://user-images.githubusercontent.com/103289506/219192276-66106679-a1a5-446a-9a32-ce14767af2c1.jpeg)



### User Account page
#### On the navigation bar, by clicking the account & Lists, user can visit their account page. It contains all the user's orders and their inventory list.
![11_account](https://user-images.githubusercontent.com/103289506/219186941-4d5499c7-9a7a-4ba7-b07f-29c8a4cc6261.jpeg)
### User's Inventory Page
#### Under user's inventory page, you can post new product, edit or delete your existing posts. 
![13_userProduct](https://user-images.githubusercontent.com/103289506/219187311-40c5e453-08e3-4d26-b06f-9696ba3fee8a.jpeg)

### Post New Selling Product
#### To post a product, you need to post minimum one valid image (max 5 images), and fill out all form properly. 
![14_addProd](https://user-images.githubusercontent.com/103289506/219187407-43117e95-6023-40a1-ab3d-2a6c44c443fa.jpeg)


### Edit Selling Product
![15_editProd](https://user-images.githubusercontent.com/103289506/219187508-6e3928ba-d8cb-452b-ab5e-d1ee33d2135f.jpeg)


### Shopping Cart Page
#### You can view all the items you added to shopping cart, then click the 'Place your order' button to place an order. Once the order has been created, your shopping cart will be set to empty. 
![07_shoppingcart](https://user-images.githubusercontent.com/103289506/219187783-131ba795-a3b5-41f6-aa68-ef78455fb9e6.jpeg)


### Order Detail Page
#### After you place the order, you will be redirect to your order detail page. You can view all the purchased items and using the 'Write review' button to leave a comment. You can also chose to cancel your order within one hour after the purchase, the 'Cancel order' button located at the top right of the page. 
![08_orderdetailpage](https://user-images.githubusercontent.com/103289506/219188017-598dd9a7-b3a2-4281-9dbe-b52f99f39ee3.jpeg)

### User's Orders Page
![12_orderpage](https://user-images.githubusercontent.com/103289506/219188196-6d66d63b-7d44-440c-b480-79807e67b6c5.jpeg)


### Add Review Page
#### To leave a review, you have options to post up to 5 images. 
![09_addreview](https://user-images.githubusercontent.com/103289506/219188358-9e8726eb-ee84-4754-9984-2cf1d8942bed.jpeg)


### Edit Review page
#### On the product page, for your own reviews, you can use the 'edit' or 'delete' button next to your review to make additional changes.
<img width="1383" alt="15_editreview" src="https://user-images.githubusercontent.com/103289506/219192650-ac292efe-f198-4372-9345-7e996c8df37f.PNG">



Below is the starter for the Flask React project.
## Getting started
1. Clone this repository (only this branch)
2. Install dependencies
      ```bash
      pipenv install -r requirements.txt
      ```
3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Make sure the SQLite3 database connection URL is in the **.env** file
5. This starter organizes all tables inside the `flask_schema` schema, defined
   by the `SCHEMA` environment variable.  Replace the value for
   `SCHEMA` with a unique name, **making sure you use the snake_case
   convention**.
6. Get into your pipenv, migrate your database, seed your database, and run your Flask app
   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```
7. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.


