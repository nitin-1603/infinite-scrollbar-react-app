import React from 'react'

const Cards = (props) => {
    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src='...' className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h1>{props.id}</h1>
                        <h6 className="card-title">{props.title}</h6>
                        <h5 className="card-text">Body: {props.body.substr(0,18)}</h5>
                        <a href='/' className="btn btn-primary">Go for article Link</a>
                    </div>
            </div>
        </>
    )
}

export default Cards
