STEPS FOR THE PROJECT
REQUIREMENS
  NODE  -  v18.20.4
  NPM   - 10.7.0
 -In case you are in another version 
     install this: nvm install 18.20.4  
                   nvm use 18.20.4 

- Initiate the project (npm ini -y)
- install dependencies
     npm install cors dotenv express mongoose ,  npm install --save-dev nodemon
- run the project
    npm run dev

API'S

get/post      :   http://localhost:5000/api/colors          or   localhost:5000/api/colors              (api is used to get the colors and to add the colors)
get/post      :   http://localhost:5000/api/categories      or   localhost:5000/api/categories          (api is used to get the categories and to add the categories)
get/post      :   http://localhost:5000/api/accessories     or   localhost:5000/api/accessories         (api is used to get the accessories and to add the accessories)
get/post      :   http://localhost:5000/api/features        or   localhost:5000/api/features            (api is used to get the features and to add the features)
get/post      :   http://localhost:5000/api/variants        or   localhost:5000/api/variants            (api is used to get the variants and to add the variants)
get           :   http://localhost:5000/api/variants/:id    or   localhost:5000/api/variants/:id        (api is used to get the single variants to display the data in angular)
get/post      :   http://localhost:5000/api/models          or   localhost:5000/api/models               (api is used to get the models and to add the models)

NOTE 1: all  post api calls are created for to insert the data using Admin panel(enabled in angular project) in this case you need to add colors,categories,accessories,features,etc.....
NOTE 2: or you can directly import form mogodb compass (files are added in the db folder....) in this case you can choose the client when angular project loads(localhost:4200)
        steps 
        when the project run collections are creted atomatically choose the collection to import the data and click on add data and select importJSON or CSV file
