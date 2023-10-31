import data from "../data.json";
import { useState } from "react";

const Destination = () => {
    const { destinations } = data;
    const [curDestinationIndex, setCurDestinationIndex] = useState(0);

    return (
        <>
            <div className="bg destination-bg"></div>
            <section className="content">
                <div className="content__leftside">
                <h4 className="page-heading">
                    <span>01</span>
                    Pick your destination
                </h4>
                    <div className="planet-image">
                        <img
                            src={destinations[curDestinationIndex].images.png}
                        />
                    </div>
                </div>
                <div className="content__rightside">
                    <ul className="planet-list">
                        {destinations.map((destination, index) => {
                            return (
                                <li
                                    key={index}
                                    className={`planet-name ${
                                        curDestinationIndex === index
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        setCurDestinationIndex(index)
                                    }
                                >
                                    {destination.name}
                                </li>
                            );
                        })}
                    </ul>
                    <div className="planet-detail">
                        <h1>{destinations[curDestinationIndex].name}</h1>
                        <p>{destinations[curDestinationIndex].description}</p>
                        <div>
                            <div className="planet-distance">
                                <span>Avg. Distance</span>
                                <h3>
                                    {destinations[curDestinationIndex].distance}
                                </h3>
                            </div>
                            <div className="planet-travel">
                                <span>Est. Travel Time</span>
                                <h3>
                                    {destinations[curDestinationIndex].travel}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Destination;
