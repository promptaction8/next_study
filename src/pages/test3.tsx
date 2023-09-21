import Image from 'next/image'

const UserCard = (props) => {
    // const myText = props.myText
    // const myColor = props.myColor
    const { myImage, myName, myEmail, contexts, icons } = props

    return (
        <>
            <div className="h-4/6 w-96 rounded-xl border-2 border-solid border-black bg-zinc-100">
                <div className="flex h-36 flex-row rounded-xl bg-zinc-300">
                    <div className="overflow-hidden rounded-xl">
                        <Image
                            alt="personal picture"
                            src={myImage}
                            width={145}
                            height={100}
                        />
                    </div>
                    <div className="pl-24 pt-2">
                        <Image
                            alt="Icons"
                            src={icons}
                            width={110}
                            height={100}
                        />
                    </div>
                </div>
                <div className="bg-zinc-100">
                    <div className="p-2">
                        {/* div2 내용 */}
                        <h2 className="pb-6 pt-4 font-mono text-2xl">
                            {myName}
                        </h2>
                        <h3 className="pb-4 font-serif text-xl">{myEmail}</h3>
                        <p className="border-y-2 font-sans text-lg">
                            {contexts}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

const Container = () => {
    return (
        <>
            <div className="flex h-screen w-9/12 flex-row flex-wrap justify-center gap-x-40 gap-y-4 p-4">
                <div className="">
                    <UserCard
                        myName={'Lee Jungwoo'}
                        myEmail={'jinwoo30754@naver.com'}
                        myImage={
                            'https://this-person-does-not-exist.com/img/avatar-gen11a8f2e7cc737137f8786fa06726fbb7.jpg'
                        }
                        contexts={
                            'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                        }
                        icons={'/images/person.svg'}
                    />
                </div>
                <div className="">
                    <UserCard
                        myName={'Yang Jinwoo'}
                        myEmail={'jinwoo30754@naver.com'}
                        myImage={
                            'https://this-person-does-not-exist.com/img/avatar-gen11a8f2e7cc737137f8786fa06726fbb7.jpg'
                        }
                        contexts={
                            'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                        }
                        icons={'/images/person.svg'}
                    />
                </div>
                <div className="">
                    <UserCard
                        myName={'Jang Won'}
                        myEmail={'bigpig@naver.com'}
                        myImage={
                            'https://this-person-does-not-exist.com/img/avatar-genfe49781e722539950e31b028a3045102.jpg'
                        }
                        contexts={
                            'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                        }
                        icons={'/images/person.svg'}
                    />
                </div>
                <div className="">
                    <UserCard
                        myName={'Kim Kihyeon'}
                        myEmail={'bigpig@naver.com'}
                        myImage={
                            'https://this-person-does-not-exist.com/img/avatar-genfe49781e722539950e31b028a3045102.jpg'
                        }
                        contexts={
                            'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                        }
                        icons={'/images/person.svg'}
                    />
                </div>
                <div className="">
                    <UserCard
                        myName={'Kim Kyumyung'}
                        myEmail={'bigpig@naver.com'}
                        myImage={
                            'https://this-person-does-not-exist.com/img/avatar-genfe49781e722539950e31b028a3045102.jpg'
                        }
                        contexts={
                            'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                        }
                        icons={'/images/person.svg'}
                    />
                </div>
                <div className="">
                    <UserCard
                        myName={'Kim Doyoung'}
                        myEmail={'bigpig@naver.com'}
                        myImage={
                            'https://this-person-does-not-exist.com/img/avatar-genfe49781e722539950e31b028a3045102.jpg'
                        }
                        contexts={
                            'lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'
                        }
                        icons={'/images/person.svg'}
                    />
                </div>
            </div>
        </>
    )
}

export default Container
