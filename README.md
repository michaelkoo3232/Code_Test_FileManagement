# File management system

This is a file management system using sails.js that allows users to upload,download files and share with other users.

## Getting Started

### Prerequisites

This project is linked with local mongoDB system, make sure you have install mongoDB locally. 

Please start your local mongoDB server before using this system.  

```
Mongod
```

## Installing

Before run the project make sure you download Node.js 

intall sails js 
```
npm install sails -g
```

Then open cmd and go to the project directory and 

```
npm install
```

## How to Use
<h1>Login and Signup</h1>

Type in cmd

```
sails lift
```
When the prompt response 
```
In a production environment (NODE_ENV=production) Sails always uses
 migrate:'safe' to protect against inadvertent deletion of your data.
 But during development, you have a few different options:

 1. FOR DEV:      alter   wipe/drop and try to re-insert ALL my data (recommended)
 2. FOR TESTS:    drop    wipe/drop ALL my data every time I lift Sails
 3. FOR STAGING:  safe    don't auto-migrate my data. I will do it myself

 Read more: sailsjs.com/docs/concepts/models-and-orm/model-settings#?migrate
--------------------------------------------------------------------------------

What would you like Sails to do this time?
 ** NEVER CHOOSE "alter" or "drop" IF YOU ARE WORKING WITH PRODUCTION DATA **
```
choose 
```
3
```
<h1>How to use</h1> 

go to following address with your browser.

```
 http://localhost:1337/
```
<h2>Sign up</h2>

Click `(login)` on the navigation bar  to enter the log in page.

There are 2 defualt user set in the system. 
```
Username | password
---------| --------
usera    | 123456
userb    | 123456
```

Press Login button to login to your user profile.

You can also create a new user profile for yourself by pressing `sign up` button on the navigation bar 

<h2>Sign up</h2>
After pressing the sign up button , the browser will redirect you to sign up page. 

You can input the username and password you want for your account. 

if you create your account successfully you will log in automatically and go to the file management page

otherwise, page will alert 
```
Internal Server Error 
```
it means the username you want to use is already used by another user. Pleaseuse another username and pressed `sign up ` button again


<h1> Upload Your Files </h1>
press `upload` button on the navigation bar  and you can go to the upload page 

click `Browse...` and select the file you want to upload 
> warning: **Please do not upload file that there is space in filename**

Then, click `upload` button to upload. 

Popup window `upload suceesful` means you already upload your file.

<h1> Manage Your Files </h1>

Click `Home`/`File` on the navigation bar 

You can see your uploaded file 

You can `delete`/`rename`/`download`/`share` file in this page.\

<h2> Delete Files</h2>

press `delete` button to delete files
Popup window `delete sucessful` means you delete yourfile from database.

<h2> Rename File </h2>
If you want to rename your file, press `rename` button,
browser will redirect you to the rename file page

Input the new name of the file in the form and click the `rename` button.
>you don't need to input the extension of the file

pop up window show `rename sucessfully` means you already rename file sucessfully.


### Download File

Press `download` button to download the file. 

<h2> Share File</h2>

Your can share file with other user in the system.

Press `share` button, a pop up window will pop up.

Input the username of the user who you want to share the file. 

Press `OK` to share. 

<h2> view the file that other user share with you </h2>

Press `share with me` on the navigation bar.

You can see the file that other user share with you.

>For the file that other user share with you, you can only download it.


<h1>Built with</h1>

* [Sails js](https://sailsjs.com/) - The web framework used
RSS Feeds

* [MongoDB](https://www.mongodb.com/) Database system



# Authors

* **Michael Koo** 





