import { BooksSIngleCard } from "./BooksSIngleCard"


export const BooksCard = ({ books }) => {
    return (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {books.map((item) => (
                <BooksSIngleCard
                    key={item._id}
                    book={item}
                />
            ))}
        </div>
    )
}
