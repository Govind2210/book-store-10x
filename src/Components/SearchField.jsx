import React, { useEffect, useState } from "react";

function SearchField() {
  const [mydata, setData] = useState([]);
  const [search , setSerch] = useState("")

  useEffect(() => {
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=sj5hFfLhFJXibCk1dlXwv9CJtsw32Lnq"
    ).then((res) => {
      res.json().then((res) => {
        console.log(res.results.books);
        setData(res.results.books);
      });
    });
  }, []);

  return (
    <>
      <div>
        <section className="my-10">
          <div className="wrap">
            <div className="search">
              <input
                type="text" onChange={(e)=>setSerch(e.target.value)}
                className="searchTerm"
                placeholder="What are you looking for?"
              />
            </div>
          </div>
        </section>
        <section className="my-30 mynameisGogo">
          {
          mydata.filter((item)=>{
            if(search == ""){
                return item
            }
            else if(item.title.toLowerCase().includes(search.toLowerCase())){
                return item
            }
        })
          .map((book) => {
            const {
              book_image,
              rank,
              price,
              title,
              author,
             
              description,
            
            
            } = book;

            return (
              <div className="container-box ">
                <article key={rank} className='bg-gray-100 py-5'>
                  <div className="book-myself">
                    <img src={book_image} alt={title} />
                  </div>
                  <div className="book-data-myself">
                    <h3>Title :{title}</h3>
                    <p> Description :{description}</p>
                    <p> Author :{author}</p>
                    <p> Price :{price}</p>
                    
                  </div>
                </article>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

export default SearchField;
