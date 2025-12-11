import { useState } from "react";
import {cn} from "@/lib/utils";


const skills =[
    //Front-end
    {name: "JS", category:"Frontend"},
    {name: "HTML/CSS", category:"Frontend"},

    //Back-end
    {name: "Java", category:"Backend"},
    {name: "Python", category:"Backend"},
   
    //Tools
    {name: "Git", category:"Tools"}, 
    {name: "Docker", category:"Tools"},

];

const categories =["all", "Frontend", "Backend", "Tools"]

function SkillsSection(){

    const [activeCategory, setActiveCategory] =useState("all") 

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className=" text-3xl md:text-4xl font-bold mb-12 text-center"> 
                    My <span className="text-primary"> Skills</span>
                </h2>

                
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map ((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory (category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground " : "bg-secondary/70 text-foreground hover:bd-secondary" 
                            )}> 
                            {category} 
                        </button> 
                    ))}
                </div>

                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skills,key) =>
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div > 
                            <h3>{skills.name}</h3>
                        </div>
                    </div>

                )}

                </div>
            </div>
        </section>
    );
}


export default SkillsSection;