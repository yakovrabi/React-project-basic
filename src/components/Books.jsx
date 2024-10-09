import GWtWcov from '../images/GWtW.jpg'
import TScov from '../images/TS.jpg'
import TKaMcov from "../images/TKaM.jpg"
import PaPcov from '../images/PaP.jpg'


let book_names = ["Gone With the Wind","Tom Sawyer", "To Kill a Mockingbird","Pride and Prejudice"]
let author_names = ["Margaret Mitchell", "Mark Twain", "Harper Lee", "Jane Austen"]
let date = [ "June 30 1936" , "June 9 1876" ,"July 11 1960"  ,  "January 28 1813"]
let book_pics = [GWtWcov,TScov,TKaMcov,PaPcov]
function Books(){
    
    let book_array = [];
    for (let i=0;i<book_names.length;i++)
    
        book_array.push(
        <div className='book_list' key={book_names[i]}>
            <img src = {book_pics[i]} className = 'book_img'/>
            <h4>{book_names[i]}</h4>
            <h6>{author_names[i]}</h6>
            <div>{date[i]}</div>
        

        </div>);
       
         return(<div className = 'book_page'>{book_array}</div>      );
        }
 export default Books;
   