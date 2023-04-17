import React from "react"

const ShareLink = (props) => {
	return (
		<>
			<button
				type='button'
				className='btn btn-primary text-uppercase d-none'
				data-bs-toggle='modal'
				data-bs-target='#myModel'
				id='shareBtn'
				data-bs-placement='top'
				title='Click Me!'
				ref={props.refShare}
			>
				Share
			</button>

			<div
				className='modal fade'
				id='myModel'
				tabIndex='-1'
				aria-labelledby='myModelLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='myModelLabel'>
								Share Modal
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>
							<p>Share this link via</p>
							<div className='d-flex align-items-center icons'>
								<a
									href='/'
									className='fs-5 d-flex align-items-center justify-content-center'
								>
									<span className='fab fa-facebook-f'></span>
								</a>
								<a
									href='/'
									className='fs-5 d-flex align-items-center justify-content-center'
								>
									<span className='fab fa-twitter'></span>
								</a>
								<a
									href='/'
									className='fs-5 d-flex align-items-center justify-content-center'
								>
									<span className='fab fa-instagram'></span>
								</a>
								<a
									href='/'
									className='fs-5 d-flex align-items-center justify-content-center'
								>
									<span className='fab fa-whatsapp'></span>
								</a>
								<a
									href='/'
									className='fs-5 d-flex align-items-center justify-content-center'
								>
									<span className='fab fa-telegram-plane'></span>
								</a>
							</div>
							<p>Or copy link</p>
							<div className='field d-flex align-items-center justify-content-between'>
								<span className='fas fa-link text-center'></span>
								<input type='text' />
								<button>Copy</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShareLink
