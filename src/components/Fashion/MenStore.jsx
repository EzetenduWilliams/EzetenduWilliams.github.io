import "../../css/Fashion/MenStore.css"
import "../../index.css"
import { menItemStore } from "../../store/fashionStore.js"
import StoreItems from "./StoreItems"


const MenStore = () => {
  return (
    <section>
      <h1 className="top-sales h3">Top Sales For Men</h1>
      <div className="items-cards mt-3">
        {menItemStore.map(cur => (
          <StoreItems key={cur.id} {...cur} />
        ))}
      </div>
    </section>
  )
}

export default MenStore