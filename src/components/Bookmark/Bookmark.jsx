
const Bookmark = ({ bookmark }) => {

    const { title } = bookmark

    return (

        <div className="bg-slate-400 mb-2 rounded-xl p-4 m-4">
            <h2 className="text-xl">{title}</h2>
        </div >
    );
};

export default Bookmark;