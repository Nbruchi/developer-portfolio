import { clientReviews } from "../constants";

const Clients = () => {
    return (
        <section id="testimonial" className="c-space my-20">
            <h3 className="head-text">Hear from my Clients</h3>
            <div className="client-container">
                {clientReviews.map(({ id, img, name, position, review }) => (
                    <div className="client-review" key={id}>
                        <div>
                            <p className="text-white">{review}</p>
                            <div className="client-content">
                                <div className="flex gap-3">
                                    <img
                                        src={img}
                                        alt={name}
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div className="flex flex-col">
                                        <p className="text-white-800 font-semibold">
                                            {name}
                                        </p>
                                        <p className="text-white-500 md:text-base text-sm">
                                            {position}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex self-end items-center gap-2">
                                    {Array.from({ length: 5 }).map(
                                        (_, index) => (
                                            <img
                                                src="/assets/star.png"
                                                key={index}
                                                alt="star"
                                                className="w-5 h-5"
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Clients;
