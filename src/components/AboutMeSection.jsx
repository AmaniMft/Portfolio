import { Code, User, Briefcase } from "lucide-react";

function AboutMeSection(){
    return(
        <section id="about" className=" py-24 px-4 relative">
            <div className=" container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me </span>
                </h2>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center  ">
                    <div className=" space-y-6"> 
                        <h3 className="text-2xl font"> Full Stack developer </h3>
                        <p className=" text-muted-foreground ">
                            Full Stack developer specialized in Python/Django and React.
                        </p>
                        <p className=" text-muted-foreground ">
                            I have experience working on internal applications used in production, contributing to both backend development (REST APIs, relational databases) and frontend integration.
                        </p>
                        <p className=" text-muted-foreground ">
                           I enjoy building well-structured applications, writing clear and maintainable code, and collaborating in organized development environments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch </a>
                            <a href="" className="cosmic-button">  Download CV </a>  {/*ajout fichier CV */}
                        </div>
                    </div> 

                    

                <div className="grid grid-cols-1 gap-6">
                    {/* stack section */}
                    <div className="gradiant-border p-6 card-hover"> 
                        <div className="flex items-start gap-4  ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Stack</h4>
                                <p className="text-muted-foreground"> Python · Django · React  </p>
                            </div>
                        </div>
                    </div>
                    {/* Soft Skills  */}
                    <div className="gradiant-border p-6 card-hover">
                        <div className="flex items-start gap-4  ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Soft Skills</h4>
                                <p className="text-muted-foreground">
                                    Autonomous · Curious 
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* experience */}
                    <div className="gradiant-border p-6 card-hover"> 
                        <div className="flex items-start gap-4  ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Experience</h4>
                                <p className="text-muted-foreground"> Internal tools · Production environments · APIs & databases </p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMeSection;