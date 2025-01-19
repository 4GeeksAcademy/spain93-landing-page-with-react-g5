import React from "react";

export const Jumbotron = () => {


    return (

        <div className="container d-flex justify-content-left align-items-left py-5">
            <div className="bg-light rounded p-4 mx-3">
                <h1 className="display-5 fw-bold text-start">A Warm Welcome!</h1>
                <p className="fs-4 text-start">We are delighted to have you here! This space is designed to make you feel at home, offering a perfect blend of comfort, inspiration, and connection. Whether you're here to explore, learn, or simply unwind, we're dedicated to ensuring your experience is memorable and meaningful. Relax, take a moment to breathe, and let us guide you through a journey of discovery and warmth. We're so glad you chose to join us!</p>
                <div className="text-start">
                    <button className="btn btn-primary btn-lg" type="button">Example button</button>
                </div>
            </div>
        </div>

    )
}