

export default function Footer() {
    return (
        <div>
            <div className="footer1-main-div">
                <div>
                    <h1 className="footer1-h1">Mobil ilovamiz orqali buyurtma berish yanada osonroq</h1>

                    <div className="footer-button-div">
                        <button className="footer-button">
                            <img src="/src/assets/google.png" alt="google" className="footerbuttin-icon" />
                            Google play</button>
                        <button className="footer-button">
                            <img src="/src/assets/appstore.png" alt="google" className="footerbuttin-icon" />
                            App store</button>
                    </div>


                    <img src="/src/assets/iphone2.png" className="footer-img2" alt="" />

                </div>
            </div>

            <div className="footer2-main-div">
                <img className="footer2-main-logo" src="/src/assets/max_way.svg" alt="" />
                <ul className="footer2-ul">
                    <li className="footer2-head-li">Asosiy</li>
                    <li className="footer2-li">Kompaniya haqida</li>
                    <li className="footer2-li">Filiallar</li>
                    <li className="footer2-li">Bolalar uchun</li>
                </ul>

                <ul className="footer2-ul">
                    <li className="footer2-head-li">Qo'shimcha</li>
                    <li className="footer2-li">Menyu</li>
                    <li className="footer2-li">Bonusli karta</li>
                    <li className="footer2-li">Bu qanday ishlaydi?</li>
                </ul>

                <div>
                    <p className="footer2-head-li">Biz bilan aloqa</p>
                    <p className="footer2-phone">(+99871) 200-54-00</p>
                    <p className="footer2-location">100011, Toshkent sh. Shayxontohur tumani, Zarqaynar ko’chasi, 3B-uy</p>
                </div>

            </div>
            <hr />
            <div className="footer2-social">
                <p>© Maxway, 2020</p>
                <div>
                    <img className="footer2-img" src="/src/assets/youtube.svg" alt="" />
                    <img className="footer2-img" src="/src/assets/facebook.svg" alt="" />
                    <img className="footer2-img" src="/src/assets/insta.svg" alt="" />
                    <img className="footer2-img" src="/src/assets/tg.svg" alt="" />
                    <img className="footer2-img" src="/src/assets/tiktok.svg" alt="" />
                </div>
            </div>
        </div>
    )
}