/* eslint-disable */
import { Link } from "react-router-dom";

const ServiceAboutCard = ({ service }) => {
    const { name, intro, image, about } = service;
    return (
        <div className="lg:mx-10 lg:my-10">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">About {name}</h2>
                    <div className="grid grid-cols-3 lg:gap-5 mt-5">
                        <div>
                            <p className="font-bold text-slate-400">FROM</p>
                            <p>{about.from}</p>
                        </div>
                        <div>
                            <p className="font-bold text-slate-400">PARTNER SINCE</p>
                            <p>{about.partnerSince}</p>
                        </div>
                        <div>
                            <p className="font-bold text-slate-400">AVERAGE RESPONSE TIME</p>
                            <p>{about.averageResponseTime}</p>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="font-bold text-slate-400">ABout</p>
                        <p>{about.description}</p>
                    </div>
                    <div className="flex flex-row justify-between mt-4">
                        <div>
                            <p className="font-bold text-slate-400">SERVICES I OFFER</p>
                            {
                                about?.services?.map((serv, i) => <li key={i}>{serv}</li>)
                            }
                        </div>
                        <div>
                            <p className="font-bold text-slate-400">WHY ME?</p>
                            {
                                about?.benefits?.map((benefit, i)=> <li key={i}>{benefit}</li>)
                            }
                        </div>
                    </div>
                    <button className="btn btn-primary mt-5"><Link to="/">Back to home</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceAboutCard;