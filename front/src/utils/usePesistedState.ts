import { useState, useEffect, Dispatch, SetStateAction } from "react";

//colocando retorno do tipo da funçao, tipando o retorno
type Response<T> = [T, Dispatch<SetStateAction<T>>];
export default function usePersistedState<T>(
  key: string,
  initialState: T
): Response<T> {
  //key:nome do estado,para gravar no local storage(necessario key) e valor padrão
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);
    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return initialState;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state)); //guardamos como json e sempre devemos tentar converter ele no json
  }, [key, state]);

  return [state, setState];
}
