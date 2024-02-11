

const Header = (props) => {

    const {user} = props;
    return(
        <>
            <div className="bg-white h-[10vh] w-[90vw] drop-shadow-md rounded-b-lg mx-auto flex justify-end items-center pr-10">
                <p className="text-lg font-bold text-blue-700">Hello, <span className="text-[#7be95a]" >{user.userName}</span></p>
            </div>
        </>
    )
}

export default Header