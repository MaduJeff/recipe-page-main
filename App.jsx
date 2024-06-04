import omelette from "./images/image-omelette.jpeg";

export default function App() {
  return (
    <div className="bg-[#f3e5d8] h-screen flex items-center justify-center   ">
      <div className="bg-white border w-screen h-screen sm:p-5 sm:w-[500px] sm:h-[900px]  rounded-[15px] ">
        {/* <div className="bg-white border w-screen h-screen sm:p-5   sm:w-[70%] md:w-[50%]  sm:h-[95%] lg:w-[40%] xl:w-[23%] rounded-[15px] "> */}
        <img
          src={omelette}
          alt="omelette"
          className=" sm:rounded-[7px] mb-3  "
        />
        <div className="p-5 sm:p-0">
          <div className="font-YoungSerif font-[350px] text-2xl sm:text-lg  mb-2">
            Simple Omelette Recipe
          </div>

          <div className="font-Outfit text-[15px] sm:text-[11px] mb-6 sm:mb-2 text-[#8a7664] ">
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables or meats.
          </div>
          <div className=" p-[15px] bg-pink-50 rounded-[7px] mb-6 sm:mb-2">
            <div className="font-Outfit text-[#863271] text:-[17px] sm:text-[13px] font-semibold mb-1  ">
              Preparation time
            </div>
            <div>
              <ul className="font-Outfit list-disc text-[#8a7664]  text-[15px] sm:text-[11px] list-inside">
                <li className="mb-1">
                  <b>Total: </b> Approximately 10 minuties
                </li>
                <li className="mb-1">
                  <b>Preperation:</b> 5 minuties
                </li>
                <li className="mb-1">
                  <b>Cooking:</b> 5 minuties
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-4">
            <div className="font-YoungSerif text-[#996e45] mb-3 sm:mb-0">
              Ingredients
            </div>
            <div>
              {/* <ul className="font-Outfit list-disc font-semibold text-[10px] list-inside text-[#8a7664]"> */}
              <ul className="font-Outfit list-disc  text-[15px] sm:text-[10px] list-outside  ml-[1.5em] text-[#8a7664]  ">
                <li className="pl-[1em] mb-2 sm:mb-[0px]">2-3 large eggs</li>
                <li className="pl-[1em] mb-2 sm:mb-[0px]">Salt, to taste</li>
                <li className="pl-[1em] mb-2 sm:mb-[0px]">Pepper, to taste</li>
                <li className="pl-[1em] mb-2 sm:mb-[0px]">
                  1 tablespoon of butter or oil
                </li>
                <li className="pl-[1em] ">
                  Optioal fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </li>
              </ul>
            </div>
          </div>

          <hr className="mb-3 sm:mb-0" />

          <div className="mb-4">
            <div className="font-YoungSerif text-[#996e45] mb-3 sm:mb-0">
              Instructions
            </div>
            <div>
              <ol className="font-Outfit list-decimal  text-[15px] sm:text-[10px] space-y-1   ml-[1em] text-[#8a7664] px-2 sm:px-0 ">
                <li className="pl-[1em] font-bold pb-3 sm:pb-0">
                  <span className="font-normal">
                    <b> Beat the eggs: </b> In a bowl, beat the eggs with a
                    pinch of salt and pepper until they are well mixed. You can
                    add a tablespoon of water or milk for a fluffier texture.{" "}
                  </span>
                </li>
                <li className="pl-[1em] font-extrabold pb-3 sm:pb-0">
                  <span className="font-normal">
                    <b>Heat the pan:</b> Place a non-stick frying pan over
                    medium heat and add butter or oil.
                  </span>
                </li>
                <li className="pl-[1em] font-extrabold pb-3 sm:pb-0">
                  <span className="font-normal">
                    <b>Cook the omelette:</b> Once the butter is melted and
                    bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                    evenly coat the surface.
                  </span>
                </li>
                <li className="pl-[1em] font-extrabold pb-3 sm:pb-0">
                  <span className="font-normal">
                    <b> Add fillings (optional):</b> When the eggs begin to set
                    at the edges but are still slightly runny in the middle,
                    sprinkle your chosen fillings over one half of the omelette.
                  </span>
                </li>
                <li className="pl-[1em] font-extrabold pb-3 sm:pb-0">
                  <span className="font-normal">
                    <b> Fold and serve:</b> As the omelette continues to cook,
                    carefully lift one edge and fold it over the fillings. Let
                    it cook for another minute, then slide it onto a plate.
                  </span>
                </li>
              </ol>
            </div>
          </div>

          <hr />

          <div className="text-[#996e45] ">
            <div className="font-YoungSerif  my-3 sm:my-0"> Nutrition</div>
            <p className="text-[15px] px-2 sm:px-0 sm:text-[10px] font-Outfit font-medium  my-3 sm:my-0 text-[#8a7664]">
              The table below shows nutritional values per serving without
              additional fillings.
            </p>

            <div className="grid grid-cols-2  text-[11px] pl-5 text-center sm:text-left ">
              <div className="font-Outfit font-medium border-b text-[15px] sm:text-[10px] py-2 sm:py-0   text-[#8a7664]">
                Calories
              </div>
              <div className="font-Outfit font-medium border-b text-[15px] sm:text-[10px] py-2 sm:py-0   text-[#8a7664]">
                277kcal
              </div>

              <div className="font-Outfit font-medium border-b text-[15px] sm:text-[10px] py-2 sm:py-0   text-[#8a7664]">
                Carbs
              </div>
              <div className="font-Outfit font-medium border-b text-[15px] sm:text-[10px] py-2 sm:py-0   text-[#8a7664]">
                0g
              </div>

              <div className="font-Outfit font-medium border-b text-[15px] sm:text-[10px] py-2 sm:py-0   text-[#8a7664]">
                Protein
              </div>
              <div className="font-Outfit font-medium border-b text-[15px] sm:text-[10px] py-2 sm:py-0   text-[#8a7664]">
                200kg
              </div>
              <div className="font-Outfit font-medium border-b text-[15px] sm:text-[10px] py-2 sm:py-0   text-[#8a7664]">
                Fat
              </div>
              <div className="font-Outfit font-medium border-b text-[15px] sm:text-[10px] py-2 sm:py-0   text-[#8a7664]">
                22g
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//
