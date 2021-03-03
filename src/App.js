import {useState} from 'react'
import logo from './images/logo.png';
import './App.css';

function App() {

   const [formState, setFormState] = useState(0);
   const [formRating, setFormRating] = useState(1)

   let data = new FormData();
   data.append('phone', '89041544527')
   data.append('id', 1009)
   const formSubmit = (e)=>{
     e.preventDefault();
    console.log(data)
     if(formRating < 5){
      fetch('https://flashformat.pro/moneyshop/api/2/index.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      body: data
      }).then((res)=>console.log(res))
     }else{
       setFormState(1)
     }
    }
  const onFormChange= (e)=>{
    setFormRating(e.target.value)
    }

  return (
    <div className="App">
      {formState === 0 ? 
           <form className="formData" onSubmit={formSubmit}>
             <img className="logo" src={logo} />
           <h1>Добрый день! Будем рады если Вы оцените качество нашей работы по 5-бальной шкале!</h1>
        
           <div className="rating-area">
	<input type="radio" id="star-5" name="rating" value="5" onChange={onFormChange}/>
	<label htmlFor="star-5" title="Оценка «5»"></label>	
	<input type="radio" id="star-4" name="rating" value="4" onChange={onFormChange}/>
	<label htmlFor="star-4" title="Оценка «4»"></label>    
	<input type="radio" id="star-3" name="rating" value="3" onChange={onFormChange}/>
	<label htmlFor="star-3" title="Оценка «3»"></label>  
	<input type="radio" id="star-2" name="rating" value="2" onChange={onFormChange}/>
	<label htmlFor="star-2" title="Оценка «2»"></label>    
	<input type="radio" id="star-1" name="rating" value="1" onChange={onFormChange}/>
	<label htmlFor="star-1" title="Оценка «1»"></label>
</div>
         <input type="submit" value="Отправить"/>
         </form>
         :
         <form>
         <h1>Большое спасибо за оценку!</h1>
         <h2>Получите <span>100</span> бонусных баллов на карту клиента*, оставив отзыв по одной из ссылок.</h2>
         <div className="inputBox">
           <div><a href='http://2gis.ru'> 2gis</a></div>
           <div><a href='http://google.ru'> Google</a></div>
           <div><a href='http://flamp.ru'> Flamp</a> </div>
         </div>
         <p>* Для получения бонусных баллов покажите отзыв в магазине</p>
       
       </form>

    }

 
    </div>
  );
}

export default App;
