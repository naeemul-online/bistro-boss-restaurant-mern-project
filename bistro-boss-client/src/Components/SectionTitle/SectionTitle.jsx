

const SectionTitle = ({subHeading, Heading}) => {
    return (
        <div>
            <div className=" flex flex-col justify-center items-center my-12">
            <h3 className="italic text-orange-300 text-xl mb-4">---{subHeading}---</h3>
            <h2 className="text-4xl border-y-4 py-4 uppercase ">{Heading}</h2>
        </div>
        </div>
    );
};

export default SectionTitle;