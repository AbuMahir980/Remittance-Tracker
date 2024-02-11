

const Header = (props) => {

    const {user} = props;
    return(
        <>
            <div className="bg-blue-700 h-[10vh] flex justify-end items-center pr-10">
                <p className="text-lg font-bold text-white">Hello, <span className="text-[#7be95a]" >{user.userName}</span></p>
            </div>
        </>
    )
}

export default Header