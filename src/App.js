import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     <form>
       <h1>Добрый день! Будем рады если Вы оцените качество нашей работы по 5-бальной шкале!</h1>
       <div className="inputBox">
         <div><input type="radio" name="star" value="1" />
         <label>&#11088;</label> </div>
         <div><input type="radio" name="star" value="1" />
         <label>&#11088;&#11088;</label> </div>
         <div><input type="radio" name="star" value="1" />
         <label>&#11088;&#11088;&#11088;</label> </div>
         <div><input type="radio" name="star" value="1" />
         <label>&#11088;&#11088;&#11088;&#11088;</label> </div>
         <div><input type="radio" name="star" value="1" />
         <label>&#11088;&#11088;&#11088;&#11088;&#11088;</label> </div>
        
       </div>
       <input type="submit" value="Отправить отзыв"/>
     </form>
    </div>
  );
}

export default App;
