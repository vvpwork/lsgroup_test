# lsgroup_test

## endpoints:
   # "/user":
        method: post
        req:
            header: 
                X-api-key: test_api_key
            params: null,
            query: null, 
            body:
                {
                    email*: string,
                    password*:string,
                    name: string,
                    surname: string,
                } 
        res:
            status: 200
            comment: 'return saved user and session-token'
            {
                isAuthenticated: bool,
                user: object,
                token: string
            }         
        
   # "/user":
        method: get
        req:
            header: 
                X-api-key: test_api_key
            params: null
            query: 
                id: userID 
            body: null
        res:
            status: 200
            comment: 'return user with params id'
            {
                name: string,
                surname: string,
                comment: arr,
                _id: string,
                email: string,
                password: string,
                createdAt: date,
                updatedAt: date,
            }
   # "/user":
        method: patch
        req:
            header:
                X-api-key: test_api_key
            params: null
            query: null
            body:
                {
                    id*: string,
                    email: string,
                    password: string,
                    name: string,
                    surname: string, 
        res:
            status: 201 
            comment: "return updated user"
                }
            {
                name: string,
                surname: string,
                comment: arr,
                _id: string,
                email: string,
                password: string,
                createdAt: date,
                updatedAt: date,   
            }
   # "/user/:id"
        method: delete
        req:
            header:
                X-api-key: test_api_key
            params: userID
            query: null
            body: null
        res:
            status: 200
            comment:"return count for deleted user"
            {
                deleted: number,
                count:number
            }
   # "/users"
        method: get
        req:
            header:
                X-api-key: test_api_key
            params: null
            query: null
            body: null
        res:
            status: 200
            comment: "retutn collection for all users and comment "
            [
                {
                name: string,
                surname: string,
                comment: [
                    {
                        _id: string.
                        author: string,
                        description: string,
                        createdAt: date,
                        updatedAt: date,
                        
                    }
                ],
            createdAt: date,
            updatedAt: date,
            ] 
   # "/comment"
        method: post
        req:
            header:
                X-api-key: test_api_key 
            params: null,
            query: null,
            body:{
                author*:userID
                description*:string
            }
        res:
            status: 200
            comment: "add new post "
            {
                comment: comment was saved
                _id: commentID
                author: userID,
                description: string,
                "createdAt": date,
                "updatedAt": date,
            }
   # "/comment"
        method: get
        req:
            header: 
                X-api-key: test_api_key
            params: null
            query: 
                id: commentID 
            body: null
        res:
            status: 200
            comment: 'return comment with params id'
            {
                _id: commentID
                author: userID,
                description: string,
                createdAt: date,
                updatedAt: date,
            }
   # "/comment"
        method: patch
        req:
            header: 
                X-api-key: test_api_key
            params: null
            query: nul
            body:
                {
                    id*: commentID,
                    description*:string 
                }
            
        res:
            status: 200
            comment: 'return updated comment'
            {
                _id: commentID
                author: userID,
                description: string,
                createdAt: date,
                updatedAt: date,
            }
            
   # "/comment/:id"
        method: delete
        req:
            header: 
                X-api-key: test_api_key
            params: commentID
            query: nu  
            body: null
        res:
            status: 200
            comment:"return count for deleted comment"
            {
                deleted: number,
                count:number
            }
  # "/comments"
        method: get
        req:
            header: 
                X-api-key: test_api_key
            params: null
            query: null
            body: null
        res:
            status: 200
            comment: "array of object comment"
            [
                {
                    _id: commentID
                    author: userID,
                    description: string,
                    createdAt: date,
                    updatedAt: date,
                }
            ]

