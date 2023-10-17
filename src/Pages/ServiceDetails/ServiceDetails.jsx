/* eslint-disable */

import { useLoaderData } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import ServiceAboutCard from "./ServiceAboutCard";
import Recomanded from "../Recomanded/Recomanded";

const ServiceDetails = () => {
    const service = useLoaderData();
    const { name, intro, rating, reviewCount, taskComplexity, price, deliveryTime, testimonial } = service;
    return (
        <>
        <div className="flex flex-col lg:flex-row gap-5">
            <div>
            <div className="card w-96 bg-base-100 ">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{name}</h2>
                    <p>{intro}</p>
                    <p className="text-semibold text-blue-600 flex flex-row items-center gap-1"><span><AiFillStar></AiFillStar></span> {rating} <span className="text-black">({reviewCount})</span></p>
                    <div className="shadow-lg p-5 rounded-2xl">
                        <div className="flex flex-row items-center justify-between">
                            <p>{taskComplexity}</p>
                            <div>
                                <p className="text-xl font-bold">{price}</p>
                            </div>
                        </div>
                        <p className="flex flex-row items-center gap-1"><MdDateRange /> {deliveryTime}</p>
                        <div className="card-action flex flex-row gap-2 mt-3">
                            <button className="btn btn-sm btn-primary">Request Proposal</button>
                            <button className="btn btn-sm btn-primary btn-outline">Chat with me</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* client say */}
            <div className="my-5">
                <div className="card w-96 bg-base-100 shadow-lg">
                    <div className="card-body">
                        <h2 className="card-title font-bold">What people say? </h2>
                        <p>{testimonial.text}</p>
                        <p className="mt-1 font-bold">{testimonial.author}</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ServiceAboutCard service={service}></ServiceAboutCard>
        </div>
        </div>
        <Recomanded></Recomanded>
        </>
    );
};

export default ServiceDetails;