import Pets from "./components/Pets";
import food from "./img/food.jpeg";

function App() {
  return (
    <div className="text-pink-300">
      <div>
        <Pets />
        <nav>
          <div>
            <h1>
              <a href="/">Food Ninja</a>
            </h1>
          </div>
          <ul>
            <li>
              <a href="#">
                <span className="text-xs">Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <main>
        <div>
          <a href="#">Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2 className="text-bold uppercase font-xl bg-gray-400 p-2 ">
            Recipes
          </h2>
          <h3 className="bg-red-600 m-4 border-8 border-yellow-800">
            For Ninjas
          </h3>
        </header>

        <div>
          <h4>Latest Recipes</h4>
          <div>
            <div>
              <img src={food} alt="food" />

              <span> 5 Bean Chilli Stew</span>
              <span> Recipes by Mario</span>
            </div>
          </div>
        </div>

        <h4>Most Popular</h4>
        <div></div>
        <div>
          <div>Load More</div>
        </div>
      </main>
    </div>
  );
}

export default App;
