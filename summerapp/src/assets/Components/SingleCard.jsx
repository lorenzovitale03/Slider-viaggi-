
const SingleCard = ({ descrizione, titolo, img, prezzo, durata, handleNextLocation, handlePrevLocation}) => {

    return (
        <div className="summerBox">
            <img src={img} alt="" />
            <div className="holiday-info">
                <h1>{titolo}</h1>
                <p>{descrizione}</p>
                <div className="holiday-cost">
                    <p>{prezzo} $</p>
                    <p>{durata}</p>
                </div>
                <div className="btn-group">
                    <button type="button" onClick={() => handlePrevLocation()}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8" transform="matrix(-1 0 0 1 24 0)"></path></svg>
                    </button>
                    <button type="button" onClick={() => handleNextLocation()}>
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke="#000" strokeWidth="2" d="M6,12.4 L18,12.4 M12.6,7 L18,12.4 L12.6,17.8"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleCard