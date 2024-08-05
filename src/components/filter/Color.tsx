import { useSearchParams } from "react-router-dom";
import { colors, numbers } from "../../utils/constans";
import{FilterProps} from "../filter/Size"
import { useEffect } from "react";

const Color = ({size, setSize}: FilterProps) => {
  const [params, setParams] = useSearchParams();

  //! state her değiştiğinde urldeki parametreleri güncelle
useEffect(() => {

  if(size.length > 0){
 //SEÇİLİ ELEMAN VARSA ARALARINA , KOYUP EKLE
params.set("color", size.join(","));
setParams(params)

}else{
 //SEÇİLİ ELEMAN YOKSA URLDEKİ PARAMETREYİ KALDIR
 params.delete("color");
 setParams(params);
  }

}, [size]);


  //!üzerine tıklanan numara state'da yoksa ekle varsa kaldır
const toogle = (color: string) =>{
  const found = size.includes(color);
 
  if(!found) {
      setSize([...size, color]);
  } else{
      setSize(size.filter((i) => i !== color));
  }
};

return (
  <div className=''>
      <h2 className='mb-4'>Renkler</h2>

      <div className='grid grid-cols-5 gap-4'>
         {colors.map((color) => {
          const found = size.includes(color.id);
          return (
              <div 
              onClick={() => toogle(color.id)}
              style={{background: color.code}}
              className={`py-2 px-4 rounded-md cursor-pointer transition hover:bg-zinc-400 text-transparent select-none ${found ? "ring-[4px]" : ""}`}
              >
                .
              </div>
          )
         })}
      </div>
    
  </div>
);
}

export default Color;
