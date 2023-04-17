import React from "react"

const UpdateModal = (props) => {
	const {link, handleOnChange, handleUpdateClick} = props

	return (
		<>
			<div>
				<button
					type='button'
					className='btn btn-primary d-none'
					data-bs-toggle='modal'
					data-bs-target='#exampleModal'
					ref={props.refUpdateIconClick}
				>
					Launch demo modal
				</button>

				<div
					className='modal fade'
					id='exampleModal'
					tabIndex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
				>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title' id='exampleModalLabel'>
									Edit Link
								</h5>

								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
								></button>
							</div>
							<div className='modal-body text-start'>
								<div className='container my-3'>
									<div className='mb-3 '>
										<label htmlFor='title' className='col-sm-2 col-form-label'>
											Title
										</label>
										<div className='col-sm-10'>
											<input
												type='text'
												className='form-control'
												id='title'
												name='title'
												onChange={handleOnChange}
												value={link.title}
											/>
										</div>
									</div>
									<div className='mb-3 '>
										<label htmlFor='url' className='col-sm-2 col-form-label'>
											Url
										</label>
										<div className='col-sm-10'>
											<input
												type='text'
												className='form-control'
												id='url'
												name='url'
												onChange={handleOnChange}
												value={link.url}
											/>
										</div>
									</div>
									<div className='mb-3'>
										<label
											htmlFor='description'
											className='col-sm-3 col-form-label'
										>
											Description
										</label>
										<div className='col-sm-10'>
											<textarea
												className='form-control'
												id='description'
												name='description'
												row='7'
												onChange={handleOnChange}
												value={link.description}
											></textarea>
										</div>
									</div>
								</div>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-bs-dismiss='modal'
									ref={props.refClose}
								>
									Close
								</button>
								<button
									type='button'
									className='btn btn-primary'
									onClick={handleUpdateClick}
									disabled={link.title.length < 3 || link.url.length < 3}
								>
									Update Note
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default UpdateModal
