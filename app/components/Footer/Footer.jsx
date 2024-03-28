//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <footer className='flex flex-col text-[white] justify-between w-full px-6 py-5 bg-[#1D1E18] gap-6'>
      <section>
        <h3 className='text-[1.5em] font-semibold'>
          <span className='text-[#2B60EA]'>Ai</span>Mathics<br />
        </h3>
        is a website, developed to make learning mathematics easier by solving & explaining tasks with a helping hand of <i>Ai teacher</i>.
      </section>
      <hr className='border-[#2B60EA]' />
      <section className='grid'>
        <table>
          <tbody className='text-center'>
            <tr className="text-[1.25em]">
              <th>Credits</th>
              <th>Terms</th>
              <th>Pricing</th>
            </tr>
            <tr>
              <td>Storyset</td>
              <td>Privacy</td>
              <td>Options</td>
            </tr>
            <tr>
              <td>Freepik</td>
              <td>Usage</td>
              <td>Offers</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="flex my-4 justify-evenly">
        <FontAwesomeIcon icon={faLinkedinIn} className="h-[25px]"/>
        <FontAwesomeIcon icon={faFacebookF} className="h-[25px]"/>
        <FontAwesomeIcon icon={faGithub} className="h-[25px]"/>
        <FontAwesomeIcon icon={faEnvelope} className="h-[25px]"/>
      </section>
      <small className="text-[#b3b3b3] text-center">©Copyright. All rights reserved.</small>
    </footer>
  )
}
