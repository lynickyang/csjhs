import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useDataStore = defineStore('alldata', () => {
  const Data=
    {
      items: [
        {
          "id": 1,
          "name": "牛奶白菜",
          "description": "牛奶白菜(Milk Cabbage)，也稱為甜白菜，是一種特殊的白菜品種。相較於一般白菜葉片更加嫩軟，質地更為柔嫩。這種嫩度可以使其在烹飪過程中更易煮熟和消化。",
          "image": "https://consigli.b-cdn.net/cdn/imgarticoli/iStock-533297845.jpg",
        },
        {
          "id": 2,
          "name": "香水草莓",
          "description": "台灣產量最多的草莓就是香水草莓，香水是果皮紅中透亮、口感Q彈有嚼勁的品種，最大的特色是成熟時所散發的馥郁香氣，果實越飽滿則越香甜多汁。外型比其他品種更接近愛心圓錐狀，甜度大約8~10度，酸甜適中且果肉細緻。因為它的甜中帶點天然微酸，所以能完美得凸顯出糕點或料理的味道其實我們吃的部分是草莓的「花托」，散佈在表面的草莓籽才是真正的果實！那花托又是什麼呢？花托位於花梗頂端，是支持花朵生長的部位；草莓花授粉後，花托會肥大，形成我們平常吃到的果肉。",
          "image": "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMDQyMzAyLWltYWdlLWt3dnk1dHM4LmpwZw.jpg"
        },
        {
          "id": 3,
          "name": "薑黃",
          "description": "其根莖所磨成的深黃色粉末為咖哩的主要成份之一，也用在南洋料理，嚐起來味苦而辛，帶點土味。主成分薑黃素（curcumin）具有一些醫療保健的效果，因此薑黃也出現在中醫藥材",
          "image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Curcuma_longa_roots.jpg"
        }
      ]
  }

  const useData = ref(Data)//state

  //getters


  //actions
 

  return { Data,useData }
})
