import { memo } from 'react';

const ChannelItem = memo(({ name, number, image }) => {
    return (
        <td className="left-0 sticky z-10 px-2 pb-2 bg-black max-h-[150px] h-[150px] min-h-[150px]">
            <span className="bg-[#1a1a1a] h-full flex items-center rounded-lg justify-evenly">
                <b className="text-xl md:text-xl lg:text-4xl">{number}</b>
                <img
                    src={image}
                    alt={name}
                    loading="lazy"
                    width={150}
                    height={150}
                    className="object-contain w-24 max-w-[11rem]"
                />
            </span>
        </td>
    )
});

export default ChannelItem;