import { NavLink } from "react-router";

export default function MainBanner() {
  return (
    <div className="flex justify-center mt-5 mb-5 box-border">
      <NavLink to="/product">
        <div className="bg-[url('/hero.jpg')] bg-contain bg-center h-90 w-250 opacity-70  box-border rounded-3xl">
          <div className="flex justify-center items-center h-full box-border">
            <div className="mt-2 h-75 w-240 bg-white border rounded-4xl box-border relative flex justify-center">
              <div className="h-10 w-100 bg-white border absolute -top-4 rounded-xl flex justify-center items-center">
                <p>apa ini</p>
              </div>
              <div className="h-full w-full flex flex-row p-2 justify-evenly">
                <div className="basis-1/5 bg-gray-100 rounded-2xl"></div>
                <div className="basis-1/5 bg-gray-100 rounded-2xl"></div>
                <div className="basis-1/5 bg-gray-100 rounded-2xl"></div>
                <div className="basis-1/5 bg-gray-100 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
