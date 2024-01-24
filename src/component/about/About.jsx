// About.js


const About = () => {
    return (
        <div className="container mx-auto my-8 p-4">
            <h1 className="text-3xl font-bold mb-4">About Our Company</h1>

            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img
                        src="/images/company-logo.png" // replace with your company logo
                        alt="Company Logo"
                        className="w-full h-auto mb-4"
                    />
                </div>

                <div className="md:w-1/2 md:pl-4">
                    <p className="text-lg leading-relaxed mb-4">
                        Welcome to our online store! Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Curabitur quis leo vel sem feugiat
                        sagittis. Duis at ligula vitae justo interdum lacinia. Nulla
                        facilisi. Integer auctor, augue vitae cursus mollis, elit eros
                        scelerisque purus, a facilisis orci sem sit amet lectus.
                    </p>

                    <p className="text-lg leading-relaxed mb-4">
                        Our mission is to provide high-quality products and excellent
                        service to our customers. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Vestibulum vel lorem at justo varius gravida non
                        in turpis. Nulla facilisi.
                    </p>

                    <p className="text-lg leading-relaxed">
                        Thank you for choosing us for your online shopping needs!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
