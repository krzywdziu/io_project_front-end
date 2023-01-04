import React from "react"
import SearchList from "./SearchList";
import Header from "./Header"
import InputSearch from "./InputSearch"

class SearchContainer extends React.Component {

//temporary example of items; to be replaced by scrapped items  
  state = {
    items: [
      {
        id: 1,
        title: "Emolium DERMOCARE Emulsja do kąpieli 400ml",
        price: "49,59",
        shipping: "0",
        store: "hebe.pl",
        site: "https://www.ceneo.pl/Click/Offer/?e=mypHi6_8v8VzL7LX731tPe_tHpk2zNf4IgaBTPdAo9ChJXZgUHnszIEzWgDuQHBDVP7LvHriQ4XJhjg32-lk2A6iTQuUa7nvqRVJSlV5wsEuf3Pz95C3lNUPlmFzcd3avO7kK0gzHMkeM7_SYwk1b9Ti-foi58B38DqLhznSOPOlUEzCWQUN3boW6VCqVM5SARSBeMb0GFulUEzCWQUN3aVQTMJZBQ3d5H2IA7abohKt_WdiGu7o8k4ifGBxu12ez5ZWfqUeGYl0-NoYckmfyLndXUQJq5Qzx3gbTsNY7TlKhN2bNN3SScjBX-l6wEpw6pYt8g9CWnxVVdhSfcs60z_H4ZjbMHZt&a=2",
        img: "https://image.ceneostatic.pl/data/products/2055528/f-emolium-dermocare-emulsja-do-kapieli-400ml.jpg"
      },
      {
        id: 2,
        title: "Emolium DERMOCARE Emulsja do kąpieli 400ml",
        price: "40,19",
        shipping: "12,01",
        store: "doz.pl",
        site: "https://www.ceneo.pl/Click/Offer/?e=jKdQSLKZorJzL7LX731tPYm0GIwHYzZ6fw2-gXZHUlYEnoy6ncfQ6kBYbpVcK3Mw7Qkwiwmzbm4do9Zr8xCFnAku9V06Gfteh9KCLWknKSNuCoKYMZtwHCF9FZbNVqeV-kRvry_FTcuKKJcf1jF1TTndFQoWjwHX-c_f-ob6VlWOk9VMo64III9XzOUowv-pWp_-EcmVfLmlUEzCWQUN3aYsRvGCFqQthh3QM0f2Y8ClUEzCWQUN3aVQTMJZBQ3dedJ8OlH7UbLvHr0Fj5qAtiARacmZ04p21oA7wQTt4l3HtiNMjcJD_36AemlGlL8PFZHlupxrPorquH-ZQOEsAaGaJeITWohQS-7t6jPl2MJG82_HeUD5Vw==&a=2",
        img: "https://image.ceneostatic.pl/data/products/2055528/f-emolium-dermocare-emulsja-do-kapieli-400ml.jpg"
      },
      {
        id: 3,
        title: "Emolium DERMOCARE Emulsja do kąpieli 400ml",
        price: "37,99",
        shipping: "9,99",
        store: "superpharm.pl",
        site: "https://www.superpharm.pl/emolium-2423-400-ml-65215.html?utm_source=ceneo&utm_medium=cpc&utm_campaign=drogeria_ceneo_polecane&ceneo_cid=7d58a46e-e7a8-2c53-bc8c-06c34f4b92c9",
        img: "https://image.ceneostatic.pl/data/products/2055528/f-emolium-dermocare-emulsja-do-kapieli-400ml.jpg"
      }
    ]
   };

  render() {
    return (
      <div>
      <Header />
      <InputSearch />
      <SearchList items={this.state.items} />
    </div>
    )
  }
}
export default SearchContainer