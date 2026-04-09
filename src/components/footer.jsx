import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                
                {/* BAGIAN ATAS FOOTER (4 KOLOM) */}
                <div className={styles.footerGrid}>
                    
                    {/* Kolom 1: Logo & Deskripsi */}
                    <div className={styles.footerCol}>
                        <div className={styles.logoHeader}>
                            <div className={styles.logoIcon}>{'</>'}</div>
                            <h3>BarWb</h3>
                        </div>
                        <p className={styles.desc}>
                            Jasa design website profesional dengan teknologi terkini untuk mengembangkan bisnis Anda.
                        </p>
                    </div>

                    {/* Kolom 2: Jam Operasional */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.colTitle}>
                            <i className="fa-regular fa-clock"></i> Jam Operasional
                        </h4>
                        <ul className={styles.scheduleList}>
                            <li><span>Senin - Jumat</span> <span>09:00 - 18:00</span></li>
                            <li><span>Sabtu</span> <span>09:00 - 14:00</span></li>
                            <li><span>Minggu</span> <span className={styles.closedText}>Tutup</span></li>
                        </ul>
                    </div>

                    {/* Kolom 3: Kontak */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.colTitle}>
                            <i className="fa-regular fa-envelope"></i> Kontak
                        </h4>
                        <div className={styles.contactList}>
                            <p>Email: contact@barwb.com</p>
                            <p>Phone: +62 812-3456-7890</p>
                            <p>Jl. Teknologi No. 123<br />Jakarta Selatan, DKI Jakarta</p>
                        </div>
                    </div>

                    {/* Kolom 4: Media Sosial */}
                    <div className={styles.footerCol}>
                        <h4 className={styles.colTitle}>Media Sosial</h4>
                        <div className={styles.socialIcons}>
                            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                        <p className={styles.desc}>
                            Follow kami untuk update terbaru dan tips seputar web design!
                        </p>
                    </div>

                </div>

                {/* BAGIAN BAWAH FOOTER (COPYRIGHT) */}
                <div className={styles.footerBottom}>
                    <p>
                        &copy; 2026 BarWb. All rights reserved. Made with <span className={styles.heart}>❤️</span> in Indonesia
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;