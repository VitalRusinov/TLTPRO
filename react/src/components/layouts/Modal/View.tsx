import { useGetManufacturersQuery } from '../../../store/manufacturersApi.js';
import { ViewModalComponentType, ViewModalInfoType } from '../../../types';
import { toast } from 'react-toastify';
import GetErrorMessage from '../../../utils/getErrorMessage.ts';
import { useEffect } from 'react';

const View: ViewModalComponentType = ({ modalInfo, closeModal }) => {

  const { data: manufList = [], error: manufError } = useGetManufacturersQuery();

  useEffect(() => {
    if (manufError) toast.error(GetErrorMessage(manufError));
  }, [ manufError]);

  const { product } = modalInfo as ViewModalInfoType;

  return (
    <div id="remove-modal" tabIndex={-1}
      className="fixed flex top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full
      before:fixed before:w-full before:h-full before:top-0 before:right-0 before:left-0 before:z-49 before:bg-slate-400 before:bg-opacity-50
      ">
        <div className="relative w-full max-w-sm max-h-full bg-slate-100 rounded-lg shadow-lg">
          <div className="flex flex-col items-center p-5 rounded-t gap-2">
            <img src={product.photoUrl} alt="" className="w-56 h-56 object-cover"/>
            <span className="w-full text-center text-2xl font-bold">{product.name}</span>
            <span className="w-full text-left">Количество: {product.quantity}</span>
            <span className="w-full text-left">Цена: {product.price} р.</span>
            <span className="w-full text-left text-pretty">Производитель: {manufList.find((item) => item.id === product.manufacturerId)?.name}</span>
          </div>
          <form className="p-4 md:p-5">
            <div className="flex justify-end gap-3">
              <button onClick={closeModal} type="button" className="font-medium rounded-lg text-xl px-4 py-2 text-center text-neutral-200 inline-flex items-center bg-neutral-700 focus:ring-4 focus:outline-none focus:ring-neutral-500">
                Закрыть
              </button>
            </div>
          </form>
        </div>
    </div>
  );
};

export default View;
