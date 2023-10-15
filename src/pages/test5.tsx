const container = () => {
    return (
        <div className="flex h-screen w-screen  items-center justify-center bg-[url('/images/galaxy_waifu2x.png')] bg-cover bg-center bg-no-repeat">
            <div className="bg-gray flex h-4/6 w-2/3 shrink-0 flex-row items-center justify-center rounded-xl border-2 border-solid border-slate-400 bg-opacity-5 shadow-2xl backdrop-blur-lg">
                <div className="flex h-5/6 w-3/4 items-center justify-center p-4">
                    <div className="h-5/6 w-96 flex-col ">
                        <h3 className="my-10 mb-20 text-center font-sans text-7xl font-bold text-white">
                            LOGIN
                        </h3>
                        <form className="center">
                            <label>
                                <p className="my-4 text-white">USER NAME</p>
                                <input
                                    type="text"
                                    placeholder="USERNAME"
                                    className="h-10 w-72 rounded-2xl border-2 border-solid border-white bg-transparent pl-4 text-white"
                                ></input>
                            </label>
                            <label>
                                <p className="my-4 text-white">PASSWORD</p>
                                <input
                                    className="h-10 w-72 rounded-2xl border-2 border-solid border-white bg-transparent pl-4 text-white"
                                    type="password"
                                    placeholder="PASSWORD"
                                ></input>
                            </label>
                            <button class="my-10 w-72 rounded-xl bg-white px-4 py-2 duration-300 ease-in hover:-translate-y-1 hover:scale-100 hover:bg-slate-400">
                                <span class="text-lg text-black">SIGN UP</span>
                            </button>
                        </form>
                        <label>
                            <a
                                className="my-4 text-lg text-white transition-all duration-300 ease-in hover:text-red-400"
                                href="https://www.google.co.kr/?hl=ko"
                                target="_blank"
                            >
                                DON'T HAVE ACCOUNT?
                            </a>
                        </label>
                    </div>
                </div>
                <div className="flex h-full w-1/3 items-center justify-center overflow-hidden rounded-xl bg-[url('/images/pastel_bg.png')] bg-cover bg-center bg-no-repeat">
                    <div className="flex h-96 w-96 items-center justify-center">
                        <img
                            src="/images/login_icon.png"
                            width={200}
                            alt="LOGIN ICON"
                        ></img>
                    </div>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default container
