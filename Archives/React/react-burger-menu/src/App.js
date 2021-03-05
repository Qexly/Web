import logo from './logo.svg';
import './App.css';
import Menu from './Menu/Menu.jsx';
import icon from './imgs/li.svg';
import { useState } from 'react';

function App() {
  const items = [{value: 'Главная', href: '/main', icon}, {value: 'Услуги', href: '/service', icon},
                 {value: 'Магазин', href: '/shop', icon}, {value: 'О нас', href: '/about', icon}];
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="burger-btn" onClick={(e) => setIsOpen((prevSt => !prevSt))}>
          <span></span>
        </div>
      </nav>
      <main>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nobis consectetur perferendis facilis, architecto doloribus nemo alias quis optio repellat accusantium impedit unde ratione magni doloremque sint, possimus voluptates eius.
        Atque est praesentium excepturi doloribus laborum tempora et possimus totam amet obcaecati quas, dicta dolorem earum quia, deleniti eos quae, accusantium ipsam voluptates inventore saepe sapiente! Architecto facere eligendi non?
        Laudantium placeat accusantium sequi suscipit quidem at eos! Sunt totam magnam nam maiores, beatae vel nihil, id debitis culpa optio porro, libero quaerat voluptatum? Unde neque iusto eligendi nisi? Provident.
        Dolorem illo odio tempora vitae voluptate facilis nam esse mollitia. Quasi voluptatum incidunt inventore, sunt iure molestiae iusto odio ab! Vero in quam ducimus laborum, maxime quas amet officia accusamus.
        Est accusantium labore officiis iste earum blanditiis ducimus praesentium ullam, saepe ipsum dicta maiores delectus unde sunt itaque a quia voluptatem! Harum tenetur aperiam nisi, sapiente quidem ut nostrum ad?
        Doloremque cupiditate itaque ratione accusantium vitae excepturi error blanditiis delectus similique id, facilis magnam minus omnis sapiente dolorum illum nemo expedita praesentium quaerat quasi sequi enim dolores nihil esse? Sapiente!
        Odit doloremque quod molestiae aperiam necessitatibus ratione distinctio nisi minus, nesciunt totam quis praesentium esse itaque quasi provident laborum repellat impedit consequatur ipsam libero modi enim aliquam. Molestiae, aperiam et.
        Dolore, ad eos. Quos suscipit provident nemo quae minus. Vitae reprehenderit voluptate, deleniti omnis tempore ad obcaecati! Delectus fugit praesentium ipsum velit, minima cumque pariatur eveniet, quaerat repudiandae perferendis eligendi.
        Esse quis molestiae debitis, illum, dolore ut obcaecati porro sunt beatae, quos ipsam in. Architecto voluptas animi mollitia velit itaque est incidunt ab ut ullam suscipit ad, quam veritatis consectetur!
        Expedita soluta optio iste. Maxime eius, reprehenderit eveniet amet ipsam odio accusantium rem unde tenetur natus assumenda exercitationem maiores tempore saepe tempora, optio, aspernatur adipisci consequatur libero! Voluptas, deleniti inventore!
        Ab consequuntur ut quae omnis perferendis accusantium quas nesciunt commodi nisi qui corporis, necessitatibus doloremque repellat fugit voluptates sapiente id distinctio, tenetur accusamus soluta debitis ipsa. Ipsum recusandae ex voluptatibus.
        Id, ab, at, dolores exercitationem vero cupiditate ut modi quibusdam qui facilis dolore debitis? Aperiam numquam, doloremque quae soluta cumque ratione nulla alias inventore magni qui veniam adipisci a pariatur?
        Possimus odio quia sed similique. Vitae ullam eligendi, sunt quidem hic nisi! Architecto hic incidunt officia. Veritatis, facilis amet placeat nam, vel magni modi repellendus eaque repellat, sit consectetur animi!
        Tempora nihil asperiores illo eveniet dignissimos sit magni itaque praesentium iste sed. Perferendis harum eligendi voluptatem impedit illo est laudantium facilis voluptate facere esse unde assumenda rerum, fuga accusamus amet!
        Magni possimus vitae ab eius! At saepe quo dolorem, in voluptas, error corporis fugiat cum quam eaque, suscipit vel dicta architecto est sequi ipsam dolorum reiciendis sed. Iste, dolore aliquam.
        Dolores, optio culpa dicta nihil ratione laudantium fugiat odit asperiores a sapiente distinctio dolorem, veritatis aperiam ab voluptas soluta velit quis provident voluptate perferendis obcaecati consectetur! Cum nam eveniet unde.
        Cupiditate facere quibusdam corrupti corporis sapiente itaque est molestias iure labore nemo, mollitia consectetur totam, neque doloribus quos consequatur architecto voluptatibus necessitatibus nihil accusamus? Ipsum dignissimos pariatur voluptate nostrum laboriosam?
        Cum illo ipsum nisi iste commodi hic minus doloremque beatae eum asperiores quod dolores id laborum aspernatur alias totam fuga, doloribus corrupti quaerat. Porro error, quisquam nobis sit et voluptates.
        Aut, consectetur saepe corporis non ea deleniti labore tempore reiciendis exercitationem pariatur eveniet ex eligendi hic fugit, officiis consequatur impedit? Dicta a natus possimus ab perspiciatis! Sapiente dolore unde ducimus.
        Adipisci recusandae consequatur veniam explicabo! Sequi id repudiandae unde illum quibusdam cumque earum doloribus? Ipsum voluptatem amet optio itaque rem. Error, dolor praesentium odio a architecto accusantium blanditiis nostrum eligendi!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nobis consectetur perferendis facilis, architecto doloribus nemo alias quis optio repellat accusantium impedit unde ratione magni doloremque sint, possimus voluptates eius.
        Atque est praesentium excepturi doloribus laborum tempora et possimus totam amet obcaecati quas, dicta dolorem earum quia, deleniti eos quae, accusantium ipsam voluptates inventore saepe sapiente! Architecto facere eligendi non?
        Laudantium placeat accusantium sequi suscipit quidem at eos! Sunt totam magnam nam maiores, beatae vel nihil, id debitis culpa optio porro, libero quaerat voluptatum? Unde neque iusto eligendi nisi? Provident.
        Dolorem illo odio tempora vitae voluptate facilis nam esse mollitia. Quasi voluptatum incidunt inventore, sunt iure molestiae iusto odio ab! Vero in quam ducimus laborum, maxime quas amet officia accusamus.
        Est accusantium labore officiis iste earum blanditiis ducimus praesentium ullam, saepe ipsum dicta maiores delectus unde sunt itaque a quia voluptatem! Harum tenetur aperiam nisi, sapiente quidem ut nostrum ad?
        Doloremque cupiditate itaque ratione accusantium vitae excepturi error blanditiis delectus similique id, facilis magnam minus omnis sapiente dolorum illum nemo expedita praesentium quaerat quasi sequi enim dolores nihil esse? Sapiente!
        Odit doloremque quod molestiae aperiam necessitatibus ratione distinctio nisi minus, nesciunt totam quis praesentium esse itaque quasi provident laborum repellat impedit consequatur ipsam libero modi enim aliquam. Molestiae, aperiam et.
        Dolore, ad eos. Quos suscipit provident nemo quae minus. Vitae reprehenderit voluptate, deleniti omnis tempore ad obcaecati! Delectus fugit praesentium ipsum velit, minima cumque pariatur eveniet, quaerat repudiandae perferendis eligendi.
        Esse quis molestiae debitis, illum, dolore ut obcaecati porro sunt beatae, quos ipsam in. Architecto voluptas animi mollitia velit itaque est incidunt ab ut ullam suscipit ad, quam veritatis consectetur!
        Expedita soluta optio iste. Maxime eius, reprehenderit eveniet amet ipsam odio accusantium rem unde tenetur natus assumenda exercitationem maiores tempore saepe tempora, optio, aspernatur adipisci consequatur libero! Voluptas, deleniti inventore!
        Ab consequuntur ut quae omnis perferendis accusantium quas nesciunt commodi nisi qui corporis, necessitatibus doloremque repellat fugit voluptates sapiente id distinctio, tenetur accusamus soluta debitis ipsa. Ipsum recusandae ex voluptatibus.
        Id, ab, at, dolores exercitationem vero cupiditate ut modi quibusdam qui facilis dolore debitis? Aperiam numquam, doloremque quae soluta cumque ratione nulla alias inventore magni qui veniam adipisci a pariatur?
        Possimus odio quia sed similique. Vitae ullam eligendi, sunt quidem hic nisi! Architecto hic incidunt officia. Veritatis, facilis amet placeat nam, vel magni modi repellendus eaque repellat, sit consectetur animi!
        Tempora nihil asperiores illo eveniet dignissimos sit magni itaque praesentium iste sed. Perferendis harum eligendi voluptatem impedit illo est laudantium facilis voluptate facere esse unde assumenda rerum, fuga accusamus amet!
        Magni possimus vitae ab eius! At saepe quo dolorem, in voluptas, error corporis fugiat cum quam eaque, suscipit vel dicta architecto est sequi ipsam dolorum reiciendis sed. Iste, dolore aliquam.
        Dolores, optio culpa dicta nihil ratione laudantium fugiat odit asperiores a sapiente distinctio dolorem, veritatis aperiam ab voluptas soluta velit quis provident voluptate perferendis obcaecati consectetur! Cum nam eveniet unde.
        Cupiditate facere quibusdam corrupti corporis sapiente itaque est molestias iure labore nemo, mollitia consectetur totam, neque doloribus quos consequatur architecto voluptatibus necessitatibus nihil accusamus? Ipsum dignissimos pariatur voluptate nostrum laboriosam?
        Cum illo ipsum nisi iste commodi hic minus doloremque beatae eum asperiores quod dolores id laborum aspernatur alias totam fuga, doloribus corrupti quaerat. Porro error, quisquam nobis sit et voluptates.
        Aut, consectetur saepe corporis non ea deleniti labore tempore reiciendis exercitationem pariatur eveniet ex eligendi hic fugit, officiis consequatur impedit? Dicta a natus possimus ab perspiciatis! Sapiente dolore unde ducimus.
        Adipisci recusandae consequatur veniam explicabo! Sequi id repudiandae unde illum quibusdam cumque earum doloribus? Ipsum voluptatem amet optio itaque rem. Error, dolor praesentium odio a architecto accusantium blanditiis nostrum eligendi!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nobis consectetur perferendis facilis, architecto doloribus nemo alias quis optio repellat accusantium impedit unde ratione magni doloremque sint, possimus voluptates eius.
        Atque est praesentium excepturi doloribus laborum tempora et possimus totam amet obcaecati quas, dicta dolorem earum quia, deleniti eos quae, accusantium ipsam voluptates inventore saepe sapiente! Architecto facere eligendi non?
        Laudantium placeat accusantium sequi suscipit quidem at eos! Sunt totam magnam nam maiores, beatae vel nihil, id debitis culpa optio porro, libero quaerat voluptatum? Unde neque iusto eligendi nisi? Provident.
        Dolorem illo odio tempora vitae voluptate facilis nam esse mollitia. Quasi voluptatum incidunt inventore, sunt iure molestiae iusto odio ab! Vero in quam ducimus laborum, maxime quas amet officia accusamus.
        Est accusantium labore officiis iste earum blanditiis ducimus praesentium ullam, saepe ipsum dicta maiores delectus unde sunt itaque a quia voluptatem! Harum tenetur aperiam nisi, sapiente quidem ut nostrum ad?
        Doloremque cupiditate itaque ratione accusantium vitae excepturi error blanditiis delectus similique id, facilis magnam minus omnis sapiente dolorum illum nemo expedita praesentium quaerat quasi sequi enim dolores nihil esse? Sapiente!
        Odit doloremque quod molestiae aperiam necessitatibus ratione distinctio nisi minus, nesciunt totam quis praesentium esse itaque quasi provident laborum repellat impedit consequatur ipsam libero modi enim aliquam. Molestiae, aperiam et.
        Dolore, ad eos. Quos suscipit provident nemo quae minus. Vitae reprehenderit voluptate, deleniti omnis tempore ad obcaecati! Delectus fugit praesentium ipsum velit, minima cumque pariatur eveniet, quaerat repudiandae perferendis eligendi.
        Esse quis molestiae debitis, illum, dolore ut obcaecati porro sunt beatae, quos ipsam in. Architecto voluptas animi mollitia velit itaque est incidunt ab ut ullam suscipit ad, quam veritatis consectetur!
        Expedita soluta optio iste. Maxime eius, reprehenderit eveniet amet ipsam odio accusantium rem unde tenetur natus assumenda exercitationem maiores tempore saepe tempora, optio, aspernatur adipisci consequatur libero! Voluptas, deleniti inventore!
        Ab consequuntur ut quae omnis perferendis accusantium quas nesciunt commodi nisi qui corporis, necessitatibus doloremque repellat fugit voluptates sapiente id distinctio, tenetur accusamus soluta debitis ipsa. Ipsum recusandae ex voluptatibus.
        Id, ab, at, dolores exercitationem vero cupiditate ut modi quibusdam qui facilis dolore debitis? Aperiam numquam, doloremque quae soluta cumque ratione nulla alias inventore magni qui veniam adipisci a pariatur?
        Possimus odio quia sed similique. Vitae ullam eligendi, sunt quidem hic nisi! Architecto hic incidunt officia. Veritatis, facilis amet placeat nam, vel magni modi repellendus eaque repellat, sit consectetur animi!
        Tempora nihil asperiores illo eveniet dignissimos sit magni itaque praesentium iste sed. Perferendis harum eligendi voluptatem impedit illo est laudantium facilis voluptate facere esse unde assumenda rerum, fuga accusamus amet!
        Magni possimus vitae ab eius! At saepe quo dolorem, in voluptas, error corporis fugiat cum quam eaque, suscipit vel dicta architecto est sequi ipsam dolorum reiciendis sed. Iste, dolore aliquam.
        Dolores, optio culpa dicta nihil ratione laudantium fugiat odit asperiores a sapiente distinctio dolorem, veritatis aperiam ab voluptas soluta velit quis provident voluptate perferendis obcaecati consectetur! Cum nam eveniet unde.
        Cupiditate facere quibusdam corrupti corporis sapiente itaque est molestias iure labore nemo, mollitia consectetur totam, neque doloribus quos consequatur architecto voluptatibus necessitatibus nihil accusamus? Ipsum dignissimos pariatur voluptate nostrum laboriosam?
        Cum illo ipsum nisi iste commodi hic minus doloremque beatae eum asperiores quod dolores id laborum aspernatur alias totam fuga, doloribus corrupti quaerat. Porro error, quisquam nobis sit et voluptates.
        Aut, consectetur saepe corporis non ea deleniti labore tempore reiciendis exercitationem pariatur eveniet ex eligendi hic fugit, officiis consequatur impedit? Dicta a natus possimus ab perspiciatis! Sapiente dolore unde ducimus.
        Adipisci recusandae consequatur veniam explicabo! Sequi id repudiandae unde illum quibusdam cumque earum doloribus? Ipsum voluptatem amet optio itaque rem. Error, dolor praesentium odio a architecto accusantium blanditiis nostrum eligendi!</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam nobis consectetur perferendis facilis, architecto doloribus nemo alias quis optio repellat accusantium impedit unde ratione magni doloremque sint, possimus voluptates eius.
        Atque est praesentium excepturi doloribus laborum tempora et possimus totam amet obcaecati quas, dicta dolorem earum quia, deleniti eos quae, accusantium ipsam voluptates inventore saepe sapiente! Architecto facere eligendi non?
        Laudantium placeat accusantium sequi suscipit quidem at eos! Sunt totam magnam nam maiores, beatae vel nihil, id debitis culpa optio porro, libero quaerat voluptatum? Unde neque iusto eligendi nisi? Provident.
        Dolorem illo odio tempora vitae voluptate facilis nam esse mollitia. Quasi voluptatum incidunt inventore, sunt iure molestiae iusto odio ab! Vero in quam ducimus laborum, maxime quas amet officia accusamus.
        Est accusantium labore officiis iste earum blanditiis ducimus praesentium ullam, saepe ipsum dicta maiores delectus unde sunt itaque a quia voluptatem! Harum tenetur aperiam nisi, sapiente quidem ut nostrum ad?
        Doloremque cupiditate itaque ratione accusantium vitae excepturi error blanditiis delectus similique id, facilis magnam minus omnis sapiente dolorum illum nemo expedita praesentium quaerat quasi sequi enim dolores nihil esse? Sapiente!
        Odit doloremque quod molestiae aperiam necessitatibus ratione distinctio nisi minus, nesciunt totam quis praesentium esse itaque quasi provident laborum repellat impedit consequatur ipsam libero modi enim aliquam. Molestiae, aperiam et.
        Dolore, ad eos. Quos suscipit provident nemo quae minus. Vitae reprehenderit voluptate, deleniti omnis tempore ad obcaecati! Delectus fugit praesentium ipsum velit, minima cumque pariatur eveniet, quaerat repudiandae perferendis eligendi.
        Esse quis molestiae debitis, illum, dolore ut obcaecati porro sunt beatae, quos ipsam in. Architecto voluptas animi mollitia velit itaque est incidunt ab ut ullam suscipit ad, quam veritatis consectetur!
        Expedita soluta optio iste. Maxime eius, reprehenderit eveniet amet ipsam odio accusantium rem unde tenetur natus assumenda exercitationem maiores tempore saepe tempora, optio, aspernatur adipisci consequatur libero! Voluptas, deleniti inventore!
        Ab consequuntur ut quae omnis perferendis accusantium quas nesciunt commodi nisi qui corporis, necessitatibus doloremque repellat fugit voluptates sapiente id distinctio, tenetur accusamus soluta debitis ipsa. Ipsum recusandae ex voluptatibus.
        Id, ab, at, dolores exercitationem vero cupiditate ut modi quibusdam qui facilis dolore debitis? Aperiam numquam, doloremque quae soluta cumque ratione nulla alias inventore magni qui veniam adipisci a pariatur?
        Possimus odio quia sed similique. Vitae ullam eligendi, sunt quidem hic nisi! Architecto hic incidunt officia. Veritatis, facilis amet placeat nam, vel magni modi repellendus eaque repellat, sit consectetur animi!
        Tempora nihil asperiores illo eveniet dignissimos sit magni itaque praesentium iste sed. Perferendis harum eligendi voluptatem impedit illo est laudantium facilis voluptate facere esse unde assumenda rerum, fuga accusamus amet!
        Magni possimus vitae ab eius! At saepe quo dolorem, in voluptas, error corporis fugiat cum quam eaque, suscipit vel dicta architecto est sequi ipsam dolorum reiciendis sed. Iste, dolore aliquam.
        Dolores, optio culpa dicta nihil ratione laudantium fugiat odit asperiores a sapiente distinctio dolorem, veritatis aperiam ab voluptas soluta velit quis provident voluptate perferendis obcaecati consectetur! Cum nam eveniet unde.
        Cupiditate facere quibusdam corrupti corporis sapiente itaque est molestias iure labore nemo, mollitia consectetur totam, neque doloribus quos consequatur architecto voluptatibus necessitatibus nihil accusamus? Ipsum dignissimos pariatur voluptate nostrum laboriosam?
        Cum illo ipsum nisi iste commodi hic minus doloremque beatae eum asperiores quod dolores id laborum aspernatur alias totam fuga, doloribus corrupti quaerat. Porro error, quisquam nobis sit et voluptates.
        Aut, consectetur saepe corporis non ea deleniti labore tempore reiciendis exercitationem pariatur eveniet ex eligendi hic fugit, officiis consequatur impedit? Dicta a natus possimus ab perspiciatis! Sapiente dolore unde ducimus.
        Adipisci recusandae consequatur veniam explicabo! Sequi id repudiandae unde illum quibusdam cumque earum doloribus? Ipsum voluptatem amet optio itaque rem. Error, dolor praesentium odio a architecto accusantium blanditiis nostrum eligendi!</p>
      </main>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} items={items} header={"Бургер меню"} />
    </div>
  );
}

export default App;
