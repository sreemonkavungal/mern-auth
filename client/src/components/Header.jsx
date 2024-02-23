import { useLocation, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  const location = useLocation();
  const isNavLinkActive = (path) => {
    return location.pathname === path ? 'text-indigo-600' : 'text-black';
  };

  return (
    <div className='bg-slate-300'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
         <h1 className='font-bold'>auth-application</h1>
        </Link>
        <ul className='flex gap-5'>
          <Link to='/' className={`text-sm font-semibold leading-6 ${isNavLinkActive('/')}`}>
            <li>Home</li>
          </Link>
          <Link to='/about' className={`text-sm font-semibold leading-6 ${isNavLinkActive('/about')}`}>
            <li>About</li>
          </Link>
          {/* <Link to='/sign-in' className={`text-sm font-semibold leading-6 ${isNavLinkActive('/sign-in')}`}>
            <li>Sign In</li>
          </Link> */}
          <Link to='/profile'>
            {currentUser ? (
              <img src={currentUser.profilePicture} alt='profile' className='h-7 w-7 rounded-full object-cover' />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
