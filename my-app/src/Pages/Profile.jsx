import React, { useContext, useEffect, useState } from 'react'
import { MdOutlineColorLens } from "react-icons/md";
import { ThemeContext } from '../Context/TheamContext';
import clsx from 'clsx';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const { theme, setTheme } = useContext(ThemeContext);
   const { user, loading, error, signOut } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user)

   if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!user) {
    navigate("/login");
    return null;
  }
  
   const handleLogout = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };


  return (
    <>
        <div className="container mx-auto">
            <div className="w-full max-w-[670px] mx-auto px-4 py-8">


            <h1  className={clsx(
    'font-[inter] font-semibold text-[30px]',
    theme === 'obsidia' && 'text-white ',
    theme === 'one-dark' && 'text-white ',
    theme === 'toff' && 'text-[#665442] ',
    theme === 'stone' && 'text-black '
  )} >My Profile</h1> <br />

                <div  className={clsx(
    'px-6 py-6 rounded-lg ',
    theme === 'obsidia' && 'text-white bg-[#292524] border-1 border-[#44403c]',
    theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
    theme === 'toff' && 'text-[#665442] bg-[#f9f5ff] ',
    theme === 'stone' && 'text-black bg-white '
  )} >
            <h3 className='font-[inter] font-bold text-lg mb-4'>Account Information</h3>

                    <div className='flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 items-center sm:items-start'>

                        <div className="profile_img">
                            <img className='rounded-full w-24 h-24 object-cover' src={user.photoURL} alt="photo"/>
                        </div>
                        <div >
                            <h4 className='text-xl font-bold'>{user.displayName}</h4>
                          <p>{user.email}</p>

                             <p>Member since: {new Date(user?.metadata.creationTime).toDateString()}</p>
                            <button
                                 className={clsx(
                                    ' px-3 py-2 mt-2 text-xs',
                                    theme === 'obsidia' && 'border border-[#44403c]',
                                    theme === 'one-dark' && 'border-[#333842] border',
                                    theme === 'toff' && 'border-[#e4e4e7] border',
                                    theme === 'stone' && ' border-[#e4e4e7] border'
                                  )}
                            >Edit Profile</button>
                        </div>
                    </div>


                </div>


                <div 

className={clsx(
    ' mt-8 text-black px-6 py-6 rounded-lg ',
    theme === 'obsidia' && 'text-white bg-[#292524] border-1 border-[#44403c]',
    theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
    theme === 'toff' && 'text-[#665442] bg-[#f9f5ff] ',
    theme === 'stone' && 'text-black bg-white '
  )} 

                >
                      <h3 
                        className={clsx(
                                          'font-[inter] font-bold text-base mb-4 ',
                                          theme === 'obsidia' && 'text-white ',
                                          theme === 'one-dark' && 'text-white ',
                                          theme === 'toff' && 'text-[#665442] ',
                                          theme === 'stone' && 'text-black '
                                        )}
                      >Subscription</h3>
                    
                      <div className="c_1">
                            <div className='font-[inter] text-sm font-medium mb-2 justify-between'>
                               <div className=' mb-2'>
                                <p
                                  className={clsx(
    'text-sm text-[var(--text-light)] mb-4',
    theme === 'obsidia' && 'text-white ',
    theme === 'one-dark' && 'text-white ',
    theme === 'toff' && 'text-[#665442] ',
    theme === 'stone' && 'text-black '
  )}
                                >You are currently on the Free plan.</p> 
                                <p  className={clsx(
    'text-sm text-[var(--text-light)] mb-4',
    theme === 'obsidia' && 'text-white ',
    theme === 'one-dark' && 'text-white ',
    theme === 'toff' && 'text-[#665442] ',
    theme === 'stone' && 'text-black '
  )}>Upgrade to Pro for advanced features and unlimited usage.</p>
                               </div>

                                        <button
                                         className={clsx(
                                                          'w-full px-4 py-2 rounded-lg',
                                                          theme === 'obsidia' && 'text-white bg-[#292524] border-1 border-[#44403c]',
                                                          theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
                                                          theme === 'toff' && 'text-[#665442] bg-[#f9f5ff] border-[#e4e4e7] border',
                                                          theme === 'stone' && 'text-white bg-black '
                                                        )}
                                        >Subscribe</button>

                             
                            </div>

                        </div>
                </div>

                  <div
                    className={clsx(
    'mt-8  px-6 py-6 rounded-lg',
    theme === 'obsidia' && 'text-white bg-[#292524] border-1 border-[#44403c]',
    theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
    theme === 'toff' && 'text-[#665442] bg-[#f9f5ff] ',
    theme === 'stone' && 'text-black bg-white '
  )} 
                  
                  >
                                        <h3 className='font-[inter] font-bold text-lg mb-4'>Account Actions</h3>
                                      <div>

                                        <button
              onClick={handleLogout}
               className={clsx(
                                                          ' px-4 py-2 rounded',
                                                          theme === 'obsidia' && 'text-white bg-[#292524] border-1 border-[#44403c]',
                                                          theme === 'one-dark' && 'text-white bg-[#1D202A] border-1 border-[#333842]',
                                                          theme === 'toff' && 'text-[#665442] bg-[#f9f5ff] border-[#e4e4e7] border',
                                                          theme === 'stone' && 'text-white bg-black '
                                                        )}
            >
              Sing Out
            </button>
                                        
                                      </div>
                                  </div>

            </div>
        </div>
        
    </>
  )
}

export default Profile
