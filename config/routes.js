/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
//for user login and logout 
  '/user/login': {view: 'user/login'},
  'POST /user/login': 'UserController.login',
  'DELETE /logout': 'UserController.logout',
  

//for file upload delete upload and download upload
'/file/upload': {view:'file/upload'},
'POST /file/upload': 'FileController.upload',
'DELETE /file/:id' : 'FileController.delete',
'/file/download/:id' : 'FileController.download',
'GET /file/rename/:id' : 'FileController.rename',
'POST /file/rename/:id' : 'FileController.rename',
//viewing files
'/file/view': 'FileController.view',

//homepage 
  '/': { view: 'pages/homepage' },


  //for the association
  'GET /file/:id/owners': 'FileController.populate',
  'GET /user/:id/files': 'UserController.populate',
  'POST /user/:id/files/add/:fk': 'UserController.add',
  'POST /user/:id/files/remove/:fk': 'UserController.remove',
  
  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': { view: 'pages/homepage' },
  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
