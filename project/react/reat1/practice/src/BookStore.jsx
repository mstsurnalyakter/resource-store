/* eslint-disable react/prop-types */
import Books from "./Books"

export default function BookStore({books}){
    return(
        <div>
            <h3>Books:{books.length} </h3>
            {
                books.map((book,index)=><Books key={index} book={book}></Books>)
            }
            <br />
        </div>
    )
}