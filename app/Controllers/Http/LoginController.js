'use strict'

class LoginController {


	async Login({request, response, auth}) {
		const { username , password } = request.post();
		await auth.attempt(username, password)


		return response.status(200).send({message: 'Test'})
	}
}

module.exports = LoginController
