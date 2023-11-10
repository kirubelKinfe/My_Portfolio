import Image from "next/image"

const About = () => {
    return (
        <section className="grid w-full px-5 sm:px-10 lg:px-20 grid-cols-1 sm:grid-cols-2 py-16 sm:pt-28 justify-center items-center gap-5" id="about">
            <div className="col-span-1 w-full flex items-center justify-center">
                <Image
                    src={"/assets/frontend.jpg"}
                    className="w-[300px] h-[300px] lg:w-[420px] lg:h-[340px] rounded-lg shadow-lg object-cover"
                    width={300}
                    height={300}
                    alt="about me"
                />
            </div>

            <div className="col-span-1">
                <h1 className="text-lg font-bold font-poppins text-blue-500">ABOUT ME</h1>
                <h2 className="text-xl lg:text-2xl text-gray-800 font-bold my-4 font-poppins">A Dedicated Full-Stack Web Developer based in Ethiopia, Addis Ababa 🇪🇹 </h2>
                <p className="text-sm lg:text-base font-base mb-5 text-gray-600 font-poppins">As a Junior Full-Stack Web Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, NextJs, Tailwind, SCSS, NodeJs and ExpressJs. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
            </div>
        </section>
    )
}

export default About