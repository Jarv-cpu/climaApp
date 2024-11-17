export function SearchCity({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit} className='searchCity'>
            <input type="text" name='ciudad' placeholder='Maracaibo, Buenos Aires...' required />
            <input type="text" name='countryCode' placeholder='VE, US, TW, PR, PA...' required />
            <button type='Submit'>BUSCAR CLIMA</button>
        </form>
    )
}