namespace Express {

    export interface Response {

        // This method is used to create a the required response structure.
        // The behaviour is similar to req.json()
        zJson(v: any)
    }
}