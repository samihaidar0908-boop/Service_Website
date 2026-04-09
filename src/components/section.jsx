import styles from './Section.module.css';

function Section() {
    return (
        <main>
            {/* --- SECTION 1: HOME --- */}
            <section className={styles.homePage} id="home">
                <div className={styles.container}>
                    <div className={styles.content}>
                    
                    <h3>Website responsif and interactive</h3>
                    <h1>Hai, My name Is <span>Sami Akbar</span></h1>
                    <p>i am a front-end developer and fresh graduated!</p>
                    <button>Let Started!</button>
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: ABOUT US --- */}
            <section className={styles.aboutPage} id="about">
                <div className={styles.container}>
                    <div className={styles.content}>
                    <div className={styles.headingSkills}>
                         <h3>About Me</h3>
                    </div>

                    <img src="src\assets\hero.png" alt="hero" />
                    <p>In 2024, i started coding with Python with take a the cource and training during 6 month. After that, i stop take a course cause too much cost and stop learn coding. in early 2025, i back to learn coding without cource or training. With study python programming language again</p>

                    </div>

                    <div className={styles.headingSkills}>
                        <h3>Skills</h3>
                    </div>
                    
                    <div className={styles.skills}>
                        <div className={styles.iconSkills}><i className = {`fa-brands fa-python ${styles.PyIcon}`}></i> Python</div>
                        <div className={styles.iconSkills}><i className = {`fa-brands fa-html5 ${styles.HtmlIcon}`}></i> HTML</div>
                        <div className={styles.iconSkills}><i className = {`fa-brands fa-php ${styles.PhpIcon}`}></i> Php (begenning)</div>
                        <div className={styles.iconSkills}><i className = {`fa-brands fa-css3 ${styles.CssIcon}`}></i> CSS</div>
                        <div className={styles.iconSkills}><i className = {`fa-brands fa-js ${styles.JsIcon}`}></i> JS</div>
                        <div className={styles.iconSkills}><i className = {`fa-brands fa-react ${styles.reactIcon}`}></i> React</div>
                    </div>  
                </div>
            </section>

            {/* --- SECTION 3: FEATURES --- */}
            <section className={styles.featuresPage} id="features">
                <div className={styles.container}>

                    <h1 className={styles.logo}>Features</h1> 
                    
                    <div className={styles.containerGrid}>
                    <div className={styles.content}>
                    <h1>1.Responsif and fast uploading file</h1>
                    <p>When user open website only needed 1 sec to load</p>
                    </div>

                    <div className={styles.content}>
                        <h1>2.interactive Website Case studies</h1>
                        <p>Instead of just a gallery, create a dedicated page for each major project</p>
                    </div>
                    
                    <div className={styles.content}>
                        <h1>3.Dynamic Tech Stack Icons</h1>
                        <p>use animate SVG icons for your tools (HTML, CSS , JS, etc)</p>
                    </div>

                    <div className={styles.content}>
                        <h1>4. Dark & Light Mode</h1>
                        <p>Give users the freedom to choose their preferred reading theme with a single click.</p>
                    </div>

                    <div className={styles.content}>
                        <h1>5. Smooth Page Transitions</h1>
                        <p>Seamless scrolling and fading animations when navigating between sections.</p>
                    </div>

                    <div className={styles.content}>
                        <h1>6. Functional Contact Form</h1>
                        <p>A working form that sends messages directly to your email without reloading the page.</p>
                    </div>

                    <div className={styles.content}>
                        <h1>7. Downloadable Resume</h1>
                        <p>A dedicated, easy-to-find button for recruiters to instantly download your latest CV in PDF format.</p>
                    </div>

                    <div className={styles.content}>
                        <h1>8. SEO Optimized</h1>
                        <p>Proper meta tags and semantic HTML to ensure your portfolio ranks high on Google search results.</p>
                    </div>

                    <div className={styles.content}>
                        <h1>9. Mobile First Design</h1>
                        <p>Flawless layout and touch-friendly interactions designed perfectly for all smartphone and tablet devices.</p>
                    </div>
                 </div>
                </div>
            </section>

            {/* --- SECTION 4: PROJECT  --- */}
            <section className={styles.projectPage} id="project">
                <div className={styles.container}>

                    <h2 className={styles.logo}>Project <span>front-end</span></h2>
                    <div className={styles.containerCard}>
                    <div className={styles.card}>
                        <img src="src\assets\project-1.png" alt="" />
                        <h1>Website Cafe</h1>
                        <p>Proyek pertama saya. Website responsif menggunakan murni HTML, CSS, dan JavaScript tanpa backend.</p>
                    </div>

                    <div className={styles.card}>
                        <img src="src\assets\project-2.png" alt="" />
                        <h1>Personal portopolio</h1>
                        <p>Proyek kedua saya. Web portofolio interaktif yang sedang Anda lihat sekarang, mengeksplorasi penggunaan backend PHP dasar.</p>
                    </div>

                    <div className={styles.card}>
                        <img src="src\assets\project-3.png" alt="" />
                        <h1>Portopolio dengan design 3D website</h1>
                        <p>Proyek ketiga. Web portofolio interaktif 3D design yang bisa mengarahkan arah kepala robot sesuai cursor.</p>
                    </div>

                    <div className={styles.card}>
                        <img src="src\assets\project-4.png" alt="" />
                        <h1>Website Music</h1>
                        <p>Proyek keempat saya. Web yang memungkinkan anda bisa memasuki list anda hari ini. Tapi ini tidak ada backend, hanya bermodalkan front-end</p>
                    </div>

                    <div className={styles.card}>
                        <img src="src\assets\project-5.png" alt="" />
                        <h1>My Projects</h1>
                        <p>Proyek terakhir saya. Web musik dengan pilihan musik yang banyak.</p>
                    </div>
                </div>
                </div>
            </section>


            <section className={styles.contactSection} id="contact">
            <div className={styles.container}>
                
                {/* --- HEADER --- */}
                <div className={styles.contactHeader}>
                    <h2>Hubungi Kami</h2>
                    <p>Mari diskusikan proyek website Anda bersama kami</p>
                </div>

                {/* --- BAGIAN GRID BELAH DUA --- */}
                <div className={styles.contactContent}>
                    
                    {/* KOLOM KIRI: INFO KONTAK */}
                    <div className={styles.infoLeft}>
                        
                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><i className="fa-regular fa-envelope"></i></div>
                            <div className={styles.infoText}>
                                <h4>Email</h4>
                                <p>contact@barwb.com</p>
                                <p>info@barwb.com</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><i className="fa-solid fa-phone"></i></div>
                            <div className={styles.infoText}>
                                <h4>Telepon</h4>
                                <p>+62 857-1110-7079</p>
                                <p>+62 851-4207-6234</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <div className={styles.iconBox}><i className="fa-solid fa-location-dot"></i></div>
                            <div className={styles.infoText}>
                                <h4>Alamat</h4>
                                <p>Jl. Tegal Parang Selatan I</p>
                                <p>Jakarta Selatan, DKI Jakarta 12345</p>
                            </div>
                        </div>

                    </div>

                    {/* KOLOM KANAN: FORMULIR */}
                    <div className={styles.formRight}>
                        <form>
                            <div className={styles.inputGroup}>
                                <label>Nama</label>
                                <input type="text" placeholder="Nama Anda" required />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Email</label>
                                <input type="email" placeholder="email@example.com" required />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Pesan</label>
                                <textarea rows="5" placeholder="Ceritakan tentang proyek Anda..." required></textarea>
                            </div>

                            <button type="submit" className={styles.submitBtn}>
                                Kirim Pesan <i className="fa-regular fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
        </main>
    )
}

export default Section;