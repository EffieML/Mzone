from flask.cli import AppGroup
from .users import seed_users, undo_users
from .products import seed_products, undo_products
from .product_imgs import seed_product_imgs, undo_product_imgs
from .carts import seed_carts, undo_carts
from .orders import seed_orders, undo_orders
from .order_items import seed_order_items, undo_order_items
from .reviews import seed_reviews, undo_reviews
from .review_imgs import seed_review_imgs, undo_review_imgs
from .favorites import seed_favorites, undo_favorites


from app.models.db import db, environment, SCHEMA

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    if environment == 'production':
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_favorites()
        undo_review_imgs()
        undo_reviews()
        undo_order_items()
        undo_orders()
        undo_carts()
        undo_product_imgs()
        undo_products()
        undo_users()
    # Add other seed functions here
    seed_users()
    seed_products()
    seed_product_imgs()
    seed_carts()
    seed_orders()
    seed_order_items()
    seed_reviews()
    seed_review_imgs()
    seed_favorites()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # Add other undo functions here
    undo_favorites()
    undo_review_imgs()
    undo_reviews()
    undo_order_items()
    undo_orders()
    undo_carts()
    undo_product_imgs()
    undo_products()
    undo_users()
