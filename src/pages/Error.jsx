import { Link, useRouteError } from "react-router-dom"

function Error() {
  const error = useRouteError();
  let typeOfError = error.status === 404;
  let text = 'There was an unexpected error....'
  if(typeOfError){
    text = '404 Not found';
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <div className="text-center">
        <h3 className="text-center font-medium text-2xl text-primary md:text-3xl tracking-wider capitalize"> {text} </h3>
        {typeOfError && <p className="mt-4 text-xl font-medium tracking-tight md:text-2xl">Sorry, we couldn't find the page you're looking for.</p>}
      <div className="mt-10">
        <Link to='/' className='btn btn-primary btn-outline'> Back to Home</Link>
      </div>
      </div>
    </main>
  )
}

export default Error