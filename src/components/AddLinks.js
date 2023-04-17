import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {addNewLink} from "../LinksAPI/LinkOperations"
import {addNewLinkAction} from "../state/action-creators/actions"

const AddLinks = () => {
	const [link, setLink] = useState(null)
	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (!link.url.includes("http")) {
			link.url = `http://${link.url}`
		}

		const newLink = await addNewLink(
			link.title,
			link.description,
			link.url,
			link.iconname
		)

		dispatch(addNewLinkAction(newLink))
	}
	const handleOnChange = (e) => {
		setLink({...link, [e.target.name]: e.target.value})

		console.log(link)
	}

	return (
		<>
			<div className='container my-3 '>
				<div className='accordion ' id='accordionExample'>
					<div className='accordion-item text-center'>
						<h2 className='accordion-header' id='headingOne'>
							<button
								className='accordion-button collapsed'
								type='button'
								data-bs-toggle='collapse'
								data-bs-target='#collapseOne'
								aria-expanded='false'
								aria-controls='collapseOne'
							>
								Add New Link
							</button>
						</h2>
						<div
							id='collapseOne'
							className='accordion-collapse collapse'
							aria-labelledby='headingOne'
							data-bs-parent='#accordionExample'
						>
							<div className='accordion-body'>
								<form onSubmit={handleSubmit}>
									<div className='container text-start'>
										<div className='mb-3'>
											<label htmlFor='title' className='form-label'>
												Title
											</label>
											<input
												type='text'
												className='form-control'
												id='title'
												name='title'
												required
												minLength={3}
												onChange={handleOnChange}
											/>
										</div>

										<div className='mb-3'>
											<label htmlFor='url' className='form-label'>
												Url
											</label>
											<input
												type='text'
												className='form-control'
												id='url'
												name='url'
												required
												minLength={5}
												onChange={handleOnChange}
											/>
										</div>
										<div className='mb-3'>
											<label htmlFor='description' className='form-label'>
												Description
											</label>
											<textarea
												type='text'
												className='form-control'
												id='description'
												name='description'
												onChange={handleOnChange}
											/>
										</div>

										<button type='submit' className='btn btn-primary'>
											Add
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddLinks
