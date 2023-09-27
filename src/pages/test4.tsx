const container = () => {
    return (
        <div className="flex h-screen w-full justify-center">
            {/* 왼쪽 페이지 */}
            <div className="flex flex-1 flex-col bg-[url('/images/background_image.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="flex flex-1"></div>
                <div className="flex flex-1">
                    <div className="flex flex-1"></div>
                    <div className="flex flex-1">
                        {/* <img src="/images/LOGO.PNG"></img> */}
                    </div>
                    <div className="flex flex-1"></div>
                </div>
                <div className="flex flex-1"></div>
            </div>
            {/* 오른쪽 페이지 */}
            <div className="flex flex-1 flex-col items-center justify-center bg-[url('/images/background2.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="h-5/6 w-10/12 font-serif">
                    <div className="flex flex-1 flex-col">
                        <h5 className="text-center text-7xl">REGISTER</h5>
                        <h3 className="my-7 text-center text-4xl text-teal-700">
                            IT'S COMPELETLY FREE
                        </h3>
                        <form>
                            <h3 className="my-3 text-xl">NAME</h3>
                            <input
                                className="h-14 w-full rounded-2xl border-2 border-solid border-indigo-500 bg-slate-100"
                                type="text"
                                placeholder="NAME을 입력하세요"
                            ></input>
                            <h3 className="my-3 text-xl">ID</h3>
                            <input
                                className="h-14 w-full rounded-2xl border-2 border-solid border-indigo-500 bg-slate-100"
                                type="text"
                                placeholder="ID를 입력하세요"
                            ></input>
                            <h3 className="my-3 text-xl">EMAIL</h3>
                            <input
                                className="h-14 w-full rounded-2xl border-2 border-solid border-indigo-500 bg-slate-100"
                                type="email"
                                placeholder="EMAIL을 입력하세요"
                            ></input>
                            <h3 className="my-3 text-xl">PASSWORD</h3>
                            <input
                                className="h-14 w-full rounded-2xl border-2 border-solid border-indigo-500 bg-slate-100"
                                type="password"
                                placeholder="PASSWORD를 입력하세요"
                            ></input>
                            <h3 className="my-3 text-xl">PASSWORD CONFIRM</h3>
                            <input
                                className="h-14 w-full rounded-2xl border-2 border-solid border-indigo-500 bg-slate-100"
                                type="password"
                                placeholder="PASSWORD를 다시 입력하세요"
                            ></input>
                            <div className="my-10 flex w-full items-center">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-8 w-8"
                                    ></input>
                                    <p className="relative ml-2 text-center">
                                        Rights to deny and limitations on
                                        denial: You obtain the right to deny
                                        disclosure of personal information.
                                        However, if you deny and disagree to
                                        disclose, you will be restricted to any
                                        financial procedure.
                                    </p>
                                </label>
                            </div>
                            <div className="my-20 w-full text-center">
                                <button className="h-14 w-full rounded-lg bg-blue-500 text-white hover:bg-blue-600">
                                    Create Account
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default container
