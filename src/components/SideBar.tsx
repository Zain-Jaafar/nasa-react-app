export default function SideBar(props) {
    const { data, handleToggleModal } = props

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div>
                    <p className="sidebarDescription">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    );
}
