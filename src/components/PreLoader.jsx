import LoadingAnimation from '/ballsline.gif'

export default function Loader(){
    return <div className='preLoader flex justify-center'>
        <img src={LoadingAnimation} className='w-fit my-auto' alt="Loading..." />
    </div>
}