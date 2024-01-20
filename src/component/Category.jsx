import Marquee from "react-fast-marquee";

const Category = () => {
  return (
    <div className="max-w-screen-xl px-6 lg:px-10 mx-auto py-14">
      <div className="text-3xl lg:text-5xl text-gray-700 lg:mb-8 font-semibold">
        <h1 className="font-bold">Courses Category</h1>
      </div>
      <Marquee speed={100}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    </div>
  );
};

export default Category;
