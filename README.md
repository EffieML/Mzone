# Welcome to Mzone! (Flask React Project)

#### Mzone is inspired Amazon, which is an ecommerce platform that sells many product lines. 
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
### Main Page
<img width="1534" alt="01_homepage" src="https://user-images.githubusercontent.com/103289506/211177170-5af42bcf-ebb3-469a-acf1-64c731baa583.PNG">

### Login and Signup 
#### Login by clicking on the 'sign in' button located on the top right . You can also sign up by following the Login button then clicking the 'Create account' link located at the bottom of the form.
#### After log in, you will be redirect to Mzone main page where you can explore all the listed products
<img width="1544" alt="02_login" src="https://user-images.githubusercontent.com/103289506/211177194-83011fca-6ae1-4c52-a829-4fb54dbf695d.PNG">
<img width="1545" alt="02_signup" src="https://user-images.githubusercontent.com/103289506/211177197-1e52d9a2-bc68-474a-a08a-f4b19256d609.PNG">

### Product Detail Page
#### On the product detail page, you can click the 'Add to Cart' button to add it to your shopping cart. You can also leave a review for this product which located at left of the bottom review section. For the reviews you wrote, you can use the 'edit' or 'delete' button next to your review to make additional changes. 
<img width="1536" alt="03_oneprod1" src="https://user-images.githubusercontent.com/103289506/211177214-f5609886-b8c9-4176-a628-69b0332a98b5.PNG">
<img width="1535" alt="03_oneprod2" src="https://user-images.githubusercontent.com/103289506/211177215-91a9eab1-d256-48ff-a5b7-6631a19388cc.PNG">

### Shopping Cart Page
#### You can view all the items you added to shopping cart, then click the 'Place your order' button to place an order. Once the order has been created, your shopping cart will be set to empty. 
<img width="1536" alt="04_shoppingcart" src="https://user-images.githubusercontent.com/103289506/211180972-90f73732-ca77-4ff8-bd73-2160cd0b88ff.PNG">

### Order Detail Page
#### After you place the order, you will be redirect to your order detail page. You can view all the purchased items and using the 'Write review' button to leave a comment. You can also chose to cancel your order within one hour after the purchase, the 'Cancel order' button located at the top right of the page. 
<img width="1546" alt="05_oneOrder" src="https://user-images.githubusercontent.com/103289506/211181045-effab1fd-9507-41e2-93d4-4d36f5d2e66e.PNG">

### Add Review Page
#### To leave a review, you have options to post up to 5 images. 
<img width="1547" alt="06_createReview" src="https://user-images.githubusercontent.com/103289506/211181171-311ed223-4bf1-4504-ac12-924e9b4112a8.PNG">

### Edit Review page
#### On the product page, for your own reviews, you can use the 'edit' or 'delete' button next to your review to make additional changes.
<img width="1535" alt="07_editReview" src="https://user-images.githubusercontent.com/103289506/211181191-bb4230a3-7195-41d9-8604-ff7d3a5ba736.PNG">

### User Account page
#### On the navigation bar, by clicking the account & Lists, user can visit their account page. It contains all the user's orders and their inventory list.
<img width="1547" alt="08_accoutPage" src="https://user-images.githubusercontent.com/103289506/211181325-40f01515-e710-42ce-8f53-91964150d3e4.PNG">

### User's Orders Page
<img width="1548" alt="09_allOrders" src="https://user-images.githubusercontent.com/103289506/211181329-1c671fc0-892a-4a91-9b27-d9e24b862639.PNG">

### User's Inventory Page
#### Under user's inventory page, you can post new product, edit or delete your existing posts. 
<img width="1548" alt="09_allProdsSell" src="https://user-images.githubusercontent.com/103289506/211181333-cea1be5b-dbfe-4a46-bc23-1f389ff06e1a.PNG">

### Post New Selling Product
#### To post a product, you need to post minimum one valid image (max 5 images), and fill out all form properly. 
<img width="1547" alt="10_addNewProd" src="https://user-images.githubusercontent.com/103289506/211181361-0223cdf2-406b-4e6b-8749-232ae57a9328.PNG">

### Edit Selling Product
<img width="1550" alt="11_editProd" src="https://user-images.githubusercontent.com/103289506/211181371-7c1f8481-f5a4-49bf-a871-594edc107591.PNG">




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


