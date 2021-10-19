import ReactDom from 'react-dom'
import './index.css'

const firstBook = {
	img: 'https://images-eu.ssl-images-amazon.com/images/I/41cWqh0OeQL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg',
	title: 'The Psychology of Money',
	author: 'Morgan Housel',
}

const secondBook = {
	img: 'https://images-na.ssl-images-amazon.com/images/I/41aO+dGmtQL._SX329_BO1,204,203,200_.jpg',
	title: 'Peril',
	author: 'Bob Woodward, Robert Costa',
}

function BookList() {
	return (
		<section className='booklist'>
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
			/>

			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author}
			/>
		</section>
	)
}

const Book = ({ img, title, author }) => {
	return (
		<article className='book'>
			<img src={img} alt='' />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	)
}

ReactDom.render(<BookList />, document.getElementById('root'))
