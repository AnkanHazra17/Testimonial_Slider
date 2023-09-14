import "./App.css";
import Testimonials from "./components/Testimonials";
import reviews from "./data";

function App() {
  return (
    <div className="flex items-center justify-center h-[100vh] bg-gray-200">
      <div className="flex items-center justify-between flex-col">
        <h1 className="text-[30px] font-bold text-center">Our Testimonial</h1>
        <div className="h-1 w-[8rem] bg-violet-400 mx-auto rounded-sm"></div>
        <Testimonials reviews={reviews}></Testimonials>
      </div>
    </div>
  );
}

export default App;
