# Cafe API Architecture Doc

## Details

There's a corner cafe that wants your help to propel itself into the digital age... The owner, Greg, has read extensively and is anxious to get started, but lacks the technical chops to get his digital transformation off the ground. He _knows_ that big data is the way to go. He is planning on tracking _everything_ in his cafe.

He needs a RESTful API to serve all of the data that he'll have and gather more! And he's asked a couple of future developers to architect this API for him. He wants to track _everything_ from the stock, the customers, the seating in the cafe.

Provide him with a series of REST endpoints that meet all, or most of the RESTful principles that you've just heard about! Your feedback will dictate how the database will eventually be built... no pressure.

Write out each endpoint, its method, and brief description of waht it should do.

| endpoint | method | Description            |
| -------- | ------ | ---------------------- |
| `/test`  | `GET`  | It is a test endpoint. |

_This activity is more about the discussion in how to best organize data endpoints. There will not be any coding._

## Your Answer

| endpoint                | method   | Description                         |
| ----------------------- | -------- | ----------------------------------- |
| `/`                     | `GET`    | Homepage.                           |
| `/customers`            | `GET`    | Access to the customers list.       |
| `/customers`            | `POST`   | Add a new customer.                 |
| `/customers/id`         | `DELETE` | Delete an existing customer.        |
| `/customers/id`         | `PUT`    | Update an existing customer.        |
| `/products`             | `GET`    | Access to the products list.        |
| `/products`             | `POST`   | Add a new product.                  |
| `/products/id`          | `GET`    | Access to a product by its id.      |
| `/products/id`          | `PUT`    | Update a product by its id.         |
| `/products/id`          | `DELETE` | Delete a product by its id.         |  |
| `/seating/furniture`    | `GET`    | Access seating furniture list.      |
| `/seating/furniture`    | `POST`   | Add new seating furniture.          |
| `/seating/furniture/id` | `GET`    | Access seating furniture by its id. |
| `/seating/furniture/id` | `PUT`    | Update seating furniture by its id. |
| `/seating/furniture/id` | `DELETE` | Delete seating furniture by its id. |
