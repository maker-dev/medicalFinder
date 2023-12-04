export default () => {

  return (
      <footer className="bg-gray-900 py-20 px-5 lg:px-0 mx-auto">
              <div className=" flex flex-wrap mx-auto items-center w-fit">
                  <div className="max-w-lg lg-0">
                      <h2 className="text-white font-bold text-5xl mb-2">
                          Newsletter
                      </h2>
                      <p className="text-white">
                          Catch the latest in pharmacy product updates, expert tips,
                          and exclusive offers every week - subscribe now !
                      </p>
                  </div>
                  <div className="mt-10 lg:mt-0 w-full mx-auto sm:w-2/3 lg:w-fit">
                      <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-x-3 md:justify-end">
                          <div className="relative w-full">
                              <svg className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                              </svg>
                              <input  
                                  type="email"
                                  required
                                  placeholder="Enter your email"
                                  className="w-full pl-12 pr-14 py-2 text-gray-700 bg-white outline-none border focus:border-main-400 shadow-sm rounded-lg "
                              />
                          </div>
                          <button className="block w-auto py-3 px-4 font-medium text-sm text-center text-white bg-main-400 hover:bg-main-500 active:bg-main-600 active:shadow-none rounded-lg shadow">
                              Subscribe
                          </button>
                      </form>
                  </div>
              </div>
      </footer>
  )
}