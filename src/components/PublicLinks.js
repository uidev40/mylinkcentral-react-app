import React from "react"

const PublicLinks = (props) => {
	const {link} = props

	return (
		<>
			<div className='col-sm-6 my-2 justify-content-left' key={link.id}>
				<div className='card'>
					<div className='card-body'>
						{link.description !== null ? (
							<h5 className='card-title'>{link.description}</h5>
						) : (
							""
						)}
						<a
							rel='noreferrer'
							target='_blank'
							href={link.url}
							className='btn btn-dark my-2'
						>
							{link.title}
						</a>

						{/* <i
							className='fa-regular fa-share-nodes mx-2'
							onClick={() => handleShareClick()}
						></i> */}
					</div>
					<div className='d-flex justify-content-left'>
						<div className='card-body '>
							<div className='form-check form-switch'>
								<label
									className='form-check-label'
									htmlFor='flexSwitchCheckChecked'
								></label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default PublicLinks
