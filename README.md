# [](https://github.com/Njiraini23/AirBnB_clone_v4#AirBnB-Clone-The-Console) AirBnB Clone - The Console

The console is the first segment of the AirBnB project at Holberton School that will collectively cover fundamental concepts of higher level programming. The goal of AirBnB project is to eventually deploy our server a simple copy of the AirBnB Website(HBnB). A command interpreter is created in this segment to manage objects for the AirBnB(HBnB) website.

#### [](https://github.com/Njiraini23/AirBnB_clone_v4#functionalities-of-this-command-interpreter)Functionalities of this command interpreter:

-   Create a new object (ex: a new User or a new Place)
-   Retrieve an object from a file, a database etc...
-   Do operations on objects (count, compute stats, etc...)
-   Update attributes of an object
-   Destroy an object

## [](https://github.com/Njiraini23/AirBnB_clone_v4#table-of-content)Table of Content

-   [Environment](https://github.com/Njiraini23/AirBnB_clone_v4#environment)
-   [Installation](https://github.com/Njiraini23/AirBnB_clone_v4#installation)
-   [File Descriptions](https://github.com/Njiraini23/AirBnB_clone_v4#file-descriptions)
-   [Usage](https://github.com/Njiraini23/AirBnB_clone_v4#usage)
-   [Examples of use](https://github.com/Njiraini23/AirBnB_clone_v4#examples-of-use)
-   [Bugs](https://github.com/Njiraini23/AirBnB_clone_v4#bugs)
-   [Authors](https://github.com/Njiraini23/AirBnB_clone_v4#authors)
-   [License](https://github.com/Njiraini23/AirBnB_clone_v4#license)

## [](https://github.com/Njiraini23/AirBnB_clone_v4#environment)Environment

This project is interpreted/tested on Ubuntu 14.04 LTS using python3 (version 3.4.3)

## [](https://github.com/Njiraini23/AirBnB_clone_v4#installation)Installation

-   Clone this repository:  `git clone "https://github.com/alexaorrico/AirBnB_clone.git"`
-   Access AirBnb directory:  `cd AirBnB_clone`
-   Run hbnb(interactively):  `./console`  and enter command
-   Run hbnb(non-interactively):  `echo "<command>" | ./console.py`

## [](https://github.com/Njiraini23/AirBnB_clone_v4#file-descriptions)File Descriptions

[console.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/console.py)  - the console contains the entry point of the command interpreter. List of commands this console current supports:

-   `EOF`  - exits console
-   `quit`  - exits console
-   `<emptyline>`  - overwrites default emptyline method and does nothing
-   `create`  - Creates a new instance of`BaseModel`, saves it (to the JSON file) and prints the id
-   `destroy`  - Deletes an instance based on the class name and id (save the change into the JSON file).
-   `show`  - Prints the string representation of an instance based on the class name and id.
-   `all`  - Prints all string representation of all instances based or not on the class name.
-   `update`  - Updates an instance based on the class name and id by adding or updating attribute (save the change into the JSON file).

#### [](https://github.com/Njiraini23/AirBnB_clone_v4#models-directory-contains-classes-used-for-this-project)`models/`  directory contains classes used for this project:

[base_model.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/models/base_model.py)  - The BaseModel class from which future classes will be derived

-   `def __init__(self, *args, **kwargs)`  - Initialization of the base model
-   `def __str__(self)`  - String representation of the BaseModel class
-   `def save(self)`  - Updates the attribute  `updated_at`  with the current datetime
-   `def to_dict(self)`  - returns a dictionary containing all keys/values of the instance

Classes inherited from Base Model:

-   [amenity.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/models/amenity.py)
-   [city.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/models/city.py)
-   [place.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/models/place.py)
-   [review.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/models/review.py)
-   [state.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/models/state.py)
-   [user.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/models/user.py)

#### [](https://github.com/Njiraini23/AirBnB_clone_v4#modelsengine-directory-contains-file-storage-class-that-handles-jason-serialization-and-deserialization-)`/models/engine`  directory contains File Storage class that handles JASON serialization and deserialization :

[file_storage.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/models/engine/file_storage.py)  - serializes instances to a JSON file & deserializes back to instances

-   `def all(self)`  - returns the dictionary __objects
-   `def new(self, obj)`  - sets in __objects the obj with key .id
-   `def save(self)`  - serializes __objects to the JSON file (path: __file_path)
-   `def reload(self)`  - deserializes the JSON file to __objects

#### [](https://github.com/Njiraini23/AirBnB_clone_v4#tests-directory-contains-all-unit-test-cases-for-this-project)`/tests`  directory contains all unit test cases for this project:

[/test_models/test_base_model.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/tests/test_models/test_base_model.py)  - Contains the TestBaseModel and TestBaseModelDocs classes TestBaseModelDocs class:

-   `def setUpClass(cls)`- Set up for the doc tests
-   `def test_pep8_conformance_base_model(self)`  - Test that models/base_model.py conforms to PEP8
-   `def test_pep8_conformance_test_base_model(self)`  - Test that tests/test_models/test_base_model.py conforms to PEP8
-   `def test_bm_module_docstring(self)`  - Test for the base_model.py module docstring
-   `def test_bm_class_docstring(self)`  - Test for the BaseModel class docstring
-   `def test_bm_func_docstrings(self)`  - Test for the presence of docstrings in BaseModel methods

TestBaseModel class:

-   `def test_is_base_model(self)`  - Test that the instatiation of a BaseModel works
-   `def test_created_at_instantiation(self)`  - Test created_at is a pub. instance attribute of type datetime
-   `def test_updated_at_instantiation(self)`  - Test updated_at is a pub. instance attribute of type datetime
-   `def test_diff_datetime_objs(self)`  - Test that two BaseModel instances have different datetime objects

[/test_models/test_amenity.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/tests/test_models/test_amenity.py)  - Contains the TestAmenityDocs class:

-   `def setUpClass(cls)`  - Set up for the doc tests
-   `def test_pep8_conformance_amenity(self)`  - Test that models/amenity.py conforms to PEP8
-   `def test_pep8_conformance_test_amenity(self)`  - Test that tests/test_models/test_amenity.py conforms to PEP8
-   `def test_amenity_module_docstring(self)`  - Test for the amenity.py module docstring
-   `def test_amenity_class_docstring(self)`  - Test for the Amenity class docstring

[/test_models/test_city.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/tests/test_models/test_city.py)  - Contains the TestCityDocs class:

-   `def setUpClass(cls)`  - Set up for the doc tests
-   `def test_pep8_conformance_city(self)`  - Test that models/city.py conforms to PEP8
-   `def test_pep8_conformance_test_city(self)`  - Test that tests/test_models/test_city.py conforms to PEP8
-   `def test_city_module_docstring(self)`  - Test for the city.py module docstring
-   `def test_city_class_docstring(self)`  - Test for the City class docstring

[/test_models/test_file_storage.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/tests/test_models/test_file_storage.py)  - Contains the TestFileStorageDocs class:

-   `def setUpClass(cls)`  - Set up for the doc tests
-   `def test_pep8_conformance_file_storage(self)`  - Test that models/file_storage.py conforms to PEP8
-   `def test_pep8_conformance_test_file_storage(self)`  - Test that tests/test_models/test_file_storage.py conforms to PEP8
-   `def test_file_storage_module_docstring(self)`  - Test for the file_storage.py module docstring
-   `def test_file_storage_class_docstring(self)`  - Test for the FileStorage class docstring

[/test_models/test_place.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/tests/test_models/test_place.py)  - Contains the TestPlaceDoc class:

-   `def setUpClass(cls)`  - Set up for the doc tests
-   `def test_pep8_conformance_place(self)`  - Test that models/place.py conforms to PEP8.
-   `def test_pep8_conformance_test_place(self)`  - Test that tests/test_models/test_place.py conforms to PEP8.
-   `def test_place_module_docstring(self)`  - Test for the place.py module docstring
-   `def test_place_class_docstring(self)`  - Test for the Place class docstring

[/test_models/test_review.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/tests/test_models/test_review.py)  - Contains the TestReviewDocs class:

-   `def setUpClass(cls)`  - Set up for the doc tests
-   `def test_pep8_conformance_review(self)`  - Test that models/review.py conforms to PEP8
-   `def test_pep8_conformance_test_review(self)`  - Test that tests/test_models/test_review.py conforms to PEP8
-   `def test_review_module_docstring(self)`  - Test for the review.py module docstring
-   `def test_review_class_docstring(self)`  - Test for the Review class docstring

[/test_models/state.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/tests/test_models/test_state.py)  - Contains the TestStateDocs class:

-   `def setUpClass(cls)`  - Set up for the doc tests
-   `def test_pep8_conformance_state(self)`  - Test that models/state.py conforms to PEP8
-   `def test_pep8_conformance_test_state(self)`  - Test that tests/test_models/test_state.py conforms to PEP8
-   `def test_state_module_docstring(self)`  - Test for the state.py module docstring
-   `def test_state_class_docstring(self)`  - Test for the State class docstring

[/test_models/user.py](https://github.com/Njiraini23/AirBnB_clone_v4/blob/master/tests/test_models/test_user.py)  - Contains the TestUserDocs class:

-   `def setUpClass(cls)`  - Set up for the doc tests
-   `def test_pep8_conformance_user(self)`  - Test that models/user.py conforms to PEP8
-   `def test_pep8_conformance_test_user(self)`  - Test that tests/test_models/test_user.py conforms to PEP8
-   `def test_user_module_docstring(self)`  - Test for the user.py module docstring
-   `def test_user_class_docstring(self)`  - Test for the User class docstring

## [](https://github.com/Njiraini23/AirBnB_clone_v4#examples-of-use)Examples of use

```
vagrantAirBnB_clone$./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  all  create  destroy  help  quit  show  update

(hbnb) all MyModel
** class doesn't exist **
(hbnb) create BaseModel
7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) all BaseModel
[[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}]
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
[BaseModel] (7da56403-cc45-4f1c-ad32-bfafeb2bb050) {'updated_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772167), 'id': '7da56403-cc45-4f1c-ad32-bfafeb2bb050', 'created_at': datetime.datetime(2017, 9, 28, 9, 50, 46, 772123)}
(hbnb) destroy BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
(hbnb) show BaseModel 7da56403-cc45-4f1c-ad32-bfafeb2bb050
** no instance found **
(hbnb) quit

```

# 0x06. AirBnB clone - Web dynamic


### Concepts

_For this project, we expect you to look at this concept:_

-   [AirBnB clone](https://github.com/Njiraini23/AirBnB_clone_v4#AirBnB-Clone-The-Console)

## Resources

**Read or watch**:

-   [Selector](https://jquery-tutorial.net/selectors/using-elements-ids-and-classes/)
-   [Get and set content](https://jquery-tutorial.net/dom-manipulation/getting-and-setting-content/)
-   [Manipulate CSS classes](https://jquery-tutorial.net/dom-manipulation/getting-and-setting-css-classes/)
-   [Manipulate DOM elements](https://jquery-tutorial.net/dom-manipulation/the-append-and-prepend-methods/)
-   [Document ready](https://learn.jquery.com/using-jquery-core/document-ready/)
-   [Introduction](https://jquery-tutorial.net/ajax/introduction/)
-   [GET & POST request](https://jquery-tutorial.net/ajax/the-get-and-post-methods/)
-   [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

## Learning Objectives

At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.alxswe.com/rltoken/_ii906pZ1sg8gkAF1dvsNQ "explain to anyone"),  **without the help of Google**:

### General

-   How cool it is to request your own API
-   How to modify an HTML element style
-   How to get and update an HTML element content
-   How to modify the DOM
-   How to make a  `GET`  request with JQuery Ajax
-   How to make a  `POST`  request with JQuery Ajax
-   How to listen/bind to DOM events
-   How to listen/bind to user events

## Requirements

### General

-   Allowed editors:  `vi`,  `vim`,  `emacs`
-   All your files will be interpreted on Chrome (version 57.0)
-   All your files should end with a new line
-   A  `README.md`  file, at the root of the folder of the project, is mandatory
-   Your code should be  `semistandard`  compliant with the flag  `--global $`:  `semistandard *.js --global $`
-   All your JavaScript must be in the folder  `scripts`
-   You must use JQuery version 3.x
-   You are not allowed to use  `var`
-   HTML should not reload for each action: DOM manipulation, update values, fetch data…

### Import JQuery

```
<head>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
</head>

```

### Before starting the project…

You will work on a codebase using  [Flasgger](https://github.com/flasgger/flasgger), you will need to install it locally first before starting the RestAPI:

```
$ sudo apt-get install -y python3-lxml
$ sudo pip3 install flask_cors # if it was not installed yet
$ sudo pip3 install flasgger

```

If the RestAPI is not starting, please read the error message. Based on the(ses) error message(s), you will have to troubleshoot potential dependencies issues.

Here some solutions:

#### `jsonschema`  exception

```
$ sudo pip3 uninstall -y jsonschema 
$ sudo pip3 install jsonschema==3.0.1

```

#### `No module named 'pathlib2'`

```
$ sudo pip3 install pathlib2

```

### Expose ports from your Vagrant

In your  `Vagrantfile`, add this line for each port forwarded

```
# I expose the port 5001 of my vm to the port 5001 on my computer
config.vm.network :forwarded_port, guest: 5001, host: 5001 

```

if you need to expose other ports, same line but you will need to replace the “guest port” (inside your vagrant) and your “host port” (outside your vagrant, used from your browser for example)

It’s important in your project, to use the AirBnB API with the port  `5001`

  
  
![](https://s3.amazonaws.com/intranet-projects-files/concepts/74/hbnb_step5.png)


### [0. Last clone!]()

A new codebase again? Yes!

For this project you will fork this  [codebase](https://github.com/jzamora5/AirBnB_clone_v3):

-   Update the repository name to  `AirBnB_clone_v4`
-   Update the  `README.md`:
    -   Add yourself as an author of the project
    -   Add new information about your new contribution
    -   Make it better!
-   If you’re the owner of this codebase, create a new repository called  `AirBnB_clone_v4`  and copy over all files from  `AirBnB_clone_v3`
-   If you didn’t install Flasgger from the previous project, it’s time!  `sudo pip3 install flasgger`

### [1. Cash only]()

Write a script that starts a Flask web application:

-   Based on  `web_flask`, copy:  `web_flask/static`,  `web_flask/templates/100-hbnb.html`,  `web_flask/__init__.py`  and  `web_flask/100-hbnb.py`  into the  `web_dynamic`  folder
-   Rename  `100-hbnb.py`  to  `0-hbnb.py`
-   Rename  `100-hbnb.html`  to  `0-hbnb.html`
-   Update  `0-hbnb.py`  to replace the existing route to  `/0-hbnb/`

**If  `100-hbnb.html`  is not present, use  `8-hbnb.html`  instead**

```
guillaume@ubuntu:~/AirBnB_v4$ HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db python3 -m web_dynamic.0-hbnb
* Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
....

```

One problem now is the asset caching done by Flask.

To avoid that, you will add a query string to each asset:

In  `0-hbnb.py`, add a variable  `cache_id`  to the  `render_template`. The value of this variable must be an UUID (`uuid.uuid4()`)

In  `0-hbnb.html`, add this variable  `cache_id`  as query string to each  `<link>`  tag URL

```
guillaume@ubuntu:~/AirBnB_v4$ curl -s -XGET http://0.0.0.0:5000/0-hbnb/ | head -6
<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="../static/styles/4-common.css?e211c9eb-7d17-4f12-85eb-4d50fa50cb1d" />
    <link rel="stylesheet" type="text/css" href="../static/styles/3-header.css?e211c9eb-7d17-4f12-85eb-4d50fa50cb1d" />
guillaume@ubuntu:~/AirBnB_v4$ curl -s -XGET http://0.0.0.0:5000/0-hbnb/ | head -6
<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" type="text/css" href="../static/styles/4-common.css?f834413e-0aa9-4767-b64a-c92db9cb1f82" />
    <link rel="stylesheet" type="text/css" href="../static/styles/3-header.css?f834413e-0aa9-4767-b64a-c92db9cb1f82" />
guillaume@ubuntu:~/AirBnB_v4$ 

```

### [2. Select some Amenities to be comfortable!]()

For the moment the filters section is static, let’s make it dynamic!

Replace the route  `0-hbnb`  with  `1-hbnb`  in the file  `1-hbnb.py`  (based on  `0-hbnb.py`)

Create a new template  `1-hbnb.html`  (based on  `0-hbnb.html`) and update it:

-   Import JQuery in the  `<head>`  tag
-   Import the JavaScript  `static/scripts/1-hbnb.js`  in the  `<head>`  tag
    -   In 1-hbnb.html and the following HTML files, add this variable cache_id as query string to the above  `<script>`  tag
-   Add a  `<input type="checkbox">`  tag to the  `li`  tag of each amenity
-   The new checkbox must be at 10px on the left of the Amenity name
-   Add to the  `input`  tags of each amenity (`<li>`  tag) the attribute  `data-id=":amenity_id"`  => this will allow us to retrieve the Amenity ID from the DOM
-   Add to the  `input`  tags of each amenity (`<li>`  tag) the attribute  `data-name=":amenity_name"`  => this will allow us to retrieve the Amenity name from the DOM

Write a JavaScript script (`static/scripts/1-hbnb.js`):

-   Your script must be executed only when DOM is loaded
-   You must use JQuery
-   Listen for changes on each  `input`  checkbox tag:
    -   if the checkbox is checked, you must store the Amenity ID in a variable (dictionary or list)
    -   if the checkbox is unchecked, you must remove the Amenity ID from the variable
    -   update the  `h4`  tag inside the  `div`  Amenities with the list of Amenities checked

As example:

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/9/8e3c27078d62806b8ad1c1a682fbb3a48636ab89.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230602T055530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a38663f159287b40b89c8083b39acae790c1c49aef8617b363d39a1a83f7d85e)  ![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/9/4e5cecdd82a70f07cd283ef8e242ad325c95b564.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230602T055530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=227e28fd6ace1800e8af471193664b2fc3df2d516b1bdad0d3d484d2d90143e8)  ![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/9/fb54e3081e229654db6e71ba919db753a791dcc3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230602T055530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=f17f6505ec2d0333582299015949ddeb1921969c8169b40235af8a7cce2248f5)


### [3. API status]()

Before requesting the HBNB API, it’s better to know the status of this one.

Update the API entry point (`api/v1/app.py`) by replacing the current CORS  `CORS(app, origins="0.0.0.0")`  by  `CORS(app, resources={r"/api/v1/*": {"origins": "*"}})`.

Change the route  `1-hbnb`  to  `2-hbnb`  in the file  `2-hbnb.py`  (based on  `1-hbnb.py`)

Create a new template  `2-hbnb.html`  (based on  `1-hbnb.html`) and update it:

-   Import the JavaScript  `static/scripts/2-hbnb.js`  in the  `<head>`  tag (instead of  `1-hbnb.js`)
-   Add a new  `div`  element in the  `header`  tag:
    -   Attribute ID should be  `api_status`
    -   Align to the right
    -   Circle of 40px diameter
    -   Center vertically
    -   At 30px of the right border
    -   Background color #cccccc
-   Also add a class  `available`  for this new element in  `web_dynamic/static/styles/3-header.css`:
    -   Background color #ff545f

Write a JavaScript script (`static/scripts/2-hbnb.js`):

-   Based on  `1-hbnb.js`
-   Request  `http://0.0.0.0:5001/api/v1/status/`:
    -   If in the status is “OK”, add the class  `available`  to the  `div#api_status`
    -   Otherwise, remove the class  `available`  to the  `div#api_status`

To start the API in the port 5001:

```
guillaume@ubuntu:~/AirBnB_v4$ HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db HBNB_TYPE_STORAGE=db HBNB_API_PORT=5001 python3 -m api.v1.app
...

```

For example:

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/9/b68cd1e385963da099899f51ee5f3a6bbf0adcb3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230602T055530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=03d58b4234dbce2bdf3ef392ea76602ad8df9a1a946467906ea2be3006a9a7e1)  ![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/9/62fbb2d674fca4a843458e61cf3b05ee9f68ad04.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230602T055530Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=5c3a53969e98a11723c35c5c33562cfd3a286c58e2a8901480174ba7a954123d)

### [4. Fetch places]()

Replace the route  `2-hbnb`  with  `3-hbnb`  in the file  `3-hbnb.py`  (based on  `2-hbnb.py`)

Create a new template  `3-hbnb.html`  (based on  `2-hbnb.html`) and update it:

-   Import the JavaScript  `static/scripts/3-hbnb.js`  in the  `<head>`  tag (instead of  `2-hbnb.js`)
-   Remove the entire Jinja section of displaying all places (all  `article`  tags)

Write a JavaScript script (`static/scripts/3-hbnb.js`):

-   Based on  `2-hbnb.js`
-   Request  `http://0.0.0.0:5001/api/v1/places_search/`:
    -   Description of this endpoint  [here](https://intranet.alxswe.com/rltoken/EkC2rNKurYIznWBiJYPtgA "here").  **If this endpoint is not available, you will have to add it to the API**  (you can work all together for creating this endpoint)
    -   Send a  `POST`  request with  `Content-Type: application/json`  and an empty dictionary in the body - cURL version:  `curl "http://0.0.0.0:5001/api/v1/places_search" -XPOST -H "Content-Type: application/json" -d '{}'`
    -   Loop into the result of the request and create an  `article`  tag representing a  `Place`  in the  `section.places`. (you can remove the Owner tag in the place description)

The final result must be the same as previously, but now, places are loaded from the front-end, not from the back-end!

### [5. Filter places by Amenity]()

Replace the route  `3-hbnb`  with  `4-hbnb`  in the file  `4-hbnb.py`  (based on  `3-hbnb.py`)

Create a new template  `4-hbnb.html`  (based on  `3-hbnb.html`) and update it:

-   Import the JavaScript  `static/scripts/4-hbnb.js`  in the  `<head>`  tag (instead of  `3-hbnb.js`)

Write a JavaScript script (`static/scripts/4-hbnb.js`):

-   Based on  `3-hbnb.js`
-   When the  `button`  tag is clicked, a new POST request to  `places_search`  should be made with the list of Amenities checked

Now you have the first filter implemented, enjoy!

### [6. States and Cities]()

Now, reproduce the same steps with the State and City filter:

Replace the route  `4-hbnb`  to  `100-hbnb`  in the file  `100-hbnb.py`  (based on  `4-hbnb.py`)

Create a new template  `100-hbnb.html`  (based on  `4-hbnb.html`) and update it:

-   Import the JavaScript  `static/scripts/100-hbnb.js`  in the  `<head>`  tag (instead of  `4-hbnb.js`)
-   Add to all  `li`  tags of each state a new tag:  `<input type="checkbox">`
-   Add to all  `li`  tags of each cities a new tag:  `<input type="checkbox">`
-   The new checkbox must be at 10px on the left of the State or City name
-   Add to all  `input`  tags of each states (`<li>`  tag) the attribute  `data-id=":state_id"`
-   Add to all  `input`  tags of each states (`<li>`  tag) the attribute  `data-name=":state_name"`
-   Add to all  `input`  tags of each cities (`<li>`  tag) the attribute  `data-id=":city_id"`
-   Add to all  `input`  tags of each cities (`<li>`  tag) the attribute  `data-name=":city_name"`

Write a JavaScript script (`static/scripts/100-hbnb.js`):

-   Based on  `4-hbnb.js`
-   Listen to changes on each  `input`  checkbox tag:
    -   if the checkbox is checked, you must store the State or City ID in a variable (dictionary or list)
    -   if the checkbox is unchecked, you must remove the State or City ID from the variable
    -   update the  `h4`  tag inside the  `div`  Locations with the list of States or Cities checked
-   When the  `button`  tag is clicked, a new POST request to  `places_search`  should be made with the list of Amenities, Cities and States checked

### [7. Reviews]()

Let’s add a new feature: show and hide reviews!

Replace the route  `100-hbnb`  to  `101-hbnb`  in the file  `101-hbnb.py`  (based on  `100-hbnb.py`)

Create a new template  `101-hbnb.html`  (based on  `100-hbnb.html`) and update it:

-   Import the JavaScript  `static/scripts/101-hbnb.js`  in the  `<head>`  tag (instead of  `101-hbnb.js`)
-   Design the list of reviews from this  [task](https://intranet.alxswe.com/tasks/1417)
-   Add a  `span`  element at the right of the  `H2`  “Reviews” with value “show” (add all necessary attributes to do this feature)

Write a JavaScript script (`static/scripts/101-hbnb.js`):

-   Based on  `100-hbnb.js`
-   When the  `span`  next to the Reviews  `h2`  is clicked by the user:
    -   Fetch, parse, display reviews and change the text to “hide”
    -   If the text is “hide”: remove all Review elements from the DOM
    -   This button should work like a toggle to fetch/display and hide reviews

---
## [](https://github.com/Njiraini23/AirBnB_clone_v4#bugs)Bugs
## Authors
---
-   [Alvin](https://github.com/vpnchengo)
-  [Kennedy](https://github.com/Njiraini23)
- Alexa Orrico -  [Github](https://github.com/alexaorrico)  /  [Twitter](https://twitter.com/alexa_orrico)  
- Jennifer Huang -  [Github](https://github.com/jhuang10123)  /  [Twitter](https://twitter.com/earthtojhuang)  
- Jhoan Zamora -  [Github](https://github.com/jzamora5)  /  [Twitter](https://twitter.com/JhoanZamora10)
- David Ovalle -  [Github](https://github.com/Nukemenonai)  /  [Twitter](https://twitter.com/disartDave)

Second part of Airbnb: Joann Vuong

## [](https://github.com/Njiraini23/AirBnB_clone_v4#license)License

Public Domain. No copy write protection.


