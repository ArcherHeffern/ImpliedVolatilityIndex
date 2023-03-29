# Developing

```bash
# installing npm dependencies
npm i

# running the app
npm run dev
```
## Authenticating users
### Example: Validating user with token before sending them information from our database
with a request that has the content
```
{
    "token" : "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OWVkMTU1OTdhYjM1Zjc4MjljZTc0NDMwN2I3OTNiN2ViZWIyZjAiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcXVhbnQtY2x1Yi1zcHJpbmctMjAyMyIsImF1ZCI6InF1YW50LWNsdWItc3ByaW5nLTIwMjMiLCJhdXRoX3RpbWUiOjE2ODAwNjM5NDMsInVzZXJfaWQiOiJJVThERVFUSExpZjR1S3Q0N2JGa21NblhhOHcxIiwic3ViIjoiSVU4REVRVEhMaWY0dUt0NDdiRmttTW5YYTh3MSIsImlhdCI6MTY4MDA2Mzk0MywiZXhwIjoxNjgwMDY3NTQzLCJlbWFpbCI6ImluYmV0ZXN0QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJpbmJldGVzdEBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.h6uFqdH-OjpfrlNQsz0FWRtzyX6UVjxnyAHnm3o7p2-nqOLdzTVVclIXvdb0Tud-H3-IhG592KhmJ3VlOz7JFwW8S6Qupg_kdcEqArs6VN27QktV8bX5Z_ReWG5fTDV7qav0ja0FbCokT7cRVkAXs7jyTNmCFGErReKBDSWpQPsP03ez7f64kVEXeZzfYLySiOhADr6YyrLoyUe876lkqP0S7TcIkIj4YdNSbe2oROqLGeMVHl_Or21CKznK1YZyw0Th_Z3BlFaKAz024vCEqslQQjBtdbzUH3hNSQyLyow7YoqHswUF7nTVep9Oxgds9JodcMzgAy_i3RbQpxuGzw"
}
```
we authenticate the user with the ```auth.verifyIdToken()``` function
```typescript
export const GET = async ({ request }) => {
    const token = await request.json();     // convert request into JSON and the token
    try{
        await auth.verifyIdToken(token) 
        const info = //information from our database 
        return json(info, {status : 200})   // return the info as a response
    }catch{
        return json("invalide token", {status: 401})
    }
}
```