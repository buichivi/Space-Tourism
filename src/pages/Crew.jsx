import { useState } from "react";
import data from "../data.json";

const Crew = () => {
    const { crew } = data;
    const [curCrewIndex, setCurCrewIndex] = useState(0);

    return (
        <>
            <div className="bg crew-bg"></div>
            <section className="content">
                <div className="content__leftside">
                    <h4 className="page-heading">
                        <span>02</span>
                        Meet your crew
                    </h4>
                    <div className="crew-detail">
                        <h4 className="crew-role">{crew[curCrewIndex].role}</h4>
                        <h1 className="crew-name">{crew[curCrewIndex].name}</h1>
                        <p className="crew-bio">{crew[curCrewIndex].bio}</p>
                        <ul className="crew-list">
                            {crew.map((crewItem, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={`crew-item-icon ${
                                            curCrewIndex === index
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => setCurCrewIndex(index)}
                                    ></li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="content__rightside">
                    <img className="crew-image" src={crew[curCrewIndex].images.png} />
                </div>
            </section>
        </>
    );
};

export default Crew;
