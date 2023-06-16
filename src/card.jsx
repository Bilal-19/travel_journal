import React from "react"

export default function Card(props) {
    return (
        <div>
            <div className="card mb-3 card-width p-3 m-3 ">
                <div className="row g-0">
                    <div className="col-sm-12 col-md-4">
                        <img src={props.image_url} className="img-fluid rounded set-image-size" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <div className="col-12 d-flex flex-row">
                                <p className="fw-normal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill icon--color px-0" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg> {props.title}
                                </p>
                                <a className="fw-light px-3 text-light-emphasis" href={props.google_map_link} target="_blank">View on Google Maps</a>
                            </div>
                            <p className="fw-bold">{props.location}</p>
                            <p className="fw-bold">{props.start_date} - {props.end_date}</p>
                            <p className="card-text">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}