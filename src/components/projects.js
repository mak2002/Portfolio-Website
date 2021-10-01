import React from 'react'

export default function projects() {
    return (
        <div id="projects">
                <h1 className="projects-heading">Projects</h1><br /> 
                <p className="projects-heading2">All projects includes screenshots in github repository</p>


            <div className="content-wrapper">


                <div className="project-div project1">
                    

                    <h3>1. Students Results Management App</h3>
                    <br />
                    <a href="https://github.com/mak2002/students-results-management-app">Project Link</a><br /><br />
                    <p>This project is created to manage results of students.
                    </p>
                    <br />

                    <p>Features Include: </p>
                    <ul className="project-features">
                        <li>Adding Students Details to Database</li>
                        <li>Sorting the tables</li>
                        <li>Viewing the results</li>
                        <li>Viewing the Performance of Student Semester Wise with Graph</li>
                        <li>(To be Implimented) Adding Results via CSV file</li>
                    </ul>
                    <br />

                    <ul className="project-tech">
                        <li>Fronted: React, Material UI</li>
                        <li>Backend: Express</li>
                        <li>Database: My-SQL</li>
                    </ul>
                </div>

                <div className="project-div project2">
                    <h3>2. Note Taking App</h3>
                    <br />
                    <a href="https://github.com/mak2002/Note-Taking-App">Project Link</a><br /><br />
                    <p>A Simeple Note Taking App.
                    </p>
                    <br />

                    <p>Features Include: </p>
                    <ul>
                        <li>Adding and Deleted Notes</li>
                        <li>Adding Todos</li>
                        <li>(To be implemented) Editing Notes</li>
                    </ul><br />

                    <ul className="project-tech">
                        <li>Fronted: React, Material UI</li>
                        <li>Backend: JSON Server</li>
                    </ul>
                </div>

                <div className="project-div project3">
                    <h3>3. Color Storage App</h3>
                    <br />
                    <a href="https://github.com/mak2002/Color-Theme-Storage-App">Project Link</a><br /><br />
                    <p>Users can store colors by entering the color in input field and by clicking on box it gets copied to clipboard .
                    </p>
                    <br />

                    <p>Features Include: </p>
                    <ul>
                        <li>Adding Colors</li>
                        <li>Click to copy to clipboard</li>
                    </ul><br />

                    <ul className="project-tech">
                        <li>Fronted: React, Material UI</li>
                    </ul>
                </div>

                <div className="project-div project2">
                    <h3>4. Youtube Seach App</h3>
                    <br />
                    <a href="https://github.com/mak2002/Note-Taking-App">Project Link</a><br /><br />
                    <p>This project is created to manage results of students.
                    </p>

                    <p>Features Include: </p>
                    <ul>
                        <li>Search top 10 youtube videos related to your term </li>
                    </ul>

                    <ul className="project-tech">
                        <li>Fronted: React</li>
                        <li>Used Youtube API</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
