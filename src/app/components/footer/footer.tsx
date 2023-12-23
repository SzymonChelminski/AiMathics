import React from 'react'

import footer_component from '@/app/styles/footer_component.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className={footer_component.containerAll}>
      <section className={footer_component.section}>
        <div className={footer_component.footerText}>
          <span className={footer_component.logoLetters}>
            <span className={footer_component.blueDistinction}>Ai</span>
            Mathics<br/>
          </span>
          is a website, developed to make learning mathematics easier by solving & explaining tasks with a helping hand of <span className={footer_component.blueDistinction}>Ai teacher</span>.
        </div>
      </section>
      <Image
          src='/footer.jpg'
          height={175}
          width={275}
          priority={true}
          alt='number nine and people aroound it'
        />
      <section className={footer_component.creditsSection}>
       <div className={footer_component.creditsEl}>
        <h3>Credits</h3>
        <span>Storyset</span>
        <span>Freepik</span>
       </div>
       <div className={footer_component.creditsEl}>
        <h3>Terms</h3>
        <span>Privacy</span>
        <span>Usage</span>
       </div>
       <div className={footer_component.creditsEl}>
        <h3>Pricing</h3>
        <span>Options</span>
        <span>Offers</span>
       </div>
      </section>
      <section className={footer_component.contactSection}>
        <FontAwesomeIcon icon={faLinkedinIn} 
          className={footer_component.icon}
        />
        <FontAwesomeIcon icon={faEnvelope} 
          className={footer_component.icon}
        />
        <FontAwesomeIcon icon={faGithub} 
          className={footer_component.icon}
        />
      </section>
      <p className={footer_component.rightsMark}>©Copyright. All rights reserved.</p>
    </footer>
  )
}
