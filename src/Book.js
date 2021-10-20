export const Book = (props) => {
	const { img, title, author } = props
	const clickHandler = () => {
		alert('Out of Stock!!')
	}
	const logClicks = (author) => {
		console.log(author)
	}
	return (
		<article
			className='book'
			onMouseOver={() => {
				console.log(
					`This is mouse over event and the title you are hovering over is ${title}`
				)
			}}
		>
			<img src={img} alt='' />
			<h2>{title}</h2>
			<h4>{author}</h4>
			<button type='button' onClick={clickHandler}>
				Buy Now
			</button>
			<button
				type='button'
				onClick={() => {
					logClicks(author)
				}}
			>
				Log Author
			</button>
		</article>
	)
}
