

export default function Section1() {
    return (
        <div>
            <div className="section1-text-div">
                <h1 className="section-main-text">Siz izlagan mazzali ta'mlar</h1>
                <p className="section-small-text">When an unknown printer took a galley of type scrambled it to make a type specimen </p>
            </div>

            <div className="section1-carusel">
                <div className="section1-carusel-div">
                    <button className="section1-button">Yangi</button>

                    <div className="carusel-img">
                        <p className="section1-carusel-pitsa">PIT-SA</p>
                        <img src="/src/assets/pitsa.svg" alt="" />
                    </div>

                </div>
                <div className="section1-carusel-div2">
                    <button className="section1-button2">Ko'proq sotilgan</button>
                    <div className="carusel-img2">
                        <p className="section1-carusel-pitsa2">KOM-BO</p>
                        <img src="/src/assets/club-sandwich1.svg" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}