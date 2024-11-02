export default function SideBar(props) {
    const { handleToggleModal } = props

    return (
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>The Brutal Martian Landscape</h2>
                <div>
                    <p>Description</p>
                    <p>asdfaskdfjalks djfaskdjfla skdjf asdf jalsf jlkadf</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
    );
}
