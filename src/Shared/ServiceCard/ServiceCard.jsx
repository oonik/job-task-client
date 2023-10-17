/* eslint-disable */
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const ServiceCard = ({partner}) => {
    const {name, image, intro, rating, price, reviewCount, _id} = partner;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <div className="flex flex-row justify-between">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">{price}</h2>
                </div>
                <p>{intro}</p>
                <p className="text-semibold text-blue-600 flex flex-row items-center gap-1"><span><AiFillStar></AiFillStar></span> {rating} <span className="text-black">({reviewCount})</span></p>
                <div className="card-actions">
                    <button className="btn btn-sm btn-primary w-full"><Link to={`/serviceDetails/${_id}`}>View services</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;