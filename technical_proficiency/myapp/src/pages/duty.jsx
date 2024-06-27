import MultiInput from "./components/multi-input";
import Navbar from './components/navbar';
const links = [
    {
      text: 'departments',
      icon: 'home-outline',
      count: 0,
      href: '/department',
    },
    {
      text: 'employees',
      icon: 'person-outline',
      count: 0,
      href: '/employee',
    },
    {
      text: 'companies',
      icon: 'home-outline',
      count: 0,
      href: '/',
    },

    {
      text: 'contacts',
      icon: 'call-outline',
      count: 0,
      href: '/contact',
    },
    {
        text: 'bulk upload',
        icon: 'cloud-upload-outline',
        count: 0,
        href: '/bulk-upload',
      },
  ];
const Duty=()=>{
    return(
        <>
            <Navbar heading="duty" links={links} />
            <MultiInput entity="Duty"/>
        </>
        
    );
}

export default Duty;