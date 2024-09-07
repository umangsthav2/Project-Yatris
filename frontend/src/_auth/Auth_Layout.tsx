import { Outlet, Navigate } from "react-router-dom";

const Auth_Layout = () => {
    const isAuthenticated = false;
  return (
    <>
        {isAuthenticated ? (
            <Navigate to ="./" />
        ): (
        <>
            <section className="flex flex-1 justify-center items-center flex-col">
                <Outlet />
            </section>
            <img src="/assets/images/side-img.svg" alt="side-logo" className="hidden xl:block h-screen w-1/2 boject-cover bg-no-repeat" />
        </>
        )}
    </>
  )
}

export default Auth_Layout