import ReactDom from 'react-dom'
import './index.css'
import { books } from './books.js'
import { Book } from './Book.js'

function BookList() {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book key={book.id} {...book} />
			})}
		</section>
	)
}

ReactDom.render(<BookList />, document.getElementById('root'))
