import '../styles/steps.css'


const Steps = ({ number, step, info }) => {
    return (
        <div className="sidebar-steps">
            <span className='sidebar-steps-number'>{number}</span>
            <div className='sidebar-steps-content'>
                <p>{step}</p>
                <span>{info}</span>
            </div>
        </div>
    )
}

export default Steps