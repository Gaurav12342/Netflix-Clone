import { FC } from 'react'

const Banner: FC = () => {
    return (
        <div>
            <div className="relative text-center text-yellow-600 mt-2">
                <img src={'https://image.tmdb.org/t/p/original/6ESvUtiCv3XqJRTU9d32I4R0Ckq.jpg'} alt="Freedom Blog" width={"500px"} />
                <div className="absolute top-4 right-5">Bottom Left</div>
            </div>
        </div>
    )
}

export default Banner