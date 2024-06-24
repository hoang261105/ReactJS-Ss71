import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Bt06() {
  const languageReducer = useSelector((state: any) => {
    return state.languageReducer;
  });

  const [checkLanguage, setCheckLanguage] = useState<string>("");

  const languageValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCheckLanguage(e.target.value);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <select onChange={languageValue} name="" id="">
        <option value="Vietnamise">Vietnamise</option>
        <option value="English">English</option>
      </select>
      {checkLanguage === "English" ? (
        <p>Rikkei Academy</p>
      ) : (
        <p>Học viện Rikkei</p>
      )}
    </div>
  );
}
