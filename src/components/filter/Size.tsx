
import { useEffect } from 'react';
import { numbers } from '../../utils/constans';
import { useSearchParams } from 'react-router-dom';

export type FilterProps ={
    size: string[];
    setSize: React.Dispatch<React.SetStateAction<string[]>>;
}

const Size = ({size, setSize}: FilterProps) => {
    const [params, setParams] = useSearchParams();

    //! state her değiştiğinde urldeki parametreleri güncelle
useEffect(() => {

    if(size.length > 0){
   //SEÇİLİ ELEMAN VARSA ARALARINA , KOYUP EKLE
params.set("size", size.join(","));
setParams(params)

}else{
   //SEÇİLİ ELEMAN YOKSA URLDEKİ PARAMETREYİ KALDIR
   params.delete("size");
   setParams(params);
    }

}, [size]);


    //!üzerine tıklanan numara state'da yoksa ekle varsa kaldır
const toogle = (num: string) =>{
    const found = size.includes(num);
   
    if(!found) {
        setSize([...size, num]);
    } else{
        setSize(size.filter((i) => i !== num));
    }
};



  return (
    <div className='lg:mt-5'>
        <h2 className='mb-4'>Numara</h2>

        <div className='grid grid-cols-5 gap-4'>
           {numbers.map((num) => {
            const found = size.includes(num);
            return (
                <p onClick={() => toogle(num)}  className={`py-2 px-4 lg:px-0 text-center rounded-md cursor-pointer transition hover:bg-zinc-400 ${found ? "bg-gray-dark text-white" : "bg-white text-gray-dark"}`}>
                    <span>{num}</span>
                </p>
            )
           })}
        </div>
      
    </div>
  );
}

export default Size;
