import React from 'react'
import Intro from './intro'
import Skills from './skills'
import Experience from './experience'
import Projects from './projects'

export default function Mainpage() {
    return (
        <div id="mainpage">
            <Intro />
            <Skills />
            <Projects />
            <Experience />
        </div>
    )
}
