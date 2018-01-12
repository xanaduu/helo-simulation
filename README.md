NOTES:

#Dependencies
  Express
  Massive
  Express-Session
  Dotenv
  Body-parser
  Auth0-lock
  React-Router-Dom 
  Redux
  React-Redux
  Axios

#Endpoints
  #AUTHORIZATION
    #GET
      /api/auth/login
      /api/auth/authenticated

    #POST
      /api/auth/logout
    
  #FRIEND
    #GET
      /api/friend/list
    
    #POST
      /api/friend/add
      /api/friend/remove

  #USER
    #PATCH
      /api/user/patch/:id

    #GET
      /api/user/list
      /api/user/search

  #RECOMMENDED
    #POST
      /api/recommended
      /api/recommended/add
