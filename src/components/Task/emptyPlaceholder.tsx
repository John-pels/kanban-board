import NoData from '../../assets/no_data.svg'


const EmptyPlaceholder = () => {

    return (

        <section className="placeholder list-container">
            <img src={NoData} alt="placeholder" />
            <h2 className='placeholder__text'>Nothing is here buddy! 😞</h2>
        </section>
    )
}


export { EmptyPlaceholder }
