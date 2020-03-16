import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Datacard from './Datacard'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 5%;
  margin-left: 21%;
`
const Home = (props) => {
  console.log(props)
  const cityMap = {
    India: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Gujarat', 'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur', 'Visakhapatnam', 'Kanpur', 'Nagpur', 'Lucknow', 'Thane', 'Bhopal', 'Indore', 'Pimpri-Chinchwad', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Agra', 'Nashik', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar', 'Varanasi'],
    China: ['Shanghai', 'Beijing', 'Chongqing', 'Tianjin', 'Guangzhou', 'Shenzhen†', 'Chengdu', 'Nanjing', 'Wuhan', 'Xian Shaanxi', 'Hangzhou', 'Dongguan', 'Foshan Guangdong', 'Shenyang Liaoning', 'Harbin Heilongjiang', 'Qingdao Shandong', 'Dalian Liaoning', 'Jinan Shandong', 'Zhengzhou Henan', 'Changsha Hunan', 'Kunming Yunnan', 'Changchun Jilin', 'Ürümqi Xinjiang', 'Shantou Guangdong', 'Hefei Anhui', 'Shijiazhuang Hebei', 'Ningbo Zhejiang', 'Taiyuan Shanxi', 'Nanning Guangxi', 'Xiamen† Fujian'],
    USA: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'San Francisco', 'Charlotte', 'Indianapolis', 'Seattle', 'Denver', 'Washington', 'Boston', 'El Paso', 'Detroit', 'Nashville', 'Portland', 'Memphis', 'Oklahoma', 'Las Vegas', 'Louisville', 'Baltimore'],
    Canada: ['Greater', 'Kawartha Lakes', 'Timmins', 'Ottawa', 'Chatham-Kent', 'Norfolk', 'Haldimand', 'Hamilton', 'Prince Edward', 'Brant', 'Calgary', 'Elliot Lake', 'Edmonton', 'Toronto', 'Quinte West', 'Winnipeg', 'Kingston', 'Newfoundland and Labrador', 'London', 'Whitehorse', 'Abbotsford', 'Thunder Bay', 'North Bay', 'Prince George', 'Surrey', 'Saint John', 'Kamloops', 'Clarence-Rockland', 'Mississauga'],
    Russia: ['Moscow', 'Saint', 'Novosibirsk', 'Yekaterinburg', 'Nizhny', 'Kazan', 'Chelyabinsk', 'Omsk', 'Samara', 'Ufa', 'Rostov-on-Don', 'Krasnoyarsk', 'Voronezh', 'Perm', 'Volgograd', 'Krasnodar', 'Saratov', 'Tyumen', 'Makhachkala', 'Tolyatti', 'Barnaul', 'Ulyanovsk', 'Izhevsk', 'Vladivostok', 'Irkutsk', 'Khabarovsk', 'Yaroslavl', 'Tomsk', 'Orenburg', 'Kemerov']
  }
  const [active, setActive] = useState(props)
  const [cities, setCities] = useState(null)
  useEffect(() => {
    if (props.active && active !== props.active) {
      setActive(props.active)
      setCities(cityMap[props.active].slice())
    }
  }, [cityMap, active, props.active])
  return (
    <Container>
      {cities && cities.map((city, index) => {
        return (<Datacard key={index} city={city} />)
      })}
    </Container>
  )
}

export default Home
