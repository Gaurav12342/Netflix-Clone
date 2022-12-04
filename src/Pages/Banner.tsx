import { FC } from 'react'

const Banner: FC = () => {
    return (
        <div>
            <div className="text-center text-yellow-600 mb-10 relative">
                <img className='relative w-1/1' src={'https://image.tmdb.org/t/p/original/6ESvUtiCv3XqJRTU9d32I4R0Ckq.jpg'} alt="Freedom Blog" />
                <div className="absolute top-20 left-10 flex flex-col items-start space-y-8">
                    <label className='font-bold text-5xl text-white'>
                        {'Dhanna pani'}
                    </label>

                    <p className='font-bold text-xl text-white text-start'>
                        When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.
                    </p>

                    <p className='uppercase font-bold text-xl text-white text-start'>
                        RATING: 8.6/10
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner