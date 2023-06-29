import React from 'react'
import './Contacts.css'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

const Contacts = () => {
  return (
    <section className='contacts_section'>
        <h2>КОНТАКТЫ</h2>
        <div className="contacts_grid">
            <div><p >Салоны находятся по адресам:  </p>
            <p>г. Нижний Новгород, ул. Базарная 8, к4</p>
            <p>г. Нижний Новгород, ул. Коминтерна 127</p>
            <p>09.00-19.00 без выходных</p>
            <p>+7 (996) 566 29 43</p>
            <p>plitka.bazarnaya8@yandex.ru</p></div>
            <YMaps>
              <div>
              <Map width={600}
              height={400}
                defaultState={{
                   center: [56.35185, 43.86071],
                    zoom: 9,
                    controls: ["zoomControl", "fullscreenControl"],
                  }}
                modules={["control.ZoomControl", "control.FullscreenControl"]}
  >
              <Placemark defaultGeometry={[56.35185, 43.86071]} />
              <Placemark defaultGeometry={[56.352028, 43.868032]} />
            
            </Map>
              </div>
              </YMaps>
        </div>
    </section>  
  )
}

export default Contacts
