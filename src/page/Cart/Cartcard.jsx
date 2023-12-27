import React, { useState } from 'react';

const CartCard = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity);
    const [price, setPrice] = useState(item.price);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
        setPrice(() => price + item.price)
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
            setPrice(() => price - item.price)
        }
    };
    return (
        <div>
            <div className='flex items-center  gap-10'>
                <div>
                    <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAtwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQQFBgcDAgj/xABBEAACAQMDAQUFBQYEBQUBAAABAgMABBEFEiExBhNBUWEHInGBkRQyobHBI0JScpLRM0Ni8BVTg8LxJTVkgrIk/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIhEAAgICAgICAwAAAAAAAAAAAAECEQMhEjEEQSJREzJh/9oADAMBAAIRAxEAPwDau8654plfy7rScJknu24ViGJxxin5Q+FMb04hfIbIXAIH5edZyKj2UrToY47x8OrRoyZwQCWz5/Pp6VY7uIzW8kanDMvHPj4VEW0MiahJIu7YGwcDGDgZx8sVOxruUMSckc9QPpXNjWjpzvY1vreO4s03gkK6nJT/AFAePhTi3t+6RTGRkqN2fHjrXd0Bj55Gec+VRWqdo9G0BBFf3yCRB/hqd8nzUdK0Ufkc7ZYIBjnpTTUbSL9vOqgSSRhXPmFzj8zWd6p7YIICV0jSmlIHEtzJtX+kZJ+ZFVy09quqQzSvexLdxyZ9zfs2Z8BwePT8a0nG40ODSlZab2wivbeSCdco2RkdRVGn7DXJuylhchlLAftFORTp/aLZyM//AKdcpk54kU/2ptJ7QZY//b7BEc/5kz7iD54H965cWPJF9HVkyYprZp/YL2eJ2duk1C7uxc3SqdiKuFjJHJyepwSPDqa0CqB2J9pOmazBb2mpyraX+3BMhAjkIHUN0GRzg1fgwIBByD0x413JUcTdi0UUZpiCiobUe1ehabN3N7qdvHL4puyR8QOldLftJolyqGHVbNt/3QZlBPyJosKJSik3bsbQSD40nvHpigBaCQOppNnmSRRtHlQAhbyGaMseigUoGKWgDztJ6tj4cUV6ooAQmmd6N4O5sDGMZ6/74p2Yz4N9aaTPglTzUSWil2REUP8A/VKzEs24e8Tz0z/v4U+UZxnx4ryFDTStjIJ8R4gV2QdKxgjTJIy72ndq7pTLpmlXJijhYLctGSHYnPGfAcVlMhCthjlienmas/b8hNd1J1ye9MRH1cH8Y/xpn2blGmO8/wBniuJnG3Mq7goPPAreXxRjFW9ldd1B2iuRyfD6VselalazxkPZ2+c/dCDrxzz0HWrGII0QMiImR0CY/CsPz/w2/DXs+eCjfwMflXn7p54FbTq+uW1vNJZqhmcqQ4B4TPnUP2dn06GIQXkccryvjeVDAeAGD8Pxp/l/hSwWrszaKcjBG048asvZ3t1rmgKsNleN9mX7sDjci+gB6D0rQrvspol6D3+nwBiMFohsI+YrJe0dnDpuu31na7u5gl2IWOTwBWkcnIxlBxNv7G+1K01maOy1WAWl25Cq6nMbsfD/AE0vtY7WzaPax6Xpz7Lu5UmSResadOPIn9KwCCUxsSpwavF8s+rxxX2pXDSSGFVaQjkALwaeSXFBjjbKfNcMHYjOc+Ncu/ckbiTTm/iVZ5NvGWPu+XwpuqYNQi2jRvZv2/utKuYdO1GRpdPdwnvcmLOACD5Z6it5ByAevrXyZbR5YDpk9a+mux98+odmbC5m/wARosN67SV/Sri/RMlomaSlpKsgKKKKACiiigD1UdN/iN8akfCo6X77fGokNHNRjOOp/vXsA4OOvhjzryKGYRjeTgDmpitlS6MG7V7bi+uymCCwuIF8X3EgL8pGIPkAabaRY9/HcuqkxxS7FI9BgH6Cnnai3Fp2t+yy5EUd4JIz0zE7gn6HP0NWePTho2hi8tjJBbXExADkFnyDtb4EA/WrydGcHumVizjmV0WxikaUgjKtjBPgR8vxq1HU59OtJPtSrIVjJV0fIDeAI8PCorTZYZZJj9p7sZCbtvO5s9PicZ+Fe1trm2nkhkdbghQDkD3hzgEfOuDLakep4+OMo97IfWdNe3t7G+WVjLeBmmy2Rngj8DXTStOWEx3l1MrMDujizjHPU/8AipddMtZNMj+0TSQrBuKhugXP9qiNatojGv2S5XvGTc57znHgAKtztKiceOm290Xmy1GC5QtuRGHUFhWM9pJBcdodTkU5BuXwR4jPFWjSZp7OOQOTu4/Zv4cedU+4PeTyvz7zE/HNa4bt2c/kOPoY/dBNXVbmZLC0wAFeFgPJgoHP5/SqbIuCKs/ZsXOsW/8Aw6FTLPbwt3KDrt6n9a0yq1ZlidMiLuQOmVyCSTiucMbs22Ndx44qf0/szql3DtksJohESpeVdoJJzVg0rsbPBexSPLGAOoHPHjWLyxWkbwxSdNnrs92QF5pVuCm6e5my07H/AAkUjgD1wfr6Vtej2CaXplvZR5KwrjJ8TnJP41Xeytotqlra5LCLgMR1xk81bve8xV+PbVsnyaUqQtBpCD/EaNo8STXQcwZHmKTevnS7R5CjHoKAPO4E8KaK90lACjoKYSck/Gn69BTF+p+NS+ho5VFdqbqS00S5kiUmTACgDPiPKpakX7yj1qYuhtWjAu2d8dR1LvhjftBwfA45qe13XJu0Uel2ltAVHcCQRIvO45XP4cfGrl210zTry/VJrSE7ioZ9gyB481GaDpa2PafXNbuI0isLOBUtcjCfcXaB6ALj50lPnY+HBxsiLzRntILawjmSKZD3lwSpJ344GR/CM/M1wkSMagHJl3IoWRgPvEVW7u6mlv5ppWPfSSFnYHqxPNdYbmcq2Z5f6zWM8bls6MeaMV0SXaG4ubq8EdnDMYVHQIcE1Emw1SSJALf3MkjcVBH1ORToSOIixdv6jRp0clxdANM6QqcuQ3X0+NErihw+cr2R8ouVbMrMkkaYdTUEV5PqfOtH1xrYdn7uSNVZ0i2BzywJ4HPzrP4YHuJ4YYxmSRlVPiTgVridqzDNDjKhdU0LUbC0sry5tXW2vYxJbyDkOPL4+OKu3sf7N6gNeOsT2ssNnDA6pJIuO8duBjx6ZrZrfTrOPSrTTHhWSK2iSJAw6bVAyPKnOEhiSJFVEQYVVGABVyV6Ii62VLU7e4ZtscMm0eGw1zihaOAvLEwI/iUirJJuzkiuY4/dFcr8aN3Z1LyXVUJoNnIpE8ilQPug+NTtRkd7IpwwUj0p7DcJLwOG/hrqglFUjmyScnbO1JS0VZAlFFFABRRRQAD7vypi1Ph935UwbpUy6GjxSb1iSSZ+kY3UtNNVJGkXhH8A/OspOk2aRVySKJqeuLJqSNOw2iQFs9AueakPaLcxWPZm30q0bMk0ybkXklOSPxArOu00zCRIh1nmWP6kZ/OrR7RYLiz1O2uCQIp4FVWJHuso5/SpwJ8G/sryJLml9FRjhM0pQQz7k5dQnl4ele/slwZhFHayKW5AkIXxx401n1a5aNreGZ9rH3yCFB+gFR0t7MXwJGz0yTk1rxaMbJuaC5eUQboI8xblBfdnrjpST6hJp9vHFLb253Ln9lIc9SMn6fjVZmk2ttHQda5rKx4JOPKk4J9jU2uixXt8kulukcn+IykoTnBH/irb7H+zqXt7NrN3Huhs12wKehk8T8hj5n0rM9xCs3GcH619M9ntOi0Ts9Z2VqmyONAHJ6ux5Zj6kmnGKihyk5O2SkPErZPhTK7uUygMie8D+8PDrTgNxJ4ZQGs47Y6ZfPrJkW2kMNukskRVCRvkDg//AJH1FMDR0xJGOQaaHgnyBrNobu7sp5We5ntYWMe5g5XgMRyT/KOnga0fczxRyt/mIrZ88gH9akD0G95R/EDSq7KoZTgg9abl+YMeRFe2cBtoOfGgomrWXvY8+I4NdqitOmCPtJ4b86lOtaJ2ZtULSUUUxBRSYooAB92mLdKek+4TTBjxUN6GhKaasf8A0m6x+9gCnXhUb2ju7Sx0K4nv5e6t1YBjkjkjAGRz1xUOPLRalxdmJ9pybzXbG0swJDDdLHuU53ybhu+Q+7/9a0P2k2j3bWgYDuLSJ2YeLOccfhVL0280ixvDqFoswjtiSJmhG2MkHkEnrk9MVJ612l0i101Xkk1C6uJUzGJjtL5HVh5DPw8ia6YwUFRzTk5uzPblwkhQEEjqR0rgX7pSW++3QeQ865NOfu20JGOrudzH9B8hTdj73vElqhmi6OpfNIHCmuRJ8wBSAnqqknzNIZ2d2aNwg5wetfVRkD6XbN1DRox/pr5TG4ggthTwcVvXZHta2pdmIzeRjvLUrCzRdHwow2D04pSaStlRTbpF4h5SPxyPH40x7TXqabY3F9KMrDFv2njcR0FPNOlWa0iuBkIV4yAPE1S/a7fhOz9vBE3M0+SP4lUZI+u2p9D6Yz7Ndto9a1UadPp4TepYMXDDjwxir3NiSNSPLwrJrCxGme0SK1PubUCAevdD9Qa023m93ZnJFIZwuZjHbO4GWjG4AenWvHf4unDf74rrMNkwIHut+VMZgy3TbsA8H4jzpFIl7dt2AOpNT8edi7vvbRmq7ojJcTBUYOV5bHhVjHjVw2jOemBooNFWSFFBooAqx7cdnFj2vqsG70JP5Uum9pdJ1a4Nvp90ZpApYgRsBgepGKepaW0Y/Z28S/yoBXQKq9AAPSsrLo9Zqhe0TTZdTmR9T1CK00S0Icx7sNLIR1J8MDgdT146Vdby6FpbtN3M0239yFck/iBWVdrJbbUb17jWr6RI1z3dszqiIP5V3Nn1rTGvZlkfoq+rdobVQLbQrYbF4SWVdwXHiingH1I9evNMI7Ax251TWXfY7YjDHc8zfP8AM/8AmWj1fs1p7b7exkuJB0O3Cj5sQT9KiNd1/wD4vcpM9qsaxoEiizlVX4f78K0dEKyJuZGkZmJ7qInhVPJ/v8a4jJ4QbV8/E11eUu+QqA/y5/PNCwXE5wiSv5hFrM0PG1R6/GjjwrsdOu1GTby/Mc1xeKSL78br8RTA6xqDWidgLG5l0TUr1XP2WOZIyg88Hn8QKzmEknAxn41rfsTjknTW7eVs2kkcYMeejHdz9PypTjyg0VCXGaZftKnI7P2qjrhhz/MajNd0S3123ihuJJYzC5ZHjxnkYI58On0FO7K1mtYI7KfmSJmBweCNxwfmMGpmCGMYwuW8c1nFOki5NOTMn1fsRqNrqVtLpr3N3A7KZJmI7yLDdevPHNaJOu5i0fuP9M1JT4VQcDmmhZMjcAaKBM4wTLLmGUbXXnFSOnwxyO0c8aOpTBDAEH41HXUAlyV9xhyjDwpzo97ucxTALKg59aaQNk1bW9vapst4Y4lznEahR+Fdtwpp9rh/5go+1RHpKv1qk0Rsd5ozTYXEZ/zF+tL38f8AzF+tO0FDjNFNxMv8a/WkotBRxFvIw+6B8TXoWbnqyim5lccgA/Oi3uXk+0Bo+6ESgh85yTWaq6KelYx7S6fYTWBh1O9nigJyUjm7rf6Ejkj0rNdS0PswmTFEW/nYtn6137Uh5ryaWS9eQ5PvO+fljwqo3LIGP7dfrzXTFUc0nbJVLPR1OyCzXHTAUCo1tHt9putReKHvCSqMcttzxwKaR3oglysg97Kk9eDUtpiaSoW51J5LmVwNlvEM/KnSbJtpDnRtItr6U/YrEyKvBkcFVz8KnJ9Mksrb3zbxekeQf1qw6NbahcacCsUemQn7qqm6TH5fnVN7Ub7ecx/bZZD4h80mxohryQ5OGLYPU/3phMe8X3lV08cjkUs0jGPB5z5c1w78Qrl8FfWoLONzZ2xCAKYi/IkQDA+I9a0z2JW08F1q6OiNGUjxMviRk4I+BzWXXF4ZXJiPunkAjkHpitN9nnbCy0bSRaXVncNcPJueaLad3gOCfAUpNJbLSs0q8EcV2C2BvXIPwoM0aIrZ4PIqBbU11C977upGI4SM8bRT0iSYbpg2c8BR0GKm7KO9xdQlcOSAPIZpobq2z7qyMfRa9tbF+DkCm9wYLf3N6bj681LKQPexl1OxwB4la6piSeGeFgy7sE0ySaIMN0q/DNOFKbhIgYE+I43UkUS6NbySSRr99ACRjwPQ+vQ/SvfdR+VR5lZAJUeJJWGD3hPIzSre3oI4tHB/+Tj/ALaTaQmh8YY89PwpO4i8vwptp0l6bq4a7eHuGP7JVcMV46dB+tSY2npz8KrRPY1+zp4GinW0eX4UtMY2hGdwxk5qN7UXwsrJooeC2SW9akopBDA854HQVmvbDVu9ldFc8etEF7M5MqWsSF5meScNznAWoCedWOMk+p8ad39wmWyck1DySKxLMMKPzrVMijzLIwOeQOoI8au3st1Gzk1yOwlsg882dkoJOzAzj06ZrP5JC5LHj08q1b2G6DIJ7vX7mAhAghtHbock94QPkoz8aLHRouq30em6bcTTP3cECku5OTj+/hWMJ2gXXp5TLB3Ui+8BnOVNOfat2ufVL2XS4IZYLSzmcSbm5mkUkZOPDy+Oazq2u5oJu9ikKueCR5VDdspIutzDjJBx6VEXQBON2NvUHpXFNVl25lZmz4ZFKk0My7o5wQSNyONjfI9DQmFHawt97GQj3R0PmakUd4eVfGPTpXN7i1a3MYDRjGFDLx9Rwa5W9qoXdCNwPVl5rnySdnRjgq7NP7J6rDfWCxvMJprcBZscMjY8R5etWRrqKFc/bCoH8XIr54ub+40rWEubCVoblEA3r4jyI8R6VMxe0K/A/bWULescpT9DWkbqzKWnRqt9rk1w/c2W4r4uByTTeC1uZDum2r59cms/t/aSYx+0sJwf9Mwb8wKdp7ToSMGxus/zIf1opsaaNHghWPAA+dSEOSVzzjwrMrP2oWSnFzbXkYz4KrfrUtb+1bQx/kaix/0Qqf8AuoSY7RZu1eqRadbW88yuxdtgRAPDJz/vzqvxdpbRukc4z5oKjtc7Q2uvPbXGDbQpH7i3DKrc88jPFNre700cNeWw/wCqKwyRt2aReqLImvWR8ZF/6Zpzb61aOu6OZyvntIqjdpr+NLa3/wCG3iks53mGQHHTGcVO9kJGvdNZrg7mRsAkc9KmUGo8hqVuizx6zF+5dMD6MwopsttF12DNFZ/L7L0WntLI0Nk6xnAArE9YmkeWQs2aKK9FdHA+yt3DFsk0yuGPeY8MUlFUCOlvCssiK2RuYDI9TX01ptpDpXZ+2srJSkEEexATk4H60UVPsbMA9oaKO0uoMBgyFWb47R/aqcPvCiikUPP3MV5i60UUgHCMy/dJX4cV6Ejg5DHPnRRQkDYSTyNy7bz/AKufzrg0xxykf9ApaKYHJnBH+HH/AE0CYgYCR/00UUAKJ3/0j4KKUzSN1dvrRRSGeM0HnrRRR7EPbD3Le4ceaceH71aP7Opmk0yfdjiRenwNJRWWX9GaY/2LinJANFFFcrOhH//Z" alt="" />
                </div>
                <div>
                    <p className='text-xl font-bold'>{item.name}</p>
                </div>
                <div>
                    <p> Price: {price}Tk.</p>
                    <div className="flex items-center">
                        <button
                            className="text-xs bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                            onClick={decreaseQuantity}
                        >
                            -
                        </button>
                        <span className="text-gray-700 mx-2">{quantity}</span>
                        <button
                            className="text-xs bg-gray-300 rounded-full w-6 h-6 flex items-center justify-center"
                            onClick={increaseQuantity}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <button className="btn py-4 px-8 bg-slate-300 rounded-xl font-bold">Pay Now</button>
                    <button className="btn py-4 px-8 bg-red-400 hover:bg-red-500 rounded-xl font-bold">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
