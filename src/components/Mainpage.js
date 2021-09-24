import React from 'react'
import Intro from './intro'
import Skills from './skills'
import Experience from './experience'
import Contactme from './Contactme'

export default function Mainpage() {
    return (
        <div id="mainpage">
            <Intro />
            <Skills />
            <Experience />
            <Contactme />
        </div>
    )
}
