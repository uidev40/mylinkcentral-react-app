import React from "react"

const ConfirmationModal = (props) => {
	const {refConfirmatinoModal, refConfirmationClose} = props

	return (
		<>
			<button
				type='button'
				className='btn btn-primary d-none'
				data-bs-toggle='modal'
				data-bs-target='#confirmationModal'
				ref={refConfirmatinoModal}
			>
				Launch demo modal
			</button>

			<div
				className='modal fade'
				id='confirmationModal'
				tabIndex='-1'
				aria-labelledby='exampleModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Delete Link
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'
							></button>
						</div>
						<div className='modal-body'>Are are sure to delete this link?</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-secondary'
								data-bs-dismiss='modal'
								ref={refConfirmationClose}
							>
								Cancel
							</button>
							<button
								type='button'
								className='btn btn-danger'
								onClick={props.handleConfirmationModalSubmit}
							>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ConfirmationModal
