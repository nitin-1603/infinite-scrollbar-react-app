import React, { useEffect, useState } from 'react'
import Cards from './Cards'


const Apicall = () => {
    const [state, setState] = useState([]);
    const [page, setPage] = useState(1)

        
    useEffect(() => {
        const getData = async () => {
            let url1 = `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`;
            // let url = `https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=89d1c7b7093a431d968da3b6652e9221&page=1&pageSize=20`;
            let data = await fetch(url1);
            let parseData = await data.json();
            // let articles = parseData.articles
            setState((prev)=>[...prev,...parseData]);
        }
        getData();
    }, [page]);

    const handleifiniteScroll = async () => {
        
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                setPage((pageUpdate) => pageUpdate + 1)
            }
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        window.addEventListener("scroll", handleifiniteScroll);
        return () => window.removeEventListener("scroll", handleifiniteScroll);
    });

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {state.map((item) => {
                        return <div key={item.id} className="col-md-auto my-3">
                            <Cards title={item.title} id={item.id} body={item.body} />
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}

export default Apicall;
