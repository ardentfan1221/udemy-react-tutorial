import ReactDom from 'react-dom'
import './index.css'

const books = [
	{
		id: 1,
		img: 'https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
		title: 'The Psychology of Money',
		author: 'Morgan Housel',
	},
	{
		id: 2,
		img: 'https://images-na.ssl-images-amazon.com/images/I/41aO+dGmtQL._SX329_BO1,204,203,200_.jpg',
		title: 'Peril',
		author: 'Bob Woodward, Robert Costa',
	},
	{
		id: 3,
		img: 'https://images-na.ssl-images-amazon.com/images/I/51CPNIRSWeL._AC_SX184_.jpg',
		title: 'Atomic Habits',
		author: 'James Clear',
	},
]

function BookList() {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book key={book.id} {...book} />
			})}
		</section>
	)
}

const Book = (props) => {
	const { img, title, author } = props
	return (
		<article className='book'>
			<img src={img} alt='' />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	)
}

ReactDom.render(<BookList />, document.getElementById('root'))
