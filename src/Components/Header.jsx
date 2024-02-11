

const Header = (props) => {

    const {user} = props;
    return(
        <>
            <div className="bg-white h-[10vh] w-[90vw] drop-shadow-md rounded-b-lg mx-auto flex justify-end items-center pr-10">
                <p className="text-lg font-bold text-blue-700">Hello, <span className="text-yellow-300" >{user.userName}</span></p>
            </div>
        </>
    )
}

export default Header