# Ember board using EmberJS, and JavaScript

## This site will make, edit, and remove question, and add answer to the question  11/4/16

#### By **Adam Gorbahn**

## Description
This site will make list of questions and give like to the question with more info and answers.
Also, site can make new question, edit it, and remove. user can rate how good the answers are on the question by clicking on thumb. user can add there favorite question to the list and can look at the list at any time.

## Specifications

#### 'add' page

user input                | output
------------------------- | -------------
Type in the text fields for the question. click on 'Add new question' | will make the new question and will redirect to view for the question just made.

#### '/questions' page

user input                | output
------------------------- | -------------
click on 'edit' button    | it will redirect to the 'edit/id' page to edit the page. id mean what it working on.

user input                | output
------------------------- | -------------
click on 'delete' button  | it will ask you 'do you what to delete it? yes or no'. if yes, it will remove the quesiton. if no, it do nothing with it.


#### '/edit/id' page, id means what page working on.

user input                | output
------------------------- | -------------
Edit in the text fields for the question. click on 'update' | will update question and will redirect to view for the question just made.

#### 'view/id', id means what page viewing on. 

user input                | output
------------------------- | -------------
Type in the text fields for the answer. click on 'Add Answer' | will make the new answer and will add to that question.

user input                | output
------------------------- | -------------
click on 'thumb's up symbol' | Will plus one to the counter of likes.

user input                | output
------------------------- | -------------
click on 'thumb's down symbol' | Will minus one from the counter of likes.

user input                | output
------------------------- | -------------
click on 'Plus symbol' button | will add the question to the list of favorite questions. Once add to the list. it will update the counter on the navbar.

(Please don't refresh your site when doing the favorite questions)

#### '/favorites'

user input                | output
------------------------- | -------------
click on 'minus symbol' button | will remove the question from list of favorite questions. Once remove the list. it will update the counter on the navbar.

(Please don't refresh your site when doing the favorite questions)

## Bugs
* When question have an answer it will not delete first load in. need to way for some time. then it will delete.

## Setup/Installation Requirements

* need NodeJS, npm, and bower.
* npm install
* bower install
* Ember s

## Technologies Used

* HTML
* JavaScript
* NodeJS
* EmberJS

### License

*GPL*

Copyright (c) 2016 **Adam Gorbahn**
