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
                        <h3 className="text-2xl font"> Passionate Web Developer </h3>
                        <p className=" text-muted-foreground "> ingenier dimplomee de .. specialsee de cree reponsive, accesble, andperforment web application !! </p>
                        <p className=" text-muted-foreground "> passioner de creree de solution avec envoir d'apprendre de nv technologie and technique to stay at the forefront of ever-evolving  </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Get In Touch </a>
                            <a href="" className="cosmic-button">  Download CV </a>  {/*ajout fichier CV */}
                        </div>
                    </div> 

                    

                <div className="grid grid-cols-1 gap-6">
                    {/* code section */}
                    <div className="gradiant-border p-6 card-hover"> 
                        <div className="flex items-start gap-4  ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development </h4>
                                <p className="text-muted-foreground"> listing something  </p>
                            </div>
                        </div>
                    </div>
                    {/* User interaction  */}
                    <div className="gradiant-border p-6 card-hover">
                        <div className="flex items-start gap-4  ">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development </h4>
                                <p className="text-muted-foreground"> listing something  </p>
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
                                <h4 className="font-semibold text-lg">Web Development </h4>
                                <p className="text-muted-foreground"> listing something  </p>
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