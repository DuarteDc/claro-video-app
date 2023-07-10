
export const ListOfChannels = ({ channels }) => {
    return (
        <ul className="">
            {
                channels.map(({ id, name, number, image }) => (
                    <li className="cursor-pointer m-4 h-[160px]" key={id}>
                        <div className="bg-[#333] w-full flex items-center rounded-md">
                            <p className="text-4xl font-bold">{number}</p>
                            <img src={image} alt={name} loading="lazy" />
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}
