import { useState } from "react"

const Login = () => {

	const [username, setUsername] = useState('qwe123@qwe123.com')
	const [password, setPassword] = useState('123456')

	async function submitLogin() {
		await fetch('http://159.223.22.102/api/getAuth', {
			method: 'POST',
			body: JSON.stringify({
				'email': username,
				'password': password
			})
		}).then(response => response.json()).then(data => {
			console.log(data);
		}).catch(err => {
			console.log(err);
		});
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-5">
					<div className="card p-3">
						<h3>Login</h3>
						<div className="mb-3">
							<label>E-mail</label>
							<input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
						</div>
						<div className="mb-3">
							<label>Password</label>
							<input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
						</div>
						<div>
						<button className="btn w-100 btn-primary" onClick={submitLogin}>Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
