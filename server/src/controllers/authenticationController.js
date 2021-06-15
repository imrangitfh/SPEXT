module.exports = {
    async register (req, res) {
        try{
            var users = {
                'email': await req.body.email,
                'username': await req.body.username,
                'password': await req.body.password
            }
            console.log(users)

        } catch (err) {
            res.status(400).send({
                error: 'this email is already in use.'
            })
        }
    }
}