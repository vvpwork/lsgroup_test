# lsgroup_test

## endpoints:
   # "/user":
        method: post
        req:
            header: 
                x-api-key: test_api_key
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
                x-api-key: test_api_key
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
                createdAt: string,
                updatedAt: string,
            }
   # "/user":
        method: patch
        req:
            header:
                x-api-key: test_api_key
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
                createdAt: string,
                updatedAt: string,   
            }
   # "/user/:id"
        method: delete
        req:
            header:
                x-api-key: test_api_key
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