import React, { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavigationBar'
import SideNav from './components/SideNav'
import Home from './components/Home'
import { BrowserRouter, Route } from 'react-router-dom'
const cityMap = {
  India: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Gujarat', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur', 'Visakhapatnam', 'Kanpur', 'Nagpur', 'Lucknow', 'Thane', 'Bhopal', 'Indore', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi'],
  China: ['Shanghai', 'Beijing', 'Chongqing', 'Tianjin', 'Guangzhou', 'Shenzhen†', 'Chengdu', 'Nanjing', 'Wuhan', 'Xian Shaanxi', 'Hangzhou', 'Dongguan', 'Foshan Guangdong', 'Shenyang Liaoning', 'Harbin Heilongjiang', 'Qingdao Shandong', 'Dalian Liaoning', 'Jinan Shandong', 'Zhengzhou Henan', 'Changsha Hunan', 'Kunming Yunnan', 'Changchun Jilin', 'Ürümqi Xinjiang', 'Shantou Guangdong', 'Hefei Anhui', 'Shijiazhuang Hebei', 'Ningbo Zhejiang', 'Taiyuan Shanxi', 'Nanning Guangxi', 'Xiamen† Fujian'],
  USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'San Francisco', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Washington', 'Boston', 'El Paso', 'Detroit', 'Nashville', 'Portland', 'Memphis', 'Oklahoma', 'Las Vegas', 'Louisville', 'Baltimore'],
  Canada: ['Greater', 'Kawartha Lakes', 'Timmins', 'Ottawa', 'Chatham-Kent', 'Norfolk', 'Haldimand', 'Hamilton', 'Prince Edward', 'Brant', 'Calgary', 'Elliot Lake', 'Edmonton', 'Toronto', 'Quinte West', 'Winnipeg', 'Kingston', 'Newfoundland and Labrador', 'London', 'Whitehorse', 'Abbotsford', 'Thunder Bay', 'North Bay', 'Prince George', 'Surrey', 'Saint John', 'Kamloops', 'Clarence-Rockland', 'Mississauga'],
  Russia: ['Moscow', 'Saint', 'Novosibirsk', 'Yekaterinburg', 'Nizhny', 'Kazan', 'Chelyabinsk', 'Omsk', 'Samara', 'Ufa', 'Rostov-on-Don', 'Krasnoyarsk', 'Voronezh', 'Perm', 'Volgograd', 'Krasnodar', 'Saratov', 'Tyumen', 'Makhachkala', 'Tolyatti', 'Barnaul', 'Ulyanovsk', 'Izhevsk', 'Vladivostok', 'Irkutsk', 'Khabarovsk', 'Yaroslavl', 'Tomsk', 'Orenburg', 'Kemerov']
}
const App = () => {
  const [active, setActive] = useState('')
  const [cities, setCities] = useState('')
  const handleActive = (country) => setActive(country)
  useEffect(() => {
    setCities(cityMap[active])
  }, [active])
  return (
    <div className='App'>
      <NavBar />
      <SideNav handleActive={handleActive} active={active} />
      <BrowserRouter>
        <div className='sans-serif'>
          <Route exact path='/home' component={Home} />
          <Route exact path='/home/:country'><Home cities={cities} /></Route>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
