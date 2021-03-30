import {useState, useEffect} from 'react'
import logo from './images/logo.png';
import './App.css';

function App() {

   const [formState, setFormState] = useState(0);
   const [formRating, setFormRating] = useState(1);
   const [gisUrl, setGisUrl] = useState('https://2gis.ru');
   const [yaUrl, setYaUrl] = useState('https://yandex.ru');
   const [phone, setPhone] = useState(0);
   const [id, setId] = useState(0);
   const [idDeal, setIddeal] = useState(0);

   let data = {
     phone, id, idDeal
   }
   

   const formSubmit = (e)=>{
     e.preventDefault();
    console.log(data)
     if(formRating < 5){
      setFormState(2)
      fetch('https://flashformat.pro/moneyshop/api/2/index.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      }).then((res)=> {setFormState(2)})
     }else{
       setFormState(1)
     }
    }
  const onFormChange= (e)=>{
    setFormRating(e.target.value)
    }
    

    useEffect(() => {
      function getUrlVar(){
        let urlVar = window.location.search; // получаем параметры из урла
        let arrayVar = []; // массив для хранения переменных
        let valueAndKey = []; // массив для временного хранения значения и имени переменной
        let resultArray = []; // массив для хранения переменных
        arrayVar = (urlVar.substr(1)).split('&'); // разбираем урл на параметры
        if(arrayVar[0]==="") return false; // если нет переменных в урле
        for (let i = 0; i < arrayVar.length; i ++) { // перебираем все переменные из урла
            valueAndKey = arrayVar[i].split('='); // пишем в массив имя переменной и ее значение
            resultArray[valueAndKey[0]] = valueAndKey[1]; // пишем в итоговый массив имя переменной и ее значение
        }
        return resultArray
    }

    let result = getUrlVar();
    let shops = {
      "16" : "https://2gis.ru/irkutsk/inside/1548748027070240/firm/70000001035355648/tab/reviews?writeReview&m=104.219869%2C52.349307%2F17.8",
      "15" : "https://2gis.ru/irkutsk/inside/1548748027113544/firm/70000001047527920/tab/reviews?writeReview&m=104.154132%2C52.356893%2F17.8",
      "14" : "https://2gis.ru/irkutsk/inside/1548748054676254/firm/70000001045036496/tab/reviews?writeReview&m=104.299033%2C52.312081%2F15.76",
      "13" : "https://2gis.ru/irkutsk/inside/1548748027151653/firm/70000001043658701/tab/reviews?writeReview&m=104.318734%2C52.278129%2F16",
      "12" : "https://2gis.ru/irkutsk/inside/70030076158928053/firm/70000001039687247/tab/reviews?writeReview&m=104.314554%2C52.264357%2F16",
      "11" : "https://2gis.ru",
      "10": "https://2gis.ru",
      "9" : "https://2gis.ru/irkutsk/inside/1548748057857736/firm/70000001043311687/tab/reviews?writeReview&m=104.283583%2C52.233899%2F15.76",
      "8" : "https://2gis.ru/irkutsk/firm/70000001045036448/tab/reviews?writeReview&m=104.242213%2C52.26139%2F16",
      "7" : "https://2gis.ru/irkutsk/inside/1548748027093663/firm/70000001043658681/tab/reviews?writeReview&m=104.206946%2C52.26449%2F15.76",
      "6" : "https://2gis.ru/irkutsk/inside/1548748027094088/firm/70000001036089067/tab/reviews?writeReview&m=104.300523%2C52.281854%2F16",
      "5" : "https://2gis.ru/inside/70030076189405866/firm/70000001041050048/tab/reviews?writeReview&m=102.7379%2C57.950904%2F16",
      "4" : "https://2gis.ru/inside/70030076173623357/firm/70000001043708433/tab/reviews?writeReview&m=103.150264%2C53.115974%2F16",
      "3" : "https://2gis.ru/irkutsk/inside/1548748027094088/firm/70000001036089067/tab/reviews?writeReview&m=104.300523%2C52.281854%2F16",
      "2": "https://2gis.ru/inside/70030076206111646/firm/70000001043039487/tab/reviews?writeReview&m=104.752898%2C52.803723%2F16",
      "1" : "https://2gis.ru"
    }
    let shops2 = {
      "16" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A95353761920&redircnt=1617105207.1",
      "15" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A212789843646&redircnt=1617105558.1",
      "14" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A212789843646&redircnt=1617105558.1",
      "13" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A182741893589&redircnt=1617105437.1",
      "12" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A147656237797&redircnt=1617105282.1",
      "11" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A147656237797&redircnt=1617105282.1",
      "10": "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A147656237797&redircnt=1617105282.1",
      "9" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A52105352502&redircnt=1617105397.1",
      "8" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A212789843646&redircnt=1617105558.1",
      "7" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A149415553503&redircnt=1617105501.1",
      "6" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A212789843646&redircnt=1617105558.1",
      "5" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A152291236410&redircnt=1617105326.1",
      "4" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A177438394760&redircnt=1617105467.1",
      "3" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A180058000689&redircnt=1617105253.1",
      "2": "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A212789843646&redircnt=1617105558.1",
      "1" : "https://yandex.ru/search/?text=MoneyShop&lr=213&oid=b%3A23449904642&redircnt=1617105359.1"
    }
    setGisUrl(shops[result.shop])
    setYaUrl(shops2[result.shop])
    setPhone(result.phone);
    result.id.split('_')[1] ? setId(result.id.split('_')[1]) : setId(0)
    console.log(result.id.split('_')[1])
    setIddeal(result.iddeal)
      }, []);
   
  return (
    <div className="App">
      {formState === 0 &&
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
}
 {       formState === 1 && 
         <form>
         <h1>Большое спасибо за оценку!</h1>
         <h2>Получите <span>100</span> бонусных баллов на карту клиента*, оставив отзыв по одной из ссылок.</h2>
         <div className="inputBox">
           <div><a href={gisUrl}>2gis</a></div>
           <div><a href={yaUrl}>Yandex</a> </div>
         </div>
         <p>* Для получения бонусных баллов покажите отзыв в магазине</p>
       
       </form>}
       {formState === 2 &&     <form>
         <h1>Большое спасибо за оценку!</h1>   
       </form>}
    </div>
  );
}

export default App;
