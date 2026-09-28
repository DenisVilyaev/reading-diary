import { initialBooks } from "./data/books";
import { getReadBooks } from "./utils/getReadBooks";
const allBooksTitles = initialBooks.map((book) => book.title)
console.log(allBooksTitles)
console.log(getReadBooks(initialBooks))
// getReadBooks(books).forEach((title) => console.log(title))