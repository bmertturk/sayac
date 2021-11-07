const Login = () => {

	async function login() {


		await fetch('http://www.geriyesay.com/api/getAuth', {
		}).then(response => response.json()).then(data => {
			console.log(data);
		})
	}

	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-5">
					<div className="card p-3">
						<h3>Login</h3>
						<div className="mb-3">
							<label>E-mail</label>
							<input type="text" className="form-control" />
						</div>
						<div className="mb-3">
							<label>Password</label>
							<input type="password" className="form-control" />
						</div>
						<div>
							<button type="button" className="btn btn-primary" onClick={login}>Login</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login
