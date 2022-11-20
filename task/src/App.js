import {lazy,Suspense} from 'react'
const Low= lazy(()=> import ('./Low'))

function App() {

  return (
    <div className="m-10 lg:max-w-7xl mx-auto shadow-md items-center">
     <Suspense fallback={<p>loading....</p>} >
       <Low />
     </Suspense>
    </div>
  );
}

export default App;
