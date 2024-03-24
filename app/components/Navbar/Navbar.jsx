//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
  return (
    <nav className='sticky top-0 flex items-center justify-between w-full px-6 py-4'>
      <h1 className="text-[1.75em] font-semibold xl:text-[2em] cursor-pointer">
        <span className="text-[#2B60EA]">Ai</span>Mathics
      </h1>
      <label className="flex flex-col gap-[5px] group peer has-[:checked]:mr-[125px] lg:hidden duration-150">
        <input type="checkbox" className='hidden'/>
        <span className="w-[32px] h-[5px] rounded-full bg-black duration-300 relative group-has-[:checked]:rotate-45 group-has-[:checked]:translate-y-[10px] group-has-[:checked]:bg-[#2B60EA]"></span>
        <span className="w-[32px] h-[5px] rounded-full bg-[#2B60EA] duration-150 group-has-[:checked]:opacity-0"></span>
        <span className="w-[32px] h-[5px] rounded-full bg-black duration-300 relative group-has-[:checked]:-rotate-45  group-has-[:checked]:-translate-y-[10px]"></span>
      </label>
      <section className="w-[135px] flex flex-col justify-between items-center h-full peer-has-[:checked]:-right-[0px] duration-200 bg-[#E2EAFF] fixed -right-[135px] bottom-0 lg:hidden pt-4 pb-7">
        <section className="flex flex-col gap-11">
          <div className="flex flex-col items-center gap-2">
            <FontAwesomeIcon icon={faCircleUser} className="h-[75px] text-[#2B60EA]"/>
            <h3 className="max-w-[90px] font-semibold">Guest</h3>
            <button className="w-[80px] h-[35px] font-medium text-white rounded-full bg-[#2B60EA]">log in</button>
            <button className="w-[80px] h-[35px] font-medium text-white rounded-full bg-[#00A86B]">sign in</button>
          </div>
          <div className="flex flex-col font-medium text-[1.15em]">
            <span className="text-[#4B4747]">Company</span>
            <span className="text-[#4B4747]">About</span>
            <span className="text-[#4B4747]">Features</span>
            <span className="text-[#4B4747]">Pricing</span>
          </div>
        </section>
        <small className="font-semibold"><span className="text-[#2B60EA]">Ai</span>Mathics 1.0</small>
      </section>
      <section className="hidden lg:flex items-center gap-10 *:font-medium xl:*:text-[1.25em] *:cursor-pointer">
        <span className="text-[#4B4747]">Company</span>
        <span className="text-[#4B4747]">About</span>
        <span className="text-[#4B4747]">Features</span>
        <span className="text-[#4B4747]">Pricing</span>
        <input type="button" value="Sign in" className="w-[100px] h-[36px] xl:w-[115px] xl:h-[42px] xl:rounded-xl text-white rounded-lg bg-[#2B60EA] lg:ml-2 xl:ml-4"/>
      </section>
    </nav>
  )
}
