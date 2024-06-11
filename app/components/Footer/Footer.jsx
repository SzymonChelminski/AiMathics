//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="z-1 flex w-full flex-col flex-wrap justify-between gap-6 bg-[#1D1E18] px-6 py-5 text-[white] md:flex-row md:items-center md:gap-2 md:p-8 md:pb-4 xl:px-10 2xl:rounded-t-2xl">
      <section className="md:max-w-[40%] lg:max-w-[30%] xl:text-[1.2em]">
        <h3 className="text-[1.5em] font-semibold">
          <span className="text-[#2B60EA]">Ai</span>Mathics
          <br />
        </h3>
        is a website, developed to make learning mathematics easier by solving &
        explaining tasks with a helping hand of <i>Ai teacher</i>.
      </section>
      <hr className="border-[#2B60EA] md:h-[125px] md:w-[3px] md:bg-[#2B60EA] lg:hidden" />
      <section className="grid min-w-[55%] lg:min-w-[35%] xl:text-[1.2em]">
        <table>
          <tbody className="text-center ">
            <tr className="text-[1.25em] md:text-[1.25em] md:text-[#2B60EA] cursor-pointer">
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
      <hr className="hidden border-[#2B60EA] md:h-[150px] md:w-[3px] md:bg-[#2B60EA] lg:flex" />
      <section className="hidden w-[65%] py-5 md:flex lg:max-w-[265px] xl:max-w-[310px] xl:text-[1.2em]">
        <span className="flex items-center gap-6 m-auto lg:flex-col">
          <h4>
            Sign in to the newsletter to stay informed about latest offers.
          </h4>
          <form className="flex w-[250px] rounded-full px-4 py-2 text-[0.85em] outline outline-[#4B4747] lg:place-self-start xl:w-[300px]">
            <input
              type="text"
              placeholder="example@gmail.com"
              className="bg-transparent"
            />
            <input type="submit" value="Sign in" className="cursor-pointer" />
          </form>
        </span>
      </section>
      <section className="my-4 flex justify-evenly md:w-[30%] lg:hidden">
        <FontAwesomeIcon icon={faLinkedinIn} className="h-[30px] md:h-[35px]" />
        <FontAwesomeIcon icon={faFacebookF} className="h-[30px] md:h-[35px]" />
        <FontAwesomeIcon icon={faGithub} className="h-[30px] md:h-[35px]" />
        <FontAwesomeIcon icon={faEnvelope} className="h-[30px] md:h-[35px]" />
      </section>
      <small className="w-full text-center text-[#b3b3b3] md:pt-4">
        ©Copyright. All rights reserved.
      </small>
    </footer>
  );
}
