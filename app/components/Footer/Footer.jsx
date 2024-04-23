//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn, faGithub, faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Footer() {
  return (
    <footer className='flex flex-col text-[white] justify-between w-full px-6 py-5 md:p-8 md:pb-4 bg-[#1D1E18] gap-6 md:flex-row md:items-center md:gap-2 flex-wrap xl:px-10 z-1'>
      <section className="md:max-w-[40%] lg:max-w-[30%] xl:text-[1.2em]">
        <h3 className='text-[1.5em] font-semibold'>
          <span className='text-[#2B60EA]'>Ai</span>Mathics<br />
        </h3>
        is a website, developed to make learning mathematics easier by solving & explaining tasks with a helping hand of <i>Ai teacher</i>.
      </section>
      <hr className='border-[#2B60EA] md:bg-[#2B60EA] md:h-[125px] md:w-[3px] lg:hidden' />
      <section className='grid min-w-[55%] lg:min-w-[35%] xl:text-[1.2em]'>
        <table>
          <tbody className='text-center'>
            <tr className="text-[1.25em] md:text-[1.25em] md:text-[#2B60EA]">
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
      <hr className='border-[#2B60EA] md:bg-[#2B60EA] md:h-[150px] md:w-[3px] hidden lg:flex' />
      <section className="hidden w-[65%] py-5 md:flex lg:max-w-[265px] xl:max-w-[310px] xl:text-[1.2em]">
        <span className="flex items-center gap-6 m-auto lg:flex-col">
          <h4>Sign in to the newsletter to stay informed about latest offers.</h4>
          <form className="w-[250px] xl:w-[300px] flex outline outline-[#4B4747] py-2 px-4 rounded-full text-[0.85em] lg:place-self-start">
            <input type="text" placeholder="example@gmail.com" className="bg-transparent"/>
            <input type="submit" value="Sign in"/>
          </form>
        </span>
      </section>
      <section className="flex my-4 justify-evenly md:w-[30%] lg:hidden">
        <FontAwesomeIcon icon={faLinkedinIn} className="h-[30px] md:h-[35px]"/>
        <FontAwesomeIcon icon={faFacebookF} className="h-[30px] md:h-[35px]"/>
        <FontAwesomeIcon icon={faGithub} className="h-[30px] md:h-[35px]"/>
        <FontAwesomeIcon icon={faEnvelope} className="h-[30px] md:h-[35px]"/>
      </section>
      <small className="text-[#b3b3b3] text-center w-full md:pt-4">©Copyright. All rights reserved.</small>
    </footer>
  )
}
