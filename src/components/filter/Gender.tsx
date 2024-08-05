import { useSearchParams } from "react-router-dom";
import { FilterProps } from "./Size";
import { useEffect } from "react";


const Gender = ({size, setSize}: FilterProps) => {
  const [params, setParams] = useSearchParams();

  //! state her değiştiğinde urldeki parametreleri güncelle
useEffect(() => {

  if(size.length > 0){
 //SEÇİLİ ELEMAN VARSA ARALARINA , KOYUP EKLE
params.set("gender", size.join(","));
setParams(params)

}else{
 //SEÇİLİ ELEMAN YOKSA URLDEKİ PARAMETREYİ KALDIR
 params.delete("gender");
 setParams(params);
  }

}, [size]);


  //!üzerine tıklanan numara state'da yoksa ekle varsa kaldır
const toogle = (gender: string) =>{
  const found = size.includes(gender);
 
  if(!found) {
      setSize([...size, gender]);
  } else{
      setSize(size.filter((i) => i !== gender));
  }
};

return (
  <div className=''>
     <h2 className="mb-4"></h2>
     <div className="flex items-center gap-4 ">
      <input
       checked={size.includes("men")}
       onChange={() => toogle("men")} id="men" type="checkbox" />
      <label htmlFor="men" className="select-none">Erkek</label>

     </div>
     <div className="flex items-center gap-4 ">
      
      <input 
      checked={size.includes("women")}
      onChange={() => toogle("women")} id="women" type="checkbox" />
      <label htmlFor="women" className="select-none">Kadın</label>

     </div>
    

  </div>
);
}


export default Gender;
